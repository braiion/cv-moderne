import type { ReactNode } from "react";
import type { Locale } from "@/lib/cv-data";

export default function PortfolioDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full w-full overflow-x-hidden">
        <script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches)}catch{}` }} />
        {children}
      </body>
    </html>
  );
}
