import type { MetadataRoute } from "next";
import { routePathByKey } from "@/i18n/routes";

const siteUrl = "https://www.machinco.de";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const paths of Object.values(routePathByKey)) {
    entries.push({
      url: `${siteUrl}${paths.de}`,
      lastModified: new Date()
    });
    entries.push({
      url: `${siteUrl}${paths.en}`,
      lastModified: new Date()
    });
  }

  return entries;
}
