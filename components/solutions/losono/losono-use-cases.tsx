"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { DynamicLucideIcon, SectionHead } from "@/components/solutions/shared";
import {
  BetterTogether,
  LoMark,
  OLIVE,
  OLIVE_BORDER,
  OLIVE_INK,
  OLIVE_SOFT,
  OliveLabel,
} from "./losono-visuals";

export function LosonoUseCases() {
  const cards = [
    {
      icon: "headset",
      head: "24/7 AI support agents",
      body: "Deploy a support agent trained on your help docs, FAQs, and product guides. Handles common questions instantly — escalates complex issues to your team.",
      tag: "Chat & Voice",
      leadem: false,
    },
    {
      icon: "filter",
      head: "Qualify leads before your team shows up",
      body: "A sales agent that chats with website visitors, qualifies them against your ICP, captures details via pre-chat forms, and syncs them directly into Lead\u2019em campaigns.",
      tag: "Works with Lead'em",
      leadem: true,
    },
    {
      icon: "rocket",
      head: "Guide every new user to their first win",
      body: "An onboarding agent trained on your product docs that walks new users through setup, answers questions in real time, and reduces time-to-value without human intervention.",
      tag: "Chat & Voice",
      leadem: false,
    },
    {
      icon: "library",
      head: "Your team's always-on knowledge base",
      body: "An internal agent trained on your company policies, SOPs, and documentation. Any team member can ask a question and get an accurate, document-grounded answer instantly.",
      tag: "Internal Access",
      leadem: false,
    },
  ];

  return (
    <section
      style={{
        background: "var(--slate-50)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 740,
            margin: "0 auto clamp(44px,5vw,64px)",
          }}
        >
          <SectionHead
            align="center"
            label="Use Cases"
            title="One platform. Every business function."
            sub="Losono agents are purpose-built for specific roles — not general-purpose chatbots that try to do everything."
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
          }}
          className="lo-uc-grid"
        >
          {cards.map((c) => (
            <div
              key={c.head}
              className="solution-card-lift"
              style={{
                position: "relative",
                background: "var(--surface)",
                border: c.leadem
                  ? `1px solid ${OLIVE_BORDER}`
                  : "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(28px,3vw,38px)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 22,
                }}
              >
                <span
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "var(--r-md)",
                    background: "var(--accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--xo-indigo)",
                  }}
                >
                  <DynamicLucideIcon name={c.icon} style={{ width: 25 }} />
                </span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 10.5,
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    color: c.leadem ? OLIVE_INK : "var(--slate-500)",
                    background: c.leadem ? OLIVE_SOFT : "var(--slate-100)",
                    border: `1px solid ${c.leadem ? OLIVE_BORDER : "var(--border)"}`,
                    padding: "5px 11px",
                    borderRadius: "var(--r-pill)",
                  }}
                >
                  {c.tag}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: 1.25,
                  color: "var(--fg1)",
                  margin: "0 0 12px",
                }}
              >
                {c.head}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 15.5,
                  lineHeight: 1.62,
                  color: "var(--fg2)",
                  margin: 0,
                }}
              >
                {c.body}
              </p>
              {c.leadem && (
                <div style={{ marginTop: 18 }}>
                  <BetterTogether compact />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LosonoLeademSpotlight() {
  const losono = [
    "Visitor chats or speaks with your AI agent",
    "Pre-chat form captures name, company, intent",
    "Gemini scores ICP fit in real time",
  ];
  const leadem = [
    "Lead appears in your Lead\u2019em campaign",
    "ICP score and qualification attached",
    "Rep picks up where the AI left off",
  ];

  const Bullet = (t: string, accent: string) => (
    <div
      key={t}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 11,
        marginBottom: 13,
      }}
    >
      <DynamicLucideIcon
        name="check"
        style={{ width: 16, color: accent, marginTop: 3, flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 15,
          lineHeight: 1.5,
          color: "rgba(255,255,255,.82)",
        }}
      >
        {t}
      </span>
    </div>
  );

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-950)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(80% 90% at 50% 0%, rgba(70,76,159,0.3), transparent 60%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 740,
            margin: "0 auto clamp(40px,5vw,56px)",
          }}
        >
          <OliveLabel style={{ marginBottom: 18 }}>
            Native Integration
          </OliveLabel>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px,3.8vw,46px)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Losono captures the lead. Lead&apos;em works it.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "clamp(16px,2.5vw,28px)",
          }}
          className="lo-flow-panels"
        >
          <div
            style={{
              borderRadius: "var(--r-xl)",
              background: "rgba(200,227,90,.05)",
              border: `1px solid ${OLIVE_BORDER}`,
              padding: "clamp(26px,3vw,34px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 22,
              }}
            >
              <LoMark size={38} />
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                Losono
              </span>
            </div>
            {losono.map((t) => Bullet(t, OLIVE))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
            className="lo-flow-arrow"
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: OLIVE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10160B",
                boxShadow: "0 0 0 8px rgba(200,227,90,.14)",
              }}
            >
              <ArrowRight style={{ width: 22 }} aria-hidden />
            </span>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10.5,
                letterSpacing: ".1em",
                color: OLIVE,
                fontWeight: 600,
              }}
            >
              AUTO-SYNC
            </span>
          </div>
          <div
            style={{
              borderRadius: "var(--r-xl)",
              background: "rgba(70,76,159,.16)",
              border: "1px solid rgba(120,150,240,.3)",
              padding: "clamp(26px,3vw,34px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "var(--r-md)",
                  background:
                    "linear-gradient(140deg, var(--indigo-400), var(--indigo-700))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <DynamicLucideIcon name="kanban-square" style={{ width: 20 }} />
              </span>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                Lead&apos;em
              </span>
            </div>
            {leadem.map((t) => Bullet(t, "var(--indigo-300)"))}
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(40px,5vw,56px)",
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(20px,2.4vw,28px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
              color: "#fff",
              margin: "0 0 16px",
              textWrap: "balance",
            }}
          >
            The only AI agent platform that feeds directly into your sales
            pipeline.
          </h3>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 16,
              lineHeight: 1.65,
              color: "rgba(255,255,255,.66)",
              margin: "0 0 24px",
            }}
          >
            Most AI agent platforms stop at the conversation. Losono closes the
            loop — every qualified lead captured by a Losono agent syncs
            automatically into your Lead&apos;em campaign, complete with
            conversation context and ICP scoring. Your sales team picks up
            exactly where the AI left off.
          </p>
          <Link
            href="/solutions/leadem"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "Poppins, sans-serif",
              fontSize: 15.5,
              fontWeight: 600,
              color: OLIVE,
              textDecoration: "none",
            }}
          >
            See how Losono and Lead&apos;em work together{" "}
            <ArrowRight style={{ width: 16 }} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LosonoIndustries() {
  const inds = [
    [
      "layout-grid",
      "SaaS & Technology",
      "Support and onboarding agents for product-led growth",
    ],
    [
      "landmark",
      "Financial Services",
      "Compliance-aware agents trained on your policy library",
    ],
    [
      "heart-pulse",
      "Healthcare",
      "Patient-facing information agents grounded in clinical docs",
    ],
    [
      "shopping-cart",
      "E-commerce",
      "Shopping assistants with product knowledge and voice",
    ],
    [
      "graduation-cap",
      "Education & Edtech",
      "Student-facing tutoring agents trained on course materials",
    ],
    [
      "truck",
      "Logistics",
      "Internal ops agents for routing, compliance, and shipments",
    ],
    [
      "building-2",
      "Real Estate",
      "Property knowledge agents for buyer, seller, tenant queries",
    ],
    [
      "briefcase",
      "Professional Services",
      "Client-facing agents trained on offerings and case studies",
    ],
  ] as const;

  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto clamp(44px,5vw,60px)",
          }}
        >
          <SectionHead
            align="center"
            label="Industries"
            title="Built for organizations that need AI to actually work."
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
          }}
          className="lo-ind-grid"
        >
          {inds.map(([icon, name, desc]) => (
            <div
              key={name}
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(22px,2.4vw,28px)",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "var(--r-md)",
                  background: "var(--accent-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--xo-indigo)",
                  marginBottom: 16,
                }}
              >
                <DynamicLucideIcon name={icon} style={{ width: 21 }} />
              </span>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--fg1)",
                  marginBottom: 7,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "var(--fg2)",
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
