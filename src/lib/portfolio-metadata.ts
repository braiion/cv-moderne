import type { Metadata } from "next";
import { shared, type Locale } from "./cv-data";

export function portfolioMetadata(locale: Locale): Metadata {
  const title = locale === "fr"
    ? "Bryan Dupressoir — Développeur Full-Stack & Product Builder"
    : "Bryan Dupressoir — Full-Stack Developer & Product Builder";
  const description = locale === "fr"
    ? "Parcours informatique depuis 2016. Développement React, Next.js, TypeScript et Supabase. Découvrez BonneOccaz, mes expériences et mon CV."
    : "An IT career since 2016. React, Next.js, TypeScript and Supabase development. Explore BonneOccaz, my experience and my résumé.";
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
