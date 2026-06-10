import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLayout } from "@/components/industry-page";
import { getAllIndustrySlugs, getIndustryBySlug } from "@/lib/industries";

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

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryLayout industry={industry} />;
}
