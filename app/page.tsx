import { HomePage } from "@/components/pages/HomePage";
import { SiteShell } from "@/components/layout/SiteShell";
import { getHomeContent } from "@/content/home";

export default function RootPage() {
  const content = getHomeContent("de");

  return (
    <SiteShell locale="de">
      <HomePage locale="de" content={content} />
    </SiteShell>
  );
}
