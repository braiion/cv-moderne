"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface DeviceShowcaseProps {
  bar: string;
  desktop: StaticImageData;
  mobile: StaticImageData;
  desktopAlt: string;
  mobileAlt: string;
  caption: string;
  className?: string;
}

/** Real product screenshots: a desktop window with a phone-sized view in front, lightly parallaxed. */
export default function DeviceShowcase({ bar, desktop, mobile, desktopAlt, mobileAlt, caption, className }: DeviceShowcaseProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const browserY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);
  const phoneY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [90, -70]);

  return (
    <figure className={`showcase${className ? ` ${className}` : ""}`} ref={ref}>
      <motion.div className="showcase__browser" style={{ y: browserY }}>
        <div className="showcase__bar" aria-hidden="true"><i /><i /><i /><span>{bar}</span></div>
        <Image src={desktop} alt={desktopAlt} sizes="(min-width: 960px) 70vw, 92vw" placeholder="blur" />
      </motion.div>
      <motion.div className="showcase__phone" style={{ y: phoneY }}>
        <Image src={mobile} alt={mobileAlt} sizes="(min-width: 960px) 16rem, 40vw" placeholder="blur" />
      </motion.div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
