import { DynamicLucideIcon, SectionHead } from "@/components/solutions/shared";
import { OLIVE, OLIVE_BORDER, OLIVE_SOFT } from "./losono-visuals";

export function LosonoCompare() {
  const rows = [
    [
      "Separate chatbot tool + voice platform",
      "Two stacks, two maintenance burdens",
      "Chat and voice from one unified platform",
    ],
    [
      "Custom RAG pipeline",
      "Weeks of engineering, tuning, and indexing",
      "Upload documents and Losono handles everything",
    ],
    [
      "Multiple API integrations",
      "Fragmented deployment, inconsistent behavior",
      "REST, WebSocket, and widget from one place",
    ],
    [
      "Manual prompt management",
      "No preview, no testing, guessing at behavior",
      "Live prompt preview with retrieval context shown",
    ],
    [
      "Separate lead capture tool",
      "Leads from agents lost or manually entered",
      "Pre-chat forms sync automatically to Lead\u2019em",
    ],
  ];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-900)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(90% 70% at 50% 0%, rgba(70,76,159,0.2), transparent 60%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px,5vw,56px)",
          }}
        >
          <SectionHead align="center" onDark title="What Losono replaces." />
        </div>
        <div
          style={{
            borderRadius: "var(--r-xl)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,.1)",
          }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.1fr" }}
            className="lo-cmp-head"
          >
            {(
              [
                ["What teams build with", false],
                ["The problem", false],
                ["What Losono does instead", true],
              ] as const
            ).map(([h, hot]) => (
              <div
                key={h}
                style={{
                  padding: "18px 22px",
                  background: hot ? OLIVE_SOFT : "rgba(255,255,255,.03)",
                  borderBottom: `1px solid ${hot ? OLIVE_BORDER : "rgba(255,255,255,.1)"}`,
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11.5,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: hot ? OLIVE : "rgba(255,255,255,.55)",
                    fontWeight: 600,
                  }}
                >
                  {h}
                </span>
              </div>
            ))}
          </div>
          {rows.map((r) => (
            <div
              key={r[0]}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.1fr" }}
              className="lo-cmp-row"
            >
              <div
                style={{
                  padding: "20px 22px",
                  borderTop: "1px solid rgba(255,255,255,.07)",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 14.5,
                  color: "rgba(255,255,255,.6)",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(255,255,255,.25)",
                }}
              >
                {r[0]}
              </div>
              <div
                style={{
                  padding: "20px 22px",
                  borderTop: "1px solid rgba(255,255,255,.07)",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 14.5,
                  color: "rgba(255,255,255,.6)",
                }}
              >
                {r[1]}
              </div>
              <div
                style={{
                  padding: "20px 22px",
                  borderTop: `1px solid ${OLIVE_BORDER}`,
                  background: "rgba(200,227,90,.05)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                <DynamicLucideIcon
                  name="check"
                  style={{
                    width: 16,
                    color: OLIVE,
                    marginTop: 3,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: 14.5,
                    color: "#fff",
                  }}
                >
                  {r[2]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
