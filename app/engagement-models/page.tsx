import type { Metadata } from "next";
import {
  EmCases,
  EmChoose,
  EmContact,
  EmFaq,
  EmHero,
  EmModels,
} from "@/components/engagement-models";
import { FAQS } from "@/components/engagement-models/em-sections";

export const metadata: Metadata = {
  title: "Engagement Models | IT Staff Augmentation Services | Xorora",
  description:
    "Choose how you work with Xorora: fixed scope, variable scope, or IT staff augmentation services. Same senior talent pool, flexible commercials that match your roadmap.",
  keywords: [
    "Engagement Models",
    "IT Staff Augmentation Services",
    "Staff Augmentation vs Managed Services",
    "Staff Augmentation Consulting Services",
  ],
  alternates: { canonical: "/engagement-models" },
  openGraph: {
    title: "Engagement Models | Xorora",
    description:
      "Fixed scope, variable scope, or IT staff augmentation services — the same senior talent pool, flexible commercials that match your roadmap.",
    url: "/engagement-models",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engagement Models | Xorora",
    description:
      "Fixed scope, variable scope, or IT staff augmentation services — flexible commercials that match your roadmap.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Engagement Models",
  name: "Engagement Models",
  description:
    "Flexible engagement models from Xorora: fixed scope, variable scope, and IT staff augmentation services backed by the same senior talent pool.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: "https://xorora.vercel.app",
  },
  areaServed: ["North America", "Europe", "Asia"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engagement Models",
    itemListElement: [
      "Fixed Scope",
      "Variable Scope",
      "IT Staff Augmentation Services",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
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
      item: "https://xorora.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Engagement Models",
      item: "https://xorora.vercel.app/engagement-models",
    },
  ],
};

export default function EngagementModelsPage() {
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
      <EmHero />
      <EmModels />
      <EmChoose />
      <EmCases />
      <EmFaq />
      <EmContact />
    </div>
  );
}
