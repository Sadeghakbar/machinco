import { PagePlaceholder } from "@/components/PagePlaceholder";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  return <PagePlaceholder localeParam={locale} routeKey="about" />;
}
