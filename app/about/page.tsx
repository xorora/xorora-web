import type { Metadata } from "next";
import {
  AboutCases,
  AboutDifferent,
  AboutFAQ,
  AboutHero,
  AboutImpact,
  AboutMindset,
} from "@/components/about";
import { type FaqItem, requireSiteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | Xorora",
  description:
    "Xorora is your AI development partner, not just another vendor. Senior engineers, partner mindset, and AI-powered speed for high-stakes industries.",
};

export default async function AboutPage() {
  const faqs = await requireSiteContent<FaqItem[]>("about:faq");

  return (
    <div className="bg-surface">
      <AboutHero />
      <AboutMindset />
      <AboutImpact />
      <AboutCases />
      <AboutDifferent />
      <AboutFAQ faqs={faqs} />
    </div>
  );
}
