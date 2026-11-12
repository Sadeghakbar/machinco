import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";

export type ProductStatus = "available" | "on-request" | "sold";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductSpecGroup = {
  title: string;
  specs: ProductSpec[];
};

export type ProductMedia = {
  src: string;
  type: "image" | "video";
};

export type ProductLocaleContent = {
  title: string;
  summary: string;
  highlights: string[];
  specs?: ProductSpec[];
  specGroups?: ProductSpecGroup[];
  dimensions?: ProductSpec[];
  applications: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
};

export type ProductDefinition = {
  id: string;
  slug: string;
  category: string | Record<Locale, string>;
  reference?: string;
  brand?: string;
  year?: number;
  /** Price in EUR. Omit to show localized "on request" on the detail page. */
  priceEur?: number;
  featured?: boolean;
  status?: ProductStatus;
  heroImage: string;
  galleryImages?: string[];
  galleryMedia?: ProductMedia[];
  locale: Record<Locale, ProductLocaleContent>;
};

export type ProductListItem = {
  id: string;
  slug: string;
  href: string;
  title: string;
  summary: string;
  category: string;
  reference?: string;
  brand?: string;
  year?: number;
  featured: boolean;
  status: ProductStatus;
  heroImage: string;
  ctaLabel: string;
};

export type ProductDetail = ProductListItem & {
  priceDisplay: string;
  galleryMedia: ProductMedia[];
  highlights: string[];
  specGroups: ProductSpecGroup[];
  dimensions: ProductSpec[];
  applications: string[];
  ctaTitle: string;
  ctaDescription: string;
};

function formatPriceEur(locale: Locale, amount: number): string {
  if (locale === "de") {
    return `${amount.toLocaleString("de-DE")} €`;
  }

  return `€${amount.toLocaleString("en-US")}`;
}

export type MachinesIndexCopy = {
  hero: {
    title: string;
    description: string;
  };
  ctaPanel: {
    title: string;
    description: string;
    cta: string;
    ctaHref: string;
  };
  listingBadge: string;
  featuredBadge: string;
  statusLabels: Record<ProductStatus, string>;
  priceOnRequest: string;
  soldCtaLabel: string;
};

const machinesIndexCopyByLocale: Record<Locale, MachinesIndexCopy> = {
  de: {
    hero: {
      title: "Gebrauchte Industriemaschinen",
      description:
        "Verfügbare und bereits verkaufte Maschinen aus unserem Handel – mit technischen Daten, Fotos und Besichtigung nach Vereinbarung."
    },
    ctaPanel: {
      title: "Ihre Wunschmaschine ist nicht dabei?",
      description:
        "Wir suchen gezielt nach der passenden gebrauchten Maschine für Sie und organisieren auf Wunsch Besichtigung, Verladung und Export.",
      cta: "Suchanfrage senden",
      ctaHref: getPathForRouteKey("de", "contact")
    },
    listingBadge: "Maschine",
    featuredBadge: "Empfohlen",
    statusLabels: {
      available: "Verfügbar",
      "on-request": "Auf Anfrage",
      sold: "Verkauft"
    },
    priceOnRequest: "Auf Anfrage",
    soldCtaLabel: "Maschine ansehen"
  },
  en: {
    hero: {
      title: "Used Industrial Machinery",
      description:
        "Available and already sold machines from our trading business – with technical data, photos and inspection by appointment."
    },
    ctaPanel: {
      title: "Can't find the machine you need?",
      description:
        "We search specifically for the right used machine for you and can arrange inspection, loading and export on request.",
      cta: "Send a search request",
      ctaHref: getPathForRouteKey("en", "contact")
    },
    listingBadge: "Machine",
    featuredBadge: "Featured",
    statusLabels: {
      available: "Available",
      "on-request": "On request",
      sold: "Sold"
    },
    priceOnRequest: "On request",
    soldCtaLabel: "View machine"
  }
};

const productCatalog: ProductDefinition[] = [
  {
    id: "belt-grinding",
    slug: "belt-grinding",
    category: {
      de: "CNC-Vertikal-Bearbeitungszentrum",
      en: "CNC vertical machining centre"
    },
    reference: "DMC 635V",
    brand: "Deckel Maho",
    year: 2007,
    featured: true,
    status: "sold",
    heroImage: "/machines/deckel-maho-dmc-635v/main-pic.png",
    galleryMedia: [
      { src: "/machines/deckel-maho-dmc-635v/main-pic.png", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-1.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-2.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-3.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-5.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-6.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-7.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-8.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-9.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-10.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-11.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-12.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-13.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-14.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-15.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-16.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-17.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-18.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-19.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-20.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-21.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-22.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-23.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-24.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-25.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-26.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-27.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-28.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-29.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-30.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-31.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-32.jpg", type: "image" },
      { src: "/machines/deckel-maho-dmc-635v/35611-33.jpg", type: "image" }
    ],
    locale: {
      de: {
        title: "2007 Deckel Maho DMC 635V CNC-Vertikal-Bearbeitungszentrum",
        summary:
          "CNC-Vertikal-Bearbeitungszentrum mit Siemens Sinumerik 840D, SK40-Aufnahme und 635 x 510 x 460 mm Verfahrwegen.",
        highlights: [
          "Verfahrwege X/Y/Z: 635 / 510 / 460 mm",
          "Siemens Sinumerik 840D CNC-Steuerung",
          "SK40-Spindel mit 20 bis 8000 U/min",
          "20-fach Werkzeugwechsler, DMG-Späneförderer und Absaugung"
        ],
        specGroups: [
          {
            title: "Maschinendaten",
            specs: [
              { label: "Hersteller", value: "Deckel Maho" },
              { label: "Typ", value: "DMC 635V" },
              { label: "Baujahr", value: "2007" },
              { label: "Dokumentation vorhanden", value: "Ja" }
            ]
          },
          {
            title: "Steuerung und Ausstattung",
            specs: [
              { label: "CNC-Steuerung", value: "Siemens Sinumerik 840D" },
              { label: "Werkzeugwechsler", value: "20 Plätze" },
              { label: "Späneförderer", value: "DMG" },
              { label: "Absaugung", value: "Ja" }
            ]
          },
          {
            title: "Arbeitsbereich und Tisch",
            specs: [
              { label: "Verfahrweg X-Achse", value: "635 mm" },
              { label: "Verfahrweg Y-Achse", value: "510 mm" },
              { label: "Verfahrweg Z-Achse", value: "460 mm" },
              { label: "Vorschubgeschwindigkeit", value: "max. 20.000 mm/min" },
              { label: "Tischaufspannfläche", value: "ca. 790 x 560 mm" }
            ]
          },
          {
            title: "Spindel",
            specs: [
              { label: "Drehzahlbereich", value: "20 - 8000 U/min" },
              { label: "Max. Drehmoment", value: "83 / 57 Nm" },
              { label: "Werkzeugaufnahme", value: "SK40" }
            ]
          }
        ],
        dimensions: [
          { label: "Länge", value: "ca. 340 cm" },
          { label: "Breite", value: "ca. 290 cm" },
          { label: "Höhe mit Absaugung", value: "ca. 273 cm" },
          { label: "Höhe ohne Absaugung", value: "ca. 233 cm" },
          { label: "Maschinengewicht", value: "ca. 3600 kg" }
        ],
        applications: [],
        ctaTitle: "Deckel Maho DMC 635V anfragen",
        ctaDescription: "Fordern Sie weitere Informationen oder einen Besichtigungstermin für diese Maschine an.",
        ctaLabel: "Details & Preis anfragen"
      },
      en: {
        title: "2007 Deckel Maho DMC 635V CNC Vertical Machining Centre",
        summary:
          "CNC vertical machining centre with Siemens Sinumerik 840D control, SK40 taper, and 635 x 510 x 460 mm travel.",
        highlights: [
          "X/Y/Z travel: 635 / 510 / 460 mm",
          "Siemens Sinumerik 840D CNC control",
          "SK40 spindle with 20 to 8000 rpm",
          "20-station tool changer, DMG chip conveyor, and extraction unit"
        ],
        specGroups: [
          {
            title: "Machine data",
            specs: [
              { label: "Brand", value: "Deckel Maho" },
              { label: "Type", value: "DMC 635V" },
              { label: "Year of build", value: "2007" },
              { label: "Documentation present", value: "Yes" }
            ]
          },
          {
            title: "Control and equipment",
            specs: [
              { label: "CNC control", value: "Siemens Sinumerik 840D" },
              { label: "Tool changer", value: "20 stations" },
              { label: "Chip conveyor", value: "DMG" },
              { label: "Extraction unit", value: "Yes" }
            ]
          },
          {
            title: "Working area and table",
            specs: [
              { label: "X-axis travel", value: "635 mm" },
              { label: "Y-axis travel", value: "510 mm" },
              { label: "Z-axis travel", value: "460 mm" },
              { label: "Feed speed", value: "max. 20,000 mm/min" },
              { label: "Table clamping area", value: "approx. 790 x 560 mm" }
            ]
          },
          {
            title: "Spindle",
            specs: [
              { label: "Speed range", value: "20 - 8000 rpm" },
              { label: "Maximum torque", value: "83 / 57 Nm" },
              { label: "Tool taper", value: "SK40" }
            ]
          }
        ],
        dimensions: [
          { label: "Length", value: "approx. 340 cm" },
          { label: "Width", value: "approx. 290 cm" },
          { label: "Height with extraction", value: "approx. 273 cm" },
          { label: "Height without extraction", value: "approx. 233 cm" },
          { label: "Machine weight", value: "approx. 3600 kg" }
        ],
        applications: [],
        ctaTitle: "Enquire About the Deckel Maho DMC 635V",
        ctaDescription: "Request more information or arrange a viewing of this machine.",
        ctaLabel: "Request details & price"
      }
    }
  },
  {
    id: "surface-grinding",
    slug: "surface-grinding",
    category: {
      de: "CNC-Drehmaschine",
      en: "CNC lathe"
    },
    reference: "T7",
    brand: "Leadwell",
    year: 1999,
    featured: true,
    status: "sold",
    heroImage: "/machines/leadwell-t7/main-pic.png",
    galleryMedia: [
      { src: "/machines/leadwell-t7/main-pic.png", type: "image" },
      { src: "/machines/leadwell-t7/img-4637-2.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4638.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4639.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4640.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4641.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4642.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4643.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4644.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4645.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4646.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4647.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4648.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4649.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4650.jpg", type: "image" },
      { src: "/machines/leadwell-t7/img-4651.jpg", type: "image" },
      { src: "/machines/leadwell-t7/video-1.mov", type: "video" }
    ],
    locale: {
      de: {
        title: "1999 Leadwell T7 CNC-Drehmaschine",
        summary: "CNC-Drehmaschine mit Fanuc Series O-TD Steuerung, 350 mm Drehdurchmesser und 540 mm Drehlänge.",
        highlights: [
          "350 mm Drehdurchmesser und 540 mm Drehlänge",
          "Fanuc Series O-TD CNC-Steuerung",
          "12-fach Werkzeugrevolver und bis zu 4500 U/min",
          "Späneförderer, Kühlmittelpumpe und Handbuch vorhanden"
        ],
        specGroups: [
          {
            title: "Maschinendaten",
            specs: [
              { label: "Hersteller", value: "Leadwell" },
              { label: "Typ", value: "T7" },
              { label: "Seriennummer", value: "L2SIH0379" },
              { label: "Baujahr", value: "1999" },
              { label: "Betriebsstunden", value: "8834 h" },
              { label: "Handbuch vorhanden", value: "Ja" }
            ]
          },
          {
            title: "Steuerung und Ausstattung",
            specs: [
              { label: "CNC-Steuerung", value: "Fanuc Series O-TD" },
              { label: "Motorleistung", value: "15 kW" },
              { label: "Elektrischer Anschluss", value: "400 V" },
              { label: "Späneförderer", value: "Ja" },
              { label: "Kühlmittelpumpe", value: "Ja" }
            ]
          },
          {
            title: "Bearbeitungsbereich",
            specs: [
              { label: "Drehdurchmesser", value: "350 mm" },
              { label: "Drehlänge", value: "540 mm" }
            ]
          },
          {
            title: "Spindel und Werkzeuge",
            specs: [
              { label: "Spindelbohrung", value: "63 mm" },
              { label: "Drehzahl von", value: "1 U/min" },
              { label: "Drehzahl bis", value: "4500 U/min" },
              { label: "Werkzeugstationen", value: "12" }
            ]
          }
        ],
        dimensions: [
          { label: "Länge", value: "3600 mm" },
          { label: "Breite", value: "1650 mm" },
          { label: "Höhe", value: "2000 mm" },
          { label: "Maschinengewicht", value: "4500 kg" }
        ],
        applications: [],
        ctaTitle: "Leadwell T7 anfragen",
        ctaDescription: "Fordern Sie weitere Informationen oder einen Besichtigungstermin für diese Maschine an.",
        ctaLabel: "Details & Preis anfragen"
      },
      en: {
        title: "1999 Leadwell T7 CNC Lathe",
        summary: "CNC lathe with Fanuc Series O-TD control, 350 mm turning diameter, and 540 mm turning length.",
        highlights: [
          "350 mm turning diameter and 540 mm turning length",
          "Fanuc Series O-TD CNC control",
          "12-station tool turret and speeds up to 4500 rpm",
          "Chip conveyor, coolant pump, and manual included"
        ],
        specGroups: [
          {
            title: "Machine data",
            specs: [
              { label: "Brand", value: "Leadwell" },
              { label: "Type", value: "T7" },
              { label: "Serial number", value: "L2SIH0379" },
              { label: "Year of build", value: "1999" },
              { label: "Hours on display", value: "8834 h" },
              { label: "Manual present", value: "Yes" }
            ]
          },
          {
            title: "Control and equipment",
            specs: [
              { label: "CNC control", value: "Fanuc Series O-TD" },
              { label: "Engine power", value: "15 kW" },
              { label: "Electric connection", value: "400 V" },
              { label: "Chip conveyor", value: "Yes" },
              { label: "Coolant pump", value: "Yes" }
            ]
          },
          {
            title: "Machining capacity",
            specs: [
              { label: "Turning diameter", value: "350 mm" },
              { label: "Turning length", value: "540 mm" }
            ]
          },
          {
            title: "Spindle and tooling",
            specs: [
              { label: "Spindle bore", value: "63 mm" },
              { label: "Speed from", value: "1 rpm" },
              { label: "Speed up to", value: "4500 rpm" },
              { label: "Tool changer stations", value: "12" }
            ]
          }
        ],
        dimensions: [
          { label: "Length", value: "3600 mm" },
          { label: "Width", value: "1650 mm" },
          { label: "Height", value: "2000 mm" },
          { label: "Machine weight", value: "4500 kg" }
        ],
        applications: [],
        ctaTitle: "Enquire About the Leadwell T7",
        ctaDescription: "Request more information or arrange a viewing of this machine.",
        ctaLabel: "Request details & price"
      }
    }
  },
  {
    id: "deburring",
    slug: "deburring",
    category: {
      de: "CNC-Bearbeitungszentrum",
      en: "CNC machining centre"
    },
    reference: "MV-40B",
    brand: "Mori Seiki",
    year: 1991,
    featured: true,
    status: "sold",
    heroImage: "/machines/mori-seiki-mv-40b/main-pic.png",
    galleryMedia: [
      { src: "/machines/mori-seiki-mv-40b/main-pic.png", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4601.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4604-2.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4605.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4606.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4607.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4608.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4609.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4610.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4611.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4612.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4613.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4614.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4615.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4616.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4617.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/img-4618.jpg", type: "image" },
      { src: "/machines/mori-seiki-mv-40b/video-1.mp4", type: "video" },
      { src: "/machines/mori-seiki-mv-40b/video-2.mp4", type: "video" }
    ],
    locale: {
      de: {
        title: "1991 Mori Seiki MV-40B CNC Universal-Bearbeitungszentrum",
        summary:
          "Universelles 3-Achs-CNC-Bearbeitungszentrum mit Fanuc MF-M4 Steuerung, BT-40 Aufnahme und 8000 U/min.",
        highlights: [
          "3-Achs-Bearbeitung mit 800 x 410 x 510 mm Verfahrwegen",
          "Fanuc MF-M4 CNC-Steuerung",
          "BT-40 Werkzeugaufnahme und bis zu 8000 U/min",
          "Späneförderer, Kühlmittelpumpe und Handbücher vorhanden"
        ],
        specGroups: [
          {
            title: "Maschinendaten",
            specs: [
              { label: "Hersteller", value: "Mori Seiki" },
              { label: "Typ", value: "MV-40B" },
              { label: "Seriennummer", value: "2720" },
              { label: "Baujahr", value: "1991" },
              { label: "Achsen", value: "3" },
              { label: "Betriebsstunden", value: "4696 h" },
              { label: "Handbuch vorhanden", value: "Ja" }
            ]
          },
          {
            title: "Steuerung und Ausstattung",
            specs: [
              { label: "CNC-Steuerung", value: "Fanuc MF-M4" },
              { label: "Motorleistung", value: "7,5 kW" },
              { label: "Elektrischer Anschluss", value: "400 V" },
              { label: "Späneförderer", value: "Ja" },
              { label: "Kühlmittelpumpe", value: "Ja" }
            ]
          },
          {
            title: "Arbeitsbereich und Tisch",
            specs: [
              { label: "Verfahrweg X-Achse", value: "800 mm" },
              { label: "Verfahrweg Y-Achse", value: "410 mm" },
              { label: "Verfahrweg Z-Achse", value: "510 mm" },
              { label: "T-Nuten-Tisch Länge", value: "1100 mm" },
              { label: "T-Nuten-Tisch Breite", value: "450 mm" },
              { label: "Max. Werkstückgewicht", value: "700 kg" }
            ]
          },
          {
            title: "Spindel",
            specs: [
              { label: "Werkzeugaufnahme", value: "BT-40" },
              { label: "Drehzahl von", value: "1 U/min" },
              { label: "Drehzahl bis", value: "8000 U/min" }
            ]
          }
        ],
        dimensions: [
          { label: "Länge", value: "2450 mm" },
          { label: "Breite", value: "2700 mm" },
          { label: "Höhe", value: "2650 mm" },
          { label: "Maschinengewicht", value: "6050 kg" }
        ],
        applications: [],
        ctaTitle: "Mori Seiki MV-40B anfragen",
        ctaDescription: "Fordern Sie weitere Informationen oder einen Besichtigungstermin für diese Maschine an.",
        ctaLabel: "Details & Preis anfragen"
      },
      en: {
        title: "1991 Mori Seiki MV-40B CNC Universal Machine Centre",
        summary: "Universal 3-axis CNC machining centre with Fanuc MF-M4 control, BT-40 taper, and 8000 rpm.",
        highlights: [
          "3-axis machining with 800 x 410 x 510 mm travel",
          "Fanuc MF-M4 CNC control",
          "BT-40 taper and speeds up to 8000 rpm",
          "Chip conveyor, coolant pump, and manuals included"
        ],
        specGroups: [
          {
            title: "Machine data",
            specs: [
              { label: "Brand", value: "Mori Seiki" },
              { label: "Type", value: "MV-40B" },
              { label: "Serial number", value: "2720" },
              { label: "Year of build", value: "1991" },
              { label: "Axes", value: "3" },
              { label: "Hours on display", value: "4696 h" },
              { label: "Manual present", value: "Yes" }
            ]
          },
          {
            title: "Control and equipment",
            specs: [
              { label: "CNC control", value: "Fanuc MF-M4" },
              { label: "Engine power", value: "7.5 kW" },
              { label: "Electric connection", value: "400 V" },
              { label: "Chip conveyor", value: "Yes" },
              { label: "Coolant pump", value: "Yes" }
            ]
          },
          {
            title: "Working area and table",
            specs: [
              { label: "X-axis travel", value: "800 mm" },
              { label: "Y-axis travel", value: "410 mm" },
              { label: "Z-axis travel", value: "510 mm" },
              { label: "T-slot fixture table length", value: "1100 mm" },
              { label: "T-slot fixture table width", value: "450 mm" },
              { label: "Maximum workpiece weight", value: "700 kg" }
            ]
          },
          {
            title: "Spindle",
            specs: [
              { label: "Taper", value: "BT-40" },
              { label: "Speed from", value: "1 rpm" },
              { label: "Speed up to", value: "8000 rpm" }
            ]
          }
        ],
        dimensions: [
          { label: "Length", value: "2450 mm" },
          { label: "Width", value: "2700 mm" },
          { label: "Height", value: "2650 mm" },
          { label: "Machine weight", value: "6050 kg" }
        ],
        applications: [],
        ctaTitle: "Enquire About the Mori Seiki MV-40B",
        ctaDescription: "Request more information or arrange a viewing of this machine.",
        ctaLabel: "Request details & price"
      }
    }
  },
  {
    id: "biglia-b131-s2",
    slug: "biglia-b131-s2",
    category: {
      de: "CNC-Drehmaschine",
      en: "CNC lathe"
    },
    reference: "B131 S2 CNC",
    brand: "Biglia",
    year: 1991,
    featured: true,
    status: "sold",
    heroImage: "/machines/biglia-b131-s2/main-pic.png",
    galleryMedia: [
      { src: "/machines/biglia-b131-s2/main-pic.png", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-2.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-3.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-4.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-5.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-6.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-7.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-8.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-9.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-10.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-11.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-12.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-13.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-14.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-15.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-16.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-17.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-18.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-19.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-20.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-21.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-22.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-23.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-24.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-25.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-26.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-27.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-28.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-29.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-30.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-31.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-32.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-33.jpg", type: "image" },
      { src: "/machines/biglia-b131-s2/35612-34.jpg", type: "image" }
    ],
    locale: {
      de: {
        title: "1991 Biglia B131 S2 CNC-Drehmaschine",
        summary:
          "CNC-Drehmaschine mit GE Fanuc Series 15-T Steuerung, 12-fach Duplomatic-Werkzeugrevolver, Späneförderer und Exomist-Absaugung.",
        highlights: [
          "GE Fanuc Series 15-T CNC-Steuerung",
          "Duplomatic BSV-N-200 Werkzeugrevolver mit 12 Stationen",
          "Späneförderer und Exomist-Absaugung",
          "Umfangreiche Dokumentation vorhanden"
        ],
        specGroups: [
          {
            title: "Maschinendaten",
            specs: [
              { label: "Hersteller", value: "Biglia" },
              { label: "Typ", value: "B131 S2 CNC" },
              { label: "Maschinennummer", value: "1849" },
              { label: "Baujahr", value: "1991" },
              { label: "Dokumentation", value: "Ja" }
            ]
          },
          {
            title: "Steuerung und Ausstattung",
            specs: [
              { label: "CNC-Steuerung", value: "GE Fanuc Series 15-T" },
              { label: "Werkzeugrevolver", value: "Duplomatic BSV-N-200" },
              { label: "Werkzeugstationen", value: "12" },
              { label: "Späneförderer", value: "Ja" },
              { label: "Absaugung", value: "Exomist" }
            ]
          },
          {
            title: "Elektrische Daten",
            specs: [
              { label: "Spannung", value: "380 V" },
              { label: "Phasen", value: "3" },
              { label: "Frequenz", value: "50 Hz" },
              { label: "Nennstrom", value: "65 A" }
            ]
          }
        ],
        dimensions: [
          { label: "Länge", value: "ca. 450 cm" },
          { label: "Breite", value: "ca. 180 cm" },
          { label: "Höhe", value: "ca. 175 cm" },
          { label: "Maschinengewicht", value: "ca. 4800 kg" }
        ],
        applications: [],
        ctaTitle: "Biglia B131 S2 CNC anfragen",
        ctaDescription: "Fordern Sie weitere Informationen oder einen Besichtigungstermin für diese Maschine an.",
        ctaLabel: "Details & Preis anfragen"
      },
      en: {
        title: "1991 Biglia B131 S2 CNC Lathe",
        summary:
          "CNC lathe with GE Fanuc Series 15-T control, 12-station Duplomatic tool turret, chip conveyor, and Exomist extraction.",
        highlights: [
          "GE Fanuc Series 15-T CNC control",
          "Duplomatic BSV-N-200 12-station tool turret",
          "Chip conveyor and Exomist extraction",
          "Extensive documentation included"
        ],
        specGroups: [
          {
            title: "Machine data",
            specs: [
              { label: "Brand", value: "Biglia" },
              { label: "Type", value: "B131 S2 CNC" },
              { label: "Machine number", value: "1849" },
              { label: "Year of build", value: "1991" },
              { label: "Documentation", value: "Yes" }
            ]
          },
          {
            title: "Control and equipment",
            specs: [
              { label: "CNC control", value: "GE Fanuc Series 15-T" },
              { label: "Tool turret", value: "Duplomatic BSV-N-200" },
              { label: "Tool stations", value: "12" },
              { label: "Chip conveyor", value: "Yes" },
              { label: "Extraction", value: "Exomist" }
            ]
          },
          {
            title: "Electrical data",
            specs: [
              { label: "Voltage", value: "380 V" },
              { label: "Phases", value: "3" },
              { label: "Frequency", value: "50 Hz" },
              { label: "Rated current", value: "65 A" }
            ]
          }
        ],
        dimensions: [
          { label: "Length", value: "approx. 450 cm" },
          { label: "Width", value: "approx. 180 cm" },
          { label: "Height", value: "approx. 175 cm" },
          { label: "Machine weight", value: "approx. 4800 kg" }
        ],
        applications: [],
        ctaTitle: "Enquire About the Biglia B131 S2 CNC",
        ctaDescription: "Request more information or arrange a viewing of this machine.",
        ctaLabel: "Request details & price"
      }
    }
  },
  {
    id: "union-bfp-130-6",
    slug: "union-bfp-130-6",
    category: {
      de: "Horizontal-Tischbohrwerk",
      en: "Horizontal table-type boring mill"
    },
    reference: "BFP 130/6",
    brand: "UNION",
    featured: true,
    status: "available",
    heroImage: "/machines/union-bfp-130-6/main-pic.jpg",
    galleryMedia: [
      { src: "/machines/union-bfp-130-6/main-pic.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-00.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-02.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-03.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-04.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-05.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-06.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-07.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-08.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-09.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-10.jpg", type: "image" },
      { src: "/machines/union-bfp-130-6/img-11.jpg", type: "image" }
    ],
    locale: {
      de: {
        title: "UNION BFP 130/6 Horizontal-Tischbohrwerk",
        summary:
          "Robustes Horizontal-Tischbohrwerk von UNION (WMW) mit 130 mm Bohrspindel, Heidenhain- und Sony-Digitalanzeige, Planzugkopf und separatem VEM-Schaltschrank – demontiert und verladebereit.",
        highlights: [
          "Horizontal-Tischbohrwerk mit 130 mm Bohrspindel",
          "Aufspanntisch ca. 1800 x 2000 mm",
          "Digitalanzeige von Heidenhain und Sony, inklusive Planzugkopf",
          "Demontiert und verladebereit, mit separatem VEM-Schaltschrank"
        ],
        specGroups: [
          {
            title: "Maschinendaten",
            specs: [
              { label: "Hersteller", value: "UNION (WMW)" },
              { label: "Typ", value: "BFP 130/6" },
              { label: "Bauart", value: "Horizontal-Tischbohrwerk" },
              { label: "Zustand", value: "Demontiert und verladebereit" }
            ]
          },
          {
            title: "Steuerung und Ausstattung",
            specs: [
              { label: "Digitalanzeige (DRO)", value: "Heidenhain und Sony" },
              { label: "Planzugkopf", value: "Ja" },
              { label: "Schaltschrank", value: "Separat (VEM)" }
            ]
          },
          {
            title: "Spindel und Tisch",
            specs: [
              { label: "Spindeldurchmesser", value: "130 mm" },
              { label: "Tischabmessungen", value: "ca. 1800 x 2000 mm" }
            ]
          },
          {
            title: "Typische Modelldaten (Richtwerte)",
            specs: [
              { label: "Spindeldrehzahl", value: "4,5 - 900 U/min" },
              { label: "Bohrspindelvorschub (W)", value: "900 mm" }
            ]
          }
        ],
        applications: [],
        ctaTitle: "UNION BFP 130/6 anfragen",
        ctaDescription: "Fordern Sie weitere Informationen oder einen Besichtigungstermin für diese Maschine an.",
        ctaLabel: "Details & Preis anfragen"
      },
      en: {
        title: "UNION BFP 130/6 Horizontal Table-Type Boring Mill",
        summary:
          "Robust UNION (WMW) horizontal table-type boring mill with 130 mm spindle, Heidenhain and Sony digital readouts, facing head, and separate VEM control cabinet – dismantled and ready for loading.",
        highlights: [
          "Horizontal table-type boring mill with 130 mm spindle",
          "Worktable approx. 1800 x 2000 mm",
          "Heidenhain and Sony digital readouts, facing head included",
          "Dismantled and ready for loading, with separate VEM control cabinet"
        ],
        specGroups: [
          {
            title: "Machine data",
            specs: [
              { label: "Brand", value: "UNION (WMW)" },
              { label: "Type", value: "BFP 130/6" },
              { label: "Machine type", value: "Horizontal table-type boring mill" },
              { label: "Condition", value: "Dismantled and ready for loading" }
            ]
          },
          {
            title: "Control and equipment",
            specs: [
              { label: "Digital readout (DRO)", value: "Heidenhain and Sony" },
              { label: "Facing head", value: "Yes" },
              { label: "Control cabinet", value: "Separate (VEM)" }
            ]
          },
          {
            title: "Spindle and table",
            specs: [
              { label: "Spindle diameter", value: "130 mm" },
              { label: "Table dimensions", value: "approx. 1800 x 2000 mm" }
            ]
          },
          {
            title: "Typical model data (guide values)",
            specs: [
              { label: "Spindle speed", value: "4.5 - 900 rpm" },
              { label: "Boring spindle stroke (W)", value: "900 mm" }
            ]
          }
        ],
        applications: [],
        ctaTitle: "Enquire About the UNION BFP 130/6",
        ctaDescription: "Request more information or arrange a viewing of this machine.",
        ctaLabel: "Request details & price"
      }
    }
  },
  {
    id: "pontiggia-h-600-x-5000",
    slug: "pontiggia-h-600-x-5000",
    category: {
      de: "Schwerdrehmaschine",
      en: "Heavy-duty lathe"
    },
    reference: "H 600 x 5000",
    brand: "Leopoldo Pontiggia",
    year: 1969,
    featured: true,
    status: "sold",
    heroImage: "/machines/pontiggia-h-600-x-5000/main-pic.png",
    galleryMedia: [
      { src: "/machines/pontiggia-h-600-x-5000/main-pic.png", type: "image" },
      { src: "/machines/pontiggia-h-600-x-5000/img-01.jpg", type: "image" },
      { src: "/machines/pontiggia-h-600-x-5000/img-02.jpg", type: "image" },
      { src: "/machines/pontiggia-h-600-x-5000/img-03.jpg", type: "image" },
      { src: "/machines/pontiggia-h-600-x-5000/img-04.jpg", type: "image" },
      { src: "/machines/pontiggia-h-600-x-5000/img-05.jpg", type: "image" },
      { src: "/machines/pontiggia-h-600-x-5000/img-06.jpg", type: "image" }
    ],
    locale: {
      de: {
        title: "1969 Leopoldo Pontiggia H 600 x 5000 Schwer\u00ADdreh\u00ADmaschine",
        summary:
          "Konventionelle Schwerdrehmaschine aus italienischer Fertigung mit 5000 mm Spitzenweite, 600 mm Spitzenhöhe und großer Vierbacken-Planscheibe – für lange Wellen, Walzen und schwere Bauteile.",
        highlights: [
          "Spitzenweite 5000 mm, Spitzenhöhe 600 mm",
          "Umlaufdurchmesser über Bett ca. 1200 mm",
          "Große Vierbacken-Planscheibe mit Einzelverstellung",
          "Massive Gussbauweise, Made in Italy (UCIMU-Plakette)"
        ],
        specGroups: [
          {
            title: "Maschinendaten",
            specs: [
              { label: "Hersteller", value: "Leopoldo Pontiggia (Italien)" },
              { label: "Typ", value: "H 600 x 5000" },
              { label: "Maschinennummer", value: "2071169" },
              { label: "Baujahr", value: "1969" },
              { label: "Herkunft", value: "Made in Italy (UCIMU-Plakette)" }
            ]
          },
          {
            title: "Arbeitsbereich",
            specs: [
              { label: "Spitzenweite", value: "5000 mm" },
              { label: "Spitzenhöhe", value: "600 mm" },
              { label: "Umlaufdurchmesser über Bett", value: "ca. 1200 mm" }
            ]
          },
          {
            title: "Ausstattung",
            specs: [
              { label: "Spannmittel", value: "Vierbacken-Planscheibe mit Einzelverstellung" },
              { label: "Planscheiben-Ø", value: "ca. 1000 - 1200 mm (geschätzt)" }
            ]
          },
          {
            title: "Typische Modelldaten (Richtwerte)",
            specs: [
              { label: "Hauptantrieb", value: "ca. 26 kW (35 PS)" },
              { label: "Spindeldrehzahlen", value: "18 Stufen, 7 - 662 U/min" }
            ]
          }
        ],
        dimensions: [
          { label: "Länge", value: "ca. 7,5 - 8,5 m (geschätzt)" },
          { label: "Breite", value: "ca. 1,5 - 2 m (geschätzt)" },
          { label: "Höhe", value: "ca. 2 m (geschätzt)" },
          { label: "Transportgewicht", value: "ca. 12 - 18 t (geschätzt)" }
        ],
        applications: [
          "Lange Wellen",
          "Industriewalzen",
          "Schwere Bauteile für Stahlindustrie, Öl- und Gasindustrie sowie Schiffbau"
        ],
        ctaTitle: "Leopoldo Pontiggia H 600 x 5000 anfragen",
        ctaDescription: "Fordern Sie weitere Informationen oder einen Besichtigungstermin für diese Maschine an.",
        ctaLabel: "Details & Preis anfragen"
      },
      en: {
        title: "1969 Leopoldo Pontiggia H 600 x 5000 Heavy-Duty Lathe",
        summary:
          "Italian-built conventional heavy-duty lathe with 5000 mm between centres, 600 mm centre height and a large 4-jaw independent chuck – for long shafts, rolls and heavy components.",
        highlights: [
          "5000 mm between centres, 600 mm centre height",
          "Swing over bed approx. 1200 mm",
          "Large 4-jaw independent chuck",
          "Heavy cast-iron construction, made in Italy (UCIMU plate)"
        ],
        specGroups: [
          {
            title: "Machine data",
            specs: [
              { label: "Brand", value: "Leopoldo Pontiggia (Italy)" },
              { label: "Type", value: "H 600 x 5000" },
              { label: "Machine number", value: "2071169" },
              { label: "Year of build", value: "1969" },
              { label: "Origin", value: "Made in Italy (UCIMU plate)" }
            ]
          },
          {
            title: "Working range",
            specs: [
              { label: "Distance between centres", value: "5000 mm" },
              { label: "Centre height", value: "600 mm" },
              { label: "Swing over bed", value: "approx. 1200 mm" }
            ]
          },
          {
            title: "Equipment",
            specs: [
              { label: "Chuck", value: "4-jaw independent chuck" },
              { label: "Chuck diameter", value: "approx. 1000 - 1200 mm (estimated)" }
            ]
          },
          {
            title: "Typical model data (guide values)",
            specs: [
              { label: "Main drive", value: "approx. 26 kW (35 hp)" },
              { label: "Spindle speeds", value: "18 steps, 7 - 662 rpm" }
            ]
          }
        ],
        dimensions: [
          { label: "Length", value: "approx. 7.5 - 8.5 m (estimated)" },
          { label: "Width", value: "approx. 1.5 - 2 m (estimated)" },
          { label: "Height", value: "approx. 2 m (estimated)" },
          { label: "Transport weight", value: "approx. 12 - 18 t (estimated)" }
        ],
        applications: [
          "Long shafts",
          "Industrial rolls",
          "Heavy components for the steel, oil & gas and shipbuilding industries"
        ],
        ctaTitle: "Enquire About the Leopoldo Pontiggia H 600 x 5000",
        ctaDescription: "Request more information or arrange a viewing of this machine.",
        ctaLabel: "Request details & price"
      }
    }
  },
  {
    id: "amada-promecam-itps-80-25",
    slug: "amada-promecam-itps-80-25",
    category: {
      de: "Abkantpresse",
      en: "Press brake"
    },
    reference: "ITPS 80-25",
    brand: "AMADA",
    year: 1998,
    featured: true,
    status: "sold",
    heroImage: "/machines/amada-promecam-itps-80-25/main-pic.png",
    galleryMedia: [
      { src: "/machines/amada-promecam-itps-80-25/main-pic.png", type: "image" },
      { src: "/machines/amada-promecam-itps-80-25/img-01.jpg", type: "image" },
      { src: "/machines/amada-promecam-itps-80-25/img-02.jpg", type: "image" },
      { src: "/machines/amada-promecam-itps-80-25/img-03.jpg", type: "image" },
      { src: "/machines/amada-promecam-itps-80-25/img-04.jpg", type: "image" },
      { src: "/machines/amada-promecam-itps-80-25/img-05.jpg", type: "image" }
    ],
    locale: {
      de: {
        title: "1998 AMADA Promecam ITPS 80-25 Abkantpresse",
        summary:
          "Robuste Abkantpresse von AMADA Promecam (Made in France) mit 80 t Presskraft, 2500 mm Abkantlänge und Delem-DA-58-Steuerung.",
        highlights: [
          "Presskraft 80 t (800 kN), Abkantlänge 2500 mm",
          "Delem DA 58 Steuerung mit grafischer Programmierung",
          "Maximaler Hub 100 mm, Motorleistung 7,5 kW",
          "Regelmäßige UVV-Prüfung, Prüfplaketten vorhanden"
        ],
        specGroups: [
          {
            title: "Maschinendaten",
            specs: [
              { label: "Hersteller", value: "AMADA (Promecam)" },
              { label: "Typ", value: "ITPS 80-25" },
              { label: "Bauart", value: "Abkantpresse" },
              { label: "Baujahr", value: "1998" },
              { label: "Herkunft", value: "Made in France" }
            ]
          },
          {
            title: "Leistungsdaten",
            specs: [
              { label: "Presskraft", value: "80 t (800 kN)" },
              { label: "Abkantlänge", value: "2500 mm" },
              { label: "Maximaler Hub", value: "100 mm" },
              { label: "Motorleistung", value: "7,5 kW" }
            ]
          },
          {
            title: "Steuerung und Ausstattung",
            specs: [
              { label: "CNC-Steuerung", value: "Delem DA 58 (grafische Programmierung)" },
              { label: "UVV-Prüfung", value: "Regelmäßig geprüft, Prüfplaketten vorhanden" }
            ]
          }
        ],
        dimensions: [{ label: "Maschinengewicht", value: "11000 kg" }],
        applications: [],
        ctaTitle: "AMADA Promecam ITPS 80-25 anfragen",
        ctaDescription: "Fordern Sie weitere Informationen oder einen Besichtigungstermin für diese Maschine an.",
        ctaLabel: "Details & Preis anfragen"
      },
      en: {
        title: "1998 AMADA Promecam ITPS 80-25 Press Brake",
        summary:
          "Robust AMADA Promecam press brake (made in France) with 80 t pressing force, 2500 mm bending length and Delem DA 58 control.",
        highlights: [
          "Pressing force 80 t (800 kN), bending length 2500 mm",
          "Delem DA 58 control with graphical programming",
          "Maximum stroke 100 mm, motor power 7.5 kW",
          "Regular statutory safety inspections (UVV), inspection labels present"
        ],
        specGroups: [
          {
            title: "Machine data",
            specs: [
              { label: "Brand", value: "AMADA (Promecam)" },
              { label: "Type", value: "ITPS 80-25" },
              { label: "Machine type", value: "Press brake" },
              { label: "Year of build", value: "1998" },
              { label: "Origin", value: "Made in France" }
            ]
          },
          {
            title: "Performance data",
            specs: [
              { label: "Pressing force", value: "80 t (800 kN)" },
              { label: "Bending length", value: "2500 mm" },
              { label: "Maximum stroke", value: "100 mm" },
              { label: "Motor power", value: "7.5 kW" }
            ]
          },
          {
            title: "Control and equipment",
            specs: [
              { label: "CNC control", value: "Delem DA 58 (graphical programming)" },
              { label: "Safety inspection (UVV)", value: "Regularly inspected, labels present" }
            ]
          }
        ],
        dimensions: [{ label: "Machine weight", value: "11000 kg" }],
        applications: [],
        ctaTitle: "Enquire About the AMADA Promecam ITPS 80-25",
        ctaDescription: "Request more information or arrange a viewing of this machine.",
        ctaLabel: "Request details & price"
      }
    }
  },
  {
    id: "fortuna-r26-h-3000-a-45",
    slug: "fortuna-r26-h-3000-a-45",
    category: {
      de: "Rundschleifmaschine",
      en: "Cylindrical grinding machine"
    },
    reference: "R26 H 3000 A 45",
    brand: "FORTUNA",
    year: 1976,
    featured: true,
    status: "sold",
    heroImage: "/machines/fortuna-r26-h-3000-a-45/main-pic.png",
    galleryMedia: [
      { src: "/machines/fortuna-r26-h-3000-a-45/main-pic.png", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-01.jpg", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-02.jpg", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-03.jpg", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-04.jpg", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-05.jpg", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-06.jpg", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-07.jpg", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-08.jpg", type: "image" },
      { src: "/machines/fortuna-r26-h-3000-a-45/img-09.jpg", type: "image" }
    ],
    locale: {
      de: {
        title: "1976 FORTUNA R26 H 3000 A 45 Rund\u00ADschleif\u00ADmaschine",
        summary:
          "Rundschleifmaschine für das Außenschleifen mit 3000 mm Schleiflänge, 250 mm Spitzenhöhe und Schleifscheibe Ø 750 mm – für Werkstücke bis 500 kg.",
        highlights: [
          "Schleiflänge 10 - 3000 mm, Spitzenhöhe 250 mm",
          "Schleif-Ø bis 500 mm (mit Setzstock 200 mm)",
          "Schleifscheibe Ø 750 mm, Breite bis 150 mm",
          "Werkstückgewicht zwischen den Spitzen bis 500 kg"
        ],
        specGroups: [
          {
            title: "Maschinendaten",
            specs: [
              { label: "Hersteller", value: "FORTUNA" },
              { label: "Typ", value: "R26 H 3000 A 45" },
              { label: "Bauart", value: "Rundschleifmaschine (Außenschleifen)" },
              { label: "Baujahr", value: "1976" }
            ]
          },
          {
            title: "Arbeitsbereich",
            specs: [
              { label: "Spitzenhöhe", value: "250 mm" },
              { label: "Schleiflänge", value: "10 - 3000 mm" },
              { label: "Größte Schleiflänge beim Einstechschleifen", value: "150 mm" },
              { label: "Größter Schleif-Ø ohne Setzstock", value: "500 mm" },
              { label: "Größter Schleif-Ø mit Setzstock", value: "200 mm" },
              { label: "Werkstückgewicht zwischen den Spitzen", value: "max. 500 kg" },
              { label: "Tischschlittenlängsweg", value: "max. 3280 mm" },
              { label: "Spitzenkegel", value: "MK 5" }
            ]
          },
          {
            title: "Schleifscheibe",
            specs: [
              { label: "Durchmesser", value: "750 mm" },
              { label: "Größte Breite", value: "150 mm" },
              { label: "Bohrung", value: "304,8 mm" },
              { label: "Drehzahl", value: "1500 1/min" }
            ]
          },
          {
            title: "Zubehör",
            specs: [
              { label: "Körnerspitzen", value: "Diverse, zum Teil unbenutzte Neuware" },
              { label: "Tamponöler", value: "Ja" },
              { label: "Schleifscheibenmontageschlüssel", value: "Ja" }
            ]
          }
        ],
        dimensions: [
          { label: "Länge", value: "ca. 7586 mm" },
          { label: "Breite", value: "ca. 2500 mm" },
          { label: "Höhe", value: "ca. 2330 mm" },
          { label: "Gewicht", value: "ca. 11000 kg" }
        ],
        applications: [],
        ctaTitle: "FORTUNA R26 H 3000 A 45 anfragen",
        ctaDescription: "Fordern Sie weitere Informationen oder einen Besichtigungstermin für diese Maschine an.",
        ctaLabel: "Details & Preis anfragen"
      },
      en: {
        title: "1976 FORTUNA R26 H 3000 A 45 Cylindrical Grinding Machine",
        summary:
          "Cylindrical grinding machine for external grinding with 3000 mm grinding length, 250 mm centre height and 750 mm grinding wheel – for workpieces up to 500 kg.",
        highlights: [
          "Grinding length 10 - 3000 mm, centre height 250 mm",
          "Grinding diameter up to 500 mm (200 mm with steady rest)",
          "Grinding wheel diameter 750 mm, width up to 150 mm",
          "Workpiece weight between centres up to 500 kg"
        ],
        specGroups: [
          {
            title: "Machine data",
            specs: [
              { label: "Brand", value: "FORTUNA" },
              { label: "Type", value: "R26 H 3000 A 45" },
              { label: "Machine type", value: "Cylindrical grinding machine (external grinding)" },
              { label: "Year of build", value: "1976" }
            ]
          },
          {
            title: "Working range",
            specs: [
              { label: "Centre height", value: "250 mm" },
              { label: "Grinding length", value: "10 - 3000 mm" },
              { label: "Max. plunge grinding length", value: "150 mm" },
              { label: "Max. grinding diameter without steady rest", value: "500 mm" },
              { label: "Max. grinding diameter with steady rest", value: "200 mm" },
              { label: "Workpiece weight between centres", value: "max. 500 kg" },
              { label: "Longitudinal table travel", value: "max. 3280 mm" },
              { label: "Centre taper", value: "MT 5" }
            ]
          },
          {
            title: "Grinding wheel",
            specs: [
              { label: "Diameter", value: "750 mm" },
              { label: "Max. width", value: "150 mm" },
              { label: "Bore", value: "304.8 mm" },
              { label: "Speed", value: "1500 rpm" }
            ]
          },
          {
            title: "Accessories",
            specs: [
              { label: "Centres", value: "Various, partly unused new parts" },
              { label: "Pad oiler", value: "Yes" },
              { label: "Grinding wheel mounting wrench", value: "Yes" }
            ]
          }
        ],
        dimensions: [
          { label: "Length", value: "approx. 7586 mm" },
          { label: "Width", value: "approx. 2500 mm" },
          { label: "Height", value: "approx. 2330 mm" },
          { label: "Weight", value: "approx. 11000 kg" }
        ],
        applications: [],
        ctaTitle: "Enquire About the FORTUNA R26 H 3000 A 45",
        ctaDescription: "Request more information or arrange a viewing of this machine.",
        ctaLabel: "Request details & price"
      }
    }
  }
];

export function getMachinePath(locale: Locale, slug: string): string {
  return `/${locale}/machines/${slug}/`;
}

function resolveProduct(
  definition: ProductDefinition,
  locale: Locale,
  indexCopy: MachinesIndexCopy
): ProductDetail {
  const localized = definition.locale[locale];
  const status = definition.status ?? "available";
  const priceDisplay =
    status === "sold"
      ? indexCopy.statusLabels.sold
      : definition.priceEur != null
      ? formatPriceEur(locale, definition.priceEur)
      : indexCopy.priceOnRequest;

  return {
    id: definition.id,
    slug: definition.slug,
    href: getMachinePath(locale, definition.slug),
    title: localized.title,
    summary: localized.summary,
    category:
      typeof definition.category === "string"
        ? definition.category
        : definition.category[locale],
    reference: definition.reference,
    brand: definition.brand,
    year: definition.year,
    featured: definition.featured ?? false,
    status,
    heroImage: definition.heroImage,
    priceDisplay,
    ctaLabel: status === "sold" ? indexCopy.soldCtaLabel : localized.ctaLabel,
    galleryMedia:
      definition.galleryMedia ??
      (definition.galleryImages ?? [definition.heroImage]).map((src) => ({
        src,
        type: "image" as const
      })),
    highlights: localized.highlights,
    specGroups:
      localized.specGroups ??
      (localized.specs
        ? [{ title: locale === "de" ? "Allgemein" : "General", specs: localized.specs }]
        : []),
    dimensions: localized.dimensions ?? [],
    applications: localized.applications,
    ctaTitle: localized.ctaTitle,
    ctaDescription: localized.ctaDescription
  };
}

export function getMachinesIndexCopy(locale: Locale): MachinesIndexCopy {
  return machinesIndexCopyByLocale[locale];
}

export function getAllProducts(locale: Locale): ProductListItem[] {
  const indexCopy = machinesIndexCopyByLocale[locale];
  const statusRank: Record<ProductStatus, number> = {
    available: 0,
    "on-request": 1,
    sold: 2
  };

  return productCatalog
    .map((definition) => resolveProduct(definition, locale, indexCopy))
    .sort((left, right) => statusRank[left.status] - statusRank[right.status]);
}

export function getFeaturedProducts(locale: Locale): ProductListItem[] {
  return getAllProducts(locale).filter((product) => product.featured);
}

export function getProductBySlug(locale: Locale, slug: string): ProductDetail | null {
  const definition = productCatalog.find((product) => product.slug === slug);
  if (!definition) {
    return null;
  }

  return resolveProduct(definition, locale, machinesIndexCopyByLocale[locale]);
}

export function getProductSlugs(): string[] {
  return productCatalog.map((product) => product.slug);
}

export function hasProductSlug(slug: string): boolean {
  return productCatalog.some((product) => product.slug === slug);
}
