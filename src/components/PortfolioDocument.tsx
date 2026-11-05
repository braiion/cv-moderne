import type { ReactNode } from "react";
import { Archivo, JetBrains_Mono } from "next/font/google";
import type { Locale } from "@/lib/cv-data";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-jetbrains", display: "swap" });

const directionContract = `<!--
THESIS: The CV as a confident product page with depth: a full-bleed sapphire field, massive condensed grotesque, ocean display type and jade reserved for signals.
OWN-WORLD: Sapphire #0042ac fields (hero, contact band), ocean #00d3fb display type and data, jade #83fd80 for the one action and live states, ice reading sections, continuous squircle corners from one radius scale, outlined surname watermark, Archivo across widths, mono only for dates and states.
STORY: A recruiter sees role and promise, proof (BonneOccaz, RAG/CAG module), then chronology and skills, and downloads the CV or writes.
FIRST VIEWPORT: Left: availability chip, three-line headline (solid, outline, ocean), role, intro, jade CV download and ghost BonneOccaz action. Right: tilted duotone portrait on an ocean sphere, product-loop card and spinning availability sticker; fact cards and stack band below.
FORM: Sapphire product page, layered hero, seed key 9b3533da.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function PortfolioDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale} className={`${archivo.variable} ${mono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full w-full overflow-x-hidden">
        <div hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        <script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches)}catch{}` }} />
        {children}
      </body>
    </html>
  );
}
