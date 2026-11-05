"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import desktopShot from "../../../public/work/bonneoccaz-desktop.webp";
import mobileShot from "../../../public/work/bonneoccaz-mobile.webp";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FlapText from "@/components/ui/FlapText";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function ProjectShowcase({ locale }: { locale: Locale }) {
  const { personal, project, projectsSection, costCard } = cvContent[locale];
  const showcaseRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: showcaseRef, offset: ["start end", "end start"] });
  const browserY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);
  const phoneY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [90, -70]);
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

      <figure className="showcase" ref={showcaseRef}>
        <motion.div className="showcase__browser" style={{ y: browserY }}>
          <div className="showcase__bar" aria-hidden="true"><i /><i /><i /><span>bonneoccaz.fr</span></div>
          <Image src={desktopShot} alt={locale === "fr" ? "Page d’accueil de BonneOccaz sur ordinateur" : "BonneOccaz home page on desktop"} sizes="(min-width: 960px) 70vw, 92vw" placeholder="blur" />
        </motion.div>
        <motion.div className="showcase__phone" style={{ y: phoneY }}>
          <Image src={mobileShot} alt={locale === "fr" ? "Page d’accueil de BonneOccaz sur mobile" : "BonneOccaz home page on mobile"} sizes="(min-width: 960px) 16rem, 40vw" placeholder="blur" />
        </motion.div>
        <figcaption>{projectsSection.showcase}</figcaption>
      </figure>

      <article className="case">
        <div className="case__story">
          <p className="case__meta">
            <FlapText className="case__status" text={project.status.toUpperCase()} delay={200} />
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
      <p className="confidential">{projectsSection.confidential}</p>
    </AnimatedSection>
  );
}
