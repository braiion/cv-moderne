import type { Metadata } from "next";
import { shared, type Locale } from "./cv-data";

export function portfolioMetadata(locale: Locale): Metadata {
  const title = locale === "fr"
    ? "Bryan Dupressoir — Développeur Full-Stack JS/TS · Product Engineer"
    : "Bryan Dupressoir — Full-Stack JS/TS Developer · Product Engineer";
  const description = locale === "fr"
    ? "Développeur Full-Stack JS/TS et Product Engineer, 7 ans de pilotage SI. Je conçois et livre des applications web avec un développement assisté par l’IA. Découvrez BonneOccaz, mon parcours et mon CV."
    : "Full-Stack JS/TS Developer and Product Engineer with 7 years running IT systems. I design and ship web applications with AI-assisted development. Explore BonneOccaz, my experience and my résumé.";
  const path = locale === "fr" ? "/" : "/en";
  return {
    metadataBase: new URL(shared.portfolio),
    title,
    description,
    authors: [{ name: "Bryan Dupressoir", url: shared.portfolio }],
    alternates: {
      canonical: path,
      languages: { fr: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: locale === "fr" ? "en_GB" : "fr_FR",
      images: [{ url: `/og?lang=${locale}`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/og?lang=${locale}`] },
  };
}
