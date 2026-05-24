import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import type { RouteKey } from "@/content/types";

type LanguageSwitcherProps = {
  locale: Locale;
  routeKey: RouteKey;
};

export function LanguageSwitcher({ locale, routeKey }: LanguageSwitcherProps) {
  const nextLocale: Locale = locale === "de" ? "en" : "de";

  return (
    <Link href={getPathForRouteKey(nextLocale, routeKey)}>{nextLocale.toUpperCase()}</Link>
  );
}
