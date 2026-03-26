"use client";

import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { experiences } from "@/lib/cv-data";

export default function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="relative px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-500"
          >
            Parcours
          </motion.span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Expérience Professionnelle
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            De l&apos;alternance en industrie automobile à la gestion d&apos;infrastructure IT, en passant par le développement full-stack moderne.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — glowing */}
          <div className="absolute top-0 left-6 hidden h-full w-px sm:left-1/2 sm:block">
            <div className="h-full w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-30" />
          </div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`relative mb-10 sm:mb-20 sm:flex ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot — glowing */}
                <div className="absolute top-6 left-6 z-10 hidden -translate-x-1/2 sm:left-1/2 sm:block">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-950" />
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-20" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`glass-card group relative w-full cursor-default rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 sm:w-[calc(50%-2rem)] ${
                    isLeft ? "sm:ml-8" : "sm:mr-8"
                  }`}
                >
                  {/* Animated top border on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Period badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {exp.period}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500 dark:text-slate-600"
                    />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Briefcase size={14} className="text-slate-400 dark:text-slate-500" />
                    <span className="font-medium">{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-slate-300 dark:text-slate-600">·</span>
                        <MapPin size={14} className="text-slate-400 dark:text-slate-500" />
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {exp.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.missions.map((mission, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                        {mission}
                      </motion.li>
                    ))}
                  </ul>

                  {exp.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
