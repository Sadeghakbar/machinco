"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { projectImageSrc, projectImageSrcSet, type ProjectImage } from "@/content/projects";

type ProjectGalleryProps = {
  locale: Locale;
  images: ProjectImage[];
  labels: { open: string; close: string; previous: string; next: string };
  /**
   * "masonry": large, uncropped photos in flowing columns (portfolio).
   * "grid": compact cropped tiles (case-study pages).
   */
  variant?: "masonry" | "grid";
};

export function ProjectGallery({ locale, images, labels, variant = "grid" }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(
    () => setActiveIndex((index) => (index === null ? null : (index - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((index) => (index === null ? null : (index + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, showPrevious, showNext]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) showPrevious();
    else showNext();
  };

  const active = activeIndex !== null ? images[activeIndex] : null;
  const isMasonry = variant === "masonry";

  return (
    <>
      <div className={isMasonry ? "project-masonry" : "project-gallery-grid"}>
        {images.map((image, index) => (
          <button
            key={image.base}
            type="button"
            className={
              isMasonry
                ? "project-masonry-item"
                : `project-gallery-item${image.height > image.width ? " is-portrait" : ""}`
            }
            onClick={() => setActiveIndex(index)}
            aria-label={`${labels.open}: ${image.alt[locale]}`}
          >
            <img
              src={isMasonry ? projectImageSrc(image) : `${image.base}-sm.jpg`}
              srcSet={isMasonry ? projectImageSrcSet(image) : undefined}
              sizes={isMasonry ? "(max-width: 599px) 100vw, (max-width: 991px) 50vw, 400px" : undefined}
              alt={image.alt[locale]}
              width={image.width}
              height={image.height}
              loading={isMasonry && index < 3 ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="project-gallery-zoom" aria-hidden="true">
              <i className="fa fa-search-plus"></i>
            </span>
          </button>
        ))}
      </div>

      {active && activeIndex !== null ? (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={active.alt[locale]} onClick={close}>
          <div
            className="project-lightbox-stage"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              key={active.base}
              src={projectImageSrc(active)}
              srcSet={projectImageSrcSet(active)}
              sizes="100vw"
              alt={active.alt[locale]}
            />
            <p className="project-lightbox-caption">
              <span>
                {activeIndex + 1} / {images.length}
              </span>{" "}
              {active.alt[locale]}
            </p>
          </div>
          <button type="button" className="project-lightbox-close" onClick={close} aria-label={labels.close}>
            ×
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                className="project-lightbox-nav is-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label={labels.previous}
              >
                ‹
              </button>
              <button
                type="button"
                className="project-lightbox-nav is-next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label={labels.next}
              >
                ›
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
