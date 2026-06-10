import type { Industry } from "@/lib/industries/types";
import { IndustryHero } from "./industry-hero";
import { IndustrySections } from "./industry-sections";

interface IndustryLayoutProps {
  industry: Industry;
}

export function IndustryLayout({ industry }: IndustryLayoutProps) {
  return (
    <div className="bg-surface">
      <IndustryHero industry={industry} />
      <IndustrySections sections={industry.sections} />
    </div>
  );
}
