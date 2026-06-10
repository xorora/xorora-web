import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { industries } from "@/lib/db/schema";
import { INDUSTRIES } from "@/lib/industries/data";
import { INDUSTRY_SLUGS, type IndustrySlug } from "@/lib/industries/types";
import { XO_NAV } from "@/lib/navigation";

function slugFromHref(href: string): string {
  return href.split("/").pop() ?? "";
}

const navBySlug = new Map(
  XO_NAV.industries.map((item) => [slugFromHref(item.href), item]),
);

async function seed() {
  console.log("Seeding industries…");

  let sortOrder = 0;
  for (const slug of INDUSTRY_SLUGS) {
    const industry = INDUSTRIES[slug as IndustrySlug];
    const nav = navBySlug.get(slug);

    if (!nav) {
      console.warn(`  Skipping ${slug}: no nav metadata`);
      continue;
    }

    sortOrder += 1;

    const values = {
      slug,
      name: industry.name,
      navName: nav.name,
      navIcon: nav.icon,
      navDescription: nav.desc,
      metaTitle: industry.metaTitle,
      metaDescription: industry.metaDescription,
      headerBg: industry.headerBg,
      hero: industry.hero,
      sections: industry.sections,
      sortOrder,
      status: "published" as const,
      publishedAt: new Date("2026-06-05"),
      updatedAt: new Date(),
    };

    const existing = await db
      .select({ slug: industries.slug })
      .from(industries)
      .where(eq(industries.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      await db.update(industries).set(values).where(eq(industries.slug, slug));
      console.log(`  Updated: ${slug}`);
    } else {
      await db.insert(industries).values(values);
      console.log(`  Created: ${slug}`);
    }
  }

  console.log("Industries seed complete.");
}

seed().catch((error) => {
  console.error("Industries seed failed:", error);
  process.exit(1);
});
