"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skillCategories } from "@/lib/cv-data";
import {
  Code2,
  Database,
  Rocket,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

const categoryIcons: Record<string, ReactNode> = {
  "Langages & Frameworks": <Code2 size={18} />,
  "Back-End & Data": <Database size={18} />,
  "DevOps & Outils": <Rocket size={18} />,
  "Méthodologie & Gestion": <Users size={18} />,
};

const categoryColors: Record<string, { from: string; to: string; text: string; badge: string }> = {
  "Langages & Frameworks": {
    from: "from-blue-500",
    to: "to-cyan-400",
    text: "text-blue-500 dark:text-blue-400",
    badge: "hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400",
  },
  "Back-End & Data": {
    from: "from-emerald-500",
    to: "to-teal-400",
    text: "text-emerald-500 dark:text-emerald-400",
    badge: "hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-400",
  },
  "DevOps & Outils": {
    from: "from-orange-500",
    to: "to-amber-400",
    text: "text-orange-500 dark:text-orange-400",
    badge: "hover:border-orange-400 hover:text-orange-600 dark:hover:border-orange-500 dark:hover:text-orange-400",
  },
  "Méthodologie & Gestion": {
    from: "from-violet-500",
    to: "to-purple-400",
    text: "text-violet-500 dark:text-violet-400",
    badge: "hover:border-violet-400 hover:text-violet-600 dark:hover:border-violet-500 dark:hover:text-violet-400",
  },
};

export default function TechStack() {
  return (
    <AnimatedSection
      id="techstack"
      className="relative px-6 py-20 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan-500"
          >
            Stack technique
          </motion.span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Compétences Techniques
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-slate-500 dark:text-slate-400">
            Un éventail de technologies maîtrisées, du front-end moderne au DevOps en passant par la gestion de projet.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIdx) => {
            const colors = categoryColors[category.name] || categoryColors["Langages & Frameworks"];
            const icon = categoryIcons[category.name];

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: catIdx * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -4 }}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
              >
                {/* Animated gradient top bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colors.from} ${colors.to} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 ${colors.text}`}>
                    {icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {category.name}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIdx * 0.08 + skillIdx * 0.04,
                      }}
                      whileHover={{ scale: 1.08 }}
                      className={`inline-flex cursor-default rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 ${colors.badge}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
