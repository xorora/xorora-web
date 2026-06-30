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

import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Xorora — AI Development Partner",
  description:
    "About Xorora — your AI development partner, not just another vendor. A Lahore-based team of senior engineers delivering custom software and AI for high-stakes industries.",
  keywords: [
    "AI development partner",
    "Xorora",
    "custom software development",
    "AI software company",
    "senior software engineers",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Xorora — AI Development Partner",
    description:
      "Your AI development partner, not just another vendor — a Lahore-based team of senior engineers delivering custom software and AI for high-stakes industries.",
    url: "/about",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Xorora — AI Development Partner",
    description:
      "Your AI development partner, not just another vendor. Senior engineers delivering custom software and AI for high-stakes industries.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xorora",
  url: SITE_URL,
  description:
    "Xorora is an AI development partner delivering custom software and AI for high-stakes industries.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot # 606, Block F2, Phase 1 Johar Town",
    addressLocality: "Lahore",
    postalCode: "54000",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.linkedin.com/company/xorora",
    "https://www.youtube.com/@Xorora-tech",
    "https://x.com/Xororatech",
  ],
};

export default async function AboutPage() {
  const faqs = await requireSiteContent<FaqItem[]>("about:faq");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  return (
    <div className="bg-surface">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationJsonLd, faqJsonLd, breadcrumbJsonLd],
          }),
        }}
      />
      <AboutHero />
      <AboutMindset />
      <AboutImpact />
      <AboutCases />
      <AboutDifferent />
      <AboutFAQ faqs={faqs} />
    </div>
  );
}
