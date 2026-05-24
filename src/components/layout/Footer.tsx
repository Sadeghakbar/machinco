"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { getRouteKeyFromPathname } from "@/i18n/routeKeyFromPathname";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { LocaleMessages } from "@/i18n/getMessages";

type FooterProps = {
  locale: Locale;
  messages: LocaleMessages;
};

export function Footer({ locale, messages }: FooterProps) {
  const pathname = usePathname();
  const currentRouteKey = getRouteKeyFromPathname(pathname);

  return (
    <footer className="border-top mt-5 py-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>&copy; 2026 Machinco GmbH</div>
        <div className="d-flex gap-3 align-items-center">
          <Link href={getPathForRouteKey(locale, "contact")}>{messages.footer.contact}</Link>
          <Link href={getPathForRouteKey(locale, "legal.imprint")}>{messages.footer.imprint}</Link>
          <Link href={getPathForRouteKey(locale, "legal.privacy")}>{messages.footer.privacy}</Link>
          <LanguageSwitcher locale={locale} routeKey={currentRouteKey} />
        </div>
      </Container>
    </footer>
  );
}
