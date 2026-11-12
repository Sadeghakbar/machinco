import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getMachineDetailContent, getMachineSlugs } from "@/content/machines";
import { MachineDetailPageView } from "@/components/pages/MachinesPages";
import { buildMachineMetadata } from "@/seo/metadata";

type MachineDetailPageProps = {
  params: Promise<{ locale: string; machineSlug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getMachineSlugs().map((machineSlug) => ({ locale, machineSlug }))
  );
}

export async function generateMetadata({ params }: MachineDetailPageProps): Promise<Metadata> {
  const { locale, machineSlug } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getMachineDetailContent(locale as Locale, machineSlug);
  if (!content) {
    return {};
  }

  return buildMachineMetadata(locale as Locale, machineSlug, content.summary, content.title, content.heroImage);
}

export default async function MachineDetailPage({ params }: MachineDetailPageProps) {
  const { locale, machineSlug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const content = getMachineDetailContent(resolvedLocale, machineSlug);

  if (!content) {
    notFound();
  }

  return <MachineDetailPageView content={content} locale={resolvedLocale} />;
}
