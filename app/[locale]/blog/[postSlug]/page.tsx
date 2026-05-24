import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import type { RouteKey } from "@/content/types";

const routeKeyByPostSlug: Record<string, RouteKey> = {
  "machine-selection": "blog.machine-selection",
  "industrial-machine-costs": "blog.industrial-machine-costs",
  "grinding-machine-selection-tips": "blog.grinding-machine-selection-tips"
};

type BlogDetailPageProps = {
  params: Promise<{ locale: string; postSlug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, postSlug } = await params;
  const routeKey = routeKeyByPostSlug[postSlug];

  if (!routeKey) {
    notFound();
  }

  return <PagePlaceholder localeParam={locale} routeKey={routeKey} />;
}
