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
  const labels = locale === "fr"
    ? {
        navigation: "Navigation principale",
        home: "Bryan Dupressoir — accueil",
        menu: menuOpen ? "Fermer le menu" : "Ouvrir le menu",
      }
    : {
        navigation: "Primary navigation",
        home: "Bryan Dupressoir — home",
        menu: menuOpen ? "Close menu" : "Open menu",
      };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="site-header">
        <nav className="nav-shell" aria-label={labels.navigation}>
          <a href="#hero" className="brand-mark" aria-label={labels.home}>
            <span>BD</span>
            <span>Bryan Dupressoir</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? "location" : undefined}
                className={`nav-link ${activeSection === link.id ? "nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
              className="utility-button language-button"
              aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            >
              {content.localeLabel}
            </button>
            <ThemeToggle locale={locale} />
            <a href="#contact" className="nav-contact">
              {content.nav.contact}
            </a>
            <button
              type="button"
              className="utility-button mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={labels.menu}
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div id="mobile-navigation" className="nav-shell mobile-nav" aria-label={labels.navigation}>
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="product-page">
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
