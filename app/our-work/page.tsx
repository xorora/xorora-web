import type { Metadata } from "next";
import { WorkContact, WorkHeader, WorkTiles } from "@/components/our-work";
import { listPublishedCaseStudies } from "@/lib/case-studies";

/** Case study index is DB-backed — render on each request. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Work — Case Studies | Xorora",
  description:
    "Production AI and software, engineered end-to-end. Explore case studies from unified AI voice operations to real-time compliance and event monitoring platforms.",
};

export default async function OurWorkPage() {
  const studies = await listPublishedCaseStudies();

  return (
    <div className="bg-surface">
      <WorkHeader />
      <WorkTiles studies={studies} />
      <WorkContact />
    </div>
  );
}
