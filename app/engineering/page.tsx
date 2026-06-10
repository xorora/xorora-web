import type { Metadata } from "next";
import {
  EngApproach,
  EngContact,
  EngHero,
  EngIndustries,
  EngOutcomes,
  EngResults,
  EngServices,
  EngTechStack,
} from "@/components/engineering";

export const metadata: Metadata = {
  title: "Engineering Services | Xorora",
  description:
    "Full-stack software engineering from Xorora: AI software, custom apps, modernization, MVPs, CMS, and UI/UX. Measurable outcomes, not just code.",
};

export default function EngineeringPage() {
  return (
    <div className="bg-surface">
      <EngHero />
      <EngServices />
      <EngOutcomes />
      <EngResults />
      <EngTechStack />
      <EngApproach />
      <EngIndustries />
      <EngContact />
    </div>
  );
}
