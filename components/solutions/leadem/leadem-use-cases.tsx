"use client";

import { ArrowRight, Check, X } from "lucide-react";
import { Fragment } from "react";
import { SignalField } from "@/components/geometry/signal-field";
import {
  DarkSection,
  DynamicLucideIcon,
  SectionHead,
} from "@/components/solutions/shared";

export function LeademUseCases() {
  const cards = [
    {
      icon: "user-plus",
      t: "LinkedIn Outreach Campaigns",
      b: "Import LinkedIn connection exports, define outreach stages, generate warming comments, and track every touchpoint from first connection to booked meeting.",
    },
    {
      icon: "calendar-days",
      t: "Conference and Event Lists",
      b: "Turn attendee exports into structured campaigns immediately after an event. Run ICP scoring to prioritise follow-up contacts first.",
    },
    {
      icon: "handshake",
      t: "Partner and Referral Pipelines",
      b: "Manage inbound referrals with shared pipeline visibility. Managers see rep activity, stage progress, and ICP fit across every referral source.",
    },
    {
      icon: "building-2",
      t: "Account-Based Outreach",
      b: "Build custom campaign types for ABM with company-level fields, contact tracking, and multi-rep collaboration on high-value accounts.",
    },
  ];

  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            marginBottom: "clamp(44px,5vw,64px)",
            maxWidth: 720,
          }}
        >
          <SectionHead
            label="Use Cases"
            title="Built for every type of B2B outreach campaign."
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
          }}
          className="le-uc-grid"
        >
          {cards.map((c) => (
            <div
              key={c.t}
              className="solution-card-lift-subtle"
              style={{
                background: "var(--slate-50)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(28px,3vw,38px)",
              }}
            >
              <span
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "var(--r-md)",
                  background: "var(--accent-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--xo-indigo)",
                  marginBottom: 22,
                }}
              >
                <DynamicLucideIcon name={c.icon} style={{ width: 24 }} />
              </span>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 21,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: "var(--fg1)",
                  margin: "0 0 12px",
                }}
              >
                {c.t}
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
                {c.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeademIndustries() {
  const inds: [string, string][] = [
    ["SaaS and Technology", "layout-grid"],
    ["Logistics and Supply Chain", "truck"],
    ["Healthcare", "heart-pulse"],
    ["Financial Services", "landmark"],
    ["Professional Services", "briefcase"],
    ["E-commerce", "shopping-cart"],
  ];

  return (
    <DarkSection bloom="50% 0%">
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.55,
          pointerEvents: "none",
        }}
      >
        <SignalField />
      </div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: 720,
          margin: "0 auto clamp(40px,5vw,56px)",
        }}
      >
        <SectionHead
          align="center"
          onDark
          label="Industries"
          title="Built for B2B. Works across every vertical."
          sub="Lead'em adapts to your industry through custom campaign schemas."
        />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          justifyContent: "center",
          maxWidth: 820,
          margin: "0 auto",
        }}
      >
        {inds.map(([name, icon]) => (
          <span
            key={name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              fontFamily: "Poppins, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "var(--r-pill)",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.14)",
            }}
          >
            <DynamicLucideIcon
              name={icon}
              style={{ width: 18, color: "var(--indigo-300)" }}
            />{" "}
            {name}
          </span>
        ))}
      </div>
    </DarkSection>
  );
}

export function LeademBeforeAfter() {
  const rows: [string, string][] = [
    ["Hours of manual CSV column mapping", "Minutes with AI-powered import"],
    [
      "Inconsistent ICP judgement in Slack",
      "Consistent AI scoring across every campaign",
    ],
    [
      "Per-campaign Google Sheets with no history",
      "One shared kanban with full audit log",
    ],
    [
      "Warming notes scattered in personal docs",
      "LinkedIn comments saved directly to leads in Lead\u2019em",
    ],
  ];

  return (
    <section
      style={{
        background: "var(--slate-50)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
          <SectionHead title="What Lead'em replaces." />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 56px 1fr",
            alignItems: "stretch",
            gap: "14px 0",
            columnGap: 0,
          }}
          className="le-ba-grid"
        >
          <div
            className="le-ba-head"
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
            BEFORE
          </div>
          <div />
          <div
            className="le-ba-head"
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
            AFTER WITH LEAD&apos;EM
          </div>
          {rows.map(([before, after]) => (
            <Fragment key={before}>
              <div
                className="le-ba-before"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "var(--surface)",
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
                  {before}
                </span>
              </div>
              <div
                className="le-ba-arrow"
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
                className="le-ba-after"
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
                  {after}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
