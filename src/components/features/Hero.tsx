"use client";

import Image from "next/image";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import FlapText from "@/components/ui/FlapText";
import { cvContent, type Locale } from "@/lib/cv-data";
import profilePhoto from "../../../public/Profil.png";

interface HeroProps {
  locale: Locale;
  downloadHref: string;
}

export default function Hero({ locale, downloadHref }: HeroProps) {
  const { personal, hero, project } = cvContent[locale];

  return (
    <section id="hero" className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__availability">
            <span aria-hidden="true" />
            {hero.availability}
          </p>

          <h1>{hero.kicker}</h1>

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

        <aside className="hero__field" aria-label={locale === "fr" ? "Profil et boucle produit" : "Profile and product loop"}>
          <div className="hero__identity">
            <div className="hero__portrait">
              <Image
                src={profilePhoto}
                alt={`${personal.firstName} ${personal.lastName}`}
                fill
                priority
                sizes="(min-width: 960px) 30vw, 40vw"
                className="object-cover object-[center_22%]"
              />
            </div>
            <div className="hero__name">
              <p>{personal.firstName}<br />{personal.lastName}</p>
              <small><MapPin size={13} aria-hidden="true" />{personal.address}</small>
            </div>
          </div>

          <div className="hero__loop">
            <p className="hero__loop-title">{locale === "fr" ? "Boucle produit" : "Product loop"}</p>
            <ol>
              {hero.loop.map((step, index) => (
                <li key={step.label} className={index === 3 ? "is-current" : undefined}>
                  <strong>{step.label}</strong>
                  <span>{step.note}</span>
                  {index === 3 && <FlapText className="hero__state" text={locale === "fr" ? "EN PROD" : "SHIPPED"} delay={1100} />}
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      <dl className="hero__facts" aria-label={locale === "fr" ? "Repères du parcours" : "Career highlights"}>
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
    </section>
  );
}
