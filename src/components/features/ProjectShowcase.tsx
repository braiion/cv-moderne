"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  MessageSquareText,
  Search,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function ProjectShowcase({ locale }: { locale: Locale }) {
  const { personal, project, projectsSection } = cvContent[locale];
  const labels = locale === "fr"
    ? {
        module: "Module ciblé",
        question: "Question utilisateur",
        retrieval: "RAG · récupération",
        memory: "CAG · contexte réutilisé",
        answer: "Réponse contextualisée",
        example: "Quel SUV hybride correspond à mon usage ?",
      }
    : {
        module: "Focused module",
        question: "User question",
        retrieval: "RAG · retrieval",
        memory: "CAG · reused context",
        answer: "Contextual answer",
        example: "Which hybrid SUV fits my needs?",
      };

  return (
    <AnimatedSection id="projects" className="section-shell project-section">
      <div className="section-heading section-heading--project">
        <div>
          <h2>{projectsSection.title}</h2>
        </div>
        <p>{projectsSection.description}</p>
      </div>

      <article className="product-case">
        <div className="product-case__story">
          <div className="product-case__meta">
            <span>{project.status}</span>
            <span>{projectsSection.role}</span>
          </div>

          <h3>{project.name}</h3>
          <p className="product-case__tagline">{project.tagline}</p>
          <p className="product-case__description">{project.description}</p>

          <ul className="product-case__features">
            {project.features.map((feature) => (
              <li key={feature}>
                <span><Check size={13} /></span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="product-case__tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>

          <a href={personal.bonneOccaz} target="_blank" rel="noreferrer" className="product-link">
            {projectsSection.visit} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="context-engine" aria-label={projectsSection.architecture}>
          <div className="context-engine__header">
            <div>
              <span>{projectsSection.architecture}</span>
              <strong>BonneOccaz · RAG/CAG</strong>
            </div>
            <span className="context-engine__status"><i />{labels.module}</span>
          </div>

          <div className="advisor-question">
            <Search size={17} />
            <span>{labels.example}</span>
            <ArrowRight size={16} />
          </div>

          <div className="context-flow">
            <div className="context-node">
              <span><MessageSquareText size={17} /></span>
              <small>01</small>
              <strong>{labels.question}</strong>
            </div>
            <div className="context-flow__line" aria-hidden="true"><ArrowRight size={15} /></div>
            <div className="context-node context-node--accent">
              <span><Database size={17} /></span>
              <small>02</small>
              <strong>{labels.retrieval}</strong>
            </div>
            <div className="context-flow__line" aria-hidden="true"><ArrowRight size={15} /></div>
            <div className="context-node">
              <span><Sparkles size={17} /></span>
              <small>03</small>
              <strong>{labels.answer}</strong>
            </div>
          </div>

          <div className="context-cache">
            <span>CACHE</span>
            <strong>{labels.memory}</strong>
            <div aria-hidden="true"><i /><i /><i /><i /></div>
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}
