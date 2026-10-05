"use client";

import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FlapText from "@/components/ui/FlapText";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function ProjectShowcase({ locale }: { locale: Locale }) {
  const { personal, project, projectsSection } = cvContent[locale];
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

      <article className="case">
        <div className="case__story">
          <p className="case__meta">
            <FlapText className="case__status" text={project.status.toUpperCase()} delay={200} />
            <span>{projectsSection.role}</span>
          </p>
          <h3>{project.name}</h3>
          <p className="case__tagline">{project.tagline}</p>
          <p className="case__description">{project.description}</p>

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

        <figure className="engine" aria-label={projectsSection.architecture}>
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
          <article key={example.title}>
            <h4>{example.title}</h4>
            <p>{example.body}</p>
          </article>
        ))}
      </div>
      <p className="confidential">{projectsSection.confidential}</p>
    </AnimatedSection>
  );
}
