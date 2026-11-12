import type { Locale } from "@/i18n/config";
import { hasProductSlug } from "@/content/machinesCatalog";
import { isVisibleProjectSlug } from "@/content/projects";
import { getPathForRouteKey } from "@/i18n/routes";
import { getRouteKeyFromPathname } from "@/i18n/routeKeyFromPathname";

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  const machineMatch = cleanPath.match(/^\/(de|en)\/machines\/([^/]+)$/);
  if (machineMatch) {
    const slug = machineMatch[2];
    if (hasProductSlug(slug)) {
      return `/${targetLocale}/machines/${slug}/`;
    }
  }

  const projectMatch = cleanPath.match(/^\/(de|en)\/projects\/([^/]+)$/);
  if (projectMatch && isVisibleProjectSlug(projectMatch[2])) {
    return `/${targetLocale}/projects/${projectMatch[2]}/`;
  }

  const routeKey = getRouteKeyFromPathname(pathname);
  return getPathForRouteKey(targetLocale, routeKey);
}
