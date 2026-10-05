import type { ReactNode } from "react";
import { Archivo, JetBrains_Mono } from "next/font/google";
import type { Locale } from "@/lib/cv-data";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-jetbrains", display: "swap" });

const directionContract = `<!--
THESIS: The CV as an International Typographic Style poster: a strict grid, massive grotesque type and one frank cobalt field; it refuses the floating-card developer portfolio.
OWN-WORLD: Cool paper white and near-black ink, cobalt #2340ff owning whole fields (hero identity column, contact band), 2px ink rules, slash-separated lists instead of chips, Archivo across widths, mono only for dates and states.
STORY: A recruiter sees role and promise, proof (BonneOccaz, RAG/CAG module), then chronology and skills, and downloads the CV or writes.
FIRST VIEWPORT: Left 8 columns: availability, condensed headline up to 6rem, role, intro, cobalt CV download and BonneOccaz action. Right 4 columns: cobalt field with duotone portrait, identity and the five-step product loop; facts strip below.
FORM: Swiss poster, grounded list position 5, seed key 9b3533da.
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
