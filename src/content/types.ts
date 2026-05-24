import type { Locale } from "@/i18n/config";

export type RouteKey =
  | "home"
  | "machines.index"
  | "machines.belt-grinding"
  | "machines.surface-grinding"
  | "machines.deburring"
  | "about"
  | "contact"
  | "blog.index"
  | "blog.machine-selection"
  | "blog.industrial-machine-costs"
  | "blog.grinding-machine-selection-tips"
  | "legal.imprint"
  | "legal.privacy";

export type RouteContent = {
  title: string;
  description: string;
};

export type ContentProvider = {
  getPageContent: (locale: Locale, routeKey: RouteKey) => RouteContent;
};
