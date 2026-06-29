import {
  DarkSection,
  DynamicLucideIcon,
  SectionHead,
} from "@/components/solutions/shared";

export function ClearbeamMetrics() {
  const stats = [
    {
      icon: "zap",
      num: "Real-time",
      label: "Event to email delivery",
      sub: "No batch processing. No delays.",
    },
    {
      icon: "code-2",
      num: "1 API call",
      label: "Full integration",
      sub: "Works with any stack in minutes.",
    },
    {
      icon: "shield-check",
      num: "0 blind spots",
      label: "For critical product events",
      sub: "Sales, incidents, usage — all covered.",
    },
  ];
  return (
    <DarkSection bloom="50% 0%">
      <div style={{ position: "relative" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px,5vw,56px)",
          }}
        >
          <SectionHead
            align="center"
            onDark
            label="Why Clearbeam"
            title="Clearbeam in numbers."
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            maxWidth: 1040,
            margin: "0 auto",
          }}
          className="cb-metrics-grid"
        >
          {stats.map((s) => (
            <div
              key={s.num}
              style={{
                position: "relative",
                overflow: "hidden",
                padding: "clamp(28px,3vw,38px)",
                borderRadius: "var(--r-xl)",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -30,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(70,76,159,.3), transparent 68%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "var(--r-md)",
                    background: "rgba(70,76,159,.28)",
                    border: "1px solid rgba(120,150,240,.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--indigo-300)",
                    marginBottom: 22,
                  }}
                >
                  <DynamicLucideIcon name={s.icon} style={{ width: 22 }} />
                </span>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(28px,3.4vw,40px)",
                    letterSpacing: "-0.03em",
                    color: "#fff",
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
                    color: "#fff",
                    marginBottom: 6,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,.6)",
                  }}
                >
                  {s.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DarkSection>
  );
}
