"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { DemoButton, SectionHead } from "@/components/solutions/shared";
import { OLIVE } from "./losono-visuals";

function LosonoFaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        type="button"
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: "24px 4px",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(16px,1.8vw,19px)",
            color: "var(--fg1)",
            lineHeight: 1.35,
          }}
        >
          {q}
        </span>
        <span
          style={{
            width: 32,
            height: 32,
            flexShrink: 0,
            borderRadius: "50%",
            background: open ? OLIVE : "var(--slate-100)",
            color: open ? "#10160B" : "var(--slate-600)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all .2s",
          }}
        >
          {open ? (
            <Minus style={{ width: 18 }} aria-hidden />
          ) : (
            <Plus style={{ width: 18 }} aria-hidden />
          )}
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 420 : 0,
          overflow: "hidden",
          transition: "max-height .3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--fg2)",
            margin: "0 4px 26px",
            maxWidth: 800,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export function LosonoFaq() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    {
      q: "What is the difference between a chat agent and a voice agent in Losono?",
      a: "Both use the same underlying intelligence — the same prompts, the same knowledge base, the same RAG retrieval. A chat agent communicates via text through the REST API or embeddable widget. A voice agent communicates via real-time bidirectional audio through the WebSocket Voice API powered by Gemini Live. One platform, both channels.",
    },
    {
      q: "How does the knowledge base work?",
      a: "You upload your documents — PDFs, markdown, audio, video, and more. Losono processes each file, generates vector embeddings using Gemini Embeddings, and stores them in pgvector. When a user sends a message, Losono retrieves the most semantically relevant chunks and grounds the agent\u2019s response in that content.",
    },
    {
      q: "Can I create multiple agents for different departments?",
      a: "Yes. Losono is multi-agent by design. Each agent is fully isolated — independent prompts, knowledge bases, API keys, deployment settings, and usage tracking. You can run a customer support agent, a sales agent, and an internal knowledge agent independently under one Losono workspace.",
    },
    {
      q: "How does the Lead'em integration work?",
      a: "On any Losono agent, you can configure a pre-chat form to collect visitor details before the conversation starts. Connect your Lead\u2019em workspace and map the form fields to a Lead\u2019em campaign. Every new submission syncs automatically — lead details, ICP context, and conversation data pushed directly into your Lead\u2019em pipeline.",
    },
    {
      q: "What deployment options does Losono support?",
      a: "Three deployment channels — REST Chat API for custom integrations, WebSocket Voice API for real-time bidirectional voice, and an embeddable website widget for zero-code deployment. Each agent can be deployed across all three channels simultaneously.",
    },
    {
      q: "How is retrieval quality maintained?",
      a: "Losono uses tuned chunking strategies and Gemini Embeddings to ensure relevant context is retrieved consistently. The Playground testing environment lets you see exactly which document chunks are retrieved for any given query before you go live.",
    },
    {
      q: "Is Losono suitable for enterprise teams?",
      a: "Absolutely. Losono was designed with multi-tenant isolation, API key management, usage tracking, and Stripe-powered subscription billing from day one. Each agent deployment is production-ready with security, scalability, and access controls built in.",
    },
  ];

  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px,5vw,56px)",
          }}
        >
          <SectionHead
            align="center"
            label="FAQ"
            title="Common questions before you book a demo."
          />
        </div>
        <div>
          {faqs.map((f, i) => (
            <LosonoFaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginTop: "clamp(36px,4.5vw,52px)",
            padding: "clamp(24px,3vw,32px)",
            borderRadius: "var(--r-lg)",
            background: "var(--slate-50)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 16.5,
              fontWeight: 500,
              color: "var(--fg1)",
            }}
          >
            Still have questions?
          </span>
          <DemoButton size="md" />
        </div>
      </div>
    </section>
  );
}
