import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_E164 } from "@/content/business";
import type { ProjectsPageCopy } from "@/content/projectsPage";

type ProjectCtaProps = {
  locale: Locale;
  copy: ProjectsPageCopy["cta"];
};

/** "Planning a machinery project?" band – uses the site's existing contact details only. */
export function ProjectCta({ locale, copy }: ProjectCtaProps) {
  return (
    <section className="project-cta" aria-labelledby="project-cta-title">
      <div className="container">
        <div className="project-cta-inner">
          <div className="project-cta-text">
            <h2 id="project-cta-title">{copy.title}</h2>
            <p>{copy.description}</p>
          </div>
          <div className="project-cta-actions">
            <Link className="btn show" href={getPathForRouteKey(locale, "contact")}>
              {copy.primary}
            </Link>
            <a className="btn project-cta-secondary" href={`tel:${BUSINESS_PHONE_E164}`}>
              <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; {BUSINESS_PHONE_DISPLAY}
            </a>
            <a className="project-cta-mail" href={`mailto:${BUSINESS_EMAIL}`}>
              <i className="fa fa-envelope-o" aria-hidden="true"></i> {BUSINESS_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
