import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getMachinesIndexContent } from "@/content/machines";
import { MachinesIndexPage } from "@/components/pages/MachinesPages";

type MachinesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function MachinesPage({ params }: MachinesPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getMachinesIndexContent(locale as Locale);
  return <MachinesIndexPage content={content} />;
}
