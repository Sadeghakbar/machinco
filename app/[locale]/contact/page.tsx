import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getContactContent } from "@/content/aboutContact";
import { ContactPageView } from "@/components/pages/AboutContactPages";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContactContent(locale as Locale);
  return <ContactPageView content={content} />;
}
