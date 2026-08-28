"use client";

import { Check, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Experience({ locale }: { locale: Locale }) {
  const { experienceSection, experiences } = cvContent[locale];

  return (
    <AnimatedSection id="experience" className="section-shell experience-section">
      <div className="section-heading">
        <h2>{experienceSection.title}</h2>
        <p>{experienceSection.description}</p>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article key={experience.id} className="experience-row">
            <div className="experience-row__identity">
              <div className="experience-row__period">
                <span>{experience.period}</span>
                {index === 0 && <i aria-label={locale === "fr" ? "Poste actuel" : "Current role"} />}
              </div>
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              {experience.location && <small><MapPin size={13} />{experience.location}</small>}
            </div>

            <div className="experience-row__details">
              <p>{experience.description}</p>
              <ul>
                {experience.missions.map((mission) => (
                  <li key={mission}><Check size={15} />{mission}</li>
                ))}
              </ul>
              <div className="experience-row__tags">
                {experience.tags?.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
