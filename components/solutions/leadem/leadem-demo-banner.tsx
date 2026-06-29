"use client";

import { Clock } from "lucide-react";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { DemoButton, scrollToContact } from "@/components/solutions/shared";
import { Button } from "@/components/ui/button";

export function LeademDemoBanner() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-950)",
        padding: "clamp(72px,9vw,112px) 32px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 120% at 50% 0%, rgba(70,76,159,0.45), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <XWatermark
        size={620}
        color="rgba(120,150,240,0.05)"
        style={{ bottom: -300, left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <SignalRule
          color="var(--tangerine-400)"
          className="mb-[26px] justify-center"
        />
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px,4.6vw,56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "#fff",
            margin: "0 0 22px",
            textWrap: "balance",
          }}
        >
          See Lead&apos;em in action. Book a 30-minute demo.
        </h2>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 18,
            lineHeight: 1.65,
            color: "rgba(255,255,255,.68)",
            maxWidth: 600,
            margin: "0 auto 36px",
          }}
        >
          We will walk you through the full pipeline — from importing your first
          spreadsheet to scoring leads with AI and managing your team&apos;s
          outreach in real time. No slides. No sales pitch. Just the product.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 22,
          }}
        >
          <DemoButton size="lg" />
          <Button variant="onDark" size="lg" onClick={scrollToContact}>
            Talk to the Team
          </Button>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            fontFamily: "Poppins, sans-serif",
            fontSize: 14,
            color: "rgba(255,255,255,.55)",
          }}
        >
          <Clock
            style={{ width: 15, color: "var(--tangerine-400)" }}
            aria-hidden
          />
          Usually responds within 24 hours. No commitment required.
        </div>
      </div>
    </section>
  );
}
