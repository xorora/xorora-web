import { eq } from "drizzle-orm";
import { HWW_FLOWS } from "@/components/how-we-work/hww-data";
import { db } from "@/lib/db";
import { siteContent } from "@/lib/db/schema";
import { SITE_CONTENT_SEED } from "./site-content-seed-data";

async function upsertContent(key: string, content: unknown) {
  const existing = await db
    .select({ key: siteContent.key })
    .from(siteContent)
    .where(eq(siteContent.key, key))
    .limit(1);

  if (existing.length > 0) {
    await db
      .update(siteContent)
      .set({ content, updatedAt: new Date() })
      .where(eq(siteContent.key, key));
    console.log(`  Updated: ${key}`);
  } else {
    await db.insert(siteContent).values({ key, content });
    console.log(`  Created: ${key}`);
  }
}

async function seed() {
  console.log("Seeding site content…");

  await upsertContent("how-we-work:flows", HWW_FLOWS);

  for (const [key, content] of Object.entries(SITE_CONTENT_SEED)) {
    await upsertContent(key, content);
  }

  console.log("Site content seed complete.");
}

seed().catch((error) => {
  console.error("Site content seed failed:", error);
  process.exit(1);
});
