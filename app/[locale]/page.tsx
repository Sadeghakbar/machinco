import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getHomeContent } from "@/content/home";
import { HomePage } from "@/components/pages/HomePage";

type LocaleHomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const content = getHomeContent(resolvedLocale);
  return <HomePage locale={resolvedLocale} content={content} />;
}
