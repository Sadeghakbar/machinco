import Link from "next/link";
import { Suspense } from "react";
import type { MachineDetailContent, MachinesIndexContent } from "@/content/machines";
import { ProductDetailHero } from "@/components/pages/ProductDetailHero";
import { ProductInquiryForm } from "@/components/pages/ProductInquiryForm";
import { ProductPurchasePanel } from "@/components/pages/ProductPurchasePanel";

type MachinesIndexPageProps = {
  content: MachinesIndexContent;
  locale: "de" | "en";
};

export function MachinesIndexPage({ content, locale }: MachinesIndexPageProps) {
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
          <div className="row product-grid">
            {content.products.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6">
                <article className="product-card">
                  <Link href={product.href} className="product-card-image-link machine-card-media">
                    <img
                      src={product.heroImage}
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
                      className="product-card-image"
                    />
                    <span className={`product-status product-status-${product.status}`}>
                      {content.statusLabels[product.status]}
                    </span>
                  </Link>
                  <div className="product-card-body">
                    <h3>
                      <Link href={product.href}>{product.title}</Link>
                    </h3>
                    <p>{product.summary}</p>
                    <ul className="product-meta">
                      <li>
                        <strong>{locale === "de" ? "Kategorie" : "Category"}:</strong> {product.category}
                      </li>
                      {product.brand ? (
                        <li>
                          <strong>{locale === "de" ? "Hersteller" : "Brand"}:</strong> {product.brand}
                        </li>
                      ) : null}
                      {product.year ? (
                        <li>
                          <strong>{locale === "de" ? "Baujahr" : "Year"}:</strong> {product.year}
                        </li>
                      ) : null}
                    </ul>
                    <Link className="btn show" href={product.href}>
                      {product.ctaLabel}
                    </Link>
                  </div>
                </article>
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
  locale: "de" | "en";
};

export function MachineDetailPageView({ content, locale }: MachineDetailPageProps) {
  return (
    <>
      <ProductDetailHero content={content} locale={locale} />

      <section className="product-detail-meta-bar">
        <div className="container">
          <ul className="product-detail-meta-inline">
            <li>
              <strong>{content.detailLabels.metaCategory}:</strong> {content.category}
            </li>
            {content.brand ? (
              <li>
                <strong>{content.detailLabels.metaBrand}:</strong> {content.brand}
              </li>
            ) : null}
            {content.year ? (
              <li>
                <strong>{content.detailLabels.metaYear}:</strong> {content.year}
              </li>
            ) : null}
            <li>
              <strong>{content.detailLabels.metaStatus}:</strong> {content.statusLabel}
            </li>
          </ul>
          <p className="product-detail-summary">{content.summary}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                  <div className="content-card">
                    <h3>{content.detailLabels.highlightsTitle}</h3>
                    <ul className="keyword-list">
                      {content.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="content-card">
                    <h3>{content.detailLabels.specsTitle}</h3>
                    <div className="product-spec-groups">
                      {content.specGroups.map((group) => (
                        <section className="product-spec-group" key={group.title}>
                          <h4>{group.title}</h4>
                          <table className="product-spec-table">
                            <tbody>
                              {group.specs.map((spec) => (
                                <tr key={spec.label}>
                                  <th scope="row">{spec.label}</th>
                                  <td>{spec.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </section>
                      ))}
                    </div>
                  </div>

                  {content.dimensions.length > 0 ? (
                    <div className="content-card">
                      <h3>{content.detailLabels.dimensionsTitle}</h3>
                      <table className="product-spec-table product-dimensions-table">
                        <tbody>
                          {content.dimensions.map((spec) => (
                            <tr key={spec.label}>
                              <th scope="row">{spec.label}</th>
                              <td>{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}

                  {content.applications.length > 0 ? (
                    <div className="content-card">
                      <h3>{content.detailLabels.applicationsTitle}</h3>
                      <ul className="keyword-list">
                        {content.applications.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

              {content.status !== "sold" ? (
                <Suspense fallback={<div className="content-card product-inquiry-form" />}>
                  <ProductInquiryForm locale={locale} content={content} />
                </Suspense>
              ) : null}
            </div>

            <div className="col-md-4">
              <ProductPurchasePanel content={content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
