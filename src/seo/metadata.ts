import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";
import { getMachinePath } from "@/content/machinesCatalog";
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

export function buildMachineMetadata(
  locale: Locale,
  slug: string,
  title: string,
  description: string
): Metadata {
  return {
    title,
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
