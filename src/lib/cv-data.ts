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
  summary: string;
}

export const shared = {
  firstName: "Bryan",
  lastName: "DUPRESSOIR",
  // E-mail, phone and address live encoded in ./contact so bots cannot harvest them.
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
      summary: "Profil transversal SI, projets, produit et développement, dans l’IT depuis 2016 dont 7 ans de pilotage SI. Je construis des produits web avec des agents IA : je cadre, je spécifie, je découpe en petits incréments, puis je relis, teste et livre le code généré. J’utilise intensivement l’IA générative depuis environ deux ans et demi ; depuis 2024, j’ai conçu ainsi 2 applications automobiles, dont BonneOccaz, jusqu’à la production.",
    },
    hero: {
      availability: "Disponible dès à présent — remote ou Normandie",
      eyebrow: "Développeur full-stack JS/TS",
      kicker: "Je conçois et livre des applications web, du besoin à la production.",
      headline: ["Je conçois et livre des applications web,", "du besoin à la production."],
      intro: "Un parcours transversal en systèmes d’information, gestion de projet et développement. Je cadre le besoin, je construis avec React, Next.js et Supabase, et je m’appuie sur l’IA générative avec une méthode exigeante : spécifications, petits incréments, revue de code et tests.",
      codeFile: "profil.ts",
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
      showcase: "Captures réelles de bonneoccaz.fr, en version ordinateur et mobile.",
      role: "Conçu et développé en autonomie avec l’IA",
      architecture: "Assistant d’aide · RAG/CAG",
      confidential: "Deux applications automobiles développées. BonneOccaz est présentée ici ; le second projet reste confidentiel à ce stade.",
      technicalDetails: "Sources, fonctionnement et évaluation",
      corpus: "97 entrées de FAQ publique et 11 sections du guide professionnel pour l’assistant Pro authentifié. Recherche plein texte et similarité textuelle dans PostgreSQL/Supabase, avec un secours local. Jusqu’à quatre sources sont transmises au modèle de langage (LLM).",
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
    methodSection: {
      eyebrow: "Méthode",
      title: "Une méthode de livraison rigoureuse, assistée par l’IA.",
      description: "L’IA générative accélère la production ; la qualité vient du cadre posé autour.",
      steps: [
        { title: "Cadrer", body: "Besoin métier, parcours et backlog." },
        { title: "Spécifier", body: "Spécifications écrites, découpage en petits incréments." },
        { title: "Construire", body: "Développement assisté par agents IA, relecture du code généré." },
        { title: "Livrer", body: "Tests, vérification de chaque livraison, CI/CD." },
      ],
    },
    costCard: {
      title: "Comparer le budget",
      vehicle: "PORSCHE 911",
      price: "Prix de l’annonce",
      priceValue: "80 000 €",
      fees: "Frais d’immatriculation estimés",
      feesValue: "+ 6 768 €",
      total: "Coût total estimé",
      totalValue: "86 768 €",
      note: "Exemple de démonstration repris de BonneOccaz, non à vendre.",
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
        company: "Indépendant · BonneOccaz.fr et un projet confidentiel",
        period: "2024 — Aujourd’hui",
        note: "Projets commencés en parallèle de mon poste chez Normandie Structures en 2024–2025.",
        description: "Deux applications web automobiles, dont BonneOccaz, dont tout le code est produit par des agents IA. Le second projet reste confidentiel à ce stade.",
        missions: [
          "Conçu 2 applications automobiles, de l’idée au MVP puis à la bêta en production, en cadrant besoins, parcours et backlog",
          "Produit tout le code avec des agents IA, sans écriture manuelle : React, Next.js, TypeScript et Supabase/PostgreSQL (Auth, RLS, Realtime)",
          "Méthode : cadrage et spécifications, petits incréments, relecture du code généré, tests et vérification de chaque livraison",
          "Livré un assistant RAG/CAG sur 97 FAQ et 11 sections Pro, évalué sur 32 questions (top 3, seuil de 90 %)",
          "Fiabilisé la production par des audits menés avec l’IA : régressions, droits d’accès et performance",
          "Automatisé la livraison (Git/GitHub, CI/CD, Vercel, Resend) et maintenu les applications en production",
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
          "Piloté seul le SI pendant 7 ans : parc, logiciels, réseau et solutions métier",
          "Recueilli les besoins des équipes, puis sélectionné et déployé les solutions adaptées",
          "Assuré le support, la gestion des incidents et la formation des utilisateurs",
          "Coordonné les prestataires et piloté les projets techniques jusqu’à la mise en service",
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
          "Développé une application ASP.NET MVC (C#) de gestion du parking des véhicules neufs",
          "Développé une application PHP de gestion des stocks et de l’outillage par QR codes",
          "Conçu et exploité les bases MySQL et SQL Server associées",
          "Mené le cycle complet en Agile : besoins, spécifications, développement et tests",
        ],
        tags: ["ASP.NET MVC", "C#", "PHP", "QR codes", "SQL", "Agile"],
      },
    ] satisfies Experience[],
    education: [
      { id: "cesi", diploma: "Bac+4 – Responsable en ingénierie des logiciels", school: "CESI Rouen", year: "2016 — 2018", description: "Titre RNCP niveau 6, 2 ans après BTS, en alternance." },
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
      { name: "Agents IA & livraison", skills: ["Agents de code IA", "IA générative", "LLM", "Instructions de projet", "Tests & revue de code", "Git / GitHub", "CI/CD", "Vercel", "Resend", "RAG / CAG"] },
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
      summary: "Cross-functional profile spanning IT systems, projects, product and development, in IT since 2016 including 7 years owning IT systems. I build web products with AI agents: I scope, write specifications, split the work into small increments, then review, test and ship the generated code. I have used generative AI intensively for about two and a half years; since 2024, I have designed 2 automotive applications this way, including BonneOccaz, through to production.",
    },
    hero: {
      availability: "Available now — remote or Normandy, France",
      eyebrow: "Full-stack JS/TS developer",
      kicker: "I design and ship web applications, from the first need to production.",
      headline: ["I design and ship web applications,", "from the first need to production."],
      intro: "A cross-functional background in IT systems, project management and development. I scope the need, build with React, Next.js and Supabase, and rely on generative AI with a demanding method: specifications, small increments, code review and testing.",
      codeFile: "profile.ts",
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
      showcase: "Real screenshots of bonneoccaz.fr, on desktop and mobile.",
      role: "Designed and built independently with AI",
      architecture: "Help assistant · RAG/CAG",
      confidential: "Two automotive applications developed. BonneOccaz is presented here; the second project remains confidential at this stage.",
      technicalDetails: "Sources, implementation and evaluation",
      corpus: "97 public FAQ entries and 11 professional guide sections for the authenticated Pro assistant. PostgreSQL/Supabase full-text search and text similarity, with a local fallback. Up to four sources are passed to the language model (LLM).",
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
    methodSection: {
      eyebrow: "Method",
      title: "A rigorous delivery method, assisted by AI.",
      description: "Generative AI speeds up production; quality comes from the framework around it.",
      steps: [
        { title: "Scope", body: "Business need, user journeys and backlog." },
        { title: "Specify", body: "Written specifications, split into small increments." },
        { title: "Build", body: "Development assisted by AI agents, generated code reviewed." },
        { title: "Ship", body: "Testing, verification of every release, CI/CD." },
      ],
    },
    costCard: {
      title: "Compare the budget",
      vehicle: "PORSCHE 911",
      price: "Listing price",
      priceValue: "€80,000",
      fees: "Estimated registration fees",
      feesValue: "+ €6,768",
      total: "Estimated total cost",
      totalValue: "€86,768",
      note: "Demonstration example taken from BonneOccaz, not for sale.",
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
        company: "Independent · BonneOccaz.fr and a confidential project",
        period: "2024 — Present",
        note: "Projects started alongside my role at Normandie Structures in 2024–2025.",
        description: "Two automotive web applications, including BonneOccaz, with all code produced by AI agents. The second project remains confidential at this stage.",
        missions: [
          "Designed 2 automotive applications, from idea to MVP and a beta in production, by scoping needs, journeys and backlog",
          "Produced all code with AI agents, with no hand-written code: React, Next.js, TypeScript and Supabase/PostgreSQL (Auth, RLS, Realtime)",
          "Method: scoping and specifications, small increments, review of generated code, testing and verification of every release",
          "Shipped a RAG/CAG assistant over 97 FAQ entries and 11 Pro sections, evaluated on 32 questions (top 3, 90% threshold)",
          "Hardened production through AI-assisted audits: regressions, access control and performance",
          "Automated delivery (Git/GitHub, CI/CD, Vercel, Resend) and maintained the applications in production",
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
          "Owned IT systems single-handedly for 7 years: hardware, software, network and business apps",
          "Gathered team requirements, then selected and deployed suitable solutions",
          "Provided user support, incident management and training",
          "Coordinated vendors and led technical projects through to go-live",
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
          "Developed an ASP.NET MVC (C#) application for new-vehicle parking management",
          "Developed a PHP inventory and tooling application using QR codes",
          "Designed and operated the related MySQL and SQL Server databases",
          "Ran the full Agile cycle: requirements, specifications, development and testing",
        ],
        tags: ["ASP.NET MVC", "C#", "PHP", "QR codes", "SQL", "Agile"],
      },
    ] satisfies Experience[],
    education: [
      { id: "cesi", diploma: "Bac+4 – Software Engineering Manager", school: "CESI Rouen", year: "2016 — 2018", description: "French RNCP level 6 title, 2 years after the BTS, work-study programme." },
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
      { name: "AI agents & delivery", skills: ["AI coding agents", "Generative AI", "LLM", "Project instructions", "Testing & code review", "Git / GitHub", "CI/CD", "Vercel", "Resend", "RAG / CAG"] },
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
