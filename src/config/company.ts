/**
 * Company identity, in one place — mirrors the pattern used in Factulink's
 * company.ts so a change of address is one edit, not a hunt through prose.
 */
export const COMPANY = {
  legalName: "RENTATOP TECH, S.L.",
  shortName: "Rentatoptech",
  taxId: "B26742510",
  address: {
    street: "Calle José Antonio Coderch, 50",
    postalCode: "28055",
    city: "Madrid",
    country: "España",
  },
  email: "info@rentatoptech.com",
  whatsapp: "34676460742",
  registry: {
    office: "Registro Mercantil de Madrid",
    entry: "Diario M-817620, Asiento 3327",
  },
  domain: "rentatoptech.com",
} as const;

export function fullAddress(): string {
  const { street, postalCode, city, country } = COMPANY.address;
  return `${street}, ${postalCode} ${city}, ${country}`;
}

/** Shown as the "last reviewed" date on every legal page. */
export const LEGAL_LAST_UPDATED = "agosto de 2026";
