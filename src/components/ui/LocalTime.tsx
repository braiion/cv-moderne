"use client";

import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  const timer = window.setInterval(callback, 30_000);
  return () => window.clearInterval(timer);
};

/** Current time in France, rendered only in the browser (empty in server HTML). */
export default function LocalTime({ locale }: { locale: "fr" | "en" }) {
  const time = useSyncExternalStore(
    subscribe,
    () => new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" }).format(new Date()),
    () => "",
  );
  if (!time) return null;
  return <time className="local-time">{locale === "fr" ? `${time} en France` : `${time} in France`}</time>;
}
