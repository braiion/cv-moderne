"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/** Settles text character by character once, like a split-flap board. */
export default function FlapText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        frame += 1;
        const settled = frame;
        setDisplay(
          [...text]
            .map((char, index) => (index < settled || char === " " ? char : GLYPHS[(index * 7 + frame * 3) % GLYPHS.length]))
            .join(""),
        );
        if (settled >= text.length) clearInterval(timer);
      }, 26);
    }, delay);
    return () => {
      clearTimeout(start);
      if (timer) clearInterval(timer);
      setDisplay(text);
    };
  }, [text, delay, reduceMotion]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
