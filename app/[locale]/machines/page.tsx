import { PagePlaceholder } from "@/components/PagePlaceholder";

type MachinesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function MachinesPage({ params }: MachinesPageProps) {
  const { locale } = await params;
  return <PagePlaceholder localeParam={locale} routeKey="machines.index" />;
}
