import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/getMessages";
import "@/styles/legacy-bridge.css";

export const metadata: Metadata = {
  title: "Machinco",
  description: "Industrial machine solutions"
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const messages = getMessages(resolvedLocale);

  return (
    <>
      <Header locale={resolvedLocale} messages={messages} />
      <main className="site-main">{children}</main>
      <Footer locale={resolvedLocale} messages={messages} />
    </>
  );
}
