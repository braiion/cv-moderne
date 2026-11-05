import type { ReactNode } from "react";
import { Archivo, JetBrains_Mono } from "next/font/google";
import type { Locale } from "@/lib/cv-data";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-jetbrains", display: "swap" });

const directionContract = `<!--
THESIS: A professional developer portfolio, dark by default (night sapphire) with a matching light theme; it leads with shipping web applications, AI framed as a method.
OWN-WORLD: Night sapphire #060c18 with sapphire #0042ac glows, ocean #00d3fb accents on dark, jade #83fd80 for the one action and live states, condensed uppercase headline, dark code and product-loop panels, colour portrait, continuous squircle corners, Archivo across widths, mono for data and code.
STORY: A recruiter sees role and promise, proof (BonneOccaz, RAG/CAG module), then chronology and skills, and downloads the CV or writes.
FIRST VIEWPORT: Left: availability chip, // role eyebrow, two-line condensed headline, intro, jade CV download and ghost BonneOccaz action, profil.ts code card. Right: straight colour portrait with sapphire offset, product-loop card low-right; facts strip and stack band below.
FORM: Night-sapphire developer portfolio, seed key 9b3533da.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function PortfolioDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale} className={`${archivo.variable} ${mono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full w-full overflow-x-hidden">
        <div hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js');try{const t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':true)}catch{}` }} />
        {children}
      </body>
    </html>
  );
}
