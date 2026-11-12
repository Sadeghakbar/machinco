import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { SiteShell } from "@/components/layout/SiteShell";
import { getHomeContent } from "@/content/home";
import { buildRouteMetadata } from "@/seo/metadata";

// "/" shows the German homepage; the canonical URL points to /de/ to avoid duplicate content.
export const metadata: Metadata = buildRouteMetadata("de", "home", getHomeContent("de").hero.description);

export default function RootPage() {
  const content = getHomeContent("de");

  return (
    <SiteShell locale="de">
      <HomePage locale="de" content={content} />
    </SiteShell>
  );
}
