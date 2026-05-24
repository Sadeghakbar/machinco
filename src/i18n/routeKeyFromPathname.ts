import type { RouteKey } from "@/content/types";
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

  if (cleanPath.startsWith("/de/machines/")) {
    if (cleanPath.endsWith("/belt-grinding")) return "machines.belt-grinding";
    if (cleanPath.endsWith("/surface-grinding")) return "machines.surface-grinding";
    if (cleanPath.endsWith("/deburring")) return "machines.deburring";
    return "machines.index";
  }

  if (cleanPath.startsWith("/en/machines/")) {
    if (cleanPath.endsWith("/belt-grinding")) return "machines.belt-grinding";
    if (cleanPath.endsWith("/surface-grinding")) return "machines.surface-grinding";
    if (cleanPath.endsWith("/deburring")) return "machines.deburring";
    return "machines.index";
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
