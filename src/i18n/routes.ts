import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";

type RoutePaths = Record<Locale, string>;

export const routePathByKey: Record<RouteKey, RoutePaths> = {
  home: { de: "/de", en: "/en" },
  "machines.index": { de: "/de/machines", en: "/en/machines" },
  "machines.belt-grinding": {
    de: "/de/machines/belt-grinding",
    en: "/en/machines/belt-grinding"
  },
  "machines.surface-grinding": {
    de: "/de/machines/surface-grinding",
    en: "/en/machines/surface-grinding"
  },
  "machines.deburring": { de: "/de/machines/deburring", en: "/en/machines/deburring" },
  about: { de: "/de/about", en: "/en/about" },
  contact: { de: "/de/contact", en: "/en/contact" },
  "blog.index": { de: "/de/blog", en: "/en/blog" },
  "blog.machine-selection": {
    de: "/de/blog/machine-selection",
    en: "/en/blog/machine-selection"
  },
  "blog.industrial-machine-costs": {
    de: "/de/blog/industrial-machine-costs",
    en: "/en/blog/industrial-machine-costs"
  },
  "blog.grinding-machine-selection-tips": {
    de: "/de/blog/grinding-machine-selection-tips",
    en: "/en/blog/grinding-machine-selection-tips"
  },
  "legal.imprint": { de: "/de/imprint", en: "/en/imprint" },
  "legal.privacy": { de: "/de/privacy", en: "/en/privacy" }
};

export function getPathForRouteKey(locale: Locale, routeKey: RouteKey): string {
  return routePathByKey[routeKey][locale];
}
