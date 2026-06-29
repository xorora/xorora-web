"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { DemoButton, SectionHead } from "@/components/solutions/shared";

function ClearbeamFaqItem({
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
            fontSize: "clamp(17px,1.8vw,19px)",
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
            background: open ? "var(--xo-indigo)" : "var(--slate-100)",
            color: open ? "#fff" : "var(--slate-600)",
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
          maxHeight: open ? 320 : 0,
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
            maxWidth: 760,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export function ClearbeamFaq() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    {
      q: "How does Clearbeam deliver notifications?",
      a: "Clearbeam sends structured email alerts powered by Resend — a high-deliverability transactional email platform. Every notification is tracked for delivery status in your dashboard.",
    },
    {
      q: "How do I integrate Clearbeam with my product?",
      a: "One API call. Send a POST request to the Clearbeam ingestion endpoint with your API key and event payload. Works with any language or framework. Most teams are set up in under 10 minutes.",
    },
    {
      q: "What types of events can I track?",
      a: "Anything your product emits — new signups, payments, cancellations, errors, usage milestones, or custom events specific to your product. You define the categories, Clearbeam routes the alerts.",
    },
    {
      q: "How does quota enforcement work?",
      a: "Each plan tier includes a monthly event limit enforced consistently across all ingestion paths. Your dashboard shows real-time usage. When you are ready to scale, upgrade is one click via Stripe.",
    },
    {
      q: "Is Clearbeam suitable for solo founders?",
      a: "Absolutely. Clearbeam was built for lean teams. Solo founders and indie hackers are among the primary users — you get enterprise-grade event monitoring without the enterprise overhead.",
    },
  ];
  return (
    <section
      style={{
        background: "var(--slate-50)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px,5vw,56px)",
          }}
        >
          <SectionHead
            align="center"
            label="FAQ"
            title="Quick answers before you book."
          />
        </div>
        <div>
          {faqs.map((f, i) => (
            <ClearbeamFaqItem
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
            background: "var(--surface)",
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
