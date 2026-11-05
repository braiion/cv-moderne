import { jsPDF, type jsPDF as JsPdf } from "jspdf";
import { cvContent, type Locale } from "./cv-data";

const COBALT = [0, 66, 172] as const;
const INK = [6, 32, 79] as const;
const MUTED = [61, 85, 120] as const;
const LINE = [207, 221, 238] as const;
const BODY_SIZE = 7.4;
const BODY_LEADING = 3.4;

export function buildCvPdf(locale: Locale, generatedAt = new Date()) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
  const content = cvContent[locale];
  const { personal } = content;

  doc.setProperties({
    title: `CV - ${personal.firstName} ${personal.lastName}`,
    subject: personal.title,
    author: `${personal.firstName} ${personal.lastName}`,
    keywords: "Full Stack Builder, Product Builder, Product Engineer, Agents de code IA, AI coding agents, LLM, Developpement agentique, Agentic development, AI-native, MVP, Developpeur Full-Stack, Full-Stack Developer, React, Next.js, JavaScript, TypeScript, Node.js, Supabase, PostgreSQL, RAG, CAG, IA generative, SQL, API REST, CI/CD",
  });

  doc.setCreationDate(generatedAt);
  doc.setLanguage(locale === "fr" ? "fr-FR" : "en-GB");
  header(doc, locale);

  // Single reading column: ATS and copy/paste extract each job title with its company, dates and bullets.
  const X = 13;
  const W = 184;
  const RIGHT = X + W;
  let y = 57;
  y = sectionTitle(doc, locale === "fr" ? "PROFIL" : "PROFILE", X, y, W);
  y = paragraph(doc, personal.summary, X, y, W, 8, 3.7) + 2.8;

  y = sectionTitle(doc, locale === "fr" ? "PRODUIT PHARE" : "FEATURED PRODUCT", X, y, W);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...INK);
  checkedText(doc, pdfText(content.project.name), X, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.1);
  doc.setTextColor(...COBALT);
  checkedText(doc, pdfText(content.project.status), RIGHT, y, { align: "right" });
  y += 4.3;
  y = paragraph(doc, content.project.description, X, y, W, BODY_SIZE, BODY_LEADING) + 0.4;
  for (const feature of content.project.features) {
    y = bullet(doc, feature, X, y, W);
  }
  y += 2.4;

  y = sectionTitle(doc, locale === "fr" ? "EXPÉRIENCE" : "EXPERIENCE", X, y, W);
  for (const experience of content.experiences) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.2);
    doc.setTextColor(...INK);
    checkedText(doc, pdfText(experience.title), X, y);
    y += 3.8;

    // Dates lead the company line so text extraction keeps title -> company/dates -> bullets.
    doc.setFontSize(8);
    doc.setTextColor(...COBALT);
    const period = pdfText(`${experience.period} · `);
    checkedText(doc, period, X, y);
    const periodWidth = doc.getTextWidth(period);
    doc.setTextColor(...MUTED);
    checkedText(doc, pdfText(`${experience.company}${experience.location ? ` · ${experience.location}` : ""}`), X + periodWidth, y);
    y += 3.6;

    y = paragraph(doc, experience.description, X, y, W, BODY_SIZE, BODY_LEADING) + 0.3;
    if ("note" in experience && experience.note) {
      y = paragraph(doc, experience.note, X, y, W, BODY_SIZE, BODY_LEADING) + 0.3;
    }
    for (const mission of experience.missions) {
      y = bullet(doc, mission, X, y, W);
    }
    y += 2;
  }

  y = sectionTitle(doc, content.skillsSection.education.toUpperCase(), X, y, W);
  for (const item of content.education) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.1);
    doc.setTextColor(...COBALT);
    const year = pdfText(`${item.year} · `);
    checkedText(doc, year, X, y);
    let lineX = X + doc.getTextWidth(year);
    doc.setTextColor(...INK);
    const diploma = pdfText(`${item.diploma} · ${item.school}`);
    checkedText(doc, diploma, lineX, y);
    lineX += doc.getTextWidth(diploma);
    if (item.description) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(BODY_SIZE);
      doc.setTextColor(...MUTED);
      checkedText(doc, pdfText(` · ${item.description}`), lineX, y);
    }
    y += 4.2;
  }
  y += 1.6;

  y = sectionTitle(doc, locale === "fr" ? "COMPÉTENCES" : "SKILLS", X, y, W);
  for (const category of content.skills) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.4);
    doc.setTextColor(...INK);
    checkedText(doc, pdfText(category.name.toUpperCase()), X, y);
    y = paragraph(doc, category.skills.join(" · "), X + 42, y, W - 42, BODY_SIZE, BODY_LEADING) + 0.8;
  }
  y += 1.6;

  y = sectionTitle(doc, locale === "fr" ? "POSITIONNEMENT" : "TARGET ROLES", X, y, W);
  const targets = locale === "fr"
    ? ["Full Stack Builder", "Développeur Full-Stack JS/TS", "Product Engineer", "Développeur React / Next.js"]
    : ["Full Stack Builder", "Full-Stack JS/TS Developer", "Product Engineer", "React / Next.js Developer"];
  paragraph(doc, targets.join(" · "), X, y, W, BODY_SIZE, BODY_LEADING);

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
  doc.setFillColor(...COBALT);
  doc.rect(0, 0, 210, 50, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  checkedText(doc, pdfText(`${personal.firstName} ${personal.lastName}`), 13, 17);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(214, 221, 255);
  checkedText(doc, pdfText(locale === "fr" ? "DISPONIBLE DÈS À PRÉSENT" : "AVAILABLE NOW"), 197, 13, { align: "right" });
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  checkedText(doc, pdfText(personal.title), 13, 25);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.2);
  doc.setTextColor(222, 228, 255);
  checkedText(doc, pdfText(personal.subtitle), 13, 31.5);

  doc.setFontSize(7.6);
  doc.setTextColor(236, 240, 255);
  checkedText(doc, pdfText(personal.email), 13, 40);
  checkedText(doc, pdfText(personal.phone), 70, 40);
  checkedText(doc, pdfText(personal.address), 110, 40);
  headerLink(doc, "bryandupressoir.vercel.app", personal.portfolio, 13, 45.5);
  headerLink(doc, "bonneoccaz.fr", personal.bonneOccaz, 70, 45.5);
  headerLink(doc, "github.com/braiion", personal.github, 110, 45.5);
}

function headerLink(doc: JsPdf, label: string, url: string, x: number, y: number) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.6);
  doc.setTextColor(255, 255, 255);
  checkedText(doc, label, x, y);
  const height = doc.getFontSize() / doc.internal.scaleFactor;
  doc.link(x, y - height, doc.getTextWidth(label), height * 1.25, { url });
}

function sectionTitle(doc: JsPdf, title: string, x: number, y: number, width: number) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(...COBALT);
  checkedText(doc, pdfText(title), x, y);
  doc.setDrawColor(...LINE);
  doc.line(x, y + 2.3, x + width, y + 2.3);
  return y + 6.2;
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
  doc.setFillColor(...COBALT);
  doc.circle(x + 1, y - 1, 0.55, "F");
  return paragraph(doc, text, x + 4, y, width - 4, BODY_SIZE, BODY_LEADING) + 0.3;
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
