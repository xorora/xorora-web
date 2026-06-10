export const INDUSTRY_SLUGS = [
  "health-tech",
  "real-estate",
  "fintech",
  "ecommerce",
  "edtech",
  "logistics",
  "saas",
  "startups",
  "travel-hospitality",
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export interface IndustryBadge {
  icon: string;
  label: string;
}

export interface IndustryHero {
  title: string;
  subtitle?: string;
  bullets?: string[];
  badges: IndustryBadge[];
  formTitle: string;
  ctaLabel?: string;
}

export interface SectionHeading {
  label?: string;
  title: string;
  subtitle?: string;
  lead?: string;
}

export interface IconCardItem {
  icon: string;
  title: string;
  body: string;
  cta?: string;
}

export interface ServiceItem {
  name: string;
  body: string;
  cta?: string;
}

export interface ServiceRowItem {
  icon: string;
  title: string;
  body: string;
}

export interface AiCardItem {
  icon: string;
  title: string;
  body: string;
  featured?: boolean;
  image?: string;
}

export interface AiGroupItem {
  icon: string;
  name: string;
  subtitle: string;
  items: string[];
}

export type CertificationId = "hipaa" | "hitrust" | "soc2" | "fda" | "iso27001";

export interface CertificationItem {
  id: CertificationId;
  description: string;
}

export interface ProcessChartStep {
  x: number;
  y: number;
  label: string;
}

export interface ProcessStepItem {
  number: string;
  name: string;
  body: string;
}

export interface ProcessTabItem {
  tab: string;
  body: string;
  outcomes: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeaturedCaseMetric {
  value: string;
  label: string;
}

export interface FeaturedCaseItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  metrics: FeaturedCaseMetric[];
  tags: string[];
}

export interface ChallengeItem {
  number: string;
  title: string;
  body: string;
  solution: string;
}

export interface IndustrySectorItem {
  icon: string;
  name: string;
  body: string;
  items: string[];
}

export interface ClientItem {
  icon: string;
  name: string;
  body: string;
}

export interface CapabilityItem {
  number?: string;
  icon?: string;
  title: string;
  body: string;
}

export interface WhyCallout {
  icon: string;
  text: string;
}

export interface ContactInfo {
  title: string;
  paragraphs: string[];
  email: string;
  phone: string;
  budgetOptions: string[];
  hearAboutOptions: string[];
}

export type IndustrySection =
  | {
      type: "pain";
      heading: SectionHeading;
      items: IconCardItem[];
      bg?: "surface" | "slate-50";
    }
  | {
      type: "why";
      heading: SectionHeading;
      items: IconCardItem[];
      callout?: WhyCallout;
    }
  | {
      type: "services";
      heading: SectionHeading;
      items: ServiceItem[] | ServiceRowItem[];
      layout?: "cards" | "rows";
      bg?: "surface" | "slate-50";
    }
  | {
      type: "ai-cards";
      heading: SectionHeading;
      items: AiCardItem[];
    }
  | {
      type: "ai-groups";
      heading: SectionHeading;
      items: AiGroupItem[];
      bg?: "surface" | "slate-50";
    }
  | {
      type: "certifications";
      heading: SectionHeading;
      paragraphs: string[];
      items: CertificationItem[];
    }
  | {
      type: "process-chart";
      heading: SectionHeading;
      lead: string;
      steps: ProcessChartStep[];
      ctaLabel: string;
    }
  | {
      type: "process-steps";
      heading: SectionHeading;
      steps: ProcessStepItem[];
      footer?: string;
      ctaLabel?: string;
    }
  | {
      type: "process-tabs";
      heading: SectionHeading;
      lead?: string;
      tabs: ProcessTabItem[];
      ctaLabel?: string;
    }
  | {
      type: "faq";
      heading: SectionHeading;
      items: FaqItem[];
      layout?: "split" | "centered";
      bg?: "surface" | "slate-50";
    }
  | {
      type: "band-cta";
      title: string;
      subtitle?: string;
      ctaPrimary?: string;
      ctaSecondary?: string;
      headerBg?: string;
      bg?: "slate-50" | "surface" | "navy-950";
    }
  | {
      type: "featured-case";
      heading: SectionHeading;
      case: FeaturedCaseItem;
    }
  | {
      type: "featured-cases";
      heading: SectionHeading;
      cases: FeaturedCaseItem[];
    }
  | {
      type: "capabilities";
      heading: SectionHeading;
      items: CapabilityItem[];
    }
  | {
      type: "clients";
      heading: SectionHeading;
      items: ClientItem[];
      bg?: "surface" | "slate-50";
    }
  | {
      type: "challenges";
      heading: SectionHeading;
      lead?: string;
      items: ChallengeItem[];
    }
  | {
      type: "industries";
      heading: SectionHeading;
      items: IndustrySectorItem[];
    }
  | {
      type: "what-you-get";
      heading: SectionHeading;
      items: IconCardItem[];
    }
  | {
      type: "contact";
      info: ContactInfo;
    };

export interface Industry {
  slug: IndustrySlug;
  name: string;
  metaTitle: string;
  metaDescription: string;
  headerBg: string;
  hero: IndustryHero;
  sections: IndustrySection[];
}

export type IndustriesRecord = Record<IndustrySlug, Industry>;
