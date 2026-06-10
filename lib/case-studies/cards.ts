import { ROUTES } from "@/lib/navigation";
import type { CaseStudyListItem } from "./types";

export interface CaseStudyCardData {
  href: string;
  img: string;
  tag: string;
  title: string;
  stat: string;
  statLabel: string;
}

export function toCaseStudyCard(
  study: CaseStudyListItem,
  options?: { title?: string; tag?: string; metricIndex?: number },
): CaseStudyCardData {
  const metricIndex = options?.metricIndex ?? 0;
  const metric = study.metrics[metricIndex];

  return {
    href: ROUTES.caseStudy(study.slug),
    img: study.heroImage,
    tag:
      options?.tag ??
      study.tags[0] ??
      study.subtitle.split("·")[0]?.trim() ??
      "",
    title: options?.title ?? study.title.replace(/\.$/, ""),
    stat: metric?.value ?? "",
    statLabel: metric?.label ?? "",
  };
}

export function toCaseStudyCards(
  studies: CaseStudyListItem[],
  limit?: number,
): CaseStudyCardData[] {
  const slice = limit ? studies.slice(0, limit) : studies;
  return slice.map((study) => toCaseStudyCard(study));
}

export interface CaseStudyTileData {
  href: string;
  img: string;
  tags: string[];
  title: string;
  desc: string;
  stats: [string, string][];
}

export function toCaseStudyTile(study: CaseStudyListItem): CaseStudyTileData {
  return {
    href: ROUTES.caseStudy(study.slug),
    img: study.heroImage,
    tags: study.tags.slice(0, 2),
    title: study.title.replace(/\.$/, ""),
    desc: study.lead,
    stats: study.metrics
      .slice(0, 2)
      .map((metric) => [metric.value, metric.label] as [string, string]),
  };
}

export function toCaseStudyTiles(
  studies: CaseStudyListItem[],
  limit?: number,
): CaseStudyTileData[] {
  const slice = limit ? studies.slice(0, limit) : studies;
  return slice.map(toCaseStudyTile);
}
