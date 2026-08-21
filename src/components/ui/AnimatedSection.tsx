import type { HTMLAttributes, ReactNode } from "react";

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  ...rest
}: AnimatedSectionProps) {
  return (
    <section
      className={className}
      {...rest}
    >
      {children}
    </section>
  );
}
