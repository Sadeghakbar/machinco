"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { MachineDetailContent } from "@/content/machines";

type ProductDetailHeroProps = {
  content: MachineDetailContent;
  locale: "de" | "en";
};

export function ProductDetailHero({ content, locale }: ProductDetailHeroProps) {
  const images = useMemo(
    () => Array.from(new Set([content.heroImage, ...content.galleryImages])),
    [content.heroImage, content.galleryImages]
  );

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = useCallback((index = 0) => {
    setActiveIndex(index);
    setGalleryOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setGalleryOpen(false);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  useEffect(() => {
    if (!galleryOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }
      if (event.key === "ArrowLeft") {
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryOpen, closeGallery, showNext, showPrevious]);

  const closeLabel = locale === "de" ? "Galerie schliessen" : "Close gallery";
  const previousLabel = locale === "de" ? "Vorheriges Bild" : "Previous image";
  const nextLabel = locale === "de" ? "Naechstes Bild" : "Next image";

  return (
    <>
      <section
        className="product-detail-hero"
        style={{ backgroundImage: `url(${content.heroImage})` }}
        aria-label={content.title}
      >
        <div className="product-detail-hero-overlay" />
        <button
          type="button"
          className="product-detail-hero-open"
          onClick={() => openGallery(0)}
          aria-label={content.detailLabels.galleryCtaLabel}
        />
        <div className="container product-detail-hero-inner">
          <div className="product-detail-hero-footer">
            <div className="product-detail-hero-left">
              <h1>{content.title}</h1>
              <button type="button" className="btn show product-detail-action-btn" onClick={() => openGallery(0)}>
                {content.detailLabels.galleryCtaLabel}
              </button>
            </div>

            <div className="product-detail-hero-right">
              <div className="product-detail-price">{content.priceDisplay}</div>
              <p className="product-detail-price-label">{content.detailLabels.priceLabel}</p>
              <Link className="btn show product-detail-action-btn" href={content.inquiryLinks.quote}>
                {content.detailLabels.quoteCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {galleryOpen ? (
        <div
          className="product-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={content.detailLabels.galleryCtaLabel}
          onClick={closeGallery}
        >
          <div className="product-gallery-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="product-gallery-close" onClick={closeGallery} aria-label={closeLabel}>
              ×
            </button>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  className="product-gallery-nav product-gallery-nav-prev"
                  onClick={showPrevious}
                  aria-label={previousLabel}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="product-gallery-nav product-gallery-nav-next"
                  onClick={showNext}
                  aria-label={nextLabel}
                >
                  ›
                </button>
              </>
            ) : null}

            <img
              src={images[activeIndex]}
              alt={`${content.title} ${activeIndex + 1}`}
              className="product-gallery-modal-image"
            />

            {images.length > 1 ? (
              <p className="product-gallery-counter">
                {activeIndex + 1} / {images.length}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
