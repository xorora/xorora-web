import type { NextRequest } from "next/server";

/**
 * Server-side proxy for the Losono chat agent.
 *
 * The browser POSTs here; we forward to Losono with the SECRET key (held in a
 * server env var, never shipped to the client) and stream the response back.
 * Losono returns an "AI SDK UI message stream", which we pass straight through.
 *
 * Unlike voice (which needs a WebSocket and a standalone host), chat is plain
 * HTTP streaming and runs fine on Vercel.
 */

const AGENT_ID = process.env.LOSONO_AGENT_ID ?? "emma";
const API_KEY = process.env.LOSONO_API_KEY;

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return new Response("Chat agent is not configured (missing LOSONO_API_KEY).", {
      status: 503,
    });
  }

  let body: {
    visitorId?: string;
    conversationId?: string;
    messages?: unknown;
  };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON body.", { status: 400 });
  }

  const upstream = await fetch(
    `https://losono.xorora.com/api/agents/${encodeURIComponent(AGENT_ID)}/chat`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mode: "chat",
        visitorId: body.visitorId,
        conversationId: body.conversationId,
        messages: body.messages,
      }),
    },
  );

  // Pass the streamed response (and conversation id) straight through.
  const headers = new Headers();
  const contentType = upstream.headers.get("Content-Type");
  if (contentType) headers.set("Content-Type", contentType);
  const conversationId = upstream.headers.get("X-Conversation-Id");
  if (conversationId) headers.set("X-Conversation-Id", conversationId);

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}
