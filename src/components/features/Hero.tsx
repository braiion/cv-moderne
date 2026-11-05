"use client";

import Image from "next/image";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import FlapText from "@/components/ui/FlapText";
import { Location } from "@/components/ui/Contact";
import { cvContent, type Locale } from "@/lib/cv-data";
import profilePhoto from "../../../public/Profil.png";

interface HeroProps {
  locale: Locale;
  downloadHref: string;
}

export default function Hero({ locale, downloadHref }: HeroProps) {
  const { personal, hero, project } = cvContent[locale];
  const fr = locale === "fr";
  const availability = hero.availability.split(" — ")[0];

  return (
    <>
      <section id="hero" className="hero">
        <p className="hero__watermark" aria-hidden="true">{personal.lastName}</p>
        <div className="hero__inner">
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="hero__availability">
                <span aria-hidden="true" />
                {hero.availability}
              </p>

              <h1 aria-label={hero.kicker}>
                {hero.headline.map((line) => <span key={line} aria-hidden="true">{line}</span>)}
              </h1>

              <p className="hero__role">
                <FlapText text={personal.title} delay={500} />
              </p>
              <p className="hero__intro">{hero.intro}</p>

              <div className="hero__actions">
                <a href={downloadHref} download className="button button--primary">
                  <Download size={18} aria-hidden="true" />
                  {hero.secondaryCta}
                </a>
                <a href={personal.bonneOccaz} target="_blank" rel="noreferrer" className="button button--ghost">
                  {hero.primaryCta}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero__stage" role="group" aria-label={fr ? "Profil et boucle produit" : "Profile and product loop"}>
              <div className="hero__ring" aria-hidden="true" />
              <div className="hero__orb" aria-hidden="true" />

              <figure className="hero__photo">
                <Image
                  src={profilePhoto}
                  alt={`${personal.firstName} ${personal.lastName}`}
                  fill
                  priority
                  sizes="(min-width: 960px) 26vw, 60vw"
                  className="object-cover object-[center_22%]"
                />
                <figcaption><MapPin size={12} aria-hidden="true" /><Location /></figcaption>
              </figure>

              <div className="hero__card hero__card--loop hero__loop">
                <p className="hero__card-head">{fr ? "Boucle produit" : "Product loop"}</p>
                <ol>
                  {hero.loop.map((step, index) => (
                    <li key={step.label} className={index === 3 ? "is-current" : undefined}>
                      {step.label}
                      {index === 3 && <FlapText className="hero__state" text={fr ? "EN PROD" : "SHIPPED"} delay={1100} />}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="hero__sticker" aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="58" fill="var(--jade)" />
                  <defs>
                    <path id="hero-sticker-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                  </defs>
                  <text fontFamily="var(--font-jetbrains), monospace" fontSize="9.6" letterSpacing="1.6" fill="var(--on-jade)">
                    <textPath href="#hero-sticker-path" textLength="270" lengthAdjust="spacing">{`${availability.toUpperCase()} · `}</textPath>
                  </text>
                </svg>
                <span><ArrowUpRight size={28} /></span>
              </div>
            </div>
          </div>

          <dl className="hero__facts" aria-label={fr ? "Repères du parcours" : "Career highlights"}>
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
            <div>
              <dt>BonneOccaz</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="stack-band" aria-hidden="true">
        <div className="stack-band__track">
          {[...project.tags, ...project.tags].map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)}
        </div>
      </div>
    </>
  );
}
