import { asc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { industries } from "@/lib/db/schema";
import type {
  Industry,
  IndustryHero,
  IndustrySection,
  IndustrySlug,
} from "./types";

function mapIndustry(row: typeof industries.$inferSelect): Industry {
  return {
    slug: row.slug as IndustrySlug,
    name: row.name,
    metaTitle: row.metaTitle,
    metaDescription: row.metaDescription,
    headerBg: row.headerBg,
    hero: row.hero as IndustryHero,
    sections: row.sections as IndustrySection[],
  };
}

export interface IndustryNavItem {
  slug: IndustrySlug;
  name: string;
  icon: string;
  desc: string;
  href: string;
  headerBg: string;
}

export async function listPublishedIndustries(): Promise<Industry[]> {
  const rows = await db
    .select()
    .from(industries)
    .where(eq(industries.status, "published"))
    .orderBy(asc(industries.sortOrder));

  return rows.map(mapIndustry);
}

export async function listPublishedIndustryNavItems(): Promise<
  IndustryNavItem[]
> {
  const rows = await db
    .select()
    .from(industries)
    .where(eq(industries.status, "published"))
    .orderBy(asc(industries.sortOrder));

  return rows.map((row) => ({
    slug: row.slug as IndustrySlug,
    name: row.navName,
    icon: row.navIcon,
    desc: row.navDescription,
    href: `/industries/${row.slug}`,
    headerBg: row.headerBg,
  }));
}

export async function getPublishedIndustrySlugs(): Promise<IndustrySlug[]> {
  const rows = await db
    .select({ slug: industries.slug })
    .from(industries)
    .where(eq(industries.status, "published"))
    .orderBy(asc(industries.sortOrder));

  return rows.map((row) => row.slug as IndustrySlug);
}

export async function getAllIndustrySlugs(): Promise<IndustrySlug[]> {
  return getPublishedIndustrySlugs();
}

export async function getIndustryBySlug(
  slug: string,
): Promise<Industry | null> {
  const [row] = await db
    .select()
    .from(industries)
    .where(eq(industries.slug, slug))
    .limit(1);

  if (!row || row.status !== "published") {
    return null;
  }

  return mapIndustry(row);
}
