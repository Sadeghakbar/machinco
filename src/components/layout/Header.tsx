"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { getRouteKeyFromPathname } from "@/i18n/routeKeyFromPathname";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
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

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} href={getPathForRouteKey(locale, "home")}>
          Machinco
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            {navItems.map((item) => (
              <Nav.Link
                key={item.routeKey}
                as={Link}
                href={getPathForRouteKey(locale, item.routeKey)}
                active={activeRouteKey === item.routeKey}
              >
                {messages.nav[item.labelKey]}
              </Nav.Link>
            ))}
            <Nav.Item className="ps-lg-2">
              <LanguageSwitcher locale={locale} routeKey={activeRouteKey} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
