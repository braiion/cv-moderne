"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { cvContent, type Locale } from "@/lib/cv-data";
import profilePhoto from "../../../public/Profil.png";

interface HeroProps {
  locale: Locale;
  downloadHref: string;
}

export default function Hero({ locale, downloadHref }: HeroProps) {
  const { personal, hero } = cvContent[locale];

  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-orb pointer-events-none absolute -right-40 top-12 h-[34rem] w-[34rem] rounded-full" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 min-[900px]:grid-cols-[minmax(0,1fr)_360px] min-[900px]:gap-14 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/8 px-3.5 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,.12)]" />
            {hero.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400"
          >
            {personal.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="max-w-4xl text-balance text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 dark:text-white"
          >
            {hero.kicker}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-7 max-w-2xl text-pretty text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={personal.bonneOccaz}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              {hero.primaryCta}
              <ArrowUpRight size={17} />
            </a>
            <a href={downloadHref} download className="button-secondary">
              <Download size={17} />
              {hero.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36 }}
            className="mt-12 grid max-w-2xl grid-cols-3 border-y border-slate-200/80 py-5 dark:border-slate-800"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="border-l border-slate-200 px-3 first:border-l-0 first:pl-0 dark:border-slate-800 sm:px-6">
                <div className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400 sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
          className="profile-card relative mx-auto w-full max-w-[390px] overflow-hidden rounded-[2rem] p-3"
          aria-label={`${personal.firstName} ${personal.lastName}`}
        >
          <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1.45rem] bg-slate-200 dark:bg-slate-900">
            <Image
              src={profilePhoto}
              alt={`${personal.firstName} ${personal.lastName}`}
              fill
              priority
              sizes="(max-width: 1024px) 390px, 32vw"
              className="object-cover object-[center_15%] grayscale-[18%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-6 pb-6 pt-24 text-white">
              <p className="text-xl font-semibold">{personal.firstName} {personal.lastName}</p>
              <p className="mt-1 text-sm text-slate-300">{personal.subtitle}</p>
              <p className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                <MapPin size={14} className="text-blue-400" /> {personal.address}
              </p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
