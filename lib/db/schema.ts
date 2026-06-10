import { relations } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const publishStatusEnum = pgEnum("publish_status", [
  "draft",
  "published",
]);

export const caseStudyStatusEnum = pgEnum("case_study_status", [
  "draft",
  "published",
]);

export const caseStudySectionTypeEnum = pgEnum("case_study_section_type", [
  "overview",
  "market_context",
  "challenge",
  "solution",
  "architecture",
  "services",
  "tech",
  "outcomes",
  "results",
]);

export const caseStudies = pgTable("case_studies", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  tags: text("tags").array().notNull().default([]),
  lead: text("lead").notNull(),
  heroImage: text("hero_image").notNull(),
  headerBg: text("header_bg").notNull(),
  heroUrl: text("hero_url"),
  featured: integer("featured").notNull().default(0),
  sortOrder: integer("sort_order").notNull().default(0),
  status: caseStudyStatusEnum("status").notNull().default("draft"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  metaTitle: text("meta_title").notNull(),
  metaDescription: text("meta_description").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const caseStudyMetrics = pgTable("case_study_metrics", {
  id: uuid("id").defaultRandom().primaryKey(),
  caseStudyId: uuid("case_study_id")
    .notNull()
    .references(() => caseStudies.id, { onDelete: "cascade" }),
  value: text("value").notNull(),
  label: text("label").notNull(),
  note: text("note"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const caseStudySections = pgTable("case_study_sections", {
  id: uuid("id").defaultRandom().primaryKey(),
  caseStudyId: uuid("case_study_id")
    .notNull()
    .references(() => caseStudies.id, { onDelete: "cascade" }),
  type: caseStudySectionTypeEnum("type").notNull(),
  content: jsonb("content").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const caseStudiesRelations = relations(caseStudies, ({ many }) => ({
  metrics: many(caseStudyMetrics),
  sections: many(caseStudySections),
}));

export const caseStudyMetricsRelations = relations(
  caseStudyMetrics,
  ({ one }) => ({
    caseStudy: one(caseStudies, {
      fields: [caseStudyMetrics.caseStudyId],
      references: [caseStudies.id],
    }),
  }),
);

export const caseStudySectionsRelations = relations(
  caseStudySections,
  ({ one }) => ({
    caseStudy: one(caseStudies, {
      fields: [caseStudySections.caseStudyId],
      references: [caseStudies.id],
    }),
  }),
);

export const industries = pgTable("industries", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  navName: text("nav_name").notNull(),
  navIcon: text("nav_icon").notNull(),
  navDescription: text("nav_description").notNull(),
  metaTitle: text("meta_title").notNull(),
  metaDescription: text("meta_description").notNull(),
  headerBg: text("header_bg").notNull(),
  hero: jsonb("hero").notNull(),
  sections: jsonb("sections").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  status: publishStatusEnum("status").notNull().default("draft"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  readTime: text("read_time").notNull(),
  image: text("image").notNull(),
  featured: integer("featured").notNull().default(0),
  sortOrder: integer("sort_order").notNull().default(0),
  status: publishStatusEnum("status").notNull().default("draft"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const siteContent = pgTable("site_content", {
  key: text("key").primaryKey(),
  content: jsonb("content").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
