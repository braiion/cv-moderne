// ─── Types ────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  missions: string[];
  tags?: string[];
}

export interface Education {
  id: string;
  diploma: string;
  school: string;
  year: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  summary: string;
}

// ─── Data ─────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  firstName: "Bryan",
  lastName: "DUPRESSOIR",
  title: "Chef de Projet",
  subtitle: "Responsable Informatique",
  address: "18 rue des écoles, 27380 Vandrimare",
  phone: "06 17 81 61 32",
  email: "bryandupressoir@live.fr",
  summary:
    "Responsable informatique avec 7 ans d'expérience en gestion de projets IT, développement d'applications web, et administration de systèmes. Passionné par les technologies modernes, je conçois et déploie des solutions full-stack avec Next.js 16, Supabase et Vercel.",
};

export const experiences: Experience[] = [
  {
    id: "projets-perso",
    title: "Développeur Full-Stack",
    company: "Projets Personnels",
    period: "2024 – Présent",
    description:
      "Conception et développement d'applications web modernes déployées en production.",
    missions: [
      "Développement d'applications web full-stack avec Next.js 16, Supabase et Tailwind CSS",
      "Déploiement continu sur Vercel avec gestion de versions via GitHub",
      "Gestion de bases de données PostgreSQL via Supabase (Auth, Storage, RLS)",
      "Conception d'interfaces responsive avec système de thèmes (Dark/Light mode)",
    ],
    tags: ["Next.js 16", "Supabase", "TypeScript", "Vercel", "GitHub"],
  },
  {
    id: "normandie-structures",
    title: "Responsable Informatique",
    company: "Normandie Structures",
    location: "Normandie",
    period: "2018 – 2025",
    description:
      "Gestion complète du système d'information et développement de solutions métier.",
    missions: [
      "Prédimensionnement de charpente métallo-textile via DLUBAL SOFTWARE (RWIND, RFEM)",
      "Gestion complète du parc informatique (postes, serveurs, réseau)",
      "Maintenance hardware et support utilisateurs niveau 1 à 3",
      "Création et maintenance du site web vitrine de l'entreprise",
      "Administration des sauvegardes et de la sécurité réseau",
    ],
    tags: ["Windows Server", "Réseau", "Hardware", "Web"],
  },
  {
    id: "renault-cleon",
    title: "Chef de Projet (Alternance)",
    company: "Renault Cléon",
    location: "Cléon (76)",
    period: "2016 – 2018",
    description:
      "Développement d'applications Intranet dans un environnement industriel.",
    missions: [
      "Développement d'applications Intranet en PHP et ASP.NET MVC",
      "Conception de bases de données MySQL et SQL Server",
      "Rédaction de spécifications fonctionnelles et techniques",
      "Méthodologie AGILE (Scrum) avec sprints de 2 semaines",
    ],
    tags: ["PHP", "ASP.NET MVC", "C#", "MySQL", "AGILE"],
  },
];

export const education: Education[] = [
  {
    id: "cesi",
    diploma: "Titre RNCP Niv. 6 — Responsable en Ingénierie des Logiciels",
    school: "CESI École d'Ingénieurs",
    year: "2018",
    description:
      "Formation en alternance couvrant la gestion de projet, l'architecture logicielle et le développement full-stack.",
  },
  {
    id: "bts-sio",
    diploma: "BTS SIO — Option SLAM",
    school: "Lycée Les Fontenelles, Louviers",
    year: "2016",
    description:
      "Solutions Logicielles et Applications Métiers. Spécialisation en développement web et bases de données.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Langages & Frameworks",
    skills: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "C#",
      "HTML / CSS",
      "Next.js 16",
      "ASP.NET MVC",
      "Tailwind CSS",
    ],
  },
  {
    name: "Back-End & Data",
    skills: [
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Node.js",
      "REST API",
    ],
  },
  {
    name: "DevOps & Outils",
    skills: [
      "Git / GitHub",
      "Vercel",
      "GitHub Actions",
      "VS Code",
      "Docker (notions)",
    ],
  },
  {
    name: "Méthodologie & Gestion",
    skills: [
      "Méthode AGILE / Scrum",
      "Gestion de parc informatique",
      "Support utilisateurs",
      "Rédaction de cahiers des charges",
    ],
  },
];
