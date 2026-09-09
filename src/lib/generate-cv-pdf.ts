import { jsPDF, type jsPDF as JsPdf } from "jspdf";
import { cvContent, type Locale } from "./cv-data";

const GREEN = [36, 99, 78] as const;
const INK = [34, 39, 37] as const;
const MUTED = [85, 94, 90] as const;
const LINE = [220, 222, 215] as const;

export function buildCvPdf(locale: Locale, generatedAt = new Date()) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
  const content = cvContent[locale];
  const { personal } = content;

  doc.setProperties({
    title: `CV - ${personal.firstName} ${personal.lastName}`,
    subject: personal.title,
    author: `${personal.firstName} ${personal.lastName}`,
    keywords: "Product Builder, Product Engineer, MVP, Minimum Viable Product, Prototypage rapide, Rapid prototyping, Developpeur Full-Stack, Full-Stack Developer, React, Next.js, JavaScript, TypeScript, Node.js, Supabase, PostgreSQL, RAG, CAG, IA generative, SQL, API REST, CI/CD",
  });

  doc.setCreationDate(generatedAt);
  doc.setLanguage(locale === "fr" ? "fr-FR" : "en-GB");
  header(doc, locale);

  let leftY = 61;
  leftY = sectionTitle(doc, locale === "fr" ? "PROFIL" : "PROFILE", 13, leftY, 121);
  leftY = paragraph(doc, personal.summary, 13, leftY, 121, 8.4, 4.2) + 5;

  leftY = sectionTitle(doc, locale === "fr" ? "PRODUIT PHARE" : "FEATURED PRODUCT", 13, leftY, 121);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...INK);
  checkedText(doc, pdfText(content.project.name), 13, leftY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.1);
  doc.setTextColor(...GREEN);
  checkedText(doc, pdfText(content.project.status), 134, leftY, { align: "right" });
  leftY += 4.5;
  leftY = paragraph(doc, content.project.description, 13, leftY, 121, 8.1, 4);
  for (const feature of content.project.features) {
    leftY = bullet(doc, feature, 13, leftY + 0.5, 121);
  }
  leftY += 4;

  leftY = sectionTitle(doc, locale === "fr" ? "EXPÉRIENCE" : "EXPERIENCE", 13, leftY, 121);
  for (const experience of content.experiences) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.2);
    doc.setTextColor(...INK);
    const titleLines = doc.splitTextToSize(pdfText(experience.title), 88);
    checkedText(doc, titleLines, 13, leftY);

    doc.setFontSize(7.9);
    doc.setTextColor(...GREEN);
    checkedText(doc, pdfText(experience.period), 134, leftY, { align: "right" });
    leftY += titleLines.length * 4;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.1);
    doc.setTextColor(...MUTED);
    checkedText(doc, pdfText(`${experience.company}${experience.location ? ` · ${experience.location}` : ""}`), 13, leftY);
    leftY += 3.8;

    leftY = paragraph(doc, experience.description, 13, leftY, 121, 7.8, 3.75) + 1;
    if ("note" in experience && experience.note) {
      leftY = paragraph(doc, experience.note, 13, leftY, 121, 7.8, 3.75) + 1;
    }
    for (const mission of experience.missions) {
      leftY = bullet(doc, mission, 13, leftY, 121);
    }
    leftY += 3.2;
  }

  let rightY = 61;
  rightY = sectionTitle(doc, locale === "fr" ? "COMPÉTENCES" : "SKILLS", 143, rightY, 54);
  for (const category of content.skills) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.8);
    doc.setTextColor(...INK);
    checkedText(doc, pdfText(category.name.toUpperCase()), 143, rightY);
    rightY += 3.8;
    rightY = paragraph(doc, category.skills.join(" · "), 143, rightY, 54, 7.7, 3.75) + 3.2;
  }

  rightY += 1;
  rightY = sectionTitle(doc, locale === "fr" ? "BOUCLE PRODUIT" : "PRODUCT LOOP", 143, rightY, 54);
  const loop = content.hero.loop.map((step) => step.label).join(" -> ");
  rightY = paragraph(doc, loop, 143, rightY, 54, 7.7, 3.8) + 1.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.4);
  doc.setTextColor(...GREEN);
  const release = doc.splitTextToSize(pdfText(content.hero.release), 54);
  checkedText(doc, release, 143, rightY);
  rightY += release.length * 3.4 + 4;

  rightY = sectionTitle(doc, content.skillsSection.education.toUpperCase(), 143, rightY, 54);
  for (const item of content.education) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...INK);
    const lines = doc.splitTextToSize(pdfText(item.diploma), 54);
    checkedText(doc, lines, 143, rightY);
    rightY += lines.length * 3.7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.6);
    doc.setTextColor(...MUTED);
    checkedText(doc, pdfText(`${item.school} · ${item.year}`), 143, rightY);
    rightY += 7;
  }

  rightY += 1;
  rightY = sectionTitle(doc, locale === "fr" ? "POSITIONNEMENT" : "TARGET ROLES", 143, rightY, 54);
  const targets = locale === "fr"
    ? ["Product Builder", "Développeur Full-Stack JS/TS", "Product Engineer", "Développeur React / Next.js"]
    : ["Product Builder", "Full-Stack JS/TS Developer", "Product Engineer", "React / Next.js Developer"];
  for (const target of targets) {
    rightY = bullet(doc, target, 143, rightY, 54);
  }

  rightY += 3;
  rightY = sectionTitle(doc, locale === "fr" ? "LIENS" : "LINKS", 143, rightY, 54);
  link(doc, "bryandupressoir.vercel.app", personal.portfolio, 143, rightY);
  link(doc, "bonneoccaz.fr", personal.bonneOccaz, 143, rightY + 5);
  link(doc, "github.com/braiion", personal.github, 143, rightY + 10);

  doc.setDrawColor(...LINE);
  doc.line(13, 286, 197, 286);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.2);
  doc.setTextColor(...MUTED);
  const month = new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    month: "long", year: "numeric", timeZone: "Europe/Paris",
  }).format(generatedAt);
  checkedText(doc, `${locale === "fr" ? "CV généré depuis le portfolio" : "Resume generated from the portfolio"} - ${month}`, 13, 291, { region: "footer" });
  checkedText(doc, personal.email, 197, 291, { align: "right", region: "footer" });

  return doc;
}

function header(doc: JsPdf, locale: Locale) {
  const { personal } = cvContent[locale];
  doc.setFillColor(...INK);
  doc.rect(0, 0, 210, 50, "F");
  doc.setFillColor(...GREEN);
  doc.rect(0, 0, 5, 50, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  checkedText(doc, pdfText(`${personal.firstName} ${personal.lastName}`), 13, 17);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(188, 217, 194);
  checkedText(doc, "PRODUCT BUILDER / MVP / 0->1", 197, 13, { align: "right" });
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  checkedText(doc, pdfText(personal.title), 13, 25);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.2);
  doc.setTextColor(207, 224, 211);
  checkedText(doc, pdfText(personal.subtitle), 13, 31.5);

  doc.setFontSize(7.6);
  doc.setTextColor(226, 232, 240);
  checkedText(doc, pdfText(personal.email), 13, 41);
  checkedText(doc, pdfText(personal.phone), 78, 41);
  checkedText(doc, pdfText(personal.address), 126, 41);
}

function sectionTitle(doc: JsPdf, title: string, x: number, y: number, width: number) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(...GREEN);
  checkedText(doc, pdfText(title), x, y);
  doc.setDrawColor(...LINE);
  doc.line(x, y + 2.3, x + width, y + 2.3);
  return y + 7;
}

function paragraph(doc: JsPdf, text: string, x: number, y: number, width: number, size: number, leading: number) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(size);
  doc.setTextColor(...MUTED);
  const lines = doc.splitTextToSize(pdfText(text), width);
  checkedText(doc, lines, x, y);
  return y + lines.length * leading;
}

function bullet(doc: JsPdf, text: string, x: number, y: number, width: number) {
  doc.setFillColor(...GREEN);
  doc.circle(x + 1, y - 1, 0.55, "F");
  return paragraph(doc, text, x + 4, y, width - 4, 7.8, 3.75) + 0.35;
}

function link(doc: JsPdf, label: string, url: string, x: number, y: number) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...GREEN);
  checkedText(doc, label, x, y);
  const height = doc.getFontSize() / doc.internal.scaleFactor;
  doc.link(x, y - height, doc.getTextWidth(label), height * 1.25, { url });
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
  const columnLeft = inBody && x >= 143 ? 143 : 13;
  const columnRight = inBody && x < 143 ? 134 : 197;
  const pageBottom = inBody ? 281 : 294;
  if (left < columnLeft - 0.2 || right > columnRight + 0.2 || bottom > pageBottom || y - fontHeight < 8) {
    throw new Error(`CV PDF: text exceeds printable area near "${lines[0]?.slice(0, 55)}" (x=${x}, y=${y.toFixed(1)}).`);
  }
  doc.text(value, x, y, { align: options?.align });
}
