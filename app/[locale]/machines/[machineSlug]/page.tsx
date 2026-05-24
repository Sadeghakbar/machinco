import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getMachineDetailContent } from "@/content/machines";
import { MachineDetailPageView } from "@/components/pages/MachinesPages";

type MachineDetailPageProps = {
  params: Promise<{ locale: string; machineSlug: string }>;
};

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
