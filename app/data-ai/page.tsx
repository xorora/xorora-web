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
import { DAI_FAQS } from "@/components/data-ai/dai-data";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI & Data Services — Data Modernization & Analytics | Xorora",
  description:
    "AI & Data Services: data modernization, data & AI consulting, data analytics, cloud migration, and AI agent development services by Xorora.",
  keywords: [
    "AI & Data Services",
    "Data Modernization Solutions",
    "Data Modernization Services",
    "Data and AI Consulting",
    "Data Analytics Services in USA",
    "Cloud Migration Services",
    "AI Agent Development Services",
  ],
  alternates: { canonical: "/data-ai" },
  openGraph: {
    title: "AI & Data Services | Xorora",
    description:
      "AI & Data Services: data modernization, data & AI consulting, data analytics, cloud migration, and AI agent development services.",
    url: "/data-ai",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Data Services | Xorora",
    description:
      "Data modernization, data & AI consulting, analytics, cloud migration, and AI agent development services.",
  },
};

const SERVICE_CATALOG = [
  "Data Modernization Services",
  "Data Analytics Services",
  "Data & AI Consulting",
  "Cloud Migration Services",
  "AI Agent Development Services",
  "ML & Data Science Services",
  "Workflow Automation Services",
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI & Data Services",
  name: "AI & Data Services",
  description:
    "AI & Data Services from Xorora: data modernization, data & AI consulting, data analytics, cloud migration, and AI agent development services.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["United States", "North America", "Europe", "Asia"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI & Data Services",
    itemListElement: SERVICE_CATALOG.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DAI_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
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
      name: "AI & Data Services",
      item: `${SITE_URL}/data-ai`,
    },
  ],
};

export default function DataAiPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
