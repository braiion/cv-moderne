import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const english = new URL(request.url).searchParams.get("lang") === "en";
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "64px", background: "#f5f4f0", color: "#222725" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: 26 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 68, height: 68, borderRadius: 18, background: "#222725", color: "#f5f4f0", fontWeight: 700 }}>BD</div>
        <span>{english ? "Experience · Projects · Résumé" : "Parcours · Projets · CV"}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-3px" }}>Bryan Dupressoir</div>
        <div style={{ fontSize: 36, color: "#24634e" }}>{english ? "Full Stack Builder AI-native · JS/TS Developer" : "Full Stack Builder AI-native · Développeur JS/TS"}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #bdc4bb", paddingTop: 24, fontSize: 25, color: "#555e5a" }}>
        <span>React · Next.js · TypeScript · Supabase</span>
        <span>{english ? "Normandy, France · Remote" : "Normandie · Télétravail"}</span>
      </div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400" } },
  );
}
