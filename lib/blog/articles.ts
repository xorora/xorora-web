import type { ComponentType } from "react";
import {
  BEST_AI_AGENT_SAAS_META,
  BEST_AI_AGENT_SAAS_SLUG,
  BestAiAgentSaasArticle,
} from "@/components/blog/posts/best-ai-agent-development-companies-saas-2026";
import {
  PYTHON_APP_GUIDE_META,
  PYTHON_APP_GUIDE_SLUG,
  PythonAppGuideArticle,
} from "@/components/blog/posts/python-application-development-guide-2026";
import {
  BEST_JAVA_STARTUPS_META,
  BEST_JAVA_STARTUPS_SLUG,
  BestJavaStartupsArticle,
} from "@/components/blog/posts/best-java-development-companies-startups-2026";
import {
  FLUTTER_VS_RN_META,
  FLUTTER_VS_RN_SLUG,
  FlutterVsRnArticle,
} from "@/components/blog/posts/flutter-vs-react-native-comparison";
import {
  NET_VS_JAVA_META,
  NET_VS_JAVA_SLUG,
  NetVsJavaArticle,
} from "@/components/blog/posts/net-vs-java-comparison";
import {
  TOP_3_DJANGO_META,
  TOP_3_DJANGO_SLUG,
  Top3DjangoArticle,
} from "@/components/blog/posts/top-3-django-development-companies";
import {
  TOP_5_LARAVEL_META,
  TOP_5_LARAVEL_SLUG,
  Top5LaravelArticle,
} from "@/components/blog/posts/top-5-laravel-development-companies";
import {
  TOP_10_PYTHON_META,
  TOP_10_PYTHON_SLUG,
  Top10PythonArticle,
} from "@/components/blog/posts/top-10-python-development-companies";
import {
  TOP_NODEJS_META,
  TOP_NODEJS_SLUG,
  TopNodejsArticle,
} from "@/components/blog/posts/top-nodejs-development-companies";
import type { BlogArticleMeta } from "./article-types";

export type {
  BlogArticleMeta,
  BlogFaqItem,
  BlogTocItem,
} from "./article-types";

export interface BlogArticleDefinition extends BlogArticleMeta {
  Article: ComponentType;
}

const BLOG_ARTICLES: Record<string, BlogArticleDefinition> = {
  [BEST_AI_AGENT_SAAS_SLUG]: {
    ...BEST_AI_AGENT_SAAS_META,
    Article: BestAiAgentSaasArticle,
  },
  [PYTHON_APP_GUIDE_SLUG]: {
    ...PYTHON_APP_GUIDE_META,
    Article: PythonAppGuideArticle,
  },
  [BEST_JAVA_STARTUPS_SLUG]: {
    ...BEST_JAVA_STARTUPS_META,
    Article: BestJavaStartupsArticle,
  },
  [FLUTTER_VS_RN_SLUG]: {
    ...FLUTTER_VS_RN_META,
    Article: FlutterVsRnArticle,
  },
  [TOP_3_DJANGO_SLUG]: {
    ...TOP_3_DJANGO_META,
    Article: Top3DjangoArticle,
  },
  [NET_VS_JAVA_SLUG]: {
    ...NET_VS_JAVA_META,
    Article: NetVsJavaArticle,
  },
  [TOP_5_LARAVEL_SLUG]: {
    ...TOP_5_LARAVEL_META,
    Article: Top5LaravelArticle,
  },
  [TOP_NODEJS_SLUG]: {
    ...TOP_NODEJS_META,
    Article: TopNodejsArticle,
  },
  [TOP_10_PYTHON_SLUG]: {
    ...TOP_10_PYTHON_META,
    Article: Top10PythonArticle,
  },
};

export function getBlogArticle(slug: string): BlogArticleDefinition | null {
  return BLOG_ARTICLES[slug] ?? null;
}
