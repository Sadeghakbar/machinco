import Link from "next/link";
import type { MachineDetailContent } from "@/content/machines";

type ProductPurchasePanelProps = {
  content: MachineDetailContent;
};

export function ProductPurchasePanel({ content }: ProductPurchasePanelProps) {
  const productRef = content.slug.toUpperCase().replace(/-/g, "-");

  return (
    <aside className="product-purchase-panel" aria-label={content.detailLabels.priceLabel}>
      <h2 className="product-purchase-title">{content.title}</h2>
      <p className="product-purchase-ref">{productRef}</p>

      <div className="product-purchase-price-block">
        <div className="product-purchase-price">{content.priceDisplay}</div>
        <p className="product-purchase-price-meta">
          <span>{content.detailLabels.priceLabel}</span>
          <span className="product-purchase-price-note">{content.detailLabels.priceNote}</span>
        </p>
      </div>

      <div className="product-purchase-actions">
        <Link className="btn show product-purchase-btn-primary" href={content.inquiryLinks.quote}>
          {content.detailLabels.quoteCtaLabel}
        </Link>
        <Link className="btn product-purchase-btn-secondary" href={content.inquiryLinks.viewing}>
          {content.detailLabels.inspectCtaLabel}
        </Link>
      </div>
    </aside>
  );
}
