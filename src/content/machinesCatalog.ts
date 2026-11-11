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
      title: "Maschinen fuer praezise Oberflaechen und stabile Prozesse",
      description:
        "Von Bandschliff bis Entgraten: Machinco unterstuetzt Sie bei der Auswahl der passenden Loesung fuer Ihren Produktionsalltag."
    },
    ctaPanel: {
      title: "Nicht sicher, welche Maschine passt?",
      description: "Wir klaeren Anforderungen, Werkstoffe, Toleranzen und Stueckzahlen gemeinsam mit Ihrem Team.",
      cta: "Kostenlose Beratung sichern",
      ctaHref: getPathForRouteKey("de", "contact")
    },
    listingBadge: "Produkt",
    featuredBadge: "Empfohlen",
    statusLabels: {
      available: "Verfuegbar",
      "on-request": "Auf Anfrage",
      sold: "Verkauft"
    },
    priceOnRequest: "Auf Anfrage",
    soldCtaLabel: "Maschine ansehen"
  },
  en: {
    hero: {
      title: "Machines for precision surfaces and stable processes",
      description: "From belt grinding to deburring, we help you select the right setup for your production reality."
    },
    ctaPanel: {
      title: "Not sure which machine fits?",
      description: "We assess material, tolerances, volume, and throughput together with your team.",
      cta: "Book a free consultation",
      ctaHref: getPathForRouteKey("en", "contact")
    },
    listingBadge: "Product",
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
        ctaLabel: "Jetzt Angebot anfordern"
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
        ctaLabel: "Request a Quote"
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
        ctaLabel: "Jetzt Angebot anfordern"
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
        ctaLabel: "Request a Quote"
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
        ctaLabel: "Jetzt Angebot anfordern"
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
        ctaLabel: "Request a Quote"
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
        ctaLabel: "Jetzt Angebot anfordern"
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
        ctaLabel: "Request a Quote"
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
