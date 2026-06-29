"use client";

import { Clock } from "lucide-react";
import { XWatermark } from "@/components/geometry/x-watermark";
import { DemoButton, scrollToContact } from "@/components/solutions/shared";
import { Button } from "@/components/ui/button";
import { OLIVE } from "./losono-visuals";

export function LosonoDemoBanner() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-950)",
        padding: "clamp(80px,10vw,128px) 32px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/losono/dashboard.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 120% at 50% 0%, rgba(70,76,159,0.5), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <XWatermark
        size={640}
        color="rgba(200,227,90,0.05)"
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
        <span
          style={{
            display: "inline-block",
            width: 40,
            height: 3,
            borderRadius: 2,
            background: OLIVE,
            marginBottom: 26,
          }}
        />
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(34px,5vw,62px)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0 0 22px",
            textWrap: "balance",
          }}
        >
          Your AI agents are ready to be built.
        </h2>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 18,
            lineHeight: 1.65,
            color: "rgba(255,255,255,.7)",
            maxWidth: 600,
            margin: "0 auto 36px",
          }}
        >
          Book a 30-minute demo. We will walk you through creating, training,
          and deploying your first Losono agent — live.
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
          <Clock style={{ width: 15, color: OLIVE }} aria-hidden />
          Usually responds within 24 hours. No commitment required.
        </div>
      </div>
    </section>
  );
}
