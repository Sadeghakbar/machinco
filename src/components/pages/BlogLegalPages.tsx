import Link from "next/link";
import type { BlogArticleContent, BlogIndexContent, LegalPageContent } from "@/content/blogLegal";

type BlogIndexPageProps = {
  content: BlogIndexContent;
};

export function BlogIndexPage({ content }: BlogIndexPageProps) {
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
            {content.cards.map((card) => (
              <div key={card.title} className="col-md-4">
                <div className="blog-teaser">
                  <span className="inline-badge">{card.badge}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link className="btn show" href={card.href}>
                    {card.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

type BlogArticlePageProps = {
  content: BlogArticleContent;
};

export function BlogArticlePage({ content }: BlogArticlePageProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container legal-content">
          {content.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <div className="cta-panel">
            <h3>{content.ctaPanel.title}</h3>
            <Link className="btn show" href={content.ctaPanel.href}>
              {content.ctaPanel.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

type LegalPageProps = {
  content: LegalPageContent;
};

export function LegalPage({ content }: LegalPageProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container legal-content">
          <div className="legal-note">{content.legalNote}</div>
          {content.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
