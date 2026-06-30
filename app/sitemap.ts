import type { MetadataRoute } from "next";
import { listPublishedCaseStudies } from "@/lib/case-studies";
import { getAllIndustrySlugs } from "@/lib/industries";
import { ROUTES } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-dynamic";

function entry(
  path: string,
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency: "weekly",
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [industrySlugs, caseStudies] = await Promise.all([
    getAllIndustrySlugs(),
    listPublishedCaseStudies(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    entry(ROUTES.home, 1.0),
    entry(ROUTES.engineering, 0.8),
    entry(ROUTES.consulting, 0.8),
    entry(ROUTES.dataAi, 0.8),
    entry(ROUTES.managedServices, 0.8),
    entry(ROUTES.marketingServices, 0.8),
    entry(ROUTES.engagementModels, 0.8),
    entry(ROUTES.clearbeam, 0.8),
    entry(ROUTES.leadem, 0.8),
    entry(ROUTES.losono, 0.8),
    entry(ROUTES.about, 0.7),
    entry(ROUTES.howWeWork, 0.7),
    entry(ROUTES.ourWork, 0.7),
    entry(ROUTES.industries, 0.7),
    entry(ROUTES.blog, 0.7),
    entry("/privacy", 0.3),
    entry("/terms", 0.3),
  ];

  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) =>
    entry(ROUTES.industry(slug), 0.7),
  );

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) =>
    entry(ROUTES.caseStudy(study.slug), 0.7, study.publishedAt ?? undefined),
  );

  return [...staticRoutes, ...industryRoutes, ...caseStudyRoutes];
}
