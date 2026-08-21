"use client";

import { GraduationCap } from "lucide-react";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Formation({ locale }: { locale: Locale }) {
  const { education, skillsSection } = cvContent[locale];

  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="education-title">
      <div className="education-panel mx-auto max-w-6xl rounded-[2rem] p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><GraduationCap size={20} /></span>
          <h2 id="education-title" className="text-xl font-semibold text-slate-950 dark:text-white">{skillsSection.education}</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.id}
              className="education-card rounded-2xl p-5"
            >
              <p className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-300">{item.year}</p>
              <h3 className="mt-3 font-semibold leading-6 text-slate-950 dark:text-white">{item.diploma}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.school}</p>
              {item.description && <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
