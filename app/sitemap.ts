import type { MetadataRoute } from "next";
import { getProductSlugs } from "@/content/machinesCatalog";
import { routePathByKey } from "@/i18n/routes";

const siteUrl = "https://www.machinco.de";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = new Set<string>();
  const lastModified = new Date();

  for (const paths of Object.values(routePathByKey)) {
    urls.add(`${siteUrl}${paths.de}`);
    urls.add(`${siteUrl}${paths.en}`);
  }

  for (const slug of getProductSlugs()) {
    urls.add(`${siteUrl}/de/machines/${slug}`);
    urls.add(`${siteUrl}/en/machines/${slug}`);
  }

  return Array.from(urls).map((url) => ({ url, lastModified }));
}
