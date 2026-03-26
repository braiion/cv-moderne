"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { education } from "@/lib/cv-data";

export default function Formation() {
  return (
    <AnimatedSection
      id="formation"
      className="relative px-6 py-20 sm:py-28"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-delayed absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="animate-float absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-indigo-500"
          >
            Diplômes
          </motion.span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Formation
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-slate-500 dark:text-slate-400">
            Un parcours en alternance alliant théorie académique et pratique professionnelle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -6 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-px rounded-[calc(1rem-1px)] bg-white dark:bg-slate-900/90" />

              {/* Decorative corner gradient */}
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-indigo-500/10 transition-all duration-500 group-hover:scale-[2]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15">
                    <GraduationCap size={22} className="text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    <Calendar size={12} />
                    {edu.year}
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {edu.diploma}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <Award size={14} className="text-indigo-500" />
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {edu.school}
                  </p>
                </div>

                {edu.description && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
