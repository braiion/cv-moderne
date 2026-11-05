"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { cvContent, type Locale } from "@/lib/cv-data";

export default function Method({ locale }: { locale: Locale }) {
  const { methodSection } = cvContent[locale];

  return (
    <AnimatedSection id="method" className="section">
      <header className="section__head">
        <h2>{methodSection.title}</h2>
        <p>{methodSection.description}</p>
      </header>

      <ol className="method">
        {methodSection.steps.map((step, index) => (
          <li key={step.title} className="method__step spot">
            <b>{String(index + 1).padStart(2, "0")}</b>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </AnimatedSection>
  );
}
