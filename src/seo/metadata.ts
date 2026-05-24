import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";
import { getPathForRouteKey } from "@/i18n/routes";

export function buildRouteMetadata(
  locale: Locale,
  routeKey: RouteKey,
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: getPathForRouteKey(locale, routeKey),
      languages: {
        de: getPathForRouteKey("de", routeKey),
        en: getPathForRouteKey("en", routeKey)
      }
    }
  };
}
