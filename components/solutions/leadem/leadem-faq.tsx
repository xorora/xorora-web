"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { DemoButton, SectionHead } from "@/components/solutions/shared";

function Faq2Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "var(--surface)",
        border: `1px solid ${open ? "var(--accent-soft)" : "var(--border)"}`,
        borderRadius: "var(--r-lg)",
        boxShadow: open
          ? "0 0 0 1px var(--accent-soft), var(--shadow-sm)"
          : "none",
        transition: "border-color .18s, box-shadow .18s",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: "20px 22px",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 16.5,
            color: "var(--fg1)",
            lineHeight: 1.35,
          }}
        >
          {q}
        </span>
        <span
          style={{
            width: 30,
            height: 30,
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
            <Minus style={{ width: 17 }} aria-hidden />
          ) : (
            <Plus style={{ width: 17 }} aria-hidden />
          )}
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 360 : 0,
          overflow: "hidden",
          transition: "max-height .3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 15,
            lineHeight: 1.68,
            color: "var(--fg2)",
            margin: "0 22px 22px",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export function LeademFaq() {
  const faqs = [
    {
      q: "Does Lead\u2019em work with any Google Workspace account?",
      a: "Yes. Any Google Workspace account with a verified company domain can sign in. Lead\u2019em restricts sign-in to your configured workspace domain so only your team gets access.",
    },
    {
      q: "What file formats does the import support?",
      a: "Lead\u2019em supports CSV and XLSX. Upload any spreadsheet — conference exports, LinkedIn connection lists, broker files — and the AI will map your columns to the right schema.",
    },
    {
      q: "How does the ICP scoring work?",
      a: "You define your ICP profile once — target industries, employee range, scoring criteria and exclusion rules. Lead\u2019em uses Gemini AI to evaluate each lead against your profile and returns a score from 0 to 10 with a TARGET, MAYBE or REJECT verdict and full reasoning.",
    },
    {
      q: "Do reps need to leave LinkedIn to use the warming comment tool?",
      a: "No. Reps paste the LinkedIn post text into Lead\u2019em, generate a warming comment, copy it, and post it on LinkedIn manually. The result saves back to the lead record inside Lead\u2019em.",
    },
    {
      q: "Is real-time collaboration available?",
      a: "Yes. @mentions, direct messages and browser notifications are all live. Notifications are stored and delivered even in environments without Pusher configured.",
    },
    {
      q: "How is Lead\u2019em different from Salesforce or HubSpot?",
      a: "Lead\u2019em is built specifically for Google Workspace teams running manual LinkedIn and list-based outreach. Lighter, faster to set up, and includes AI-powered import and ICP scoring that enterprise CRMs charge separately for — or do not offer at all.",
    },
  ];
  const colA = faqs.filter((_, i) => i % 2 === 0);
  const colB = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section
      style={{
        background: "var(--slate-50)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px,5vw,56px)",
          }}
        >
          <SectionHead
            align="center"
            label="FAQ"
            title="Questions before you book a demo?"
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            alignItems: "start",
          }}
          className="le2-faq-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {colA.map((f) => (
              <Faq2Item key={f.q} {...f} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {colB.map((f) => (
              <Faq2Item key={f.q} {...f} />
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginTop: "clamp(36px,4.5vw,52px)",
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
