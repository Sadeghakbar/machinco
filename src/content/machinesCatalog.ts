import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";

export type ProductStatus = "available" | "on-request" | "sold";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductLocaleContent = {
  title: string;
  summary: string;
  highlights: string[];
  specs: ProductSpec[];
  applications: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
};

export type ProductDefinition = {
  id: string;
  slug: string;
  category: string;
  brand?: string;
  year?: number;
  /** Price in EUR. Omit to show localized "on request" on the detail page. */
  priceEur?: number;
  featured?: boolean;
  status?: ProductStatus;
  heroImage: string;
  galleryImages?: string[];
  locale: Record<Locale, ProductLocaleContent>;
};

export type ProductListItem = {
  id: string;
  slug: string;
  href: string;
  title: string;
  summary: string;
  category: string;
  brand?: string;
  year?: number;
  featured: boolean;
  status: ProductStatus;
  heroImage: string;
  ctaLabel: string;
};

export type ProductDetail = ProductListItem & {
  priceDisplay: string;
  galleryImages: string[];
  highlights: string[];
  specs: ProductSpec[];
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
    priceOnRequest: "Auf Anfrage"
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
    priceOnRequest: "On request"
  }
};

const productCatalog: ProductDefinition[] = [
  {
    id: "belt-grinding",
    slug: "belt-grinding",
    category: "Bandschleifen",
    brand: "Machinco",
    year: 2024,
    featured: true,
    status: "available",
    priceEur: 85000,
    heroImage: "/images/rundschleifmachine.avif",
    galleryImages: ["/images/rundschleifmachine.avif", "/images/pic1.jpg", "/images/pic2.jpg"],
    locale: {
      de: {
        title: "Bandschleifmaschinen fuer konstante Oberflaechenqualitaet",
        summary:
          "Fuer Unternehmen, die hohe Stueckzahlen prozesssicher bearbeiten und Ausschuss in der Serienfertigung reduzieren wollen.",
        highlights: [
          "Gleichmaessiges Schliffbild ueber Serien hinweg",
          "Hohe Verfuegbarkeit im Mehrschichtbetrieb",
          "Reduzierte Nacharbeit und stabilere Prozessfenster",
          "Wartungsfreundlicher Aufbau fuer kurze Servicezeiten"
        ],
        specs: [
          { label: "Einsatzbereich", value: "Metallverarbeitung und Komponentenfertigung" },
          { label: "Losgroesse", value: "Mittel bis hoch" },
          { label: "Prozessfokus", value: "Oberflaechenqualitaet und Stabilitaet" }
        ],
        applications: [
          "Metallverarbeitung und Komponentenfertigung",
          "Zulieferbetriebe mit mittleren bis hohen Losgroessen",
          "Bauteile mit definierten Oberflaechenanforderungen"
        ],
        ctaTitle: "Projektstart",
        ctaDescription:
          "Sie erhalten eine technische Ersteinschaetzung auf Basis von Werkstoff, Toleranzen und geplanter Ausbringung.",
        ctaLabel: "Jetzt Angebot anfordern"
      },
      en: {
        title: "Belt Grinding Machines for Consistently High Surface Quality",
        summary:
          "Ideal for companies that need process reliability and economic performance at medium to high throughput.",
        highlights: [
          "Consistent finish quality across production series",
          "High availability in multi-shift operations",
          "Reduced rework and more stable process windows",
          "Service-friendly setup for shorter maintenance windows"
        ],
        specs: [
          { label: "Application", value: "Metal processing and component manufacturing" },
          { label: "Batch size", value: "Medium to high" },
          { label: "Process focus", value: "Surface quality and stability" }
        ],
        applications: [
          "Metal processing and component manufacturing",
          "Suppliers with medium to high batch volumes",
          "Parts with defined surface quality requirements"
        ],
        ctaTitle: "Start Your Project",
        ctaDescription:
          "You receive a first technical assessment based on material, tolerances, and required output.",
        ctaLabel: "Request a Quote"
      }
    }
  },
  {
    id: "surface-grinding",
    slug: "surface-grinding",
    category: "Flachschleifen",
    brand: "Machinco",
    year: 2023,
    featured: true,
    status: "available",
    priceEur: 120000,
    heroImage: "/images/blum.jpeg",
    galleryImages: ["/images/blum.jpeg", "/images/pic4.jpg", "/images/pic5.png"],
    locale: {
      de: {
        title: "Flachschleifmaschinen fuer enge Toleranzen",
        summary:
          "Wenn Praezision kein Nice-to-have ist, sondern Teil Ihrer Lieferfaehigkeit und Margensicherheit.",
        highlights: [
          "Stabile Bearbeitung plane Flaechen bei hoher Genauigkeit",
          "Reproduzierbare Ergebnisse auch bei langen Laufzeiten",
          "Wirtschaftliche Fertigung bei mittleren und hohen Losgroessen",
          "Technische Auslegung passend zu Material und Toleranzfenster"
        ],
        specs: [
          { label: "Einsatzbereich", value: "Werkzeugbau und Feinmechanik" },
          { label: "Toleranzfokus", value: "Enge Masshaltigkeit" },
          { label: "Prozessfokus", value: "Wiederholgenauigkeit" }
        ],
        applications: [
          "Werkzeugbau und Feinmechanik",
          "Maschinenbau mit qualitaetskritischen Komponenten",
          "Serienfertigung mit hohen Anforderungen an Wiederholgenauigkeit"
        ],
        ctaTitle: "Naechster Schritt",
        ctaDescription:
          "Wir pruefen mit Ihnen, welche Auslegung zu Bauteilgeometrie, Oberflaechenguete und Taktzeit passt.",
        ctaLabel: "Kostenlose Beratung sichern"
      },
      en: {
        title: "Surface Grinding Machines for Tight Tolerances",
        summary:
          "For components where precision is not optional, but essential for delivery performance and margins.",
        highlights: [
          "Stable processing of flat surfaces at high precision",
          "Reproducible quality over long production runs",
          "Efficient operation at medium and high volumes",
          "Technical setup aligned with material and tolerance windows"
        ],
        specs: [
          { label: "Application", value: "Toolmaking and precision engineering" },
          { label: "Tolerance focus", value: "Tight dimensional control" },
          { label: "Process focus", value: "Repeatability" }
        ],
        applications: [
          "Toolmaking and precision engineering",
          "Mechanical engineering with quality-critical components",
          "Series production requiring high repeatability"
        ],
        ctaTitle: "Next Step",
        ctaDescription:
          "We review which setup best fits part geometry, surface quality targets, and cycle time.",
        ctaLabel: "Book a Free Consultation"
      }
    }
  },
  {
    id: "deburring",
    slug: "deburring",
    category: "Entgraten",
    brand: "Machinco",
    year: 2022,
    featured: false,
    status: "on-request",
    heroImage: "/images/pic3.jpg",
    galleryImages: ["/images/pic3.jpg", "/images/pic6.jpg", "/images/p7.jpg"],
    locale: {
      de: {
        title: "Entgratmaschinen fuer saubere Kanten und sichere Folgeprozesse",
        summary:
          "Reduzieren Sie manuelle Nacharbeit und verbessern Sie die Bauteilqualitaet in Ihrer laufenden Produktion.",
        highlights: [
          "Reproduzierbar saubere Kanten bei variierenden Werkstuecken",
          "Hoehere Prozesssicherheit bei Montage und Weiterverarbeitung",
          "Reduktion manueller Entgratarbeit und Durchlaufzeiten",
          "Verbesserte Arbeits- und Produktsicherheit"
        ],
        specs: [
          { label: "Einsatzbereich", value: "Blechbearbeitung und Stanzteile" },
          { label: "Materialmix", value: "Variierende Werkstueckgeometrien" },
          { label: "Prozessfokus", value: "Kantenqualitaet und Sicherheit" }
        ],
        applications: [
          "Blechbearbeitung, Laser- und Stanzteile",
          "Serienfertigung mit hohen Anforderungen an Kantenqualitaet",
          "Bauteile mit sicherheitsrelevanten Folgeprozessen"
        ],
        ctaTitle: "Beratung fuer Ihre Anwendung",
        ctaDescription:
          "Gemeinsam konfigurieren wir die passende Entgratloesung fuer Materialmix, Takt und Qualitaetsziel.",
        ctaLabel: "Jetzt Angebot anfordern"
      },
      en: {
        title: "Deburring Machines for Clean Edges and Safer Downstream Processing",
        summary: "Reduce manual rework and improve part quality in your ongoing production.",
        highlights: [
          "Reproducibly clean edges for varying part types",
          "Higher process reliability in assembly and finishing",
          "Reduced manual deburring and faster throughput",
          "Improved workplace and product safety"
        ],
        specs: [
          { label: "Application", value: "Sheet metal and stamped parts" },
          { label: "Material mix", value: "Varying part geometries" },
          { label: "Process focus", value: "Edge quality and safety" }
        ],
        applications: [
          "Sheet metal processing, laser and stamped parts",
          "Series production with strict edge quality requirements",
          "Parts with safety-critical downstream operations"
        ],
        ctaTitle: "Consultation for Your Application",
        ctaDescription:
          "Together, we configure the right deburring setup for your material mix, cycle time, and quality goals.",
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
  priceOnRequestLabel: string
): ProductDetail {
  const localized = definition.locale[locale];
  const status = definition.status ?? "available";
  const priceDisplay =
    definition.priceEur != null
      ? formatPriceEur(locale, definition.priceEur)
      : priceOnRequestLabel;

  return {
    id: definition.id,
    slug: definition.slug,
    href: getMachinePath(locale, definition.slug),
    title: localized.title,
    summary: localized.summary,
    category: definition.category,
    brand: definition.brand,
    year: definition.year,
    featured: definition.featured ?? false,
    status,
    heroImage: definition.heroImage,
    priceDisplay,
    ctaLabel: localized.ctaLabel,
    galleryImages: definition.galleryImages ?? [definition.heroImage],
    highlights: localized.highlights,
    specs: localized.specs,
    applications: localized.applications,
    ctaTitle: localized.ctaTitle,
    ctaDescription: localized.ctaDescription
  };
}

export function getMachinesIndexCopy(locale: Locale): MachinesIndexCopy {
  return machinesIndexCopyByLocale[locale];
}

export function getAllProducts(locale: Locale): ProductListItem[] {
  const { priceOnRequest } = machinesIndexCopyByLocale[locale];
  return productCatalog.map((definition) => resolveProduct(definition, locale, priceOnRequest));
}

export function getFeaturedProducts(locale: Locale): ProductListItem[] {
  return getAllProducts(locale).filter((product) => product.featured);
}

export function getProductBySlug(locale: Locale, slug: string): ProductDetail | null {
  const definition = productCatalog.find((product) => product.slug === slug);
  if (!definition) {
    return null;
  }

  const { priceOnRequest } = machinesIndexCopyByLocale[locale];
  return resolveProduct(definition, locale, priceOnRequest);
}

export function getProductSlugs(): string[] {
  return productCatalog.map((product) => product.slug);
}

export function hasProductSlug(slug: string): boolean {
  return productCatalog.some((product) => product.slug === slug);
}
