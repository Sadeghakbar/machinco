import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale, locales } from "@/i18n/config";
import {
  getProjectDetail,
  getVisibleProjectSlugs,
  getVisibleCaseStudies,
  projectImageSrc
} from "@/content/projects";
import { getProjectsPageCopy } from "@/content/projectsPage";
import { SITE_URL } from "@/content/business";
import { ProjectDetailPage } from "@/components/projects/ProjectsPages";
import { buildProjectMetadata } from "@/seo/metadata";

type ProjectPageProps = {
  params: Promise<{ locale: string; projectSlug: string }>;
};

// Static export needs at least one path; with no visible projects a placeholder renders 404.
const NO_PROJECT_PLACEHOLDER = "_none";

export function generateStaticParams() {
  const slugs = getVisibleProjectSlugs();
  const projectSlugs = slugs.length > 0 ? slugs : [NO_PROJECT_PLACEHOLDER];
  return locales.flatMap((locale) => projectSlugs.map((projectSlug) => ({ locale, projectSlug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, projectSlug } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const project = getProjectDetail(locale as Locale, projectSlug);
  if (!project) {
    return {};
  }
  return buildProjectMetadata(
    locale as Locale,
    projectSlug,
    project.title,
    project.summary,
    projectImageSrc(project.cover)
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, projectSlug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const project = getProjectDetail(resolvedLocale, projectSlug);
  if (!project) {
    notFound();
  }

  const copy = getProjectsPageCopy(resolvedLocale);
  const moreProjects = getVisibleCaseStudies(resolvedLocale)
    .filter((other) => other.slug !== project.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: project.title,
    description: project.summary,
    url: `${SITE_URL}${project.href}`,
    inLanguage: resolvedLocale,
    provider: { "@id": `${SITE_URL}/#business` },
    image: project.images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${projectImageSrc(image)}`,
      description: image.alt[resolvedLocale],
      width: image.width,
      height: image.height
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetailPage locale={resolvedLocale} copy={copy} project={project} moreProjects={moreProjects} />
    </>
  );
}
