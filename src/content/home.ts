import type { Locale } from "@/i18n/config";
import type { PrivacyConsentCopy } from "@/content/privacyConsent";
import type { ProductStatus } from "@/content/machinesCatalog";
import { getPathForRouteKey } from "@/i18n/routes";

type HomeMachineCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  status: ProductStatus;
};

export type HomeServiceItem = {
  icon: string;
  title: string;
  description: string;
};

export type HomeContent = {
  labels: {
    learnMore: string;
    statusAvailable: string;
    statusSold: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    videoFallbackText: string;
    primaryCta: string;
    secondaryCta: string;
    proofPoints: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: HomeServiceItem[];
    cta: string;
  };
  machines: {
    eyebrow: string;
    title: string;
    description: string;
    cards: HomeMachineCard[];
    cta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    paragraphs: string[];
    facts: Array<{ label: string; value: string }>;
    cta: string;
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  contact: {
    title: string;
    intro: string;
    subject: string;
    privacyConsent: PrivacyConsentCopy;
    fields: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
    };
    placeholders: {
      message: string;
    };
    submitCta: string;
  };
};

function sortMachineCards(cards: HomeMachineCard[]): HomeMachineCard[] {
  const statusRank: Record<ProductStatus, number> = {
    available: 0,
    "on-request": 1,
    sold: 2
  };

  return cards.sort((left, right) => statusRank[left.status] - statusRank[right.status]);
}

function machineCardsDe(): HomeMachineCard[] {
  return sortMachineCards([
    {
      title: "2007 Deckel Maho DMC 635V",
      description: "CNC-Vertikal-Bearbeitungszentrum mit Siemens 840D, SK40 und 20-fach Werkzeugwechsler.",
      imageSrc: "/machines/deckel-maho-dmc-635v/main-pic.png",
      imageAlt: "2007 Deckel Maho DMC 635V CNC-Vertikal-Bearbeitungszentrum",
      href: getPathForRouteKey("de", "machines.belt-grinding"),
      status: "sold"
    },
    {
      title: "1999 Leadwell T7",
      description: "CNC-Drehmaschine mit Fanuc Series O-TD Steuerung, 350 mm Drehdurchmesser und 12-fach Revolver.",
      imageSrc: "/machines/leadwell-t7/main-pic.png",
      imageAlt: "1999 Leadwell T7 CNC-Drehmaschine",
      href: getPathForRouteKey("de", "machines.surface-grinding"),
      status: "sold"
    },
    {
      title: "1991 Mori Seiki MV-40B",
      description: "3-Achs-CNC-Universal-Bearbeitungszentrum mit Fanuc MF-M4 Steuerung und BT-40 Aufnahme.",
      imageSrc: "/machines/mori-seiki-mv-40b/main-pic.png",
      imageAlt: "1991 Mori Seiki MV-40B CNC Universal-Bearbeitungszentrum",
      href: getPathForRouteKey("de", "machines.deburring"),
      status: "sold"
    },
    {
      title: "1991 Biglia B131 S2 CNC",
      description: "CNC-Drehmaschine mit GE Fanuc Series 15-T, 12-fach Revolver und Exomist-Absaugung.",
      imageSrc: "/machines/biglia-b131-s2/main-pic.png",
      imageAlt: "1991 Biglia B131 S2 CNC-Drehmaschine",
      href: "/de/machines/biglia-b131-s2/",
      status: "sold"
    },
    {
      title: "UNION BFP 130/6",
      description: "Horizontal-Tischbohrwerk mit 130 mm Spindel, Heidenhain/Sony-Digitalanzeige und Planzugkopf.",
      imageSrc: "/machines/union-bfp-130-6/main-pic.jpg",
      imageAlt: "UNION BFP 130/6 Horizontal-Tischbohrwerk",
      href: "/de/machines/union-bfp-130-6/",
      status: "available"
    },
    {
      title: "1969 Leopoldo Pontiggia H 600 x 5000",
      description: "Konventionelle Schwerdrehmaschine mit 5000 mm Spitzenweite, 600 mm Spitzenhöhe und Vierbacken-Planscheibe.",
      imageSrc: "/machines/pontiggia-h-600-x-5000/main-pic.png",
      imageAlt: "1969 Leopoldo Pontiggia H 600 x 5000 Schwerdrehmaschine",
      href: "/de/machines/pontiggia-h-600-x-5000/",
      status: "sold"
    },
    {
      title: "1998 AMADA Promecam ITPS 80-25",
      description: "Abkantpresse mit 80 t Presskraft, 2500 mm Abkantlänge und Delem-DA-58-Steuerung.",
      imageSrc: "/machines/amada-promecam-itps-80-25/main-pic.png",
      imageAlt: "1998 AMADA Promecam ITPS 80-25 Abkantpresse",
      href: "/de/machines/amada-promecam-itps-80-25/",
      status: "sold"
    },
    {
      title: "1976 FORTUNA R26 H 3000 A 45",
      description: "Rundschleifmaschine mit 3000 mm Schleiflänge, 250 mm Spitzenhöhe und Schleifscheibe Ø 750 mm.",
      imageSrc: "/machines/fortuna-r26-h-3000-a-45/main-pic.png",
      imageAlt: "1976 FORTUNA R26 H 3000 A 45 Rundschleifmaschine",
      href: "/de/machines/fortuna-r26-h-3000-a-45/",
      status: "sold"
    }
  ]);
}

function machineCardsEn(): HomeMachineCard[] {
  return sortMachineCards([
    {
      title: "2007 Deckel Maho DMC 635V",
      description: "CNC vertical machining centre with Siemens 840D, SK40 taper, and 20-station tool changer.",
      imageSrc: "/machines/deckel-maho-dmc-635v/main-pic.png",
      imageAlt: "2007 Deckel Maho DMC 635V CNC vertical machining centre",
      href: getPathForRouteKey("en", "machines.belt-grinding"),
      status: "sold"
    },
    {
      title: "1999 Leadwell T7",
      description: "CNC lathe with Fanuc Series O-TD control, 350 mm turning diameter, and 12-station turret.",
      imageSrc: "/machines/leadwell-t7/main-pic.png",
      imageAlt: "1999 Leadwell T7 CNC lathe",
      href: getPathForRouteKey("en", "machines.surface-grinding"),
      status: "sold"
    },
    {
      title: "1991 Mori Seiki MV-40B",
      description: "3-axis CNC universal machine centre with Fanuc MF-M4 control and BT-40 taper.",
      imageSrc: "/machines/mori-seiki-mv-40b/main-pic.png",
      imageAlt: "1991 Mori Seiki MV-40B CNC universal machine centre",
      href: getPathForRouteKey("en", "machines.deburring"),
      status: "sold"
    },
    {
      title: "1991 Biglia B131 S2 CNC",
      description: "CNC lathe with GE Fanuc Series 15-T, 12-station turret, and Exomist extraction.",
      imageSrc: "/machines/biglia-b131-s2/main-pic.png",
      imageAlt: "1991 Biglia B131 S2 CNC lathe",
      href: "/en/machines/biglia-b131-s2/",
      status: "sold"
    },
    {
      title: "UNION BFP 130/6",
      description: "Horizontal table-type boring mill with 130 mm spindle, Heidenhain/Sony DRO, and facing head.",
      imageSrc: "/machines/union-bfp-130-6/main-pic.jpg",
      imageAlt: "UNION BFP 130/6 horizontal table-type boring mill",
      href: "/en/machines/union-bfp-130-6/",
      status: "available"
    },
    {
      title: "1969 Leopoldo Pontiggia H 600 x 5000",
      description: "Conventional heavy-duty lathe with 5000 mm between centres, 600 mm centre height, and 4-jaw chuck.",
      imageSrc: "/machines/pontiggia-h-600-x-5000/main-pic.png",
      imageAlt: "1969 Leopoldo Pontiggia H 600 x 5000 heavy-duty lathe",
      href: "/en/machines/pontiggia-h-600-x-5000/",
      status: "sold"
    },
    {
      title: "1998 AMADA Promecam ITPS 80-25",
      description: "Press brake with 80 t pressing force, 2500 mm bending length, and Delem DA 58 control.",
      imageSrc: "/machines/amada-promecam-itps-80-25/main-pic.png",
      imageAlt: "1998 AMADA Promecam ITPS 80-25 press brake",
      href: "/en/machines/amada-promecam-itps-80-25/",
      status: "sold"
    },
    {
      title: "1976 FORTUNA R26 H 3000 A 45",
      description: "Cylindrical grinding machine with 3000 mm grinding length, 250 mm centre height, and 750 mm wheel.",
      imageSrc: "/machines/fortuna-r26-h-3000-a-45/main-pic.png",
      imageAlt: "1976 FORTUNA R26 H 3000 A 45 cylindrical grinding machine",
      href: "/en/machines/fortuna-r26-h-3000-a-45/",
      status: "sold"
    }
  ]);
}

const homeContentByLocale: Record<Locale, HomeContent> = {
  de: {
    labels: {
      learnMore: "Details ansehen",
      statusAvailable: "Verfügbar",
      statusSold: "Verkauft"
    },
    hero: {
      eyebrow: "Handel & Export gebrauchter Industriemaschinen",
      title: "Gebrauchte Industrie\u00ADmaschinen. Beschafft, geprüft und weltweit geliefert.",
      description:
        "Die Machinco GmbH handelt mit gebrauchten CNC- und konventionellen Werkzeugmaschinen. Von unserem Lager in Gablingen bei Augsburg aus kümmern wir uns um Besichtigung, Demontage, Verladung und den internationalen Export.",
      videoFallbackText: "Ihr Browser unterstützt keine Videowiedergabe.",
      primaryCta: "Maschinen ansehen",
      secondaryCta: "Maschine anfragen",
      proofPoints: [
        "Hauptstandort & Lager in Gablingen bei Augsburg",
        "Besichtigung nach Vereinbarung",
        "Verladung, Transport & Exportdokumente aus einer Hand"
      ]
    },
    services: {
      eyebrow: "Leistungen",
      title: "Von der Beschaffung bis zum Export",
      description:
        "Wir übernehmen den gesamten Ablauf oder einzelne Schritte – je nachdem, was Sie für Ihre Maschine benötigen.",
      items: [
        {
          icon: "fa-cogs",
          title: "Maschinenhandel",
          description: "Gebrauchte CNC- und konventionelle Werkzeugmaschinen namhafter Hersteller."
        },
        {
          icon: "fa-search",
          title: "Beschaffung & Besichtigung",
          description: "Gezielte Suche nach der passenden Maschine und Zustandsbewertung vor Ort."
        },
        {
          icon: "fa-wrench",
          title: "Demontage & Verladung",
          description: "Koordination der Demontage, Kran- und Staplerverladung sowie Ladungssicherung."
        },
        {
          icon: "fa-globe",
          title: "Transport & Export",
          description: "Transportorganisation, Exportdokumente und internationaler Versand."
        }
      ],
      cta: "Alle Leistungen & Projekte"
    },
    machines: {
      eyebrow: "Maschinen",
      title: "Aktuelle und verkaufte Maschinen",
      description:
        "Ein Auszug aus unserem Handel – mit technischen Daten, Fotos und der Möglichkeit zur Besichtigung verfügbarer Maschinen.",
      cards: machineCardsDe(),
      cta: "Alle Maschinen ansehen"
    },
    about: {
      eyebrow: "Über uns",
      title: "Machinco GmbH – Hauptstandort Gablingen bei Augsburg",
      imageSrc: "/images/about/machine-loading.jpg",
      imageAlt: "Kran hebt eine Werkzeugmaschine beim Verladen auf einen Schwerlastanhänger",
      paragraphs: [
        "Die Machinco GmbH ist ein Handels- und Exportunternehmen für gebrauchte Industriemaschinen. Unser Hauptstandort mit Lager befindet sich in Gablingen bei Augsburg, unser Büro in München.",
        "Wir bieten gebrauchte CNC- und konventionelle Werkzeugmaschinen an und unterstützen Käufer im In- und Ausland bei Besichtigung, Demontage, Verladung, Transport und Exportabwicklung."
      ],
      facts: [
        { label: "Hauptstandort & Lager", value: "Gablingen bei Augsburg" },
        { label: "Büro", value: "München" },
        { label: "Schwerpunkt", value: "Handel & Export gebrauchter Werkzeugmaschinen" }
      ],
      cta: "Mehr über Machinco"
    },
    finalCta: {
      title: "Sie suchen eine bestimmte Maschine oder planen einen Export?",
      description:
        "Senden Sie uns Ihre Anfrage – wir melden uns mit Verfügbarkeit, Details und den nächsten Schritten.",
      primaryCta: "Anfrage senden",
      secondaryCta: "Maschinen ansehen"
    },
    contact: {
      title: "Kontakt",
      intro: "Fragen Sie Maschinendetails, Preise, Besichtigungstermine oder Versandinformationen an.",
      subject: "Machinco DE - Kontaktformular (Startseite)",
      privacyConsent: {
        before: "Ich habe die ",
        linkLabel: "Datenschutzerklärung",
        after: " gelesen und akzeptiere die Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage."
      },
      fields: {
        name: "Name*",
        email: "E-Mail*",
        phone: "Telefon",
        company: "Unternehmen",
        message: "Nachricht*"
      },
      placeholders: {
        message: "Welche Maschine suchen oder verkaufen Sie? Wohin soll sie geliefert werden?"
      },
      submitCta: "Anfrage senden"
    }
  },
  en: {
    labels: {
      learnMore: "View details",
      statusAvailable: "Available",
      statusSold: "Sold"
    },
    hero: {
      eyebrow: "Used industrial machinery trading & export",
      title: "Used Industrial Machinery. Sourced, Inspected and Delivered Worldwide.",
      description:
        "Machinco GmbH trades used CNC and conventional machine tools. From our warehouse in Gablingen near Augsburg, Germany, we handle inspection, dismantling, loading and international export.",
      videoFallbackText: "Your browser does not support video playback.",
      primaryCta: "View machines",
      secondaryCta: "Request a machine",
      proofPoints: [
        "Main warehouse in Gablingen near Augsburg, Germany",
        "Machine inspection by appointment",
        "Loading, transport & export documents from one partner"
      ]
    },
    services: {
      eyebrow: "Services",
      title: "From Purchase to Export",
      description: "We handle the entire process or individual steps – whatever your machine requires.",
      items: [
        {
          icon: "fa-cogs",
          title: "Machinery trading",
          description: "Used CNC and conventional machine tools from established manufacturers."
        },
        {
          icon: "fa-search",
          title: "Sourcing & inspection",
          description: "Targeted search for the right machine and on-site condition assessment."
        },
        {
          icon: "fa-wrench",
          title: "Dismantling & loading",
          description: "Coordination of dismantling, crane and forklift loading, and load securing."
        },
        {
          icon: "fa-globe",
          title: "Transport & export",
          description: "Transport organisation, export documents and international shipping."
        }
      ],
      cta: "All services & projects"
    },
    machines: {
      eyebrow: "Machines",
      title: "Current and Sold Machines",
      description:
        "A selection from our trading business – with technical data, photos and inspection of available machines by appointment.",
      cards: machineCardsEn(),
      cta: "View all machines"
    },
    about: {
      eyebrow: "About us",
      title: "Machinco GmbH – Based in Gablingen near Augsburg",
      imageSrc: "/images/about/machine-loading.jpg",
      imageAlt: "Crane lifting a machine tool onto a heavy-duty trailer during loading",
      paragraphs: [
        "Machinco GmbH is a trading and export company for used industrial machinery. Our main warehouse and business location is in Gablingen near Augsburg, with an office in Munich.",
        "We offer used CNC and conventional machine tools and support buyers in Germany and abroad with inspection, dismantling, loading, transport and export handling."
      ],
      facts: [
        { label: "Main warehouse & location", value: "Gablingen near Augsburg" },
        { label: "Office", value: "Munich" },
        { label: "Focus", value: "Trading & export of used machine tools" }
      ],
      cta: "More about Machinco"
    },
    finalCta: {
      title: "Looking for a specific machine or planning an export?",
      description: "Send us your request – we will get back to you with availability, details and the next steps.",
      primaryCta: "Send a request",
      secondaryCta: "View machines"
    },
    contact: {
      title: "Contact",
      intro: "Ask for machine details, prices, inspection appointments or shipping information.",
      subject: "Machinco EN - Contact form (Homepage)",
      privacyConsent: {
        before: "I have read the ",
        linkLabel: "privacy policy",
        after: " and agree to the processing of my data for handling my inquiry."
      },
      fields: {
        name: "Name*",
        email: "Email*",
        phone: "Phone",
        company: "Company",
        message: "Message*"
      },
      placeholders: {
        message: "Which machine are you looking for or selling? Where should it be delivered?"
      },
      submitCta: "Send inquiry"
    }
  }
};

export function getHomeContent(locale: Locale): HomeContent {
  return homeContentByLocale[locale];
}
