import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const english = new URL(request.url).searchParams.get("lang") === "en";
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#f6f7f9", color: "#0c0d10" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: "64px" }}>
        <div style={{ display: "flex", borderTop: "4px solid #0c0d10", paddingTop: 20, fontSize: 26, fontWeight: 600 }}>
          {english ? "Experience · Projects · Résumé" : "Parcours · Projets · CV"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: "-4px", lineHeight: 0.95 }}>Bryan Dupressoir</div>
          <div style={{ fontSize: 34, color: "#2340ff", fontWeight: 600 }}>{english ? "Full Stack Builder AI-native · JS/TS Developer" : "Full Stack Builder AI-native · Développeur JS/TS"}</div>
        </div>
        <div style={{ display: "flex", fontSize: 25, color: "#4a4f5a" }}>React / Next.js / TypeScript / Supabase</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", width: 300, padding: "48px 40px", background: "#2340ff", color: "#ffffff", fontSize: 26, fontWeight: 600 }}>
        <div style={{ display: "flex" }}>{english ? "Normandy, France" : "Normandie"}</div>
        <div style={{ display: "flex", opacity: 0.86 }}>{english ? "Remote" : "Télétravail"}</div>
      </div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400" } },
  );
}
