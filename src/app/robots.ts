import type { MetadataRoute } from "next";
import { shared } from "@/lib/cv-data";

export default function robots(): MetadataRoute.Robots {
  return {
    // The PDF route carries contact details: keep well-behaved crawlers off it.
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${shared.portfolio}/sitemap.xml`,
  };
}
