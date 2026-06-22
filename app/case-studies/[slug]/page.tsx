import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { type CaseStudy, getCaseStudyBySlug } from "@/lib/case-studies";

const SITE_URL = "https://xorora.vercel.app";

/** Fetch from Neon on every request so new slugs/IDs appear without rebuild. */
export const dynamic = "force-dynamic";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return {};
  }

  const url = `/case-studies/${slug}`;

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url,
      siteName: "Xorora",
      type: "article",
      images: study.heroImage ? [{ url: study.heroImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.metaDescription,
      images: study.heroImage ? [study.heroImage] : undefined,
    },
  };
}

function buildJsonLd(study: CaseStudy, slug: string) {
  const url = `${SITE_URL}/case-studies/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    image: study.heroImage ? `${SITE_URL}${study.heroImage}` : undefined,
    keywords: study.tags.join(", "),
    datePublished: study.publishedAt?.toISOString(),
    dateModified: study.updatedAt.toISOString(),
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Xorora", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Xorora", url: SITE_URL },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Work",
        item: `${SITE_URL}/our-work`,
      },
      { "@type": "ListItem", position: 3, name: study.title, item: url },
    ],
  };

  return { "@context": "https://schema.org", "@graph": [articleJsonLd, breadcrumbJsonLd] };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const jsonLd = buildJsonLd(study, slug);

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout study={study} />
    </>
  );
}
