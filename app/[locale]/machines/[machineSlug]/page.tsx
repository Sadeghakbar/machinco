import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import type { RouteKey } from "@/content/types";

const routeKeyByMachineSlug: Record<string, RouteKey> = {
  "belt-grinding": "machines.belt-grinding",
  "surface-grinding": "machines.surface-grinding",
  deburring: "machines.deburring"
};

type MachineDetailPageProps = {
  params: Promise<{ locale: string; machineSlug: string }>;
};

export default async function MachineDetailPage({ params }: MachineDetailPageProps) {
  const { locale, machineSlug } = await params;
  const routeKey = routeKeyByMachineSlug[machineSlug];

  if (!routeKey) {
    notFound();
  }

  return <PagePlaceholder localeParam={locale} routeKey={routeKey} />;
}
