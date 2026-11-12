import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import {
  projectImageSrc,
  projectImageSrcSet,
  projectServiceIcons,
  projectServiceLabels,
  type ProjectCardData,
  type ProjectDetailData,
  type ProjectImage
} from "@/content/projects";
import type { ProjectsPageCopy } from "@/content/projectsPage";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectCta } from "@/components/projects/ProjectCta";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

// ---------------------------------------------------------------- Index

type ProjectsIndexPageProps = {
  locale: Locale;
  copy: ProjectsPageCopy;
  portfolio: ProjectImage[];
  portfolioIsDraft: boolean;
  caseStudies: ProjectCardData[];
};

export function ProjectsIndexPage({ locale, copy, portfolio, portfolioIsDraft, caseStudies }: ProjectsIndexPageProps) {
  return (
    <>
      <section className="page-hero projects-hero">
        <div className="container">
          <span className="projects-eyebrow">{copy.hero.eyebrow}</span>
          <h1>{copy.hero.title}</h1>
          <p>{copy.hero.description}</p>
        </div>
      </section>

      {portfolio.length > 0 ? (
        <section className="page-section projects-portfolio" aria-labelledby="projects-portfolio-title">
          <div className="container">
            <div className="projects-portfolio-head">
              <div>
                <h2 id="projects-portfolio-title" className="projects-section-title">
                  {copy.portfolio.title}
                </h2>
                <span className="projects-portfolio-count">
                  <i className="fa fa-camera" aria-hidden="true"></i> {portfolio.length} {copy.portfolio.photos}
                </span>
              </div>
              <p>{copy.portfolio.description}</p>
            </div>
            {portfolioIsDraft ? (
              <p className="project-draft-notice">
                <i className="fa fa-eye-slash" aria-hidden="true"></i> {copy.portfolio.draftNotice}
              </p>
            ) : null}
            <ProjectGallery locale={locale} images={portfolio} labels={copy.lightbox} variant="masonry" />
          </div>
        </section>
      ) : null}

      <section className="page-section projects-intro">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="projects-section-title">{copy.intro.title}</h2>
              {copy.intro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="projects-intro-text">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="col-md-7">
              <h3 className="projects-services-title">{copy.services.title}</h3>
              <p className="projects-services-lead">{copy.services.description}</p>
              <ol className="projects-services">
                {copy.services.order.map((serviceId, index) => (
                  <li key={serviceId}>
                    <span className="projects-service-step">{String(index + 1).padStart(2, "0")}</span>
                    <i className={`fa ${projectServiceIcons[serviceId]}`} aria-hidden="true"></i>
                    <span>{projectServiceLabels[serviceId][locale]}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {caseStudies.length > 0 ? (
        <section className="page-section projects-case-studies" aria-labelledby="projects-case-studies-title">
          <div className="container">
            <h2 id="projects-case-studies-title" className="projects-section-title">
              {copy.caseStudies.title}
            </h2>
            <p className="projects-services-lead">{copy.caseStudies.description}</p>
            <div className="project-grid">
              {caseStudies.map((project, index) => (
                <ProjectCard key={project.slug} project={project} locale={locale} copy={copy.card} eager={index < 3} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ProjectCta locale={locale} copy={copy.cta} />
    </>
  );
}

// ---------------------------------------------------------------- Case-study detail

type ProjectDetailPageProps = {
  locale: Locale;
  copy: ProjectsPageCopy;
  project: ProjectDetailData;
  moreProjects: ProjectCardData[];
};

export function ProjectDetailPage({ locale, copy, project, moreProjects }: ProjectDetailPageProps) {
  const projectsIndex = getPathForRouteKey(locale, "projects.index");

  return (
    <>
      <section className="project-hero">
        <img
          className="project-hero-image"
          src={projectImageSrc(project.cover)}
          srcSet={projectImageSrcSet(project.cover)}
          sizes="100vw"
          alt={project.cover.alt[locale]}
          fetchPriority="high"
        />
        <div className="project-hero-shade" aria-hidden="true" />
        <div className="container project-hero-inner">
          <Link href={projectsIndex} className="project-back-link">
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i> {copy.detail.back}
          </Link>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>

      {project.isDraft ? (
        <div className="container">
          <p className="project-draft-notice">
            <i className="fa fa-eye-slash" aria-hidden="true"></i> {copy.detail.draftNotice}
          </p>
        </div>
      ) : null}

      <section className="page-section project-detail-body">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="content-card">
                <h2 className="project-detail-heading">{copy.detail.overview}</h2>
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {project.stages.length > 0 ? (
                <div className="content-card">
                  <h2 className="project-detail-heading">{copy.detail.stages}</h2>
                  <ol className="project-stages">
                    {project.stages.map((stage, index) => (
                      <li key={stage.title}>
                        <span className="project-stage-number">
                          {copy.detail.stageLabel} {index + 1}
                        </span>
                        <h3>{stage.title}</h3>
                        <p>{stage.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              {project.technical.length > 0 ? (
                <div className="content-card">
                  <h2 className="project-detail-heading">{copy.detail.technical}</h2>
                  <table className="product-spec-table">
                    <tbody>
                      {project.technical.map((row) => (
                        <tr key={row.label}>
                          <th scope="row">{row.label}</th>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>

            <div className="col-md-4">
              <aside className="project-facts">
                <h2 className="project-detail-heading">{copy.detail.services}</h2>
                <ul className="project-facts-services">
                  {project.serviceIds.map((serviceId) => (
                    <li key={serviceId}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      {projectServiceLabels[serviceId][locale]}
                    </li>
                  ))}
                </ul>
                {project.machineType || project.year || project.destination ? (
                  <dl className="project-facts-list">
                    {project.machineType ? (
                      <>
                        <dt>{copy.card.machine}</dt>
                        <dd>{project.machineType}</dd>
                      </>
                    ) : null}
                    {project.year ? (
                      <>
                        <dt>{copy.card.year}</dt>
                        <dd>{project.year}</dd>
                      </>
                    ) : null}
                    {project.destination ? (
                      <>
                        <dt>{copy.card.destination}</dt>
                        <dd>{project.destination}</dd>
                      </>
                    ) : null}
                  </dl>
                ) : null}
                <Link className="btn show project-facts-cta" href={getPathForRouteKey(locale, "contact")}>
                  {copy.cta.primary}
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section project-gallery-section" aria-labelledby="project-gallery-title">
        <div className="container">
          <h2 id="project-gallery-title" className="projects-section-title">
            {copy.detail.gallery} <span className="project-gallery-total">({project.images.length})</span>
          </h2>
          <ProjectGallery locale={locale} images={project.images} labels={copy.lightbox} />
        </div>
      </section>

      {moreProjects.length > 0 ? (
        <section className="page-section projects-more">
          <div className="container">
            <h2 className="projects-section-title">{copy.detail.more}</h2>
            <div className="project-grid">
              {moreProjects.map((other) => (
                <ProjectCard key={other.slug} project={other} locale={locale} copy={copy.card} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ProjectCta locale={locale} copy={copy.cta} />
    </>
  );
}
