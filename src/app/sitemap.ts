import type { MetadataRoute } from "next";
import { shared } from "@/lib/cv-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: `${shared.portfolio}/`, en: `${shared.portfolio}/en` };
  return Object.values(languages).map((url) => ({ url, alternates: { languages } }));
}
