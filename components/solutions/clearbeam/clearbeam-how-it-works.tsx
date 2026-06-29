"use client";

import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { SignalField } from "@/components/geometry/signal-field";
import {
  DarkSection,
  DynamicLucideIcon,
  SectionHead,
  scrollToContact,
} from "@/components/solutions/shared";
import { DashboardMock } from "./clearbeam-visuals";

export function ClearbeamHowItWorks() {
  const steps = [
    {
      n: "01",
      icon: "code-2",
      head: "Send an event via API",
      body: "Drop a simple API call from your product when something happens — a signup, a payment, an error spike. Clearbeam validates and routes it instantly.",
    },
    {
      n: "02",
      icon: "folder-tree",
      head: "Map it to a category",
      body: "Events are routed to your user-defined categories — Sales, Incidents, Usage, Custom. Each category maps to structured alert templates.",
    },
    {
      n: "03",
      icon: "mail-check",
      head: "Get the email instantly",
      body: "A clean, structured email lands in your inbox with full event context — category, fields, timestamp, and delivery status tracked in your dashboard.",
    },
  ];
  return (
    <DarkSection id="how-it-works" bloom="50% 0%">
      <SignalField className="opacity-50" />
      <div style={{ position: "relative" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 740,
            margin: "0 auto clamp(48px,6vw,72px)",
          }}
        >
          <SectionHead
            align="center"
            onDark
            label="How It Works"
            title="One workflow. From event to inbox in seconds."
            sub="Clearbeam is an API-first event notifier. You send the event. We send the alert. Your team reacts before the moment passes."
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 0,
            maxWidth: 1040,
            margin: "0 auto",
          }}
          className="cb-steps"
        >
          {steps.map((s, i) => (
            <Fragment key={s.n}>
              <div
                style={{ flex: 1, padding: "0 clamp(8px,1.6vw,22px)" }}
                className="cb-step"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      width: 56,
                      height: 56,
                      flexShrink: 0,
                      borderRadius: "var(--r-lg)",
                      background: "rgba(70,76,159,.22)",
                      border: "1px solid rgba(120,150,240,.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--indigo-300)",
                    }}
                  >
                    <DynamicLucideIcon name={s.icon} style={{ width: 26 }} />
                  </span>
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 26,
                      fontWeight: 700,
                      color: "rgba(255,255,255,.18)",
                    }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: 1.25,
                    color: "#fff",
                    margin: "0 0 12px",
                  }}
                >
                  {s.head}
                </h3>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.62,
                    color: "rgba(255,255,255,.64)",
                    margin: 0,
                  }}
                >
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="cb-step-arrow"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: 16,
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight
                    style={{ width: 24, color: "rgba(255,255,255,.3)" }}
                    aria-hidden
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div
          style={{
            maxWidth: 1040,
            margin: "clamp(52px,6vw,76px) auto 0",
          }}
        >
          <DashboardMock />
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(36px,4.5vw,52px)",
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
              color: "var(--tangerine-400)",
              textDecoration: "none",
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            Book a demo to see the full workflow{" "}
            <ArrowRight style={{ width: 17 }} aria-hidden />
          </button>
        </div>
      </div>
    </DarkSection>
  );
}
