import type {
  caseStudySectionTypeEnum,
  caseStudyStatusEnum,
} from "@/lib/db/schema";

export type CaseStudyStatus = (typeof caseStudyStatusEnum.enumValues)[number];
export type CaseStudySectionType =
  (typeof caseStudySectionTypeEnum.enumValues)[number];

export interface MetaItem {
  label: string;
  value: string;
}

export interface ChallengeSolutionPair {
  challenge: string;
  solution: string;
}

export interface BulletItem {
  title?: string;
  body: string;
}

export interface ArchitectureItem {
  title: string;
  body: string;
}

export interface ServiceItem {
  icon?: string;
  name: string;
}

export interface CaseStudySectionContent {
  label?: string;
  title?: string;
  subtitle?: string;
  lead?: string;
  paragraphs?: string[];
  bullets?: BulletItem[] | string[];
  pairs?: ChallengeSolutionPair[];
  pipeline?: string;
  chips?: string;
  meta?: MetaItem[];
  items?: ArchitectureItem[];
  services?: ServiceItem[];
  quote?: string;
}

export interface CaseStudyMetric {
  id: string;
  value: string;
  label: string;
  note: string | null;
  sortOrder: number;
}

export interface CaseStudySection {
  id: string;
  type: CaseStudySectionType;
  content: CaseStudySectionContent;
  sortOrder: number;
}

export interface CaseStudySummary {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  lead: string;
  heroImage: string;
  headerBg: string;
  featured: boolean;
  sortOrder: number;
  publishedAt: Date | null;
}

export interface CaseStudyListItem extends CaseStudySummary {
  metrics: Array<Pick<CaseStudyMetric, "value" | "label">>;
}

export interface CaseStudy extends CaseStudySummary {
  heroUrl: string | null;
  status: CaseStudyStatus;
  metaTitle: string;
  metaDescription: string;
  createdAt: Date;
  updatedAt: Date;
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
}
