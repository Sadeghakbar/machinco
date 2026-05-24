import type { Locale } from "@/i18n/config";
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
    placeholders: string[];
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
    addressLines: string[];
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
    privacyConsent: string;
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
      title: "Technik verstehen. Prozesse verbessern. Partnerschaftlich arbeiten.",
      description:
        "Machinco begleitet produzierende Unternehmen mit technischer Klarheit, verbindlicher Kommunikation und Fokus auf nachhaltige Wirtschaftlichkeit."
    },
    story: {
      title: "Unsere Geschichte",
      paragraphs: [
        "Machinco wurde mit dem Anspruch gegruendet, industrielle Investitionsentscheidungen sicherer zu machen. Statt Standardkatalogen setzen wir auf technische Einordnung entlang realer Produktionsanforderungen.",
        "Wir verbinden Erfahrung aus Maschinenprojekten mit einem klaren Blick auf das, was im Werk wirklich zaehlt: reproduzierbare Qualitaet, stabile Taktzeiten und planbare Gesamtkosten."
      ]
    },
    values: {
      title: "Wofuer wir stehen",
      items: [
        "Loesungsorientierte Beratung statt Produktdruck",
        "Transparenz bei Machbarkeit, Aufwand und Nutzen",
        "Verlaessliche Begleitung von Anfrage bis Inbetriebnahme",
        "Langfristiges Denken im Sinne Ihrer Produktion"
      ]
    },
    media: {
      title: "Bildmaterial (Platzhalter)",
      placeholders: [
        "[Bildplatzhalter: Maschinen in Produktion]",
        "[Bildplatzhalter: Werkstatt und Serviceteam]",
        "[Bildplatzhalter: Beratung vor Ort beim Kunden]"
      ]
    },
    ctaPanel: {
      title: "Lassen Sie uns ueber Ihr Projekt sprechen",
      description: "In einem Erstgespraech klaeren wir schnell, welche Loesung zu Ihren Anforderungen passt.",
      cta: "Kostenlose Beratung sichern",
      ctaHref: getPathForRouteKey("de", "contact")
    }
  },
  en: {
    hero: {
      title: "We understand technology. We improve processes.",
      description:
        "Machinco combines technical know-how with practical project execution to reduce investment risk and increase production reliability."
    },
    story: {
      title: "Our story",
      paragraphs: [
        "Machinco was founded to help manufacturers make better machine decisions - based on real production requirements, not catalog promises."
      ]
    },
    values: {
      title: "What we stand for",
      items: [
        "Solution-first consulting",
        "Transparent feasibility and costs",
        "Reliable support from inquiry to commissioning",
        "Long-term production thinking"
      ]
    },
    media: {
      title: "Image placeholders",
      placeholders: ["[Machines in production]", "[Workshop and service team]", "[On-site customer consultation]"]
    },
    ctaPanel: {
      title: "Talk to our team",
      description: "In a first call, we quickly align on the right solution for your requirements.",
      cta: "Book a free consultation",
      ctaHref: getPathForRouteKey("en", "contact")
    }
  }
};

const contactByLocale: Record<Locale, ContactPageContent> = {
  de: {
    hero: {
      title: "Kontaktieren Sie uns",
      description:
        "Beschreiben Sie kurz Ihre Anforderungen. Wir melden uns zeitnah mit einer technischen Ersteinschaetzung."
    },
    details: {
      title: "Kontaktdaten",
      company: "Machinco GmbH",
      addressLines: ["Musterstrasse 12", "80331 Muenchen"],
      phoneLabel: "Telefon",
      phoneValue: "+49 (0)89 123456-0",
      emailLabel: "E-Mail",
      emailValue: "info@machinco.de"
    },
    quickInfo: {
      title: "Schnelle Angebotsanfrage",
      description: "Bei dringenden Projekten priorisieren wir eine Rueckmeldung innerhalb von 24 Stunden."
    },
    form: {
      title: "Anfrageformular",
      formId: "kontakt-formular",
      subject: "Machinco DE - Kontaktformular (Kontaktseite)",
      submitLabel: "Anfrage senden",
      privacyConsent:
        "Ich habe die Datenschutzerklaerung gelesen und akzeptiere die Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage.",
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
        "Briefly describe your requirements. We will respond quickly with a technically grounded first assessment."
    },
    details: {
      title: "Contact Details",
      company: "Machinco GmbH",
      addressLines: ["Plaentschweg 13", "81247 Munich"],
      phoneLabel: "Phone",
      phoneValue: "+49 (0)163-0133066",
      emailLabel: "Email",
      emailValue: "info@machincogmbh.com",
      extraBlockTitle: "Showroom Address",
      extraBlockLines: ["No.29-040, Derchinger Str. 120/1/2", "86165 Augsburg"]
    },
    quickInfo: {
      title: "Fast Quote Request",
      description: "For urgent projects, we prioritize a response within 24 hours."
    },
    form: {
      title: "Inquiry Form",
      formId: "contact-form",
      subject: "Machinco EN - Contact Form (Contact Page)",
      submitLabel: "Send Inquiry",
      privacyConsent:
        "I have read the privacy policy and agree to the processing of my data for handling my inquiry.",
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
