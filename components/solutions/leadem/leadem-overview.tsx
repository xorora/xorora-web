"use client";

import { ArrowRight } from "lucide-react";
import { SignalField } from "@/components/geometry/signal-field";
import {
  BrowserFrame,
  DarkSection,
  DynamicLucideIcon,
  SectionHead,
  scrollToId,
  Zoomable,
} from "@/components/solutions/shared";

const DASHBOARD = "/assets/leadem/dashboard.png";

export function LeademOverview() {
  const feats = [
    {
      icon: "shapes",
      name: "Campaign types",
      desc: "Reusable lead schemas, defined once and shared across every campaign.",
    },
    {
      icon: "megaphone",
      name: "Campaigns",
      desc: "Every active outreach campaign, organized in one workspace.",
    },
    {
      icon: "file-up",
      name: "Import",
      desc: "Bulk-create leads from any CSV or XLSX in minutes.",
    },
    {
      icon: "list-checks",
      name: "Tasks",
      desc: "Daily stage-movement goals to keep every rep on pace.",
    },
    {
      icon: "pen-line",
      name: "LinkedIn comment",
      desc: "AI-drafted executive warming comments for outreach.",
    },
    {
      icon: "message-square",
      name: "Messages",
      desc: "Real-time team DMs, @mentions and notifications.",
    },
    {
      icon: "users",
      name: "Team",
      desc: "Manage member roles and workspace access.",
    },
    {
      icon: "target",
      name: "ICP settings",
      desc: "Tune how the AI judges every lead\u2019s fit.",
    },
  ];

  return (
    <DarkSection id="product-overview" bloom="50% 0%">
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.55,
          pointerEvents: "none",
        }}
      >
        <SignalField />
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto clamp(40px,5vw,60px)",
          }}
        >
          <SectionHead
            align="center"
            onDark
            label="Product Overview"
            title="One workspace for the entire outreach pipeline."
            sub="From raw spreadsheet to qualified, scored, kanban-organized lead — Lead'em handles the whole workflow so your team spends time selling, not formatting."
          />
        </div>

        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Zoomable
            src={DASHBOARD}
            alt="Lead'em dashboard — the full feature workspace"
          >
            <BrowserFrame
              src={DASHBOARD}
              alt="Lead'em dashboard"
              url="app.xorora.com/leadem/dashboard"
              glow
            />
          </Zoomable>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            maxWidth: 1100,
            margin: "clamp(36px,4.5vw,52px) auto 0",
          }}
          className="le-ovfeat-grid"
        >
          {feats.map((f) => (
            <div
              key={f.name}
              className="solution-card-hover-lift-bg"
              style={{
                padding: "20px 20px",
                borderRadius: "var(--r-lg)",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <span
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "var(--r-md)",
                  background: "rgba(70,76,159,.28)",
                  border: "1px solid rgba(120,150,240,.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--indigo-300)",
                  marginBottom: 14,
                }}
              >
                <DynamicLucideIcon name={f.icon} style={{ width: 19 }} />
              </span>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#fff",
                  marginBottom: 6,
                }}
              >
                {f.name}
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,.58)",
                }}
              >
                {f.desc}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "clamp(40px,5vw,56px)" }}>
          <button
            type="button"
            onClick={() => scrollToId("features")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "Poppins, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--tangerine-400)",
              textDecoration: "none",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            See the full product{" "}
            <ArrowRight style={{ width: 17 }} aria-hidden />
          </button>
        </div>
      </div>
    </DarkSection>
  );
}
