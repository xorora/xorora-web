"use client";

import { Bot, Plus } from "lucide-react";
import Image from "next/image";
import { type CSSProperties, Fragment, type ReactNode } from "react";
import { DynamicLucideIcon } from "@/components/solutions/shared/lucide-icon";
import { Zoomable } from "@/components/solutions/shared/product-helpers";

export const OLIVE = "#C8E35A";
export const OLIVE_INK = "#586E16";
export const OLIVE_SOFT = "rgba(200,227,90,0.14)";
export const OLIVE_BORDER = "rgba(200,227,90,0.34)";
export const LO_PANEL = "#0E140C";

export function OliveLabel({
  children,
  onDark = true,
  style,
}: {
  children: ReactNode;
  onDark?: boolean;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 12,
        letterSpacing: ".16em",
        textTransform: "uppercase",
        color: onDark ? OLIVE : OLIVE_INK,
        ...style,
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
      {children}
    </span>
  );
}

export function LoMark({
  size = 34,
  radius = 10,
}: {
  size?: number;
  radius?: number;
}) {
  return (
    <span
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: radius,
        background: OLIVE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#10160B",
      }}
    >
      <Bot style={{ width: size * 0.56 }} aria-hidden />
    </span>
  );
}

export function LosonoFrame({
  src,
  alt,
  url = "app.losono.ai",
  style,
}: {
  src: string;
  alt: string;
  url?: string;
  style?: CSSProperties;
}) {
  return (
    <Zoomable src={src} alt={alt} style={{ borderRadius: 14, ...style }}>
      <div
        style={{
          borderRadius: 14,
          overflow: "hidden",
          background: LO_PANEL,
          border: `1px solid ${OLIVE_BORDER}`,
          boxShadow:
            "0 40px 100px -34px rgba(0,0,0,.7), 0 0 0 1px rgba(200,227,90,.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 16px",
            background: "#080C06",
            borderBottom: "1px solid rgba(255,255,255,.06)",
          }}
        >
          <span style={{ display: "flex", gap: 7 }}>
            {["#FF5F57", "#FEBC2E", OLIVE].map((c) => (
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
                background: "rgba(255,255,255,.05)",
                borderRadius: "var(--r-pill)",
                padding: "5px 16px",
              }}
            >
              <DynamicLucideIcon
                name="lock"
                style={{ width: 11, color: "rgba(255,255,255,.4)" }}
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
    </Zoomable>
  );
}

export function BetterTogether({
  style,
  compact,
}: {
  style?: CSSProperties;
  compact?: boolean;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        padding: compact ? "6px 12px" : "9px 15px",
        borderRadius: "var(--r-pill)",
        background: OLIVE_SOFT,
        border: `1px solid ${OLIVE_BORDER}`,
        fontFamily: "Poppins, sans-serif",
        fontSize: compact ? 12 : 13,
        fontWeight: 500,
        color: "#fff",
        ...style,
      }}
    >
      <DynamicLucideIcon name="link" style={{ width: 14, color: OLIVE }} />
      {compact
        ? "Captures leads into Lead\u2019em"
        : "Works with Lead\u2019em — leads sync automatically"}
    </span>
  );
}

export function AgentListCard({ style }: { style?: CSSProperties }) {
  const agents = [
    {
      name: "Support Agent",
      status: "Published",
      on: true,
      msgs: "12.4k",
      voice: true,
    },
    {
      name: "Sales Assistant",
      status: "Published",
      on: true,
      msgs: "6,210",
      voice: true,
    },
    {
      name: "Onboarding Guide",
      status: "Draft",
      on: false,
      msgs: "842",
      voice: false,
    },
  ];

  return (
    <div
      style={{
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        background: LO_PANEL,
        border: `1px solid ${OLIVE_BORDER}`,
        boxShadow: "0 30px 70px -30px rgba(0,0,0,.6)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 18px",
          borderBottom: "1px solid rgba(255,255,255,.07)",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: "#fff",
          }}
        >
          Your agents
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "Poppins, sans-serif",
            fontSize: 12.5,
            fontWeight: 600,
            color: "#10160B",
            background: OLIVE,
            padding: "5px 12px",
            borderRadius: "var(--r-md)",
          }}
        >
          <Plus style={{ width: 14 }} aria-hidden /> Create
        </span>
      </div>
      {agents.map((a, i) => (
        <div
          key={a.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "15px 18px",
            borderTop: i ? "1px solid rgba(255,255,255,.06)" : "none",
          }}
        >
          <span
            style={{
              width: 38,
              height: 38,
              flexShrink: 0,
              borderRadius: "var(--r-md)",
              background: "rgba(200,227,90,.12)",
              border: `1px solid ${OLIVE_BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: OLIVE,
            }}
          >
            <Bot style={{ width: 19 }} aria-hidden />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 14.5,
                color: "#fff",
              }}
            >
              {a.name}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 3,
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  color: "rgba(255,255,255,.5)",
                }}
              >
                {a.msgs} msgs
              </span>
              {a.voice && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 10.5,
                    color: OLIVE,
                  }}
                >
                  <DynamicLucideIcon name="mic" style={{ width: 11 }} /> voice
                </span>
              )}
            </div>
          </div>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10.5,
              fontWeight: 600,
              letterSpacing: ".06em",
              color: a.on ? OLIVE : "rgba(255,255,255,.5)",
              background: a.on ? OLIVE_SOFT : "rgba(255,255,255,.05)",
              border: `1px solid ${a.on ? OLIVE_BORDER : "rgba(255,255,255,.12)"}`,
              padding: "4px 10px",
              borderRadius: "var(--r-pill)",
            }}
          >
            {a.status.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ChatVoiceSplit({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(8px,2vw,20px)",
        ...style,
      }}
    >
      <div
        style={{
          width: "40%",
          maxWidth: 220,
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          border: `1px solid ${OLIVE_BORDER}`,
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <Image
          src="/assets/losono/widget-chat.png"
          alt="Losono chat widget"
          width={440}
          height={600}
          unoptimized
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ width: 14, height: 2, background: OLIVE_BORDER }} />
        <span
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: OLIVE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#10160B",
            boxShadow: "0 0 0 8px rgba(200,227,90,.14)",
          }}
        >
          <Bot style={{ width: 26 }} aria-hidden />
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10,
            letterSpacing: ".1em",
            color: OLIVE_INK,
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 90,
          }}
        >
          ONE AGENT
        </span>
        <span style={{ width: 14, height: 2, background: OLIVE_BORDER }} />
      </div>
      <div
        style={{
          width: "40%",
          maxWidth: 220,
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          border: `1px solid ${OLIVE_BORDER}`,
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <Image
          src="/assets/losono/widget-voice.png"
          alt="Losono voice widget"
          width={440}
          height={600}
          unoptimized
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export function CodeWidget({ style }: { style?: CSSProperties }) {
  const S = {
    punct: "rgba(255,255,255,.4)",
    key: OLIVE,
    str: "#9FD3C0",
    method: "#C3C6EC",
    kw: "#E2EFA6",
    cmt: "rgba(255,255,255,.38)",
  };

  return (
    <div style={{ position: "relative", ...style }}>
      <div
        style={{
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          background: "#0B1124",
          border: "1px solid rgba(255,255,255,.12)",
          boxShadow: "0 30px 70px -28px rgba(2,6,15,.55)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 16px",
            background: "#070D1C",
            borderBottom: "1px solid rgba(255,255,255,.07)",
          }}
        >
          <span style={{ display: "flex", gap: 7 }}>
            {["#FF5F57", "#FEBC2E", OLIVE].map((c) => (
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
          <span
            style={{
              marginLeft: 8,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11.5,
              color: "rgba(255,255,255,.5)",
            }}
          >
            chat.ts
          </span>
        </div>
        <pre
          style={{
            margin: 0,
            padding: "20px 22px",
            overflowX: "auto",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 13,
            lineHeight: 1.7,
          }}
        >
          <span style={{ color: S.cmt }}>
            {"// ask your Losono agent anything"}
          </span>
          {"\n"}
          <span style={{ color: S.kw }}>const</span> res{" "}
          <span style={{ color: S.punct }}>=</span>{" "}
          <span style={{ color: S.kw }}>await</span>{" "}
          <span style={{ color: S.method }}>fetch</span>
          <span style={{ color: S.punct }}>(</span>
          <span style={{ color: S.str }}>
            &quot;https://api.losono.ai/v1/chat&quot;
          </span>
          <span style={{ color: S.punct }}>, {"{"}</span>
          {"\n"}
          {"  "}
          <span style={{ color: S.key }}>method</span>
          <span style={{ color: S.punct }}>:</span>{" "}
          <span style={{ color: S.str }}>&quot;POST&quot;</span>
          <span style={{ color: S.punct }}>,</span>
          {"\n"}
          {"  "}
          <span style={{ color: S.key }}>headers</span>
          <span style={{ color: S.punct }}>: {"{"}</span>{" "}
          <span style={{ color: S.key }}>Authorization</span>
          <span style={{ color: S.punct }}>:</span>{" "}
          <span style={{ color: S.str }}>&quot;Bearer lo_live_•••&quot;</span>{" "}
          <span style={{ color: S.punct }}>{"}"},</span>
          {"\n"}
          {"  "}
          <span style={{ color: S.key }}>body</span>
          <span style={{ color: S.punct }}>:</span>{" "}
          <span style={{ color: S.method }}>JSON</span>
          <span style={{ color: S.punct }}>.</span>
          <span style={{ color: S.method }}>stringify</span>
          <span style={{ color: S.punct }}>({"{"}</span>{" "}
          <span style={{ color: S.key }}>agent</span>
          <span style={{ color: S.punct }}>:</span>{" "}
          <span style={{ color: S.str }}>&quot;support&quot;</span>
          <span style={{ color: S.punct }}>,</span>{" "}
          <span style={{ color: S.key }}>message</span>{" "}
          <span style={{ color: S.punct }}>{"}"})</span>
          {"\n"}
          <span style={{ color: S.punct }}>{"}"})</span>
          <span style={{ color: S.punct }}>;</span>
        </pre>
      </div>
      <div
        className="lo-widget-bubble"
        style={{
          position: "absolute",
          bottom: -22,
          right: -14,
          display: "flex",
          alignItems: "center",
          gap: 11,
          background: "#fff",
          borderRadius: "var(--r-pill)",
          padding: "10px 16px 10px 10px",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--slate-200)",
        }}
      >
        <LoMark size={32} />
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            color: "var(--xo-ink)",
          }}
        >
          Chat with us
        </span>
      </div>
    </div>
  );
}

export function LifecycleFlow({ style }: { style?: CSSProperties }) {
  const stages = [
    ["plus-circle", "Agent Creation"],
    ["database", "Knowledge Ingestion"],
    ["flask-conical", "Playground Testing"],
    ["rocket", "Publishing"],
    ["plug", "API Deployment"],
    ["bar-chart-3", "Usage Tracking"],
  ] as const;

  return (
    <div
      className="lo-flow"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 10,
        ...style,
      }}
    >
      {stages.map(([icon, label], i) => (
        <Fragment key={label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              padding: "12px 18px",
              borderRadius: "var(--r-pill)",
              background: "rgba(255,255,255,.04)",
              border: `1px solid ${OLIVE_BORDER}`,
            }}
          >
            <DynamicLucideIcon
              name={icon}
              style={{ width: 17, color: OLIVE }}
            />
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          </div>
          {i < stages.length - 1 && (
            <DynamicLucideIcon
              name="arrow-right"
              className="lo-flow-arrow"
              style={{ width: 18, color: "rgba(255,255,255,.3)" }}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function KnowledgeHub({ style }: { style?: CSSProperties }) {
  const left = [
    ["file-text", "PDF"],
    ["file", "Docs"],
    ["hash", "Markdown"],
  ] as const;
  const right = [
    ["audio-lines", "Audio"],
    ["video", "Video"],
    ["image", "Images"],
  ] as const;

  const Chip = ([icon, label]: readonly [string, string]) => (
    <div
      key={label}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "12px 16px",
        borderRadius: "var(--r-md)",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <DynamicLucideIcon name={icon} style={{ width: 18, color: OLIVE_INK }} />
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          color: "var(--fg1)",
        }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div
      className="lo-hub"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(10px,2vw,24px)",
        ...style,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {left.map(Chip)}
      </div>
      <div
        className="lo-hub-rail"
        style={{
          width: "clamp(20px,4vw,52px)",
          height: 2,
          background: `linear-gradient(90deg, transparent, ${OLIVE_BORDER})`,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            width: 84,
            height: 84,
            borderRadius: "50%",
            background: OLIVE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#10160B",
            boxShadow: "0 0 0 10px rgba(200,227,90,.16)",
          }}
        >
          <Bot style={{ width: 38 }} aria-hidden />
        </span>
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: 14.5,
            color: "var(--fg1)",
          }}
        >
          Losono Agent
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10,
            letterSpacing: ".14em",
            color: OLIVE_INK,
            fontWeight: 600,
          }}
        >
          pgvector · RAG
        </span>
      </div>
      <div
        className="lo-hub-rail"
        style={{
          width: "clamp(20px,4vw,52px)",
          height: 2,
          background: `linear-gradient(90deg, ${OLIVE_BORDER}, transparent)`,
          flexShrink: 0,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {right.map(Chip)}
      </div>
    </div>
  );
}
