import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getBlogArticleContent, getBlogRouteKey } from "@/content/blogLegal";
import { BlogArticlePage } from "@/components/pages/BlogLegalPages";
import { buildRouteMetadata } from "@/seo/metadata";

type BlogDetailPageProps = {
  params: Promise<{ locale: string; postSlug: string }>;
};

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { locale, postSlug } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const routeKey = getBlogRouteKey(postSlug);
  const content = getBlogArticleContent(locale as Locale, postSlug);
  if (!routeKey || !content) {
    return {};
  }

  return buildRouteMetadata(locale as Locale, routeKey, content.hero.title, content.hero.description);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, postSlug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getBlogArticleContent(locale as Locale, postSlug);

  if (!content) {
    notFound();
  }

  return <BlogArticlePage content={content} />;
}
