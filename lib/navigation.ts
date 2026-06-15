/**
 * Shared site navigation data — App Router paths (replaces window.XO_NAV).
 */

export const ROUTES = {
  home: "/",
  about: "/about",
  blog: "/blog",
  consulting: "/consulting",
  engineering: "/engineering",
  dataAi: "/data-ai",
  managedServices: "/managed-services",
  marketingServices: "/marketing-services",
  engagementModels: "/engagement-models",
  howWeWork: "/how-we-work",
  industries: "/industries",
  ourWork: "/our-work",
  caseStudy: (slug: string) => `/case-studies/${slug}`,
  industry: (slug: string) => `/industries/${slug}`,
} as const;

export type NavIconName =
  | "compass"
  | "code-2"
  | "database"
  | "server-cog"
  | "megaphone"
  | "handshake"
  | "heart-pulse"
  | "building-2"
  | "landmark"
  | "shopping-cart"
  | "graduation-cap"
  | "truck"
  | "layout-grid"
  | "rocket"
  | "palmtree"
  | "building"
  | "newspaper"
  | "git-branch";

export interface NavServiceItem {
  label: string;
  href: string;
}

export interface NavServiceCategory {
  name: string;
  icon: NavIconName;
  href: string;
  items: NavServiceItem[];
}

export interface NavIndustry {
  name: string;
  icon: NavIconName;
  desc: string;
  href: string;
}

export interface NavCompanyLink {
  name: string;
  icon: NavIconName;
  desc: string;
  href: string;
}

export interface NavFeaturedCaseStudy {
  tag: string;
  title: string;
  desc: string;
  img: string;
  href: string;
  stats: [string, string][];
}

export interface SiteNavigation {
  caseStudiesHref: string;
  services: NavServiceCategory[];
  industries: NavIndustry[];
  company: NavCompanyLink[];
  featured: NavFeaturedCaseStudy;
}

export const XO_NAV: SiteNavigation = {
  caseStudiesHref: ROUTES.ourWork,
  services: [
    {
      name: "Consulting",
      icon: "compass",
      href: ROUTES.consulting,
      items: [
        { label: "Discovery Workshop", href: ROUTES.consulting },
        { label: "AI Consulting", href: ROUTES.consulting },
        { label: "Digital Transformation", href: ROUTES.consulting },
      ],
    },
    {
      name: "Engineering",
      icon: "code-2",
      href: ROUTES.engineering,
      items: [
        { label: "AI Software Development", href: ROUTES.engineering },
        { label: "Custom App Development", href: ROUTES.engineering },
        { label: "Application Modernization", href: ROUTES.engineering },
        { label: "MVP / POC Development", href: ROUTES.engineering },
        { label: "CMS Development Services", href: ROUTES.engineering },
        { label: "UI/UX Services", href: ROUTES.engineering },
      ],
    },
    {
      name: "Data & AI",
      icon: "database",
      href: ROUTES.dataAi,
      items: [
        { label: "Data Analytics", href: ROUTES.dataAi },
        { label: "Data Engineering", href: ROUTES.dataAi },
        { label: "Cloud Engineering & Migration", href: ROUTES.dataAi },
        { label: "AI Agent Development", href: ROUTES.dataAi },
        { label: "ML & Data Science Services", href: ROUTES.dataAi },
        { label: "Workflow Automation Services", href: ROUTES.dataAi },
      ],
    },
    {
      name: "Managed Services",
      icon: "server-cog",
      href: ROUTES.managedServices,
      items: [
        { label: "DevOps", href: ROUTES.managedServices },
        { label: "Cybersecurity", href: ROUTES.managedServices },
        { label: "IT Infrastructure", href: ROUTES.managedServices },
      ],
    },
    {
      name: "Marketing Services",
      icon: "megaphone",
      href: ROUTES.marketingServices,
      items: [
        { label: "SEO", href: ROUTES.marketingServices },
        { label: "Local SEO", href: ROUTES.marketingServices },
        { label: "Google Ads", href: ROUTES.marketingServices },
        { label: "Meta Ads", href: ROUTES.marketingServices },
        { label: "Social Media Management", href: ROUTES.marketingServices },
        { label: "B2B Marketing", href: ROUTES.marketingServices },
      ],
    },
    {
      name: "Engagement Model",
      icon: "handshake",
      href: ROUTES.engagementModels,
      items: [
        { label: "Fixed Scope", href: ROUTES.engagementModels },
        { label: "Variable Scope", href: ROUTES.engagementModels },
        { label: "Staff Augmentation", href: ROUTES.engagementModels },
      ],
    },
  ],
  industries: [
    {
      name: "Healthcare",
      icon: "heart-pulse",
      desc: "Compliant, accessible systems that improve care delivery.",
      href: ROUTES.industry("health-tech"),
    },
    {
      name: "Real Estate",
      icon: "building-2",
      desc: "Platforms that streamline property and tenant operations.",
      href: ROUTES.industry("real-estate"),
    },
    {
      name: "Fintech",
      icon: "landmark",
      desc: "Secure infrastructure that manages risk and prevents fraud.",
      href: ROUTES.industry("fintech"),
    },
    {
      name: "E-commerce",
      icon: "shopping-cart",
      desc: "Conversion-focused commerce engines built to scale.",
      href: ROUTES.industry("ecommerce"),
    },
    {
      name: "Edtech",
      icon: "graduation-cap",
      desc: "Engaging learning platforms that scale to every student.",
      href: ROUTES.industry("edtech"),
    },
    {
      name: "Logistics",
      icon: "truck",
      desc: "Real-time visibility and automation across the supply chain.",
      href: ROUTES.industry("logistics"),
    },
    {
      name: "SaaS",
      icon: "layout-grid",
      desc: "Multi-tenant platforms engineered to scale from first customer to enterprise.",
      href: ROUTES.industry("saas"),
    },
    {
      name: "Startups",
      icon: "rocket",
      desc: "MVPs and investor-ready products built to ship fast and scale.",
      href: ROUTES.industry("startups"),
    },
    {
      name: "Travel & Hospitality",
      icon: "palmtree",
      desc: "Booking platforms and guest experiences that lift occupancy and loyalty.",
      href: ROUTES.industry("travel-hospitality"),
    },
  ],
  company: [
    {
      name: "About Us",
      icon: "building",
      desc: "Who we are and how we partner.",
      href: ROUTES.about,
    },
    {
      name: "Blogs",
      icon: "newspaper",
      desc: "Field notes on shipping production AI.",
      href: ROUTES.blog,
    },
    {
      name: "How we Work",
      icon: "git-branch",
      desc: "Our engineering process, end to end.",
      href: ROUTES.howWeWork,
    },
  ],
  featured: {
    tag: "FEATURED CASE STUDY",
    title: "From fragmented tools to unified AI voice operations",
    desc: "How we engineered four role-based portals on one shared backend — turning scattered operations into a commercially-ready product.",
    img: "/assets/mocks/portal-business.webp",
    href: ROUTES.caseStudy("unified-ai-voice-operations"),
    stats: [
      ["4", "portals"],
      ["16mo", "to production"],
    ],
  },
};

export interface FooterColumn {
  heading: string;
  href?: string;
  items: Array<
    | { label: string; href: string }
    | { label: string; action: "contact" | "top" }
  >;
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Engineering",
    href: ROUTES.engineering,
    items: [
      { label: "AI Software Development", href: ROUTES.engineering },
      { label: "Custom App Development", href: ROUTES.engineering },
      { label: "Application Modernization", href: ROUTES.engineering },
      { label: "MVP / POC Development", href: ROUTES.engineering },
      { label: "CMS Development Services", href: ROUTES.engineering },
      { label: "UI/UX Services", href: ROUTES.engineering },
    ],
  },
  {
    heading: "Data & AI",
    href: ROUTES.dataAi,
    items: [
      { label: "Data Analytics", href: ROUTES.dataAi },
      { label: "Data Engineering", href: ROUTES.dataAi },
      { label: "Cloud Engineering & Migration", href: ROUTES.dataAi },
      { label: "AI Agent Development", href: ROUTES.dataAi },
      { label: "ML & Data Science Services", href: ROUTES.dataAi },
      { label: "Workflow Automation Services", href: ROUTES.dataAi },
    ],
  },
  {
    heading: "Marketing Services",
    href: ROUTES.marketingServices,
    items: [
      { label: "SEO", href: ROUTES.marketingServices },
      { label: "Local SEO", href: ROUTES.marketingServices },
      { label: "Google Ads", href: ROUTES.marketingServices },
      { label: "Meta Ads", href: ROUTES.marketingServices },
      { label: "Social Media Management", href: ROUTES.marketingServices },
      { label: "B2B Marketing", href: ROUTES.marketingServices },
    ],
  },
  {
    heading: "Industries",
    items: XO_NAV.industries.map((ind) => ({
      label: ind.name,
      href: ind.href,
    })),
  },
  {
    heading: "Consulting",
    href: ROUTES.consulting,
    items: [
      { label: "Discovery Workshop", href: ROUTES.consulting },
      { label: "AI Consulting", href: ROUTES.consulting },
      { label: "Digital Transformation", href: ROUTES.consulting },
    ],
  },
  {
    heading: "Managed Services",
    href: ROUTES.managedServices,
    items: [
      { label: "DevOps", href: ROUTES.managedServices },
      { label: "Cybersecurity", href: ROUTES.managedServices },
      { label: "IT Infrastructure", href: ROUTES.managedServices },
    ],
  },
  {
    heading: "Engagement Model",
    href: ROUTES.engagementModels,
    items: [
      { label: "Fixed Scope", href: ROUTES.engagementModels },
      { label: "Variable Scope", href: ROUTES.engagementModels },
      { label: "Staff Augmentation", href: ROUTES.engagementModels },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", href: ROUTES.about },
      { label: "Blogs", href: ROUTES.blog },
      { label: "How we Work", href: ROUTES.howWeWork },
      { label: "Our Work", href: ROUTES.ourWork },
      { label: "Contact us", action: "contact" },
    ],
  },
];

export const FOOTER_OFFICES = [
  {
    city: "Pakistan",
    addr: "Plot # 606, Block F2, Phase 1 Johar Town, Lahore, 54000",
  },
] as const;
