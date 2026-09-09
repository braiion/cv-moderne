import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);

// Reuse the production generator without adding a second TypeScript runtime.
export function loadPdfSources() {
  const cache = join(root, ".cache");
  mkdirSync(cache, { recursive: true });
  const output = mkdtempSync(join(cache, "cv-"));
  try {
    for (const name of ["cv-data", "generate-cv-pdf"]) {
      const source = readFileSync(join(root, "src/lib", `${name}.ts`), "utf8");
      const compiled = ts.transpileModule(source, {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
      });
      writeFileSync(join(output, `${name}.js`), compiled.outputText);
    }
    return { ...require(join(output, "generate-cv-pdf.js")), ...require(join(output, "cv-data.js")) };
  } finally {
    // output is an absolute mkdtemp result directly under this project's cache.
    if (dirname(output) !== cache) throw new Error("Unexpected PDF compiler directory");
    rmSync(output, { recursive: true, force: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { buildCvPdf } = loadPdfSources();
  // Validate both documents before replacing either existing export.
  const documents = ["fr", "en"].map((locale) => [locale, buildCvPdf(locale).output("arraybuffer")]);
  const destination = join(root, "output/pdf");
  mkdirSync(destination, { recursive: true });
  for (const [locale, data] of documents) {
    const name = `CV_Bryan_DUPRESSOIR_${locale.toUpperCase()}.pdf`;
    writeFileSync(join(destination, name), Buffer.from(data));
    console.log(`Generated ${name}`);
  }
}
