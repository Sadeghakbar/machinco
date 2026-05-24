import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getBlogIndexContent } from "@/content/blogLegal";
import { BlogIndexPage } from "@/components/pages/BlogLegalPages";
import { buildRouteMetadata } from "@/seo/metadata";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getBlogIndexContent(locale as Locale);
  return buildRouteMetadata(locale as Locale, "blog.index", content.hero.title, content.hero.description);
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getBlogIndexContent(locale as Locale);
  return <BlogIndexPage content={content} />;
}
