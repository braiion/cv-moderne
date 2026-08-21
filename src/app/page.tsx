"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Hero from "@/components/features/Hero";
import ProjectShowcase from "@/components/features/ProjectShowcase";
import Experience from "@/components/features/Experience";
import Formation from "@/components/features/Formation";
import TechStack from "@/components/features/TechStack";
import Footer from "@/components/features/Footer";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("fr");
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const content = cvContent[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const updateSection = () => {
      const sections = ["hero", "projects", "experience", "skills", "contact"];
      for (let index = sections.length - 1; index >= 0; index--) {
        const section = document.getElementById(sections[index]);
        if (section && section.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[index]);
          break;
        }
      }
    };
    updateSection();
    window.addEventListener("scroll", updateSection, { passive: true });
    return () => window.removeEventListener("scroll", updateSection);
  }, []);

  const navLinks = [
    { id: "hero", label: content.nav.home },
    { id: "projects", label: content.nav.projects },
    { id: "experience", label: content.nav.experience },
    { id: "skills", label: content.nav.skills },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav className="nav-shell mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2" aria-label="Navigation principale">
          <a href="#hero" className="flex items-center gap-3 rounded-xl px-2 py-1.5" aria-label="Bryan Dupressoir — accueil">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-xs font-black text-white dark:bg-white dark:text-slate-950">BD</span>
            <span className="hidden text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:inline">Bryan Dupressoir</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? "page" : undefined}
                className={`nav-link ${activeSection === link.id ? "nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
              className="utility-button font-mono text-xs font-bold"
              aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            >
              {content.localeLabel}
            </button>
            <ThemeToggle />
            <a href="#contact" className="ml-1 hidden rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-300 sm:inline-flex">
              {content.nav.contact}
            </a>
            <button type="button" className="utility-button mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu">
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="nav-shell mx-auto mt-2 grid max-w-6xl gap-1 rounded-2xl p-2 md:hidden">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <Hero locale={locale} downloadHref={`/api/cv?lang=${locale}`} />
        <ProjectShowcase locale={locale} />
        <Experience locale={locale} />
        <TechStack locale={locale} />
        <Formation locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
