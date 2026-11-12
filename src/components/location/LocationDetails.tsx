import type { Locale } from "@/i18n/config";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_E164,
  GABLINGEN_MAPS_URL,
  getLocationCopy
} from "@/content/business";

type LocationDetailsProps = {
  locale: Locale;
  /** Show phone and email links below the addresses. */
  showContact?: boolean;
};

/**
 * Gablingen (main warehouse & business location) first and prominent,
 * Munich office listed separately and less prominently.
 */
export function LocationDetails({ locale, showContact = true }: LocationDetailsProps) {
  const copy = getLocationCopy(locale);

  return (
    <div className="location-details">
      <div className="location-primary">
        <span className="location-label">{copy.primaryLabel}</span>
        <address className="location-address">
          <a href={GABLINGEN_MAPS_URL} target="_blank" rel="noopener noreferrer">
            Machinco GmbH
            <br />
            {copy.primaryLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < copy.primaryLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </a>
        </address>
        <a className="location-maps-link" href={GABLINGEN_MAPS_URL} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {copy.mapsCta}
        </a>
      </div>

      <div className="location-secondary">
        <span className="location-label">{copy.officeLabel}</span>
        <address className="location-address">
          {copy.officeLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < copy.officeLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </address>
      </div>

      {showContact ? (
        <ul className="location-contact-lines">
          <li>
            {copy.phoneLabel}: <a href={`tel:${BUSINESS_PHONE_E164}`}>{BUSINESS_PHONE_DISPLAY}</a>
          </li>
          <li>
            {copy.emailLabel}: <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
