import Link from "next/link";
import type { Locale } from "@/i18n/config";
import {
  projectImageSrc,
  projectImageSrcSet,
  type ProjectCardData
} from "@/content/projects";
import type { ProjectsPageCopy } from "@/content/projectsPage";

type ProjectCardProps = {
  project: ProjectCardData;
  locale: Locale;
  copy: ProjectsPageCopy["card"];
  /** Above-the-fold cards load eagerly. */
  eager?: boolean;
};

export function ProjectCard({ project, locale, copy, eager = false }: ProjectCardProps) {
  const visibleServices = project.services.slice(0, 3);
  const hiddenServiceCount = project.services.length - visibleServices.length;

  return (
    <article className="project-card">
      <Link href={project.href} className="project-card-media" aria-label={project.title}>
        <img
          src={projectImageSrc(project.cover)}
          srcSet={projectImageSrcSet(project.cover)}
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 380px"
          alt={project.cover.alt[locale]}
          width={project.cover.width}
          height={project.cover.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
        <span className="project-card-shade" aria-hidden="true" />
        <span className="project-card-count">
          <i className="fa fa-camera" aria-hidden="true"></i> {project.imageCount} {copy.photos}
        </span>
      </Link>
      <div className="project-card-body">
        {project.isDraft ? <span className="project-draft-badge">{copy.draft}</span> : null}
        <h3>
          <Link href={project.href}>{project.title}</Link>
        </h3>
        <p className="project-card-summary">{project.summary}</p>
        {project.machineType || project.year || project.destination ? (
          <ul className="project-card-facts">
            {project.machineType ? (
              <li>
                <span>{copy.machine}</span> {project.machineType}
              </li>
            ) : null}
            {project.year ? (
              <li>
                <span>{copy.year}</span> {project.year}
              </li>
            ) : null}
            {project.destination ? (
              <li>
                <span>{copy.destination}</span> {project.destination}
              </li>
            ) : null}
          </ul>
        ) : null}
        <ul className="project-service-tags">
          {visibleServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
          {hiddenServiceCount > 0 ? <li>+{hiddenServiceCount}</li> : null}
        </ul>
        <Link href={project.href} className="project-card-link">
          {copy.view} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </article>
  );
}
