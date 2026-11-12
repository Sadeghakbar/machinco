import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { getHomepagePortfolioPhotos, hasVisibleProjects, projectImageSrcSet } from "@/content/projects";
import { getProjectsPageCopy } from "@/content/projectsPage";

type HomeProjectsTeaserProps = {
  locale: Locale;
};

/** Homepage section introducing the project portfolio. Renders nothing until the portfolio is visible. */
export function HomeProjectsTeaser({ locale }: HomeProjectsTeaserProps) {
  if (!hasVisibleProjects()) {
    return null;
  }

  const copy = getProjectsPageCopy(locale).home;
  const photos = getHomepagePortfolioPhotos();
  const projectsHref = getPathForRouteKey(locale, "projects.index");

  return (
    <section id="projects-teaser" className="home-projects" aria-labelledby="home-projects-title">
      <div className="container">
        <div className="home-projects-head">
          <div>
            <span className="projects-eyebrow">{copy.eyebrow}</span>
            <h2 id="home-projects-title">{copy.title}</h2>
          </div>
          <p>{copy.description}</p>
        </div>
        {photos.length > 0 ? (
          <div className="home-projects-mosaic">
            {photos.map((photo, index) => (
              <Link
                key={photo.base}
                href={projectsHref}
                className={`home-project-tile${index === 0 ? " is-large" : ""}`}
                aria-label={`${copy.cta}: ${photo.alt[locale]}`}
              >
                <img
                  src={`${photo.base}-sm.jpg`}
                  srcSet={projectImageSrcSet(photo)}
                  sizes={index === 0 ? "(max-width: 767px) 100vw, 50vw" : "(max-width: 767px) 50vw, 25vw"}
                  alt={photo.alt[locale]}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            ))}
          </div>
        ) : null}
        <div className="home-projects-cta">
          <Link className="btn show" href={projectsHref}>
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
