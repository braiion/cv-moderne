"use client";

import { Braces, Database, Rocket, UsersRound } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

const icons = [Braces, Database, Rocket, UsersRound];

export default function TechStack({ locale }: { locale: Locale }) {
  const { skills, skillsSection } = cvContent[locale];

  return (
    <AnimatedSection id="skills" className="section-shell skills-section">
      <div className="section-heading">
        <h2>{skillsSection.title}</h2>
        <p>{skillsSection.description}</p>
      </div>

      <div className="capability-map">
        {skills.map((category, index) => {
          const Icon = icons[index];
          return (
            <article key={category.name} className="capability-row">
              <div className="capability-row__title">
                <span><Icon size={20} /></span>
                <h3>{category.name}</h3>
              </div>
              <div className="capability-row__skills">
                {category.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
