"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { getLocalizedPath } from "@/i18n/localizedPath";
import { getRouteKeyFromPathname } from "@/i18n/routeKeyFromPathname";
import type { RouteKey } from "@/content/types";
import type { LocaleMessages } from "@/i18n/getMessages";

type HeaderProps = {
  locale: Locale;
  messages: LocaleMessages;
};

const navItems: Array<{ routeKey: RouteKey; labelKey: keyof LocaleMessages["nav"] }> = [
  { routeKey: "home", labelKey: "home" },
  { routeKey: "machines.index", labelKey: "machines" },
  { routeKey: "about", labelKey: "about" },
  { routeKey: "contact", labelKey: "contact" },
  { routeKey: "blog.index", labelKey: "blog" }
];

export function Header({ locale, messages }: HeaderProps) {
  const pathname = usePathname();
  const activeRouteKey = getRouteKeyFromPathname(pathname);
  const switchLocale = locale === "de" ? "en" : "de";

  return (
    <header id="header">
      <nav id="main-nav" className="navbar navbar-default navbar-fixed-top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">{messages.header.navigationSrOnly}</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" href={getPathForRouteKey(locale, "home")}>
              <img height="65" src="/images/logo.png" alt={messages.header.logoAlt} />
            </Link>
          </div>
          <div className="collapse navbar-collapse navbar-right">
            <ul className="nav navbar-nav">
              {navItems.map((item) => (
                <li key={item.routeKey} className={activeRouteKey === item.routeKey ? "active" : ""}>
                  <Link href={getPathForRouteKey(locale, item.routeKey)}>
                    {messages.nav[item.labelKey]}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={getLocalizedPath(pathname, switchLocale)}>
                  {switchLocale.toUpperCase()}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
