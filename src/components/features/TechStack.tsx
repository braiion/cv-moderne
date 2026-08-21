"use client";

import { Braces, Database, Rocket, UsersRound } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

const icons = [Braces, Database, Rocket, UsersRound];

export default function TechStack({ locale }: { locale: Locale }) {
  const { skills, skillsSection } = cvContent[locale];

  return (
    <AnimatedSection id="skills" className="section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{skillsSection.eyebrow}</p>
          <h2>{skillsSection.title}</h2>
        </div>
        <p>{skillsSection.description}</p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {skills.map((category, index) => {
          const Icon = icons[index];
          return (
            <article
              key={category.name}
              className="skill-card rounded-3xl p-6 sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300">
                <Icon size={21} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-950 dark:text-white">{category.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
              </div>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
