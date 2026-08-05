export type Market = "spain" | "international";

export interface Project {
  slug: string;
  name: string;
  // Each product has its own i18n setup, not necessarily the same
  // convention as this site — link to whichever language version matches
  // the visitor's locale here, falling back to `en` when a product has no
  // Spanish/English twin.
  url: { en: string; es: string };
  categoryKey: string;
  taglineKey: string;
  market: Market;
}

// categoryKey / taglineKey point into messages/{locale}.json under "projects.items.<slug>".
export const PROJECTS: Project[] = [
  {
    slug: "amplistay",
    name: "Amplistay",
    // English lives at the bare root, Spanish at /es.
    url: { en: "https://www.amplistay.com", es: "https://www.amplistay.com/es" },
    categoryKey: "rentals",
    taglineKey: "amplistay",
    market: "international",
  },
  {
    slug: "rentalotop",
    name: "Rentalotop",
    // Spanish lives at the bare root, English at /en.
    url: { en: "https://www.rentalotop.com/en", es: "https://www.rentalotop.com" },
    categoryKey: "rentals",
    taglineKey: "rentalotop",
    market: "international",
  },
  {
    slug: "rental-sites",
    name: "Rental Sites",
    // Spanish lives at the bare root, English at /en.
    url: { en: "https://villaescorialpark.com/en", es: "https://villaescorialpark.com" },
    categoryKey: "rentals",
    taglineKey: "rentalSites",
    market: "international",
  },
  {
    slug: "factulink",
    name: "Factulink",
    // Spanish only — no English version of the product exists.
    url: { en: "https://factulink.app", es: "https://factulink.app" },
    categoryKey: "fintech",
    taglineKey: "factulink",
    market: "spain",
  },
];
