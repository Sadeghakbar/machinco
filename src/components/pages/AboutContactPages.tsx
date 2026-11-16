import Link from "next/link";
import { FormPrivacyConsent } from "@/components/forms/FormPrivacyConsent";
import type { AboutPageContent, ContactPageContent } from "@/content/aboutContact";
import type { Locale } from "@/i18n/config";
import { LocationDetails } from "@/components/location/LocationDetails";
import { LocationMap } from "@/components/location/LocationMap";
import { BUSINESS_EMAIL, BUSINESS_PHONE_E164, GABLINGEN } from "@/content/business";

type AboutPageViewProps = {
  content: AboutPageContent;
};

export function AboutPageView({ content }: AboutPageViewProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="content-card">
                <h3>{content.story.title}</h3>
                {content.story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="content-card">
                <h3>{content.values.title}</h3>
                <ul className="keyword-list">
                  {content.values.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="content-card about-media">
                <h3>{content.media.title}</h3>
                <div className="about-media-grid">
                  {content.media.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
                <Link className="home-text-link" href={content.media.ctaHref}>
                  {content.media.cta} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="cta-panel">
                <h3>{content.ctaPanel.title}</h3>
                <p>{content.ctaPanel.description}</p>
                <Link className="btn show" href={content.ctaPanel.ctaHref}>
                  {content.ctaPanel.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type ContactPageViewProps = {
  locale: Locale;
  content: ContactPageContent;
};

const visitCopy = {
  de: {
    eyebrow: "Besuch vor Ort",
    title: "Maschinen in Gablingen besichtigen",
    text: "An unserem Hauptstandort mit Lager in Gablingen bei Augsburg können Sie Maschinen nach Vereinbarung persönlich besichtigen. Bitte melden Sie Ihren Besuch vorab telefonisch oder per E-Mail an.",
    points: ["Besichtigung nach Vereinbarung", `${GABLINGEN.streetAddress}, ${GABLINGEN.postalCode} ${GABLINGEN.locality}`],
    call: "Termin vereinbaren",
    mail: "E-Mail schreiben",
    alt: "Eingang der Machinco GmbH mit Firmenschild in Gablingen",
    badge: "Machinco GmbH · Gablingen"
  },
  en: {
    eyebrow: "Visit us",
    title: "Inspect machines in Gablingen",
    text: "At our main warehouse and business location in Gablingen near Augsburg, you can inspect machines in person by appointment. Please arrange your visit in advance by phone or email.",
    points: ["Inspection by appointment", `${GABLINGEN.streetAddress}, ${GABLINGEN.postalCode} ${GABLINGEN.locality}, Germany`],
    call: "Arrange a visit",
    mail: "Send an email",
    alt: "Machinco GmbH entrance with company sign in Gablingen",
    badge: "Machinco GmbH · Gablingen"
  }
} as const;

function ContactVisitSection({ locale }: { locale: Locale }) {
  const copy = visitCopy[locale];
  return (
    <section className="page-section contact-visit" aria-labelledby="contact-visit-title">
      <div className="container">
        <div className="row contact-visit-row">
          <div className="col-md-6">
            <figure className="contact-visit-media">
              <img
                src="/images/contact/entrance-gablingen.jpg"
                alt={copy.alt}
                width={1440}
                height={1083}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="contact-visit-badge">
                <i className="fa fa-map-marker" aria-hidden="true"></i> {copy.badge}
              </figcaption>
            </figure>
          </div>
          <div className="col-md-6">
            <div className="contact-visit-body">
              <span className="projects-eyebrow">{copy.eyebrow}</span>
              <h2 id="contact-visit-title">{copy.title}</h2>
              <p>{copy.text}</p>
              <ul className="contact-visit-points">
                {copy.points.map((point) => (
                  <li key={point}>
                    <i className="fa fa-check" aria-hidden="true"></i> {point}
                  </li>
                ))}
              </ul>
              <div className="contact-visit-actions">
                <a className="btn btn-warning btn-lg hero-cta-primary" href={`tel:${BUSINESS_PHONE_E164}`}>
                  <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; {copy.call}
                </a>
                <a className="btn btn-lg contact-visit-secondary" href={`mailto:${BUSINESS_EMAIL}`}>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp; {copy.mail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPageView({ locale, content }: ContactPageViewProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="content-card">
                <h3>{content.details.title}</h3>
                <LocationDetails locale={locale} showContact={false} />
                {content.details.extraBlockTitle && content.details.extraBlockLines ? (
                  <p className="location-secondary">
                    <span className="location-label">{content.details.extraBlockTitle}</span>
                    {content.details.extraBlockLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                ) : null}
                <ul className="location-contact-lines">
                  <li>
                    {content.details.phoneLabel}:{" "}
                    <a href={`tel:${BUSINESS_PHONE_E164}`}>{content.details.phoneValue}</a>
                  </li>
                  <li>
                    {content.details.emailLabel}:{" "}
                    <a href={`mailto:${content.details.emailValue}`}>{content.details.emailValue}</a>
                  </li>
                </ul>
              </div>
              <div className="cta-panel">
                <h3>{content.quickInfo.title}</h3>
                <p>{content.quickInfo.description}</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="content-card">
                <h3>{content.form.title}</h3>
                <form id={content.form.formId} method="post" action="https://api.web3forms.com/submit">
                  <input type="hidden" name="access_key" value="9565bb1b-bb34-4c9e-951c-8338d01f9774" />
                  <input type="hidden" name="subject" value={content.form.subject} />
                  <input type="hidden" name="from_name" value="Machinco Website" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <input type="text" name="name" className="form-control" placeholder={content.form.fields.name} required />
                    </div>
                    <div className="col-sm-6 form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder={content.form.fields.email}
                        required
                      />
                    </div>
                    <div className="col-sm-6 form-group">
                      <input type="text" name="phone" className="form-control" placeholder={content.form.fields.phone} />
                    </div>
                    <div className="col-sm-6 form-group">
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        placeholder={content.form.fields.company}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows={7}
                      placeholder={content.form.fields.message}
                      required
                    ></textarea>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" required />{" "}
                      <FormPrivacyConsent locale={locale} copy={content.form.privacyConsent} />
                    </label>
                  </div>
                  <button type="submit" className="btn show">
                    {content.form.submitLabel}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactVisitSection locale={locale} />

      <LocationMap locale={locale} />
    </>
  );
}
