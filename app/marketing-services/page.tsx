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
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Digital Marketing Services — SEO, Paid Ads & Social | Xorora",
  description:
    "Digital marketing services from Xorora: professional SEO, local SEO, paid ads, Meta ads, social media marketing, and B2B digital marketing — engineered as measurable growth systems.",
  keywords: [
    "Digital Marketing Services",
    "Professional SEO Services",
    "Local SEO Services",
    "Paid Ads Services",
    "Meta Ads Services",
    "Social Media Marketing Services",
    "B2B Digital Marketing Services",
  ],
  alternates: { canonical: "/marketing-services" },
  openGraph: {
    title: "Digital Marketing Services | Xorora",
    description:
      "Digital marketing services from Xorora: SEO, local SEO, paid ads, Meta ads, social media marketing, and B2B digital marketing — engineered as measurable growth systems.",
    url: "/marketing-services",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Xorora",
    description:
      "SEO, local SEO, paid ads, Meta ads, social media marketing, and B2B digital marketing — engineered as measurable growth systems.",
  },
};

const SERVICE_CATALOG = [
  "Professional SEO Services",
  "Local SEO Services",
  "Paid Ads Services",
  "Meta Ads Services",
  "Social Media Marketing Services",
  "B2B Digital Marketing Services",
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing Services",
  name: "Digital Marketing Services",
  description:
    "Digital marketing services from Xorora: professional SEO, local SEO, paid ads, Meta ads, social media marketing, and B2B digital marketing — engineered as measurable growth systems.",
  provider: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
  },
  areaServed: ["North America", "Europe", "Asia"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: SERVICE_CATALOG.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
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
      name: "Digital Marketing Services",
      item: `${SITE_URL}/marketing-services`,
    },
  ],
};

export default function MarketingServicesPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
