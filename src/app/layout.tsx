import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan DUPRESSOIR — Chef de Projet & Responsable Informatique",
  description:
    "CV interactif de Bryan DUPRESSOIR. Chef de projet informatique spécialisé en Next.js, Supabase, et gestion d'infrastructure IT. 7+ ans d'expérience.",
  openGraph: {
    title: "Bryan DUPRESSOIR — CV Interactif",
    description:
      "Responsable Informatique & Chef de Projet. Next.js 16, Supabase, TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
