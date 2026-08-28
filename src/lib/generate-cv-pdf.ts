import { jsPDF, type jsPDF as JsPdf } from "jspdf";
import { cvContent, type Locale } from "@/lib/cv-data";

const GREEN = [40, 104, 79] as const;
const INK = [20, 24, 22] as const;
const MUTED = [89, 99, 93] as const;
const LINE = [204, 211, 204] as const;

export function buildCvPdf(locale: Locale) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
  const content = cvContent[locale];
  const { personal } = content;

  doc.setProperties({
    title: `CV - ${personal.firstName} ${personal.lastName}`,
    subject: personal.title,
    author: `${personal.firstName} ${personal.lastName}`,
    keywords: "Product Builder, Product Engineer, MVP, Minimum Viable Product, Prototypage rapide, Rapid prototyping, Developpeur Full-Stack, Full-Stack Developer, React, Next.js, JavaScript, TypeScript, Node.js, Supabase, PostgreSQL, RAG, CAG, IA generative, SQL, API REST, CI/CD",
  });

  header(doc, locale);

  let leftY = 61;
  leftY = sectionTitle(doc, locale === "fr" ? "PROFIL" : "PROFILE", 13, leftY, 121);
  leftY = paragraph(doc, personal.summary, 13, leftY, 121, 8.4, 4.2) + 5;

  leftY = sectionTitle(doc, locale === "fr" ? "PRODUIT PHARE" : "FEATURED PRODUCT", 13, leftY, 121);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...INK);
  doc.text(pdfText(content.project.name), 13, leftY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.1);
  doc.setTextColor(...GREEN);
  doc.text(pdfText(content.project.status), 134, leftY, { align: "right" });
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
    doc.text(titleLines, 13, leftY);

    doc.setFontSize(7.9);
    doc.setTextColor(...GREEN);
    doc.text(pdfText(experience.period), 134, leftY, { align: "right" });
    leftY += titleLines.length * 4;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.1);
    doc.setTextColor(...MUTED);
    doc.text(pdfText(`${experience.company}${experience.location ? ` · ${experience.location}` : ""}`), 13, leftY);
    leftY += 3.8;

    leftY = paragraph(doc, experience.description, 13, leftY, 121, 7.8, 3.75) + 1;
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
    doc.text(pdfText(category.name.toUpperCase()), 143, rightY);
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
  doc.text(release, 143, rightY);
  rightY += release.length * 3.4 + 4;

  rightY = sectionTitle(doc, content.skillsSection.education.toUpperCase(), 143, rightY, 54);
  for (const item of content.education) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...INK);
    const lines = doc.splitTextToSize(pdfText(item.diploma), 54);
    doc.text(lines, 143, rightY);
    rightY += lines.length * 3.7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.6);
    doc.setTextColor(...MUTED);
    doc.text(pdfText(`${item.school} · ${item.year}`), 143, rightY);
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
  doc.text(locale === "fr" ? "CV généré depuis le portfolio - août 2026" : "Resume generated from the portfolio - August 2026", 13, 291);
  doc.text(personal.email, 197, 291, { align: "right" });

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
  doc.text(pdfText(`${personal.firstName} ${personal.lastName}`), 13, 17);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(192, 235, 210);
  doc.text("PRODUCT BUILDER / MVP / 0->1", 197, 13, { align: "right" });
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(pdfText(personal.title), 13, 25);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.2);
  doc.setTextColor(191, 219, 254);
  doc.text(pdfText(personal.subtitle), 13, 31.5);

  doc.setFontSize(7.6);
  doc.setTextColor(226, 232, 240);
  doc.text(pdfText(personal.email), 13, 41);
  doc.text(pdfText(personal.phone), 78, 41);
  doc.text(pdfText(personal.address), 126, 41);
}

function sectionTitle(doc: JsPdf, title: string, x: number, y: number, width: number) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(...GREEN);
  doc.text(pdfText(title), x, y);
  doc.setDrawColor(186, 207, 196);
  doc.line(x, y + 2.3, x + width, y + 2.3);
  return y + 7;
}

function paragraph(doc: JsPdf, text: string, x: number, y: number, width: number, size: number, leading: number) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(size);
  doc.setTextColor(...MUTED);
  const lines = doc.splitTextToSize(pdfText(text), width);
  doc.text(lines, x, y);
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
  doc.textWithLink(label, x, y, { url });
}

function pdfText(value: string) {
  return value
    .replace(/[–—]/g, "-")
    .replace(/[’]/g, "'")
    .replace(/→/g, "->")
    .replace(/\u00a0/g, " ");
}
