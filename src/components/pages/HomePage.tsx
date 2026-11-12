import Link from "next/link";
import { FormPrivacyConsent } from "@/components/forms/FormPrivacyConsent";
import { LocationDetails } from "@/components/location/LocationDetails";
import { HomeProjectsTeaser } from "@/components/projects/HomeProjectsTeaser";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";

type HomePageProps = {
  locale: Locale;
  content: HomeContent;
};

const CONTACT_ANCHOR = "contact";

export function HomePage({ locale, content }: HomePageProps) {
  const machinesHref = getPathForRouteKey(locale, "machines.index");
  const fieldId = (name: string) => `home-contact-${name}`;

  return (
    <>
      <section id="hero-banner">
        <video
          width="100%"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/vids/0503-poster.jpg"
          aria-hidden="true"
        >
          <source src="/vids/0503.mov" type="video/mp4" />
          {content.hero.videoFallbackText}
        </video>
        <div className="container hero-content">
          <div className="row">
            <div className="col-md-9 col-sm-11">
              <span className="hero-eyebrow">{content.hero.eyebrow}</span>
              <h1>{content.hero.title}</h1>
              <p>{content.hero.description}</p>
              <div className="hero-cta-group">
                <Link className="btn btn-warning btn-lg hero-cta-primary" href={machinesHref}>
                  {content.hero.primaryCta}
                </Link>
                <Link
                  className="btn btn-default btn-lg hero-cta-secondary"
                  href={getPathForRouteKey(locale, "contact")}
                >
                  {content.hero.secondaryCta}
                </Link>
              </div>
              <ul className="hero-proof-list">
                {content.hero.proofPoints.map((point) => (
                  <li key={point}>
                    <i className="fa fa-check" aria-hidden="true"></i> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-block home-services" aria-labelledby="home-services-title">
        <div className="container">
          <div className="home-section-head">
            <span className="projects-eyebrow">{content.services.eyebrow}</span>
            <h2 id="home-services-title">{content.services.title}</h2>
            <p>{content.services.description}</p>
          </div>
          <ul className="home-service-grid">
            {content.services.items.map((item) => (
              <li key={item.title} className="home-service-card">
                <span className="home-service-icon" aria-hidden="true">
                  <i className={`fa ${item.icon}`}></i>
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
          <div className="home-section-cta">
            <Link className="home-text-link" href={getPathForRouteKey(locale, "projects.index")}>
              {content.services.cta} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <section id="machineries" className="section-block section-light" aria-labelledby="home-machines-title">
        <div className="container">
          <div className="home-section-head">
            <span className="projects-eyebrow">{content.machines.eyebrow}</span>
            <h2 id="home-machines-title">{content.machines.title}</h2>
            <p>{content.machines.description}</p>
          </div>
          <div className="row home-machine-row">
            {content.machines.cards.map((machine) => (
              <div key={machine.href} className="col-sm-6 col-md-4">
                <article className="thumbnail machine-card">
                  <Link href={machine.href} className="machine-card-media" tabIndex={-1} aria-hidden="true">
                    <img src={machine.imageSrc} alt="" loading="lazy" decoding="async" />
                    <span className={`product-status product-status-${machine.status}`}>
                      {machine.status === "sold" ? content.labels.statusSold : content.labels.statusAvailable}
                    </span>
                  </Link>
                  <div className="caption">
                    <h3>
                      <Link href={machine.href}>{machine.title}</Link>
                    </h3>
                    <p>{machine.description}</p>
                    <Link className="btn show" href={machine.href}>
                      {content.labels.learnMore}
                      <span className="sr-only">: {machine.imageAlt}</span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="home-section-cta">
            <Link className="btn show home-outline-btn" href={machinesHref}>
              {content.machines.cta}
            </Link>
          </div>
        </div>
      </section>

      <HomeProjectsTeaser locale={locale} />

      <section id="about" className="section-block home-about" aria-labelledby="home-about-title">
        <div className="container">
          <div className="row home-about-row">
            <div className="col-md-6">
              <img
                className="home-about-image"
                src={content.about.imageSrc}
                alt={content.about.imageAlt}
                width={1080}
                height={1325}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-md-6">
              <span className="projects-eyebrow">{content.about.eyebrow}</span>
              <h2 id="home-about-title">{content.about.title}</h2>
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <dl className="home-about-facts">
                {content.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <Link className="btn show home-outline-btn" href={getPathForRouteKey(locale, "about")}>
                {content.about.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="final-cta" className="section-block final-cta">
        <div className="container text-center">
          <h2>{content.finalCta.title}</h2>
          <p>{content.finalCta.description}</p>
          <div className="hero-cta-group">
            <Link className="btn btn-warning btn-lg hero-cta-primary" href={`#${CONTACT_ANCHOR}`}>
              {content.finalCta.primaryCta}
            </Link>
            <Link className="btn btn-default btn-lg hero-cta-secondary" href={machinesHref}>
              {content.finalCta.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section id={CONTACT_ANCHOR} aria-labelledby="home-contact-title">
        <div className="container">
          <div className="container contact-info">
          <div className="row">
            <div className="col-sm-5 col-md-4">
              <div className="contact-form">
                <h2 id="home-contact-title" className="home-contact-title">
                  {content.contact.title}
                </h2>
                <LocationDetails locale={locale} />
              </div>
            </div>
            <div className="col-sm-7 col-md-8">
              <div className="contact-form">
                <p className="home-contact-intro">{content.contact.intro}</p>
                <form id="main-contact-form" method="post" action="https://api.web3forms.com/submit">
                  <input type="hidden" name="access_key" value="9565bb1b-bb34-4c9e-951c-8338d01f9774" />
                  <input type="hidden" name="subject" value={content.contact.subject} />
                  <input type="hidden" name="from_name" value="Machinco Website" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <label className="sr-only" htmlFor={fieldId("name")}>
                        {content.contact.fields.name}
                      </label>
                      <input
                        id={fieldId("name")}
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={content.contact.fields.name}
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div className="col-sm-6 form-group">
                      <label className="sr-only" htmlFor={fieldId("email")}>
                        {content.contact.fields.email}
                      </label>
                      <input
                        id={fieldId("email")}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder={content.contact.fields.email}
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div className="col-sm-6 form-group">
                      <label className="sr-only" htmlFor={fieldId("phone")}>
                        {content.contact.fields.phone}
                      </label>
                      <input
                        id={fieldId("phone")}
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder={content.contact.fields.phone}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="col-sm-6 form-group">
                      <label className="sr-only" htmlFor={fieldId("company")}>
                        {content.contact.fields.company}
                      </label>
                      <input
                        id={fieldId("company")}
                        type="text"
                        name="company"
                        className="form-control"
                        placeholder={content.contact.fields.company}
                        autoComplete="organization"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="sr-only" htmlFor={fieldId("message")}>
                      {content.contact.fields.message}
                    </label>
                    <textarea
                      id={fieldId("message")}
                      name="message"
                      className="form-control"
                      rows={6}
                      placeholder={content.contact.placeholders.message}
                      required
                    ></textarea>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" required />{" "}
                      <FormPrivacyConsent locale={locale} copy={content.contact.privacyConsent} />
                    </label>
                  </div>
                  <button type="submit" className="btn show">
                    {content.contact.submitCta}
                  </button>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
