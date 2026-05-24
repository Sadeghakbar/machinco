import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getBlogArticleContent } from "@/content/blogLegal";
import { BlogArticlePage } from "@/components/pages/BlogLegalPages";

type BlogDetailPageProps = {
  params: Promise<{ locale: string; postSlug: string }>;
};

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
