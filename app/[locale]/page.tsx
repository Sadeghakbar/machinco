import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getPageContent } from "@/content/provider";

type LocaleHomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getPageContent(locale as Locale, "home");

  return (
    <section>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </section>
  );
}
