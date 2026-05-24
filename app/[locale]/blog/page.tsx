import { PagePlaceholder } from "@/components/PagePlaceholder";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  return <PagePlaceholder localeParam={locale} routeKey="blog.index" />;
}
