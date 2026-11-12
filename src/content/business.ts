import type { Locale } from "@/i18n/config";

/**
 * Single source of truth for Machinco's locations and contact details.
 *
 * Gablingen is the primary business location (main warehouse, machinery
 * storage and operations). It matches the Google Business Profile
 * "Machinco GmbH", Dornierstraße 9, 86456 Gablingen (verified on Google Maps).
 * Munich is the secondary office address.
 */

export const GABLINGEN = {
  streetAddress: "Dornierstraße 9, Halle 13",
  postalCode: "86456",
  locality: "Gablingen",
  region: "Bayern",
  countryCode: "DE",
  // Coordinates taken from Google's own Machinco GmbH business profile pin.
  latitude: 48.4594953,
  longitude: 10.8568328
} as const;

export const MUNICH_OFFICE = {
  streetAddress: "Pläntschweg 13",
  postalCode: "81247",
  locality: "München",
  localityEn: "Munich"
} as const;

export const BUSINESS_PHONE_DISPLAY = "+49 163 0133066";
export const BUSINESS_PHONE_E164 = "+491630133066";
export const BUSINESS_EMAIL = "info@machincogmbh.com";
export const SITE_URL = "https://www.machinco.de";

/** Opens the Machinco GmbH profile at Dornierstraße 9, Gablingen in Google Maps. */
export const GABLINGEN_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Machinco%20GmbH%2C%20Dornierstra%C3%9Fe%209%2C%2086456%20Gablingen";

/** Keyless Google Maps embed for the same location (loaded only after visitor consent). */
export const GABLINGEN_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Machinco%20GmbH%2C%20Dornierstra%C3%9Fe%209%2C%2086456%20Gablingen&z=16&output=embed";

export type LocationCopy = {
  primaryLabel: string;
  primaryLines: string[];
  officeLabel: string;
  officeLines: string[];
  mapsCta: string;
  phoneLabel: string;
  emailLabel: string;
};

const locationCopyByLocale: Record<Locale, LocationCopy> = {
  de: {
    primaryLabel: "Hauptstandort & Lager",
    primaryLines: [GABLINGEN.streetAddress, `${GABLINGEN.postalCode} ${GABLINGEN.locality}`, "Deutschland"],
    officeLabel: "Büro",
    officeLines: [MUNICH_OFFICE.streetAddress, `${MUNICH_OFFICE.postalCode} ${MUNICH_OFFICE.locality}`],
    mapsCta: "In Google Maps öffnen",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail"
  },
  en: {
    primaryLabel: "Main Warehouse & Business Location",
    primaryLines: [GABLINGEN.streetAddress, `${GABLINGEN.postalCode} ${GABLINGEN.locality}`, "Germany"],
    officeLabel: "Office",
    officeLines: [MUNICH_OFFICE.streetAddress, `${MUNICH_OFFICE.postalCode} ${MUNICH_OFFICE.localityEn}`],
    mapsCta: "Open in Google Maps",
    phoneLabel: "Phone",
    emailLabel: "Email"
  }
};

export function getLocationCopy(locale: Locale): LocationCopy {
  return locationCopyByLocale[locale];
}

/** schema.org LocalBusiness data for the primary (Gablingen) location. */
export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Machinco GmbH",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/logo.png`,
    description:
      "Used CNC and conventional machine tools for manufacturing companies. Main warehouse and business location in Gablingen near Augsburg.",
    telephone: BUSINESS_PHONE_E164,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: GABLINGEN.streetAddress,
      postalCode: GABLINGEN.postalCode,
      addressLocality: GABLINGEN.locality,
      addressRegion: GABLINGEN.region,
      addressCountry: GABLINGEN.countryCode
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GABLINGEN.latitude,
      longitude: GABLINGEN.longitude
    },
    hasMap: GABLINGEN_MAPS_URL,
    areaServed: ["DE", "EU"]
  };
}
