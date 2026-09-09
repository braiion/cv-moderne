import type { MetadataRoute } from "next";
import { shared } from "@/lib/cv-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${shared.portfolio}/sitemap.xml`,
  };
}
