import { ArrowUpRight, CheckCheck, Lock, Plus, Send } from "lucide-react";
import type { CSSProperties } from "react";
import { DynamicLucideIcon } from "@/components/solutions/shared/lucide-icon";

type EmailCategory = "sales" | "incident" | "usage";

const CAT: Record<
  EmailCategory,
  { label: string; color: string; soft: string; border: string; icon: string }
> = {
  sales: {
    label: "Sales Event",
    color: "var(--indigo-400)",
    soft: "rgba(107,112,182,.16)",
    border: "rgba(120,150,240,.4)",
    icon: "trending-up",
  },
  incident: {
    label: "Incident Alert",
    color: "var(--tangerine-500)",
    soft: "rgba(242,107,33,.14)",
    border: "rgba(242,107,33,.4)",
    icon: "alert-triangle",
  },
  usage: {
    label: "Usage Event",
    color: "var(--success)",
    soft: "rgba(46,158,107,.16)",
    border: "rgba(46,158,107,.4)",
    icon: "activity",
  },
};

export function CbMark({
  size = 34,
  radius = 9,
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
        background:
          "linear-gradient(140deg, var(--indigo-400), var(--indigo-700))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        boxShadow: "0 4px 12px -4px rgba(70,76,159,.6)",
      }}
    >
      <Send style={{ width: size * 0.5 }} aria-hidden />
    </span>
  );
}

export function EmailCard({
  cat = "sales",
  subject,
  fields,
  width,
  style,
  dim = false,
}: {
  cat?: EmailCategory;
  subject: string;
  fields: [string, string][];
  width?: string | number;
  style?: CSSProperties;
  dim?: boolean;
}) {
  const c = CAT[cat];
  return (
    <div
      style={{
        width,
        background: "#fff",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--slate-200)",
        boxShadow: "0 30px 70px -28px rgba(2,6,15,.5)",
        overflow: "hidden",
        opacity: dim ? 0.92 : 1,
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "15px 18px",
          borderBottom: "1px solid var(--slate-100)",
        }}
      >
        <CbMark size={36} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: 14.5,
              color: "var(--xo-ink)",
            }}
          >
            Clearbeam
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11.5,
              color: "var(--slate-500)",
            }}
          >
            alerts@clearbeam.io
          </div>
        </div>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            color: "var(--slate-400)",
          }}
        >
          now
        </span>
      </div>
      <div style={{ padding: "20px 18px 16px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10.5,
            fontWeight: 600,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: c.color,
            background: c.soft,
            border: `1px solid ${c.border}`,
            padding: "4px 11px",
            borderRadius: "var(--r-pill)",
            marginBottom: 14,
          }}
        >
          <DynamicLucideIcon name={c.icon} style={{ width: 13 }} /> {c.label}
        </span>
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            lineHeight: 1.3,
            color: "var(--xo-ink)",
            margin: "0 0 16px",
            letterSpacing: "-0.01em",
          }}
        >
          {subject}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            borderRadius: "var(--r-md)",
            border: "1px solid var(--slate-200)",
            overflow: "hidden",
          }}
        >
          {fields.map(([k, v], i) => (
            <div
              key={k}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "10px 14px",
                background: i % 2 ? "var(--slate-50)" : "#fff",
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                  color: "var(--slate-500)",
                }}
              >
                {k}
              </span>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 13.5,
                  color: "var(--xo-ink)",
                }}
              >
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          borderTop: "1px solid var(--slate-100)",
          background: "var(--slate-50)",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "Poppins, sans-serif",
            fontSize: 12,
            color: "var(--slate-500)",
          }}
        >
          <Send style={{ width: 12, color: "var(--xo-indigo)" }} aria-hidden />{" "}
          Sent via Clearbeam
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10.5,
            fontWeight: 600,
            color: "var(--success)",
          }}
        >
          <CheckCheck style={{ width: 13 }} aria-hidden /> DELIVERED
        </span>
      </div>
    </div>
  );
}

export function CodeBlock({ style }: { style?: CSSProperties }) {
  const S = {
    punct: "rgba(255,255,255,.4)",
    key: "var(--tangerine-400)",
    str: "#7FD49B",
    method: "var(--indigo-300)",
    kw: "#C3C6EC",
    cmt: "rgba(255,255,255,.38)",
  };
  const mono = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 13,
    lineHeight: 1.7,
  };
  return (
    <div
      style={{
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        background: "#0B1124",
        border: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 30px 70px -28px rgba(2,6,15,.55)",
        ...style,
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
            marginLeft: 8,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11.5,
            color: "rgba(255,255,255,.5)",
          }}
        >
          send-event.ts
        </span>
      </div>
      <pre
        style={{ margin: 0, padding: "20px 22px", overflowX: "auto", ...mono }}
      >
        <span style={{ color: S.cmt }}>
          {"// fire one call when something happens"}
        </span>
        {"\n"}
        <span style={{ color: S.kw }}>await</span>{" "}
        <span style={{ color: S.method }}>fetch</span>
        <span style={{ color: S.punct }}>(</span>
        <span style={{ color: S.str }}>
          &quot;https://api.clearbeam.io/v1/events&quot;
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
        <span style={{ color: S.str }}>&quot;Bearer cb_live_•••&quot;</span>{" "}
        <span style={{ color: S.punct }}>{"}"}</span>
        <span style={{ color: S.punct }}>,</span>
        {"\n"}
        {"  "}
        <span style={{ color: S.key }}>body</span>
        <span style={{ color: S.punct }}>:</span>{" "}
        <span style={{ color: S.method }}>JSON</span>
        <span style={{ color: S.punct }}>.</span>
        <span style={{ color: S.method }}>stringify</span>
        <span style={{ color: S.punct }}>({"{"}</span>
        {"\n"}
        {"    "}
        <span style={{ color: S.key }}>category</span>
        <span style={{ color: S.punct }}>:</span>{" "}
        <span style={{ color: S.str }}>&quot;sales&quot;</span>
        <span style={{ color: S.punct }}>,</span>
        {"\n"}
        {"    "}
        <span style={{ color: S.key }}>name</span>
        <span style={{ color: S.punct }}>:</span>{" "}
        <span style={{ color: S.str }}>&quot;user.signup&quot;</span>
        <span style={{ color: S.punct }}>,</span>
        {"\n"}
        {"    "}
        <span style={{ color: S.key }}>fields</span>
        <span style={{ color: S.punct }}>: {"{"}</span>{" "}
        <span style={{ color: S.key }}>company</span>
        <span style={{ color: S.punct }}>:</span>{" "}
        <span style={{ color: S.str }}>&quot;Acme Corp&quot;</span>
        <span style={{ color: S.punct }}>,</span>{" "}
        <span style={{ color: S.key }}>plan</span>
        <span style={{ color: S.punct }}>:</span>{" "}
        <span style={{ color: S.str }}>&quot;Pro&quot;</span>{" "}
        <span style={{ color: S.punct }}>{"}"}</span>
        {"\n"}
        {"  "}
        <span style={{ color: S.punct }}>{"})"}</span>
        {"\n"}
        <span style={{ color: S.punct }}>{"})"}</span>
        <span style={{ color: S.punct }}>;</span>
      </pre>
    </div>
  );
}

export function CategoryListCard({ style }: { style?: CSSProperties }) {
  const rows = [
    {
      name: "Sales Events",
      dot: "var(--indigo-400)",
      count: "2,140",
      on: true,
    },
    {
      name: "Incident Alerts",
      dot: "var(--tangerine-500)",
      count: "318",
      on: true,
    },
    { name: "Usage Events", dot: "var(--success)", count: "1,742", on: true },
    {
      name: "Custom · Milestones",
      dot: "var(--slate-400)",
      count: "96",
      on: false,
    },
  ];
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--slate-200)",
        boxShadow: "var(--shadow-md)",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 18px",
          borderBottom: "1px solid var(--slate-100)",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: "var(--xo-ink)",
          }}
        >
          Event Categories
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "Poppins, sans-serif",
            fontSize: 12.5,
            fontWeight: 600,
            color: "var(--xo-indigo)",
          }}
        >
          <Plus style={{ width: 14 }} aria-hidden /> Add
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {rows.map((r, i) => (
          <div
            key={r.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 13,
              padding: "14px 18px",
              borderTop: i ? "1px solid var(--slate-100)" : "none",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: r.dot,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                flex: 1,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: 14.5,
                color: "var(--xo-ink)",
              }}
            >
              {r.name}
            </span>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 12,
                color: "var(--slate-500)",
              }}
            >
              {r.count}
            </span>
            <span
              style={{
                width: 38,
                height: 22,
                borderRadius: "var(--r-pill)",
                background: r.on ? "var(--xo-indigo)" : "var(--slate-200)",
                position: "relative",
                flexShrink: 0,
                transition: "background .2s",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  left: r.on ? 18 : 2,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "var(--shadow-sm)",
                  transition: "left .2s",
                }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuotaCard({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--slate-200)",
        boxShadow: "var(--shadow-md)",
        padding: "clamp(22px,2.6vw,28px)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: "var(--xo-ink)",
          }}
        >
          Monthly usage
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10.5,
            fontWeight: 600,
            letterSpacing: ".06em",
            color: "var(--xo-indigo)",
            background: "var(--accent-soft)",
            padding: "4px 10px",
            borderRadius: "var(--r-pill)",
          }}
        >
          PRO PLAN
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontSize: 30,
            letterSpacing: "-0.02em",
            color: "var(--xo-ink)",
          }}
        >
          4,200
        </span>
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 15,
            color: "var(--slate-500)",
          }}
        >
          / 10,000 events
        </span>
      </div>
      <div
        style={{
          height: 9,
          borderRadius: 5,
          background: "var(--slate-100)",
          overflow: "hidden",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            height: "100%",
            width: "42%",
            borderRadius: 5,
            background:
              "linear-gradient(90deg, var(--indigo-500), var(--indigo-300))",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 13,
            color: "var(--slate-500)",
          }}
        >
          Resets in 18 days
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 13.5,
            color: "#fff",
            background: "var(--xo-indigo)",
            padding: "9px 16px",
            borderRadius: "var(--r-md)",
          }}
        >
          Upgrade <ArrowUpRight style={{ width: 14 }} aria-hidden />
        </span>
      </div>
    </div>
  );
}

export function DashboardMock({ style }: { style?: CSSProperties }) {
  const events = [
    {
      cat: "sales",
      dot: "var(--indigo-400)",
      title: "user.signup — Acme Corp",
      time: "2:14 PM",
    },
    {
      cat: "sales",
      dot: "var(--indigo-400)",
      title: "payment.succeeded — $480",
      time: "1:52 PM",
    },
    {
      cat: "incident",
      dot: "var(--tangerine-400)",
      title: "error.spike — checkout API",
      time: "1:09 PM",
    },
    {
      cat: "usage",
      dot: "var(--success)",
      title: "quota.reached — 80% used",
      time: "11:34 AM",
    },
    {
      cat: "sales",
      dot: "var(--indigo-400)",
      title: "plan.upgraded — Pro",
      time: "9:21 AM",
    },
  ];
  const stats = [
    ["Events this month", "4,200"],
    ["Delivered", "99.8%"],
    ["Categories", "6"],
    ["Quota used", "42%"],
  ] as const;
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        background: "#0C1430",
        border: "1px solid rgba(255,255,255,.1)",
        boxShadow:
          "0 40px 100px -30px rgba(70,76,159,.55), 0 20px 50px rgba(2,6,15,.5)",
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
              app.clearbeam.io/dashboard
            </span>
          </div>
        </div>
        <span style={{ width: 36 }} />
      </div>
      <div style={{ padding: "clamp(18px,2.2vw,26px)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18,
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 17,
              color: "#fff",
            }}
          >
            Dashboard
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "rgba(255,255,255,.6)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--success)",
                boxShadow: "0 0 8px var(--success)",
              }}
            />{" "}
            listening for events
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            marginBottom: 18,
          }}
        >
          {stats.map(([l, v]) => (
            <div
              key={l}
              style={{
                padding: "14px 16px",
                borderRadius: "var(--r-md)",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 11.5,
                  color: "rgba(255,255,255,.55)",
                  marginBottom: 6,
                }}
              >
                {l}
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 14,
          }}
          className="cb-dash-cols"
        >
          <div
            style={{
              borderRadius: "var(--r-md)",
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255,255,255,.08)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: "#fff",
              }}
            >
              Recent events
            </div>
            {events.map((e) => (
              <div
                key={e.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  padding: "11px 16px",
                  borderTop: "1px solid rgba(255,255,255,.06)",
                }}
                className="cb-event-row"
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: e.dot,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    flex: 1,
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 12,
                    color: "rgba(255,255,255,.82)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {e.title}
                </span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    color: "rgba(255,255,255,.4)",
                  }}
                >
                  {e.time}
                </span>
                <CheckCheck
                  style={{ width: 14, color: "var(--success)", flexShrink: 0 }}
                  aria-hidden
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                borderRadius: "var(--r-md)",
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.1)",
                padding: "16px",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 12.5,
                  color: "rgba(255,255,255,.6)",
                  marginBottom: 12,
                }}
              >
                Monthly quota
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 800,
                    fontSize: 24,
                    color: "#fff",
                  }}
                >
                  4,200
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 12.5,
                    color: "rgba(255,255,255,.5)",
                  }}
                >
                  / 10k
                </span>
              </div>
              <div
                style={{
                  height: 7,
                  borderRadius: 4,
                  background: "rgba(255,255,255,.1)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "42%",
                    borderRadius: 4,
                    background:
                      "linear-gradient(90deg, var(--indigo-400), var(--indigo-300))",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                borderRadius: "var(--r-md)",
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.1)",
                padding: "16px",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 12.5,
                  color: "rgba(255,255,255,.6)",
                  marginBottom: 14,
                }}
              >
                Events by category
              </div>
              {(
                [
                  ["Sales", "64%", "var(--indigo-400)"],
                  ["Usage", "24%", "var(--success)"],
                  ["Incidents", "12%", "var(--tangerine-400)"],
                ] as const
              ).map(([n, w, col]) => (
                <div key={n} style={{ marginBottom: 11 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 11.5,
                      color: "rgba(255,255,255,.7)",
                      marginBottom: 5,
                    }}
                  >
                    <span>{n}</span>
                    <span>{w}</span>
                  </div>
                  <div
                    style={{
                      height: 5,
                      borderRadius: 3,
                      background: "rgba(255,255,255,.08)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: w,
                        background: col,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
