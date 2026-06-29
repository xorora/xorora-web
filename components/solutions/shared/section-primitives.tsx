import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { SignalRule } from "@/components/geometry/signal-rule";

export function BrowserFrame({
  src,
  alt,
  url = "app.xorora.ai",
  style,
  tilt = false,
  glow = false,
}: {
  src: string;
  alt: string;
  url?: string;
  style?: CSSProperties;
  tilt?: boolean;
  glow?: boolean;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        background: "#0C1430",
        border: "1px solid rgba(255,255,255,.10)",
        boxShadow: glow
          ? "0 40px 100px -30px rgba(70,76,159,.6), 0 20px 50px rgba(2,6,15,.5)"
          : "0 30px 70px -28px rgba(2,6,15,.55)",
        transform: tilt
          ? "perspective(1800px) rotateY(-7deg) rotateX(2deg)"
          : "none",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "11px 16px",
          background: "#070D22",
          borderBottom: "1px solid rgba(255,255,255,.07)",
        }}
      >
        <span style={{ display: "flex", gap: 7 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
            <span
              key={c}
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: c,
                opacity: 0.9,
              }}
            />
          ))}
        </span>
        <div
          style={{
            marginLeft: 10,
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "rgba(255,255,255,.06)",
              borderRadius: "var(--r-pill)",
              padding: "5px 16px",
              maxWidth: 320,
            }}
          >
            <Lock
              style={{ width: 11, color: "rgba(255,255,255,.45)" }}
              aria-hidden
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11.5,
                color: "rgba(255,255,255,.5)",
              }}
            >
              {url}
            </span>
          </div>
        </div>
        <span style={{ width: 36 }} />
      </div>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        unoptimized
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </div>
  );
}

export function SectionHead({
  label,
  title,
  sub,
  onDark,
  align = "left",
  titleSize = "clamp(32px,4.4vw,52px)",
  style,
}: {
  label?: string;
  title: string;
  sub?: string;
  onDark?: boolean;
  align?: "left" | "center";
  titleSize?: string;
  style?: CSSProperties;
}) {
  const fg = onDark ? "#fff" : "var(--fg1)";
  const subc = onDark ? "rgba(255,255,255,.66)" : "var(--fg2)";

  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? 760 : "none",
        margin: align === "center" ? "0 auto" : 0,
        ...style,
      }}
    >
      {label && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <SignalRule
            color={onDark ? "var(--tangerine-400)" : "var(--tangerine-500)"}
          />
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: onDark ? "var(--tangerine-400)" : "var(--tangerine-600)",
            }}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: titleSize,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: fg,
          margin: 0,
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 17,
            lineHeight: 1.65,
            color: subc,
            margin: "20px 0 0",
            maxWidth: 620,
            marginLeft: align === "center" ? "auto" : 0,
            marginRight: align === "center" ? "auto" : 0,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function StatBlock({
  value,
  label,
  onDark = true,
  arrow = true,
}: {
  value: string;
  label: string;
  onDark?: boolean;
  arrow?: boolean;
}) {
  const line = onDark ? "rgba(255,255,255,.16)" : "var(--border-strong)";

  return (
    <div>
      <div style={{ height: 1, background: line, marginBottom: 18 }} />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px,4.6vw,58px)",
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            color: onDark ? "#fff" : "var(--fg1)",
          }}
        >
          {value}
        </span>
        {arrow && (
          <ArrowUpRight
            style={{
              width: 26,
              height: 26,
              color: "var(--tangerine-500)",
              flexShrink: 0,
              marginTop: 4,
            }}
            aria-hidden
          />
        )}
      </div>
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 14.5,
          lineHeight: 1.45,
          color: onDark ? "rgba(255,255,255,.6)" : "var(--fg2)",
          marginTop: 16,
          maxWidth: 230,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function LightSection({
  bg = "var(--surface)",
  children,
  style,
  id,
}: {
  bg?: string;
  children: ReactNode;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={{
        background: bg,
        padding: "clamp(72px,9vw,118px) 32px",
        ...style,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

export function DarkSection({
  children,
  bloom = "70% 0%",
  style,
  id,
  pad = "clamp(72px,9vw,118px) 32px",
}: {
  children: ReactNode;
  bloom?: string;
  style?: CSSProperties;
  id?: string;
  pad?: string;
}) {
  return (
    <section
      id={id}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-900)",
        padding: pad,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(120% 90% at ${bloom}, rgba(91,141,239,0.28) 0%, rgba(39,85,195,0.10) 30%, rgba(1,12,40,0) 62%)`,
        }}
      />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}
