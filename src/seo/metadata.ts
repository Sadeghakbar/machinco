import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";
import { getMachinePath } from "@/content/machinesCatalog";
import { getPathForRouteKey } from "@/i18n/routes";

export const SITE_TITLE = "Machinco GmbH";

export function buildRouteMetadata(
  locale: Locale,
  routeKey: RouteKey,
  description: string,
  title: string = SITE_TITLE
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

export function buildProjectMetadata(
  locale: Locale,
  slug: string,
  title: string,
  description: string,
  image?: string
): Metadata {
  const path = (target: Locale) => `/${target}/projects/${slug}/`;
  return {
    title: `${title} | ${SITE_TITLE}`,
    description,
    alternates: {
      canonical: path(locale),
      languages: { de: path("de"), en: path("en") }
    },
    openGraph: image
      ? { title: `${title} | ${SITE_TITLE}`, description, images: [{ url: image }], type: "article" }
      : undefined
  };
}
