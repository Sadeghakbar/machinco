import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getBlogIndexContent } from "@/content/blogLegal";
import { BlogIndexPage } from "@/components/pages/BlogLegalPages";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getBlogIndexContent(locale as Locale);
  return <BlogIndexPage content={content} />;
}
