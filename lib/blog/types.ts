export interface BlogPost {
  id: string;
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  img: string;
  featured: boolean;
}

export const BLOG_CATEGORIES = [
  "All posts",
  "AI Engineering",
  "Product",
  "Cloud & Security",
  "Industry",
  "Case Notes",
  "Company",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
