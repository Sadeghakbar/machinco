import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getPrivacyContent } from "@/content/blogLegal";
import { LegalPage } from "@/components/pages/BlogLegalPages";
import { buildRouteMetadata } from "@/seo/metadata";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getPrivacyContent(locale as Locale);
  return buildRouteMetadata(locale as Locale, "legal.privacy", content.hero.description);
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getPrivacyContent(locale as Locale);
  return <LegalPage content={content} />;
}
