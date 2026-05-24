import { PagePlaceholder } from "@/components/PagePlaceholder";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  return <PagePlaceholder localeParam={locale} routeKey="contact" />;
}
