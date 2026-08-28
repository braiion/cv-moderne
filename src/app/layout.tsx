import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bryan Dupressoir — Product Builder & Développeur Full-Stack",
  description:
    "Product Builder et développeur Full-Stack JavaScript/TypeScript : produits 0→1, React, Next.js, Supabase/PostgreSQL et IA appliquée avec RAG/CAG.",
  keywords: ["Product Builder", "Product Engineer", "Développeur Full-Stack", "Full-Stack Developer", "React Developer", "Next.js Developer", "JavaScript", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "RAG", "CAG", "IA générative", "API REST", "Normandie", "Remote"],
  openGraph: {
    title: "Bryan Dupressoir — Product Builder & Développeur Full-Stack",
    description:
      "10+ ans de parcours IT. Produits web conçus, développés et livrés avec React, Next.js, TypeScript, Supabase/PostgreSQL et IA appliquée.",
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
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches)}catch{}`,
          }}
        />
      </head>
      <body
        className="min-h-full w-full overflow-x-hidden"
        data-design-seed="cfa9647c"
        data-design-thesis="A product workbench that shows the build loop before the résumé"
        data-design-world="Mineral canvas, ink surfaces, signal green states, tactile controls"
        data-design-story="Understand the builder, inspect BonneOccaz, verify delivery breadth, make contact"
        data-design-first-viewport="Large product promise left, live build loop and builder identity right, actions in the reading path"
        data-design-form="Product field notebook and live build board, grounded direction 3"
        data-design-finish="unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance"
      >{children}</body>
    </html>
  );
}
