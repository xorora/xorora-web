import type { Metadata } from "next";
import {
  ConApproach,
  ConContact,
  ConFAQ,
  ConHero,
  ConOutcomes,
  ConServices,
} from "@/components/consulting";
import { FAQS, SERVICES } from "@/components/consulting/con-sections";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "IT Consulting Services — AI & Digital Transformation | Xorora",
  description:
    "IT consulting services from Xorora: discovery workshop services, AI consulting services, and AI digital transformation services that turn ambition into a clear, costed roadmap.",
  keywords: [
    "IT Consulting Services",
    "Discovery Workshop Services",
    "AI Consulting Services",
    "AI Digital Transformation Services",
  ],
  alternates: { canonical: "/consulting" },
  openGraph: {
    title: "IT Consulting Services | Xorora",
    description:
      "IT consulting services from Xorora: discovery workshops, AI consulting, and AI digital transformation strategy that turns ambition into a clear, costed roadmap.",
    url: "/consulting",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting Services | Xorora",
    description:
      "IT consulting services from Xorora: discovery workshops, AI consulting, and AI digital transformation strategy.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT Consulting Services",
  name: "IT Consulting Services",
  description:
    "IT consulting services from Xorora: discovery workshop services, AI consulting services, and AI digital transformation services that turn ambition into a clear, costed roadmap.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Consulting Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
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
      name: "IT Consulting Services",
      item: `${SITE_URL}/consulting`,
    },
  ],
};

export default function ConsultingPage() {
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
      <ConHero />
      <ConServices />
      <ConOutcomes />
      <ConApproach />
      <ConFAQ />
      <ConContact />
    </div>
  );
}
