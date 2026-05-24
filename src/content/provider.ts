import type { Locale } from "@/i18n/config";
import { getLocalPageContent } from "@/content/providers/local";
import type { RouteContent, RouteKey } from "@/content/types";

export function getPageContent(locale: Locale, routeKey: RouteKey): RouteContent {
  return getLocalPageContent(locale, routeKey);
}
