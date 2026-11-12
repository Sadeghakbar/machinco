import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";
import { getMachinePath } from "@/content/machinesCatalog";
import { getPathForRouteKey } from "@/i18n/routes";

export const SITE_TITLE = "Machinco GmbH";

/** Default share image: a real Machinco operations photo (crane loading). */
const DEFAULT_OG_IMAGE = "/projects/portfolio/p01.jpg";

const ogLocale: Record<Locale, string> = { de: "de_DE", en: "en_GB" };

/** Descriptive page titles; pages not listed fall back to the company name. */
const routeTitles: Partial<Record<RouteKey, Record<Locale, string>>> = {
  home: {
    de: "Machinco GmbH – Gebrauchte Industriemaschinen: Handel & Export",
    en: "Machinco GmbH – Used Industrial Machinery Trading & Export"
  },
  "machines.index": {
    de: "Gebrauchte Industriemaschinen kaufen | Machinco GmbH",
    en: "Used Industrial Machinery for Sale | Machinco GmbH"
  },
  about: {
    de: "Über uns – Handel & Export gebrauchter Maschinen | Machinco GmbH",
    en: "About Us – Used Machinery Trading & Export | Machinco GmbH"
  },
  contact: {
    de: "Kontakt – Gablingen bei Augsburg | Machinco GmbH",
    en: "Contact – Gablingen near Augsburg, Germany | Machinco GmbH"
  },
  "blog.index": {
    de: "Ratgeber | Machinco GmbH",
    en: "Guides | Machinco GmbH"
  },
  "legal.imprint": {
    de: "Impressum | Machinco GmbH",
    en: "Imprint | Machinco GmbH"
  },
  "legal.privacy": {
    de: "Datenschutzerklärung | Machinco GmbH",
    en: "Privacy Policy | Machinco GmbH"
  }
};

/** Removes soft hyphens (used for line breaking in long German headings). */
export function plainText(value: string): string {
  return value.replace(/­/g, "");
}

function openGraph(locale: Locale, title: string, description: string, url: string, image = DEFAULT_OG_IMAGE) {
  return {
    title,
    description,
    url,
    siteName: SITE_TITLE,
    locale: ogLocale[locale],
    type: "website" as const,
    images: [{ url: image }]
  };
}

export function buildRouteMetadata(
  locale: Locale,
  routeKey: RouteKey,
  description: string,
  title?: string
): Metadata {
  const resolvedTitle = plainText(title ?? routeTitles[routeKey]?.[locale] ?? SITE_TITLE);
  const canonical = getPathForRouteKey(locale, routeKey);
  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical,
      languages: {
        de: getPathForRouteKey("de", routeKey),
        en: getPathForRouteKey("en", routeKey)
      }
    },
    openGraph: openGraph(locale, resolvedTitle, description, canonical)
  };
}

export function buildMachineMetadata(
  locale: Locale,
  slug: string,
  description: string,
  machineTitle?: string,
  image?: string
): Metadata {
  const title = machineTitle ? `${plainText(machineTitle)} | ${SITE_TITLE}` : SITE_TITLE;
  const canonical = getMachinePath(locale, slug);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        de: getMachinePath("de", slug),
        en: getMachinePath("en", slug)
      }
    },
    openGraph: openGraph(locale, title, description, canonical, image)
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
  const fullTitle = `${plainText(title)} | ${SITE_TITLE}`;
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path(locale),
      languages: { de: path("de"), en: path("en") }
    },
    openGraph: openGraph(locale, fullTitle, description, path(locale), image)
  };
}
