"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

/** Reveals its children once when the section enters the viewport (CSS handles motion and reduced motion). */
export default function AnimatedSection({
  children,
  className = "",
  ...rest
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -10% 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </section>
  );
}
