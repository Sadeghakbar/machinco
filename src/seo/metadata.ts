import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";
import { getMachinePath } from "@/content/machinesCatalog";
import { getPathForRouteKey } from "@/i18n/routes";

export const SITE_TITLE = "Machinco GmbH";

export function buildRouteMetadata(
  locale: Locale,
  routeKey: RouteKey,
  description: string
): Metadata {
  return {
    title: SITE_TITLE,
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

export function buildMachineMetadata(
  locale: Locale,
  slug: string,
  description: string
): Metadata {
  return {
    title: SITE_TITLE,
    description,
    alternates: {
      canonical: getMachinePath(locale, slug),
      languages: {
        de: getMachinePath("de", slug),
        en: getMachinePath("en", slug)
      }
    }
  };
}
