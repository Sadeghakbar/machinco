import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getImprintContent } from "@/content/blogLegal";
import { LegalPage } from "@/components/pages/BlogLegalPages";

type ImprintPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ImprintPage({ params }: ImprintPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getImprintContent(locale as Locale);
  return <LegalPage content={content} />;
}
