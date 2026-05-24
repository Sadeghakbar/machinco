import { getHomeContent } from "@/content/home";
import { HomePage } from "@/components/pages/HomePage";

export default function RootPage() {
  const content = getHomeContent("de");
  return <HomePage locale="de" content={content} />;
}
