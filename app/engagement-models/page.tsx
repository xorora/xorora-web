import type { Metadata } from "next";
import {
  EmCases,
  EmChoose,
  EmContact,
  EmHero,
  EmModels,
} from "@/components/engagement-models";

export const metadata: Metadata = {
  title: "Engagement Models | Xorora",
  description:
    "Choose how you work with Xorora: fixed scope, variable scope, or staff augmentation. Same senior talent pool, flexible commercials that match your roadmap.",
};

export default function EngagementModelsPage() {
  return (
    <div className="bg-surface">
      <EmHero />
      <EmModels />
      <EmChoose />
      <EmCases />
      <EmContact />
    </div>
  );
}
