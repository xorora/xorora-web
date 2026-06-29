import { DynamicLucideIcon } from "@/components/solutions/shared";
import { OLIVE, OLIVE_BORDER, OLIVE_SOFT } from "./losono-visuals";

export function LosonoProblem() {
  const pains = [
    {
      icon: "unlink",
      tag: "FRAGMENTED INFRASTRUCTURE",
      head: "Too many tools. Too many points of failure.",
      body: "Prompt management, document retrieval, voice infrastructure, authentication, billing, and deployment pipelines — each a separate tool, each creating operational overhead and integration risk.",
    },
    {
      icon: "search-x",
      tag: "RAG IS HARD TO GET RIGHT",
      head: "Responses that hallucinate or miss the point.",
      body: "Without tuned retrieval, AI agents answer from model memory instead of your actual documentation. Chunking strategies, embedding quality, and retrieval logic are complex to get right from scratch.",
    },
    {
      icon: "mic-off",
      tag: "VOICE AND CHAT DON'T MATCH",
      head: "Voice and chat agents built on completely different stacks.",
      body: "Organizations that want both text and voice interfaces typically build and maintain two separate systems — doubling complexity, diverging quality, and creating inconsistent user experiences.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0A1330",
        padding: "clamp(80px,9vw,120px) 32px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(90% 70% at 20% 0%, rgba(70,76,159,0.18), transparent 60%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            maxWidth: 880,
            marginBottom: "clamp(48px,6vw,72px)",
          }}
        >
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px,3.8vw,46px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: "0 0 18px",
              textWrap: "balance",
            }}
          >
            Building an AI agent is not hard. Building one that works in
            production is.
          </h2>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,.66)",
              margin: 0,
              maxWidth: 640,
            }}
          >
            Most organizations end up stitching together five different tools —
            and still end up with an inconsistent, unreliable experience.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(28px,4vw,56px)",
          }}
          className="lo-prob-grid"
        >
          {pains.map((p) => (
            <div key={p.tag}>
              <span
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "var(--r-md)",
                  background: OLIVE_SOFT,
                  border: `1px solid ${OLIVE_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: OLIVE,
                  marginBottom: 22,
                }}
              >
                <DynamicLucideIcon name={p.icon} style={{ width: 26 }} />
              </span>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11.5,
                  letterSpacing: ".14em",
                  color: OLIVE,
                  marginBottom: 12,
                }}
              >
                {p.tag}
              </div>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 21,
                  lineHeight: 1.25,
                  color: "#fff",
                  margin: "0 0 14px",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.head}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,.6)",
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(20px,2.4vw,26px)",
            letterSpacing: "-0.01em",
            color: OLIVE,
            margin: "clamp(48px,6vw,68px) auto 0",
          }}
        >
          Losono centralizes everything into one platform.
        </p>
      </div>
    </section>
  );
}
