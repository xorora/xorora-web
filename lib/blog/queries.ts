import { asc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import type { BlogPost } from "./types";

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function mapPost(row: typeof blogPosts.$inferSelect): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    cat: row.category,
    title: row.title,
    excerpt: row.excerpt,
    read: row.readTime,
    date: formatDate(row.publishedAt),
    img: row.image,
    featured: row.featured === 1,
  };
}

export async function listPublishedBlogPosts(): Promise<BlogPost[]> {
  const rows = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.status, "published"))
    .orderBy(asc(blogPosts.sortOrder));

  return rows.map(mapPost);
}
