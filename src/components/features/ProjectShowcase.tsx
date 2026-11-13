"use client";

import type { StaticImageData } from "next/image";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import desktopShot from "../../../public/work/bonneoccaz-desktop.webp";
import mobileShot from "../../../public/work/bonneoccaz-mobile.webp";
import revGuessrDesktop from "../../../public/work/revguessr-desktop.webp";
import revGuessrMobile from "../../../public/work/revguessr-mobile.webp";
import paddockDesktop from "../../../public/work/paddock-studio-desktop.webp";
import paddockMobile from "../../../public/work/paddock-studio-mobile.webp";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DeviceShowcase from "@/components/ui/DeviceShowcase";
import FlapText from "@/components/ui/FlapText";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function ProjectShowcase({ locale }: { locale: Locale }) {
  const { personal, project, projectsSection, costCard, otherProjects } = cvContent[locale];
  const shots: Record<string, { desktop: StaticImageData; mobile: StaticImageData }> = {
    revguessr: { desktop: revGuessrDesktop, mobile: revGuessrMobile },
    "paddock-studio": { desktop: paddockDesktop, mobile: paddockMobile },
  };
  const labels = locale === "fr"
    ? {
        module: "Module ciblé",
        question: "Question utilisateur",
        retrieval: "RAG · récupération",
        retrievalNote: "Supabase/PostgreSQL · sources citées",
        memory: "CAG · contexte stable, en option",
        answer: "Réponse contextualisée",
        answerNote: "citations validées ou repli",
        example: "« Comment publier une annonce ? »",
        features: "Fonctionnalités",
        stack: "Stack",
      }
    : {
        module: "Focused module",
        question: "User question",
        retrieval: "RAG · retrieval",
        retrievalNote: "Supabase/PostgreSQL · cited sources",
        memory: "CAG · optional stable context",
        answer: "Contextual answer",
        answerNote: "validated citations or fallback",
        example: "“How do I publish a listing?”",
        features: "Features",
        stack: "Stack",
      };

  return (
    <AnimatedSection id="projects" className="section project">
      <header className="section__head">
        <h2>{projectsSection.title}</h2>
        <p>{projectsSection.description}</p>
      </header>

      <DeviceShowcase
        bar="bonneoccaz.fr"
        desktop={desktopShot}
        mobile={mobileShot}
        desktopAlt={locale === "fr" ? "Page d’accueil de BonneOccaz sur ordinateur" : "BonneOccaz home page on desktop"}
        mobileAlt={locale === "fr" ? "Page d’accueil de BonneOccaz sur mobile" : "BonneOccaz home page on mobile"}
        caption={projectsSection.showcase}
      />

      <article className="case">
        <div className="case__story">
          <p className="case__meta">
            <FlapText className="case__status" text={project.status} delay={200} />
            <span>{projectsSection.role}</span>
          </p>
          <h3>{project.name}</h3>
          <p className="case__tagline">{project.tagline}</p>
          <p className="case__description">{project.description}</p>

          <figure className="cost-card" aria-label={costCard.title}>
            <p className="cost-card__head"><strong>Bonne Occaz.</strong><span>{costCard.vehicle}</span></p>
            <dl>
              <div><dt>{costCard.price}</dt><dd>{costCard.priceValue}</dd></div>
              <div><dt>{costCard.fees}</dt><dd>{costCard.feesValue}</dd></div>
            </dl>
            <p className="cost-card__total"><span>{costCard.total}</span><strong>{costCard.totalValue}</strong></p>
            <figcaption className="cost-card__note">{costCard.note}</figcaption>
          </figure>

          <h4 className="case__label">{labels.features}</h4>
          <ul className="case__features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>

          <h4 className="case__label">{labels.stack}</h4>
          <p className="slash-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </p>

          <a href={personal.bonneOccaz} target="_blank" rel="noreferrer" className="text-link">
            {projectsSection.visit} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <figure className="engine spot" aria-label={projectsSection.architecture}>
          <figcaption className="engine__head">
            <span>{projectsSection.architecture}</span>
            <span className="engine__badge"><i aria-hidden="true" />{labels.module}</span>
          </figcaption>

          <ol className="engine__flow">
            <li>
              <small>{labels.question}</small>
              <strong>{labels.example}</strong>
            </li>
            <li className="engine__arrow" aria-hidden="true"><ArrowDown size={18} /></li>
            <li className="is-accent">
              <small>{labels.retrieval}</small>
              <strong>{labels.retrievalNote}</strong>
            </li>
            <li className="engine__arrow" aria-hidden="true"><ArrowDown size={18} /></li>
            <li>
              <small>{labels.answer}</small>
              <strong>{labels.answerNote}</strong>
            </li>
          </ol>

          <p className="engine__cache"><span>CAG</span>{labels.memory}</p>
          <p className="engine__scope">{projectsSection.aiScope}</p>

          <details className="engine__details">
            <summary>{projectsSection.technicalDetails}<Plus size={18} aria-hidden="true" /></summary>
            <p>{projectsSection.corpus}</p>
            <p>{projectsSection.safeguards}</p>
            <p>{projectsSection.evaluation}</p>
          </details>
        </figure>
      </article>

      <div className="evidence">
        <h3>{projectsSection.examplesTitle}</h3>
        {projectsSection.examples.map((example) => (
          <article key={example.title} className="spot">
            <h4>{example.title}</h4>
            <p>{example.body}</p>
          </article>
        ))}
      </div>
      <section className="side-projects" aria-labelledby="side-projects-title">
        <header className="side-projects__head">
          <h3 id="side-projects-title">{projectsSection.otherTitle}</h3>
          <p>{projectsSection.otherDescription}</p>
        </header>
        <div className="side-projects__grid">
          {otherProjects.map((item) => (
            <article key={item.id} className="side-project">
              <DeviceShowcase
                className="showcase--compact"
                bar={item.showcase.bar}
                desktop={shots[item.id].desktop}
                mobile={shots[item.id].mobile}
                desktopAlt={item.showcase.desktopAlt}
                mobileAlt={item.showcase.mobileAlt}
                caption={item.showcase.caption}
              />
              <div className="side-project__body">
                <div>
                  <p className="case__meta">
                    <span className="case__status">{item.status}</span>
                    <span>{item.kind}</span>
                  </p>
                  <h4>{item.name}</h4>
                  <p className="side-project__description">{item.description}</p>
                  <p className="slash-list slash-list--small">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </p>
                  {"url" in item && item.url && (
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-link">
                      {projectsSection.otherVisit} <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <div>
                  <h5 className="case__label">{labels.features}</h5>
                  <ul className="case__features">
                    {item.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
