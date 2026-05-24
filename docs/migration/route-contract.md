# Route Contract (DE/EN Shared Slugs)

## Purpose
This contract defines the canonical route keys and public URLs for the new Next.js app.
Each page is implemented once and rendered in both languages via locale content.

## Locale Rules
- Supported locales: `de`, `en`
- Public URL format: `/{locale}/{slug}`
- Home routes: `/de`, `/en`
- Locale switcher must keep the same `routeKey` between languages.

## Canonical Route Keys

| routeKey | dePath | enPath | Legacy DE source | Legacy EN source |
| --- | --- | --- | --- | --- |
| `home` | `/de` | `/en` | `/index.html` | `/en/index.html` |
| `machines.index` | `/de/machines` | `/en/machines` | `/maschinen.html` | `/en/machines.html` |
| `machines.belt-grinding` | `/de/machines/belt-grinding` | `/en/machines/belt-grinding` | `/maschinen-bandschleifmaschinen.html` | `/en/belt-grinding-machines.html` |
| `machines.surface-grinding` | `/de/machines/surface-grinding` | `/en/machines/surface-grinding` | `/maschinen-flachschleifmaschinen.html` | `/en/surface-grinding-machines.html` |
| `machines.deburring` | `/de/machines/deburring` | `/en/machines/deburring` | `/maschinen-entgratmaschinen.html` | `/en/deburring-machines.html` |
| `about` | `/de/about` | `/en/about` | `/ueber-uns.html` | `/en/about.html` |
| `contact` | `/de/contact` | `/en/contact` | `/kontakt.html` | `/en/contact.html` |
| `blog.index` | `/de/blog` | `/en/blog` | `/ratgeber.html` | `/en/blog.html` |
| `blog.machine-selection` | `/de/blog/machine-selection` | `/en/blog/machine-selection` | `/ratgeber-maschinenwahl.html` | `/en/blog-machine-selection.html` |
| `blog.industrial-machine-costs` | `/de/blog/industrial-machine-costs` | `/en/blog/industrial-machine-costs` | `/ratgeber-kosten-industriemaschinen.html` | `/en/blog-industrial-machine-costs.html` |
| `blog.grinding-machine-selection-tips` | `/de/blog/grinding-machine-selection-tips` | `/en/blog/grinding-machine-selection-tips` | `/ratgeber-schleifmaschine-auswahl.html` | `/en/blog-grinding-machine-selection-tips.html` |
| `legal.imprint` | `/de/imprint` | `/en/imprint` | `/impressum.html` | `/en/imprint.html` |
| `legal.privacy` | `/de/privacy` | `/en/privacy` | `/datenschutz.html` | `/en/privacy-policy.html` |

## App Router Structure

```txt
app/
  [locale]/
    page.tsx                              # home
    machines/page.tsx                     # machines.index
    machines/[machineSlug]/page.tsx       # machine detail pages
    about/page.tsx
    contact/page.tsx
    blog/page.tsx
    blog/[postSlug]/page.tsx
    imprint/page.tsx
    privacy/page.tsx
```

## Slug Contracts
- Allowed `machineSlug` values:
  - `belt-grinding`
  - `surface-grinding`
  - `deburring`
- Allowed `postSlug` values:
  - `machine-selection`
  - `industrial-machine-costs`
  - `grinding-machine-selection-tips`

## Navigation Contract
- Primary nav route keys:
  - `home`, `machines.index`, `about`, `contact`, `blog.index`
- Footer route keys:
  - `contact`, `legal.imprint`, `legal.privacy`
- Language switch behavior:
  - On `/de/{...}` switch to `/en/{same-route-key}`
  - On `/en/{...}` switch to `/de/{same-route-key}`

## Non-URL Content Differences To Normalize
- Contact details differ between pages (`kontakt.html` vs homepage contact block).
- Form field names differ across forms (`message` vs `nachricht`, `phone` vs `telefon`).

These are content-model decisions, not route decisions, and should be resolved during content migration.
