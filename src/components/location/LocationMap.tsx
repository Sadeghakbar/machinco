"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";
import {
  GABLINGEN_DIRECTIONS_URL,
  GABLINGEN_MAPS_EMBED_URL,
  GABLINGEN_MAPS_URL,
  GABLINGEN_STATIC_MAP,
  getLocationCopy
} from "@/content/business";

type LocationMapProps = {
  locale: Locale;
};

const mapCopy = {
  de: {
    title: "So finden Sie uns in Gablingen",
    consent:
      "Die interaktive Karte wird von Google bereitgestellt und erst nach Ihrer Zustimmung geladen. Dabei werden Daten (u. a. Ihre IP-Adresse) an Google übermittelt.",
    privacy: "Datenschutzerklärung",
    load: "Interaktive Karte laden",
    staticAlt: "Lageplan: Machinco GmbH, Dornierstraße 9, Halle 13, im Gewerbegebiet Gablingen",
    attribution: "Kartendaten © OpenStreetMap-Mitwirkende (ODbL)",
    remember: "Karte auf diesem Gerät künftig automatisch laden",
    forget: "Automatisches Laden der Karte beenden",
    frameTitle: "Google Maps: Machinco GmbH, Dornierstraße 9, 86456 Gablingen"
  },
  en: {
    title: "Find us in Gablingen",
    consent:
      "The interactive map is provided by Google and only loads with your consent. Data (including your IP address) is then transmitted to Google.",
    privacy: "Privacy policy",
    load: "Load interactive map",
    staticAlt: "Location map: Machinco GmbH, Dornierstraße 9, Halle 13, in the Gablingen business park",
    attribution: "Map data © OpenStreetMap contributors (ODbL)",
    remember: "Load the map automatically on this device in future",
    forget: "Stop loading the map automatically",
    frameTitle: "Google Maps: Machinco GmbH, Dornierstraße 9, 86456 Gablingen, Germany"
  }
} as const;

/**
 * Google switches its embed to a compact mode without the place pin below ~500px.
 * On narrow screens the iframe is rendered at this width and scaled down to fit,
 * so the Machinco pin and profile card stay visible and move with the map.
 */
const MIN_EMBED_WIDTH = 520;

/**
 * Remembered consent (opt-in only, never pre-selected). Stored locally on the visitor's device;
 * nothing is sent to Google until consent has been given.
 */
const CONSENT_KEY = "machinco-maps-consent";
const CONSENT_EVENT = "machinco-maps-consent-change";

function readRememberedConsent(): boolean {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}

function writeRememberedConsent(granted: boolean) {
  try {
    if (granted) {
      window.localStorage.setItem(CONSENT_KEY, "granted");
    } else {
      window.localStorage.removeItem(CONSENT_KEY);
    }
  } catch {
    // Storage unavailable (private mode): consent simply is not remembered.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

function subscribeToConsent(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function LocationMap({ locale }: LocationMapProps) {
  const [loadedNow, setLoadedNow] = useState(false);
  const [rememberChoice, setRememberChoice] = useState(false);
  const remembered = useSyncExternalStore(subscribeToConsent, readRememberedConsent, () => false);
  const loaded = loadedNow || remembered;

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

  const loadMap = () => {
    if (rememberChoice) {
      writeRememberedConsent(true);
    }
    setLoadedNow(true);
  };

  const forgetConsent = () => {
    writeRememberedConsent(false);
    setLoadedNow(false);
    setRememberChoice(false);
  };

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
            <div className="location-map-header-actions">
              <a className="btn show" href={GABLINGEN_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-location-arrow" aria-hidden="true"></i>&nbsp; {location.directionsCta}
              </a>
              <a
                className="btn location-map-secondary"
                href={GABLINGEN_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp; {location.mapsCta}
              </a>
            </div>
          </div>
          <div className={`location-map-frame${loaded ? " is-loaded" : ""}`} ref={frameRef}>
            {loaded ? (
              <iframe
                style={iframeStyle}
                src={GABLINGEN_MAPS_EMBED_URL}
                title={copy.frameTitle}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="location-map-consent">
                <figure className="location-static-map">
                  <img
                    src={GABLINGEN_STATIC_MAP}
                    alt={copy.staticAlt}
                    width={1600}
                    height={800}
                    decoding="async"
                  />
                  <figcaption className="location-static-attribution">
                    <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
                      {copy.attribution}
                    </a>
                  </figcaption>
                </figure>
                <div className="location-map-consent-card">
                  <p className="location-map-consent-text">
                    {copy.consent}{" "}
                    <Link href={getPathForRouteKey(locale, "legal.privacy")}>{copy.privacy}</Link>
                  </p>
                  <label className="location-map-remember">
                    <input
                      type="checkbox"
                      checked={rememberChoice}
                      onChange={(event) => setRememberChoice(event.target.checked)}
                    />{" "}
                    {copy.remember}
                  </label>
                  <div className="location-map-consent-actions">
                    <button type="button" className="btn show" onClick={loadMap}>
                      {copy.load}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {remembered ? (
            <div className="location-map-footer">
              <button type="button" className="location-map-forget" onClick={forgetConsent}>
                {copy.forget}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
