# rentatoptech

Company landing for **Rentatoptech, S.L.** — a short, bilingual (EN/ES) page
presenting the company and linking out to its products: [Amplistay](https://www.amplistay.com),
[Rentalotop](https://www.rentalotop.com), [Rental Sites](https://villaescorialpark.com)
and [Factulink](https://factulink.app).

Live at [rentatoptech.com](https://rentatoptech.com).

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + `next-intl` — same
pattern as the other repos in this org (see `rental-sites` for the canonical
reference). No database, no admin panel: every piece of content lives in code.

## Structure

```
src/
  app/
    layout.tsx          Root layout (html/body only — shared by both locale trees)
    [locale]/
      layout.tsx         Header, Footer, WhatsApp widget, locale metadata
      page.tsx            The landing page itself: hero, projects, about, contact
      legal-notice/       Aviso legal
      privacy-policy/     Política de privacidad
  components/            Header, Footer, ProjectCard, badges, widgets
  config/
    company.ts           Legal identity (CIF, address, registry, contact) — single source of truth
    projects.ts           The project cards: URLs, taglines, market/platform badges
  i18n/                   next-intl routing/navigation config
  messages/               en.json / es.json — all copy
public/logos/              Each product's own icon, copied from its own repo
```

## Language routing

English lives at the bare root (no prefix, canonical default). Spanish is the
only prefixed locale, at `/es` — same convention as Amplistay. Legal pages
have localized slugs (`/legal-notice` ↔ `/es/aviso-legal`,
`/privacy-policy` ↔ `/es/politica-privacidad`), defined in `src/i18n/routing.ts`.

Internal nav links use next-intl's `Link` (`@/i18n/navigation`), not plain
`<a href="#...">` — a bare hash anchor only scrolls if you're already on the
page that has that element, and breaks silently from `/legal-notice` or
`/privacy-policy`. For an anchor on the home page from anywhere else, use
`<Link href={{ pathname: "/", hash: "projects" }}>`.

## Adding or editing a project card

Everything about a card — URLs, category, market, platforms, anchor text —
lives in `src/config/projects.ts`. A few things worth knowing:

- **`examples`**: most projects have exactly one (the product itself).
  Agency-style projects with no single public URL (Rental Sites) can list
  several client sites instead.
- **`linkText`**: optional descriptive anchor text instead of the product/site
  name (e.g. Rentalotop links out as "vacation rental cleaning services", not
  "Rentalotop"). This is a legitimate SEO lever specifically *because* these
  are links to our own products, not third parties — it passes real topical
  relevance instead of a generic brand mention. Add it per example when it's
  worth it; skip it otherwise (`name` is the fallback).
- **`url` / `linkText` are `{ en, es }`**: each product has its own i18n setup,
  not necessarily this site's convention (Amplistay defaults to English at
  the root with `/es`; Rentalotop and Rental Sites default to Spanish at the
  root with `/en`; Factulink and some client sites have no English version at
  all — point both keys at the same URL in that case).
- **`platforms`**: `"web"` for all of them today, plus `"android"` for
  Rentalotop.
- **`logo`**: path under `public/logos/`, copied verbatim from the product's
  own repo (`src/app/icon.svg`, `public/logo.svg`, etc). Omit it for projects
  with no single product mark of their own.

Category and tagline text live in `messages/{en,es}.json` under
`projects.category.*` and `projects.items.*`, keyed by `categoryKey` /
`taglineKey` on the project.

## Company / legal data

`src/config/company.ts` holds the legal identity (name, CIF, address,
Mercantile Registry entry, contact email, WhatsApp number, social links) used
across the footer and the two legal pages — mirrors the pattern in
Factulink's own `company.ts`. Change it in one place.

## Deploy

Railway, production environment only (no dev environment for this project).
`main` is connected directly — every push deploys.

`package.json` pins `engines.node: ">=20"`. Without it, Nixpacks defaults to
Node 18 and the build fails outright (`@tailwindcss/oxide` and Next.js 16
both require Node ≥20). Don't remove it.

## Domain

DNS lives on Cloudflare (migrated from GoDaddy). `rentatoptech.com` redirects
to `www.rentatoptech.com` via a Cloudflare Redirect Rule — Railway doesn't do
apex↔www redirects on its own, unlike Vercel's "Primary Domain".
