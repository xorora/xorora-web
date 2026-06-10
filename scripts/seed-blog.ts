import { eq } from "drizzle-orm";
import { BLOG_POSTS } from "@/components/blog/blog-data";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseDate(date: string): Date {
  return new Date(date);
}

async function seed() {
  console.log("Seeding blog posts…");

  for (const [index, post] of BLOG_POSTS.entries()) {
    const slug = slugify(post.title);

    const values = {
      slug,
      category: post.cat,
      title: post.title,
      excerpt: post.excerpt,
      readTime: post.read,
      image: post.img,
      featured: post.featured ? 1 : 0,
      sortOrder: index + 1,
      status: "published" as const,
      publishedAt: parseDate(post.date),
      updatedAt: new Date(),
    };

    const existing = await db
      .select({ slug: blogPosts.slug })
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      await db.update(blogPosts).set(values).where(eq(blogPosts.slug, slug));
      console.log(`  Updated: ${slug}`);
    } else {
      await db.insert(blogPosts).values(values);
      console.log(`  Created: ${slug}`);
    }
  }

  console.log("Blog seed complete.");
}

seed().catch((error) => {
  console.error("Blog seed failed:", error);
  process.exit(1);
});
