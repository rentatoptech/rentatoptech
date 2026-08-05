import { defineRouting } from "next-intl/routing";

// English lives at the bare root (no prefix) — the canonical default.
// Spanish is the only prefixed locale, at /es.
export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/legal-notice": { en: "/legal-notice", es: "/aviso-legal" },
    "/privacy-policy": { en: "/privacy-policy", es: "/politica-privacidad" },
  },
});
