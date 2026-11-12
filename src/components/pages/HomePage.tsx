import Link from "next/link";
import { FormPrivacyConsent } from "@/components/forms/FormPrivacyConsent";
import { LocationDetails } from "@/components/location/LocationDetails";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";

type HomePageProps = {
  locale: Locale;
  content: HomeContent;
};

export function HomePage({ locale, content }: HomePageProps) {
  return (
    <>
      <section id="hero-banner">
        <video width="100%" autoPlay muted loop>
          <source src="/vids/0503.mov" type="video/mp4" />
          {content.hero.videoFallbackText}
        </video>
        <div className="container hero-content">
          <div className="row">
            <div className="col-md-8 col-sm-10">
              <h1>{content.hero.title}</h1>
              <p>{content.hero.description}</p>
              <div className="hero-cta-group">
                <Link
                  className="btn btn-warning btn-lg hero-cta-primary"
                  href={getPathForRouteKey(locale, "machines.index")}
                >
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
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="section-block">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">{content.advantages.title}</h2>
            <p className="wow fadeInDown">{content.advantages.description}</p>
          </div>
          <div className="row">
            {content.advantages.items.map((item) => (
              <div key={item.title} className="col-sm-6 col-md-3">
                <div className="benefit-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="machineries" className="section-block section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">{content.machines.title}</h2>
            <p className="wow fadeInDown">{content.machines.description}</p>
          </div>
          <div className="row">
            {content.machines.cards.map((machine) => (
              <div key={machine.title} className="col-sm-6 col-md-4">
                <div className="thumbnail machine-card">
                  <img src={machine.imageSrc} alt={machine.imageAlt} />
                  <div className="caption">
                    <h3>{machine.title}</h3>
                    <p>{machine.description}</p>
                    <p>
                      <Link className="btn show" href={machine.href} role="button">
                        {content.labels.learnMore}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>
      </section>

      <section id="business-stats">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">{content.stats.title}</h2>
            <p className="wow fadeInDown">{content.stats.description}</p>
          </div>
          <div className="row text-center">
            {content.stats.values.map((stat, index) => (
              <div key={stat.label} className="col-md-3 col-sm-6 col-xs-12">
                <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay={`${index * 100}ms`}>
                  <div className="business-stats">{stat.value}</div>
                  <strong>{stat.label}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="trust-badges text-center">
            {content.stats.badges.map((badge) => (
              <span key={badge} className="trust-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonial" className="testimonial-area section-block">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">{content.testimonials.title}</h2>
            <p className="wow fadeInDown">{content.testimonials.description}</p>
          </div>
          <div className="row">
            {content.testimonials.items.map((item) => (
              <div key={item.role} className="col-md-4">
                <div className="single-testimonial">
                  <blockquote>{item.quote}</blockquote>
                  <h5>{item.role}</h5>
                  <h6>{item.company}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">{content.about.title}</h2>
            <p className="wow fadeInDown">{content.about.lead}</p>
          </div>
          <div className="row">
            <div className="col-sm-6 wow fadeInLeft">
              <img className="img-responsive" src="/images/pic5.png" alt={content.about.imageAlt} />
              <p className="image-placeholder">{content.about.imageCaption}</p>
            </div>
            <div className="col-sm-6 wow fadeInRight">
              <h3 className="column-title">{content.about.heading}</h3>
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link className="btn show" href={getPathForRouteKey(locale, "about")}>
                {content.about.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id={content.inquiryId} className="section-block section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">{content.quickInquiry.title}</h2>
            <p className="wow fadeInDown">{content.quickInquiry.description}</p>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <form id="quick-inquiry-form" method="post" action="https://api.web3forms.com/submit">
                <input type="hidden" name="access_key" value="9565bb1b-bb34-4c9e-951c-8338d01f9774" />
                <input
                  type="hidden"
                  name="subject"
                  value={content.quickInquiry.subject}
                />
                <input type="hidden" name="from_name" value="Machinco Website" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder={content.quickInquiry.placeholders.name}
                      required
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder={content.quickInquiry.placeholders.email}
                      required
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder={content.quickInquiry.placeholders.phone}
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder={content.quickInquiry.placeholders.company}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={6}
                    placeholder={content.quickInquiry.placeholders.message}
                    required
                  ></textarea>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" required />{" "}
                    <FormPrivacyConsent locale={locale} copy={content.quickInquiry.privacyConsent} />
                  </label>
                </div>
                <button type="submit" className="btn show">
                  {content.quickInquiry.submitCta}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="final-cta" className="section-block final-cta">
        <div className="container text-center">
          <h2>{content.finalCta.title}</h2>
          <p>{content.finalCta.description}</p>
          <div className="hero-cta-group">
            <Link className="btn btn-warning btn-lg hero-cta-primary" href={`#${content.inquiryId}`}>
              {content.finalCta.primaryCta}
            </Link>
            <Link
              className="btn btn-default btn-lg hero-cta-secondary"
              href={getPathForRouteKey(locale, "contact")}
            >
              {content.finalCta.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="container contact-info">
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="contact-form">
                  <h3>{content.contact.title}</h3>
                  <LocationDetails locale={locale} />
                </div>
              </div>
              <div className="col-sm-8 col-md-8">
                <div className="contact-form">
                  <form id="main-contact-form" method="post" action="https://api.web3forms.com/submit">
                    <input type="hidden" name="access_key" value="9565bb1b-bb34-4c9e-951c-8338d01f9774" />
                    <input
                      type="hidden"
                      name="subject"
                      value={content.contact.subject}
                    />
                    <input type="hidden" name="from_name" value="Machinco Website" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={content.contact.placeholders.name}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder={content.contact.placeholders.email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder={content.contact.placeholders.phone}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
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
                        <FormPrivacyConsent locale={locale} copy={content.quickInquiry.privacyConsent} />
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
