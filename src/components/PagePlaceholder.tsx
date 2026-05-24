import { notFound } from "next/navigation";
import { getPageContent } from "@/content/provider";
import { isLocale, type Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";

type PagePlaceholderProps = {
  localeParam: string;
  routeKey: RouteKey;
};

export function PagePlaceholder({ localeParam, routeKey }: PagePlaceholderProps) {
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const content = getPageContent(locale, routeKey);

  return (
    <section>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </section>
  );
}
