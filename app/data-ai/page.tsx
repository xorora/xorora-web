import type { Metadata } from "next";
import {
  DaiChallenges,
  DaiContact,
  DaiDeliver,
  DaiEvolve,
  DaiFAQ,
  DaiHero,
  DaiServices,
  DaiTools,
} from "@/components/data-ai";

export const metadata: Metadata = {
  title: "Data & AI Services | Xorora",
  description:
    "End-to-end data and AI services from Xorora: analytics, data engineering, cloud migration, AI agents, ML, and workflow automation for measurable business outcomes.",
};

export default function DataAiPage() {
  return (
    <div className="bg-surface">
      <DaiHero />
      <DaiChallenges />
      <DaiServices />
      <DaiEvolve />
      <DaiDeliver />
      <DaiTools />
      <DaiFAQ />
      <DaiContact />
    </div>
  );
}
