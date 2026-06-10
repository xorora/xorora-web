import { getFeaturedCaseStudy } from "@/lib/case-studies";
import { listPublishedIndustryNavItems } from "@/lib/industries/queries";
import {
  FOOTER_COLUMNS,
  type FooterColumn,
  type NavFeaturedCaseStudy,
  type NavIndustry,
  ROUTES,
  type SiteNavigation,
  XO_NAV,
} from "@/lib/navigation";

function mapFeaturedCaseStudy(
  study: NonNullable<Awaited<ReturnType<typeof getFeaturedCaseStudy>>>,
): NavFeaturedCaseStudy {
  return {
    tag: "FEATURED CASE STUDY",
    title: study.title.replace(/\.$/, ""),
    desc: study.lead,
    img: study.heroImage,
    href: ROUTES.caseStudy(study.slug),
    stats: study.metrics
      .slice(0, 2)
      .map((metric) => [metric.value, metric.label]),
  };
}

export async function buildSiteNavigation(): Promise<SiteNavigation> {
  const [industryItems, featuredStudy] = await Promise.all([
    listPublishedIndustryNavItems(),
    getFeaturedCaseStudy(),
  ]);

  const industries: NavIndustry[] = industryItems.map((item) => ({
    name: item.name,
    icon: item.icon as NavIndustry["icon"],
    desc: item.desc,
    href: item.href,
  }));

  if (!featuredStudy) {
    throw new Error(
      "No featured case study found in the database. Run `bun run db:seed` to populate content.",
    );
  }

  return {
    ...XO_NAV,
    industries,
    featured: mapFeaturedCaseStudy(featuredStudy),
  };
}

export async function listIndustryNavItems(): Promise<NavIndustry[]> {
  const items = await listPublishedIndustryNavItems();
  return items.map((item) => ({
    name: item.name,
    icon: item.icon as NavIndustry["icon"],
    desc: item.desc,
    href: item.href,
  }));
}

export async function listIndustryNames(): Promise<string[]> {
  const items = await listPublishedIndustryNavItems();
  return items.map((item) => item.name);
}

export async function buildFooterColumns(): Promise<FooterColumn[]> {
  const industries = await listIndustryNavItems();

  return FOOTER_COLUMNS.map((column) =>
    column.heading === "Industries"
      ? {
          ...column,
          items: industries.map((ind) => ({
            label: ind.name,
            href: ind.href,
          })),
        }
      : column,
  );
}
