import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getBlogArticleContent, getBlogPostSlugs, getBlogRouteKey } from "@/content/blogLegal";
import { BlogArticlePage } from "@/components/pages/BlogLegalPages";
import { buildRouteMetadata } from "@/seo/metadata";

type BlogDetailPageProps = {
  params: Promise<{ locale: string; postSlug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => getBlogPostSlugs().map((postSlug) => ({ locale, postSlug })));
}

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

  return buildRouteMetadata(
    locale as Locale,
    routeKey,
    content.hero.description,
    `${content.hero.title} | Machinco GmbH`
  );
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
