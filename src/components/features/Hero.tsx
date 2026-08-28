"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Download,
  MapPin,
  PanelsTopLeft,
  RefreshCw,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";
import { cvContent, type Locale } from "@/lib/cv-data";
import profilePhoto from "../../../public/Profil.png";

interface HeroProps {
  locale: Locale;
  downloadHref: string;
}

const loopIcons = [Search, PanelsTopLeft, Braces, Rocket, RefreshCw];
const spring = { type: "spring" as const, bounce: 0, duration: 0.4 };

export default function Hero({ locale, downloadHref }: HeroProps) {
  const { personal, hero } = cvContent[locale];

  return (
    <section id="hero" className="product-hero">
      <div className="product-hero__wash" aria-hidden="true" />

      <div className="product-hero__layout">
        <div className="product-hero__copy">
          <div className="availability-badge">
            <span aria-hidden="true" />
            {hero.availability}
          </div>

          <h1>{hero.kicker}</h1>
          <p className="product-hero__role">{personal.title}</p>
          <p className="product-hero__intro">{hero.intro}</p>

          <div className="product-hero__actions">
            <motion.a
              href={personal.bonneOccaz}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              {hero.primaryCta}
              <ArrowUpRight size={17} />
            </motion.a>
            <motion.a
              href={downloadHref}
              download
              className="button-secondary"
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              <Download size={17} />
              {hero.secondaryCta}
            </motion.a>
          </div>

          <div className="product-proofline" aria-label={locale === "fr" ? "Repères du parcours" : "Career highlights"}>
            {hero.stats.map((stat) => (
              <p key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </p>
            ))}
          </div>
        </div>

        <motion.aside
          className="build-board"
          aria-label={locale === "fr" ? "Boucle de construction produit" : "Product build loop"}
          initial={false}
          whileHover={{ y: -4 }}
          transition={spring}
        >
          <div className="build-board__topline">
            <span>{locale === "fr" ? "Boucle produit" : "Product loop"}</span>
            <span className="live-state"><i /> LIVE</span>
          </div>

          <div className="builder-id">
            <div className="builder-id__photo">
              <Image
                src={profilePhoto}
                alt={`${personal.firstName} ${personal.lastName}`}
                fill
                priority
                sizes="72px"
                className="object-cover object-[center_15%]"
              />
            </div>
            <div>
              <p>{personal.firstName} {personal.lastName}</p>
              <span>{personal.title}</span>
              <small><MapPin size={12} />{personal.address}</small>
            </div>
          </div>

          <ol className="build-loop">
            {hero.loop.map((step, index) => {
              const Icon = loopIcons[index];
              const isCurrent = index === 3;
              return (
                <li key={step.label} className={isCurrent ? "is-current" : undefined}>
                  <span className="build-loop__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="build-loop__icon"><Icon size={16} /></span>
                  <span className="build-loop__label">
                    <strong>{step.label}</strong>
                    <small>{step.note}</small>
                  </span>
                  {isCurrent && <span className="build-loop__state">{locale === "fr" ? "en prod" : "shipped"}</span>}
                </li>
              );
            })}
          </ol>

          <div className="release-note">
            <Sparkles size={16} />
            <span>{hero.release}</span>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
