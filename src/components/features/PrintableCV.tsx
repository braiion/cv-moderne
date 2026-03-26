"use client";

import {
  personalInfo,
  experiences,
  education,
  skillCategories,
} from "@/lib/cv-data";
import { Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { forwardRef } from "react";

const PrintableCV = forwardRef<HTMLDivElement>(function PrintableCV(_, ref) {
  return (
    <div
      ref={ref}
      className="hidden print:block"
      style={{
        width: "210mm",
        height: "297mm",
        padding: "10mm 14mm",
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "10pt",
        lineHeight: "1.5",
        color: "#1e293b",
        background: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ─── Header ────────────────────────────────────── */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "10px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Profil.png"
          alt="Photo"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center 10%",
            border: "3px solid #3b82f6",
            flexShrink: 0,
          }}
        />

        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "24pt",
              fontWeight: 700,
              margin: 0,
              color: "#0f172a",
              letterSpacing: "-0.5px",
            }}
          >
            {personalInfo.firstName}{" "}
            <span style={{ color: "#2563eb" }}>{personalInfo.lastName}</span>
          </h1>
          <p
            style={{
              fontSize: "12pt",
              color: "#475569",
              margin: "3px 0 0",
              fontWeight: 500,
            }}
          >
            {personalInfo.title} · {personalInfo.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            fontSize: "9pt",
            color: "#64748b",
            textAlign: "right",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "flex-end" }}>
            <Mail size={11} /> {personalInfo.email}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "flex-end" }}>
            <Phone size={11} /> {personalInfo.phone}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "flex-end" }}>
            <MapPin size={11} /> {personalInfo.address}
          </span>
        </div>
      </div>

      {/* Summary */}
      <p
        style={{
          fontSize: "9.5pt",
          color: "#475569",
          margin: "0 0 10px",
          borderLeft: "3px solid #3b82f6",
          paddingLeft: "10px",
          lineHeight: "1.6",
        }}
      >
        {personalInfo.summary}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(to right, #3b82f6, #93c5fd, #e2e8f0)",
          marginBottom: "12px",
        }}
      />

      {/* ─── Two-column layout — fills remaining space ── */}
      <div style={{ display: "flex", gap: "20px", flex: 1 }}>
        {/* LEFT: Experience */}
        <div style={{ flex: 1.4, display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontSize: "11.5pt",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#2563eb",
              margin: "0 0 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              borderBottom: "2px solid #dbeafe",
              paddingBottom: "5px",
            }}
          >
            <Briefcase size={14} /> Expérience Professionnelle
          </h2>

          <div>
            {experiences.map((exp, idx) => (
              <div key={exp.id} style={{ marginBottom: idx < experiences.length - 1 ? "16px" : "0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <strong style={{ fontSize: "11pt", color: "#0f172a" }}>
                    {exp.title}
                  </strong>
                  <span
                    style={{
                      fontSize: "9pt",
                      color: "#2563eb",
                      fontWeight: 600,
                      flexShrink: 0,
                      marginLeft: "8px",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "9pt",
                    color: "#64748b",
                    fontStyle: "italic",
                    margin: "2px 0 5px",
                  }}
                >
                  {exp.company}
                  {exp.location ? ` — ${exp.location}` : ""}
                </p>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "16px",
                    fontSize: "9pt",
                    color: "#334155",
                    lineHeight: "1.6",
                  }}
                >
                  {exp.missions.map((m, i) => (
                    <li key={i} style={{ marginBottom: "3px" }}>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Formation + Skills */}
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column" }}>
          {/* Formation */}
          <h2
            style={{
              fontSize: "11.5pt",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#2563eb",
              margin: "0 0 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              borderBottom: "2px solid #dbeafe",
              paddingBottom: "5px",
            }}
          >
            <GraduationCap size={14} /> Formation
          </h2>

          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: "14px" }}>
              <strong style={{ fontSize: "10pt", color: "#0f172a" }}>
                {edu.diploma}
              </strong>
              <p
                style={{
                  fontSize: "9pt",
                  color: "#64748b",
                  margin: "3px 0 0",
                }}
              >
                {edu.school} — {edu.year}
              </p>
              {edu.description && (
                <p style={{ fontSize: "8.5pt", color: "#475569", margin: "4px 0 0", lineHeight: "1.5" }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}

          {/* Divider */}
          <div
            style={{
              height: "1.5px",
              background: "#dbeafe",
              margin: "8px 0 14px",
            }}
          />

          {/* Skills — fills remaining space */}
          <h2
            style={{
              fontSize: "11.5pt",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#2563eb",
              margin: "0 0 12px",
              borderBottom: "2px solid #dbeafe",
              paddingBottom: "5px",
            }}
          >
            Compétences
          </h2>

          <div>
            {skillCategories.map((cat, idx) => (
              <div key={cat.name} style={{ marginBottom: idx < skillCategories.length - 1 ? "12px" : "0" }}>
                <p
                  style={{
                    fontSize: "8.5pt",
                    fontWeight: 700,
                    color: "#475569",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    margin: "0 0 4px",
                  }}
                >
                  {cat.name}
                </p>
                <p
                  style={{
                    fontSize: "9pt",
                    color: "#334155",
                    margin: 0,
                    lineHeight: "1.65",
                  }}
                >
                  {cat.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default PrintableCV;
