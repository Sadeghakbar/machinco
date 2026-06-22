import type { Locale } from "@/i18n/config";
import type { PrivacyConsentCopy } from "@/content/privacyConsent";
import {
  getAllProducts,
  getFeaturedProducts,
  getMachinePath,
  getMachinesIndexCopy,
  getProductBySlug,
  getProductSlugs,
  hasProductSlug,
  type MachinesIndexCopy,
  type ProductDetail,
  type ProductListItem
} from "@/content/machinesCatalog";
export type ProductInquiryIntent = "quote" | "viewing";

export type MachinesIndexContent = MachinesIndexCopy & {
  products: ProductListItem[];
};

export type ProductInquiryFormContent = {
  formId: string;
  title: string;
  intro: string;
  subject: string;
  productName: string;
  productFieldLabel: string;
  submitLabel: string;
  privacyConsent: PrivacyConsentCopy;
  defaultMessage: string;
  viewingMessage: string;
  viewingSubject: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  };
};

export type MachineDetailContent = ProductDetail & {
  statusLabel: string;
  productForm: ProductInquiryFormContent;
  inquiryLinks: {
    quote: string;
    viewing: string;
  };
  detailLabels: {
    priceLabel: string;
    priceNote: string;
    quoteCtaLabel: string;
    inspectCtaLabel: string;
    galleryCtaLabel: string;
    highlightsTitle: string;
    specsTitle: string;
    dimensionsTitle: string;
    applicationsTitle: string;
    metaCategory: string;
    metaBrand: string;
    metaYear: string;
    metaStatus: string;
    soldNoticeTitle: string;
    soldNoticeDescription: string;
  };
};

const detailLabelsByLocale: Record<
  Locale,
  MachineDetailContent["detailLabels"]
> = {
  de: {
    priceLabel: "Machinco Preis",
    priceNote: "(ab Werk)",
    quoteCtaLabel: "Offizielles Angebot erhalten",
    inspectCtaLabel: "Maschine besichtigen",
    galleryCtaLabel: "Foto Galerie",
    highlightsTitle: "Technische Highlights",
    specsTitle: "Technische Daten",
    dimensionsTitle: "Abmessungen und Gewicht",
    applicationsTitle: "Typische Einsatzbereiche",
    metaCategory: "Kategorie",
    metaBrand: "Hersteller",
    metaYear: "Baujahr",
    metaStatus: "Status",
    soldNoticeTitle: "Diese Maschine ist verkauft",
    soldNoticeDescription:
      "Die Maschine ist nicht mehr verfügbar. Die technischen Daten und Bilder bleiben als Referenz sichtbar."
  },
  en: {
    priceLabel: "Machinco price",
    priceNote: "(Ex works)",
    quoteCtaLabel: "Get official quote",
    inspectCtaLabel: "Request machine viewing",
    galleryCtaLabel: "Photo gallery",
    highlightsTitle: "Technical Highlights",
    specsTitle: "Technical Details",
    dimensionsTitle: "Dimensions and Weight",
    applicationsTitle: "Typical Applications",
    metaCategory: "Category",
    metaBrand: "Manufacturer",
    metaYear: "Year",
    metaStatus: "Status",
    soldNoticeTitle: "This machine has been sold",
    soldNoticeDescription:
      "This machine is no longer available. Its technical details and gallery remain visible for reference."
  }
};

const productFormCopyByLocale: Record<
  Locale,
  Omit<
    ProductInquiryFormContent,
    "formId" | "subject" | "productName" | "defaultMessage" | "viewingMessage" | "viewingSubject"
  >
> = {
  de: {
    title: "Kontakt zu diesem Produkt",
    intro: "Senden Sie uns Ihre Anfrage zu dieser Maschine. Wir melden uns zeitnah mit einer technischen Ersteinschaetzung.",
    productFieldLabel: "Produkt",
    submitLabel: "Anfrage senden",
    privacyConsent: {
      before: "Ich habe die ",
      linkLabel: "Datenschutzerklaerung",
      after: " gelesen und akzeptiere die Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage."
    },
    fields: {
      name: "Name*",
      email: "E-Mail*",
      phone: "Telefon",
      company: "Unternehmen",
      message: "Nachricht*"
    }
  },
  en: {
    title: "Contact us about this product",
    intro: "Send us your inquiry for this machine. We will respond quickly with a technical first assessment.",
    productFieldLabel: "Product",
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
};

export function getProductInquiryHref(
  locale: Locale,
  slug: string,
  intent: ProductInquiryIntent = "quote"
): string {
  const base = getMachinePath(locale, slug);
  if (intent === "viewing") {
    return `${base}?intent=viewing#product-inquiry`;
  }
  return `${base}#product-inquiry`;
}

export function getMachinesIndexContent(locale: Locale): MachinesIndexContent {
  return {
    ...getMachinesIndexCopy(locale),
    products: getAllProducts(locale)
  };
}

export function getMachineDetailContent(
  locale: Locale,
  machineSlug: string
): MachineDetailContent | null {
  const product = getProductBySlug(locale, machineSlug);
  if (!product) {
    return null;
  }

  const indexCopy = getMachinesIndexCopy(locale);

  const formCopy = productFormCopyByLocale[locale];

  return {
    ...product,
    statusLabel: indexCopy.statusLabels[product.status],
    detailLabels: detailLabelsByLocale[locale],
    productForm: {
      formId: `product-inquiry-${machineSlug}`,
      title: formCopy.title,
      intro: formCopy.intro,
      subject:
        locale === "de"
          ? `Machinco DE - Produktanfrage: ${product.title}`
          : `Machinco EN - Product inquiry: ${product.title}`,
      productName: product.title,
      productFieldLabel: formCopy.productFieldLabel,
      submitLabel: formCopy.submitLabel,
      privacyConsent: formCopy.privacyConsent,
      defaultMessage:
        locale === "de"
          ? `Ich interessiere mich fuer die Maschine "${product.title}". Bitte kontaktieren Sie mich mit weiteren Informationen.`
          : `I am interested in the machine "${product.title}". Please contact me with more information.`,
      viewingMessage:
        locale === "de"
          ? `Ich moechte die Maschine "${product.title}" besichtigen. Bitte schlagen Sie mir einen passenden Termin vor.`
          : `I would like to view the machine "${product.title}". Please suggest a suitable appointment.`,
      viewingSubject:
        locale === "de"
          ? `Machinco DE - Besichtigungsanfrage: ${product.title}`
          : `Machinco EN - Viewing request: ${product.title}`,
      fields: formCopy.fields
    },
    inquiryLinks: {
      quote: getProductInquiryHref(locale, machineSlug, "quote"),
      viewing: getProductInquiryHref(locale, machineSlug, "viewing")
    }
  };
}

export function getMachineSlugs(): string[] {
  return getProductSlugs();
}

export { getAllProducts, getFeaturedProducts, getProductSlugs, hasProductSlug };
