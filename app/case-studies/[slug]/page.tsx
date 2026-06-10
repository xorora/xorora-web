import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { getCaseStudyBySlug } from "@/lib/case-studies";

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

  return {
    title: study.metaTitle,
    description: study.metaDescription,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyLayout study={study} />;
}
