"use client";

import "@/components/solutions/shared/solutions.css";
import { Lightbox, StickyDemo } from "@/components/solutions/shared";
import { LeademContact } from "./leadem-contact";
import { LeademDemoBanner } from "./leadem-demo-banner";
import { LeademFaq } from "./leadem-faq";
import { LeademFeatures } from "./leadem-features";
import { LeademHero } from "./leadem-hero";
import { LeademHowItWorks, LeademWorkspace } from "./leadem-how-it-works";
import { LeademOverview } from "./leadem-overview";
import { LeademProblem } from "./leadem-problem";
import {
  LeademBeforeAfter,
  LeademIndustries,
  LeademUseCases,
} from "./leadem-use-cases";

export function LeademPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <StickyDemo />
      <Lightbox />
      <LeademHero />
      <LeademProblem />
      <LeademOverview />
      <LeademFeatures />
      <LeademHowItWorks />
      <LeademWorkspace />
      <LeademUseCases />
      <LeademIndustries />
      <LeademBeforeAfter />
      <LeademFaq />
      <LeademDemoBanner />
      <LeademContact />
    </div>
  );
}
