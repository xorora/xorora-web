import type { Metadata } from "next";
import {
  HwwCases,
  HwwContact,
  HwwHero,
  HwwProcess,
  HwwReasons,
} from "@/components/how-we-work";
import { type HwwFlows, requireSiteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "How We Work | Xorora",
  description:
    "Discover how Xorora works behind the scenes. Engage a cross-functional dedicated team or staff augmentation, with a transparent, battle-tested delivery process.",
};

export default async function HowWeWorkPage() {
  const flows = await requireSiteContent<HwwFlows>("how-we-work:flows");

  return (
    <div className="bg-surface">
      <HwwHero />
      <HwwReasons />
      <HwwProcess flows={flows} />
      <HwwCases />
      <HwwContact />
    </div>
  );
}
