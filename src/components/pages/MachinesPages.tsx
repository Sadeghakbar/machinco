import Link from "next/link";
import type { MachineDetailContent, MachinesIndexContent } from "@/content/machines";

type MachinesIndexPageProps = {
  content: MachinesIndexContent;
};

export function MachinesIndexPage({ content }: MachinesIndexPageProps) {
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

          <div className="cta-panel">
            <h3>{content.ctaPanel.title}</h3>
            <p>{content.ctaPanel.description}</p>
            <Link className="btn show" href={content.ctaPanel.ctaHref}>
              {content.ctaPanel.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

type MachineDetailPageProps = {
  content: MachineDetailContent;
};

export function MachineDetailPageView({ content }: MachineDetailPageProps) {
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
            <div className="col-md-8">
              <div className="content-card">
                <h3>{content.blocks.applicationsTitle}</h3>
                <ul className="keyword-list">
                  {content.blocks.applications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="content-card">
                <h3>{content.blocks.benefitsTitle}</h3>
                <ul className="keyword-list">
                  {content.blocks.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content-card">
                <h3>{content.sidePanel.title}</h3>
                <p>{content.sidePanel.description}</p>
                <Link className="btn show" href={content.sidePanel.ctaHref}>
                  {content.sidePanel.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
