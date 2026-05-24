import { PagePlaceholder } from "@/components/PagePlaceholder";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  return <PagePlaceholder localeParam={locale} routeKey="legal.privacy" />;
}
