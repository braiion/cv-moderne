"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Experience({ locale }: { locale: Locale }) {
  const { experienceSection, experiences } = cvContent[locale];

  return (
    <AnimatedSection id="experience" className="section">
      <header className="section__head">
        <h2>{experienceSection.title}</h2>
        <p>{experienceSection.description}</p>
      </header>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <article key={experience.id} className="timeline__row">
            <p className="timeline__period">
              {experience.period}
              {index === 0 && <span className="timeline__now">{locale === "fr" ? "Poste actuel" : "Current role"}</span>}
            </p>
            <div className="timeline__identity">
              <h3>{experience.title}</h3>
              <p>{experience.company}{experience.location ? ` · ${experience.location}` : ""}</p>
            </div>
            <div className="timeline__details">
              <p className="timeline__lead">{experience.description}</p>
              {"note" in experience && <p className="timeline__note">{experience.note}</p>}
              <ul>
                {experience.missions.map((mission) => <li key={mission}>{mission}</li>)}
              </ul>
              <p className="slash-list slash-list--small">
                {experience.tags?.map((tag) => <span key={tag}>{tag}</span>)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
