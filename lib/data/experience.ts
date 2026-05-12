export type Experience = {
  role: string;
  company: string;
  period: string;
  startYear: number;
  current?: boolean;
  type: "fulltime" | "freelance" | "founder" | "consultant" | "weekend";
  description: string;
  achievements: string[];
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Lead Développeur Digital",
    company: "Bernabé Côte d'Ivoire",
    period: "2023 — aujourd'hui",
    startYear: 2023,
    current: true,
    type: "fulltime",
    description:
      "Conception, développement et opération de l'écosystème digital du groupe Bernabé : sites e-commerce, ERP integrations, chatbots IA, dashboards internes.",
    achievements: [
      "Refonte du site Mr. Bricolage CI et du portail Bernabé",
      "Intégration Microsoft Dynamics NAV (catalogue, codeunits SOAP)",
      "Chatbots LLM pour le support catalogue (Bernabé Chat & Bricolage Chat)",
      "Catalogue produits IMCI (cat-imci.generale-ci.com)",
      "Mise en place du VPS de production (Docker, PM2, Nginx) orchestrant 25+ apps",
    ],
    tech: ["Next.js", "NestJS", "Docker", "Nginx", "Microsoft Dynamics NAV", "PostgreSQL"],
  },
  {
    role: "Développeur Fullstack Senior",
    company: "Yeshigroup",
    period: "2024 — aujourd'hui",
    startYear: 2024,
    current: true,
    type: "fulltime",
    description:
      "Développement de produits internes et clients du groupe Yeshi : applications web et mobiles, intégrations métier, infrastructure.",
    achievements: [
      "Conception et livraison d'applications web et mobiles",
      "Mise en place d'intégrations métier et de paiements",
      "Coopération avec les équipes produit et design",
    ],
    tech: ["Next.js", "NestJS", "Expo", "TypeScript"],
  },
  {
    role: "Consultant Technique",
    company: "Upjunoo Media",
    period: "2025 — aujourd'hui",
    startYear: 2025,
    current: true,
    type: "consultant",
    description:
      "Mission de conseil et de développement sur la plateforme média Upjunoo : CMS éditorial, app pro, base d'articles.",
    achievements: [
      "Conception de l'architecture éditoriale (upjunoo, upjunoo-pro, articles-db, coomi)",
      "Workflow de validation et publication pour journalistes",
      "Stack Docker multi-services en production",
    ],
    tech: ["Next.js", "TypeScript", "Docker", "PostgreSQL"],
  },
  {
    role: "Directeur Technologique (week-ends)",
    company: "Inexiumus Group",
    period: "2024 — aujourd'hui",
    startYear: 2024,
    current: true,
    type: "weekend",
    description:
      "Direction technique du groupe Inexiumus le week-end : choix d'architecture, équipe, conception produit, mise en prod.",
    achievements: [
      "Suite Akili (chatbot fact-checking IA + apps mobiles + dashboards)",
      "Sites e-commerce (Gedis, Can Optic) avec paiements CinetPay / Mobile Money",
      "Intégrations FNE (Facture Normalisée Électronique DGI Côte d'Ivoire) dans Odoo / Sage",
      "Management technique des équipes de développement",
    ],
    tech: ["Next.js", "NestJS", "Expo", "Python", "LangChain", "CinetPay"],
  },
  {
    role: "Analyste Service Prix",
    company: "Bernabé Côte d'Ivoire",
    period: "2022 — 2023",
    startYear: 2022,
    type: "fulltime",
    description:
      "Analyse de la stratégie tarifaire et gestion de la base produits. Automatisation Python. Pont entre IT et métier avant la transition vers le dev fullstack.",
    achievements: [
      "Automatisation d'analyses tarifaires en Python",
      "Coordination achats / technique / commercial",
    ],
  },
  {
    role: "Community Manager & Dev",
    company: "Bakeryshop Originale & freelance",
    period: "2020 — 2023",
    startYear: 2020,
    type: "freelance",
    description:
      "Gestion réseaux sociaux, création de contenu, sites vitrines, administration de serveurs Linux pour PME locales.",
    achievements: [
      "Création de l'identité visuelle et du contenu social",
      "Sites vitrines React + administration serveur",
    ],
    tech: ["React", "PHP", "Linux", "Photoshop"],
  },
];

// Side / personal — kept separate from the timeline of jobs
export const sideProjects = [
  {
    role: "Projets Robotique & IoT (perso)",
    description:
      "Prototypes domotiques sur ESP32 / Arduino, ateliers d'initiation à la robotique. Side project depuis 2020.",
    tech: ["ESP32", "Arduino", "C++", "MQTT"],
  },
];

export type Education = {
  title: string;
  school: string;
  period: string;
  details?: string;
};

export const educations: Education[] = [
  {
    title: "18 Certifications — Développement Web",
    school: "OpenClassrooms",
    period: "2020 — présent",
    details:
      "Parcours intensif : JavaScript, React, Node.js, Python, gestion de projet, UI/UX.",
  },
  {
    title: "BTS Informatique — Développement d'Applications",
    school: "PIGIER CI, Abidjan",
    period: "2018 — 2020",
  },
  {
    title: "Baccalauréat Scientifique & Technologique",
    school: "Collège ANADOR, Abidjan",
    period: "2017",
  },
];
