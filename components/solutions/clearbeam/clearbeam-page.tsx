import "@/components/solutions/shared/solutions.css";

import { StickyDemo } from "@/components/solutions/shared";
import { ClearbeamContact } from "./clearbeam-contact";
import { ClearbeamDemoBanner } from "./clearbeam-demo-banner";
import { ClearbeamFaq } from "./clearbeam-faq";
import { ClearbeamFeatures } from "./clearbeam-features";
import { ClearbeamHero } from "./clearbeam-hero";
import { ClearbeamHowItWorks } from "./clearbeam-how-it-works";
import { ClearbeamMetrics } from "./clearbeam-metrics";
import { ClearbeamProblem } from "./clearbeam-problem";
import {
  ClearbeamBeforeAfter,
  ClearbeamPersonas,
  ClearbeamUseCases,
} from "./clearbeam-use-cases";

export function ClearbeamPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <StickyDemo />
      <ClearbeamHero />
      <ClearbeamProblem />
      <ClearbeamHowItWorks />
      <ClearbeamFeatures />
      <ClearbeamUseCases />
      <ClearbeamPersonas />
      <ClearbeamBeforeAfter />
      <ClearbeamMetrics />
      <ClearbeamFaq />
      <ClearbeamDemoBanner />
      <ClearbeamContact />
    </div>
  );
}
