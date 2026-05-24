# Minimal 301 Redirect Matrix

## Purpose
Preserve high-value traffic, bookmarks, and backlinks from legacy `.html` URLs during migration to Next.js locale routes.

## Redirect Policy
- Use HTTP `301` for all mappings below.
- Keep query strings unchanged.
- Do not chain redirects (each old URL maps directly to final URL).
- Scope is intentionally minimal and covers all current public pages.

## Legacy -> New URL Mappings

| Priority | Legacy URL | New URL |
| --- | --- | --- |
| P0 | `/index.html` | `/de` |
| P0 | `/en/index.html` | `/en` |
| P0 | `/maschinen.html` | `/de/machines` |
| P0 | `/en/machines.html` | `/en/machines` |
| P0 | `/kontakt.html` | `/de/contact` |
| P0 | `/en/contact.html` | `/en/contact` |
| P0 | `/ratgeber.html` | `/de/blog` |
| P0 | `/en/blog.html` | `/en/blog` |
| P1 | `/ueber-uns.html` | `/de/about` |
| P1 | `/en/about.html` | `/en/about` |
| P1 | `/impressum.html` | `/de/imprint` |
| P1 | `/en/imprint.html` | `/en/imprint` |
| P1 | `/datenschutz.html` | `/de/privacy` |
| P1 | `/en/privacy-policy.html` | `/en/privacy` |
| P1 | `/maschinen-bandschleifmaschinen.html` | `/de/machines/belt-grinding` |
| P1 | `/en/belt-grinding-machines.html` | `/en/machines/belt-grinding` |
| P1 | `/maschinen-flachschleifmaschinen.html` | `/de/machines/surface-grinding` |
| P1 | `/en/surface-grinding-machines.html` | `/en/machines/surface-grinding` |
| P1 | `/maschinen-entgratmaschinen.html` | `/de/machines/deburring` |
| P1 | `/en/deburring-machines.html` | `/en/machines/deburring` |
| P1 | `/ratgeber-maschinenwahl.html` | `/de/blog/machine-selection` |
| P1 | `/en/blog-machine-selection.html` | `/en/blog/machine-selection` |
| P1 | `/ratgeber-kosten-industriemaschinen.html` | `/de/blog/industrial-machine-costs` |
| P1 | `/en/blog-industrial-machine-costs.html` | `/en/blog/industrial-machine-costs` |
| P1 | `/ratgeber-schleifmaschine-auswahl.html` | `/de/blog/grinding-machine-selection-tips` |
| P1 | `/en/blog-grinding-machine-selection-tips.html` | `/en/blog/grinding-machine-selection-tips` |

## Optional Normalization Redirects
These are not legacy pages but improve consistency.

| Legacy URL | New URL |
| --- | --- |
| `/de/` | `/de` |
| `/en/` | `/en` |
| `/de/index` | `/de` |
| `/en/index` | `/en` |

## Next.js Implementation Notes
- Implement in `next.config.ts` with static `redirects()` entries.
- Add regression checks so each legacy URL returns a `301` and lands on the target page.
- Add Search Console and analytics monitoring for 30 days after launch.
