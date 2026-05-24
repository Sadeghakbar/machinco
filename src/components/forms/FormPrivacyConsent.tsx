import Link from "next/link";
import type { PrivacyConsentCopy } from "@/content/privacyConsent";
import type { Locale } from "@/i18n/config";
import { getPathForRouteKey } from "@/i18n/routes";

type FormPrivacyConsentProps = {
  locale: Locale;
  copy: PrivacyConsentCopy;
};

export function FormPrivacyConsent({ locale, copy }: FormPrivacyConsentProps) {
  return (
    <>
      {copy.before}
      <Link href={getPathForRouteKey(locale, "legal.privacy")}>{copy.linkLabel}</Link>
      {copy.after}
    </>
  );
}
