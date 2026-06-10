import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  caseStudies,
  caseStudyMetrics,
  caseStudySections,
} from "@/lib/db/schema";
import { seedCaseStudies } from "./seed-data";

async function seed() {
  console.log("Seeding case studies…");

  for (const study of seedCaseStudies) {
    const existing = await db
      .select({ id: caseStudies.id })
      .from(caseStudies)
      .where(eq(caseStudies.slug, study.slug))
      .limit(1);

    let caseStudyId: string;

    if (existing.length > 0) {
      caseStudyId = existing[0].id;
      await db
        .update(caseStudies)
        .set({
          title: study.title,
          subtitle: study.subtitle,
          tags: study.tags,
          lead: study.lead,
          heroImage: study.heroImage,
          headerBg: study.headerBg,
          heroUrl: study.heroUrl,
          featured: study.featured ? 1 : 0,
          sortOrder: study.sortOrder,
          status: "published",
          publishedAt: new Date("2026-06-05"),
          metaTitle: study.metaTitle,
          metaDescription: study.metaDescription,
          updatedAt: new Date(),
        })
        .where(eq(caseStudies.id, caseStudyId));

      await db
        .delete(caseStudyMetrics)
        .where(eq(caseStudyMetrics.caseStudyId, caseStudyId));
      await db
        .delete(caseStudySections)
        .where(eq(caseStudySections.caseStudyId, caseStudyId));

      console.log(`  Updated: ${study.slug}`);
    } else {
      const [inserted] = await db
        .insert(caseStudies)
        .values({
          slug: study.slug,
          title: study.title,
          subtitle: study.subtitle,
          tags: study.tags,
          lead: study.lead,
          heroImage: study.heroImage,
          headerBg: study.headerBg,
          heroUrl: study.heroUrl,
          featured: study.featured ? 1 : 0,
          sortOrder: study.sortOrder,
          status: "published",
          publishedAt: new Date("2026-06-05"),
          metaTitle: study.metaTitle,
          metaDescription: study.metaDescription,
        })
        .returning({ id: caseStudies.id });

      caseStudyId = inserted.id;
      console.log(`  Created: ${study.slug}`);
    }

    if (study.metrics.length > 0) {
      await db.insert(caseStudyMetrics).values(
        study.metrics.map((metric, index) => ({
          caseStudyId,
          value: metric.value,
          label: metric.label,
          note: metric.note ?? null,
          sortOrder: index,
        })),
      );
    }

    if (study.sections.length > 0) {
      await db.insert(caseStudySections).values(
        study.sections.map((section, index) => ({
          caseStudyId,
          type: section.type,
          content: section.content,
          sortOrder: index,
        })),
      );
    }
  }

  console.log("Seed complete.");
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
