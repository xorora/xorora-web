"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { Fragment } from "react";
import {
  DarkSection,
  DynamicLucideIcon,
  SectionHead,
  scrollToContact,
} from "@/components/solutions/shared";

export function LeademHowItWorks() {
  const steps = [
    {
      n: 1,
      icon: "upload-cloud",
      t: "Import your spreadsheet",
      b: "Drop in any CSV or XLSX. Lead\u2019em parses headers, previews rows, and uses AI to map columns to your campaign schema in seconds.",
      label: "Upload",
    },
    {
      n: 2,
      icon: "target",
      t: "Score every lead automatically",
      b: "Your workspace ICP profile runs against every imported lead. Gemini scores and buckets each one as TARGET, MAYBE, or REJECT with full reasoning.",
      label: "Score",
    },
    {
      n: 3,
      icon: "columns-3",
      t: "Work your pipeline",
      b: "Move leads across stages, track rep throughput, generate LinkedIn warming comments, and keep the whole team aligned on a live shared kanban.",
      label: "Execute",
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
            margin: "0 auto clamp(48px,6vw,72px)",
          }}
        >
          <SectionHead
            align="center"
            label="How It Works"
            title="From raw list to qualified pipeline in three steps."
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "stretch", gap: 0 }}
          className="le-steps"
        >
          {steps.map((s, i) => (
            <Fragment key={s.n}>
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "0 clamp(8px,2vw,24px)",
                }}
                className="le-step"
              >
                <div
                  style={{
                    position: "relative",
                    width: 76,
                    height: 76,
                    margin: "0 auto 24px",
                    borderRadius: "var(--r-lg)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--xo-indigo)",
                  }}
                >
                  <DynamicLucideIcon name={s.icon} style={{ width: 32 }} />
                  <span
                    style={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "var(--xo-indigo)",
                      color: "#fff",
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 13,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid var(--slate-50)",
                    }}
                  >
                    {s.n}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 12,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--tangerine-600)",
                    marginBottom: 12,
                  }}
                >
                  {s.label}
                </div>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    color: "var(--fg1)",
                    margin: "0 0 12px",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--fg2)",
                    margin: "0 auto",
                    maxWidth: 300,
                  }}
                >
                  {s.b}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="le-step-arrow"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: 18,
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--tangerine-500)",
                    }}
                  >
                    <ChevronRight style={{ width: 22 }} aria-hidden />
                  </span>
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "clamp(48px,6vw,68px)" }}>
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
              color: "var(--xo-indigo)",
              textDecoration: "none",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            Book a demo to see all three steps live{" "}
            <ArrowRight style={{ width: 17 }} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

export function LeademWorkspace() {
  const pills = [
    "Google OAuth Sign-in",
    "Workspace Domain Restriction",
    "Manager and Agent Roles",
    "No Extra Credentials Required",
  ];

  return (
    <DarkSection bloom="80% 50%">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px,6vw,80px)",
          alignItems: "center",
        }}
        className="le-ws-grid"
      >
        <div>
          <SectionHead
            onDark
            label="Google Workspace"
            title="Already on Google Workspace? You are already set up."
            titleSize="clamp(30px,3.8vw,46px)"
          />
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(255,255,255,.7)",
              margin: "22px 0 0",
              maxWidth: 540,
            }}
          >
            Lead&apos;em uses Google OAuth with hosted-domain validation — your
            team signs in with their existing Google Workspace accounts. No new
            passwords. No separate user management. No external contractors
            accessing your pipeline. If your company runs on Google,
            Lead&apos;em works with it from day one.
          </p>
        </div>
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {pills.map((p) => (
              <span
                key={p}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 14.5,
                  fontWeight: 500,
                  color: "#fff",
                  padding: "13px 20px",
                  borderRadius: "var(--r-pill)",
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.14)",
                }}
              >
                <DynamicLucideIcon
                  name="shield-check"
                  style={{ width: 17, color: "var(--tangerine-400)" }}
                />{" "}
                {p}
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 28,
              padding: "18px 22px",
              borderRadius: "var(--r-lg)",
              background: "rgba(70,76,159,.16)",
              border: "1px solid rgba(120,150,240,.28)",
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                flexShrink: 0,
                borderRadius: "50%",
                background: "var(--surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 1.1 8.2 3l6-6C40.5 4.6 32.7 1.5 24 1.5 11.6 1.5 1.5 11.6 1.5 24S11.6 46.5 24 46.5c11.6 0 22-8.4 22-22.5 0-1.4-.1-2.7-.5-4z"
                />
                <path
                  fill="#34A853"
                  d="M3.9 14.6l7 5.1C12.7 15.3 17.9 11 24 11c3.1 0 6 1.1 8.2 3l6-6C34.5 4.6 29.7 2.5 24 2.5 15.9 2.5 8.9 7.3 5.5 14.2z"
                  opacity="0"
                />
              </svg>
            </span>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 14.5,
                lineHeight: 1.5,
                color: "rgba(255,255,255,.85)",
              }}
            >
              Sign in with Google. Domain-restricted to{" "}
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 13,
                  color: "var(--tangerine-400)",
                }}
              >
                @yourcompany.com
              </span>{" "}
              only.
            </div>
          </div>
        </div>
      </div>
    </DarkSection>
  );
}
