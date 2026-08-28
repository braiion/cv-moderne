"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import type { Locale } from "@/lib/cv-data";

const subscribeToTheme = (callback: () => void) => {
  window.addEventListener("cv-theme-change", callback);
  return () => window.removeEventListener("cv-theme-change", callback);
};

const getThemeSnapshot = () => document.documentElement.classList.contains("dark");
const getServerThemeSnapshot = () => false;

export default function ThemeToggle({ locale }: { locale: Locale }) {
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event("cv-theme-change"));
  };

  const label = locale === "fr"
    ? isDark ? "Activer le thème clair" : "Activer le thème sombre"
    : isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className="utility-button"
    >
      <Moon size={16} className="dark:hidden" />
      <Sun size={16} className="hidden dark:block" />
    </button>
  );
}
