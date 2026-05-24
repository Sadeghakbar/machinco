import type { Locale } from "@/i18n/config";
import type { PrivacyConsentCopy } from "@/content/privacyConsent";
import { getPathForRouteKey } from "@/i18n/routes";

type HomeMachineCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type HomeContent = {
  inquiryId: string;
  labels: {
    learnMore: string;
  };
  hero: {
    title: string;
    description: string;
    videoFallbackText: string;
    primaryCta: string;
    secondaryCta: string;
    proofPoints: string[];
  };
  advantages: {
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  machines: {
    title: string;
    description: string;
    cards: HomeMachineCard[];
  };
  stats: {
    title: string;
    description: string;
    values: Array<{ value: number; label: string }>;
    badges: string[];
  };
  testimonials: {
    title: string;
    description: string;
    items: Array<{ quote: string; role: string; company: string }>;
  };
  about: {
    title: string;
    lead: string;
    imageAlt: string;
    imageCaption: string;
    heading: string;
    paragraphs: string[];
    cta: string;
  };
  quickInquiry: {
    title: string;
    description: string;
    subject: string;
    privacyConsent: PrivacyConsentCopy;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
    };
    submitCta: string;
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  contact: {
    title: string;
    phoneLabel: string;
    emailLabel: string;
    addressLines: string[];
    subject: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    submitCta: string;
  };
};

function machineCardsDe(): HomeMachineCard[] {
  return [
    {
      title: "Bandschleifmaschinen",
      description:
        "Konstante Schliffbilder bei mittleren bis hohen Losgroessen mit stabiler Prozessfuehrung.",
      imageSrc: "/images/rundschleifmachine.avif",
      imageAlt: "Bandschleifmaschine in der industriellen Fertigung",
      href: getPathForRouteKey("de", "machines.belt-grinding")
    },
    {
      title: "Flachschleifmaschinen",
      description: "Hohe Wiederholgenauigkeit fuer plane Flaechen und enge Toleranzen in der Serienfertigung.",
      imageSrc: "/images/blum.jpeg",
      imageAlt: "Flachschleifmaschine fuer praezise Bauteile",
      href: getPathForRouteKey("de", "machines.surface-grinding")
    },
    {
      title: "Entgratmaschinen",
      description: "Saubere Kanten, weniger manuelle Nacharbeit und bessere Weiterverarbeitung Ihrer Bauteile.",
      imageSrc: "/images/pic3.jpg",
      imageAlt: "Entgratmaschine fuer saubere Werkstueckkanten",
      href: getPathForRouteKey("de", "machines.deburring")
    }
  ];
}

function machineCardsEn(): HomeMachineCard[] {
  return [
    {
      title: "Belt Grinding Machines",
      description: "Consistent surface quality in medium and high-volume production with stable process control.",
      imageSrc: "/images/rundschleifmachine.avif",
      imageAlt: "Belt grinding machine for industrial production",
      href: getPathForRouteKey("en", "machines.belt-grinding")
    },
    {
      title: "Surface Grinding Machines",
      description: "High repeatability for flat surfaces and tight tolerances in serial production.",
      imageSrc: "/images/blum.jpeg",
      imageAlt: "Surface grinding machine for precision components",
      href: getPathForRouteKey("en", "machines.surface-grinding")
    },
    {
      title: "Deburring Machines",
      description: "Clean edges, less manual rework, and improved downstream handling quality.",
      imageSrc: "/images/pic3.jpg",
      imageAlt: "Deburring machine for clean part edges",
      href: getPathForRouteKey("en", "machines.deburring")
    }
  ];
}

const homeContentByLocale: Record<Locale, HomeContent> = {
  de: {
    inquiryId: "schnellanfrage",
    labels: {
      learnMore: "Mehr erfahren"
    },
    hero: {
      title: "Mehr Ausbringung. Weniger Ausschuss. Maschinen, die in Ihrer Produktion leisten.",
      description:
        "Machinco begleitet produzierende Unternehmen von der technischen Auswahl bis zur Inbetriebnahme - fuer stabile Prozesse, reproduzierbare Oberflaechenqualitaet und wirtschaftliche Fertigung.",
      videoFallbackText: "Ihr Browser unterstuetzt das Video-Tag nicht.",
      primaryCta: "Jetzt Angebot anfordern",
      secondaryCta: "Kostenlose Beratung sichern",
      proofPoints: [
        "Antwort in der Regel innerhalb von 24 Stunden",
        "Beratung durch erfahrene Anwendungsspezialisten",
        "Loesungen fuer Einzelteile, Serien und hohe Taktzahlen"
      ]
    },
    advantages: {
      title: "Warum Machinco",
      description: "Technik, die messbar zu Ihrer Produktion passt - wirtschaftlich, robust und planbar.",
      items: [
        {
          title: "Prozesssicherheit",
          description:
            "Analyse von Werkstoff, Bauteilgeometrie und Toleranzen fuer eine belastbare Maschinenauswahl."
        },
        {
          title: "Wirtschaftlichkeit",
          description:
            "Fokus auf Stueckkosten, Durchsatz und Verfuegbarkeit statt auf ueberdimensionierte Technik."
        },
        {
          title: "Industriequalitaet",
          description: "Belastbare Komponenten und servicefreundlicher Aufbau fuer den Schichtbetrieb."
        },
        {
          title: "Persoenliche Betreuung",
          description: "Ein fester Ansprechpartner von der Anfrage bis zur Umsetzung im laufenden Betrieb."
        }
      ]
    },
    machines: {
      title: "Maschinen im Ueberblick",
      description:
        "Drei Kernbereiche fuer die industrielle Oberflaechenbearbeitung und Kantenqualitaet.",
      cards: machineCardsDe()
    },
    stats: {
      title: "Vertrauen durch Leistung",
      description: "Zuverlaessigkeit, Qualitaet und technische Erfahrung fuer industrielle Entscheider.",
      values: [
        { value: 10, label: "Jahre Markterfahrung" },
        { value: 250, label: "Realisierte Maschinenprojekte" },
        { value: 98, label: "Prozent termingerechte Umsetzung" },
        { value: 24, label: "Stunden bis zur Erstreaktion" }
      ],
      badges: ["Qualitaet", "Zuverlaessigkeit", "Erfahrung", "Industriestandards"]
    },
    testimonials: {
      title: "Stimmen aus der Praxis",
      description: "Realistische Referenzstimmen als Platzhalter bis finale Kundenfreigaben vorliegen.",
      items: [
        {
          quote:
            "Durch die neue Loesung von Machinco konnten wir die Nacharbeit deutlich reduzieren und die Teilequalitaet stabilisieren.",
          role: "Produktionsleiter",
          company: "Metallverarbeitung, Bayern"
        },
        {
          quote:
            "Uns hat die strukturierte Beratung ueberzeugt. Keine Ueberdimensionierung, sondern eine Loesung passend zu unseren Losgroessen.",
          role: "Technischer Leiter",
          company: "Zulieferbetrieb Automotive, Baden-Wuerttemberg"
        },
        {
          quote:
            "Von der Anfrage bis zur Inbetriebnahme lief alles terminsicher und transparent. Genau so muss B2B-Zusammenarbeit sein.",
          role: "Geschaeftsfuehrer",
          company: "Maschinenbauunternehmen, NRW"
        }
      ]
    },
    about: {
      title: "Ueber uns",
      lead: "Technik verstehen. Prozesse verbessern. Partnerschaftlich arbeiten.",
      imageAlt: "Machinco Werkstatt und Team",
      imageCaption: "Bildplatzhalter: Maschinen in Produktion, Werkstatt, Team vor Ort",
      heading: "Machinco GmbH aus Muenchen",
      paragraphs: [
        "Wir wurden mit einem klaren Anspruch gegruendet: Industrieunternehmen nicht nur Maschinen zu liefern, sondern Prozesse messbar zu verbessern. Deshalb verbinden wir technische Praxiserfahrung mit verbindlicher Projektarbeit.",
        "Unser Fokus liegt auf belastbaren Entscheidungen: Welche Maschine passt wirklich zu Werkstoff, Takt und Qualitaetsziel? Diese Klarheit reduziert Investitionsrisiko und beschleunigt den Weg zur stabilen Serienleistung."
      ],
      cta: "Mehr ueber Machinco"
    },
    quickInquiry: {
      title: "Schnellanfrage in 2 Minuten",
      description:
        "Teilen Sie uns kurz Ihre Anforderungen mit. Wir melden uns zeitnah mit einer fundierten Einschaetzung.",
      subject: "Machinco DE - Schnellanfrage in 2 Minuten (Homepage)",
      privacyConsent: {
        before: "Ich habe die ",
        linkLabel: "Datenschutzerklaerung",
        after: " gelesen und akzeptiere die Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage."
      },
      placeholders: {
        name: "Name*",
        email: "E-Mail*",
        phone: "Telefon",
        company: "Unternehmen",
        message: "Welche Bauteile bearbeiten Sie? Welche Anforderungen sind entscheidend?*"
      },
      submitCta: "Jetzt Angebot anfordern"
    },
    finalCta: {
      title:
        "Sie erhalten keine Standardempfehlung, sondern eine Loesung fuer Ihren realen Produktionsalltag.",
      description:
        "Starten Sie mit einem unverbindlichen Gespraech - klar, technisch fundiert und mit transparenter Einschaetzung.",
      primaryCta: "Jetzt Angebot anfordern",
      secondaryCta: "Kostenlose Beratung sichern"
    },
    contact: {
      title: "Kontakt",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      addressLines: ["Machinco GmbH", "Plaentschweg 13, 81247 Muenchen", "+49 163 0133066", "info@machincogmbh.com"],
      subject: "Machinco DE - Kontaktformular (Homepage)",
      placeholders: {
        name: "Name*",
        email: "E-Mail*",
        phone: "Telefon",
        message: "Ihre Nachricht*"
      },
      submitCta: "Anfrage senden"
    }
  },
  en: {
    inquiryId: "quick-inquiry",
    labels: {
      learnMore: "Learn more"
    },
    hero: {
      title: "Higher output. Less scrap. Machines that perform in real production.",
      description:
        "Machinco supports manufacturing companies from technical selection to commissioning - for stable processes, reproducible surface quality, and cost-efficient production.",
      videoFallbackText: "Your browser does not support the video tag.",
      primaryCta: "Request a quote now",
      secondaryCta: "Book a free consultation",
      proofPoints: [
        "Response typically within 24 hours",
        "Support from experienced application specialists",
        "Solutions for single parts, series production, and high throughput lines"
      ]
    },
    advantages: {
      title: "Why Machinco",
      description: "Technology that measurably fits your production - economical, robust, and reliable.",
      items: [
        {
          title: "Process Reliability",
          description: "Analysis of material, part geometry, and tolerances for a robust machine recommendation."
        },
        {
          title: "Cost Efficiency",
          description:
            "Focus on unit economics, throughput, and availability instead of oversized solutions."
        },
        {
          title: "Industrial Quality",
          description: "Durable components and service-friendly design for multi-shift operations."
        },
        {
          title: "Personal Support",
          description: "One dedicated contact from inquiry to implementation in day-to-day operations."
        }
      ]
    },
    machines: {
      title: "Machine Portfolio",
      description: "Three core categories for industrial surface finishing and edge quality.",
      cards: machineCardsEn()
    },
    stats: {
      title: "Trust Through Performance",
      description: "Reliability, quality, and technical expertise for industrial decision-makers.",
      values: [
        { value: 10, label: "Years of market experience" },
        { value: 250, label: "Completed machine projects" },
        { value: 98, label: "Percent on-time delivery" },
        { value: 24, label: "Hours to first response" }
      ],
      badges: ["Quality", "Reliability", "Experience", "Industrial Standards"]
    },
    testimonials: {
      title: "What Customers Say",
      description: "Realistic reference placeholders until final customer approvals are available.",
      items: [
        {
          quote: "The new setup from Machinco significantly reduced our rework and stabilized part quality.",
          role: "Production Manager",
          company: "Metal Processing, Bavaria"
        },
        {
          quote:
            "What convinced us was the structured consulting. No overengineering, just a setup that fits our batch sizes.",
          role: "Technical Director",
          company: "Automotive Supplier, Baden-Wuerttemberg"
        },
        {
          quote:
            "From inquiry to commissioning, everything was transparent and on schedule. Exactly what strong B2B collaboration should be.",
          role: "Managing Director",
          company: "Mechanical Engineering Company, NRW"
        }
      ]
    },
    about: {
      title: "About Us",
      lead: "Understand technology. Improve processes. Work in partnership.",
      imageAlt: "Machinco workshop and team",
      imageCaption: "Image placeholders: machines in operation, workshop, field team",
      heading: "Machinco GmbH from Munich",
      paragraphs: [
        "We were founded with one clear mission: not just to supply machines, but to measurably improve production processes. That is why we combine practical technical know-how with reliable project execution.",
        "Our focus is on robust decisions: which machine truly matches your material, cycle time, and quality targets? That clarity reduces investment risk and shortens your path to stable serial performance."
      ],
      cta: "More about Machinco"
    },
    quickInquiry: {
      title: "Quick Inquiry in 2 Minutes",
      description: "Share your key requirements and we will respond with a solid first assessment.",
      subject: "Machinco EN - Quick Inquiry in 2 Minutes (Homepage)",
      privacyConsent: {
        before: "I have read the ",
        linkLabel: "privacy policy",
        after: " and agree to the processing of my data for handling my inquiry."
      },
      placeholders: {
        name: "Name*",
        email: "Email*",
        phone: "Phone",
        company: "Company",
        message: "What parts are you processing? Which requirements are critical?*"
      },
      submitCta: "Request a quote now"
    },
    finalCta: {
      title:
        "You do not get a generic recommendation, but a solution for your real production environment.",
      description: "Start with a no-obligation conversation - clear, technical, and transparent.",
      primaryCta: "Request a quote now",
      secondaryCta: "Book a free consultation"
    },
    contact: {
      title: "Contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLines: ["Machinco GmbH", "Plaentschweg 13, 81247 Muenchen", "+49 163 0133066", "info@machincogmbh.com"],
      subject: "Machinco EN - Contact Form (Homepage)",
      placeholders: {
        name: "Name*",
        email: "Email*",
        phone: "Phone",
        message: "Your message*"
      },
      submitCta: "Send inquiry"
    }
  }
};

export function getHomeContent(locale: Locale): HomeContent {
  return homeContentByLocale[locale];
}
