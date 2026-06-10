import { SignalRule } from "@/components/geometry/signal-rule";
import type { CaseStudyMetric } from "@/lib/case-studies/types";
import { DarkSection } from "./dark-section";
import { StatBlock } from "./stat-block";

interface CaseStudyMetricsProps {
  metrics: CaseStudyMetric[];
}

export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
  if (metrics.length === 0) {
    return null;
  }

  return (
    <DarkSection bloom="50% -10%">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-3">
          <SignalRule color="var(--tangerine-400)" />
          <span className="font-mono text-[13px] text-tangerine-400 uppercase tracking-[0.24em]">
            Key Metrics
          </span>
          <SignalRule color="var(--tangerine-400)" className="scale-x-[-1]" />
        </div>
      </div>
      <div className="cs-metrics-grid grid grid-cols-4 gap-[clamp(20px,3vw,44px)]">
        {metrics.map((metric) => (
          <StatBlock
            key={metric.id}
            value={metric.value}
            label={metric.label}
            onDark
          />
        ))}
      </div>
    </DarkSection>
  );
}
