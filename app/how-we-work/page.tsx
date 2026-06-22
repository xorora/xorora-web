import type { Metadata } from "next";
import {
  HwwCases,
  HwwContact,
  HwwHero,
  HwwProcess,
  HwwReasons,
} from "@/components/how-we-work";
import { type HwwFlows, requireSiteContent } from "@/lib/content";

const SITE_URL = "https://xorora.vercel.app";

export const metadata: Metadata = {
  title: "How We Work — Our Software Development Process | Xorora",
  description:
    "How Xorora works: a transparent, battle-tested software development process. Engage a dedicated development team or staff augmentation, matched to how you build.",
  keywords: [
    "software development process",
    "dedicated development team",
    "staff augmentation",
    "agile delivery process",
    "how we work",
  ],
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work — Our Software Development Process | Xorora",
    description:
      "A transparent, battle-tested software development process. Engage a dedicated development team or staff augmentation, matched to how you build.",
    url: "/how-we-work",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work — Our Software Development Process | Xorora",
    description:
      "A transparent, battle-tested software development process: dedicated development team or staff augmentation.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "How We Work",
      item: `${SITE_URL}/how-we-work`,
    },
  ],
};

export default async function HowWeWorkPage() {
  const flows = await requireSiteContent<HwwFlows>("how-we-work:flows");

  return (
    <div className="bg-surface">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HwwHero />
      <HwwReasons />
      <HwwProcess flows={flows} />
      <HwwCases />
      <HwwContact />
    </div>
  );
}
