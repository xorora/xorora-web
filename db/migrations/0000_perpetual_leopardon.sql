CREATE TYPE "public"."case_study_section_type" AS ENUM('overview', 'market_context', 'challenge', 'solution', 'architecture', 'services', 'tech', 'outcomes', 'results');--> statement-breakpoint
CREATE TYPE "public"."case_study_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TABLE "case_studies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"subtitle" text NOT NULL,
	"tags" text[] DEFAULT '{}' NOT NULL,
	"lead" text NOT NULL,
	"hero_image" text NOT NULL,
	"header_bg" text NOT NULL,
	"hero_url" text,
	"featured" integer DEFAULT 0 NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"status" "case_study_status" DEFAULT 'draft' NOT NULL,
	"published_at" timestamp with time zone,
	"meta_title" text NOT NULL,
	"meta_description" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "case_studies_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "case_study_metrics" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"case_study_id" uuid NOT NULL,
	"value" text NOT NULL,
	"label" text NOT NULL,
	"note" text,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "case_study_sections" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"case_study_id" uuid NOT NULL,
	"type" "case_study_section_type" NOT NULL,
	"content" jsonb NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "case_study_metrics" ADD CONSTRAINT "case_study_metrics_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "case_study_sections" ADD CONSTRAINT "case_study_sections_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;