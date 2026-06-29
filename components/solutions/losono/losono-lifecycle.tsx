"use client";

import { ArrowRight } from "lucide-react";
import {
  DynamicLucideIcon,
  SectionHead,
  scrollToContact,
} from "@/components/solutions/shared";
import { OLIVE, OLIVE_BORDER, OLIVE_SOFT } from "./losono-visuals";

export function LosonoLifecycle() {
  const steps = [
    {
      n: "01",
      icon: "plus-circle",
      head: "Create your agent",
      body: "Name your agent, set its purpose, and configure basic settings. Each agent is fully isolated with its own credentials.",
    },
    {
      n: "02",
      icon: "square-code",
      head: "Write the system prompt",
      body: "Define how your agent thinks, what it knows, and how it communicates. The live preview shows exactly what the model receives.",
    },
    {
      n: "03",
      icon: "database",
      head: "Build the knowledge base",
      body: "Upload your documents — PDFs, markdown, audio, video. Losono ingests, chunks, embeds, and indexes everything.",
    },
    {
      n: "04",
      icon: "flask-conical",
      head: "Test in the Playground",
      body: "Send messages and voice prompts in the sandbox. See retrieved context, response quality, and flow before going live.",
    },
    {
      n: "05",
      icon: "rocket",
      head: "Publish and deploy",
      body: "Set your agent live via REST API, WebSocket voice, or embeddable widget. API keys generated per deployment.",
    },
    {
      n: "06",
      icon: "bar-chart-3",
      head: "Monitor and optimize",
      body: "Track chat messages, voice minutes, conversation volume, and performance in the dashboard. Usage billing per tier.",
    },
  ];

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
            "radial-gradient(90% 70% at 50% 0%, rgba(70,76,159,0.22), transparent 60%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto clamp(48px,6vw,72px)",
          }}
        >
          <SectionHead
            align="center"
            onDark
            label="Agent Lifecycle"
            title="From first prompt to production agent in six steps."
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "clamp(12px,1.6vw,22px)",
          }}
          className="lo-life-grid"
        >
          {steps.map((s, i) => (
            <div key={s.n}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    width: 46,
                    height: 46,
                    flexShrink: 0,
                    borderRadius: "50%",
                    background: OLIVE_SOFT,
                    border: `1px solid ${OLIVE_BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: OLIVE,
                  }}
                >
                  <DynamicLucideIcon name={s.icon} style={{ width: 21 }} />
                </span>
                {i < steps.length - 1 && (
                  <span
                    className="lo-life-line"
                    style={{
                      flex: 1,
                      height: 2,
                      marginLeft: 6,
                      background:
                        "linear-gradient(90deg, rgba(200,227,90,.35), rgba(200,227,90,.08))",
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: ".1em",
                  color: OLIVE,
                  marginBottom: 8,
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  lineHeight: 1.25,
                  color: "#fff",
                  margin: "0 0 10px",
                }}
              >
                {s.head}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,.6)",
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(44px,5.5vw,64px)",
          }}
        >
          <button
            type="button"
            onClick={scrollToContact}
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
            Book a demo to walk through all six steps live{" "}
            <ArrowRight style={{ width: 17 }} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
