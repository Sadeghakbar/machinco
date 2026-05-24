import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getMachinesIndexContent } from "@/content/machines";
import { MachinesIndexPage } from "@/components/pages/MachinesPages";
import { buildRouteMetadata } from "@/seo/metadata";

type MachinesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MachinesPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getMachinesIndexContent(locale as Locale);
  return buildRouteMetadata(
    locale as Locale,
    "machines.index",
    content.hero.title,
    content.hero.description
  );
}

export default async function MachinesPage({ params }: MachinesPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const content = getMachinesIndexContent(resolvedLocale);
  return <MachinesIndexPage content={content} locale={resolvedLocale} />;
}
