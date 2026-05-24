import de from "../locales/de/common.json";
import en from "../locales/en/common.json";
import type { Locale } from "@/i18n/config";

export type LocaleMessages = typeof de;

const messageByLocale: Record<Locale, LocaleMessages> = {
  de,
  en
};

export function getMessages(locale: Locale): LocaleMessages {
  return messageByLocale[locale];
}
