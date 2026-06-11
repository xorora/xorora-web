import { and, asc, eq, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  caseStudies,
  caseStudyMetrics,
  caseStudySections,
} from "@/lib/db/schema";
import type {
  CaseStudy,
  CaseStudyListItem,
  CaseStudySectionContent,
  CaseStudySummary,
} from "./types";

function mapSummary(row: typeof caseStudies.$inferSelect): CaseStudySummary {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    tags: row.tags,
    lead: row.lead,
    heroImage: row.heroImage,
    headerBg: row.headerBg,
    featured: row.featured === 1,
    sortOrder: row.sortOrder,
    publishedAt: row.publishedAt,
  };
}

async function loadCaseStudyWithRelations(
  study: typeof caseStudies.$inferSelect,
): Promise<CaseStudy> {
  const [metrics, sections] = await Promise.all([
    db
      .select()
      .from(caseStudyMetrics)
      .where(eq(caseStudyMetrics.caseStudyId, study.id))
      .orderBy(asc(caseStudyMetrics.sortOrder)),
    db
      .select()
      .from(caseStudySections)
      .where(eq(caseStudySections.caseStudyId, study.id))
      .orderBy(asc(caseStudySections.sortOrder)),
  ]);

  return {
    ...mapSummary(study),
    heroUrl: study.heroUrl,
    status: study.status,
    metaTitle: study.metaTitle,
    metaDescription: study.metaDescription,
    createdAt: study.createdAt,
    updatedAt: study.updatedAt,
    metrics: metrics.map((metric) => ({
      id: metric.id,
      value: metric.value,
      label: metric.label,
      note: metric.note,
      sortOrder: metric.sortOrder,
    })),
    sections: sections.map((section) => ({
      id: section.id,
      type: section.type,
      content: section.content as CaseStudySectionContent,
      sortOrder: section.sortOrder,
    })),
  };
}

export async function listPublishedCaseStudies(): Promise<CaseStudyListItem[]> {
  const rows = await db
    .select()
    .from(caseStudies)
    .where(eq(caseStudies.status, "published"))
    .orderBy(asc(caseStudies.sortOrder));

  if (rows.length === 0) {
    return [];
  }

  const studyIds = rows.map((row) => row.id);
  const metricRows = await db
    .select()
    .from(caseStudyMetrics)
    .where(inArray(caseStudyMetrics.caseStudyId, studyIds))
    .orderBy(asc(caseStudyMetrics.sortOrder));

  const metricsByStudyId = new Map<
    string,
    Array<{ value: string; label: string }>
  >();

  for (const metric of metricRows) {
    const existing = metricsByStudyId.get(metric.caseStudyId) ?? [];
    existing.push({ value: metric.value, label: metric.label });
    metricsByStudyId.set(metric.caseStudyId, existing);
  }

  return rows.map((row) => ({
    ...mapSummary(row),
    metrics: metricsByStudyId.get(row.id) ?? [],
  }));
}

export async function getFeaturedCaseStudy(): Promise<CaseStudy | null> {
  const [study] = await db
    .select()
    .from(caseStudies)
    .where(
      and(eq(caseStudies.status, "published"), eq(caseStudies.featured, 1)),
    )
    .orderBy(asc(caseStudies.sortOrder))
    .limit(1);

  if (!study) {
    return null;
  }

  return loadCaseStudyWithRelations(study);
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  const [study] = await db
    .select()
    .from(caseStudies)
    .where(and(eq(caseStudies.slug, slug), eq(caseStudies.status, "published")))
    .limit(1);

  if (!study) {
    return null;
  }

  return loadCaseStudyWithRelations(study);
}
