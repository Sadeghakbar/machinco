"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import { GABLINGEN_MAPS_EMBED_URL, GABLINGEN_MAPS_URL, getLocationCopy } from "@/content/business";

type LocationMapProps = {
  locale: Locale;
};

const mapCopy = {
  de: {
    title: "So finden Sie uns in Gablingen",
    consent:
      "Zum Schutz Ihrer Daten wird die Karte erst nach Ihrem Klick geladen. Dabei werden Daten (u. a. Ihre IP-Adresse) an Google übermittelt.",
    privacy: "Datenschutzerklärung",
    load: "Karte laden",
    frameTitle: "Google Maps: Machinco GmbH, Dornierstraße 9, 86456 Gablingen"
  },
  en: {
    title: "Find us in Gablingen",
    consent:
      "To protect your privacy, the map only loads after you click. Data (including your IP address) is then transmitted to Google.",
    privacy: "Privacy policy",
    load: "Load map",
    frameTitle: "Google Maps: Machinco GmbH, Dornierstraße 9, 86456 Gablingen, Germany"
  }
} as const;

/**
 * Google switches its embed to a compact mode without the place pin below ~500px.
 * On narrow screens the iframe is rendered at this width and scaled down to fit,
 * so the Machinco pin and profile card stay visible and move with the map.
 */
const MIN_EMBED_WIDTH = 520;

export function LocationMap({ locale }: LocationMapProps) {
  const [loaded, setLoaded] = useState(false);
  const [frameSize, setFrameSize] = useState<{ width: number; height: number } | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const copy = mapCopy[locale];
  const location = getLocationCopy(locale);

  useEffect(() => {
    const element = frameRef.current;
    if (!loaded || !element) {
      return;
    }

    // ResizeObserver also reports the initial size right after observe().
    const observer = new ResizeObserver(() =>
      setFrameSize({ width: element.clientWidth, height: element.clientHeight })
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [loaded]);

  const scale = frameSize && frameSize.width < MIN_EMBED_WIDTH ? frameSize.width / MIN_EMBED_WIDTH : 1;
  const iframeStyle: CSSProperties | undefined =
    frameSize && scale < 1
      ? {
          width: `${MIN_EMBED_WIDTH}px`,
          height: `${frameSize.height / scale}px`,
          transform: `scale(${scale})`,
          transformOrigin: "0 0"
        }
      : undefined;

  return (
    <section className="page-section location-map-section" id="standort" aria-labelledby="location-map-title">
      <div className="container">
        <div className="location-map-card">
          <div className="location-map-header">
            <div>
              <span className="location-label">{location.primaryLabel}</span>
              <h2 id="location-map-title">{copy.title}</h2>
              <address>
                Machinco GmbH, {location.primaryLines[0]}, {location.primaryLines[1]}
              </address>
            </div>
            <a className="btn show" href={GABLINGEN_MAPS_URL} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp; {location.mapsCta}
            </a>
          </div>
          <div className="location-map-frame" ref={frameRef}>
            {loaded ? (
              <iframe
                style={iframeStyle}
                src={GABLINGEN_MAPS_EMBED_URL}
                title={copy.frameTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="location-map-consent">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>
                  {copy.consent}{" "}
                  <Link href={getPathForRouteKey(locale, "legal.privacy")}>{copy.privacy}</Link>
                </p>
                <div className="location-map-consent-actions">
                  <button type="button" className="btn show" onClick={() => setLoaded(true)}>
                    {copy.load}
                  </button>
                  <a
                    className="btn btn-outline-light"
                    href={GABLINGEN_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {location.mapsCta}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
