import type { MetadataRoute } from "next";
import { COMPANY } from "@/config/company";

const SITE = `https://${COMPANY.domain}`;
const PATHS = ["", "/legal-notice", "/privacy-policy"];
const ES_PATHS: Record<string, string> = {
  "": "/es",
  "/legal-notice": "/es/aviso-legal",
  "/privacy-policy": "/es/politica-privacidad",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${SITE}${path}`,
    alternates: {
      languages: {
        en: `${SITE}${path}`,
        es: `${SITE}${ES_PATHS[path]}`,
      },
    },
  }));
}
