// Losono voice WebSocket proxy (standalone service).
//
// WHY THIS EXISTS: the Losono voice API authenticates with a *secret* key
// (losono_sk_...). That key must never ship to the browser. This proxy holds
// the key server-side and transparently relays WebSocket frames between the
// browser and Losono, so the browser never sees the secret.
//
// WHY IT IS NOT IN THE NEXT.JS APP: Vercel serverless/edge functions cannot
// host a persistent WebSocket server. Deploy this to a Node host that can
// (Railway, Render, Fly.io, a VPS, etc.). See README.md.

import http from "node:http";
import { WebSocket, WebSocketServer } from "ws";

const PORT = process.env.PORT || 8787;
const API_KEY = process.env.LOSONO_API_KEY;
const AGENT_ID = process.env.LOSONO_AGENT_ID || "emma";
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

if (!API_KEY) {
  console.error("Missing LOSONO_API_KEY env var. Refusing to start.");
  process.exit(1);
}

const upstreamUrl = () =>
  `wss://losono.xorora.com/api/agents/${encodeURIComponent(
    AGENT_ID,
  )}/voice?mode=deploy&apiKey=${encodeURIComponent(API_KEY)}`;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("ok");
    return;
  }
  res.writeHead(426, { "content-type": "text/plain" });
  res.end("Upgrade Required");
});

const wss = new WebSocketServer({
  server,
  // Only let the browser origins you trust use this relay, otherwise anyone
  // could use it as a free voice gateway on your key.
  verifyClient: ({ origin }, done) => {
    if (ALLOWED_ORIGINS.length === 0) return done(true); // dev only
    if (origin && ALLOWED_ORIGINS.includes(origin)) return done(true);
    console.warn("Rejected WS origin:", origin);
    done(false, 403, "Forbidden origin");
  },
});

wss.on("connection", (client) => {
  const upstream = new WebSocket(upstreamUrl());
  const pending = [];
  let upstreamOpen = false;

  upstream.on("open", () => {
    upstreamOpen = true;
    for (const msg of pending) upstream.send(msg.data, { binary: msg.binary });
    pending.length = 0;
  });

  // browser -> Losono
  client.on("message", (data, isBinary) => {
    if (upstreamOpen) upstream.send(data, { binary: isBinary });
    else pending.push({ data, binary: isBinary });
  });

  // Losono -> browser
  upstream.on("message", (data, isBinary) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data, { binary: isBinary });
    }
  });

  const closeBoth = () => {
    try {
      client.close();
    } catch {}
    try {
      upstream.close();
    } catch {}
  };

  client.on("close", closeBoth);
  client.on("error", closeBoth);
  upstream.on("close", closeBoth);
  upstream.on("error", (err) => {
    console.error("Upstream error:", err.message);
    closeBoth();
  });
});

server.listen(PORT, () => {
  console.log(
    `Losono voice proxy listening on :${PORT} (agent=${AGENT_ID}, origins=${
      ALLOWED_ORIGINS.join(",") || "ALL — dev only"
    })`,
  );
});
