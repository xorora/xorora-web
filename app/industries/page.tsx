import type { Metadata } from "next";
import {
  IndCaseStudies,
  IndContact,
  IndGrid,
  IndHeader,
  IndProcess,
  IndRevealObserver,
} from "@/components/industries";
import { listIndustryNames } from "@/lib/navigation/server";

export const metadata: Metadata = {
  title: "Industries We Serve | Xorora",
  description:
    "Xorora builds custom software and AI for nine industries, from healthcare and fintech to travel and startups. Explore our work and start your project.",
};

export default async function IndustriesPage() {
  const industryNames = await listIndustryNames();

  return (
    <div className="bg-surface">
      <IndRevealObserver />
      <IndHeader />
      <IndGrid />
      <IndCaseStudies />
      <IndProcess />
      <IndContact industryNames={industryNames} />
    </div>
  );
}
