import assert from "node:assert/strict";
import test from "node:test";
import { loadPdfSources } from "../scripts/cv-pdf.mjs";

const { buildCvPdf, cvContent, shared } = loadPdfSources();
const date = new Date("2026-09-09T12:00:00Z");

for (const [locale, month] of [["fr", "septembre 2026"], ["en", "September 2026"]]) {
  test(`${locale}: one-page CV with current date, selected projects and working link annotations`, () => {
    const doc = buildCvPdf(locale, date);
    assert.equal(doc.getNumberOfPages(), 1);
    const operators = doc.internal.pages.flat().join("\n");
    assert.ok(operators.includes(month));
    for (const project of ["BonneOccaz.fr", "RevGuessr.com", "Paddock Studio"]) assert.ok(operators.includes(project), `Missing project: ${project}`);
    assert.ok(!/confidenti/i.test(operators));
    assert.ok(operators.includes("2016"));
    assert.ok(operators.includes("Renault"));
    const pdf = doc.output();
    for (const url of [shared.portfolio, shared.bonneOccaz, shared.revGuessr, shared.github]) {
      assert.ok(pdf.includes(`/URI (${url})`), `Missing clickable link: ${url}`);
    }
    assert.ok(pdf.includes(`/Lang (${locale === "fr" ? "fr-FR" : "en-GB"})`));
  });
}

test("rejects vertical overflow instead of creating a clipped PDF", () => {
  const original = cvContent.fr.personal.summary;
  try {
    cvContent.fr.personal.summary = "Texte de parcours trop long. ".repeat(500);
    assert.throws(() => buildCvPdf("fr", date), /exceeds printable area/);
  } finally {
    cvContent.fr.personal.summary = original;
  }
});

test("rejects text crossing into the adjacent column", () => {
  const original = cvContent.en.experiences[0].company;
  try {
    cvContent.en.experiences[0].company = "Very long company name ".repeat(40);
    assert.throws(() => buildCvPdf("en", date), /exceeds printable area/);
  } finally {
    cvContent.en.experiences[0].company = original;
  }
});
