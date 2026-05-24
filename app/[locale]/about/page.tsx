import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getAboutContent } from "@/content/aboutContact";
import { AboutPageView } from "@/components/pages/AboutContactPages";
import { buildRouteMetadata } from "@/seo/metadata";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getAboutContent(locale as Locale);
  return buildRouteMetadata(locale as Locale, "about", content.hero.title, content.hero.description);
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getAboutContent(locale as Locale);
  return <AboutPageView content={content} />;
}
