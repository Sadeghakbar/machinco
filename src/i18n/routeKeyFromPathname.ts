import type { RouteKey } from "@/content/types";
import { hasProductSlug } from "@/content/machinesCatalog";
import { routePathByKey } from "@/i18n/routes";

const routeEntries = Object.entries(routePathByKey) as Array<
  [RouteKey, { de: string; en: string }]
>;

export function getRouteKeyFromPathname(pathname: string): RouteKey {
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  for (const [routeKey, paths] of routeEntries) {
    if (paths.de === cleanPath || paths.en === cleanPath) {
      return routeKey;
    }
  }

  const machineDetailMatch = cleanPath.match(/^\/(de|en)\/machines\/([^/]+)$/);
  if (machineDetailMatch && hasProductSlug(machineDetailMatch[2])) {
    return "machines.index";
  }

  if (/^\/(de|en)\/projects\/[^/]+$/.test(cleanPath)) {
    return "projects.index";
  }

  if (cleanPath.startsWith("/de/blog/") || cleanPath.startsWith("/en/blog/")) {
    if (cleanPath.endsWith("/machine-selection")) return "blog.machine-selection";
    if (cleanPath.endsWith("/industrial-machine-costs")) return "blog.industrial-machine-costs";
    if (cleanPath.endsWith("/grinding-machine-selection-tips")) {
      return "blog.grinding-machine-selection-tips";
    }
    return "blog.index";
  }

  return "home";
}
