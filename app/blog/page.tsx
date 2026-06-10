import type { Metadata } from "next";
import {
  BlogBody,
  BlogContact,
  BlogHeader,
  BlogNewsletter,
} from "@/components/blog";
import { listPublishedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Xorora",
  description:
    "Field notes on shipping production AI from the Xorora team. Engineering practices, product thinking, and lessons from the systems we build.",
};

export default async function BlogPage() {
  const posts = await listPublishedBlogPosts();

  return (
    <div className="bg-surface">
      <BlogHeader />
      <BlogBody posts={posts} />
      <BlogNewsletter />
      <BlogContact />
    </div>
  );
}
