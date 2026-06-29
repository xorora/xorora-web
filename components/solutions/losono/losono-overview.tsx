"use client";

import { ArrowRight } from "lucide-react";
import { SignalField } from "@/components/geometry/signal-field";
import {
  DynamicLucideIcon,
  SectionHead,
  scrollToId,
} from "@/components/solutions/shared";
import {
  LifecycleFlow,
  LosonoFrame,
  OLIVE,
  OLIVE_BORDER,
  OLIVE_SOFT,
} from "./losono-visuals";

export function LosonoOverview() {
  const notes = [
    {
      icon: "activity",
      t: "Activity over 30 days",
      d: "Chat messages, voice minutes, and conversations over time.",
    },
    {
      icon: "users",
      t: "Agent seat management",
      d: "Track seats used across your workspace.",
    },
    {
      icon: "circle-dot",
      t: "Published vs draft status",
      d: "See which agents are live and which are still in draft.",
    },
    {
      icon: "bar-chart-3",
      t: "Traffic by agent & platform mix",
      d: "Volume per agent and your chat-to-voice split.",
    },
  ];

  return (
    <section
      id="product-overview"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-900)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(91,141,239,0.22) 0%, rgba(39,85,195,0.08) 32%, rgba(1,12,40,0) 62%)",
        }}
      />
      <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
        <SignalField />
      </div>
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
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
            label="Product Overview"
            title="One platform. Every part of the AI agent lifecycle."
            sub="Create. Train. Test. Deploy. Manage. Losono handles the entire workflow from first prompt to production-ready agent."
          />
        </div>

        <LifecycleFlow style={{ marginBottom: "clamp(48px,6vw,72px)" }} />

        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <LosonoFrame
            src="/assets/losono/dashboard.png"
            alt="Losono dashboard with activity, agent seats, status, and traffic"
            url="app.losono.ai/dashboard"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            maxWidth: 1000,
            margin: "clamp(28px,3.5vw,40px) auto 0",
          }}
          className="lo-ov-legend"
        >
          {notes.map((n) => (
            <div
              key={n.t}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "16px 18px",
                borderRadius: "var(--r-md)",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <span
                style={{
                  width: 30,
                  height: 30,
                  flexShrink: 0,
                  borderRadius: "var(--r-md)",
                  background: OLIVE_SOFT,
                  border: `1px solid ${OLIVE_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: OLIVE,
                }}
              >
                <DynamicLucideIcon name={n.icon} style={{ width: 15 }} />
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: 13.5,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {n.t}
                </div>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 12.5,
                    lineHeight: 1.45,
                    color: "rgba(255,255,255,.55)",
                  }}
                >
                  {n.d}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "clamp(40px,5vw,56px)" }}>
          <button
            type="button"
            onClick={() => scrollToId("features")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "Poppins, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: OLIVE,
              textDecoration: "none",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            See the full platform walkthrough{" "}
            <ArrowRight style={{ width: 17 }} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
