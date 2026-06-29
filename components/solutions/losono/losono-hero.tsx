"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";
import { SignalField } from "@/components/geometry/signal-field";
import { XWatermark } from "@/components/geometry/x-watermark";
import {
  DemoButton,
  DynamicLucideIcon,
  scrollToId,
} from "@/components/solutions/shared";
import { Button } from "@/components/ui/button";
import { LosonoFrame, OLIVE, OLIVE_BORDER, OLIVE_SOFT } from "./losono-visuals";

export function LosonoHero() {
  const proof = [
    "Multi-Agent Platform",
    "RAG-Powered by Gemini",
    "Chat & Voice Parity",
    "REST & WebSocket APIs",
    "Embeddable Widget",
  ];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-900)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(70,76,159,0.5) 0%, rgba(39,85,195,0.13) 34%, rgba(1,12,40,0) 64%)",
        }}
      />
      <SignalField />
      <XWatermark
        size={680}
        color="rgba(120,150,240,0.04)"
        style={{ top: -240, left: "50%", transform: "translateX(-50%)" }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(124px,13vw,156px) 32px clamp(64px,8vw,96px)",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: "var(--r-pill)",
              border: `1px solid ${OLIVE_BORDER}`,
              background: OLIVE_SOFT,
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: OLIVE,
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11.5,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: OLIVE,
              }}
            >
              Conversational AI Platform
            </span>
          </div>
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(34px,5.2vw,68px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0 0 24px",
              textWrap: "balance",
            }}
          >
            Build AI agents that chat, speak, listen, and{" "}
            <span style={{ color: OLIVE }}>actually know your business.</span>
          </h1>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(16px,1.8vw,19px)",
              lineHeight: 1.62,
              color: "rgba(255,255,255,.74)",
              maxWidth: 640,
              margin: "0 auto 34px",
            }}
          >
            Losono is a unified platform for creating, training, and deploying
            AI agents across chat and voice — grounded in your own knowledge
            base. From customer support to internal assistants, build
            production-ready AI without stitching together fragmented tools.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 30,
            }}
          >
            <DemoButton size="lg" />
            <Button
              variant="onDark"
              size="lg"
              onClick={() => scrollToId("product-overview")}
            >
              <ArrowDown style={{ width: 15 }} aria-hidden /> See how it works
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px,2vw,22px)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className="lo-proof"
          >
            {proof.map((p, i) => (
              <Fragment key={p}>
                {i > 0 && (
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.26)",
                    }}
                    className="lo-proof-dot"
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
                    color: "rgba(255,255,255,.64)",
                  }}
                >
                  <DynamicLucideIcon
                    name="check"
                    style={{ width: 14, color: OLIVE }}
                  />{" "}
                  {p}
                </span>
              </Fragment>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: 1080,
            margin: "clamp(48px,6vw,72px) auto 0",
          }}
          className="lo-hero-shot"
        >
          <LosonoFrame
            src="/assets/losono/dashboard.png"
            alt="Losono dashboard — usage and agent performance"
            url="app.losono.ai/dashboard"
          />
          <div
            className="lo-hero-widget"
            style={{
              position: "absolute",
              bottom: -30,
              right: -22,
              width: 180,
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              border: `1px solid ${OLIVE_BORDER}`,
              boxShadow: "0 30px 70px -24px rgba(0,0,0,.7)",
            }}
          >
            <Image
              src="/assets/losono/widget-chat.png"
              alt="Losono embeddable chat widget"
              width={360}
              height={480}
              unoptimized
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
          <div
            className="lo-hero-float"
            style={{
              position: "absolute",
              top: -22,
              left: -22,
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
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: OLIVE,
                boxShadow: `0 0 8px ${OLIVE}`,
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11.5,
                color: "rgba(255,255,255,.85)",
              }}
            >
              chat + voice · one agent
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
