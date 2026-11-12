"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { getLocalizedPath } from "@/i18n/localizedPath";
import type { LocaleMessages } from "@/i18n/getMessages";
import { GABLINGEN_MAPS_URL, getLocationCopy } from "@/content/business";

type FooterProps = {
  locale: Locale;
  messages: LocaleMessages;
};

export function Footer({ locale, messages }: FooterProps) {
  const pathname = usePathname();
  const switchLocale = locale === "de" ? "en" : "de";
  const location = getLocationCopy(locale);

  return (
    <footer id="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-sm-7 footer-brand">
            <p className="footer-location">
              <span className="footer-location-label">{location.primaryLabel}:</span>{" "}
              <a href={GABLINGEN_MAPS_URL} target="_blank" rel="noopener noreferrer">
                <strong>Machinco GmbH, {location.primaryLines[0]}, {location.primaryLines[1]}</strong>
              </a>
              <br />
              <span className="footer-office">
                {location.officeLabel}: {location.officeLines.join(", ")}
              </span>
            </p>
            <p className="footer-copyright">
              &copy; 2026 Machinco GmbH - {messages.footer.copyrightSuffix}
            </p>
          </div>
          <div className="col-sm-5 text-right">
            <ul className="footer-links">
              <li>
                <Link href={getPathForRouteKey(locale, "contact")}>{messages.footer.contact}</Link>
              </li>
              <li>
                <Link href={getPathForRouteKey(locale, "legal.imprint")}>{messages.footer.imprint}</Link>
              </li>
              <li>
                <Link href={getPathForRouteKey(locale, "legal.privacy")}>{messages.footer.privacy}</Link>
              </li>
              <li>
                <Link href={getLocalizedPath(pathname, switchLocale)} hrefLang={switchLocale}>
                  {switchLocale.toUpperCase()}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
