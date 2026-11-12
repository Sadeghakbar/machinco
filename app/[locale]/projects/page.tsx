import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import {
  getPortfolioPhotos,
  getVisibleCaseStudies,
  hasVisibleProjects,
  isPortfolioDraft,
  projectImageSrc
} from "@/content/projects";
import { getProjectsPageCopy } from "@/content/projectsPage";
import { SITE_URL } from "@/content/business";
import { ProjectsIndexPage } from "@/components/projects/ProjectsPages";
import { buildRouteMetadata } from "@/seo/metadata";

type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const copy = getProjectsPageCopy(locale as Locale);
  return buildRouteMetadata(locale as Locale, "projects.index", copy.meta.description, copy.meta.title);
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  // Nothing visible (e.g. production before approval): the page does not exist.
  if (!isLocale(locale) || !hasVisibleProjects()) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const copy = getProjectsPageCopy(resolvedLocale);
  const portfolio = getPortfolioPhotos();
  const caseStudies = getVisibleCaseStudies(resolvedLocale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${copy.hero.eyebrow} – ${copy.portfolio.title}`,
    description: copy.meta.description,
    url: `${SITE_URL}/${resolvedLocale}/projects/`,
    inLanguage: resolvedLocale,
    about: { "@id": `${SITE_URL}/#business` },
    image: portfolio.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${projectImageSrc(image)}`,
      description: image.alt[resolvedLocale],
      width: image.width,
      height: image.height
    })),
    hasPart: caseStudies.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: `${SITE_URL}${project.href}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectsIndexPage
        locale={resolvedLocale}
        copy={copy}
        portfolio={portfolio}
        portfolioIsDraft={isPortfolioDraft()}
        caseStudies={caseStudies}
      />
    </>
  );
}
