import Image from "next/image";
import { BlogNewsletter } from "@/components/blog/blog-newsletter";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import {
  BLOG_FEATURE_IMAGE_QUALITY,
  BLOG_HERO_IMAGE_SIZES,
} from "@/lib/blog/image";
import type { BlogPost } from "@/lib/blog/types";
import { blogImageAlt, blogImageTitle } from "@/lib/image-seo";
import { SITE_URL } from "@/lib/site-url";
import { BlogAiSummary } from "./blog-ai-summary";
import { BlogQuoteModalProvider } from "./blog-quote-modal";
import { BlogShare } from "./blog-share";
import { BlogToc } from "./blog-toc";

interface BlogPostLayoutProps {
  post: BlogPost;
  article: BlogArticleMeta;
  shareUrl: string;
  children: React.ReactNode;
}

export function BlogPostLayout({
  post,
  article,
  shareUrl,
  children,
}: BlogPostLayoutProps) {
  const url = shareUrl.startsWith("http") ? shareUrl : `${SITE_URL}${shareUrl}`;

  return (
    <BlogQuoteModalProvider source={post.slug}>
      <article className="bg-surface">
        <header className="px-8 pt-[clamp(120px,14vw,160px)] pb-8">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-5 flex flex-wrap items-center gap-2.5 font-sans text-[13px] text-fg3">
              <span className="rounded-pill border border-indigo-200 bg-indigo-50 px-2.5 py-1 font-mono text-[11px] text-xo-indigo tracking-[0.08em]">
                {post.cat}
              </span>
              <span className="h-[3px] w-[3px] rounded-full bg-slate-300" />
              <time dateTime={post.publishedAt?.toISOString()}>
                {post.date}
              </time>
              <span className="h-[3px] w-[3px] rounded-full bg-slate-300" />
              <span>{post.read} read</span>
            </div>
            <h1 className="m-0 mb-5 max-w-[920px] text-balance font-extrabold font-sans text-[clamp(32px,4.6vw,56px)] text-fg1 leading-[1.08] tracking-[-0.03em]">
              {post.title}
            </h1>
            <p className="m-0 max-w-[720px] font-sans text-[clamp(17px,2vw,20px)] text-fg2 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="px-8 pb-10">
          <div className="relative z-0 mx-auto aspect-[16/9] max-w-[1180px] overflow-hidden rounded-(--r-xl) border border-border bg-navy-950">
            <Image
              src={post.img}
              alt={blogImageAlt(post.title)}
              title={blogImageTitle(post.excerpt, post.cat)}
              fill
              priority
              quality={BLOG_FEATURE_IMAGE_QUALITY}
              sizes={BLOG_HERO_IMAGE_SIZES}
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="px-8 pb-[clamp(48px,6vw,80px)]">
          <div className="blog-post-grid mx-auto grid max-w-[1180px] grid-cols-[240px_1fr] items-start gap-[clamp(28px,4vw,56px)]">
            <aside className="blog-post-toc sticky top-[110px] isolate z-30">
              <BlogToc items={article.toc} />
              <div className="blog-post-toc-desktop">
                <BlogShare url={url} title={article.seoTitle} />
                <BlogAiSummary summary={article.aiSummary} />
              </div>
            </aside>
            <div className="relative z-0 min-w-0">
              <div className="blog-post-toc-mobile">
                <BlogShare url={url} title={article.seoTitle} />
                <BlogAiSummary summary={article.aiSummary} />
              </div>
              {children}
            </div>
          </div>
        </div>
      </article>
      <BlogNewsletter />
    </BlogQuoteModalProvider>
  );
}
