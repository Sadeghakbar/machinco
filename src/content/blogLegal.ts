import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/content/types";
import { getPathForRouteKey } from "@/i18n/routes";

export type BlogIndexContent = {
  hero: {
    title: string;
    description: string;
  };
  cards: Array<{
    badge: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  }>;
};

export type BlogArticleContent = {
  hero: {
    title: string;
    description: string;
  };
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  ctaPanel: {
    title: string;
    cta: string;
    href: string;
  };
};

export type LegalPageContent = {
  hero: {
    title: string;
    description: string;
  };
  legalNote: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

const blogIndexByLocale: Record<Locale, BlogIndexContent> = {
  de: {
    hero: {
      title: "Ratgeber fuer industrielle Maschinenentscheidungen",
      description:
        "Praxisnahe Inhalte fuer technische Entscheider mit Fokus auf Prozesssicherheit, Wirtschaftlichkeit und Umsetzbarkeit."
    },
    cards: [
      {
        badge: "Artikel",
        title: "Welche Maschine ist die richtige fuer mein Unternehmen?",
        description: "Entscheidungshilfe nach Werkstoff, Stueckzahl, Toleranz und Automatisierungsgrad.",
        href: getPathForRouteKey("de", "blog.machine-selection"),
        cta: "Artikel lesen"
      },
      {
        badge: "Artikel",
        title: "Kosten von Industriemaschinen im Ueberblick",
        description: "Von Investition bis Betrieb: Welche Kostenfaktoren wirklich entscheidend sind.",
        href: getPathForRouteKey("de", "blog.industrial-machine-costs"),
        cta: "Artikel lesen"
      },
      {
        badge: "Artikel",
        title: "Tipps zur Auswahl der richtigen Schleifmaschine",
        description: "Konkrete Kriterien fuer eine sichere Entscheidung ohne teure Fehlinvestitionen.",
        href: getPathForRouteKey("de", "blog.grinding-machine-selection-tips"),
        cta: "Artikel lesen"
      }
    ]
  },
  en: {
    hero: {
      title: "Guides for Industrial Machine Decisions",
      description: "Practical content for technical buyers focused on process reliability and economics."
    },
    cards: [
      {
        badge: "Article",
        title: "Which machine is right for my company?",
        description: "A framework based on material, volume, tolerances, and automation level.",
        href: getPathForRouteKey("en", "blog.machine-selection"),
        cta: "Read article"
      },
      {
        badge: "Article",
        title: "Industrial machine costs at a glance",
        description: "What really matters from investment to operations and service.",
        href: getPathForRouteKey("en", "blog.industrial-machine-costs"),
        cta: "Read article"
      },
      {
        badge: "Article",
        title: "Tips for selecting the right grinding machine",
        description: "How to avoid expensive misfits and improve production performance.",
        href: getPathForRouteKey("en", "blog.grinding-machine-selection-tips"),
        cta: "Read article"
      }
    ]
  }
};

const routeKeyByPostSlug: Record<string, RouteKey> = {
  "machine-selection": "blog.machine-selection",
  "industrial-machine-costs": "blog.industrial-machine-costs",
  "grinding-machine-selection-tips": "blog.grinding-machine-selection-tips"
};

const blogArticleByLocale: Record<Locale, Record<string, BlogArticleContent>> = {
  de: {
    "machine-selection": {
      hero: {
        title: "Welche Maschine ist die richtige fuer mein Unternehmen?",
        description:
          "Die richtige Wahl entscheidet ueber Qualitaet, Durchsatz und Kosten je Bauteil. Dieser Leitfaden zeigt, worauf es ankommt."
      },
      sections: [
        {
          title: "1. Werkstoff und Bauteilgeometrie zuerst klaeren",
          paragraphs: [
            "Materialverhalten, Kantenanforderungen und Oberflaechenguete bestimmen die technische Grundrichtung Ihrer Maschinenwahl."
          ]
        },
        {
          title: "2. Stueckzahl und Schichtmodell beruecksichtigen",
          paragraphs: [
            "Ob Prototypen, Kleinserie oder hoher Ausstoss: Die Auslegung muss zu Ihrem realen Lastprofil passen."
          ]
        },
        {
          title: "3. Qualitaetsziele messbar machen",
          paragraphs: [
            "Nur mit konkreten Zielwerten zu Toleranz, Rauheit und Wiederholgenauigkeit werden Angebote belastbar vergleichbar."
          ]
        },
        {
          title: "4. Gesamtkosten statt Anschaffungspreis betrachten",
          paragraphs: [
            "Energie, Wartung, Ruestzeiten und Ausschuss beeinflussen die Wirtschaftlichkeit oft staerker als der reine Kaufpreis."
          ]
        },
        {
          title: "Fazit",
          paragraphs: [
            "Die passende Maschine erfuellt Ihre technischen Anforderungen und verbessert gleichzeitig Ihre Wirtschaftlichkeit."
          ]
        }
      ],
      ctaPanel: {
        title: "Sie wollen eine fundierte Empfehlung?",
        cta: "Kostenlose Beratung sichern",
        href: getPathForRouteKey("de", "contact")
      }
    },
    "industrial-machine-costs": {
      hero: {
        title: "Kosten von Industriemaschinen im Ueberblick",
        description:
          "Wer nur den Kaufpreis vergleicht, uebersieht oft die groessten Kostentreiber im laufenden Betrieb."
      },
      sections: [
        {
          title: "1. Anschaffungskosten",
          paragraphs: [
            "Maschine, Grundausstattung und technische Optionen bilden den Startpunkt Ihrer Investitionsrechnung."
          ]
        },
        {
          title: "2. Integrationskosten",
          paragraphs: [
            "Transport, Installation, Inbetriebnahme und Schulung muessen von Anfang an in die Bewertung einfliessen."
          ]
        },
        {
          title: "3. Betriebskosten",
          paragraphs: [
            "Energiebedarf, Verschleissteile und Bedienaufwand beeinflussen die Kosten je Teil taeglich."
          ]
        },
        {
          title: "4. Wartung und Verfuegbarkeit",
          paragraphs: [
            "Stillstandskosten sind in vielen Betrieben der teuerste Faktor - Servicefaehigkeit ist deshalb entscheidend."
          ]
        },
        {
          title: "5. Qualitaetskosten",
          paragraphs: [
            "Ausschuss, Nacharbeit und Reklamationen wirken direkt auf Ihre Marge und Lieferperformance."
          ]
        },
        {
          title: "Fazit",
          paragraphs: [
            "Vergleichen Sie Loesungen auf Basis der Gesamtkosten ueber die geplante Nutzungsdauer, nicht nur auf den Kaufpreis."
          ]
        }
      ],
      ctaPanel: {
        title: "Wirtschaftlichkeit transparent bewerten",
        cta: "Jetzt Angebot anfordern",
        href: getPathForRouteKey("de", "contact")
      }
    },
    "grinding-machine-selection-tips": {
      hero: {
        title: "Tipps zur Auswahl der richtigen Schleifmaschine",
        description:
          "Mit einer strukturierten Bewertung vermeiden Sie Fehlentscheidungen und sichern langfristig Produktivitaet und Qualitaet."
      },
      sections: [
        {
          title: "1. Anforderungen klar priorisieren",
          paragraphs: [
            "Definieren Sie frueh, ob Taktzeit, Oberflaechenguete, Flexibilitaet oder Automatisierung im Vordergrund steht."
          ]
        },
        {
          title: "2. Prozesskette als Ganzes betrachten",
          paragraphs: [
            "Die Maschine muss zu vor- und nachgelagerten Schritten passen, damit keine neuen Engpaesse entstehen."
          ]
        },
        {
          title: "3. Bedienbarkeit und Ruestzeiten pruefen",
          paragraphs: [
            "Kurze Umruestung und klare Bedienkonzepte senken Fehlerquoten und steigern die Tagesleistung."
          ]
        },
        {
          title: "4. Service und Ersatzteile absichern",
          paragraphs: [
            "Verfuegbare Teile und schnelle Reaktionszeiten sind entscheidend fuer Betriebssicherheit im Schichtbetrieb."
          ]
        },
        {
          title: "5. Zukunftsfaehigkeit einplanen",
          paragraphs: [
            "Planen Sie Reserven fuer wachsende Stueckzahlen, neue Bauteile und moegliche Automatisierung."
          ]
        },
        {
          title: "Fazit",
          paragraphs: [
            "Die richtige Schleifmaschine verbessert nicht nur die Oberflaechenqualitaet, sondern staerkt nachhaltig Ihre Wettbewerbsfaehigkeit."
          ]
        }
      ],
      ctaPanel: {
        title: "Technische Auswahlhilfe fuer Ihr Team",
        cta: "Kostenlose Beratung sichern",
        href: getPathForRouteKey("de", "contact")
      }
    }
  },
  en: {
    "machine-selection": {
      hero: {
        title: "Which Machine Is Right for My Company?",
        description:
          "The right machine choice determines quality, throughput, and cost per part. This guide highlights the decisive factors."
      },
      sections: [
        {
          title: "1. Clarify Material and Part Geometry First",
          paragraphs: [
            "Material behavior, edge requirements, and surface quality define the technical baseline for machine selection."
          ]
        },
        {
          title: "2. Include Volume and Shift Model",
          paragraphs: [
            "Whether prototypes, small batches, or high-volume production, sizing must match your real operating profile."
          ]
        },
        {
          title: "3. Make Quality Targets Measurable",
          paragraphs: [
            "Only with concrete targets for tolerance, roughness, and repeatability can offers be compared reliably."
          ]
        },
        {
          title: "4. Evaluate Total Cost, Not Just Purchase Price",
          paragraphs: [
            "Energy, maintenance, setup times, and scrap often impact economics more than the initial investment."
          ]
        },
        {
          title: "Conclusion",
          paragraphs: [
            "The right machine fits your technical requirements and improves your business performance over time."
          ]
        }
      ],
      ctaPanel: {
        title: "Need a technical recommendation?",
        cta: "Book a Free Consultation",
        href: getPathForRouteKey("en", "contact")
      }
    },
    "industrial-machine-costs": {
      hero: {
        title: "Industrial Machine Costs at a Glance",
        description: "Anyone evaluating investment based only on purchase price risks higher long-term costs."
      },
      sections: [
        {
          title: "1. Acquisition Costs",
          paragraphs: ["Machine, base equipment, and technical add-ons define your starting investment."]
        },
        {
          title: "2. Integration Costs",
          paragraphs: ["Transport, installation, commissioning, and training should be included from day one."]
        },
        {
          title: "3. Operating Costs",
          paragraphs: ["Energy usage, consumables, and operator effort influence cost per part every day."]
        },
        {
          title: "4. Maintenance and Availability",
          paragraphs: ["Downtime costs are often the most expensive factor - service capability is critical."]
        },
        {
          title: "5. Quality Costs",
          paragraphs: ["Scrap, rework, and complaints directly impact your margins and delivery performance."]
        },
        {
          title: "Conclusion",
          paragraphs: [
            "Compare solutions based on total cost over the planned lifecycle, not only on purchase price."
          ]
        }
      ],
      ctaPanel: {
        title: "Evaluate economics with transparency",
        cta: "Request a Quote",
        href: getPathForRouteKey("en", "contact")
      }
    },
    "grinding-machine-selection-tips": {
      hero: {
        title: "Tips for Choosing the Right Grinding Machine",
        description:
          "Selecting a grinding machine is a strategic decision. These points help you make a safer and more profitable choice."
      },
      sections: [
        {
          title: "1. Prioritize Requirements",
          paragraphs: ["Define early whether cycle time, surface quality, flexibility, or automation is most important."]
        },
        {
          title: "2. Assess the Full Process Chain",
          paragraphs: [
            "The machine must fit upstream and downstream processes to avoid creating new bottlenecks."
          ]
        },
        {
          title: "3. Check Usability and Setup Times",
          paragraphs: [
            "Simple handling and short setup reduce error rates and improve day-to-day productivity."
          ]
        },
        {
          title: "4. Validate Service Capability",
          paragraphs: [
            "Fast response times and available spare parts are essential for operational reliability."
          ]
        },
        {
          title: "5. Plan for Future Growth",
          paragraphs: ["Consider increasing volumes, new part types, and future automation potential."]
        },
        {
          title: "Conclusion",
          paragraphs: [
            "The right grinding machine improves not only surface quality, but also your long-term competitiveness."
          ]
        }
      ],
      ctaPanel: {
        title: "Need support with technical selection?",
        cta: "Book a Free Consultation",
        href: getPathForRouteKey("en", "contact")
      }
    }
  }
};

const imprintByLocale: Record<Locale, LegalPageContent> = {
  de: {
    hero: {
      title: "Impressum",
      description: "Angaben gemaess den gesetzlichen Informationspflichten in Deutschland."
    },
    legalNote:
      "Hinweis: Dieser Inhalt ist als umsetzbarer Musterstand vorbereitet und sollte vor Live-Schaltung rechtlich geprueft werden.",
    sections: [
      {
        title: "Angaben gemaess § 5 TMG",
        paragraphs: ["Machinco GmbH", "Musterstrasse 12", "80331 Muenchen", "Deutschland"]
      },
      {
        title: "Vertreten durch",
        paragraphs: ["Geschaeftsfuehrer: Max Mustermann, Julia Beispiel"]
      },
      {
        title: "Kontakt",
        paragraphs: ["Telefon: +49 (0)89 123456-0", "E-Mail: info@machinco.de", "Website: www.machinco.de"]
      },
      {
        title: "Registereintrag",
        paragraphs: [
          "Eintragung im Handelsregister",
          "Registergericht: Amtsgericht Muenchen",
          "Registernummer: HRB 123456"
        ]
      },
      {
        title: "Umsatzsteuer-ID",
        paragraphs: ["Umsatzsteuer-Identifikationsnummer gemaess § 27 a Umsatzsteuergesetz: DE123456789"]
      },
      {
        title: "Inhaltlich verantwortlich gemaess § 18 Abs. 2 MStV",
        paragraphs: ["Max Mustermann, Anschrift wie oben"]
      },
      {
        title: "EU-Streitschlichtung",
        paragraphs: [
          "Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr/"
        ]
      },
      {
        title: "Verbraucherstreitbeilegung",
        paragraphs: [
          "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
        ]
      }
    ]
  },
  en: {
    hero: {
      title: "Imprint",
      description: "Information according to legal disclosure requirements in Germany."
    },
    legalNote:
      "Note: This page is an English convenience translation. The German version remains legally authoritative.",
    sections: [
      {
        title: "Information according to § 5 TMG",
        paragraphs: ["Machinco GmbH", "Plaentschweg 13", "81247 Munich", "Germany"]
      },
      {
        title: "Showroom Address",
        paragraphs: ["No.29-040, Derchinger Str. 120/1/2", "86165 Augsburg"]
      },
      {
        title: "Represented by",
        paragraphs: ["Managing Director: Mohammad Sadegh Akbar"]
      },
      {
        title: "Contact",
        paragraphs: [
          "Phone: +49 (0)163 0133066",
          "Email: info@machincogmbh.de",
          "Website: www.machinco.de"
        ]
      },
      {
        title: "Register Entry",
        paragraphs: [
          "Entry in the commercial register",
          "Register court: Amtsgericht Muenchen",
          "Register number: HRB 289032"
        ]
      },
      {
        title: "VAT ID",
        paragraphs: ["VAT identification number according to § 27a UStG: DE407250572"]
      },
      {
        title: "Content Responsible according to § 18 Abs. 2 MStV",
        paragraphs: ["Mohammad Sadegh Akbar, address as above"]
      },
      {
        title: "EU Online Dispute Resolution",
        paragraphs: [
          "The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr/"
        ]
      },
      {
        title: "Consumer Dispute Resolution",
        paragraphs: [
          "We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board."
        ]
      }
    ]
  }
};

const privacyByLocale: Record<Locale, LegalPageContent> = {
  de: {
    hero: {
      title: "Datenschutzerklaerung",
      description: "Informationen zur Verarbeitung personenbezogener Daten nach DSGVO und BDSG."
    },
    legalNote:
      "Hinweis: Dieser Text ist ein belastbarer Musterstand. Bitte vor Live-Schaltung auf tatsaechlich eingesetzte Tools und Prozesse rechtlich abstimmen.",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          "Machinco GmbH, Musterstrasse 12, 80331 Muenchen, E-Mail: datenschutz@machinco.de, Telefon: +49 (0)89 123456-0"
        ]
      },
      {
        title: "2. Allgemeine Hinweise",
        paragraphs: [
          "Wir verarbeiten personenbezogene Daten nur im erforderlichen Umfang und auf Grundlage der DSGVO sowie des BDSG."
        ]
      },
      {
        title: "3. Hosting und Server-Logfiles",
        paragraphs: [
          "Beim Besuch der Website werden technisch notwendige Daten verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit, Browserinformationen).",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO."
        ]
      },
      {
        title: "4. Kontaktaufnahme und Anfragen",
        paragraphs: [
          "Bei Kontaktaufnahme per Formular, E-Mail oder Telefon verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage und fuer Rueckfragen.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO und Art. 6 Abs. 1 lit. f DSGVO."
        ]
      },
      {
        title: "5. Cookies und Einwilligung",
        paragraphs: [
          "Technisch notwendige Cookies koennen zur Bereitstellung der Website verwendet werden. Optionale Cookies (Statistik/Marketing) werden nur mit Einwilligung gesetzt.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG."
        ]
      },
      {
        title: "6. Empfaenger und Auftragsverarbeitung",
        paragraphs: [
          "Wir setzen Dienstleister ein (z. B. Hosting, IT, Formularverarbeitung), die Daten in unserem Auftrag verarbeiten. Mit diesen bestehen Auftragsverarbeitungsvertraege gemaess Art. 28 DSGVO."
        ]
      },
      {
        title: "7. Speicherdauer",
        paragraphs: [
          "Personenbezogene Daten speichern wir nur solange, wie es fuer den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen."
        ]
      },
      {
        title: "8. Ihre Rechte",
        paragraphs: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung, Datenuebertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei einer Aufsichtsbehoerde."
        ]
      },
      {
        title: "9. Cookie-Banner Text (Opt-in)",
        paragraphs: [
          "Titel: Ihre Privatsphaere ist uns wichtig",
          "Text: Wir verwenden Cookies, um unsere Website technisch bereitzustellen und mit Ihrer Einwilligung Nutzungsdaten zur Verbesserung unseres Angebots zu verarbeiten.",
          "Buttons: Alle akzeptieren | Nur notwendige Cookies | Einstellungen speichern"
        ]
      },
      {
        title: "10. Stand",
        paragraphs: ["Stand dieser Datenschutzerklaerung: Maerz 2026"]
      }
    ]
  },
  en: {
    hero: {
      title: "Privacy Policy",
      description: "Information on personal data processing in accordance with GDPR and applicable German law."
    },
    legalNote:
      "Note: This page is an English convenience translation. The German version remains legally authoritative.",
    sections: [
      {
        title: "1. Controller",
        paragraphs: [
          "Machinco GmbH, Plaentschweg 13, 81247 Munich, Germany, Email: info@machincogmbh.de, Phone: +49 (0)163 0133066"
        ]
      },
      {
        title: "2. General Information",
        paragraphs: [
          "We process personal data only to the extent necessary and on the basis of GDPR and the German Federal Data Protection Act (BDSG)."
        ]
      },
      {
        title: "3. Hosting and Server Log Files",
        paragraphs: [
          "When visiting our website, technically necessary data may be processed (e.g., IP address, date/time, browser information).",
          "Legal basis: Art. 6(1)(f) GDPR."
        ]
      },
      {
        title: "4. Contact and Inquiries",
        paragraphs: [
          "If you contact us via form, email, or phone, we process your data to handle your inquiry and follow-up communication.",
          "Legal basis: Art. 6(1)(b) GDPR and Art. 6(1)(f) GDPR."
        ]
      },
      {
        title: "5. Cookies and Consent",
        paragraphs: [
          "Technically necessary cookies may be used for website operation. Optional cookies (statistics/marketing) are only used with your consent.",
          "Legal basis: Art. 6(1)(a) GDPR and Section 25(1) TDDDG."
        ]
      },
      {
        title: "6. Recipients and Processing on Our Behalf",
        paragraphs: [
          "We may use service providers (e.g., hosting, IT, form processing) that process data on our behalf under data processing agreements according to Art. 28 GDPR."
        ]
      },
      {
        title: "7. Storage Duration",
        paragraphs: [
          "We retain personal data only as long as necessary for the purposes stated or as required by legal retention obligations."
        ]
      },
      {
        title: "8. Your Rights",
        paragraphs: [
          "You have the right to access, rectification, erasure, restriction of processing, data portability, objection, and to lodge a complaint with a supervisory authority."
        ]
      },
      {
        title: "9. Cookie Banner Copy (Opt-in)",
        paragraphs: [
          "Title: Your privacy matters to us",
          "Text: We use cookies to provide this website technically and, with your consent, process usage data to improve our services.",
          "Buttons: Accept all | Necessary only | Save settings"
        ]
      },
      {
        title: "10. Last Updated",
        paragraphs: ["Last updated: March 2026"]
      }
    ]
  }
};

export function getBlogIndexContent(locale: Locale): BlogIndexContent {
  return blogIndexByLocale[locale];
}

export function getBlogArticleContent(locale: Locale, postSlug: string): BlogArticleContent | null {
  return blogArticleByLocale[locale][postSlug] ?? null;
}

export function getBlogRouteKey(postSlug: string): RouteKey | null {
  return routeKeyByPostSlug[postSlug] ?? null;
}

export function getBlogPostSlugs(): string[] {
  return Object.keys(routeKeyByPostSlug);
}

export function getImprintContent(locale: Locale): LegalPageContent {
  return imprintByLocale[locale];
}

export function getPrivacyContent(locale: Locale): LegalPageContent {
  return privacyByLocale[locale];
}
