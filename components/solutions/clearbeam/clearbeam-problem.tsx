"use client";

import { SignalRule } from "@/components/geometry/signal-rule";
import { DynamicLucideIcon } from "@/components/solutions/shared";

export function ClearbeamProblem() {
  const cards = [
    {
      icon: "clock-alert",
      tag: "LATE DISCOVERY",
      head: "Delayed awareness",
      body: "Critical events like new signups, failed payments, and usage spikes show up in batch reports — hours or days after they happened. By then, the window to act has already closed.",
    },
    {
      icon: "list-x",
      tag: "NO STRUCTURE",
      head: "Untyped, untracked events",
      body: "Log files and analytics dashboards require someone to go looking. There is no push signal when something important happens — your team has to pull the data themselves.",
    },
    {
      icon: "layout-grid",
      tag: "TOOL OVERLOAD",
      head: "Too many places to check",
      body: "Checking Stripe, your database, your analytics tool, and your error tracker every morning is not a monitoring strategy. It is overhead that slows your team down.",
    },
  ];
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--slate-50)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.5,
          backgroundImage:
            "linear-gradient(var(--slate-200) 1px, transparent 1px), linear-gradient(90deg, var(--slate-200) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 72%)",
          maskImage:
            "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 72%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto clamp(44px,5vw,64px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 22,
            }}
          >
            <SignalRule color="var(--tangerine-500)" />
          </div>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px,4vw,48px)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "var(--fg1)",
              margin: "0 0 18px",
              textWrap: "balance",
            }}
          >
            Your critical events are happening. Is your team seeing them?
          </h2>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--fg2)",
              margin: 0,
            }}
          >
            Most SaaS teams discover important events in the morning standup —
            hours after they happened.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
          className="cb-prob-grid"
        >
          {cards.map((c, i) => (
            <div
              key={c.tag}
              className="solution-card-lift"
              style={{
                position: "relative",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(26px,2.6vw,34px)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 24,
                  right: 26,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--slate-300)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--r-md)",
                  background: "var(--accent-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--xo-indigo)",
                  marginBottom: 20,
                }}
              >
                <DynamicLucideIcon name={c.icon} style={{ width: 23 }} />
              </span>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11.5,
                  letterSpacing: ".14em",
                  color: "var(--tangerine-600)",
                  marginBottom: 10,
                }}
              >
                {c.tag}
              </div>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 19,
                  color: "var(--fg1)",
                  margin: "0 0 12px",
                }}
              >
                {c.head}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 15,
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
        <p
          style={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(19px,2.3vw,25px)",
            letterSpacing: "-0.01em",
            color: "var(--xo-indigo)",
            margin: "clamp(44px,5vw,60px) auto 0",
            maxWidth: 680,
            textWrap: "balance",
          }}
        >
          Clearbeam sends the signal directly to your inbox the moment it
          happens.
        </p>
      </div>
    </section>
  );
}
