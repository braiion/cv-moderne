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
  note?: string;
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

export const shared = {
  firstName: "Bryan",
  lastName: "DUPRESSOIR",
  address: "Vandrimare, Normandie",
  phone: "06 17 81 61 32",
  email: "bryandupressoir@live.fr",
  portfolio: "https://bryandupressoir.vercel.app",
  github: "https://github.com/braiion",
  bonneOccaz: "https://bonneoccaz.fr",
};

export const cvContent = {
  fr: {
    localeLabel: "EN",
    nav: { home: "Profil", projects: "Projets", experience: "Parcours", skills: "Compétences", contact: "Me contacter" },
    personal: {
      ...shared,
      title: "Full Stack Builder AI-native · Développeur JS/TS",
      subtitle: "Développement agentique · IA générative · React · Next.js · Supabase",
      summary: "Développeur full-stack JS/TS, avec un parcours IT depuis 2016 et 7 ans de pilotage SI. Depuis 2024, je construis des produits automobiles avec l’IA dès leur démarrage. Pratique intensive des agents de code : cadrage, instructions de projet, développement, tests, revue et livraison.",
    },
    hero: {
      availability: "Ouvert aux opportunités — remote ou Normandie",
      kicker: "Je construis des produits avec l’IA, du besoin à la production.",
      intro: "Le développement avec l’IA est au cœur de ma méthode depuis le début de mes projets. Je cadre les besoins, pilote les agents de code et vérifie les résultats à chaque itération.",
      primaryCta: "Découvrir BonneOccaz",
      secondaryCta: "Télécharger le CV",
      stats: [
        { value: "Depuis 2016", label: "parcours IT" },
        { value: "2 produits", label: "automobiles conçus" },
        { value: "MVP → prod", label: "cadrage, démonstration et itérations" },
      ],
      loop: [
        { label: "Comprendre", note: "besoin métier" },
        { label: "Concevoir", note: "MVP & instructions de projet" },
        { label: "Construire", note: "full-stack & agents de code" },
        { label: "Livrer", note: "tests, revue & production" },
        { label: "Apprendre", note: "itérations produit" },
      ],
      release: "Produit présenté · BonneOccaz, en bêta",
    },
    projectsSection: {
      eyebrow: "Produit phare",
      title: "BonneOccaz, du besoin à la production.",
      description: "Un produit construit avec l’IA dès son démarrage : spécifier le besoin, guider les agents, vérifier les fonctionnalités et faire évoluer l’application.",
      visit: "Voir le produit en ligne",
      role: "Conçu et développé en autonomie avec l’IA",
      architecture: "Assistant d’aide · RAG/CAG",
      confidential: "Deux applications automobiles développées. BonneOccaz est présentée ici ; le second projet reste confidentiel à ce stade.",
      technicalDetails: "Sources, fonctionnement et évaluation",
      corpus: "97 entrées de FAQ publique et 11 sections du guide professionnel pour l’assistant Pro authentifié. Recherche plein texte et similarité textuelle dans PostgreSQL/Supabase, avec un secours local. Jusqu’à quatre sources sont transmises à DeepSeek.",
      safeguards: "Seuil minimal de pertinence, validation des identifiants cités et réponses de repli ou orientation vers le support. Les tests couvrent les citations inventées, les tentatives d’injection et la séparation public/Pro. Le mode CAG est configurable et conserve les restrictions de citation du RAG.",
      evaluation: "Pilote de 32 questions pour la recherche locale : contrôle de la présence du document attendu parmi les trois premiers résultats, avec un seuil de 90 %. Cette évaluation ne mesure pas encore systématiquement l’exactitude et la fidélité des réponses générées.",
      examplesTitle: "Deux exemples de réalisation",
      examples: [
        { title: "Comparer avant de choisir", body: "Un conseiller IA aide à préciser le besoin et à trouver un véhicule sur la plateforme. Recherche et comparaison d’annonces, indicateur de prix et estimations des coûts complètent ce parcours." },
        { title: "Répondre avec des sources contrôlées", body: "Pour l’aide sur la plateforme, recherche documentaire dans Supabase/PostgreSQL, validation des citations et séparation des contenus publics et Pro. Des réponses de repli prennent le relais lorsque les sources sont insuffisantes." },
      ],
      aiScope: "Aide à l’utilisation de BonneOccaz, à partir d’un corpus interne versionné dans Git. Aucun accès au Web ni aux données personnelles des comptes. Le schéma ci-dessus est illustratif.",
    },
    project: {
      name: "BonneOccaz.fr",
      status: "Produit en bêta",
      tagline: "Achetez mieux, sans mauvaise surprise.",
      description: "Plateforme automobile de recherche, publication et comparaison d’annonces, enrichie par des outils d’aide à la décision, des parcours professionnels, un conseiller automobile IA et un assistant d’aide à l’utilisation.",
      features: [
        "Conseiller IA : définir le besoin et trouver un véhicule sur la plateforme",
        "Assistance RAG/CAG : corpus interne, citations validées, tests d’injection et séparation public/Pro",
        "Annonces, favoris, messagerie et modération",
        "Indicateur de prix, estimation des coûts et malus",
        "Espaces particuliers et professionnels",
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "RAG/CAG", "Auth", "RLS", "Realtime", "Resend", "Vercel"],
    },
    experienceSection: {
      eyebrow: "Expérience",
      title: "Un parcours entre produit, métier et technique.",
      description: "Trois environnements, une constante : comprendre le besoin, décider et livrer une solution durable.",
    },
    experiences: [
      {
        id: "product-builder",
        title: "Full Stack Builder / Développeur JS/TS",
        company: "Produits automobiles indépendants",
        period: "2024 — Aujourd’hui",
        note: "Projets commencés en parallèle de mon poste chez Normandie Structures en 2024–2025.",
        description: "Deux applications web automobiles construites avec l’IA dès leur démarrage, dont BonneOccaz. Le second projet reste confidentiel à ce stade.",
        missions: [
          "Cadrage produit et MVP : besoins, parcours utilisateurs, backlog, spécifications et instructions de projet pour les agents",
          "Développement agentique intensif : implémentation, refactoring, tests et revue du code généré",
          "Full-stack React, Next.js, TypeScript et Node.js ; Supabase/PostgreSQL, API REST, Auth, RLS et Realtime",
          "Pilotage d’audits et de corrections avec l’IA : régressions, authentification, droits d’accès et performance",
          "Git/GitHub, CI/CD, Vercel et Resend ; vérification des livraisons et maintenance en production",
        ],
        tags: ["Full Stack Builder", "Agents de code", "IA générative", "MVP", "React", "Next.js", "TypeScript"],
      },
      {
        id: "normandie-structures",
        title: "Responsable informatique",
        company: "Normandie Structures",
        location: "Normandie",
        period: "2018 — 2025",
        description: "Pilotage autonome du système d’information, des projets techniques et des besoins métier.",
        missions: [
          "Audit et gestion du SI : parc informatique, logiciels, réseau et solutions métier",
          "Recueil et analyse des besoins, choix, déploiement et maintenance des solutions",
          "Support utilisateurs, gestion des incidents, formation et accompagnement au changement",
          "Pilotage de projets, coordination des prestataires et interventions techniques",
          "Création du site web et utilisation de RFEM/RWIND pour le prédimensionnement",
        ],
        tags: ["Pilotage SI", "Gestion de projet", "Audit", "Support", "Formation"],
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
          "Recueil des besoins, spécifications fonctionnelles, développement, tests et méthode Agile",
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
      description: "Une stack récente complétée par une solide compréhension du produit, du MVP à l’exploitation.",
      education: "Formation",
    },
    skills: [
      { name: "Frontend & produit", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Responsive Design", "UX", "Product discovery", "Cadrage MVP", "Prototypage rapide"] },
      { name: "Back-end & data", skills: ["Node.js", "Supabase", "PostgreSQL", "SQL", "API REST", "Auth", "Storage", "RLS", "Realtime", "Modélisation des données"] },
      { name: "Agents IA & livraison", skills: ["Agents de code", "IA générative", "Instructions de projet", "Tests & revue de code", "Git / GitHub", "CI/CD", "Vercel", "Resend", "RAG / CAG"] },
      { name: "Systèmes & collaboration", skills: ["Pilotage SI", "Gestion de projet", "Analyse fonctionnelle", "Recueil des besoins", "Support utilisateurs", "Formation", "Coordination de prestataires", "Agile / Scrum"] },
    ] satisfies SkillCategory[],
    footer: {
      eyebrow: "Disponible pour échanger",
      title: "Construisons un produit utile.",
      text: "Je recherche un poste de Full Stack Builder, développeur JS/TS ou Product Engineer, avec une place centrale pour le développement avec l’IA, en télétravail ou en Normandie.",
      email: "M’écrire",
      github: "Voir GitHub",
    },
  },
  en: {
    localeLabel: "FR",
    nav: { home: "Profile", projects: "Work", experience: "Experience", skills: "Skills", contact: "Contact me" },
    personal: {
      ...shared,
      title: "Full Stack Builder AI-native · JS/TS Developer",
      subtitle: "Agentic development · Generative AI · React · Next.js · Supabase",
      summary: "Full-stack JS/TS developer with an IT career starting in 2016 and 7 years of IT systems ownership. Since 2024, I have built automotive products with AI from the outset. Extensive hands-on use of coding agents: scoping, project instructions, development, testing, review and delivery.",
    },
    hero: {
      availability: "Open to opportunities — remote or Normandy, France",
      kicker: "I build products with AI, from the first need to production.",
      intro: "AI development has been central to my approach since the start of my projects. I scope requirements, guide coding agents and verify results at each iteration.",
      primaryCta: "Explore BonneOccaz",
      secondaryCta: "Download résumé",
      stats: [
        { value: "Since 2016", label: "working across IT" },
        { value: "2 products", label: "designed for automotive" },
        { value: "MVP → prod", label: "scoping, demos and iterations" },
      ],
      loop: [
        { label: "Understand", note: "business need" },
        { label: "Design", note: "MVP & project instructions" },
        { label: "Build", note: "full-stack & coding agents" },
        { label: "Ship", note: "tests, review & production" },
        { label: "Learn", note: "product iterations" },
      ],
      release: "Featured product · BonneOccaz, in beta",
    },
    projectsSection: {
      eyebrow: "Featured product",
      title: "BonneOccaz, from need to production.",
      description: "A product built with AI from the outset: specify the need, guide agents, verify features and keep improving the application.",
      visit: "View live product",
      role: "Designed and built independently with AI",
      architecture: "Help assistant · RAG/CAG",
      confidential: "Two automotive applications developed. BonneOccaz is presented here; the second project remains confidential at this stage.",
      technicalDetails: "Sources, implementation and evaluation",
      corpus: "97 public FAQ entries and 11 professional guide sections for the authenticated Pro assistant. PostgreSQL/Supabase full-text search and text similarity, with a local fallback. Up to four sources are passed to DeepSeek.",
      safeguards: "A minimum relevance threshold, validation of cited source IDs, and fallback answers or support referrals. Tests cover fabricated citations, injection attempts and public/Pro separation. Configurable CAG mode retains the RAG citation restrictions.",
      evaluation: "A 32-question pilot for local retrieval checks whether the expected document appears in the top three results, with a 90% threshold. This evaluation does not yet systematically measure the accuracy and faithfulness of generated answers.",
      examplesTitle: "Two implementation examples",
      examples: [
        { title: "Compare before choosing", body: "An AI advisor helps clarify the need and find a vehicle on the platform. Listing search and comparison, a price indicator and cost estimates complete the journey." },
        { title: "Answer from controlled sources", body: "For platform help, document retrieval in Supabase/PostgreSQL, citation validation and separation of public and Pro content. Fallback answers take over when sources are insufficient." },
      ],
      aiScope: "Help with using BonneOccaz, based on an internal corpus versioned in Git. No access to the Web or personal account data. The diagram above is illustrative.",
    },
    project: {
      name: "BonneOccaz.fr",
      status: "Beta product",
      tagline: "Buy smarter, without nasty surprises.",
      description: "An automotive marketplace for searching, publishing and comparing listings, enhanced with decision tools, professional workflows, an AI automotive advisor and a platform help assistant.",
      features: [
        "AI advisor: identify needs and find a vehicle on the platform",
        "RAG/CAG assistance: internal corpus, validated citations, injection tests and public/Pro separation",
        "Listings, favourites, messaging and moderation",
        "Price indicator, ownership cost and tax estimation",
        "Consumer and professional account experiences",
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "RAG/CAG", "Auth", "RLS", "Realtime", "Resend", "Vercel"],
    },
    experienceSection: {
      eyebrow: "Experience",
      title: "Product, business and technology.",
      description: "Three environments, one constant: understand the need, make decisions and deliver a durable solution.",
    },
    experiences: [
      {
        id: "product-builder",
        title: "Full Stack Builder / JS/TS Developer",
        company: "Independent automotive products",
        period: "2024 — Present",
        note: "Projects started alongside my role at Normandie Structures in 2024–2025.",
        description: "Two automotive web applications built with AI from the outset, including BonneOccaz. The second project remains confidential at this stage.",
        missions: [
          "Product and MVP scoping: requirements, user journeys, backlog, specifications and project instructions for agents",
          "Extensive agentic development: implementation, refactoring, testing and generated code review",
          "Full-stack React, Next.js, TypeScript and Node.js; Supabase/PostgreSQL, REST APIs, Auth, RLS and Realtime",
          "Directing AI-assisted audits and fixes: regressions, authentication, access control and performance",
          "Git/GitHub, CI/CD, Vercel and Resend; delivery verification and production maintenance",
        ],
        tags: ["Full Stack Builder", "Coding agents", "Generative AI", "MVP", "React", "Next.js", "TypeScript"],
      },
      {
        id: "normandie-structures",
        title: "IT Manager",
        company: "Normandie Structures",
        location: "Normandy, France",
        period: "2018 — 2025",
        description: "Autonomous ownership of information systems, technical projects and business technology needs.",
        missions: [
          "Auditing and managing IT assets, software, networks and business applications",
          "Requirements gathering and analysis, solution selection, deployment and maintenance",
          "User support, incident management, training and change enablement",
          "Project delivery, vendor coordination and technical operations",
          "Building the company website and using RFEM/RWIND for preliminary design",
        ],
        tags: ["IT strategy", "Project Management", "Audit", "Support", "Training"],
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
          "Requirements gathering, functional specifications, development, testing and Agile delivery",
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
      description: "A modern stack backed by a strong understanding of product, from MVP to operations.",
      education: "Education",
    },
    skills: [
      { name: "Frontend & product", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Responsive Design", "UX", "Product discovery", "MVP scoping", "Rapid prototyping"] },
      { name: "Backend & data", skills: ["Node.js", "Supabase", "PostgreSQL", "SQL", "REST APIs", "Auth", "Storage", "RLS", "Realtime", "Data modelling"] },
      { name: "AI agents & delivery", skills: ["Coding agents", "Generative AI", "Project instructions", "Testing & code review", "Git / GitHub", "CI/CD", "Vercel", "Resend", "RAG / CAG"] },
      { name: "Systems & collaboration", skills: ["IT strategy", "Project Management", "Business analysis", "Requirements gathering", "User support", "Training", "Vendor coordination", "Agile / Scrum"] },
    ] satisfies SkillCategory[],
    footer: {
      eyebrow: "Available to talk",
      title: "Let’s build something useful.",
      text: "I am looking for a Full Stack Builder, JS/TS developer or Product Engineer role with AI development at its core, remote or in Normandy, France.",
      email: "Email me",
      github: "View GitHub",
    },
  },
} as const;

export const personalInfo: PersonalInfo = cvContent.fr.personal;
export const experiences: Experience[] = [...cvContent.fr.experiences];
export const education: Education[] = [...cvContent.fr.education];
export const skillCategories: SkillCategory[] = [...cvContent.fr.skills];
