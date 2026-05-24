import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getAboutContent } from "@/content/aboutContact";
import { AboutPageView } from "@/components/pages/AboutContactPages";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getAboutContent(locale as Locale);
  return <AboutPageView content={content} />;
}
