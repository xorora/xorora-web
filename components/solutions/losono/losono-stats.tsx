import { SectionHead } from "@/components/solutions/shared";
import { OLIVE } from "./losono-visuals";

export function LosonoStats() {
  const stats = [
    {
      num: "6",
      label: "Deployment channels",
      sub: "REST, WebSocket, Widget, Chat, Voice, Embedded",
    },
    {
      num: "Multi-format",
      label: "Knowledge ingestion",
      sub: "PDF, Docs, Markdown, Audio, Video, Images",
    },
    {
      num: "Real-time",
      label: "Voice & chat delivery",
      sub: "Powered by Gemini Live and Gemini Embeddings",
    },
    {
      num: "1 platform",
      label: "Full agent lifecycle",
      sub: "Create, train, test, deploy, track — all in one place",
    },
  ];

  return (
    <section
      style={{
        background: "var(--slate-50)",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px,5vw,56px)",
          }}
        >
          <SectionHead
            align="center"
            label="Platform"
            title="Losono by the numbers."
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
          className="lo-stats-grid"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(26px,3vw,34px)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  height: 3,
                  width: 40,
                  borderRadius: 2,
                  background: OLIVE,
                  marginBottom: 20,
                }}
              />
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px,2.8vw,34px)",
                  letterSpacing: "-0.03em",
                  color: "var(--fg1)",
                  lineHeight: 1,
                  marginBottom: 14,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--fg1)",
                  marginBottom: 6,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "var(--fg2)",
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
