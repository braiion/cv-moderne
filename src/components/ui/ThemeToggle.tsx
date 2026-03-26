"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      tabIndex={0}
      className="fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:text-blue-500 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:text-blue-400"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
