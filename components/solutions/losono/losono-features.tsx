"use client";

import type { ReactNode } from "react";
import { DynamicLucideIcon, SectionHead } from "@/components/solutions/shared";
import {
  AgentListCard,
  BetterTogether,
  ChatVoiceSplit,
  CodeWidget,
  KnowledgeHub,
  LosonoFrame,
  OLIVE,
  OLIVE_INK,
  OliveLabel,
} from "./losono-visuals";

function LosonoFeatureBand({
  dark,
  flip,
  category,
  headline,
  body,
  tags,
  visual,
  badge,
  intro,
}: {
  dark: boolean;
  flip: boolean;
  category: string;
  headline: string;
  body: string;
  tags: string[];
  visual: ReactNode;
  badge?: boolean;
  intro?: boolean;
}) {
  const fg = dark ? "#fff" : "var(--fg1)";
  const fg2 = dark ? "rgba(255,255,255,.7)" : "var(--fg2)";
  const text = (
    <div style={{ flex: "1 1 0", minWidth: 0 }}>
      <OliveLabel onDark={dark} style={{ marginBottom: 16 }}>
        {category}
      </OliveLabel>
      <h3
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(24px,2.8vw,34px)",
          lineHeight: 1.14,
          letterSpacing: "-0.02em",
          color: fg,
          margin: "0 0 18px",
          textWrap: "balance",
        }}
      >
        {headline}
      </h3>
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 16.5,
          lineHeight: 1.68,
          color: fg2,
          margin: "0 0 22px",
        }}
      >
        {body}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {tags.map((t) => (
          <span
            key={t}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontFamily: "Poppins, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: dark ? "rgba(255,255,255,.82)" : "var(--slate-700)",
              padding: "7px 14px",
              borderRadius: "var(--r-pill)",
              background: dark ? "rgba(255,255,255,.05)" : "var(--surface)",
              border: `1px solid ${dark ? "rgba(255,255,255,.14)" : "var(--border)"}`,
            }}
          >
            <DynamicLucideIcon
              name="check"
              style={{ width: 13, color: dark ? OLIVE : OLIVE_INK }}
            />{" "}
            {t}
          </span>
        ))}
      </div>
      {badge && (
        <div style={{ marginTop: 22 }}>
          <BetterTogether />
        </div>
      )}
    </div>
  );
  const art = (
    <div style={{ flex: "1 1 0", minWidth: 0, position: "relative" }}>
      {visual}
    </div>
  );

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: dark ? "var(--navy-900)" : "var(--surface)",
        padding: "clamp(64px,8vw,100px) 32px",
      }}
    >
      {dark && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(85% 80% at ${flip ? "18%" : "82%"} 42%, rgba(70,76,159,0.24), transparent 62%)`,
          }}
        />
      )}
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
        {intro && (
          <div
            style={{
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto clamp(48px,6vw,72px)",
            }}
          >
            <SectionHead
              align="center"
              onDark={dark}
              label="Core Capabilities"
              title="Everything your AI agents need. Nothing they don't."
              titleSize="clamp(30px,4vw,50px)"
            />
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(36px,5.5vw,84px)",
            flexDirection: flip ? "row-reverse" : "row",
          }}
          className="lo-feat-row"
        >
          {art}
          {text}
        </div>
      </div>
    </section>
  );
}

export function LosonoFeatures() {
  return (
    <div id="features">
      <LosonoFeatureBand
        dark
        flip={false}
        intro
        category="Agent Platform"
        headline="One platform. Multiple specialized agents."
        body="Create purpose-built agents for different business functions — a customer support agent, a sales assistant, an onboarding guide, an internal knowledge tool. Each has independent prompts, knowledge bases, deployment settings, API credentials, and usage tracking. No cross-contamination. No operational overhead."
        tags={[
          "Multi-Tenant Isolation",
          "Independent Configs",
          "Role-Based Access",
        ]}
        visual={<AgentListCard />}
      />
      <LosonoFeatureBand
        dark={false}
        flip
        category="Knowledge Grounding"
        headline="Your agent answers from your documents. Not from guesswork."
        body="Upload PDFs, documents, markdown, images, audio, and video. Losono processes each file, generates embeddings using Gemini, and stores vector representations in pgvector for semantic retrieval. Every response is grounded in your actual content — not model memory. Fewer hallucinations. More accuracy. Answers your team can trust."
        tags={[
          "pgvector Semantic Search",
          "Gemini Embeddings",
          "Multi-Format Ingestion",
        ]}
        visual={<KnowledgeHub />}
      />
      <LosonoFeatureBand
        dark
        flip={false}
        category="Agent Intelligence"
        headline="Configure how your agent thinks, speaks, and responds."
        body="Write custom system instructions that define your agent's persona, tone, expertise boundaries, and response formatting. A live prompt preview panel shows exactly what your agent sees — the system prompt layer, user instructions, and retrieved document context — before you ever send a single message."
        tags={[
          "System Prompt Layer",
          "Live Retrieval Preview",
          "Tone & Persona Control",
        ]}
        visual={
          <LosonoFrame
            src="/assets/losono/prompt.png"
            alt="Losono prompt configuration with live preview"
            url="app.losono.ai/prompt"
          />
        }
      />
      <LosonoFeatureBand
        dark={false}
        flip
        category="Deployment Channels"
        headline="The same intelligence across every conversation channel."
        body="Losono provides the same RAG-powered intelligence layer across both text and voice. Deploy a chat widget on your website and a voice agent on your phone system — they share the same knowledge base, the same prompts, and the same response quality. No separate stacks. No diverging experiences. One agent, everywhere."
        tags={[
          "Real-Time Chat Streaming",
          "WebSocket Voice API",
          "Gemini Live Voice",
          "Unified Knowledge",
        ]}
        visual={<ChatVoiceSplit />}
      />
      <LosonoFeatureBand
        dark
        flip={false}
        badge
        category="Lead Intelligence"
        headline="Collect visitor context before the conversation starts."
        body="Configure pre-chat forms to capture visitor details before they engage with chat or voice. Responses are saved and included in the agent's context — so every conversation starts with the right information. Connect directly to Lead'em to export pre-chat leads into active sales campaigns, syncing automatically once field mapping is complete."
        tags={[
          "Pre-Chat Form Builder",
          "Lead'em CRM Integration",
          "Automatic Campaign Sync",
          "Bulk Export",
        ]}
        visual={
          <LosonoFrame
            src="/assets/losono/forms.png"
            alt="Losono pre-chat forms with Lead'em sync"
            url="app.losono.ai/forms"
          />
        }
      />
      <LosonoFeatureBand
        dark={false}
        flip
        category="Developer Platform"
        headline="Deploy anywhere. Integrate with anything."
        body="Three deployment channels — a REST Chat API for custom implementations, a WebSocket Voice API for real-time bidirectional voice, and an embeddable website widget for zero-code deployment. Generate API keys per agent with granular access controls. A production-ready publishing workflow with draft and live state management."
        tags={[
          "REST Chat API",
          "WebSocket Voice API",
          "Embeddable Widget",
          "API Key Management",
        ]}
        visual={<CodeWidget />}
      />
    </div>
  );
}
