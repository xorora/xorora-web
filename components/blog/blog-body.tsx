"use client";

import { ArrowRight, Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { BLOG_CATEGORIES, type BlogCategory, type BlogPost } from "@/lib/blog";
import {
  BLOG_CARD_IMAGE_SIZES,
  BLOG_FEATURE_IMAGE_QUALITY,
} from "@/lib/blog/image";
import { blogImageAlt, blogImageTitle } from "@/lib/image-seo";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface BlogBodyProps {
  posts: BlogPost[];
}

export function BlogBody({ posts }: BlogBodyProps) {
  const [category, setCategory] = useState<BlogCategory>("All posts");

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const post of posts) {
      map[post.cat] = (map[post.cat] ?? 0) + 1;
    }
    return map;
  }, [posts]);

  const filteredPosts =
    category === "All posts"
      ? posts
      : posts.filter((post) => post.cat === category);

  return (
    <LightSection bg="var(--surface)">
      <div className="blog-body-grid grid grid-cols-[256px_1fr] items-start gap-[clamp(28px,4vw,56px)]">
        <aside className="blog-sidebar sticky top-[100px]">
          <div className="mb-4 font-mono text-[11px] text-fg3 uppercase tracking-[0.16em]">
            Categories
          </div>
          <div className="blog-cats flex flex-col gap-1">
            {BLOG_CATEGORIES.map((cat) => {
              const active = category === cat;
              const count =
                cat === "All posts" ? posts.length : (counts[cat] ?? 0);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-2.5 rounded-(--r-md) border border-transparent px-3.5 py-[11px] text-left font-sans text-[14.5px] transition-all duration-150",
                    active
                      ? "bg-indigo-50 font-semibold text-xo-indigo"
                      : "bg-transparent font-medium text-fg2 hover:bg-slate-50",
                  )}
                >
                  <span>{cat}</span>
                  <span
                    className={cn(
                      "font-mono text-[11.5px]",
                      active ? "text-xo-indigo" : "text-slate-400",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="relative mt-7 overflow-hidden rounded-(--r-lg) bg-navy-900 p-[clamp(20px,2.4vw,26px)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_100%_0%,rgba(70,76,159,0.4),transparent_60%)]" />
            <div className="relative">
              <Rss
                className="mb-3 h-[22px] w-[22px] text-tangerine-400"
                aria-hidden
              />
              <div className="mb-1.5 font-sans font-semibold text-base text-white">
                Never miss a post
              </div>
              <p className="mb-3.5 font-sans text-[13px] text-white/60 leading-snug">
                One engineering note a month. No spam.
              </p>
              <a
                href="#blog-news"
                className="inline-flex items-center gap-[7px] font-sans font-semibold text-[13.5px] text-tangerine-400 no-underline"
              >
                Subscribe
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="m-0 font-bold font-sans text-[clamp(22px,2.6vw,30px)] text-fg1 tracking-[-0.015em]">
              {category}
            </h2>
            <span className="font-sans text-fg3 text-sm">
              {filteredPosts.length} article
              {filteredPosts.length === 1 ? "" : "s"}
            </span>
          </div>
          <div className="blog-posts-grid grid grid-cols-1 gap-[clamp(16px,2.5vw,22px)] sm:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </LightSection>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={ROUTES.blogPost(post.slug)}
      className={cn(
        "blog-card group flex h-full flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface no-underline shadow-xs",
        "transition-all duration-220 ease-in-out",
        "hover:translate-y-[-3px] hover:border-border-strong hover:shadow-md",
      )}
    >
      <div className="blog-card-media relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#080C1E]">
        <Image
          src={post.img}
          alt={blogImageAlt(post.title)}
          title={blogImageTitle(post.excerpt, post.cat)}
          fill
          quality={BLOG_FEATURE_IMAGE_QUALITY}
          sizes={BLOG_CARD_IMAGE_SIZES}
          className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[rgba(8,12,30,0.1)] to-[rgba(8,12,30,0.45)]" />
        <span className="absolute top-3.5 left-3.5 rounded-pill border border-white/18 bg-[rgba(8,12,30,0.55)] px-[11px] py-[5px] font-mono text-[10.5px] text-white tracking-[0.08em] backdrop-blur-sm">
          {post.cat}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-[clamp(20px,2.5vw,28px)]">
        <div className="mb-2.5 flex items-center gap-2.5 font-sans text-[12.5px] text-fg3">
          <span>{post.date}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-slate-300" />
          <span>{post.read} read</span>
        </div>
        <h3 className="mb-2 font-sans font-semibold text-[clamp(18px,2vw,22px)] text-fg1 leading-snug tracking-[-0.01em]">
          {post.title}
        </h3>
        <p className="m-0 line-clamp-3 flex-1 font-sans text-[14.5px] text-fg2 leading-relaxed">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-[7px] font-sans font-semibold text-accent text-sm transition-colors duration-150 group-hover:text-tangerine-600">
          Read article
          <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
