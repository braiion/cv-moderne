"use client";

import { ArrowUpRight, Check, Search, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function ProjectShowcase({ locale }: { locale: Locale }) {
  const { personal, project, projectsSection } = cvContent[locale];
  const preview = locale === "fr"
    ? { title: "Trouvez la Bonne Occaz.", placeholder: "SUV hybride, moins de 20 000 €…", search: "Rechercher", verified: "Annonces vérifiées", ai: "Recherche assistée par IA" }
    : { title: "Find the right car.", placeholder: "Hybrid SUV under €20,000…", search: "Search", verified: "Verified listings", ai: "AI-assisted search" };

  return (
    <AnimatedSection id="projects" className="section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{projectsSection.eyebrow}</p>
          <h2>{projectsSection.title}</h2>
        </div>
        <p>{projectsSection.description}</p>
      </div>

      <div className="project-panel grid overflow-hidden rounded-[2rem] min-[900px]:grid-cols-[0.94fr_1.06fr]">
        <div className="flex flex-col p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300">{project.status}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{projectsSection.role}</span>
          </div>

          <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl">{project.name}</h3>
          <p className="mt-2 text-lg font-medium text-violet-600 dark:text-violet-300">{project.tagline}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">{project.description}</p>

          <ul className="mt-8 grid gap-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600 dark:text-emerald-300">
                  <Check size={13} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="tech-pill">{tag}</span>)}
          </div>

          <a href={personal.bonneOccaz} target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-200">
            {projectsSection.visit} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-[#f7f5ff] via-white to-[#effaff] p-5 dark:from-[#171426] dark:via-[#0d1323] dark:to-[#071927] sm:p-9 min-[900px]:min-h-full">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />

          <div
            className="relative mx-auto mt-8 max-w-xl rounded-[1.7rem] border border-white/80 bg-white/92 p-4 shadow-[0_32px_90px_rgba(76,29,149,.18)] backdrop-blur dark:border-white/10 dark:bg-slate-950/90"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <span className="text-base font-black tracking-[-0.04em] text-slate-900 dark:text-white">Bonne Occaz<span className="text-violet-600">.</span></span>
              <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">BETA</span>
            </div>

            <div className="px-2 py-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-cyan-50 text-violet-600 dark:from-violet-500/20 dark:to-cyan-500/10 dark:text-violet-300">
                <Search size={34} />
              </div>
              <p className="mt-5 text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">{preview.title}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.tagline}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-violet-500/5 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-4 text-xs text-slate-400 dark:bg-slate-800/70">
                <Search size={16} /> {preview.placeholder}
                <span className="ml-auto rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-2 font-semibold text-white">{preview.search}</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><ShieldCheck size={16} className="mb-2" />{preview.verified}</div>
              <div className="rounded-xl bg-violet-50 p-3 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"><Sparkles size={16} className="mb-2" />{preview.ai}</div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
