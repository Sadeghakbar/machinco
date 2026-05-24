import type { Locale } from "@/i18n/config";
import type { RouteContent, RouteKey } from "@/content/types";

const contentByRoute: Record<RouteKey, Record<Locale, RouteContent>> = {
  home: {
    de: { title: "Startseite", description: "Machinco Startseite" },
    en: { title: "Home", description: "Machinco homepage" }
  },
  "machines.index": {
    de: { title: "Maschinen", description: "Maschinenuebersicht" },
    en: { title: "Machines", description: "Machine overview" }
  },
  "machines.belt-grinding": {
    de: { title: "Bandschleifmaschinen", description: "Detailseite" },
    en: { title: "Belt Grinding Machines", description: "Detail page" }
  },
  "machines.surface-grinding": {
    de: { title: "Flachschleifmaschinen", description: "Detailseite" },
    en: { title: "Surface Grinding Machines", description: "Detail page" }
  },
  "machines.deburring": {
    de: { title: "Entgratmaschinen", description: "Detailseite" },
    en: { title: "Deburring Machines", description: "Detail page" }
  },
  about: {
    de: { title: "Ueber uns", description: "Unternehmensprofil" },
    en: { title: "About", description: "Company profile" }
  },
  contact: {
    de: { title: "Kontakt", description: "Kontaktseite" },
    en: { title: "Contact", description: "Contact page" }
  },
  "blog.index": {
    de: { title: "Ratgeber", description: "Artikeluebersicht" },
    en: { title: "Blog", description: "Article overview" }
  },
  "blog.machine-selection": {
    de: { title: "Maschinenwahl", description: "Artikel" },
    en: { title: "Machine Selection", description: "Article" }
  },
  "blog.industrial-machine-costs": {
    de: { title: "Kosten Industriemaschinen", description: "Artikel" },
    en: { title: "Industrial Machine Costs", description: "Article" }
  },
  "blog.grinding-machine-selection-tips": {
    de: { title: "Schleifmaschine Auswahl", description: "Artikel" },
    en: { title: "Grinding Machine Selection Tips", description: "Article" }
  },
  "legal.imprint": {
    de: { title: "Impressum", description: "Rechtliche Angaben" },
    en: { title: "Imprint", description: "Legal information" }
  },
  "legal.privacy": {
    de: { title: "Datenschutz", description: "Datenschutzerklaerung" },
    en: { title: "Privacy", description: "Privacy policy" }
  }
};

export function getLocalPageContent(locale: Locale, routeKey: RouteKey): RouteContent {
  return contentByRoute[routeKey][locale];
}
