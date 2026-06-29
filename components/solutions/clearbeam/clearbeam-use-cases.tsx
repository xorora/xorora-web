"use client";

import { ArrowRight, Check, X } from "lucide-react";
import { Fragment } from "react";
import { SignalField } from "@/components/geometry/signal-field";
import {
  DarkSection,
  DynamicLucideIcon,
  SectionHead,
} from "@/components/solutions/shared";

export function ClearbeamUseCases() {
  const cards = [
    {
      icon: "trending-up",
      head: "Never miss a new customer",
      body: "Get an instant email the moment someone signs up, upgrades, or completes a purchase. React while the moment is still warm.",
      tag: "Sales & Revenue",
    },
    {
      icon: "alert-triangle",
      head: "Know about incidents before your users do",
      body: "Trigger Clearbeam alerts from your error handlers. Your team gets the signal in their inbox before support tickets start coming in.",
      tag: "Incidents & Errors",
    },
    {
      icon: "activity",
      head: "Celebrate the wins. Catch the plateaus.",
      body: "Track usage milestones, quota limits, and engagement drops. Know when a user hits a key product moment — or stops showing up.",
      tag: "Usage & Milestones",
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
            maxWidth: 720,
            margin: "0 auto clamp(44px,5vw,64px)",
          }}
        >
          <SectionHead
            align="center"
            label="Use Cases"
            title="Built for the moments that matter most."
            sub="Any critical product or revenue event is a Clearbeam event."
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
          className="cb-uc-grid"
        >
          {cards.map((c) => (
            <div
              key={c.head}
              className="solution-card-lift"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(28px,3vw,36px)",
                boxShadow: "var(--shadow-sm)",
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
                  marginBottom: 22,
                }}
              >
                <DynamicLucideIcon name={c.icon} style={{ width: 25 }} />
              </span>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--tangerine-600)",
                  marginBottom: 12,
                }}
              >
                {c.tag}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClearbeamPersonas() {
  const cards = [
    {
      icon: "rocket",
      head: "Indie Hackers & Solo Founders",
      body: "You built the product solo. Clearbeam is your always-on monitoring team. Know when someone signs up, pays, or churns — without checking five dashboards.",
    },
    {
      icon: "users",
      head: "Early-Stage SaaS Teams",
      body: "Small team, big surface area. Clearbeam routes the signals that matter to the right inboxes so your team can stay focused on building.",
    },
    {
      icon: "compass",
      head: "Product Managers",
      body: "Know when a feature gets adopted. Know when engagement drops. Real-time event data in your inbox means decisions based on what just happened, not last week.",
    },
    {
      icon: "terminal",
      head: "Engineering Teams",
      body: "Wire up your error handlers and deployment hooks. Get instant visibility into incidents, spikes, and edge cases the moment they hit production.",
    },
  ];
  return (
    <DarkSection bloom="50% 0%">
      <SignalField className="opacity-50" />
      <div style={{ position: "relative" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto clamp(40px,5vw,56px)",
          }}
        >
          <SectionHead
            align="center"
            onDark
            label="Who It's For"
            title="For any SaaS team that ships fast and needs to know faster."
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
            maxWidth: 980,
            margin: "0 auto",
          }}
          className="cb-persona-grid"
        >
          {cards.map((c) => (
            <div
              key={c.head}
              className="solution-card-hover-bg"
              style={{
                display: "flex",
                gap: 18,
                padding: "clamp(24px,2.8vw,32px)",
                borderRadius: "var(--r-lg)",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  flexShrink: 0,
                  borderRadius: "var(--r-md)",
                  background: "rgba(70,76,159,.28)",
                  border: "1px solid rgba(120,150,240,.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--indigo-300)",
                }}
              >
                <DynamicLucideIcon name={c.icon} style={{ width: 23 }} />
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  {c.head}
                </h3>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,.62)",
                    margin: 0,
                  }}
                >
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DarkSection>
  );
}

export function ClearbeamBeforeAfter() {
  const rows = [
    ["Batch reports the next morning", "Instant email the moment it happens"],
    [
      "Manual dashboard checks every hour",
      "Automated alerts for every critical event",
    ],
    ["Delayed incident discovery", "Real-time signal before users notice"],
    ["Unstructured log hunting", "Typed, categorized, trackable notifications"],
  ] as const;
  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px,5vw,56px)",
          }}
        >
          <SectionHead align="center" title="What Clearbeam replaces." />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 56px 1fr",
            alignItems: "stretch",
            rowGap: 14,
          }}
          className="cb-ba-grid"
        >
          <div
            className="cb-ba-head"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              letterSpacing: ".14em",
              color: "var(--slate-500)",
              paddingLeft: 4,
            }}
          >
            <X style={{ width: 15, color: "var(--danger)" }} aria-hidden />{" "}
            WITHOUT CLEARBEAM
          </div>
          <div />
          <div
            className="cb-ba-head"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              letterSpacing: ".14em",
              color: "var(--xo-indigo)",
              paddingLeft: 24,
            }}
          >
            <Check style={{ width: 15, color: "var(--success)" }} aria-hidden />{" "}
            WITH CLEARBEAM
          </div>
          {rows.map(([b, a]) => (
            <Fragment key={b}>
              <div
                className="cb-ba-before"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "var(--slate-50)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  padding: "22px 24px",
                }}
              >
                <X
                  style={{ width: 18, color: "var(--danger)", flexShrink: 0 }}
                  aria-hidden
                />
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 16,
                    color: "var(--slate-500)",
                    textDecoration: "line-through",
                    textDecorationColor: "var(--slate-300)",
                  }}
                >
                  {b}
                </span>
              </div>
              <div
                className="cb-ba-arrow"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowRight
                  style={{ width: 22, color: "var(--slate-400)" }}
                  aria-hidden
                />
              </div>
              <div
                className="cb-ba-after"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "var(--surface)",
                  border: "1px solid var(--accent-soft)",
                  borderRadius: "var(--r-lg)",
                  padding: "22px 24px",
                  boxShadow: "0 0 0 1px var(--accent-soft), var(--shadow-sm)",
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    flexShrink: 0,
                    borderRadius: "50%",
                    background: "var(--accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--xo-indigo)",
                  }}
                >
                  <Check style={{ width: 16 }} aria-hidden />
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--fg1)",
                  }}
                >
                  {a}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
