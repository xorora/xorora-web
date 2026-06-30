import type { Metadata } from "next";
import {
  V2Cases,
  V2Contact,
  V2Deliver,
  V2Engagement,
  V2Hero,
  V2Industries,
  V2Services,
  V2Statement,
} from "@/components/home";

const SITE_URL = "https://xorora.vercel.app";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Xorora — Your AI Development Partner",
  description:
    "Xorora is your AI development partner — production AI and software built by a partner who ships, from the first prototype to the system your business runs on.",
  keywords: [
    "AI development partner",
    "Xorora",
    "AI software development",
    "custom software development",
    "production AI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Xorora — Your AI Development Partner",
    description:
      "Production AI and software, built by a partner who ships — from the first prototype to the system your business runs on.",
    url: "/",
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xorora — Your AI Development Partner",
    description:
      "Your AI development partner — production AI and software, built by a partner who ships.",
  },
  verification: {
    google: "RsJWqjpnVMIU3SqHpcB0q1hBtYQMJ8-4hKhd0ipmfjU",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xorora",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Xorora is an AI development partner delivering production AI and custom software for high-stakes industries.",
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Xorora",
  url: SITE_URL,
};

export default function HomePage() {
  return (
    <div className="bg-navy-950">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationJsonLd, websiteJsonLd],
          }),
        }}
      />
      <V2Hero />
      <V2Statement />
      <V2Services />
      <V2Industries />
      <V2Cases />
      <V2Deliver />
      <V2Engagement />
      <V2Contact />
    </div>
  );
}
