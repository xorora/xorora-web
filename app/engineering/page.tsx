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
import { SERVICES } from "@/components/engineering/eng-sections";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Software Product Engineering Services Company | Xorora",
  description:
    "Xorora is a software product engineering services company: UI/UX design, AI software development, legacy modernization, MVP & POC, custom mobile app, and CMS development services.",
  keywords: [
    "software product engineering services company",
    "UI/UX design services",
    "AI software development services",
    "legacy application modernization services",
    "MVP & POC development services",
    "custom mobile app development services",
    "CMS development services",
  ],
  alternates: { canonical: "/engineering" },
  openGraph: {
    title: "Software Product Engineering Services Company | Xorora",
    description:
      "Software product engineering services company: AI software development, custom mobile apps, legacy modernization, MVP & POC, CMS, and UI/UX design services.",
    url: "/engineering",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Product Engineering Services Company | Xorora",
    description:
      "AI software development, custom mobile apps, legacy modernization, MVP & POC, CMS, and UI/UX design services.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Product Engineering Services",
  name: "Software Product Engineering Services",
  description:
    "Xorora is a software product engineering services company delivering UI/UX design, AI software development, legacy application modernization, MVP & POC, custom mobile app, and CMS development services.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Product Engineering Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Software Product Engineering Services",
      item: `${SITE_URL}/engineering`,
    },
  ],
};

export default function EngineeringPage() {
  return (
    <div className="bg-surface">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
