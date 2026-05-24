import Link from "next/link";
import { FormPrivacyConsent } from "@/components/forms/FormPrivacyConsent";
import type { AboutPageContent, ContactPageContent } from "@/content/aboutContact";
import type { Locale } from "@/i18n/config";

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
              <div className="content-card">
                <h3>{content.media.title}</h3>
                {content.media.placeholders.map((item) => (
                  <p key={item}>{item}</p>
                ))}
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
                <p>
                  <strong>{content.details.company}</strong>
                  <br />
                  {content.details.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                {content.details.extraBlockTitle && content.details.extraBlockLines ? (
                  <p>
                    <strong>{content.details.extraBlockTitle}</strong>
                    <br />
                    {content.details.extraBlockLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                ) : null}
                <p>
                  {content.details.phoneLabel}: {content.details.phoneValue}
                  <br />
                  {content.details.emailLabel}: {content.details.emailValue}
                </p>
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
    </>
  );
}
