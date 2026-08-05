export type Market = "spain" | "international";

export interface LocalizedUrl {
  en: string;
  es: string;
}

export interface ProjectExample {
  name: string;
  // Each site has its own i18n setup, not necessarily the same convention
  // as this one — link to whichever language version matches the
  // visitor's locale, falling back to the same URL when a site has no
  // Spanish/English twin.
  url: LocalizedUrl;
  // Optional descriptive anchor text (instead of the site's name) — a
  // legitimate SEO lever since this is a link to our own product, not a
  // third party: it passes real topical relevance instead of a generic
  // brand mention.
  linkText?: LocalizedUrl;
}

export interface Project {
  slug: string;
  name: string;
  categoryKey: string;
  taglineKey: string;
  market: Market;
  // At least one live example. Product projects have exactly one; agency
  // -style projects (e.g. Rental Sites, where the "product" is the
  // service, not a single public URL) can list several client sites.
  examples: ProjectExample[];
}

// categoryKey / taglineKey point into messages/{locale}.json under "projects.items.<slug>".
export const PROJECTS: Project[] = [
  {
    slug: "amplistay",
    name: "Amplistay",
    categoryKey: "rentals",
    taglineKey: "amplistay",
    market: "international",
    examples: [
      {
        name: "Amplistay",
        // English lives at the bare root, Spanish at /es.
        url: { en: "https://www.amplistay.com", es: "https://www.amplistay.com/es" },
        linkText: {
          en: "Direct bookings and stay extensions",
          es: "Reservas directas y ampliaciones de estancia",
        },
      },
    ],
  },
  {
    slug: "rentalotop",
    name: "Rentalotop",
    categoryKey: "rentals",
    taglineKey: "rentalotop",
    market: "international",
    examples: [
      {
        name: "Rentalotop",
        // Spanish lives at the bare root, English at /en.
        url: { en: "https://www.rentalotop.com/en", es: "https://www.rentalotop.com" },
        linkText: {
          es: "Limpieza de pisos turísticos",
          en: "Vacation rental cleaning services",
        },
      },
    ],
  },
  {
    slug: "rental-sites",
    name: "Rental Sites",
    categoryKey: "rentals",
    taglineKey: "rentalSites",
    market: "international",
    examples: [
      {
        name: "Villaescorialpark",
        // Spanish lives at the bare root, English at /en.
        url: { en: "https://villaescorialpark.com/en", es: "https://villaescorialpark.com" },
        linkText: {
          es: "Casa rural El Escorial 30 pax",
          en: "El Escorial rural house, 30 guests",
        },
      },
      {
        name: "Casa Hechizo",
        // Spanish only — no English version of this site exists.
        url: { en: "https://www.casahechizo.com", es: "https://www.casahechizo.com" },
        linkText: {
          es: "Casa Rural Segovia 10 pax",
          en: "Segovia rural house, 10 guests",
        },
      },
    ],
  },
  {
    slug: "factulink",
    name: "Factulink",
    categoryKey: "fintech",
    taglineKey: "factulink",
    market: "spain",
    examples: [
      {
        name: "Factulink",
        // Spanish only — no English version of the product exists.
        url: { en: "https://factulink.app", es: "https://factulink.app" },
        linkText: { es: "Stripe a Holded", en: "Stripe to Holded" },
      },
    ],
  },
];
