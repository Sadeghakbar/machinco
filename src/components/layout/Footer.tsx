"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { getLocalizedPath } from "@/i18n/localizedPath";
import type { LocaleMessages } from "@/i18n/getMessages";

type FooterProps = {
  locale: Locale;
  messages: LocaleMessages;
};

export function Footer({ locale, messages }: FooterProps) {
  const pathname = usePathname();
  const switchLocale = locale === "de" ? "en" : "de";

  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            &copy; 2026 Machinco GmbH - {messages.footer.copyrightSuffix}
          </div>
          <div className="col-sm-4 text-right">
            <Link href={getPathForRouteKey(locale, "contact")}>{messages.footer.contact}</Link> |{" "}
            <Link href={getPathForRouteKey(locale, "legal.imprint")}>{messages.footer.imprint}</Link>{" "}
            | <Link href={getPathForRouteKey(locale, "legal.privacy")}>{messages.footer.privacy}</Link> |{" "}
            <Link href={getLocalizedPath(pathname, switchLocale)}>
              {switchLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
