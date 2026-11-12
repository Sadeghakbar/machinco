import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getContactContent } from "@/content/aboutContact";
import { ContactPageView } from "@/components/pages/AboutContactPages";
import { buildRouteMetadata } from "@/seo/metadata";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getContactContent(locale as Locale);
  const locationSentence =
    locale === "de"
      ? " Hauptstandort & Lager: Dornierstraße 9, 86456 Gablingen bei Augsburg."
      : " Main warehouse & business location: Dornierstraße 9, 86456 Gablingen near Augsburg, Germany.";
  return buildRouteMetadata(locale as Locale, "contact", `${content.hero.description}${locationSentence}`);
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContactContent(locale as Locale);
  return <ContactPageView locale={locale as Locale} content={content} />;
}
