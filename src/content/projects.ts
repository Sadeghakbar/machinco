import type { Locale } from "@/i18n/config";

/**
 * Projects / References – completely separate from the machine-for-sale catalog.
 *
 * Two parts:
 * 1. PORTFOLIO – one unified gallery of real photographs from Machinco's machinery handling,
 *    loading and logistics operations. No categories, no invented project details.
 *    To add photos: put optimized files in /public/projects/portfolio/ (pNN.jpg 1600px +
 *    pNN-sm.jpg 800px longest side, metadata stripped) and append an entry to `portfolioPhotos`.
 * 2. CASE STUDIES – optional named projects with their own detail page. Only add one when the
 *    owner provides confirmed project information (services, stages, year, destination…).
 *
 * Publishing: content marked "draft" is shown in local development only and is automatically
 * excluded from the production build. Switch to "published" only after owner approval.
 */

export type ProjectStatus = "published" | "draft";

type Localized<T> = Record<Locale, T>;

export type ProjectImage = {
  /** Path without extension, e.g. "/projects/portfolio/p01" (→ p01.jpg and p01-sm.jpg). */
  base: string;
  width: number;
  height: number;
  alt: Localized<string>;
};

export const SHOW_DRAFT_PROJECTS = process.env.NODE_ENV !== "production";

// =====================================================================================
// 1. Portfolio
// =====================================================================================

/** Publication status of the whole portfolio gallery. */
export const PORTFOLIO_STATUS: ProjectStatus = "published";

const photo = (id: string, width: number, height: number, de: string, en: string): ProjectImage => ({
  base: `/projects/portfolio/${id}`,
  width,
  height,
  alt: { de, en }
});

/** Order matters: photos are deliberately mixed so different activities appear together. */
const portfolioPhotos: ProjectImage[] = [
  photo("p01", 1320, 1187, "Mobilkran hebt eine Abkantpresse auf einen Sattelauflieger", "Mobile crane lifting a press brake onto a semi-trailer"),
  photo("p02", 1600, 1200, "Mit Spanngurten gesicherte Maschinen auf einem Planen-Sattelauflieger", "Machines secured with lashing straps on a curtain-side trailer"),
  photo("p03", 1600, 1200, "Gabelstapler verlädt Werkzeugmaschinen auf einen Pritschen-Lkw", "Forklift loading machine tools onto a flatbed truck"),
  photo("p04", 1200, 1600, "Gesicherte Werkzeugmaschine mit Bedienpult auf der Ladefläche", "Secured machine tool with control panel on the trailer bed"),
  photo("p05", 1320, 746, "Kran hebt eine Werkzeugmaschine neben einer Werkhalle auf einen Lkw", "Crane lifting a machine tool onto a truck next to a workshop"),
  photo("p06", 1600, 1200, "Gabelstapler transportiert eine in Folie verpackte Maschine", "Forklift moving a stretch-wrapped machine"),
  photo("p07", 1600, 1200, "Verladene Werkzeugmaschinen und eine in Folie verpackte Maschine auf einem Lkw", "Loaded machine tools and a stretch-wrapped machine on a truck"),
  photo("p08", 1600, 1200, "Gabelstapler beim Beladen eines Tiefladers", "Forklift loading a low-bed trailer"),
  photo("p09", 1600, 981, "Verladung blauer und grüner Werkzeugmaschinen auf einen Sattelauflieger", "Loading blue and green machine tools onto a semi-trailer"),
  photo("p10", 1320, 735, "Lkw-Ladekran beim Verladen von Maschinen", "Truck-mounted loader crane loading machines"),
  photo("p11", 1600, 1200, "Seitlich geöffneter Planen-Sattelauflieger mit verladenen Maschinen", "Curtain-side trailer opened at the side with loaded machines"),
  photo("p12", 1320, 1007, "Gabelstapler belädt einen Planen-Sattelauflieger", "Forklift loading a curtain-side trailer"),
  photo("p13", 1600, 1200, "Mit Spanngurten gesicherte Maschine und verpackte Teile im Lkw", "Machine and packed parts secured with lashing straps in a truck"),
  photo("p14", 900, 1600, "Abkantpresse in einer Werkhalle", "Press brake in a workshop hall"),
  photo("p15", 1600, 1200, "Planen-Sattelauflieger mit verladenen Werkzeugmaschinen", "Curtain-side trailer loaded with machine tools"),
  photo("p16", 1600, 1200, "Verladene Maschinen und Schaltschränke auf einem Sattelauflieger", "Loaded machines and electrical cabinets on a semi-trailer"),
  photo("p17", 1200, 1600, "Große Werkzeugmaschine mit Spanngurten auf einem Auflieger gesichert", "Large machine tool secured with lashing straps on a trailer"),
  photo("p18", 1600, 1200, "Ladungssicherung mehrerer Maschinen auf dem Auflieger", "Load securing of several machines on the trailer"),
  photo("p19", 868, 868, "Sattelauflieger mit mehreren gesicherten Maschinen", "Semi-trailer with several secured machines")
];

/** Photos used on the homepage teaser (indexes into portfolioPhotos). */
const homepagePhotoIndexes = [0, 2, 1, 7, 9];

export function isPortfolioVisible(): boolean {
  return portfolioPhotos.length > 0 && (PORTFOLIO_STATUS === "published" || SHOW_DRAFT_PROJECTS);
}

export function isPortfolioDraft(): boolean {
  return PORTFOLIO_STATUS === "draft";
}

export function getPortfolioPhotos(): ProjectImage[] {
  return isPortfolioVisible() ? portfolioPhotos : [];
}

export function getHomepagePortfolioPhotos(): ProjectImage[] {
  if (!isPortfolioVisible()) {
    return [];
  }
  return homepagePhotoIndexes.map((index) => portfolioPhotos[index]).filter(Boolean);
}

// =====================================================================================
// 2. Case studies (none yet – add only with confirmed information from the owner)
// =====================================================================================

export type ProjectServiceId =
  | "sourcing"
  | "inspection"
  | "dismantling"
  | "preparation"
  | "crane"
  | "forklift"
  | "loading"
  | "transport"
  | "export-docs"
  | "shipping";

export type ProjectStage = {
  title: string;
  text: string;
};

export type ProjectLocaleContent = {
  title: string;
  summary: string;
  description: string[];
  /** Only stages that actually happened and are confirmed. */
  stages?: ProjectStage[];
  technical?: Array<{ label: string; value: string }>;
};

export type ProjectDefinition = {
  slug: string;
  status: ProjectStatus;
  /** Only confirmed services. */
  services: ProjectServiceId[];
  year?: number;
  destination?: Localized<string>;
  machineType?: Localized<string>;
  /** Index into `images` used as cover (default 0). */
  coverIndex?: number;
  images: ProjectImage[];
  locale: Localized<ProjectLocaleContent>;
};

export const projectServiceLabels: Record<ProjectServiceId, Localized<string>> = {
  sourcing: { de: "Maschinenbeschaffung & Einkauf", en: "Machine sourcing & purchasing" },
  inspection: { de: "Besichtigung & Zustandsbewertung", en: "On-site inspection & condition assessment" },
  dismantling: { de: "Demontage", en: "Dismantling" },
  preparation: { de: "Transportvorbereitung", en: "Preparation for transport" },
  crane: { de: "Kranverladung & Schwerlasthandling", en: "Crane lifting & heavy handling" },
  forklift: { de: "Staplerverladung", en: "Forklift loading" },
  loading: { de: "Verladung auf Lkw, Auflieger & Container", en: "Loading onto trucks, trailers & containers" },
  transport: { de: "Transportkoordination & Logistik", en: "Transport coordination & logistics" },
  "export-docs": { de: "Exportdokumente & Zollunterlagen", en: "Export & customs documentation" },
  shipping: { de: "Internationale Versandkoordination", en: "International shipment coordination" }
};

export const projectServiceIcons: Record<ProjectServiceId, string> = {
  sourcing: "fa-handshake-o",
  inspection: "fa-search",
  dismantling: "fa-wrench",
  preparation: "fa-cubes",
  crane: "fa-arrows-v",
  forklift: "fa-truck",
  loading: "fa-th-large",
  transport: "fa-road",
  "export-docs": "fa-file-text-o",
  shipping: "fa-globe"
};

const caseStudies: ProjectDefinition[] = [];

export type ProjectCardData = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  isDraft: boolean;
  services: string[];
  year?: number;
  destination?: string;
  machineType?: string;
  cover: ProjectImage;
  imageCount: number;
};

export type ProjectDetailData = ProjectCardData & {
  description: string[];
  stages: ProjectStage[];
  technical: Array<{ label: string; value: string }>;
  serviceIds: ProjectServiceId[];
  images: ProjectImage[];
};

export function getProjectPath(locale: Locale, slug: string): string {
  return `/${locale}/projects/${slug}/`;
}

function visible(project: ProjectDefinition): boolean {
  return project.status === "published" || SHOW_DRAFT_PROJECTS;
}

function toCard(project: ProjectDefinition, locale: Locale): ProjectCardData {
  const content = project.locale[locale];
  return {
    slug: project.slug,
    href: getProjectPath(locale, project.slug),
    title: content.title,
    summary: content.summary,
    isDraft: project.status === "draft",
    services: project.services.map((id) => projectServiceLabels[id][locale]),
    year: project.year,
    destination: project.destination?.[locale],
    machineType: project.machineType?.[locale],
    cover: project.images[project.coverIndex ?? 0],
    imageCount: project.images.length
  };
}

export function getVisibleCaseStudies(locale: Locale): ProjectCardData[] {
  return caseStudies.filter(visible).map((project) => toCard(project, locale));
}

export function getVisibleProjectSlugs(): string[] {
  return caseStudies.filter(visible).map((project) => project.slug);
}

export function isVisibleProjectSlug(slug: string): boolean {
  return caseStudies.some((project) => project.slug === slug && visible(project));
}

export function getProjectDetail(locale: Locale, slug: string): ProjectDetailData | null {
  const project = caseStudies.find((entry) => entry.slug === slug && visible(entry));
  if (!project) {
    return null;
  }
  const content = project.locale[locale];
  return {
    ...toCard(project, locale),
    description: content.description,
    stages: content.stages ?? [],
    technical: content.technical ?? [],
    serviceIds: project.services,
    images: project.images
  };
}

// =====================================================================================
// Shared
// =====================================================================================

/** The Projects page, nav link and homepage teaser exist only when there is something to show. */
export function hasVisibleProjects(): boolean {
  return isPortfolioVisible() || caseStudies.some(visible);
}

export function projectImageSrc(image: ProjectImage): string {
  return `${image.base}.jpg`;
}

export function projectImageSrcSet(image: ProjectImage): string {
  // -sm files are scaled so that their longest side is at most 800px.
  const factor = Math.min(1, 800 / Math.max(image.width, image.height));
  const smallWidth = Math.round(image.width * factor);
  return `${image.base}-sm.jpg ${smallWidth}w, ${image.base}.jpg ${image.width}w`;
}
