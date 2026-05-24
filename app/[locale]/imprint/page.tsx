import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getImprintContent } from "@/content/blogLegal";
import { LegalPage } from "@/components/pages/BlogLegalPages";
import { buildRouteMetadata } from "@/seo/metadata";

type ImprintPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ImprintPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getImprintContent(locale as Locale);
  return buildRouteMetadata(locale as Locale, "legal.imprint", content.hero.description);
}

export default async function ImprintPage({ params }: ImprintPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getImprintContent(locale as Locale);
  return <LegalPage content={content} />;
}
