import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { SectionHead } from "@/components/solutions/shared";
import {
  CategoryListCard,
  CodeBlock,
  EmailCard,
  QuotaCard,
} from "./clearbeam-visuals";

function ClearbeamFeatureBand({
  dark,
  flip,
  eyebrow,
  headline,
  body,
  tags,
  visual,
}: {
  dark: boolean;
  flip: boolean;
  eyebrow: string;
  headline: string;
  body: string;
  tags: string[];
  visual: ReactNode;
}) {
  const bg = dark ? "var(--navy-900)" : "var(--surface)";
  const fg = dark ? "#fff" : "var(--fg1)";
  const fg2 = dark ? "rgba(255,255,255,.7)" : "var(--fg2)";
  const eb = dark ? "var(--indigo-300)" : "var(--xo-indigo)";
  const text = (
    <div style={{ flex: "1 1 0", minWidth: 0 }}>
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 12,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: eb,
          marginBottom: 16,
        }}
      >
        {eyebrow}
      </div>
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
          margin: "0 0 24px",
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
            <Check style={{ width: 13, color: eb }} aria-hidden /> {t}
          </span>
        ))}
      </div>
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
        background: bg,
        padding: "clamp(64px,8vw,104px) 32px",
      }}
    >
      {dark && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(90% 80% at ${flip ? "18%" : "82%"} 40%, rgba(70,76,159,0.28) 0%, rgba(39,85,195,0.08) 34%, rgba(1,12,40,0) 64%)`,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "clamp(36px,5.5vw,84px)",
          flexDirection: flip ? "row-reverse" : "row",
        }}
        className="cb-feat-row"
      >
        {art}
        {text}
      </div>
    </section>
  );
}

export function ClearbeamFeatures() {
  return (
    <div id="features">
      <section
        style={{
          background: "var(--surface)",
          padding: "clamp(72px,8vw,104px) 32px clamp(8px,1vw,16px)",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <SectionHead
            align="center"
            label="Core Features"
            title="Everything a lean SaaS team needs. Nothing it doesn't."
            titleSize="clamp(30px,4vw,50px)"
          />
        </div>
      </section>

      <ClearbeamFeatureBand
        dark={false}
        flip={false}
        eyebrow="Event Management"
        headline="Define your categories. Route every event to the right alert."
        body="Create user-defined event categories — Sales, Incidents, Usage, or anything custom. Every event ingested via API is typed, validated, and routed to the matching category template. No more generic alerts. Every notification arrives with exactly the context your team needs."
        tags={["Typed Events", "Custom Categories", "Strict Validation"]}
        visual={<CategoryListCard />}
      />
      <ClearbeamFeatureBand
        dark
        flip
        eyebrow="Email Delivery"
        headline="Not a daily digest. An instant signal."
        body="The moment an event hits Clearbeam's ingestion endpoint, a structured email goes out. Powered by Resend for reliable, high-deliverability transactional email. Delivery status is tracked per notification so you always know what landed and what did not."
        tags={[
          "Powered by Resend",
          "Per-Notification Tracking",
          "Delivery Status",
        ]}
        visual={
          <EmailCard
            cat="sales"
            subject="New signup — Acme Corp just joined"
            fields={[
              ["Company", "Acme Corp"],
              ["Plan", "Pro · $480/mo"],
              ["Event", "user.signup"],
              ["Time", "Today, 2:14 PM"],
            ]}
          />
        }
      />
      <ClearbeamFeatureBand
        dark={false}
        flip={false}
        eyebrow="Developer Experience"
        headline="One API call. That is the entire integration."
        body="Clearbeam's ingestion endpoint accepts typed event payloads with your API key. Secure key validation happens server-side — no secrets exposed client-side. Works with any language, any stack. Add it to your codebase in minutes."
        tags={["API Key Auth", "Any Stack", "Lightweight Integration"]}
        visual={<CodeBlock />}
      />
      <ClearbeamFeatureBand
        dark
        flip
        eyebrow="Usage and Billing"
        headline="Start free. Scale when you need to."
        body="Monthly event quotas are enforced consistently across every ingestion path. When your team is ready to scale, Stripe-powered plan upgrades are one click away. Your usage dashboard shows exactly where you stand against your current limit."
        tags={["Monthly Quotas", "Stripe Billing", "One-Click Upgrades"]}
        visual={<QuotaCard />}
      />
    </div>
  );
}
