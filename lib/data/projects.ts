export type ProjectCategory =
  | "saas"
  | "ecommerce"
  | "mobile"
  | "ai"
  | "fintech"
  | "cms"
  | "infra"
  | "vitrine"
  | "iot"
  | "tool";

export type Project = {
  slug: string;
  title: string;
  client?: string;
  role: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  tech: string[];
  category: ProjectCategory;
  status: "production" | "active" | "archived" | "wip";
  year: number;
  /** Public-facing URL (verified live). Omit if backend-only or down. */
  url?: string;
  repo?: string;
  image?: string;
  /** Logo / icon path (in /public). */
  logo?: string;
  confidential: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  // ── SaaS / Plateformes complètes ──────────────────────────────
  {
    slug: "moro",
    title: "Moro — Suite financière multi-pays",
    client: "Generale-CI",
    role: "Lead Fullstack",
    description:
      "Suite complète de gestion financière déployée en CI et UE : app mobile, dashboards business, microfinance, scoring crédit.",
    longDescription:
      "Architecture micro-services Docker : backend NestJS (api.moro-apps.net), version Europe (api.eu.moro-apps.net), espace business (business.moro-apps.net), service de scoring crédit (score.moro-apps.net) et microfinance interne. Apps iOS/Android via Expo avec intégration Mobile Money (Wave, Orange Money) et virements bancaires.",
    highlights: [
      "Stack Docker complète orchestrée sur VPS",
      "Multi-tenant CI + Europe",
      "Intégration Wave Business, Orange Money, virements",
      "Module microfinance avec gestion de cycles d'épargne",
    ],
    tech: ["NestJS", "Next.js", "Expo", "Docker", "PostgreSQL", "Redis", "Wave", "Mobile Money"],
    category: "fintech",
    status: "production",
    year: 2024,
    url: "https://moro-apps.net",
    image: "/logo/5.png",
    confidential: true,
    featured: true,
  },
  {
    slug: "akili",
    title: "Akili — IA & fact-checking",
    client: "Akili",
    role: "Lead Fullstack + IA",
    description:
      "Plateforme IA multi-produit : chatbot fact-checking multilingue, dashboards admin, apps mobiles et site public.",
    longDescription:
      "Backend NestJS + Docker (akili-backend), web app Next.js, suite mobile Expo (akili-mobile-suite), serveur IA (akili-server-final), dashboard (akili-dashboard), chatbot prod (akili-chatbot-prod) avec fact-checking et support multilingue.",
    highlights: [
      "Chatbot IA avec fact-checking en temps réel",
      "Support multilingue (FR, EN, langues locales)",
      "Architecture micro-services + RAG",
      "5+ applications interconnectées",
    ],
    tech: ["NestJS", "Next.js", "Expo", "Python", "LangChain", "Docker", "Vector DB"],
    category: "ai",
    status: "production",
    year: 2025,
    url: "https://ai.akilicheck.com",
    logo: "/projets/logos/akili.ico",
    image: "/logo/akili.png",
    confidential: false,
    featured: true,
  },
  {
    slug: "upjunoo",
    title: "Upjunoo — Super-plateforme universelle",
    client: "Upjunoo Media",
    role: "Consultant technique",
    description:
      "Super-plateforme universelle (upjunoo.com) et version pro Mobilité & Logistique (upjunoo.pro) : CMS éditorial, espace journalistes, base d'articles.",
    longDescription:
      "Écosystème complet : upjunoo.com (super-plateforme publique), upjunoo.pro (Mobilité & Logistique — taxi, livraison), articles-db (CMS journalistes), coomi (éditeur d'articles). Stack Docker multi-services en production.",
    highlights: [
      "Super-plateforme grand public sur upjunoo.com",
      "Version pro Mobilité & Logistique sur upjunoo.pro",
      "CMS éditorial sur-mesure pour journalistes",
      "Workflow validation, brouillons et publication",
    ],
    tech: ["Next.js", "TypeScript", "Docker", "PostgreSQL", "Tailwind"],
    category: "cms",
    status: "production",
    year: 2025,
    url: "https://upjunoo.com",
    logo: "/projets/logos/upjunoo.png",
    image: "/projets/upjunoo.png",
    confidential: false,
    featured: true,
  },
  {
    slug: "upjunoo-pro",
    title: "Upjunoo Pro — Mobilité & Logistique",
    client: "Upjunoo Media",
    role: "Consultant technique",
    description:
      "Plateforme dédiée aux pros : taxi, livraison, logistique. Version pro de l'écosystème Upjunoo.",
    tech: ["Next.js", "TypeScript", "Docker", "PostgreSQL"],
    category: "saas",
    status: "production",
    year: 2025,
    url: "https://upjunoo.pro",
    logo: "/projets/logos/upjunoo.png",
    confidential: false,
  },
  {
    slug: "generale-mode",
    title: "Generale Mode — Marketplace mode & accessoires",
    client: "Generale-CI",
    role: "Fullstack",
    description:
      "Marketplace dédiée à la mode : produits originaux, contrefaçons, occasion. Apps client/revendeur/admin, AI service intégré.",
    tech: ["Next.js", "Node.js", "Docker", "pgvector", "AI service", "Expo"],
    category: "ecommerce",
    status: "wip",
    year: 2024,
    confidential: true,
  },
  {
    slug: "gestot",
    title: "Gestot — ITSM + facturation",
    client: "Generale-CI",
    role: "Lead Fullstack",
    description:
      "Outil ITSM (gestion des tickets, parc, incidents) couplé à un module de facturation. Architecture Docker avec jobs workers.",
    tech: ["Next.js", "TypeScript", "Docker", "PostgreSQL", "Background jobs"],
    category: "saas",
    status: "production",
    year: 2025,
    url: "https://gestot.generale-ci.com",
    confidential: true,
  },
  {
    slug: "yapasgachis",
    title: "YaPasGachis — Marketplace anti-gaspillage",
    role: "Solo founder / Fullstack",
    description:
      "Marketplace anti-gaspillage alimentaire pour l'Afrique de l'Ouest : commerçants invendus à prix réduit, livraison locale.",
    longDescription:
      "Backend NestJS + Docker, app Expo, serveur média dédié (yapasgachis_media_server), site web + dashboard. Modèle marketplace 2-sided avec géolocalisation et paiement Wave.",
    highlights: [
      "Marketplace 2-sided commerçants / consommateurs",
      "Géolocalisation et créneaux de récupération",
      "Paiement Wave Mobile Money",
      "Serveur média dédié pour photos produits",
    ],
    tech: ["NestJS", "Expo", "Docker", "PostgreSQL", "Wave"],
    category: "ecommerce",
    status: "production",
    year: 2025,
    url: "https://yapasgachis.com",
    repo: "https://github.com/kevkotuto/yapasgachis_backend",
    confidential: false,
    featured: true,
  },
  {
    slug: "tontine-ivoire",
    title: "Tontine Ivoire — Tontines digitales",
    role: "Lead Fullstack",
    description:
      "App de tontines digitales avec gestion automatique des cycles, workers de notifications, paiements Mobile Money.",
    tech: ["NestJS", "Expo", "PostgreSQL", "Workers", "Wave"],
    category: "fintech",
    status: "production",
    year: 2025,
    url: "https://tontine.generale-ci.com",
    confidential: false,
  },
  {
    slug: "myb12",
    title: "MyB12 — Livraison de bouteilles de gaz",
    role: "Lead Fullstack",
    description:
      "App de gestion et livraison de bouteilles de gaz B6/B12 en Côte d'Ivoire. App Expo + backend NestJS + Wave Business.",
    tech: ["NestJS", "Expo", "PostgreSQL", "Wave Business"],
    category: "mobile",
    status: "wip",
    year: 2025,
    repo: "https://github.com/kevkotuto/myb12",
    confidential: false,
  },
  {
    slug: "trackmybox",
    title: "TrackMyBox — Tracking déménagement",
    role: "Solo founder / Fullstack",
    description:
      "App mobile pour organiser, étiqueter et suivre ses cartons de déménagement. QR codes, photos, recherche par contenu.",
    tech: ["Expo", "NestJS", "Python", "TypeScript"],
    category: "mobile",
    status: "wip",
    year: 2025,
    repo: "https://github.com/kevkotuto/trackmybox",
    confidential: false,
    featured: true,
  },
  {
    slug: "noche-pro",
    title: "Noche Pro — Téléprompter vocal",
    role: "Solo / Fullstack",
    description:
      "Téléprompter intelligent piloté par la voix. Reconnaissance vocale, défilement adaptatif au rythme de parole.",
    tech: ["Next.js", "TypeScript", "Web Speech API"],
    category: "tool",
    status: "production",
    year: 2026,
    url: "https://noche.generale-ci.com",
    repo: "https://github.com/kevkotuto/noche-pro",
    confidential: false,
  },

  // ── E-commerce / Vitrines ────────────────────────────────────
  {
    slug: "bernabe-bricolage",
    title: "Sites Bernabé & Mr. Bricolage CI",
    client: "Bernabé Côte d'Ivoire",
    role: "Développeur Digital",
    description:
      "Refonte du site Bernabé Afrique et du e-commerce Mr. Bricolage CI. Stratégie digitale, dev fullstack, déploiement.",
    tech: ["Next.js", "Tailwind", "Microsoft Dynamics", "REST API"],
    category: "ecommerce",
    status: "production",
    year: 2024,
    url: "https://mr-bricolage.ci",
    image: "/logo/4.png",
    confidential: false,
  },
  {
    slug: "bernabe-chat",
    title: "Bernabé & Bricolage Chat — Assistants IA",
    client: "Bernabé CI",
    role: "Lead IA",
    description:
      "Deux chatbots LLM intégrés aux sites Bernabé et Mr. Bricolage, capables de répondre sur le catalogue produit.",
    tech: ["LLM", "RAG", "Next.js", "Vector DB"],
    category: "ai",
    status: "production",
    year: 2025,
    url: "https://bernabe.generale-ci.com",
    confidential: true,
  },
  {
    slug: "generale-ci",
    title: "Générale CI — Marketplace multi-vendeurs",
    role: "Solo founder / Lead Fullstack",
    description:
      "Marketplace multi-vendeurs du Grand Abidjan : boutiques, catalogue, panier, commandes, livraison, live shopping et apps mobiles.",
    longDescription:
      "Plateforme complète en production : front web Next.js, backend API avec workers asynchrones, recherche Meilisearch, stockage objet MinIO, cache Redis et base PostgreSQL, le tout orchestré en Docker. Côté produit : inscription des vendeurs et tableau de bord marchand, catalogue multi-catégories (mode, électronique, beauté, maison, services), suivi de commandes et livraison sur le Grand Abidjan, contenus courts et sessions de vente en direct, plus les applications iOS et Android.",
    highlights: [
      "Marketplace 2-sided en production : acheteurs, vendeurs et livraison",
      "Live shopping et contenus vidéo courts intégrés au catalogue",
      "Recherche Meilisearch, médias sur MinIO, jobs asynchrones",
      "Apps iOS et Android en complément du web",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Meilisearch", "MinIO", "Docker", "Expo"],
    category: "ecommerce",
    status: "production",
    year: 2025,
    url: "https://generale-ci.com",
    confidential: false,
    featured: true,
  },
  {
    slug: "gedis-lub",
    title: "Gedis-Lub — Distributeur de lubrifiants",
    client: "Gedis",
    role: "Lead Fullstack",
    description:
      "Site e-commerce d'un distributeur de lubrifiants automobiles et industriels à Abidjan : catalogue par marque, conseiller produit et demande de devis.",
    highlights: [
      "Catalogue filtrable par marque et par usage",
      "Outil de conseil pour choisir le bon lubrifiant",
      "Parcours de demande de devis pour les clients pros",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    category: "ecommerce",
    status: "production",
    year: 2025,
    url: "https://gedislub.com",
    confidential: false,
  },
  {
    slug: "maison-des-perles",
    title: "Maison des Perles",
    role: "Fullstack",
    description: "Site e-commerce de bijoux et perles avec catalogue, panier et paiement.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    category: "ecommerce",
    status: "production",
    year: 2025,
    url: "https://maison-des-perles.com",
    confidential: false,
  },
  {
    slug: "inayahome",
    title: "Inaya Home — Mobilier sur-mesure",
    role: "Fullstack",
    description:
      "Site vitrine pour Inaya Home (Abidjan) : mobilier, décoration, matelas, portes, cuisines sur-mesure.",
    tech: ["Next.js 16", "Tailwind 4", "TypeScript"],
    category: "vitrine",
    status: "production",
    year: 2026,
    url: "https://inayahome.com",
    logo: "/projets/logos/inayahome.png",
    repo: "https://github.com/kevkotuto/inayahome",
    confidential: false,
  },
  {
    slug: "dreamkeys",
    title: "DreamKeys Immobilier",
    role: "Fullstack",
    description: "Plateforme immobilière : recherche de biens, contact agents, visite virtuelle.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    category: "vitrine",
    status: "production",
    year: 2025,
    url: "https://dreamkeys.generale-ci.com",
    confidential: true,
  },
  {
    slug: "jtb-ci",
    title: "JTB CI",
    role: "Fullstack",
    description: "Site Next.js déployé pour JTB Côte d'Ivoire.",
    tech: ["Next.js", "Docker", "TypeScript"],
    category: "vitrine",
    status: "production",
    year: 2025,
    url: "https://jtb.ci",
    logo: "/projets/logos/jtb.ico",
    confidential: true,
  },
  {
    slug: "tamamedia",
    title: "TamaMedia",
    role: "Fullstack",
    description: "Plateforme média et publication d'articles.",
    tech: ["Next.js", "TypeScript", "Python"],
    category: "cms",
    status: "production",
    year: 2025,
    confidential: true,
  },
  {
    slug: "nappylocks",
    title: "NappyLocks — App & site",
    role: "Fullstack",
    description:
      "App iOS communautaire et e-commerce pour la marque NappyLocks (spécialiste DreadLocks).",
    tech: ["React Native", "Firebase", "Node.js"],
    category: "mobile",
    status: "production",
    year: 2023,
    url: "https://apps.apple.com/fr/app/nappylocks/id1661966757",
    image: "/logo/1.png",
    confidential: false,
  },

  // ── Mobile ────────────────────────────────────────────────────
  {
    slug: "agora",
    title: "Agora — Communauté & événementiel",
    role: "Lead Mobile + Backend",
    description: "App communautaire et événementielle. Backend dédié et app Expo.",
    tech: ["Expo", "NestJS", "Realtime"],
    category: "mobile",
    status: "production",
    year: 2025,
    url: "https://agora.generale-ci.com",
    confidential: true,
  },
  {
    slug: "palais-des-sports",
    title: "Palais des Sports",
    role: "Mobile Dev",
    description: "App mobile pour le Palais des Sports : billetterie, événements, fidélité.",
    tech: ["Expo", "React Native", "NestJS"],
    category: "mobile",
    status: "wip",
    year: 2026,
    confidential: true,
  },
  {
    slug: "finance-chat",
    title: "FinanceChat",
    role: "Mobile + IA",
    description: "Assistant conversationnel pour la gestion financière personnelle.",
    tech: ["Expo", "LLM", "Node.js"],
    category: "ai",
    status: "wip",
    year: 2025,
    confidential: true,
  },
  {
    slug: "spiritueux",
    title: "Spiritueux — Marketplace alcools",
    role: "Mobile Dev",
    description: "App de vente et livraison de spiritueux avec catalogue et paiement.",
    tech: ["Expo", "React Native"],
    category: "ecommerce",
    status: "wip",
    year: 2025,
    confidential: true,
  },
  {
    slug: "yu-card",
    title: "Yu Card",
    role: "Lead Fullstack",
    description: "Carte de fidélité digitale multi-commerces : backend, app utilisateur, dashboard.",
    tech: ["NestJS", "Expo", "TypeScript"],
    category: "fintech",
    status: "production",
    year: 2025,
    confidential: true,
  },

  // ── Outils internes / Vitrines ──────────────────────────────
  {
    slug: "mytools",
    title: "MyTools — Boîte à outils dev",
    role: "Solo / Fullstack",
    description: "Suite d'outils utilitaires accessibles en ligne (générateurs, convertisseurs, helpers).",
    tech: ["Next.js", "TypeScript", "Shell"],
    category: "tool",
    status: "production",
    year: 2025,
    url: "https://mytools.generale-ci.com",
    repo: "https://github.com/kevkotuto/mytools",
    confidential: false,
  },
  {
    slug: "sms-gateway",
    title: "SMS Gateway",
    role: "Lead Backend",
    description: "Passerelle SMS Dockerisée avec WebSocket, gateway SaaS frontend, multi-opérateurs.",
    tech: ["Docker", "WebSocket", "TypeScript", "NestJS"],
    category: "infra",
    status: "production",
    year: 2025,
    url: "https://sms.generale-ci.com",
    repo: "https://github.com/kevkotuto/sms-gateway",
    confidential: false,
  },
  {
    slug: "file-share",
    title: "Share — Service de partage fichiers",
    role: "Solo / Backend",
    description: "Service de partage de fichiers avec lien expiration, protection mot de passe.",
    tech: ["Node.js", "TypeScript"],
    category: "infra",
    status: "archived",
    year: 2025,
    confidential: false,
  },
  {
    slug: "kev-storage",
    title: "kev_storage_service",
    role: "Solo / Backend",
    description: "Service de stockage objet maison utilisé par plusieurs apps en prod.",
    tech: ["Node.js", "TypeScript", "S3-compatible"],
    category: "infra",
    status: "production",
    year: 2025,
    confidential: true,
  },
  {
    slug: "ultron",
    title: "Ultron — Serveur de production",
    role: "Solo / DevOps",
    description:
      "Le VPS qui héberge 25+ applications en production, et l'outillage maison qui va avec : scripts de déploiement, builds Android, sauvegardes, supervision et certificats.",
    tech: ["Linux", "Docker", "PM2", "Nginx", "Bash", "Certbot"],
    category: "infra",
    status: "active",
    year: 2025,
    confidential: true,
  },
  {
    slug: "supervision-yeshi",
    title: "Supervision des sites du groupe Yeshi",
    client: "Yeshigroup",
    role: "Exploitation / SRE",
    description:
      "Suivi de la disponibilité d'une vingtaine de sites du groupe : surveillance continue, alertes en cas d'indisponibilité et traitement des incidents.",
    longDescription:
      "Mise en place et tenue du suivi de disponibilité de plus de vingt sites du groupe. Surveillance de l'état de service, alertes déclenchées sur incident, diagnostic et remise en ligne, puis correction des causes de fond pour éviter la récidive.",
    highlights: [
      "20+ sites suivis en continu",
      "Alertes automatiques sur indisponibilité",
      "Diagnostic et remise en service lors des incidents",
      "Actions correctives durables après incident",
    ],
    tech: ["Nginx", "Docker", "Linux", "Monitoring", "Alerting"],
    category: "infra",
    status: "active",
    year: 2025,
    confidential: true,
  },
  {
    slug: "imci-catalog",
    title: "Catalogue IMCI",
    role: "Fullstack",
    description: "Catalogue produits IMCI Bernabé avec recherche et fiches détaillées.",
    tech: ["Next.js", "TypeScript"],
    category: "cms",
    status: "production",
    year: 2025,
    url: "https://cat-imci.generale-ci.com",
    logo: "/projets/logos/imci.png",
    confidential: true,
  },
  {
    slug: "credoptia",
    title: "Credoptia — API & admin",
    role: "Backend Lead",
    description: "API de scoring/credit (api-credoptia) + dashboard admin (admin-credoptia).",
    tech: ["NestJS", "PostgreSQL", "PLpgSQL"],
    category: "fintech",
    status: "production",
    year: 2025,
    confidential: true,
  },
  {
    slug: "barcode-rimco",
    title: "Barcode RIMCO — NAV 14 + Expo",
    role: "Fullstack + Integration",
    description:
      "Codeunit Barcode pour Microsoft Dynamics NAV 14 + docs SOAP + client mobile Expo pour scan industriel.",
    tech: ["Expo", "SOAP", "Microsoft Dynamics NAV", "TypeScript"],
    category: "mobile",
    status: "production",
    year: 2026,
    confidential: true,
  },

  // ── Projets persos / Side ───────────────────────────────────
  {
    slug: "esp32-iot",
    title: "Projets IoT ESP32 / Arduino",
    role: "Solo",
    description:
      "Conception et développement de prototypes IoT : domotique sur-mesure, capteurs ESP32, intégrations RFID.",
    tech: ["ESP32", "Arduino", "C++", "MQTT"],
    category: "iot",
    status: "active",
    year: 2024,
    confidential: false,
  },
  {
    slug: "takr",
    title: "Takr — App native iOS",
    role: "Solo / iOS",
    description: "App iOS native en Swift (Takr) + variante Expo mobile.",
    tech: ["Swift", "SwiftUI", "Expo"],
    category: "mobile",
    status: "wip",
    year: 2026,
    repo: "https://github.com/kevkotuto/Takr",
    confidential: false,
  },
  {
    slug: "co-plastic",
    title: "Co-Plastic — Site vitrine & ERP Odoo",
    role: "Fullstack + Intégration ERP",
    description:
      "Site vitrine de Co-Plastic, fabricant ivoirien d'emballages plastique, et déploiement de leur ERP Odoo.",
    longDescription:
      "Deux volets pour le même client : un site vitrine Next.js (catalogue, pages produits, formulaire de contact) et la mise en place de leur ERP Odoo — installation, hébergement, accès distant et exploitation courante de la base.",
    highlights: [
      "Site vitrine Next.js 16 / React 19",
      "Installation et hébergement de l'ERP Odoo",
      "Exploitation de la base de production (accès SQL, corrections de données)",
    ],
    tech: ["Odoo 17", "Docker", "PostgreSQL", "Next.js 16", "React 19", "Tailwind 4", "Linux"],
    category: "saas",
    status: "production",
    year: 2026,
    confidential: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const productionProjects = projects.filter((p) => p.status === "production");

export const projectsByCategory = projects.reduce<Record<ProjectCategory, Project[]>>(
  (acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  },
  {} as Record<ProjectCategory, Project[]>
);

export const categoryLabels: Record<ProjectCategory, string> = {
  saas: "SaaS",
  ecommerce: "E-commerce",
  mobile: "Mobile",
  ai: "IA",
  fintech: "Fintech",
  cms: "CMS / Média",
  infra: "Infra / DevOps",
  vitrine: "Vitrine",
  iot: "IoT",
  tool: "Outils",
};
