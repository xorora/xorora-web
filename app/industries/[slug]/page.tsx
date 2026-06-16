import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLayout } from "@/components/industry-page";
import { getAllIndustrySlugs, getIndustryBySlug } from "@/lib/industries";
import type { Industry } from "@/lib/industries/types";

const SITE_URL = "https://xorora.vercel.app";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllIndustrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  const url = `/industries/${slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      siteName: "Xorora",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

function buildJsonLd(industry: Industry, slug: string) {
  const url = `${SITE_URL}/industries/${slug}`;
  const graph: Record<string, unknown>[] = [];

  const servicesSection = industry.sections.find((s) => s.type === "services");
  const offerItems = servicesSection
    ? servicesSection.items
        .map((item) => ("name" in item ? item.name : item.title))
        .filter((name): name is string => Boolean(name))
    : [];

  graph.push({
    "@type": "Service",
    serviceType: `${industry.name} Software Development`,
    name: industry.metaTitle.replace(/\s*\|\s*Xorora\s*$/, ""),
    description: industry.metaDescription,
    provider: { "@type": "Organization", name: "Xorora", url: SITE_URL },
    areaServed: ["North America", "Europe", "Asia"],
    ...(offerItems.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${industry.name} Services`,
        itemListElement: offerItems.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    }),
  });

  const faqSection = industry.sections.find((s) => s.type === "faq");
  if (faqSection && faqSection.items.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqSection.items.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${SITE_URL}/industries`,
      },
      { "@type": "ListItem", position: 3, name: industry.name, item: url },
    ],
  });

  return { "@context": "https://schema.org", "@graph": graph };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const jsonLd = buildJsonLd(industry, slug);

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryLayout industry={industry} />
    </>
  );
}
