import { Check, Target } from "lucide-react";
import { Fragment } from "react";
import { SignalField } from "@/components/geometry/signal-field";
import { XWatermark } from "@/components/geometry/x-watermark";
import {
  BrowserFrame,
  DemoButton,
  Zoomable,
} from "@/components/solutions/shared";

const KANBAN = "/assets/leadem/kanban.png";

export function LeademHero() {
  const proof = [
    "Built on Google Workspace",
    "AI-Powered by Gemini",
    "Real-time Collaboration",
    "Any CSV or XLSX",
  ];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy-900)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(70,76,159,0.5) 0%, rgba(39,85,195,0.14) 34%, rgba(1,12,40,0) 64%)",
        }}
      />
      <SignalField />
      <XWatermark
        size={680}
        color="rgba(120,150,240,0.04)"
        style={{ top: -240, left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(1,12,40,0) 72%, var(--slate-50) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(124px,13vw,156px) 32px clamp(56px,7vw,88px)",
        }}
      >
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: "var(--r-pill)",
              border: "1px solid rgba(120,150,240,.3)",
              background: "rgba(70,76,159,.16)",
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--tangerine-400)",
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11.5,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--indigo-200)",
              }}
            >
              AI Sales CRM for Google Workspace
            </span>
          </div>
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px,5.4vw,72px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0 0 24px",
              textWrap: "balance",
            }}
          >
            Your pipeline, structured.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(100deg,#C3C6EC,#8E93D8 45%,#FF8A3D)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Your leads, scored by AI.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(16px,1.8vw,19px)",
              lineHeight: 1.62,
              color: "rgba(255,255,255,.74)",
              maxWidth: 620,
              margin: "0 auto 34px",
            }}
          >
            Lead&apos;em replaces scattered Google Sheets with a schema-first
            CRM that imports any spreadsheet in minutes, qualifies leads with
            AI, and keeps your whole sales team moving on a shared kanban
            pipeline.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 30,
            }}
          >
            <DemoButton size="lg" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(14px,2.4vw,26px)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className="le2-proof"
          >
            {proof.map((p, i) => (
              <Fragment key={p}>
                {i > 0 && (
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.26)",
                    }}
                    className="le2-proof-dot"
                  />
                )}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: "rgba(255,255,255,.66)",
                  }}
                >
                  <Check
                    style={{ width: 14, color: "var(--tangerine-400)" }}
                    aria-hidden
                  />{" "}
                  {p}
                </span>
              </Fragment>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: 1080,
            margin: "clamp(48px,6vw,72px) auto 0",
          }}
          className="le2-hero-shot"
        >
          <Zoomable
            src={KANBAN}
            alt="Lead'em kanban pipeline with drag-and-drop stage columns"
          >
            <BrowserFrame
              src={KANBAN}
              alt="Lead'em kanban pipeline with drag-and-drop stage columns"
              url="app.xorora.com/leadem/pipeline"
              glow
            />
          </Zoomable>

          <div
            className="le2-hero-float"
            style={{
              position: "absolute",
              top: -28,
              left: -30,
              width: 222,
              background: "var(--navy-950)",
              border: "1px solid rgba(255,255,255,.14)",
              borderRadius: "var(--r-lg)",
              padding: "15px 17px",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "rgba(70,76,159,.3)",
                  border: "1px solid rgba(120,150,240,.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--indigo-300)",
                }}
              >
                <Target style={{ width: 15 }} aria-hidden />
              </span>
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9.5,
                  letterSpacing: ".14em",
                  color: "rgba(255,255,255,.5)",
                }}
              >
                AI ICP VERDICT
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginBottom: 12,
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
                Strong fit
              </span>
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  color: "var(--success)",
                  background: "rgba(46,158,107,.16)",
                  border: "1px solid rgba(46,158,107,.32)",
                  padding: "3px 9px",
                  borderRadius: "var(--r-pill)",
                }}
              >
                TARGET
              </span>
            </div>
            <div
              style={{
                height: 6,
                borderRadius: 3,
                background: "rgba(255,255,255,.1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "86%",
                  borderRadius: 3,
                  background:
                    "linear-gradient(90deg, var(--indigo-400), var(--success))",
                }}
              />
            </div>
          </div>

          <div
            className="le2-hero-float"
            style={{
              position: "absolute",
              bottom: -24,
              right: -22,
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "var(--navy-950)",
              border: "1px solid rgba(255,255,255,.14)",
              borderRadius: "var(--r-md)",
              padding: "12px 16px",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                flexShrink: 0,
                borderRadius: "50%",
                background:
                  "linear-gradient(140deg, var(--indigo-400), var(--indigo-700))",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              JR
            </span>
            <div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  color: "#fff",
                }}
              >
                <b style={{ fontWeight: 600 }}>Jordan</b> moved a lead
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 11.5,
                  color: "rgba(255,255,255,.55)",
                  marginTop: 2,
                }}
              >
                &rarr; 1st Follow up &middot; just now
              </div>
            </div>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--success)",
                boxShadow: "0 0 8px var(--success)",
                marginLeft: 4,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
