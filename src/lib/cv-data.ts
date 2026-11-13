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

export interface SideProject {
  id: string;
  name: string;
  url?: string;
  status: string;
  kind: string;
  description: string;
  features: string[];
  tags: string[];
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
  revGuessr: "https://www.revguessr.com",
};

export const cvContent = {
  fr: {
    localeLabel: "EN",
    nav: { home: "Profil", projects: "Projets", experience: "Parcours", skills: "Compétences", contact: "Me contacter" },
    personal: {
      ...shared,
      title: "Développeur Full-Stack JS/TS · IA générative",
      subtitle: "Product Engineer · Agents IA · LLM · RAG · React · Next.js · Supabase",
      summary: "Développeur full-stack JS/TS orienté IA générative, avec une expérience en produit et pilotage SI depuis 2016. Je construis des applications web jusqu’en production avec React, Next.js, TypeScript, Supabase/PostgreSQL et des agents IA : spécification, petits incréments, relecture, tests et livraison. 3 projets automobiles depuis 2024.",
    },
    hero: {
      availability: "Disponible dès à présent — remote ou Normandie",
      eyebrow: "Développeur Full-Stack JS/TS · IA générative",
      kicker: "Je conçois et livre des applications web, du besoin à la production.",
      headline: ["Je conçois et livre des applications web,", "du besoin à la production"],
      intro: "Un parcours transversal en systèmes d’information, gestion de projet et développement. Je cadre le besoin, je construis avec React, Next.js et Supabase, et je m’appuie sur l’IA générative avec une méthode exigeante : spécifications, petits incréments, revue de code et tests.",
      codeFile: "profil.ts",
      primaryCta: "Découvrir BonneOccaz",
      secondaryCta: "Télécharger le CV",
      stats: [
        { value: "Depuis 2016", label: "parcours IT" },
        { value: "3 projets", label: "automobiles conçus" },
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
      title: "BonneOccaz, du besoin à la production",
      description: "Un produit construit avec l’IA dès son démarrage : spécifier le besoin, guider les agents, vérifier les fonctionnalités et faire évoluer l’application.",
      visit: "Voir le produit en ligne",
      showcase: "Captures réelles de bonneoccaz.fr, en version ordinateur et mobile.",
      role: "Conçu et développé en autonomie avec l’IA",
      architecture: "Assistant d’aide · RAG/CAG",
      otherTitle: "Autres projets",
      otherDescription: "Deux autres produits automobiles, construits avec la même méthode.",
      otherVisit: "Voir le site",
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
      tagline: "Achetez mieux, sans mauvaise surprise",
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
    otherProjects: [
      {
        id: "revguessr",
        name: "RevGuessr.com",
        url: shared.revGuessr,
        status: "En ligne",
        kind: "Jeu web",
        description: "Jeu web où l’on reconnaît une voiture à son bruit moteur, avec environ 850 sons. Défis solo, multijoueur en temps réel, classement, progression, Premium, contributions des joueurs et guides d’écoute, en trois langues.",
        features: [
          "Défis solo : contre-la-montre, mort subite, défi du jour, voiture du jour, trouve la voiture, plus récente ?",
          "Multijoueur en temps réel : Classique, Élimination jusqu’à 12 joueurs, partie rapide et invitation par lien",
          "Environ 850 sons moteur d’environ 70 marques, avec crédits et licences de chaque enregistrement",
          "Progression : XP, niveaux, badges, records et classement hebdomadaire",
          "Dépôt de sons par les joueurs, modération et espace d’administration",
          "Premium par abonnement avec Stripe, parrainage, guides d’écoute et pages marques",
          "Interface en français, anglais et espagnol, pensée pour le mobile",
          "Qualité : 471 tests Jest et contrats de base de données exécutés sur PGlite",
        ],
        tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "NextAuth", "Stripe", "Zustand", "TanStack Query", "Jest", "Vercel"],
      },
      {
        id: "paddock-studio",
        name: "Paddock Studio",
        status: "Sortie en préparation",
        kind: "Application pour simulateur",
        description: "Application en jeu pour le simulateur Assetto Corsa (Custom Shaders Patch) : ambiances heure, date et météo appliquées en un clic, filtre visuel réaliste, caméras et ingénieur de piste qui adapte pneus, pressions et aides à la météo.",
        features: [
          "Bibliothèque d’ambiances avec transitions douces et scènes personnelles",
          "Ingénieur de piste : gomme, pressions, antipatinage et ABS selon la météo",
          "Mesure des performances image par image pour éviter les à-coups",
          "Interface et guides en français, anglais et espagnol, paquet de distribution automatisé",
        ],
        tags: ["Lua", "Custom Shaders Patch", "Python", "Assetto Corsa", "Agents IA"],
      },
    ] satisfies SideProject[],
    methodSection: {
      eyebrow: "Méthode",
      title: "Une méthode de livraison rigoureuse, assistée par l’IA",
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
      title: "Un parcours entre produit, métier et technique",
      description: "Trois environnements, une constante : comprendre le besoin, décider et livrer une solution durable.",
    },
    experiences: [
      {
        id: "product-builder",
        title: "Full Stack Builder / Développeur JS/TS",
        company: "Indépendant · BonneOccaz.fr, RevGuessr.com et Paddock Studio",
        period: "2024 — Aujourd’hui",
        note: "Projets commencés en parallèle de mon poste chez Normandie Structures en 2024–2025.",
        description: "Conception et mise en production de 2 applications web automobiles, BonneOccaz et RevGuessr, avec React, Next.js, TypeScript et Supabase/PostgreSQL, en utilisant des agents IA pour spécifier, relire, refactorer et tester les livraisons.",
        missions: [
          "Mené BonneOccaz et RevGuessr de l’idée au MVP puis en production, en cadrant besoins, parcours et backlog",
          "Conçu la recherche documentaire RAG/CAG de l’assistant BonneOccaz : 97 FAQ et 11 sections Pro, seuil de pertinence, citations validées et tests d’injection, évaluée sur 32 questions (top 3, seuil de 90 %)",
          "Encadré les agents de code : instructions de projet, spécifications écrites et contrôles automatisés avant livraison",
          "Sécurisé RevGuessr par 471 tests Jest et des contrats SQL ; multijoueur Supabase Realtime jusqu’à 12 joueurs",
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
        description: "Pilotage autonome du SI, gestion des besoins métier et déploiement de solutions techniques, avec support, incidents, formation des utilisateurs et coordination des prestataires.",
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
        description: "Développement de deux applications métier en environnement industriel : gestion du parking des véhicules neufs en ASP.NET MVC (C#) et gestion des stocks et de l’outillage par QR codes en PHP.",
        missions: [
          "Conçu et exploité les bases MySQL et SQL Server associées",
          "Mené le cycle complet en Agile : besoins, spécifications, développement et tests",
        ],
        tags: ["ASP.NET MVC", "C#", "PHP", "QR codes", "SQL", "Agile"],
      },
    ] satisfies Experience[],
    education: [
      { id: "cesi", diploma: "Responsable en ingénierie des logiciels — titre RNCP niveau 6 (Bac+4)", school: "CESI Rouen", year: "2016 — 2018", description: "2 ans après BTS, en alternance." },
      { id: "bts-sio", diploma: "BTS SIO — option SLAM", school: "La Châtaigneraie, Mesnil-Esnard", year: "2016", description: "Solutions logicielles et applications métiers." },
    ] satisfies Education[],
    languages: [
      { name: "Français", level: "langue maternelle" },
      { name: "Anglais", level: "B2, lecture et rédaction techniques courantes" },
    ],
    skillsSection: {
      eyebrow: "Boîte à outils",
      title: "Des compétences pour livrer, pas pour cocher des cases",
      description: "Une stack récente complétée par une solide compréhension du produit, du MVP à l’exploitation.",
      education: "Formation",
      languages: "Langues",
    },
    skills: [
      { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive Design", "UX", "Product discovery", "Cadrage MVP", "Prototypage rapide"] },
      { name: "Back-end & data", skills: ["Node.js", "Supabase", "PostgreSQL", "API REST", "SQL", "Auth", "Storage", "RLS", "Realtime", "Stripe", "Modélisation des données"] },
      { name: "IA & qualité", skills: ["IA générative", "LLM", "RAG / CAG", "Agents de code IA", "Tests & revue de code", "Instructions de projet", "Évaluation de la recherche", "Jest", "Git / GitHub", "CI/CD", "Vercel", "Lua"] },
      { name: "Systèmes & collaboration", skills: ["Pilotage SI", "Gestion de projet", "Analyse fonctionnelle", "Recueil des besoins", "Support utilisateurs", "Formation", "Coordination de prestataires", "Agile / Scrum"] },
    ] satisfies SkillCategory[],
    footer: {
      eyebrow: "Disponible pour échanger",
      title: "Construisons un produit utile",
      text: "Je recherche un poste de développeur Full-Stack JS/TS orienté IA générative ou de Product Engineer, avec une place centrale pour le développement assisté par l’IA. Je suis aussi ouvert aux postes de chef de projet IT et de responsable applicatif, en télétravail ou en Normandie.",
      email: "M’écrire",
      github: "Voir GitHub",
    },
  },
  en: {
    localeLabel: "FR",
    nav: { home: "Profile", projects: "Work", experience: "Experience", skills: "Skills", contact: "Contact me" },
    personal: {
      ...shared,
      title: "Full-Stack JS/TS Developer · Generative AI",
      subtitle: "AI Developer · Product Engineer · AI agents · LLM · RAG · React · Next.js · Supabase",
      summary: "Full-stack JS/TS developer focused on generative AI, with a product and IT systems background since 2016. I build web applications through to production with React, Next.js, TypeScript, Supabase/PostgreSQL and AI coding agents: specifications, small increments, code review, testing and delivery. 3 automotive projects since 2024.",
    },
    hero: {
      availability: "Available now — remote or Normandy, France",
      eyebrow: "Full-Stack JS/TS Developer · Generative AI",
      kicker: "I design and ship web applications, from the first need to production.",
      headline: ["I design and ship web applications,", "from the first need to production"],
      intro: "A cross-functional background in IT systems, project management and development. I scope the need, build with React, Next.js and Supabase, and rely on generative AI with a demanding method: specifications, small increments, code review and testing.",
      codeFile: "profile.ts",
      primaryCta: "Explore BonneOccaz",
      secondaryCta: "Download résumé",
      stats: [
        { value: "Since 2016", label: "working across IT" },
        { value: "3 projects", label: "designed for automotive" },
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
      title: "BonneOccaz, from need to production",
      description: "A product built with AI from the outset: specify the need, guide agents, verify features and keep improving the application.",
      visit: "View live product",
      showcase: "Real screenshots of bonneoccaz.fr, on desktop and mobile.",
      role: "Designed and built independently with AI",
      architecture: "Help assistant · RAG/CAG",
      otherTitle: "Other projects",
      otherDescription: "Two more automotive products, built with the same method.",
      otherVisit: "Visit the site",
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
      tagline: "Buy smarter, without nasty surprises",
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
    otherProjects: [
      {
        id: "revguessr",
        name: "RevGuessr.com",
        url: shared.revGuessr,
        status: "Live",
        kind: "Web game",
        description: "A web game where players identify a car from its engine sound, with around 850 sounds. Solo challenges, real-time multiplayer, leaderboard, progression, Premium, player contributions and listening guides, in three languages.",
        features: [
          "Solo challenges: time attack, sudden death, daily challenge, car of the day, find the car, which is newer?",
          "Real-time multiplayer: Classic, Elimination for up to 12 players, quick match and link invites",
          "Around 850 engine sounds from around 70 brands, with credits and licences for every recording",
          "Progression: XP, levels, badges, records and weekly leaderboard",
          "Player-submitted sounds, moderation and an admin area",
          "Premium subscription with Stripe, referrals, listening guides and brand pages",
          "Interface in French, English and Spanish, designed for mobile",
          "Quality: 471 Jest tests and database contract tests running on PGlite",
        ],
        tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "NextAuth", "Stripe", "Zustand", "TanStack Query", "Jest", "Vercel"],
      },
      {
        id: "paddock-studio",
        name: "Paddock Studio",
        status: "Release in preparation",
        kind: "Racing simulator app",
        description: "An in-game app for the Assetto Corsa racing simulator (Custom Shaders Patch): one-click time, date and weather atmospheres, a realistic visual filter, cameras, and a race engineer that adapts tyres, pressures and driver aids to the weather.",
        features: [
          "Atmosphere library with smooth transitions and personal scenes",
          "Race engineer: compound, pressures, traction control and ABS based on weather",
          "Frame-by-frame performance measurement to avoid stutter",
          "Interface and guides in French, English and Spanish, automated release packaging",
        ],
        tags: ["Lua", "Custom Shaders Patch", "Python", "Assetto Corsa", "AI agents"],
      },
    ] satisfies SideProject[],
    methodSection: {
      eyebrow: "Method",
      title: "A rigorous delivery method, assisted by AI",
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
      title: "Product, business and technology",
      description: "Three environments, one constant: understand the need, make decisions and deliver a durable solution.",
    },
    experiences: [
      {
        id: "product-builder",
        title: "Full Stack Builder / JS/TS Developer",
        company: "Independent · BonneOccaz.fr, RevGuessr.com and Paddock Studio",
        period: "2024 — Present",
        note: "Projects started alongside my role at Normandie Structures in 2024–2025.",
        description: "Designed and shipped 2 automotive web applications, BonneOccaz and RevGuessr, with React, Next.js, TypeScript and Supabase/PostgreSQL, using AI agents to specify, review, refactor and test every release.",
        missions: [
          "Took BonneOccaz and RevGuessr from idea to MVP and into production, scoping needs, user journeys and backlog",
          "Designed the RAG/CAG retrieval behind the BonneOccaz assistant: 97 FAQ entries and 11 Pro sections, relevance threshold, validated citations and injection tests, evaluated on 32 questions (top 3, 90% threshold)",
          "Guided AI coding agents with project instructions, written specifications and automated checks before every release",
          "Secured RevGuessr with 471 Jest tests and SQL contract tests; Supabase Realtime multiplayer for up to 12 players",
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
        description: "Autonomous ownership of IT systems, business requirements and technical solution rollouts, including support, incident management, user training and vendor coordination.",
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
        description: "Developed two business applications in an industrial environment: an ASP.NET MVC (C#) application for new-vehicle parking and a PHP application for stock and tool management with QR codes.",
        missions: [
          "Designed and operated the related MySQL and SQL Server databases",
          "Ran the full Agile cycle: requirements, specifications, development and testing",
        ],
        tags: ["ASP.NET MVC", "C#", "PHP", "QR codes", "SQL", "Agile"],
      },
    ] satisfies Experience[],
    education: [
      { id: "cesi", diploma: "Software Engineering Manager — French national qualification, RNCP / EQF level 6 (4 years of higher education)", school: "CESI Rouen", year: "2016 — 2018", description: "2 years after the BTS, work-study programme." },
      { id: "bts-sio", diploma: "BTS SIO — SLAM software track", school: "La Châtaigneraie, Mesnil-Esnard", year: "2016", description: "Software solutions and business applications." },
    ] satisfies Education[],
    languages: [
      { name: "French", level: "native" },
      { name: "English", level: "B2, reads and writes technical material regularly" },
    ],
    skillsSection: {
      eyebrow: "Toolkit",
      title: "Skills for shipping, not checkbox filling",
      description: "A modern stack backed by a strong understanding of product, from MVP to operations.",
      education: "Education",
      languages: "Languages",
    },
    skills: [
      { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive Design", "UX", "Product discovery", "MVP scoping", "Rapid prototyping"] },
      { name: "Backend & data", skills: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "SQL", "Auth", "Storage", "RLS", "Realtime", "Stripe", "Data modelling"] },
      { name: "AI & quality", skills: ["Generative AI", "LLM", "RAG / CAG", "AI coding agents", "Testing & code review", "Project instructions", "Retrieval evaluation", "Jest", "Git / GitHub", "CI/CD", "Vercel", "Lua"] },
      { name: "Systems & collaboration", skills: ["IT strategy", "Project Management", "Business analysis", "Requirements gathering", "User support", "Training", "Vendor coordination", "Agile / Scrum"] },
    ] satisfies SkillCategory[],
    footer: {
      eyebrow: "Available to talk",
      title: "Let’s build something useful",
      text: "I am looking for a Full-Stack JS/TS Developer, AI Developer or Product Engineer role with AI-assisted development at its core. I am also open to IT project manager and application manager roles, remote or in Normandy, France.",
      email: "Email me",
      github: "View GitHub",
    },
  },
} as const;

export const personalInfo: PersonalInfo = cvContent.fr.personal;
export const experiences: Experience[] = [...cvContent.fr.experiences];
export const education: Education[] = [...cvContent.fr.education];
export const skillCategories: SkillCategory[] = [...cvContent.fr.skills];
