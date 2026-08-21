import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bryan Dupressoir — Full-Stack Developer & Product Engineer",
  description:
    "Portfolio de Bryan Dupressoir, développeur full-stack et Product Engineer spécialisé en Next.js, React, TypeScript et Supabase.",
  keywords: ["Full-Stack Developer", "Product Engineer", "Next.js", "React", "TypeScript", "Supabase", "Normandie"],
  openGraph: {
    title: "Bryan Dupressoir — Full-Stack Developer & Product Engineer",
    description:
      "10+ ans de parcours IT. Produits web conçus de l'idée à la production avec Next.js, React, TypeScript et Supabase.",
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
