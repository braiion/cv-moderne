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

const CODE_STACK = ["React", "Next.js", "TypeScript", "Supabase"];

export default function Hero({ locale, downloadHref }: HeroProps) {
  const { personal, hero, project } = cvContent[locale];
  const fr = locale === "fr";
  const method = fr ? ["specs", "incréments", "revue", "tests"] : ["specs", "increments", "review", "tests"];
  const quote = (items: readonly string[]) => items.map((item, index) => (
    <span key={item}><span className="s">&quot;{item}&quot;</span>{index < items.length - 1 ? ", " : ""}</span>
  ));

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero__inner">
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="hero__availability">
                <span aria-hidden="true" />
                {hero.availability}
              </p>
              <p className="hero__eyebrow">{hero.eyebrow}</p>

              <h1 aria-label={hero.kicker}>
                {hero.headline.map((line) => <span key={line} aria-hidden="true">{line}</span>)}
              </h1>

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

              <figure className="hero__code" aria-label={fr ? "Résumé du profil sous forme de code" : "Profile summary as code"}>
                <header aria-hidden="true"><i /><i /><i /><span>{hero.codeFile}</span></header>
                <pre>
                  <span className="k">const</span> {fr ? "profil" : "profile"} = {"{"}{"\n"}
                  {"  "}role: <span className="s">&quot;{hero.eyebrow}&quot;</span>,{"\n"}
                  {"  "}stack: [{quote(CODE_STACK)}],{"\n"}
                  {"  "}{fr ? "methode" : "method"}: [{quote(method)}],{"\n"}
                  {"  "}{fr ? "disponible" : "available"}: <span className="k">true</span>, <span className="c">{fr ? "// remote ou Normandie" : "// remote or Normandy"}</span>{"\n"}
                  {"};"}
                </pre>
              </figure>
            </div>

            <div className="hero__stage">
              <figure className="hero__photo">
                <Image
                  src={profilePhoto}
                  alt={`${personal.firstName} ${personal.lastName}`}
                  fill
                  priority
                  sizes="(min-width: 960px) 25rem, 90vw"
                  className="object-cover object-[center_22%]"
                />
                <figcaption><MapPin size={12} aria-hidden="true" /><Location /></figcaption>
              </figure>

              <div className="hero__card hero__loop">
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
