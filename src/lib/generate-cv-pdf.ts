import { jsPDF, type jsPDF as JsPdf } from "jspdf";
import { cvContent, type Locale } from "./cv-data";
import { revealContact } from "./contact";
import { CV_PHOTO_JPEG } from "./cv-photo";

const COBALT = [0, 66, 172] as const;
const INK = [11, 27, 58] as const;
const MUTED = [55, 68, 96] as const;
const LINE = [214, 223, 236] as const;
const BODY_SIZE = 9.2;
const BODY_LEADING = 4.15;

/** Print-only trims keep one readable page; the website keeps the full lists. */
const PDF_MISSION_LIMIT: Record<string, number> = { "renault-cleon": 3 };
const PDF_MISSION_SKIP: Record<string, number[]> = { "product-builder": [2, 4] };
const PDF_EDUCATION_WITHOUT_DESCRIPTION = ["bts-sio"];
const PDF_SKILLS_PER_CATEGORY = 5;

export function buildCvPdf(locale: Locale, generatedAt = new Date()) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
  const content = cvContent[locale];
  const { personal } = content;

  doc.setProperties({
    title: `CV - ${personal.firstName} ${personal.lastName}`,
    subject: personal.title,
    author: `${personal.firstName} ${personal.lastName}`,
    keywords: "Developpeur Full-Stack, Full-Stack Developer, Product Engineer, Chef de projet IT, IT Project Manager, Responsable applicatif, Application Manager, JavaScript, TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, SQL, API REST, CI/CD, IA generative, Generative AI, LLM, RAG, MVP, Gestion de projet, Systemes d'information",
  });

  doc.setCreationDate(generatedAt);
  doc.setLanguage(locale === "fr" ? "fr-FR" : "en-GB");
  header(doc, locale);

  // Single reading column: ATS and copy/paste extract each job title with its company, dates and bullets.
  const X = 13;
  const W = 184;
  const RIGHT = X + W;
  let y = 56;
  y = sectionTitle(doc, locale === "fr" ? "PROFIL" : "PROFILE", X, y, W);
  y = paragraph(doc, personal.summary, X, y, W, BODY_SIZE, BODY_LEADING) + 2.6;

  y = sectionTitle(doc, locale === "fr" ? "PROJET PHARE" : "FEATURED PROJECT", X, y, W);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...INK);
  checkedText(doc, pdfText(content.project.name), X, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...COBALT);
  checkedText(doc, pdfText(content.project.status), RIGHT, y, { align: "right" });
  y += 4.6;
  y = paragraph(doc, content.project.description, X, y, W, BODY_SIZE, BODY_LEADING) + 2.6;

  y = sectionTitle(doc, locale === "fr" ? "EXPÉRIENCE" : "EXPERIENCE", X, y, W);
  for (const experience of content.experiences) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(...INK);
    checkedText(doc, pdfText(experience.title), X, y);
    y += 4.6;

    // Dates lead the company line so text extraction keeps title -> company/dates -> bullets.
    doc.setFontSize(9);
    doc.setTextColor(...COBALT);
    const period = pdfText(`${experience.period} · `);
    checkedText(doc, period, X, y);
    const periodWidth = doc.getTextWidth(period);
    doc.setTextColor(...MUTED);
    checkedText(doc, pdfText(`${experience.company}${experience.location ? ` · ${experience.location}` : ""}`), X + periodWidth, y);
    y += 4.4;

    y = paragraph(doc, experience.description, X, y, W, BODY_SIZE, BODY_LEADING) + 0.4;
    if ("note" in experience && experience.note) {
      y = paragraph(doc, experience.note, X, y, W, 8.4, 3.8, "italic") + 0.4;
    }
    const skip = PDF_MISSION_SKIP[experience.id] ?? [];
    const missions = experience.missions.filter((_, index) => !skip.includes(index));
    for (const mission of missions.slice(0, PDF_MISSION_LIMIT[experience.id] ?? missions.length)) {
      y = bullet(doc, mission, X, y, W);
    }
    y += 2.4;
  }

  y = sectionTitle(doc, content.skillsSection.education.toUpperCase(), X, y, W);
  for (const item of content.education) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.4);
    doc.setTextColor(...COBALT);
    const year = pdfText(`${item.year} · `);
    checkedText(doc, year, X, y);
    doc.setTextColor(...INK);
    checkedText(doc, pdfText(`${item.diploma} · ${item.school}`), X + doc.getTextWidth(year), y);
    y += 4.3;
    if (item.description && !PDF_EDUCATION_WITHOUT_DESCRIPTION.includes(item.id)) y = paragraph(doc, item.description, X, y, W, 8.6, 3.9) + 0.9;
  }
  y += 1.6;

  y = sectionTitle(doc, content.skillsSection.languages.toUpperCase(), X, y, W);
  const separator = locale === "fr" ? " : " : ": ";
  y = paragraph(doc, content.languages.map((language) => `${language.name}${separator}${language.level}`).join("  ·  "), X, y, W, BODY_SIZE, BODY_LEADING) + 2.6;

  y = sectionTitle(doc, locale === "fr" ? "COMPÉTENCES" : "SKILLS", X, y, W);
  for (const category of content.skills) {
    // Label and values share one text run so extraction keeps them together.
    doc.setFont("helvetica", "bold");
    doc.setFontSize(BODY_SIZE);
    doc.setTextColor(...INK);
    const label = pdfText(`${category.name} : `);
    checkedText(doc, label, X, y);
    const labelWidth = doc.getTextWidth(label);
    y = paragraph(doc, category.skills.slice(0, PDF_SKILLS_PER_CATEGORY).join(" · "), X + labelWidth, y, W - labelWidth, BODY_SIZE, BODY_LEADING) + 0.6;
  }

  doc.setDrawColor(...LINE);
  doc.line(13, 286, 197, 286);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.4);
  doc.setTextColor(...MUTED);
  const month = new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    month: "long", year: "numeric", timeZone: "Europe/Paris",
  }).format(generatedAt);
  checkedText(doc, `${locale === "fr" ? "CV généré depuis le portfolio" : "Resume generated from the portfolio"} - ${month}`, 13, 291, { region: "footer" });
  checkedText(doc, revealContact("email"), 197, 291, { align: "right", region: "footer" });

  return doc;
}

function header(doc: JsPdf, locale: Locale) {
  const { personal } = cvContent[locale];
  doc.setFillColor(...COBALT);
  doc.rect(0, 0, 210, 48, "F");

  // Colour portrait, rounded, on the right of the band.
  const photo = { x: 167, y: 6, w: 30, h: 37.5, r: 3 };
  doc.saveGraphicsState();
  doc.roundedRect(photo.x, photo.y, photo.w, photo.h, photo.r, photo.r, null);
  doc.clip();
  doc.discardPath();
  doc.addImage(CV_PHOTO_JPEG, "JPEG", photo.x, photo.y, photo.w, photo.h, "portrait", "FAST");
  doc.restoreGraphicsState();

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  checkedText(doc, pdfText(`${personal.firstName} ${personal.lastName}`), 13, 16);
  doc.setFontSize(11.5);
  checkedText(doc, pdfText(personal.title), 13, 23.5);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.8);
  doc.setTextColor(222, 230, 255);
  checkedText(doc, pdfText(personal.subtitle), 13, 29.5);

  // One text run per line keeps a clean reading order for ATS parsers.
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.6);
  doc.setTextColor(131, 253, 128);
  checkedText(doc, pdfText(locale === "fr" ? "Disponible dès à présent · remote ou Normandie" : "Available now · remote or Normandy"), 13, 35.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.6);
  doc.setTextColor(236, 240, 255);
  checkedText(doc, pdfText([revealContact("email"), revealContact("phone"), revealContact("address")].join("  ·  ")), 13, 40.5);
  linkLine(doc, [
    ["bryandupressoir.vercel.app", personal.portfolio],
    ["bonneoccaz.fr", personal.bonneOccaz],
    ["github.com/braiion", personal.github],
  ], 13, 45);
}

/** Draws "a  ·  b  ·  c" as one text run, with a clickable area over each label. */
function linkLine(doc: JsPdf, links: [string, string][], x: number, y: number) {
  const separator = "  ·  ";
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.6);
  doc.setTextColor(255, 255, 255);
  checkedText(doc, links.map(([label]) => label).join(separator), x, y);
  const height = doc.getFontSize() / doc.internal.scaleFactor;
  let cursor = x;
  for (const [label, url] of links) {
    const width = doc.getTextWidth(label);
    doc.link(cursor, y - height, width, height * 1.25, { url });
    cursor += width + doc.getTextWidth(separator);
  }
}

function sectionTitle(doc: JsPdf, title: string, x: number, y: number, width: number) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...COBALT);
  checkedText(doc, pdfText(title), x, y);
  doc.setDrawColor(...LINE);
  doc.line(x, y + 2.2, x + width, y + 2.2);
  return y + 6.4;
}

function paragraph(doc: JsPdf, text: string, x: number, y: number, width: number, size: number, leading: number, style: "normal" | "italic" = "normal") {
  doc.setFont("helvetica", style);
  doc.setFontSize(size);
  doc.setTextColor(...MUTED);
  const lines = doc.splitTextToSize(pdfText(text), width);
  doc.setLineHeightFactor(leading / (size / doc.internal.scaleFactor));
  checkedText(doc, lines, x, y);
  doc.setLineHeightFactor(1.15);
  return y + lines.length * leading;
}

function bullet(doc: JsPdf, text: string, x: number, y: number, width: number) {
  doc.setFillColor(...COBALT);
  doc.circle(x + 1, y - 1.2, 0.6, "F");
  return paragraph(doc, text, x + 4, y, width - 4, BODY_SIZE, BODY_LEADING) + 0.6;
}

function pdfText(value: string) {
  return value
    .replace(/[–—]/g, "-")
    .replace(/[’]/g, "'")
    .replace(/→/g, "->")
    .replace(/\u00a0/g, " ");
}

/** Reject invalid exports rather than quietly clipping a future content change. */
function checkedText(doc: JsPdf, value: string | string[], x: number, y: number, options?: { align?: "right"; region?: "footer" }) {
  const lines = Array.isArray(value) ? value : [value];
  const fontHeight = doc.getFontSize() / doc.internal.scaleFactor;
  const width = Math.max(...lines.map((line) => doc.getTextWidth(line)), 0);
  const left = options?.align === "right" ? x - width : x;
  const right = options?.align === "right" ? x : x + width;
  const bottom = y + (lines.length - 1) * fontHeight * doc.getLineHeightFactor() + fontHeight * 0.25;
  const inBody = y > 50 && options?.region !== "footer";
  const columnLeft = 13;
  const columnRight = 197;
  const pageBottom = inBody ? 281 : 294;
  if (left < columnLeft - 0.2 || right > columnRight + 0.2 || bottom > pageBottom || y - fontHeight < 8) {
    throw new Error(`CV PDF: text exceeds printable area near "${lines[0]?.slice(0, 55)}" (x=${x}, y=${y.toFixed(1)}).`);
  }
  doc.text(value, x, y, { align: options?.align });
}
