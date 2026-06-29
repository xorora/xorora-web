"use client";

import "@/components/solutions/shared/solutions.css";
import { Lightbox, StickyDemo } from "@/components/solutions/shared";
import { LosonoCompare } from "./losono-compare";
import { LosonoContact } from "./losono-contact";
import { LosonoDemoBanner } from "./losono-demo-banner";
import { LosonoFaq } from "./losono-faq";
import { LosonoFeatures } from "./losono-features";
import { LosonoHero } from "./losono-hero";
import { LosonoLifecycle } from "./losono-lifecycle";
import { LosonoOverview } from "./losono-overview";
import { LosonoProblem } from "./losono-problem";
import { LosonoStats } from "./losono-stats";
import {
  LosonoIndustries,
  LosonoLeademSpotlight,
  LosonoUseCases,
} from "./losono-use-cases";

export function LosonoPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <StickyDemo />
      <Lightbox />
      <LosonoHero />
      <LosonoProblem />
      <LosonoOverview />
      <LosonoFeatures />
      <LosonoLifecycle />
      <LosonoUseCases />
      <LosonoLeademSpotlight />
      <LosonoIndustries />
      <LosonoCompare />
      <LosonoStats />
      <LosonoFaq />
      <LosonoDemoBanner />
      <LosonoContact />
    </div>
  );
}
