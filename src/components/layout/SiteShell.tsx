import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/getMessages";

type SiteShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteShell({ locale, children }: SiteShellProps) {
  const messages = getMessages(locale);

  return (
    <>
      <Header locale={locale} messages={messages} />
      <main className="site-main">{children}</main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
