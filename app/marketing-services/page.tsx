import type { Metadata } from "next";
import {
  MktCta,
  MktDeliver,
  MktDifference,
  MktHero,
  MktResults,
  MktRule,
  MktServices,
} from "@/components/marketing-services";

export const metadata: Metadata = {
  title: "Marketing Services | Xorora",
  description:
    "Engineering-led marketing from Xorora: SEO, paid search, Meta ads, social, and B2B pipeline programs built as instrumented, attributable growth systems.",
};

export default function MarketingServicesPage() {
  return (
    <div className="bg-navy-900">
      <MktHero />
      <MktRule />
      <MktDeliver />
      <MktRule />
      <MktServices />
      <MktResults />
      <MktRule />
      <MktDifference />
      <MktCta />
    </div>
  );
}
