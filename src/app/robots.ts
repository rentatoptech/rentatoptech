import type { MetadataRoute } from "next";
import { COMPANY } from "@/config/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${COMPANY.domain}/sitemap.xml`,
  };
}
