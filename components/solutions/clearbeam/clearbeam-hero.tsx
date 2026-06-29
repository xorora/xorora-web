"use client";

import { ArrowDown, Check } from "lucide-react";
import { Fragment } from "react";
import { SignalField } from "@/components/geometry/signal-field";
import { XWatermark } from "@/components/geometry/x-watermark";
import {
  BlueEyebrow,
  DemoButton,
  scrollToId,
} from "@/components/solutions/shared";
import { Button } from "@/components/ui/button";
import { EmailCard } from "./clearbeam-visuals";

export function ClearbeamHero() {
  const proof = [
    "API-First",
    "Category-Based Routing",
    "Instant Email via Resend",
    "Stripe Plan Upgrades",
  ];
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-900)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(105% 90% at 80% 36%, rgba(70,76,159,0.42) 0%, rgba(39,85,195,0.13) 32%, rgba(1,12,40,0) 64%)",
        }}
      />
      <SignalField />
      <XWatermark
        size={720}
        color="rgba(120,150,240,0.045)"
        style={{ top: -250, right: -210 }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(128px,13vw,160px) 32px clamp(72px,8vw,104px)",
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: "clamp(40px,5vw,72px)",
          alignItems: "center",
        }}
        className="cb-hero-grid"
      >
        <div>
          <BlueEyebrow style={{ marginBottom: 24 }}>
            Real-Time SaaS Event Monitoring
          </BlueEyebrow>
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px,5vw,66px)",
              lineHeight: 1.03,
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0 0 24px",
            }}
          >
            Know the moment
            <br />
            it happens.{" "}
            <span style={{ color: "var(--slate-500)" }}>
              Not the
              <br />
              morning after.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(16px,1.7vw,18px)",
              lineHeight: 1.65,
              color: "rgba(255,255,255,.72)",
              maxWidth: 540,
              margin: "0 0 34px",
            }}
          >
            Clearbeam ingests your product and revenue events via API and
            delivers instant, structured email alerts — so your team reacts in
            real time, not in batch reports.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 36,
            }}
          >
            <DemoButton size="lg" />
            <Button
              variant="onDark"
              size="lg"
              onClick={() => scrollToId("how-it-works")}
            >
              <ArrowDown style={{ width: 15 }} aria-hidden /> See how it works
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
            className="cb-hero-proof"
          >
            {proof.map((p, i) => (
              <Fragment key={p}>
                {i > 0 && (
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.28)",
                    }}
                    className="cb-proof-dot"
                  />
                )}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(255,255,255,.62)",
                  }}
                >
                  <Check
                    style={{ width: 14, color: "var(--tangerine-400)" }}
                    aria-hidden
                  />{" "}
                  {p}
                </span>
              </Fragment>
            ))}
          </div>
        </div>

        <div style={{ position: "relative" }} className="cb-hero-art">
          <div
            className="cb-hero-behind"
            style={{
              position: "absolute",
              top: -34,
              right: 4,
              width: "78%",
              transform: "rotate(-3deg)",
              opacity: 0.55,
              filter: "saturate(.8)",
            }}
          >
            <EmailCard
              cat="incident"
              subject="Payment failed — Northwind Ltd"
              fields={[
                ["Customer", "Northwind Ltd"],
                ["Amount", "$1,200"],
                ["Reason", "card_declined"],
              ]}
            />
          </div>
          <div style={{ position: "relative" }}>
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
          </div>
          <div
            className="cb-hero-float"
            style={{
              position: "absolute",
              bottom: -22,
              left: -24,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--navy-950)",
              border: "1px solid rgba(255,255,255,.14)",
              borderRadius: "var(--r-pill)",
              padding: "10px 16px",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <span style={{ position: "relative", width: 9, height: 9 }}>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "var(--success)",
                  boxShadow: "0 0 8px var(--success)",
                }}
              />
            </span>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11.5,
                color: "rgba(255,255,255,.85)",
              }}
            >
              event → inbox in &lt; 1s
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
