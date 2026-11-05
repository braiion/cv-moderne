"use client";

import { useEffect } from "react";

/**
 * One delegated pointer listener for the whole page:
 * - `.spot` elements get --sx/--sy so a soft light follows the pointer;
 * - `.magnetic` elements drift slightly toward the pointer.
 * Disabled on touch screens and when reduced motion is requested.
 */
export default function Interactions() {
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!query.matches) return;
    let frame = 0;
    let magnet: HTMLElement | null = null;

    const release = () => {
      if (magnet) magnet.style.transform = "";
      magnet = null;
    };

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = event.target instanceof Element ? event.target : null;
        const spot = target?.closest<HTMLElement>(".spot");
        if (spot) {
          const box = spot.getBoundingClientRect();
          spot.style.setProperty("--sx", `${event.clientX - box.left}px`);
          spot.style.setProperty("--sy", `${event.clientY - box.top}px`);
        }
        const next = target?.closest<HTMLElement>(".magnetic") ?? null;
        if (next !== magnet) release();
        if (next) {
          magnet = next;
          const box = next.getBoundingClientRect();
          const dx = event.clientX - (box.left + box.width / 2);
          const dy = event.clientY - (box.top + box.height / 2);
          next.style.transform = `translate(${dx * 0.18}px, ${dy * 0.3}px)`;
        }
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", release);
    return () => {
      cancelAnimationFrame(frame);
      release();
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", release);
    };
  }, []);

  return null;
}
