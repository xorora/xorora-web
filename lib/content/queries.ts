import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { siteContent } from "@/lib/db/schema";

export async function getSiteContent<T>(key: string): Promise<T | null> {
  const [row] = await db
    .select()
    .from(siteContent)
    .where(eq(siteContent.key, key))
    .limit(1);

  if (!row) {
    return null;
  }

  return row.content as T;
}

export async function requireSiteContent<T>(key: string): Promise<T> {
  const content = await getSiteContent<T>(key);
  if (!content) {
    throw new Error(`Missing site content for key: ${key}`);
  }
  return content;
}
