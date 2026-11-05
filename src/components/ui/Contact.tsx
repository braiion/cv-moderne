"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import { PUBLIC_REGION, revealContact } from "@/lib/contact";

/** Opens the mail client; the address is decoded only at click time. */
export function MailButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => { window.location.href = `mailto:${revealContact("email")}`; }}>
      {children}
    </button>
  );
}

/** Shows the e-mail as text only after an explicit request. */
export function RevealEmail({ label }: { label: string }) {
  const [email, setEmail] = useState<string | null>(null);
  if (email) return <a href={`mailto:${email}`}>{email}</a>;
  return (
    <button type="button" className="contact-reveal" onClick={() => setEmail(revealContact("email"))}>
      {label}
    </button>
  );
}

const noSubscription = () => () => {};

/** Server HTML carries only the region; the browser fills in the town after hydration. */
export function Location() {
  const place = useSyncExternalStore(noSubscription, () => revealContact("address"), () => PUBLIC_REGION);
  return <>{place}</>;
}
