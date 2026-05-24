# Machines Catalog Editing Guide

All machine products are managed in one file:

- [`src/content/machinesCatalog.ts`](../../src/content/machinesCatalog.ts)

When you add, edit, or remove a product there, the listing page and detail pages update automatically.

## Add a product

1. Open `src/content/machinesCatalog.ts`.
2. Add a new object to the `productCatalog` array.
3. Use a unique `id` and `slug` (URL-safe, lowercase, hyphen-separated).
4. Fill both `de` and `en` content blocks.
5. Put images in `public/images/` and reference them as `/images/your-file.jpg`.
6. Run:

```bash
npm run build
```

## Remove a product

1. Delete the product object from `productCatalog`.
2. Run `npm run build`.

## Edit a product

Update fields in the existing product object:

- Shared fields: `category`, `brand`, `year`, `priceEur`, `status`, `heroImage`, `galleryImages`, `featured`
- `priceEur` (optional): omit to show "Auf Anfrage" / "On request" on the product hero
- Localized fields (`locale.de` / `locale.en`): `title`, `summary`, `highlights`, `specs`, `applications`, CTA texts

## Required checklist

- `id` and `slug` are unique
- `slug` uses only lowercase letters, numbers, and hyphens
- Both `de` and `en` locale blocks exist
- `heroImage` path starts with `/images/`
- `highlights`, `specs`, and `applications` arrays are not empty

## URL format

Products are available at:

- `/de/machines/<slug>`
- `/en/machines/<slug>`

Example:

- `/de/machines/belt-grinding`
- `/en/machines/belt-grinding`

## Status values

Use one of:

- `available`
- `on-request`
- `sold`

Labels are translated automatically on listing and detail pages.

## Common mistakes

- Duplicate `slug` values (breaks routing and static generation)
- Missing `en` or `de` locale block
- Image path pointing outside `public/` (must be `/images/...`)
- Forgetting to run build before deploy

## Optional homepage cards

Homepage machine cards are still configured in:

- [`src/content/home.ts`](../../src/content/home.ts)

If you add a new product and want it on the homepage, add/update a card there and link to:

- `getMachinePath("de", "your-slug")` or `getMachinePath("en", "your-slug")`
