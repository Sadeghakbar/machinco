import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";
import { getPathForRouteKey } from "@/i18n/routes";

export type MachinesIndexContent = {
  hero: {
    title: string;
    description: string;
  };
  cards: Array<{
    title: string;
    description: string;
    href: string;
    badge: string;
    cta: string;
  }>;
  ctaPanel: {
    title: string;
    description: string;
    cta: string;
    ctaHref: string;
  };
};

export type MachineDetailContent = {
  hero: {
    title: string;
    description: string;
  };
  blocks: {
    applicationsTitle: string;
    applications: string[];
    benefitsTitle: string;
    benefits: string[];
  };
  sidePanel: {
    title: string;
    description: string;
    cta: string;
    ctaHref: string;
  };
};

const detailRouteBySlug: Record<string, RouteKey> = {
  "belt-grinding": "machines.belt-grinding",
  "surface-grinding": "machines.surface-grinding",
  deburring: "machines.deburring"
};

const indexContentByLocale: Record<Locale, MachinesIndexContent> = {
  de: {
    hero: {
      title: "Maschinen fuer praezise Oberflaechen und stabile Prozesse",
      description:
        "Von Bandschliff bis Entgraten: Machinco unterstuetzt Sie bei der Auswahl der passenden Loesung fuer Ihren Produktionsalltag."
    },
    cards: [
      {
        badge: "Kategorie",
        title: "Bandschleifmaschinen",
        description:
          "Konstante Oberflaechenqualitaet bei mittleren und hohen Losgroessen mit hoher Prozessstabilitaet.",
        href: getPathForRouteKey("de", "machines.belt-grinding"),
        cta: "Details ansehen"
      },
      {
        badge: "Kategorie",
        title: "Flachschleifmaschinen",
        description:
          "Praezision fuer plane Flaechen und enge Toleranzen in qualitaetskritischen Produktionslinien.",
        href: getPathForRouteKey("de", "machines.surface-grinding"),
        cta: "Details ansehen"
      },
      {
        badge: "Kategorie",
        title: "Entgratmaschinen",
        description: "Weniger Nacharbeit, saubere Kanten und sicherere Folgeprozesse in der Serienfertigung.",
        href: getPathForRouteKey("de", "machines.deburring"),
        cta: "Details ansehen"
      }
    ],
    ctaPanel: {
      title: "Nicht sicher, welche Maschine passt?",
      description: "Wir klaeren Anforderungen, Werkstoffe, Toleranzen und Stueckzahlen gemeinsam mit Ihrem Team.",
      cta: "Kostenlose Beratung sichern",
      ctaHref: getPathForRouteKey("de", "contact")
    }
  },
  en: {
    hero: {
      title: "Machines for precision surfaces and stable processes",
      description: "From belt grinding to deburring, we help you select the right setup for your production reality."
    },
    cards: [
      {
        badge: "Category",
        title: "Belt Grinding Machines",
        description: "Consistent surface quality in medium and high-volume production.",
        href: getPathForRouteKey("en", "machines.belt-grinding"),
        cta: "View details"
      },
      {
        badge: "Category",
        title: "Surface Grinding Machines",
        description: "Precision for flat surfaces and tight tolerances in quality-critical lines.",
        href: getPathForRouteKey("en", "machines.surface-grinding"),
        cta: "View details"
      },
      {
        badge: "Category",
        title: "Deburring Machines",
        description: "Less rework, cleaner edges, and safer downstream handling.",
        href: getPathForRouteKey("en", "machines.deburring"),
        cta: "View details"
      }
    ],
    ctaPanel: {
      title: "Not sure which machine fits?",
      description: "We assess material, tolerances, volume, and throughput together with your team.",
      cta: "Book a free consultation",
      ctaHref: getPathForRouteKey("en", "contact")
    }
  }
};

const detailContentByLocale: Record<Locale, Record<string, MachineDetailContent>> = {
  de: {
    "belt-grinding": {
      hero: {
        title: "Bandschleifmaschinen fuer konstante Oberflaechenqualitaet",
        description:
          "Fuer Unternehmen, die hohe Stueckzahlen prozesssicher bearbeiten und Ausschuss in der Serienfertigung reduzieren wollen."
      },
      blocks: {
        applicationsTitle: "Typische Einsatzbereiche",
        applications: [
          "Metallverarbeitung und Komponentenfertigung",
          "Zulieferbetriebe mit mittleren bis hohen Losgroessen",
          "Bauteile mit definierten Oberflaechenanforderungen"
        ],
        benefitsTitle: "Ihre Vorteile",
        benefits: [
          "Gleichmaessiges Schliffbild ueber Serien hinweg",
          "Hohe Verfuegbarkeit im Mehrschichtbetrieb",
          "Reduzierte Nacharbeit und stabilere Prozessfenster",
          "Wartungsfreundlicher Aufbau fuer kurze Servicezeiten"
        ]
      },
      sidePanel: {
        title: "Projektstart",
        description:
          "Sie erhalten eine technische Ersteinschaetzung auf Basis von Werkstoff, Toleranzen und geplanter Ausbringung.",
        cta: "Jetzt Angebot anfordern",
        ctaHref: getPathForRouteKey("de", "contact")
      }
    },
    "surface-grinding": {
      hero: {
        title: "Flachschleifmaschinen fuer enge Toleranzen",
        description: "Wenn Praezision kein Nice-to-have ist, sondern Teil Ihrer Lieferfaehigkeit und Margensicherheit."
      },
      blocks: {
        applicationsTitle: "Typische Einsatzbereiche",
        applications: [
          "Werkzeugbau und Feinmechanik",
          "Maschinenbau mit qualitaetskritischen Komponenten",
          "Serienfertigung mit hohen Anforderungen an Wiederholgenauigkeit"
        ],
        benefitsTitle: "Ihre Vorteile",
        benefits: [
          "Stabile Bearbeitung plane Flaechen bei hoher Genauigkeit",
          "Reproduzierbare Ergebnisse auch bei langen Laufzeiten",
          "Wirtschaftliche Fertigung bei mittleren und hohen Losgroessen",
          "Technische Auslegung passend zu Material und Toleranzfenster"
        ]
      },
      sidePanel: {
        title: "Naechster Schritt",
        description:
          "Wir prüfen mit Ihnen, welche Auslegung zu Bauteilgeometrie, Oberflaechenguete und Taktzeit passt.",
        cta: "Kostenlose Beratung sichern",
        ctaHref: getPathForRouteKey("de", "contact")
      }
    },
    deburring: {
      hero: {
        title: "Entgratmaschinen fuer saubere Kanten und sichere Folgeprozesse",
        description: "Reduzieren Sie manuelle Nacharbeit und verbessern Sie die Bauteilqualitaet in Ihrer laufenden Produktion."
      },
      blocks: {
        applicationsTitle: "Typische Einsatzbereiche",
        applications: [
          "Blechbearbeitung, Laser- und Stanzteile",
          "Serienfertigung mit hohen Anforderungen an Kantenqualitaet",
          "Bauteile mit sicherheitsrelevanten Folgeprozessen"
        ],
        benefitsTitle: "Ihre Vorteile",
        benefits: [
          "Reproduzierbar saubere Kanten bei variierenden Werkstuecken",
          "Hoehere Prozesssicherheit bei Montage und Weiterverarbeitung",
          "Reduktion manueller Entgratarbeit und Durchlaufzeiten",
          "Verbesserte Arbeits- und Produktsicherheit"
        ]
      },
      sidePanel: {
        title: "Beratung fuer Ihre Anwendung",
        description:
          "Gemeinsam konfigurieren wir die passende Entgratloesung fuer Materialmix, Takt und Qualitaetsziel.",
        cta: "Jetzt Angebot anfordern",
        ctaHref: getPathForRouteKey("de", "contact")
      }
    }
  },
  en: {
    "belt-grinding": {
      hero: {
        title: "Belt Grinding Machines for Consistently High Surface Quality",
        description:
          "Ideal for companies that need process reliability and economic performance at medium to high throughput."
      },
      blocks: {
        applicationsTitle: "Typical Applications",
        applications: [
          "Metal processing and component manufacturing",
          "Suppliers with medium to high batch volumes",
          "Parts with defined surface quality requirements"
        ],
        benefitsTitle: "Your Benefits",
        benefits: [
          "Consistent finish quality across production series",
          "High availability in multi-shift operations",
          "Reduced rework and more stable process windows",
          "Service-friendly setup for shorter maintenance windows"
        ]
      },
      sidePanel: {
        title: "Start Your Project",
        description: "You receive a first technical assessment based on material, tolerances, and required output.",
        cta: "Request a Quote",
        ctaHref: getPathForRouteKey("en", "contact")
      }
    },
    "surface-grinding": {
      hero: {
        title: "Surface Grinding Machines for Tight Tolerances",
        description: "For components where precision is not optional, but essential for delivery performance and margins."
      },
      blocks: {
        applicationsTitle: "Typical Applications",
        applications: [
          "Toolmaking and precision engineering",
          "Mechanical engineering with quality-critical components",
          "Series production requiring high repeatability"
        ],
        benefitsTitle: "Your Benefits",
        benefits: [
          "Stable processing of flat surfaces at high precision",
          "Reproducible quality over long production runs",
          "Efficient operation at medium and high volumes",
          "Technical setup aligned with material and tolerance windows"
        ]
      },
      sidePanel: {
        title: "Next Step",
        description:
          "We review which setup best fits part geometry, surface quality targets, and cycle time.",
        cta: "Book a Free Consultation",
        ctaHref: getPathForRouteKey("en", "contact")
      }
    },
    deburring: {
      hero: {
        title: "Deburring Machines for Clean Edges and Safer Downstream Processing",
        description: "Reduce manual rework and improve part quality in your ongoing production."
      },
      blocks: {
        applicationsTitle: "Typical Applications",
        applications: [
          "Sheet metal processing, laser and stamped parts",
          "Series production with strict edge quality requirements",
          "Parts with safety-critical downstream operations"
        ],
        benefitsTitle: "Your Benefits",
        benefits: [
          "Reproducibly clean edges for varying part types",
          "Higher process reliability in assembly and finishing",
          "Reduced manual deburring and faster throughput",
          "Improved workplace and product safety"
        ]
      },
      sidePanel: {
        title: "Consultation for Your Application",
        description:
          "Together, we configure the right deburring setup for your material mix, cycle time, and quality goals.",
        cta: "Request a Quote",
        ctaHref: getPathForRouteKey("en", "contact")
      }
    }
  }
};

export function getMachinesIndexContent(locale: Locale): MachinesIndexContent {
  return indexContentByLocale[locale];
}

export function getMachineDetailContent(
  locale: Locale,
  machineSlug: string
): MachineDetailContent | null {
  return detailContentByLocale[locale][machineSlug] ?? null;
}

export function getMachineRouteKey(machineSlug: string): RouteKey | null {
  return detailRouteBySlug[machineSlug] ?? null;
}
