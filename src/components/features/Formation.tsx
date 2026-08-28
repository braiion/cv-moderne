"use client";

import { GraduationCap } from "lucide-react";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Formation({ locale }: { locale: Locale }) {
  const { education, skillsSection } = cvContent[locale];

  return (
    <section className="education-section" aria-labelledby="education-title">
      <div className="education-panel">
        <div className="education-panel__title">
          <span><GraduationCap size={20} /></span>
          <h2 id="education-title">{skillsSection.education}</h2>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.id}>
              <time>{item.year}</time>
              <div>
                <h3>{item.diploma}</h3>
                <p>{item.school}</p>
                {item.description && <small>{item.description}</small>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
