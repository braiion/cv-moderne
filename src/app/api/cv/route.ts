import { buildCvPdf } from "@/lib/generate-cv-pdf";
import type { Locale } from "@/lib/cv-data";

export async function GET(request: Request) {
  const locale: Locale = new URL(request.url).searchParams.get("lang") === "en" ? "en" : "fr";
  const pdf = buildCvPdf(locale);
  const bytes = pdf.output("arraybuffer");

  return new Response(bytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="CV_Bryan_DUPRESSOIR_${locale.toUpperCase()}.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
