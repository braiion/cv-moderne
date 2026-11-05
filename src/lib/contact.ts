/**
 * Contact details are stored reversed and base64-encoded so that no e-mail,
 * phone or address pattern appears verbatim in the source, the rendered HTML
 * or the client bundles. Pages decode them only on user interaction (or after
 * hydration for the town), which defeats regex-based harvesting bots.
 * The downloadable PDF decodes them server-side: a CV must carry its contacts.
 */
const ENCODED = {
  email: "cmYuZXZpbEByaW9zc2VycHVkbmF5cmI=",
  phone: "MjMgMTYgMTggNzEgNjA=",
  address: "ZWlkbmFtcm9OICxlcmFtaXJkbmFW",
} as const;

export type ContactField = keyof typeof ENCODED;

export function revealContact(field: ContactField): string {
  const binary = atob(ENCODED[field]);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return [...new TextDecoder().decode(bytes)].reverse().join("");
}

/** Shown in server HTML before the browser decodes the full address. */
export const PUBLIC_REGION = "Normandie";
