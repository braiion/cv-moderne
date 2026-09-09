"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Hero from "@/components/features/Hero";
import ProjectShowcase from "@/components/features/ProjectShowcase";
import Experience from "@/components/features/Experience";
import Formation from "@/components/features/Formation";
import TechStack from "@/components/features/TechStack";
import Footer from "@/components/features/Footer";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Portfolio({ locale }: { locale: Locale }) {
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const content = cvContent[locale];

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 840px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

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
      <a href="#main-content" className="skip-link">{locale === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <header ref={headerRef} className="site-header">
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
            <a
              href={locale === "fr" ? "/en" : "/"}
              hrefLang={locale === "fr" ? "en" : "fr"}
              lang={locale === "fr" ? "en" : "fr"}
              className="utility-button language-button"
              aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            >
              {content.localeLabel}
            </a>
            <ThemeToggle locale={locale} />
            <a href="#contact" className="nav-contact">
              {content.nav.contact}
            </a>
            <button
              type="button"
              ref={menuButtonRef}
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
          <nav id="mobile-navigation" className="nav-shell mobile-nav" aria-label={locale === "fr" ? "Navigation mobile" : "Mobile navigation"}>
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>{content.nav.contact}</a>
            <a href={`/api/cv?lang=${locale}`} download>{content.hero.secondaryCta}</a>
          </nav>
        )}
      </header>

      <main id="main-content" tabIndex={-1} className="product-page">
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
