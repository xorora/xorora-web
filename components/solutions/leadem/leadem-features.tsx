import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { SignalRule } from "@/components/geometry/signal-rule";
import {
  BrowserFrame,
  DemoButton,
  DynamicLucideIcon,
  SectionHead,
  Zoomable,
} from "@/components/solutions/shared";

function Le2ImportVisual() {
  const steps = [
    { t: "Upload", d: "leads_conf_2026.xlsx", icon: "file-up", done: true },
    { t: "Analyze", d: "Gemini mapping columns", icon: "sparkles", done: true },
    { t: "Commit", d: "128 leads ready", icon: "check-check", done: false },
  ];
  const maps: [string, string, number][] = [
    ["Full Name", "prospect_name", 98],
    ["Title", "designation", 95],
    ["Company", "company", 92],
    ["Profile URL", "linkedin_url", 88],
  ];

  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        background: "#0C1430",
        border: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 30px 60px -24px rgba(2,6,15,.6)",
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
        <span
          style={{
            marginLeft: 10,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11.5,
            color: "rgba(255,255,255,.5)",
          }}
        >
          app.xorora.com/leadem/import
        </span>
      </div>
      <div style={{ padding: "clamp(20px,2.4vw,28px)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 22,
          }}
        >
          {steps.map((s, i) => (
            <Fragment key={s.t}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 13px",
                  borderRadius: "var(--r-md)",
                  background: s.done
                    ? "rgba(70,76,159,.22)"
                    : "rgba(255,255,255,.04)",
                  border: `1px solid ${s.done ? "rgba(120,150,240,.4)" : "rgba(255,255,255,.1)"}`,
                }}
              >
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: s.done
                      ? "var(--xo-indigo)"
                      : "rgba(255,255,255,.08)",
                    color: "#fff",
                  }}
                >
                  {s.done ? (
                    <Check style={{ width: 14 }} aria-hidden />
                  ) : (
                    <DynamicLucideIcon name={s.icon} style={{ width: 14 }} />
                  )}
                </span>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: 13,
                      color: "#fff",
                    }}
                  >
                    {s.t}
                  </div>
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 10,
                      color: "rgba(255,255,255,.5)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {s.d}
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight
                  style={{
                    width: 15,
                    color: "rgba(255,255,255,.3)",
                    flexShrink: 0,
                  }}
                  aria-hidden
                />
              )}
            </Fragment>
          ))}
        </div>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10.5,
            letterSpacing: ".12em",
            color: "var(--tangerine-400)",
            marginBottom: 11,
          }}
        >
          AI COLUMN MAPPING
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {maps.map(([from, to, conf]) => (
            <div
              key={to}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 18px 1fr 56px",
                alignItems: "center",
                gap: 10,
                padding: "9px 13px",
                borderRadius: "var(--r-md)",
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                  color: "rgba(255,255,255,.7)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {from}
              </span>
              <ArrowRight
                style={{ width: 13, color: "var(--indigo-300)" }}
                aria-hidden
              />
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                  color: "#fff",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {to}
              </span>
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 10.5,
                  fontWeight: 600,
                  color: conf >= 90 ? "var(--success)" : "var(--warning)",
                  textAlign: "right",
                }}
              >
                {conf}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface Le2FeatureRowProps {
  idx: number;
  category: string;
  icon: string;
  headline: string;
  body: string;
  tags: string[];
  screenshot?: string;
  alt?: string;
  url?: string;
  custom?: boolean;
  caption: string;
  flip: boolean;
  bloom: string;
}

function Le2FeatureRow({
  idx,
  category,
  icon,
  headline,
  body,
  tags,
  screenshot,
  alt,
  url,
  custom,
  caption,
  flip,
  bloom,
}: Le2FeatureRowProps) {
  const panel = (
    <div
      style={{
        flex: "1 1 0",
        minWidth: 0,
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--r-xl)",
        padding: "clamp(24px,3.2vw,42px)",
        background:
          "linear-gradient(150deg, #161D3D 0%, #1F2A63 45%, #2E47AE 82%, #3A57C9 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(85% 70% at ${bloom}, rgba(120,150,240,0.4), transparent 62%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: -50,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "repeating-radial-gradient(circle at center, rgba(255,255,255,.16) 0px, rgba(255,255,255,.16) 2px, transparent 2px, transparent 22px)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10.5,
              letterSpacing: ".12em",
              color: "rgba(255,255,255,.7)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--success)",
              }}
            />{" "}
            {caption}
          </span>
          <SignalRule color="var(--tangerine-400)" />
        </div>
        {custom ? (
          <Le2ImportVisual />
        ) : screenshot && alt ? (
          <Zoomable src={screenshot} alt={alt}>
            <BrowserFrame src={screenshot} alt={alt} url={url} />
          </Zoomable>
        ) : null}
      </div>
    </div>
  );

  const text = (
    <div style={{ flex: "1 1 0", minWidth: 0 }}>
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
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--slate-300)",
            lineHeight: 1,
          }}
        >
          {String(idx).padStart(2, "0")}
        </span>
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: "var(--r-md)",
            background: "var(--accent-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--xo-indigo)",
          }}
        >
          <DynamicLucideIcon name={icon} style={{ width: 21 }} />
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--tangerine-600)",
          }}
        >
          {category}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(23px,2.6vw,30px)",
          lineHeight: 1.16,
          letterSpacing: "-0.02em",
          color: "var(--fg1)",
          margin: "0 0 16px",
          textWrap: "balance",
        }}
      >
        {headline}
      </h3>
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 16,
          lineHeight: 1.68,
          color: "var(--fg2)",
          margin: "0 0 22px",
        }}
      >
        {body}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {tags.map((t) => (
          <span
            key={t}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontFamily: "Poppins, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--slate-700)",
              padding: "7px 14px",
              borderRadius: "var(--r-pill)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <Check
              style={{ width: 13, color: "var(--xo-indigo)" }}
              aria-hidden
            />{" "}
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="le2-feature-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(32px,4.5vw,68px)",
        flexDirection: flip ? "row-reverse" : "row",
      }}
    >
      {panel}
      {text}
    </div>
  );
}

export function LeademFeatures() {
  const feats: Omit<Le2FeatureRowProps, "idx" | "flip">[] = [
    {
      category: "Campaign Management",
      icon: "shapes",
      caption: "CAMPAIGN TYPE BUILDER",
      bloom: "70% 12%",
      headline: "Define your lead schema once. Use it across every campaign.",
      body: "Build custom campaign types with 10 field types — text, email, phone, URL, number, date, select, multi-select, checkbox and long text. Set required fields, uniqueness constraints, and choose which fields surface on kanban cards. One schema backs every campaign bound to that type.",
      tags: [
        "10 field types",
        "Required & unique fields",
        "Kanban card control",
      ],
      screenshot: "/assets/leadem/campaign.png",
      alt: "Lead\u2019em campaign type builder",
      url: "app.xorora.com/leadem/campaign-types",
    },
    {
      category: "Smart Import",
      icon: "file-up",
      caption: "AI IMPORT WIZARD",
      bloom: "30% 12%",
      headline: "Upload any spreadsheet. Lead\u2019em maps it in seconds.",
      body: "Drop in a CSV or XLSX from a conference export, LinkedIn connection list, or broker file. Lead\u2019em parses your headers, previews the rows, and uses Gemini AI to match columns against your existing schemas with confidence scores so you review before committing. What used to take an hour takes minutes.",
      tags: ["CSV & XLSX", "Gemini column mapping", "Confidence scores"],
      custom: true,
    },
    {
      category: "Pipeline Management",
      icon: "kanban-square",
      caption: "KANBAN PIPELINE",
      bloom: "70% 12%",
      headline: "See every lead. Move them forward. Track every transition.",
      body: "Each campaign renders as a drag-and-drop kanban board with auditable stage transitions. Filter by text, select, date and checkbox fields without leaving the board. Every move is logged with user and timestamp — managers always know who moved what lead and when. Optimistic UI keeps it fast on large pipelines.",
      tags: ["Drag-and-drop stages", "Inline filters", "Full audit log"],
      screenshot: "/assets/leadem/kanban.png",
      alt: "Lead\u2019em kanban pipeline view",
      url: "app.xorora.com/leadem/pipeline",
    },
    {
      category: "Lead Qualification",
      icon: "target",
      caption: "ICP SETTINGS",
      bloom: "30% 12%",
      headline: "Stop guessing who is worth your team\u2019s time.",
      body: "Define your Ideal Customer Profile once — target industries, employee range, scoring criteria and exclusion rules. Lead\u2019em uses Gemini to score every lead from 0 to 10 and return a clear TARGET, MAYBE or REJECT verdict with full reasoning. Consistent ICP application across every campaign, every rep, every time.",
      tags: [
        "0\u201310 AI scoring",
        "TARGET / MAYBE / REJECT",
        "Full reasoning",
      ],
      screenshot: "/assets/leadem/icp.png",
      alt: "Lead\u2019em ICP settings panel",
      url: "app.xorora.com/leadem/icp-settings",
    },
    {
      category: "Team Collaboration",
      icon: "messages-square",
      caption: "TEAM MESSAGES",
      bloom: "70% 12%",
      headline: "Replace the Slack pings. Keep everything in the pipeline.",
      body: "Per-lead comments with @mentions, direct messages, browser notifications and unread counts — all live. When a rep mentions you on a lead, you know instantly. Everything stays attached to the lead record where it belongs.",
      tags: ["@mentions & DMs", "Live notifications", "Per-lead threads"],
      screenshot: "/assets/leadem/messages.png",
      alt: "Lead\u2019em real-time messages view",
      url: "app.xorora.com/leadem/messages",
    },
    {
      category: "LinkedIn Outreach",
      icon: "pen-line",
      caption: "LINKEDIN COMMENT GENERATOR",
      bloom: "30% 12%",
      headline: "Draft your warm-up in seconds. Save it straight to the lead.",
      body: "Paste a LinkedIn post, optionally attach a lead for industry context, and Lead\u2019em generates a short, executive-style warming comment via Gemini. Copy it to LinkedIn or save it directly to the lead\u2019s Connection Note field inside Lead\u2019em.",
      tags: ["Gemini drafts", "Lead context", "Saves to lead"],
      screenshot: "/assets/leadem/linkedin.png",
      alt: "Lead\u2019em LinkedIn warming comment tool",
      url: "app.xorora.com/leadem/linkedin-comment",
    },
  ];

  return (
    <section
      id="features"
      style={{
        background: "var(--surface)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto clamp(52px,6.5vw,80px)",
          }}
        >
          <SectionHead
            align="center"
            label="Core Features"
            title="Built for how B2B sales teams actually work."
            titleSize="clamp(32px,4.4vw,52px)"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(60px,7.5vw,100px)",
          }}
        >
          {feats.map((f, i) => (
            <Le2FeatureRow
              key={f.headline}
              idx={i + 1}
              {...f}
              flip={i % 2 === 1}
            />
          ))}
        </div>
        <div
          style={{
            marginTop: "clamp(56px,7vw,80px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DemoButton size="lg" />
        </div>
      </div>
    </section>
  );
}

export { Le2ImportVisual, Le2FeatureRow };
