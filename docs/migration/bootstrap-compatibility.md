# Bootstrap 3 -> Bootstrap 5 Compatibility Checklist

## Purpose
Keep visual output close to the current site while migrating to React-Bootstrap on Bootstrap 5.

## Current Stack Snapshot
- Current CSS framework: Bootstrap 3 (`css/bootstrap.min.css`)
- Current JS dependency: jQuery + Bootstrap 3 JS plugins
- Current common patterns:
  - `navbar navbar-default navbar-fixed-top`
  - `navbar-toggle` + `.icon-bar` mobile toggler
  - grid classes with `col-xs-*`, `col-sm-*`, `col-md-*`
  - utility classes such as `img-responsive`, `text-right`
  - custom classes in `css/styles.css` and section/card components

## Migration Approach
1. Keep current custom `styles.css` behavior as baseline.
2. Port shell/components to React-Bootstrap primitives.
3. Add a small `legacy-bridge.css` for class and spacing deltas.
4. Remove bridge rules only after parity checks pass.

## Class/Pattern Mapping

| Bootstrap 3 pattern | Bootstrap 5 / React-Bootstrap target | Action |
| --- | --- | --- |
| `.navbar-default` | `Navbar` + `bg-body` / custom class | Recreate colors in custom class |
| `.navbar-fixed-top` | `fixed="top"` on `Navbar` | Direct mapping |
| `.navbar-toggle` + `.icon-bar` | `Navbar.Toggle` | Replace markup |
| `.navbar-right` | `ms-auto` on nav container | Update alignment |
| `.sr-only` | `.visually-hidden` | Replace helper class |
| `.img-responsive` | `.img-fluid` | Replace class |
| `.text-right` | `.text-end` | Replace class |
| `.thumbnail` | `Card` (or custom wrapper) | Preserve border/shadow in custom CSS |
| `.btn-default` | `variant="light"` or custom variant | Match colors via custom button class |
| `.btn-warning` | `variant="warning"` + custom overrides | Verify contrast and hover state |
| `.col-xs-*` | use `col-*` for smallest breakpoint | Remap layout rules |
| `.col-sm-*`, `.col-md-*` | same concept in BS5 grid | Validate breakpoints visually |
| `.col-md-offset-1` | `offset-md-1` | Replace class |

## JavaScript Plugin Compatibility

| Existing behavior | Current source | Migration decision |
| --- | --- | --- |
| Bootstrap collapse nav | Bootstrap 3 JS + jQuery | Use React-Bootstrap `Navbar` state |
| Smooth scroll | `js/smoothscroll.js` | Replace with CSS `scroll-behavior` or small client utility |
| WOW animations | `wow.min.js` + `animate.min.css` | Keep temporarily, later replace with CSS/Framer if needed |
| Isotope / prettyPhoto | `jquery.isotope.min.js`, `jquery.prettyPhoto.js` | Remove unless still actively required in migrated pages |
| Counter animation | `jquery.inview.min.js` + custom logic | Replace with lightweight React intersection observer |

## Parity Checklist (Per Template)
- Header/navbar spacing and collapse behavior match legacy.
- Hero section vertical rhythm and CTA hierarchy match.
- Card/listing layouts match at `mobile`, `tablet`, `desktop`.
- Footer link alignment and language switch position match.
- Form controls and buttons match in size and spacing.
- No critical layout shift after initial page load.

## High-Risk Areas
- Navbar collapse behavior on small screens.
- Grid behavior where `col-xs-*` was relied upon.
- Button variants (`btn-default` visual differences).
- Legacy custom CSS selectors that depend on Bootstrap 3 DOM structure.

## Acceptance Criteria
- No broken nav or content layout on primary routes.
- Screenshots for `index`, `machines`, `contact` are visually close to legacy.
- Legacy bridge CSS is under control (small, documented, intentionally temporary).
