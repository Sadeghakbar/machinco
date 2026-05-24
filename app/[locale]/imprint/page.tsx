import { PagePlaceholder } from "@/components/PagePlaceholder";

type ImprintPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ImprintPage({ params }: ImprintPageProps) {
  const { locale } = await params;
  return <PagePlaceholder localeParam={locale} routeKey="legal.imprint" />;
}
