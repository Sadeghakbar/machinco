# Privacy and tracking (current launch state)

## What the site does today

- Static export hosted on **GitHub Pages** (`www.machinco.de`)
- **No** analytics, GTM, or marketing pixels on page load
- **No** cookie consent banner (not required while optional trackers are absent)
- Contact forms submit to **Web3Forms** only when the user sends a form

Legal copy lives in `src/content/blogLegal.ts` (`/de/privacy/`, `/en/privacy/`, `/de/imprint/`).

## Before adding analytics or ads

1. Choose a CMP (e.g. Cookiebot, Usercentrics) or self-hosted Klaro
2. Block scripts until opt-in consent
3. Update privacy policy sections 5, 6, and 9 in `blogLegal.ts` with tool names and purposes
4. Add the banner component to `app/layout.tsx` or locale layout

## Form consent

All inquiry forms use `FormPrivacyConsent` with a link to the privacy policy. Copy is in:

- `src/content/home.ts` (`quickInquiry.privacyConsent`)
- `src/content/aboutContact.ts` (`form.privacyConsent`)
- `src/content/machines.ts` (`productForm.privacyConsent`)
