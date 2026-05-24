import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getPrivacyContent } from "@/content/blogLegal";
import { LegalPage } from "@/components/pages/BlogLegalPages";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getPrivacyContent(locale as Locale);
  return <LegalPage content={content} />;
}
