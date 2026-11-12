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
    legalNote: "Hinweis: Die englische Impressumsseite ist eine Orientierungsuebersetzung.",
    sections: [
      {
        title: "Angaben gemaess § 5 DDG",
        paragraphs: ["Machinco GmbH", "Plaentschweg 13", "81247 Muenchen", "Deutschland"]
      },
      {
        title: "Hauptstandort & Lager",
        paragraphs: ["Machinco GmbH", "Dornierstraße 9, Halle 13", "86456 Gablingen", "Deutschland"]
      },
      {
        title: "Vertreten durch",
        paragraphs: ["Geschaeftsfuehrer: Mohammad Sadegh Akbar"]
      },
      {
        title: "Kontakt",
        paragraphs: [
          "Telefon: +49 (0)163 0133066",
          "E-Mail: info@machincogmbh.com",
          "Website: www.machinco.de"
        ]
      },
      {
        title: "Registereintrag",
        paragraphs: [
          "Eintragung im Handelsregister",
          "Registergericht: Amtsgericht Muenchen",
          "Registernummer: HRB 289032"
        ]
      },
      {
        title: "Umsatzsteuer-ID",
        paragraphs: ["Umsatzsteuer-Identifikationsnummer gemaess § 27 a Umsatzsteuergesetz: DE407250572"]
      },
      {
        title: "Inhaltlich verantwortlich gemaess § 18 Abs. 2 MStV",
        paragraphs: ["Mohammad Sadegh Akbar, Anschrift wie oben"]
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
        title: "Information according to § 5 DDG",
        paragraphs: ["Machinco GmbH", "Plaentschweg 13", "81247 Munich", "Germany"]
      },
      {
        title: "Main Warehouse & Business Location",
        paragraphs: ["Machinco GmbH", "Dornierstraße 9, Halle 13", "86456 Gablingen", "Germany"]
      },
      {
        title: "Represented by",
        paragraphs: ["Managing Director: Mohammad Sadegh Akbar"]
      },
      {
        title: "Contact",
        paragraphs: [
          "Phone: +49 (0)163 0133066",
          "Email: info@machincogmbh.com",
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
      "Hinweis: Diese Website setzt derzeit keine Statistik- oder Marketing-Cookies ein. Ein Cookie-Banner ist deshalb nicht erforderlich, solange keine entsprechenden Dienste aktiviert werden.",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          "Machinco GmbH, Plaentschweg 13, 81247 Muenchen, Deutschland",
          "E-Mail: info@machincogmbh.com, Telefon: +49 (0)163 0133066"
        ]
      },
      {
        title: "2. Allgemeine Hinweise",
        paragraphs: [
          "Wir verarbeiten personenbezogene Daten nur im erforderlichen Umfang und auf Grundlage der DSGVO sowie des BDSG.",
          "Diese Erklaerung beschreibt den aktuellen Stand unserer Website unter www.machinco.de (statische Auslieferung, ohne Webanalyse- oder Werbe-Tracking beim Seitenaufruf)."
        ]
      },
      {
        title: "3. Hosting und Server-Logfiles",
        paragraphs: [
          "Die Website wird als statische Seite ueber GitHub Pages bereitgestellt. Beim Aufruf koennen beim Hosting-Anbieter technisch erforderliche Verbindungsdaten verarbeitet werden (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene URL, Browser- und Geraeteinformationen).",
          "Anbieter: GitHub, Inc. (bzw. die fuer GitHub Pages eingesetzte Infrastruktur, u. a. Microsoft).",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Webauftritt)."
        ]
      },
      {
        title: "4. Kontaktformulare und Anfragen",
        paragraphs: [
          "Wenn Sie uns ueber ein Formular auf der Website kontaktieren, verarbeiten wir die von Ihnen eingegebenen Daten (z. B. Name, E-Mail, Telefon, Unternehmen, Nachricht, ggf. Produktbezug) zur Bearbeitung Ihrer Anfrage.",
          "Die Uebermittlung erfolgt an unseren Formular-Dienst Web3Forms (api.web3forms.com). Die Verarbeitung startet erst, wenn Sie das Formular absenden.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Massnahmen bzw. Anbahnung) und Art. 6 Abs. 1 lit. f DSGVO.",
          "Bei Kontakt per E-Mail oder Telefon gelten die gleichen Zwecke und Speicherfristen entsprechend dem jeweiligen Kommunikationskanal."
        ]
      },
      {
        title: "5. Cookies und lokale Speicherung",
        paragraphs: [
          "Beim reinen Besuch der Website setzen wir derzeit keine Cookies zu Statistik- oder Marketingzwecken ein.",
          "Fuer den Betrieb der Website sind keine optionalen Tracking-Cookies erforderlich. Sollten wir kuenftig Analyse- oder Marketing-Tools einsetzen, werden diese erst nach Ihrer Einwilligung aktiviert und in dieser Datenschutzerklaerung sowie ueber ein Cookie-Banner dokumentiert.",
          "Rechtsgrundlage fuer kuenftige optionale Cookies: Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG."
        ]
      },
      {
        title: "6. Empfaenger und Auftragsverarbeitung",
        paragraphs: [
          "Wir setzen Dienstleister fuer Hosting (GitHub Pages) und Formularverarbeitung (Web3Forms) ein. Diese verarbeiten Daten ggf. in unserem Auftrag. Mit Auftragsverarbeitern schliessen wir Vertraege gemaess Art. 28 DSGVO, soweit erforderlich.",
          "Eine Uebermittlung in Drittlaender kann bei Cloud-Dienstleistern nicht ausgeschlossen werden. In diesem Fall erfolgt sie nur unter den Voraussetzungen der Art. 44 ff. DSGVO (z. B. Standardvertragsklauseln).",
          "Google Maps: Auf unserer Kontaktseite koennen Sie eine Karte unseres Standorts in Gablingen anzeigen. Die Karte des Anbieters Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, wird erst geladen, wenn Sie auf \"Karte laden\" klicken. Erst dann werden Daten wie Ihre IP-Adresse an Google uebermittelt und ggf. in den USA verarbeitet. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG), die Sie durch Neuladen der Seite jederzeit fuer die Zukunft beenden koennen. Links \"In Google Maps oeffnen\" fuehren direkt zu Google; dort gelten die Datenschutzhinweise von Google (https://policies.google.com/privacy)."
        ]
      },
      {
        title: "7. Speicherdauer",
        paragraphs: [
          "Anfragen aus Formularen und E-Mails speichern wir nur so lange, wie es fuer die Bearbeitung, Nachverfolgung und ggf. gesetzliche Aufbewahrungspflichten erforderlich ist.",
          "Hosting-Logdaten werden durch den Anbieter nach dessen Richtlinien fuer einen begrenzten Zeitraum vorgehalten."
        ]
      },
      {
        title: "8. Ihre Rechte",
        paragraphs: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung, Datenuebertragbarkeit und Widerspruch gegen Verarbeitungen auf Basis von Art. 6 Abs. 1 lit. f DSGVO.",
          "Sie koennen eine erteilte Einwilligung jederzeit mit Wirkung fuer die Zukunft widerrufen.",
          "Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehoerde, z. B. beim Bayerischen Landesamt fuer Datenschutzaufsicht."
        ]
      },
      {
        title: "9. Aenderungen",
        paragraphs: [
          "Wir passen diese Datenschutzerklaerung an, wenn sich unsere Website, eingesetzte Dienste oder rechtliche Anforderungen aendern.",
          "Vor Aktivierung von Webanalyse, Remarketing oder vergleichbaren Diensten aktualisieren wir diese Seite und implementieren ein Opt-in-Cookie-Banner."
        ]
      },
      {
        title: "10. Stand",
        paragraphs: ["Stand dieser Datenschutzerklaerung: November 2026"]
      }
    ]
  },
  en: {
    hero: {
      title: "Privacy Policy",
      description: "Information on personal data processing in accordance with GDPR and applicable German law."
    },
    legalNote:
      "Note: This is an English convenience translation. The German version is legally authoritative. This website does not currently use statistics or marketing cookies, so no cookie banner is shown.",
    sections: [
      {
        title: "1. Controller",
        paragraphs: [
          "Machinco GmbH, Plaentschweg 13, 81247 Munich, Germany",
          "Email: info@machincogmbh.com, Phone: +49 (0)163 0133066"
        ]
      },
      {
        title: "2. General Information",
        paragraphs: [
          "We process personal data only to the extent necessary and on the basis of GDPR and the German Federal Data Protection Act (BDSG).",
          "This policy reflects the current website at www.machinco.de: static delivery without analytics or advertising tracking on page load."
        ]
      },
      {
        title: "3. Hosting and Server Log Files",
        paragraphs: [
          "The website is delivered as a static site via GitHub Pages. When you access pages, the hosting provider may process connection data required for operation (e.g., IP address, date/time, requested URL, browser and device information).",
          "Provider: GitHub, Inc. (and infrastructure used for GitHub Pages, including Microsoft where applicable).",
          "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in secure and reliable website operation)."
        ]
      },
      {
        title: "4. Contact Forms and Inquiries",
        paragraphs: [
          "If you contact us via a website form, we process the data you submit (e.g., name, email, phone, company, message, and product reference where applicable) to handle your request.",
          "Submission is transmitted to our form service Web3Forms (api.web3forms.com). Processing starts only when you submit the form.",
          "Legal basis: Art. 6(1)(b) GDPR (pre-contractual steps) and Art. 6(1)(f) GDPR.",
          "The same purposes and retention principles apply to contact by email or phone."
        ]
      },
      {
        title: "5. Cookies and Local Storage",
        paragraphs: [
          "When simply browsing the website, we do not currently set cookies for statistics or marketing purposes.",
          "No optional tracking cookies are required to operate the site. If we introduce analytics or marketing tools in the future, they will only run after your consent and will be documented here and via a cookie consent banner.",
          "Legal basis for any future optional cookies: Art. 6(1)(a) GDPR and Section 25(1) TDDDG."
        ]
      },
      {
        title: "6. Recipients and Processing on Our Behalf",
        paragraphs: [
          "We use service providers for hosting (GitHub Pages) and form processing (Web3Forms). They may process data on our behalf. We conclude data processing agreements under Art. 28 GDPR where required.",
          "Transfers to third countries cannot be ruled out for cloud services and take place only under Art. 44 et seq. GDPR (e.g., standard contractual clauses).",
          "Google Maps: On our contact page you can display a map of our Gablingen location. The map, provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, is only loaded after you click \"Load map\". Only then is data such as your IP address transmitted to Google and possibly processed in the USA. The legal basis is your consent (Art. 6(1)(a) GDPR, Section 25(1) TDDDG), which you can end at any time for the future by reloading the page. \"Open in Google Maps\" links take you directly to Google, where Google's privacy policy applies (https://policies.google.com/privacy)."
        ]
      },
      {
        title: "7. Storage Duration",
        paragraphs: [
          "We retain inquiry data only as long as needed for handling, follow-up, and legal retention obligations.",
          "Hosting log data is retained by the provider for a limited period according to its policies."
        ]
      },
      {
        title: "8. Your Rights",
        paragraphs: [
          "You have the right to access, rectification, erasure, restriction of processing, data portability, and to object to processing based on Art. 6(1)(f) GDPR.",
          "You may withdraw consent at any time with effect for the future.",
          "You may lodge a complaint with a supervisory authority, e.g., the Bavarian State Office for Data Protection Supervision."
        ]
      },
      {
        title: "9. Changes",
        paragraphs: [
          "We update this policy when our website, services, or legal requirements change.",
          "Before enabling web analytics, remarketing, or similar tools, we will update this page and implement an opt-in cookie banner."
        ]
      },
      {
        title: "10. Last Updated",
        paragraphs: ["Last updated: November 2026"]
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
