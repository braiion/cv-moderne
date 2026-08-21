export type Locale = "fr" | "en";

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

const shared = {
  firstName: "Bryan",
  lastName: "DUPRESSOIR",
  address: "Vandrimare, Normandie",
  phone: "06 17 81 61 32",
  email: "bryandupressoir@live.fr",
  github: "https://github.com/braiion",
  bonneOccaz: "https://bonneoccaz.fr",
};

export const cvContent = {
  fr: {
    localeLabel: "EN",
    nav: { home: "Profil", projects: "Projets", experience: "Parcours", skills: "Compétences", contact: "Me contacter" },
    personal: {
      ...shared,
      title: "Full-Stack Developer & Product Engineer",
      subtitle: "Next.js · React · TypeScript · Supabase",
      summary: "Développeur full-stack et product builder avec plus de 10 ans de parcours IT. Depuis 2024, je conçois deux produits automobiles de bout en bout : stratégie produit, UX, architecture, développement, mise en production et maintenance.",
    },
    hero: {
      availability: "Ouvert aux opportunités — remote ou Normandie",
      kicker: "Je transforme un besoin métier en produit utilisé.",
      intro: "Un profil hybride qui associe développement web moderne, vision produit et expérience terrain des systèmes d’information.",
      primaryCta: "Découvrir BonneOccaz",
      secondaryCta: "Télécharger le CV",
      stats: [
        { value: "10+", label: "ans de parcours IT" },
        { value: "2", label: "produits automobiles" },
        { value: "360°", label: "du besoin à la production" },
      ],
    },
    projectsSection: {
      eyebrow: "Produit phare",
      title: "La preuve par le produit.",
      description: "BonneOccaz concentre mon savoir-faire full-stack, produit et automobile dans une plateforme déployée en production.",
      visit: "Voir le produit en ligne",
      role: "Conçu et développé en autonomie",
      architecture: "Architecture produit",
    },
    project: {
      name: "BonneOccaz.fr",
      status: "Produit en bêta",
      tagline: "Achetez mieux, sans mauvaise surprise.",
      description: "Plateforme automobile de recherche, publication et comparaison d’annonces, enrichie par des outils d’aide à la décision et des parcours professionnels.",
      features: [
        "Recherche rapide et conseiller automobile assistés par IA",
        "Annonces, favoris, messagerie et modération",
        "Indicateur de prix, estimation des coûts et malus",
        "Espaces particuliers, professionnels et services éditoriaux",
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Auth", "RLS", "Realtime", "Resend", "Vercel"],
    },
    experienceSection: {
      eyebrow: "Expérience",
      title: "Un parcours entre produit, métier et technique.",
      description: "Trois environnements, une constante : comprendre le besoin, décider et livrer une solution durable.",
    },
    experiences: [
      {
        id: "product-builder",
        title: "Développeur full-stack / Product Builder",
        company: "Produits automobiles indépendants",
        period: "2024 — Aujourd’hui",
        description: "Conception en autonomie de deux applications automobiles, de l’idée jusqu’à la production.",
        missions: [
          "Définition des parcours, besoins, priorités et décisions produit",
          "Développement responsive avec Next.js, React, TypeScript et Tailwind CSS",
          "Architecture Supabase/PostgreSQL : Auth, Storage, RLS, Realtime et API",
          "Emails transactionnels avec Resend, déploiement Vercel et maintenance continue",
          "Intégration d’outils d’IA dans le produit et le cycle de développement",
        ],
        tags: ["Product", "UX", "Next.js", "React", "Supabase", "Resend"],
      },
      {
        id: "normandie-structures",
        title: "Responsable informatique",
        company: "Normandie Structures",
        location: "Normandie",
        period: "2018 — 2025",
        description: "Pilotage autonome du système d’information et accompagnement des besoins métier.",
        missions: [
          "Audit et gestion du SI : postes, logiciels, réseau et solutions métier",
          "Analyse des besoins, choix, déploiement et maintenance des solutions",
          "Support, formation et accompagnement quotidien des utilisateurs",
          "Coordination de projets, prestataires et interventions techniques",
          "Création du site web et utilisation de RFEM/RWIND pour le prédimensionnement",
        ],
        tags: ["Pilotage SI", "Audit", "Support", "Formation", "Web"],
      },
      {
        id: "renault-cleon",
        title: "Chef de projet en alternance",
        company: "Renault Cléon",
        location: "Cléon (76)",
        period: "2016 — 2018",
        description: "Développement de deux applications métier dans un environnement industriel.",
        missions: [
          "Application ASP.NET MVC de gestion du parking des véhicules neufs",
          "Application PHP de gestion des stocks et de l’outillage par QR codes",
          "Conception et exploitation de bases MySQL et SQL Server",
          "Analyse, spécifications, développement, tests et travail en méthode Agile",
        ],
        tags: ["ASP.NET MVC", "C#", "PHP", "QR codes", "SQL", "Agile"],
      },
    ] satisfies Experience[],
    education: [
      { id: "cesi", diploma: "Titre RNCP niveau 6 — Responsable en ingénierie des logiciels", school: "CESI, Rouen", year: "2018", description: "Architecture logicielle, développement et gestion de projet en alternance." },
      { id: "bts-sio", diploma: "BTS SIO — option SLAM", school: "La Châtaigneraie, Mesnil-Esnard", year: "2016", description: "Solutions logicielles et applications métiers." },
    ] satisfies Education[],
    skillsSection: {
      eyebrow: "Boîte à outils",
      title: "Des compétences pour livrer, pas pour cocher des cases.",
      description: "Une stack récente complétée par une solide compréhension du produit, des utilisateurs et de l’exploitation.",
      education: "Formation",
    },
    skills: [
      { name: "Frontend & produit", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UX", "Product discovery"] },
      { name: "Back-end & data", skills: ["Supabase", "PostgreSQL", "Node.js", "API REST", "Auth", "Storage", "RLS", "Realtime"] },
      { name: "Delivery & outils", skills: ["Git / GitHub", "Vercel", "Resend", "CI/CD", "IA appliquée au développement"] },
      { name: "Systèmes & collaboration", skills: ["Pilotage SI", "Analyse métier", "Support", "Formation", "Coordination", "Agile / Scrum"] },
    ] satisfies SkillCategory[],
    footer: {
      eyebrow: "Disponible pour échanger",
      title: "Construisons un produit utile.",
      text: "Je recherche un poste full-stack, frontend React/Next.js ou Product Engineer, en télétravail ou en Normandie.",
      email: "M’écrire",
      github: "Voir GitHub",
    },
  },
  en: {
    localeLabel: "FR",
    nav: { home: "Profile", projects: "Work", experience: "Experience", skills: "Skills", contact: "Contact me" },
    personal: {
      ...shared,
      title: "Full-Stack Developer & Product Engineer",
      subtitle: "Next.js · React · TypeScript · Supabase",
      summary: "Full-stack developer and product builder with 10+ years in IT. Since 2024, I have been designing two automotive products end to end: product strategy, UX, architecture, development, production and maintenance.",
    },
    hero: {
      availability: "Open to opportunities — remote or Normandy, France",
      kicker: "I turn business needs into products people use.",
      intro: "A hybrid profile combining modern web development, product thinking and hands-on information systems experience.",
      primaryCta: "Explore BonneOccaz",
      secondaryCta: "Download résumé",
      stats: [
        { value: "10+", label: "years in IT" },
        { value: "2", label: "automotive products" },
        { value: "360°", label: "from need to production" },
      ],
    },
    projectsSection: {
      eyebrow: "Featured product",
      title: "Proof through product.",
      description: "BonneOccaz brings together my full-stack, product and automotive experience in a live production platform.",
      visit: "View live product",
      role: "Designed and built independently",
      architecture: "Product architecture",
    },
    project: {
      name: "BonneOccaz.fr",
      status: "Beta product",
      tagline: "Buy smarter, without nasty surprises.",
      description: "An automotive marketplace for searching, publishing and comparing listings, enhanced with decision tools and professional workflows.",
      features: [
        "AI-assisted quick search and automotive advisor",
        "Listings, favourites, messaging and moderation",
        "Price indicator, ownership cost and tax estimation",
        "Consumer, professional and editorial experiences",
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Auth", "RLS", "Realtime", "Resend", "Vercel"],
    },
    experienceSection: {
      eyebrow: "Experience",
      title: "Product, business and technology.",
      description: "Three environments, one constant: understand the need, make decisions and deliver a durable solution.",
    },
    experiences: [
      {
        id: "product-builder",
        title: "Full-stack developer / Product Builder",
        company: "Independent automotive products",
        period: "2024 — Present",
        description: "Independently designing two automotive applications from idea to production.",
        missions: [
          "Defining journeys, requirements, priorities and product decisions",
          "Responsive development with Next.js, React, TypeScript and Tailwind CSS",
          "Supabase/PostgreSQL architecture: Auth, Storage, RLS, Realtime and APIs",
          "Transactional email with Resend, Vercel delivery and ongoing maintenance",
          "Integrating AI tools into both the product and development workflow",
        ],
        tags: ["Product", "UX", "Next.js", "React", "Supabase", "Resend"],
      },
      {
        id: "normandie-structures",
        title: "IT Manager",
        company: "Normandie Structures",
        location: "Normandy, France",
        period: "2018 — 2025",
        description: "Autonomous ownership of the information system and business technology needs.",
        missions: [
          "Auditing and managing workstations, software, networks and business solutions",
          "Analysing needs, selecting, deploying and maintaining solutions",
          "Supporting, training and guiding users day to day",
          "Coordinating projects, vendors and technical work",
          "Building the company website and using RFEM/RWIND for preliminary design",
        ],
        tags: ["IT strategy", "Audit", "Support", "Training", "Web"],
      },
      {
        id: "renault-cleon",
        title: "Apprentice Project Manager",
        company: "Renault Cléon",
        location: "Cléon, France",
        period: "2016 — 2018",
        description: "Built two business applications in an industrial environment.",
        missions: [
          "ASP.NET MVC application for new-vehicle parking management",
          "PHP inventory and tooling application using QR codes",
          "Designed and operated MySQL and SQL Server databases",
          "Requirements, specifications, development, testing and Agile delivery",
        ],
        tags: ["ASP.NET MVC", "C#", "PHP", "QR codes", "SQL", "Agile"],
      },
    ] satisfies Experience[],
    education: [
      { id: "cesi", diploma: "Level 6 RNCP — Software Engineering Manager", school: "CESI, Rouen", year: "2018", description: "Software architecture, development and project management apprenticeship." },
      { id: "bts-sio", diploma: "BTS SIO — SLAM software track", school: "La Châtaigneraie, Mesnil-Esnard", year: "2016", description: "Software solutions and business applications." },
    ] satisfies Education[],
    skillsSection: {
      eyebrow: "Toolkit",
      title: "Skills for shipping, not checkbox filling.",
      description: "A modern stack backed by a strong understanding of product, users and operations.",
      education: "Education",
    },
    skills: [
      { name: "Frontend & product", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UX", "Product discovery"] },
      { name: "Backend & data", skills: ["Supabase", "PostgreSQL", "Node.js", "REST APIs", "Auth", "Storage", "RLS", "Realtime"] },
      { name: "Delivery & tools", skills: ["Git / GitHub", "Vercel", "Resend", "CI/CD", "AI-assisted development"] },
      { name: "Systems & collaboration", skills: ["IT strategy", "Business analysis", "Support", "Training", "Coordination", "Agile / Scrum"] },
    ] satisfies SkillCategory[],
    footer: {
      eyebrow: "Available to talk",
      title: "Let’s build something useful.",
      text: "I am looking for a full-stack, React/Next.js frontend or Product Engineer role, remote or in Normandy, France.",
      email: "Email me",
      github: "View GitHub",
    },
  },
} as const;

export const personalInfo: PersonalInfo = cvContent.fr.personal;
export const experiences: Experience[] = [...cvContent.fr.experiences];
export const education: Education[] = [...cvContent.fr.education];
export const skillCategories: SkillCategory[] = [...cvContent.fr.skills];
