import type { CaseStudy } from "@/lib/case-studies/types";
import { CaseStudyBandCta } from "./case-study-band-cta";
import { CaseStudyFinalCta } from "./case-study-final-cta";
import { CaseStudyHero } from "./case-study-hero";
import { CaseStudyMetrics } from "./case-study-metrics";
import { CaseStudySections } from "./case-study-sections";

interface CaseStudyLayoutProps {
  study: CaseStudy;
}

export function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  return (
    <div className="bg-(--bg)">
      <CaseStudyHero study={study} />
      <CaseStudyMetrics metrics={study.metrics} />
      <CaseStudySections sections={study.sections} />
      <CaseStudyBandCta />
      <CaseStudyFinalCta />
    </div>
  );
}
