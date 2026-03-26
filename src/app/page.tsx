"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Hero from "@/components/features/Hero";
import Experience from "@/components/features/Experience";
import Formation from "@/components/features/Formation";
import TechStack from "@/components/features/TechStack";
import Footer from "@/components/features/Footer";
import PrintableCV from "@/components/features/PrintableCV";

export default function Home() {
  const printRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "CV_Bryan_DUPRESSOIR",
  });

  const handleDownload = useCallback(() => {
    handlePrint();
  }, [handlePrint]);

  // Scroll progress bar + active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100);
      }

      // Active section detection
      const sections = ["hero", "experience", "formation", "techstack"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", id: "hero", label: "Accueil" },
    { href: "#experience", id: "experience", label: "Expérience" },
    { href: "#formation", id: "formation", label: "Formation" },
    { href: "#techstack", id: "techstack", label: "Compétences" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Scroll progress bar */}
      <div
        className="scroll-progress no-print"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Theme toggle — fixed */}
      <div className="no-print">
        <ThemeToggle />
      </div>

      {/* Navigation anchors — sticky nav bar */}
      <nav
        className="no-print fixed top-0 left-0 z-40 flex w-full items-center justify-center gap-1 border-b border-slate-200/50 bg-white/70 px-4 py-3 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-950/70 sm:gap-2"
        role="navigation"
        aria-label="Navigation principale"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
              activeSection === link.id
                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
            aria-label={link.label}
          >
            {link.label}
            {activeSection === link.id && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-blue-500" />
            )}
          </a>
        ))}
      </nav>

      {/* Printable CV (hidden on screen, shown only for print) */}
      <PrintableCV ref={printRef} />

      {/* Interactive page (visible on screen, hidden during print) */}
      <div className="print:hidden">
        <Hero onDownload={handleDownload} />

        {/* Section divider */}
        <div className="flex items-center justify-center py-4">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="mx-3 h-1.5 w-1.5 rounded-full bg-blue-500/40" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>

        <Experience />

        <div className="flex items-center justify-center py-4">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <div className="mx-3 h-1.5 w-1.5 rounded-full bg-indigo-500/40" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>

        <Formation />

        <div className="flex items-center justify-center py-4">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="mx-3 h-1.5 w-1.5 rounded-full bg-cyan-500/40" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        <TechStack />
        <Footer />
      </div>
    </div>
  );
}
