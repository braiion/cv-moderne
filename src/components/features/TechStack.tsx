"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function TechStack({ locale }: { locale: Locale }) {
  const { skills, skillsSection } = cvContent[locale];

  return (
    <AnimatedSection id="skills" className="section">
      <header className="section__head">
        <h2>{skillsSection.title}</h2>
        <p>{skillsSection.description}</p>
      </header>

      <div className="skills">
        {skills.map((category) => (
          <article key={category.name} className="spot">
            <h3>{category.name}<span>{String(category.skills.length).padStart(2, "0")}</span></h3>
            <ul>
              {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
