import de from "../../messages/de.json";
import en from "../../messages/en.json";
import type { Locale } from "@/i18n/config";

export type LocaleMessages = typeof de;

const messageByLocale: Record<Locale, LocaleMessages> = {
  de,
  en
};

export function getMessages(locale: Locale): LocaleMessages {
  return messageByLocale[locale];
}
