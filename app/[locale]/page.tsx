import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getHomeContent } from "@/content/home";
import { HomePage } from "@/components/pages/HomePage";
import { buildRouteMetadata } from "@/seo/metadata";

type LocaleHomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleHomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getHomeContent(locale as Locale);
  return buildRouteMetadata(locale as Locale, "home", content.hero.title, content.hero.description);
}

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const content = getHomeContent(resolvedLocale);
  return <HomePage locale={resolvedLocale} content={content} />;
}
