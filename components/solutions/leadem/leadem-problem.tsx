"use client";

import { SignalRule } from "@/components/geometry/signal-rule";
import { DynamicLucideIcon } from "@/components/solutions/shared";

export function LeademProblem() {
  const cards = [
    {
      icon: "table-2",
      tag: "SPREADSHEET CHAOS",
      body: "One Google Sheet per campaign. Different column names every time. No shared pipeline. No history of who moved what lead or when.",
    },
    {
      icon: "file-stack",
      tag: "IMPORT HELL",
      body: "Every list from a conference, LinkedIn export, or partner referral needs hours of manual column cleanup before a single rep can start outreach.",
    },
    {
      icon: "target",
      tag: "ICP GUESSWORK",
      body: "ICP fit is judged in Slack threads. Qualifying criteria changes rep to rep. Nobody is working from the same definition of a good lead.",
    },
    {
      icon: "eye-off",
      tag: "ZERO VISIBILITY",
      body: "Managers have no daily signal on rep throughput. There is no pipeline history. Collaboration means copying rows into yet another sheet.",
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
      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(44px,5vw,64px)",
          }}
        >
          <SignalRule
            color="var(--tangerine-500)"
            className="mb-[22px] justify-center"
          />
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(34px,4.6vw,56px)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              color: "var(--fg1)",
              margin: "0 0 18px",
            }}
          >
            Sound familiar?
          </h2>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--fg2)",
              margin: "0 auto",
              maxWidth: 560,
            }}
          >
            If your sales team lives in Google Sheets, you already know the
            pain.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
          }}
          className="le-pain-grid"
        >
          {cards.map((c, i) => (
            <div
              key={c.tag}
              className="solution-card-lift"
              style={{
                position: "relative",
                overflow: "hidden",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(28px,3vw,38px)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 26,
                  right: 28,
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
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                  letterSpacing: ".14em",
                  color: "var(--tangerine-600)",
                  marginBottom: 12,
                }}
              >
                {c.tag}
              </div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--fg2)",
                  margin: 0,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            margin: "clamp(44px,5vw,60px) auto 0",
          }}
        >
          <span
            style={{
              height: 1,
              flex: "0 1 80px",
              background: "var(--border-strong)",
            }}
          />
          <p
            style={{
              textAlign: "center",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(20px,2.4vw,26px)",
              letterSpacing: "-0.01em",
              color: "var(--fg1)",
              margin: 0,
            }}
          >
            Lead&apos;em was built to fix{" "}
            <span style={{ color: "var(--xo-indigo)" }}>exactly this.</span>
          </p>
          <span
            style={{
              height: 1,
              flex: "0 1 80px",
              background: "var(--border-strong)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
