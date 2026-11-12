import type { Locale } from "@/i18n/config";
import type { ProjectServiceId } from "@/content/projects";

export type ProjectsPageCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; description: string };
  intro: { title: string; paragraphs: string[] };
  services: { title: string; description: string; order: ProjectServiceId[] };
  portfolio: {
    title: string;
    description: string;
    photos: string;
    draftNotice: string;
  };
  caseStudies: { title: string; description: string };
  card: { photos: string; view: string; draft: string; year: string; destination: string; machine: string };
  detail: {
    back: string;
    overview: string;
    services: string;
    stages: string;
    stageLabel: string;
    technical: string;
    gallery: string;
    more: string;
    draftNotice: string;
  };
  lightbox: { open: string; close: string; previous: string; next: string };
  cta: { title: string; description: string; primary: string };
  home: { eyebrow: string; title: string; description: string; cta: string };
};

const serviceOrder: ProjectServiceId[] = [
  "sourcing",
  "inspection",
  "dismantling",
  "preparation",
  "crane",
  "forklift",
  "loading",
  "transport",
  "export-docs",
  "shipping"
];

const copyByLocale: Record<Locale, ProjectsPageCopy> = {
  de: {
    meta: {
      title: "Projekte & Referenzen – Maschinenverladung, Demontage & Export | Machinco GmbH",
      description:
        "Einblicke in reale Einsätze der Machinco GmbH: Maschinenverladung per Kran und Stapler, Ladungssicherung auf Lkw und Auflieger, Maschinenhandling und Logistik – von der Beschaffung bis zum Export aus einer Hand."
    },
    hero: {
      eyebrow: "Projekte & Referenzen",
      title: "Von der Beschaffung bis zum Export – Alles aus einer Hand.",
      description:
        "Wir kaufen, prüfen, demontieren, verladen und bereiten Industriemaschinen für Transport und Export vor – als Gesamtpaket oder für einzelne Schritte."
    },
    intro: {
      title: "Ihr Partner für den gesamten Maschinenprozess",
      paragraphs: [
        "Die Machinco GmbH ist ein Handels- und Exportunternehmen für Industriemaschinen mit Hauptstandort und Lager in Gablingen bei Augsburg. Wir begleiten unsere Kunden vom ersten Maschinenkauf bis zur fertigen Verladung und Exportvorbereitung.",
        "Sie benötigen nur einen Teil des Prozesses? Auch dann sind wir Ihr Ansprechpartner – ob Besichtigung, Demontage, Verladung oder Exportdokumente."
      ]
    },
    services: {
      title: "Unsere Leistungen",
      description: "Jedes Projekt wird individuell geplant. Die folgenden Leistungen bieten wir einzeln oder kombiniert an.",
      order: serviceOrder
    },
    portfolio: {
      title: "Einblicke in unsere Arbeit",
      description:
        "Diese Fotos zeigen ausgewählte Beispiele aus unseren realen Einsätzen beim Handling, bei der Verladung und in der Logistik von Industriemaschinen – vom Kranhub über die Staplerverladung bis zur gesicherten Ladung auf dem Auflieger. Alle Aufnahmen stammen aus unserer eigenen Arbeit, ohne Stockfotos.",
      photos: "Fotos",
      draftNotice:
        "Vorschau: Diese Galerie ist nur lokal sichtbar und wird erst nach Ihrer Freigabe veröffentlicht."
    },
    caseStudies: {
      title: "Projektberichte",
      description: "Ausgewählte Projekte im Detail."
    },
    card: {
      photos: "Fotos",
      view: "Projekt ansehen",
      draft: "Entwurf – nicht veröffentlicht",
      year: "Jahr",
      destination: "Ziel",
      machine: "Maschine"
    },
    detail: {
      back: "Alle Projekte",
      overview: "Projektüberblick",
      services: "Erbrachte Leistungen",
      stages: "Projektablauf",
      stageLabel: "Schritt",
      technical: "Technische Angaben",
      gallery: "Fotogalerie",
      more: "Weitere Projektberichte",
      draftNotice:
        "Entwurf: Dieses Projekt ist nur in der lokalen Vorschau sichtbar und wird erst nach Freigabe veröffentlicht."
    },
    lightbox: {
      open: "Foto vergrößern",
      close: "Galerie schließen",
      previous: "Vorheriges Foto",
      next: "Nächstes Foto"
    },
    cta: {
      title: "Sie planen ein Maschinenprojekt?",
      description:
        "Ob Maschinenbeschaffung, Besichtigung, Demontage, Verladung, Transport oder Exportdokumentation – wir unterstützen Sie bei der Umsetzung.",
      primary: "Projekt anfragen"
    },
    home: {
      eyebrow: "Projekte & Referenzen",
      title: "Mehr als Maschinenhandel – Wir übernehmen den gesamten Prozess.",
      description:
        "Von der Maschinenbeschaffung und Besichtigung über Demontage und professionelle Verladung bis zu Transport und Exportdokumenten – Machinco begleitet Sie durch den gesamten Maschinenprozess.",
      cta: "Alle Projekte ansehen"
    }
  },
  en: {
    meta: {
      title: "Projects & References – Machinery Loading, Dismantling & Export | Machinco GmbH",
      description:
        "Insights into real Machinco GmbH operations: industrial machinery loading by crane and forklift, load securing on trucks and trailers, machinery handling and logistics – from purchase to export, all from one partner."
    },
    hero: {
      eyebrow: "Projects & References",
      title: "From Purchase to Export – We Handle It All.",
      description:
        "We purchase, inspect, dismantle, load and prepare industrial machinery for transport and export – as a complete package or for individual steps."
    },
    intro: {
      title: "Your partner for the entire machinery process",
      paragraphs: [
        "Machinco GmbH is an industrial machinery trading and export company with its main warehouse and business location in Gablingen near Augsburg, Germany. We support customers from the initial machine purchase to final loading and export preparation.",
        "Only need one part of the process? Contact us anyway – whether it is an inspection, dismantling, loading or export documents."
      ]
    },
    services: {
      title: "Our services",
      description: "Every project is planned individually. We offer the following services separately or combined.",
      order: serviceOrder
    },
    portfolio: {
      title: "Insights into our work",
      description:
        "These photographs show selected examples of our real machinery handling, loading and logistics operations – from crane lifts and forklift loading to secured loads on semi-trailers. All images come from our own work, with no stock photography.",
      photos: "photos",
      draftNotice: "Preview: this gallery is only visible locally and will be published after your approval."
    },
    caseStudies: {
      title: "Case studies",
      description: "Selected projects in detail."
    },
    card: {
      photos: "photos",
      view: "View project",
      draft: "Draft – not published",
      year: "Year",
      destination: "Destination",
      machine: "Machine"
    },
    detail: {
      back: "All projects",
      overview: "Project overview",
      services: "Services performed",
      stages: "Project process",
      stageLabel: "Stage",
      technical: "Technical information",
      gallery: "Photo gallery",
      more: "More case studies",
      draftNotice: "Draft: this project is only visible in the local preview and will be published after approval."
    },
    lightbox: {
      open: "Enlarge photo",
      close: "Close gallery",
      previous: "Previous photo",
      next: "Next photo"
    },
    cta: {
      title: "Planning a Machinery Project?",
      description:
        "Whether you need help purchasing a machine, inspecting equipment, dismantling machinery, arranging crane or forklift loading, organizing transport or preparing export documents, contact our team.",
      primary: "Request a project"
    },
    home: {
      eyebrow: "Projects & References",
      title: "More Than Machinery Trading – We Manage the Entire Process.",
      description:
        "From machine sourcing and inspection to dismantling, professional loading, transport and export documentation, Machinco supports customers throughout the entire machinery process.",
      cta: "View all projects"
    }
  }
};

export function getProjectsPageCopy(locale: Locale): ProjectsPageCopy {
  return copyByLocale[locale];
}
