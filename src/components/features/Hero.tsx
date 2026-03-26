"use client";

import {
  MapPin,
  Phone,
  Mail,
  Download,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/cv-data";
import { useEffect, useState } from "react";

interface HeroProps {
  onDownload: () => void;
}

function useTypingEffect(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, done };
}

// Pre-computed particle positions to avoid hydration mismatch (no Math.random)
const PARTICLES = [
  { w: 3, h: 4, x: 12, y: 8, dy: -35, dx: 5, dur: 5.2, del: 0.3 },
  { w: 4, h: 3, x: 87, y: 22, dy: -45, dx: -8, dur: 6.1, del: 1.1 },
  { w: 2, h: 5, x: 34, y: 65, dy: -50, dx: 3, dur: 4.8, del: 0.7 },
  { w: 5, h: 2, x: 56, y: 14, dy: -30, dx: -6, dur: 7.3, del: 2.0 },
  { w: 3, h: 3, x: 91, y: 78, dy: -40, dx: 9, dur: 5.5, del: 0.1 },
  { w: 4, h: 4, x: 23, y: 45, dy: -55, dx: -4, dur: 6.7, del: 1.8 },
  { w: 2, h: 3, x: 68, y: 90, dy: -35, dx: 7, dur: 4.3, del: 2.5 },
  { w: 5, h: 5, x: 45, y: 33, dy: -42, dx: -10, dur: 7.8, del: 0.5 },
  { w: 3, h: 2, x: 78, y: 55, dy: -38, dx: 2, dur: 5.9, del: 1.4 },
  { w: 4, h: 3, x: 8, y: 72, dy: -48, dx: -3, dur: 6.4, del: 2.2 },
  { w: 2, h: 4, x: 52, y: 18, dy: -33, dx: 8, dur: 4.6, del: 0.9 },
  { w: 3, h: 5, x: 95, y: 42, dy: -44, dx: -7, dur: 7.1, del: 1.6 },
  { w: 5, h: 3, x: 17, y: 88, dy: -52, dx: 4, dur: 5.1, del: 2.8 },
  { w: 4, h: 2, x: 63, y: 5, dy: -36, dx: -5, dur: 6.8, del: 0.4 },
  { w: 2, h: 3, x: 40, y: 60, dy: -41, dx: 6, dur: 4.4, del: 1.9 },
];

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/10"
          style={{
            width: p.w,
            height: p.h,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, p.dy, 0],
            x: [0, p.dx, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.del,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero({ onDownload }: HeroProps) {
  const { displayed: typedSummary, done: summaryDone } = useTypingEffect(
    personalInfo.summary,
    20
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6"
    >
      {/* Animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-600/25 to-indigo-600/15 blur-[100px]" />
        <div className="animate-float-delayed absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10 blur-[100px]" />
        <div className="animate-pulse-glow absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 blur-[80px]" />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 opacity-60 blur-sm dark:opacity-40" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500" />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white dark:border-slate-900 sm:h-32 sm:w-32">
              <Image
                src="/Profil.png"
                alt={`Photo de ${personalInfo.firstName} ${personalInfo.lastName}`}
                fill
                className=" object-cover object-[center_10%]"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Sparkles size={12} />
            Disponible pour de nouvelles opportunités
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
            {personalInfo.firstName}{" "}
            <span className="animate-gradient-shift bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400">
              {personalInfo.lastName}
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl lg:text-2xl"
        >
          {personalInfo.title}{" "}
          <span className="mx-1 inline-block h-5 w-px bg-slate-400/50 align-middle dark:bg-slate-500" />{" "}
          {personalInfo.subtitle}
        </motion.p>

        {/* Typing summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-5 w-full max-w-xl px-2"
        >
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
            {typedSummary}
            {!summaryDone && (
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-blue-500 align-middle" />
            )}
          </p>
        </motion.div>

        {/* Contact pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="mt-7 flex w-full flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3"
        >
          {[
            {
              href: `mailto:${personalInfo.email}`,
              icon: <Mail size={14} />,
              text: personalInfo.email,
              label: "Envoyer un email",
            },
            {
              href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
              icon: <Phone size={14} />,
              text: personalInfo.phone,
              label: "Appeler",
            },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm text-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:text-slate-300 sm:w-auto"
              aria-label={item.label}
            >
              {item.icon}
              {item.text}
            </motion.a>
          ))}
          <span className="glass-card flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 sm:w-auto">
            <MapPin size={14} />
            {personalInfo.address}
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          className="mt-8 flex w-full items-center justify-center gap-3 sm:gap-4"
        >
          <motion.button
            onClick={onDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 sm:px-7 sm:py-3.5"
            aria-label="Télécharger le CV en PDF"
            tabIndex={0}
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 transition-opacity group-hover:opacity-100" />
            <Download size={16} />
            Télécharger CV
          </motion.button>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-600 transition-all duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400 sm:px-6 sm:py-3.5"
            aria-label="Voir mon parcours"
          >
            Découvrir
            <ChevronDown size={16} />
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="mt-12 grid w-full max-w-xs grid-cols-3 gap-6 sm:mt-14 sm:max-w-sm sm:gap-8"
        >
          {[
            { value: "7+", label: "Années d'exp." },
            { value: "3", label: "Postes clés" },
            { value: "10+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-300 p-1 dark:border-slate-600"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-blue-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
