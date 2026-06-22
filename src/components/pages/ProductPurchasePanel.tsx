import Link from "next/link";
import type { MachineDetailContent } from "@/content/machines";

type ProductPurchasePanelProps = {
  content: MachineDetailContent;
};

export function ProductPurchasePanel({ content }: ProductPurchasePanelProps) {
  const productRef = content.reference ?? content.slug.toUpperCase();

  return (
    <aside
      className={`product-purchase-panel${content.status === "sold" ? " product-purchase-panel-sold" : ""}`}
      aria-label={content.status === "sold" ? content.detailLabels.soldNoticeTitle : content.detailLabels.priceLabel}
    >
      <h2 className="product-purchase-title">{content.title}</h2>
      <p className="product-purchase-ref">{productRef}</p>

      <div className="product-purchase-price-block">
        <div className={`product-purchase-price${content.status === "sold" ? " product-purchase-price-sold" : ""}`}>
          {content.priceDisplay}
        </div>
        {content.status === "sold" ? (
          <p className="product-sold-description">{content.detailLabels.soldNoticeDescription}</p>
        ) : (
          <p className="product-purchase-price-meta">
            <span>{content.detailLabels.priceLabel}</span>
            <span className="product-purchase-price-note">{content.detailLabels.priceNote}</span>
          </p>
        )}
      </div>

      {content.status !== "sold" ? (
        <div className="product-purchase-actions">
          <Link className="btn show product-purchase-btn-primary" href={content.inquiryLinks.quote}>
            {content.detailLabels.quoteCtaLabel}
          </Link>
          <Link className="btn product-purchase-btn-secondary" href={content.inquiryLinks.viewing}>
            {content.detailLabels.inspectCtaLabel}
          </Link>
        </div>
      ) : null}
    </aside>
  );
}
