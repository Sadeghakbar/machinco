import type { Locale } from "@/i18n/config";
import type { PrivacyConsentCopy } from "@/content/privacyConsent";
import { getPathForRouteKey } from "@/i18n/routes";

export type AboutPageContent = {
  hero: {
    title: string;
    description: string;
  };
  story: {
    title: string;
    paragraphs: string[];
  };
  values: {
    title: string;
    items: string[];
  };
  media: {
    title: string;
    images: Array<{ src: string; alt: string }>;
    cta: string;
    ctaHref: string;
  };
  ctaPanel: {
    title: string;
    description: string;
    cta: string;
    ctaHref: string;
  };
};

export type ContactPageContent = {
  hero: {
    title: string;
    description: string;
  };
  details: {
    title: string;
    company: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    extraBlockTitle?: string;
    extraBlockLines?: string[];
  };
  quickInfo: {
    title: string;
    description: string;
  };
  form: {
    title: string;
    formId: string;
    subject: string;
    submitLabel: string;
    privacyConsent: PrivacyConsentCopy;
    fields: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
    };
  };
};

const aboutByLocale: Record<Locale, AboutPageContent> = {
  de: {
    hero: {
      title: "Über Machinco",
      description:
        "Handel und Export gebrauchter Industriemaschinen – mit Hauptstandort und Lager in Gablingen bei Augsburg."
    },
    story: {
      title: "Wer wir sind",
      paragraphs: [
        "Die Machinco GmbH ist ein Handels- und Exportunternehmen für gebrauchte Industriemaschinen. Unser Schwerpunkt liegt auf CNC- und konventionellen Werkzeugmaschinen wie Drehmaschinen, Bearbeitungszentren, Bohrwerken, Schleifmaschinen und Abkantpressen.",
        "Unser Hauptstandort mit Lager befindet sich in Gablingen bei Augsburg, unser Büro in München. Von hier aus unterstützen wir Käufer im In- und Ausland – vom Ankauf über die Besichtigung bis zur Verladung und Exportabwicklung."
      ]
    },
    values: {
      title: "Was wir für Sie übernehmen",
      items: [
        "Handel mit gebrauchten CNC- und konventionellen Werkzeugmaschinen",
        "Beschaffung von Maschinen im Kundenauftrag",
        "Besichtigung und Zustandsbewertung vor Ort",
        "Koordination von Demontage, Kran- und Staplerverladung",
        "Verladung auf Lkw, Auflieger und Container mit Ladungssicherung",
        "Transportkoordination, Exportdokumente und internationaler Versand"
      ]
    },
    media: {
      title: "Einblicke in unsere Arbeit",
      images: [
        { src: "/projects/portfolio/p01-sm.jpg", alt: "Mobilkran hebt eine Abkantpresse auf einen Sattelauflieger" },
        { src: "/projects/portfolio/p08-sm.jpg", alt: "Gabelstapler beim Beladen eines Tiefladers" },
        { src: "/projects/portfolio/p02-sm.jpg", alt: "Mit Spanngurten gesicherte Maschinen auf einem Planen-Sattelauflieger" }
      ],
      cta: "Alle Projektfotos ansehen",
      ctaHref: getPathForRouteKey("de", "projects.index")
    },
    ctaPanel: {
      title: "Sprechen Sie uns an",
      description:
        "Ob Maschinenanfrage, Besichtigung oder Export – wir melden uns mit den passenden Informationen.",
      cta: "Kontakt aufnehmen",
      ctaHref: getPathForRouteKey("de", "contact")
    }
  },
  en: {
    hero: {
      title: "About Machinco",
      description:
        "Trading and export of used industrial machinery – with our main warehouse and business location in Gablingen near Augsburg, Germany."
    },
    story: {
      title: "Who we are",
      paragraphs: [
        "Machinco GmbH is a trading and export company for used industrial machinery. We focus on CNC and conventional machine tools such as lathes, machining centres, boring mills, grinding machines and press brakes.",
        "Our main warehouse and business location is in Gablingen near Augsburg, with an office in Munich. From here we support buyers in Germany and abroad – from purchase and inspection to loading and export handling."
      ]
    },
    values: {
      title: "What we take care of",
      items: [
        "Trading of used CNC and conventional machine tools",
        "Machine sourcing on behalf of customers",
        "On-site inspection and condition assessment",
        "Coordination of dismantling, crane and forklift loading",
        "Loading onto trucks, trailers and containers with load securing",
        "Transport coordination, export documents and international shipping"
      ]
    },
    media: {
      title: "Insights into our work",
      images: [
        { src: "/projects/portfolio/p01-sm.jpg", alt: "Mobile crane lifting a press brake onto a semi-trailer" },
        { src: "/projects/portfolio/p08-sm.jpg", alt: "Forklift loading a low-bed trailer" },
        { src: "/projects/portfolio/p02-sm.jpg", alt: "Machines secured with lashing straps on a curtain-side trailer" }
      ],
      cta: "View all project photos",
      ctaHref: getPathForRouteKey("en", "projects.index")
    },
    ctaPanel: {
      title: "Get in touch",
      description: "Whether it is a machine request, an inspection or an export – we will get back to you with the right information.",
      cta: "Contact us",
      ctaHref: getPathForRouteKey("en", "contact")
    }
  }
};

const contactByLocale: Record<Locale, ContactPageContent> = {
  de: {
    hero: {
      title: "Kontaktieren Sie uns",
      description:
        "Ob Maschinenanfrage, Preis, Besichtigung oder Versand – beschreiben Sie kurz Ihr Anliegen. Wir melden uns schnellstmöglich."
    },
    details: {
      title: "Kontaktdaten",
      company: "Machinco GmbH",
      phoneLabel: "Telefon",
      phoneValue: "+49 163 0133066",
      emailLabel: "E-Mail",
      emailValue: "info@machincogmbh.com"
    },
    quickInfo: {
      title: "Dringende Anfrage?",
      description: "Rufen Sie uns direkt an – telefonisch erreichen Sie uns am schnellsten."
    },
    form: {
      title: "Anfrageformular",
      formId: "kontakt-formular",
      subject: "Machinco DE - Kontaktformular (Kontaktseite)",
      submitLabel: "Anfrage senden",
      privacyConsent: {
        before: "Ich habe die ",
        linkLabel: "Datenschutz\u00ADerklärung",
        after: " gelesen und akzeptiere die Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage."
      },
      fields: {
        name: "Name*",
        email: "E-Mail*",
        phone: "Telefon",
        company: "Unternehmen",
        message: "Nachricht*"
      }
    }
  },
  en: {
    hero: {
      title: "Contact Us",
      description:
        "Machine request, price, inspection or shipping – briefly describe what you need. We will get back to you as soon as possible."
    },
    details: {
      title: "Contact Details",
      company: "Machinco GmbH",
      phoneLabel: "Phone",
      phoneValue: "+49 163 0133066",
      emailLabel: "Email",
      emailValue: "info@machincogmbh.com"
    },
    quickInfo: {
      title: "Urgent request?",
      description: "Call us directly – phone is the fastest way to reach us."
    },
    form: {
      title: "Inquiry form",
      formId: "contact-form",
      subject: "Machinco EN - Contact Form (Contact Page)",
      submitLabel: "Send inquiry",
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
      }
    }
  }
};

export function getAboutContent(locale: Locale): AboutPageContent {
  return aboutByLocale[locale];
}

export function getContactContent(locale: Locale): ContactPageContent {
  return contactByLocale[locale];
}
