"use client";

import { CheckCircle2, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Experience({ locale }: { locale: Locale }) {
  const { experienceSection, experiences } = cvContent[locale];

  return (
    <AnimatedSection id="experience" className="section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{experienceSection.eyebrow}</p>
          <h2>{experienceSection.title}</h2>
        </div>
        <p>{experienceSection.description}</p>
      </div>

      <div className="relative mt-14">
        <div className="absolute bottom-0 left-[7px] top-3 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block" />
        <div className="space-y-5 sm:pl-10">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="experience-card relative rounded-3xl p-6 sm:p-8"
            >
              <span className="absolute -left-[39px] top-9 hidden h-3.5 w-3.5 rounded-full border-[3px] border-background bg-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,.35)] sm:block" />
              <div className="grid gap-6 min-[900px]:grid-cols-[240px_1fr] min-[900px]:gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
                <div>
                  <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">{experience.period}</span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{experience.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{experience.company}</p>
                  {experience.location && <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500"><MapPin size={13} />{experience.location}</p>}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {experience.tags?.map((tag) => <span className="tech-pill" key={tag}>{tag}</span>)}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">{experience.description}</p>
                  <ul className="mt-5 grid gap-3">
                    {experience.missions.map((mission) => (
                      <li key={mission} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-blue-500" />
                        {mission}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
