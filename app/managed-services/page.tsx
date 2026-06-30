import type { Metadata } from "next";
import {
  MgsContact,
  MgsFAQ,
  MgsHero,
  MgsIndustries,
  MgsProcess,
  MgsRule,
  MgsServices,
  MgsWhy,
} from "@/components/managed-services";
import { MGS_FAQS } from "@/components/managed-services/mgs-data";
import { listIndustryNavItems } from "@/lib/navigation/server";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "IT Managed Services — 24/7 Managed IT Support | Xorora",
  description:
    "IT Managed Services from Xorora: 24/7 monitoring plus managed cybersecurity, network, server, and IT asset services — compliance-ready support that scales with you.",
  keywords: [
    "IT Managed Services",
    "Managed Cybersecurity Services",
    "Managed Network Services",
    "Managed Server Services",
    "Managed IT Asset Services",
  ],
  alternates: { canonical: "/managed-services" },
  openGraph: {
    title: "IT Managed Services | Xorora",
    description:
      "24/7 IT Managed Services — managed cybersecurity, network, server, and IT asset services with compliance-ready support.",
    url: "/managed-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Managed Services | Xorora",
    description:
      "24/7 IT Managed Services — managed cybersecurity, network, server, and IT asset services with compliance-ready support.",
  },
};

const SERVICE_CATALOG = [
  "Managed Cybersecurity Services",
  "Managed Network Services",
  "Managed Server Services",
  "Managed IT Asset Services",
  "IT Support",
  "Co-Managed IT",
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT Managed Services",
  name: "IT Managed Services",
  description:
    "End-to-end IT Managed Services from Xorora: 24/7 monitoring, managed cybersecurity, network, server, and IT asset services with compliance-ready support.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Managed Services",
    itemListElement: SERVICE_CATALOG.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MGS_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default async function ManagedServicesPage() {
  const industries = await listIndustryNavItems();

  return (
    <div className="bg-navy-900">
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
      <MgsHero />
      <MgsRule />
      <MgsProcess />
      <MgsRule />
      <MgsServices />
      <MgsWhy />
      <MgsIndustries industries={industries} />
      <MgsRule />
      <MgsFAQ />
      <MgsContact />
    </div>
  );
}
