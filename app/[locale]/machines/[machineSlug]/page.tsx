import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getMachineDetailContent, getMachineRouteKey } from "@/content/machines";
import { MachineDetailPageView } from "@/components/pages/MachinesPages";
import { buildRouteMetadata } from "@/seo/metadata";

type MachineDetailPageProps = {
  params: Promise<{ locale: string; machineSlug: string }>;
};

export async function generateMetadata({ params }: MachineDetailPageProps): Promise<Metadata> {
  const { locale, machineSlug } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const routeKey = getMachineRouteKey(machineSlug);
  const content = getMachineDetailContent(locale as Locale, machineSlug);
  if (!routeKey || !content) {
    return {};
  }

  return buildRouteMetadata(locale as Locale, routeKey, content.hero.title, content.hero.description);
}

export default async function MachineDetailPage({ params }: MachineDetailPageProps) {
  const { locale, machineSlug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getMachineDetailContent(locale as Locale, machineSlug);

  if (!content) {
    notFound();
  }

  return <MachineDetailPageView content={content} />;
}
