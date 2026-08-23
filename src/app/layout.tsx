import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bryan Dupressoir — Développeur Full-Stack JS/TS & Product Engineer",
  description:
    "Développeur Full-Stack JavaScript/TypeScript et Product Engineer spécialisé en React, Next.js, Node.js, Supabase et PostgreSQL, en Normandie ou à distance.",
  keywords: ["Développeur Full-Stack", "Full-Stack Developer", "Product Engineer", "React Developer", "Next.js Developer", "JavaScript", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "API REST", "Chef de projet technique", "Normandie", "Remote"],
  openGraph: {
    title: "Bryan Dupressoir — Développeur Full-Stack JS/TS & Product Engineer",
    description:
      "10+ ans de parcours IT. Applications web conçues et mises en production avec React, Next.js, TypeScript, Node.js et Supabase/PostgreSQL.",
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
            __html: `try{document.documentElement.classList.toggle('dark',localStorage.getItem('theme')!=='light')}catch{}`,
          }}
        />
      </head>
      <body className="min-h-full w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
