"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { getLocalizedPath } from "@/i18n/localizedPath";
import { getRouteKeyFromPathname } from "@/i18n/routeKeyFromPathname";
import type { RouteKey } from "@/content/types";
import type { LocaleMessages } from "@/i18n/getMessages";
import { hasVisibleProjects } from "@/content/projects";

type HeaderProps = {
  locale: Locale;
  messages: LocaleMessages;
};

const navItems: Array<{ routeKey: RouteKey; labelKey: keyof LocaleMessages["nav"] }> = [
  { routeKey: "home", labelKey: "home" },
  { routeKey: "machines.index", labelKey: "machines" },
  { routeKey: "projects.index", labelKey: "projects" },
  { routeKey: "about", labelKey: "about" },
  { routeKey: "contact", labelKey: "contact" },
  { routeKey: "blog.index", labelKey: "blog" }
];

// The Projects link only appears once at least one project is visible (published, or draft in dev).
const visibleNavItems = hasVisibleProjects()
  ? navItems
  : navItems.filter((item) => item.routeKey !== "projects.index");

const MOBILE_NAV_ID = "main-nav-collapse";
const DESKTOP_BREAKPOINT = 768;

export function Header({ locale, messages }: HeaderProps) {
  const pathname = usePathname();
  const activeRouteKey = getRouteKeyFromPathname(pathname);
  const switchLocale = locale === "de" ? "en" : "de";
  // Remember on which path the menu was opened: navigating anywhere else closes it
  // automatically (including back/forward), without resetting state in an effect.
  const [openedOnPath, setOpenedOnPath] = useState<string | null>(null);
  const menuOpen = openedOnPath !== null && openedOnPath === pathname;

  const closeMenu = useCallback(() => setOpenedOnPath(null), []);
  const toggleMenu = () => setOpenedOnPath(menuOpen ? null : pathname);

  // The shared root layout renders lang="de"; correct it on English pages.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenedOnPath(null);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setOpenedOnPath(null);
      }
    };

    document.body.classList.add("mobile-nav-open");
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.classList.remove("mobile-nav-open");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header id="header">
      <nav
        id="main-nav"
        className={`navbar navbar-default navbar-fixed-top${menuOpen ? " is-menu-open" : ""}`}
        aria-label={messages.header.navigationSrOnly}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className={`navbar-toggle${menuOpen ? "" : " collapsed"}`}
              aria-controls={MOBILE_NAV_ID}
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">{messages.header.navigationSrOnly}</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" href={getPathForRouteKey(locale, "home")} onClick={closeMenu}>
              <img height="65" src="/images/logo.png" alt={messages.header.logoAlt} />
            </Link>
          </div>
          <div id={MOBILE_NAV_ID} className={`collapse navbar-collapse navbar-right${menuOpen ? " in" : ""}`}>
            <ul className="nav navbar-nav">
              {visibleNavItems.map((item) => {
                const isActive = activeRouteKey === item.routeKey;
                return (
                  <li key={item.routeKey} className={isActive ? "active" : ""}>
                    <Link
                      href={getPathForRouteKey(locale, item.routeKey)}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {messages.nav[item.labelKey]}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-locale-switch">
                <Link href={getLocalizedPath(pathname, switchLocale)} hrefLang={switchLocale} onClick={closeMenu}>
                  {switchLocale.toUpperCase()}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {menuOpen ? <div className="mobile-nav-backdrop" aria-hidden="true" onClick={closeMenu} /> : null}
    </header>
  );
}
