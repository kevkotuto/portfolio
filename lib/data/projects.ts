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
    slug: "upjunoo-pro-client",
    title: "Upjunoo Pro — App client (VTC, livraison, fret, location)",
    client: "Upjunoo Media",
    role: "Consultant technique / Lead Mobile",
    description:
      "Application mobile client de l'écosystème Upjunoo Pro : commande de course VTC, livraison, fret et location de véhicule, avec suivi en temps réel.",
    highlights: [
      "Quatre services dans une seule app : VTC, livraison, fret, location",
      "Commande, suivi de course en temps réel et historique",
      "Onboarding, pages légales et espace profil",
    ],
    tech: ["Expo", "expo-router", "React Native", "TypeScript"],
    category: "mobile",
    status: "production",
    year: 2025,
    logo: "/projets/logos/upjunoo.png",
    confidential: false,
  },
  {
    slug: "upjunoo-driver",
    title: "Upjunoo Pro — App chauffeur",
    client: "Upjunoo Media",
    role: "Consultant technique / Lead Mobile",
    description:
      "Interface chauffeur VTC d'Upjunoo Pro : carte de navigation nuit, passage en ligne, suivi des gains et messagerie, dans l'esprit des apps chauffeur du marché.",
    longDescription:
      "App Expo SDK 55 avec expo-router et Mapbox en dev build. Authentification par numéro puis code OTP reçu sur WhatsApp, choix de la ville d'exercice (Abidjan, Bouaké, Korhogo, San-Pédro, Yamoussoukro), puis l'app principale en thème sombre : carte plein écran avec marqueur chauffeur, calques et recentrage, panneau de statut (priorité, gains, objectif) et passage en ligne. S'y ajoutent l'écran Argent (gains du jour, bande hebdomadaire, solde), la messagerie, le profil conducteur et véhicules, le parrainage et les réglages de navigation.",
    highlights: [
      "Carte Mapbox en thème nuit, dev build natif (hors Expo Go)",
      "Auth par OTP WhatsApp et sélection de la ville d'exercice",
      "Suivi des gains : jour, semaine, objectif, solde",
      "Builds Android produits sur serveur interne plutôt que sur EAS",
    ],
    tech: ["Expo", "React Native", "Mapbox", "expo-router", "TypeScript"],
    category: "mobile",
    status: "production",
    year: 2026,
    logo: "/projets/logos/upjunoo.png",
    confidential: false,
    featured: true,
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
      "Marketplace anti-gaspillage alimentaire pour l'Afrique de l'Ouest, sur le modèle de Too Good To Go : invendus des commerçants jusqu'à -70%, à récupérer sur place.",
    longDescription:
      "Plateforme complète en production à Abidjan : front web Next.js (catalogue des offres du jour, carte des commerçants à proximité, panier, compte client, parcours d'inscription vendeur), applications mobiles Expo distribuées sur TestFlight et Google Play, backend NestJS et serveur média dédié pour les photos produits, le tout en Docker. Le paiement se fait par Wave ou en espèces à la récupération, et une rubrique Bons Plans étend le modèle aux hôtels, spas et restaurants.",
    highlights: [
      "Marketplace 2-sided commerçants / consommateurs, en production",
      "Front web Next.js : offres du jour, carte des commerçants, panier",
      "Apps mobiles Expo sur TestFlight et Google Play",
      "Paiement Wave Mobile Money ou espèces à la récupération",
      "Serveur média dédié pour les photos produits",
    ],
    tech: ["Next.js", "NestJS", "Expo", "Docker", "PostgreSQL", "Wave"],
    category: "ecommerce",
    status: "production",
    year: 2025,
    url: "https://yapasgachis.com",
    repo: "https://github.com/kevkotuto/yapasgachis-web",
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
      "Mise en place et tenue du suivi de disponibilité de plus de vingt sites du groupe. Hébergement Azure, surveillance de l'état de service, alertes déclenchées sur incident, diagnostic et remise en ligne, puis correction des causes de fond pour éviter la récidive.",
    highlights: [
      "20+ sites suivis en continu",
      "Alertes Azure Monitor sur indisponibilité et saturation ressources",
      "Diagnostic et remise en service lors des incidents",
      "Actions correctives durables après incident",
    ],
    tech: ["Azure", "Azure Monitor", "Nginx", "Docker", "Linux"],
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

  {
    slug: "ultron-build",
    title: "Serveur de build Android — alternative à EAS Build",
    role: "Solo / DevOps",
    description:
      "Service de build Android auto-hébergé qui remplace EAS Build : on envoie un projet Expo, React Native ou Flutter, on récupère une URL de téléchargement de l'APK en quelques minutes.",
    longDescription:
      "Chaîne de build complète montée sur un serveur 40 cœurs / 251 Go de RAM, exposée par une CLI que les développeurs installent en deux minutes — sans JDK, sans SDK Android ni Flutter sur leur machine. Le service accepte un dépôt Git ou un dossier local, gère l'accès par jeton, signe les binaires avec le keystore de release et publie le résultat derrière nginx. Il reproduit ce qu'EAS fait implicitement et qu'un build local casse en silence : pose du canal OTA (sans lui le binaire ne reçoit jamais de mise à jour), compteur de versionCode distinct pour ne pas entrer en collision avec la série EAS, et injection de la signature de release sans toucher aux fichiers Gradle.",
    highlights: [
      "Build Expo complet en ~5 minutes, gratuit, sur matériel dédié",
      "Expo / React Native et Flutter, depuis Git ou un dossier local",
      "CLI multi-utilisateurs avec jetons, résultats servis par nginx",
      "Signature release, canal OTA et versionCode gérés comme le fait EAS",
      "iOS volontairement hors périmètre : macOS obligatoire",
    ],
    tech: ["Bash", "Gradle", "Android SDK", "Expo", "Flutter", "Nginx", "Linux"],
    category: "infra",
    status: "production",
    year: 2026,
    confidential: false,
    featured: true,
  },
  {
    slug: "gescom",
    title: "GESCOM — Mini ERP de bureau",
    role: "Solo / Fullstack",
    description:
      "Mini ERP de bureau pour les commerces ivoiriens : gestion des ventes, du stock et des clients, en application desktop installable.",
    tech: ["Electron", "TypeScript", "SQLite"],
    category: "saas",
    status: "production",
    year: 2026,
    repo: "https://github.com/kevkotuto/gescom",
    confidential: false,
  },
  {
    slug: "fne-yeshi",
    title: "FNE Yeshi — Certification fiscale DGI",
    client: "Yeshigroup",
    role: "Lead Fullstack + Intégration",
    description:
      "Pont entre les ERP du groupe et l'API de la DGI Côte d'Ivoire pour la Facture Normalisée Électronique : certification des factures depuis incadea, NAV et Sage.",
    highlights: [
      "Intégration à l'API FNE de la DGI Côte d'Ivoire",
      "Connecteurs vers incadea, Microsoft Dynamics NAV et Sage",
      "Certification des factures et suivi des rejets",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "API DGI", "Sage", "Dynamics NAV"],
    category: "saas",
    status: "production",
    year: 2025,
    repo: "https://github.com/kevkotuto/fne-yeshi",
    confidential: true,
  },
  {
    slug: "echo",
    title: "Echo — Intelligence de réunion",
    role: "Solo / Fullstack + IA",
    description:
      "App de réunion augmentée : transcription, séparation des locuteurs, mémoire vocale et pré-devis généré à partir de ce qui s'est dit.",
    highlights: [
      "Transcription et diarisation (qui parle quand)",
      "Mémoire vocale interrogeable d'une réunion à l'autre",
      "Génération de pré-devis à partir du contenu de l'échange",
    ],
    tech: ["Expo", "NestJS", "Docker", "MinIO", "LLM", "TypeScript"],
    category: "ai",
    status: "production",
    year: 2026,
    url: "https://echo.generale-ci.com",
    repo: "https://github.com/kevkotuto/echo",
    confidential: false,
    featured: true,
  },
  {
    slug: "envoi",
    title: "Envoi — Plateforme d'emailing",
    role: "Lead Fullstack",
    description:
      "Plateforme d'emailing : campagnes, segments d'audience, envoi et suivi, avec workers dédiés au traitement des lots.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Workers"],
    category: "saas",
    status: "production",
    year: 2025,
    url: "https://envoi.generale-ci.com",
    confidential: true,
  },
  {
    slug: "migration-cockpit",
    title: "Migration Cockpit — Console de migration de données",
    role: "Solo / Fullstack",
    description:
      "Console d'administration pour piloter la migration d'une plateforme de MySQL vers PostgreSQL / Supabase : exploration des schémas, cartographie des champs, exécution et contrôle des flux.",
    longDescription:
      "Outil de migration pensé pour être conduit par plusieurs profils : exploration des structures de bases, visualisation des relations et du taux de valeurs nulles, test de filtres et export, cartographie puis exécution des flux de migration, copie des fichiers vers le stockage objet, et terminal intégré. Les chaînes de connexion se configurent depuis l'interface et sont chiffrées en AES-256 dans une base locale, avec une gestion des droits distinguant administrateurs, développeurs et opérateurs.",
    highlights: [
      "Migration MySQL → PostgreSQL / Supabase pilotée par interface",
      "Connexions chiffrées AES-256, configurées sans toucher aux variables d'env",
      "Rôles distincts : administration, développement, exploitation",
      "Terminal intégré et copie des assets vers le stockage objet",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "MySQL", "Supabase", "Docker"],
    category: "tool",
    status: "production",
    year: 2026,
    url: "https://cockpit.generale-ci.com",
    confidential: true,
  },
  {
    slug: "ivoire-chat",
    title: "Ivoire Chat — Messagerie & appels",
    role: "Lead Mobile + Backend",
    description:
      "Application de messagerie et d'appels audio/vidéo, avec serveur de temps réel auto-hébergé.",
    highlights: [
      "Appels audio et vidéo via un serveur LiveKit auto-hébergé",
      "Authentification Google et Apple, notifications push",
      "App Expo iOS et Android",
    ],
    tech: ["Expo", "React Native", "LiveKit", "Supabase", "TypeScript"],
    category: "mobile",
    status: "production",
    year: 2026,
    url: "https://ivoire-chat.generale-ci.com",
    confidential: false,
  },
  {
    slug: "klippy",
    title: "Klippy — Presse-papier pour macOS",
    role: "Solo / macOS",
    description:
      "Gestionnaire d'historique de presse-papier pour macOS, l'équivalent de Windows + V sur Mac. Binaire universel, notarisé, avec mises à jour automatiques.",
    highlights: [
      "App SwiftUI / AppKit, binaire universel Apple Silicon + Intel",
      "Mises à jour automatiques via Sparkle",
      "Notarisation Apple et publication en une commande",
    ],
    tech: ["Swift", "SwiftUI", "AppKit", "Sparkle"],
    category: "tool",
    status: "production",
    year: 2026,
    url: "https://klippy.generale-ci.com",
    confidential: false,
  },
  {
    slug: "vigil",
    title: "Vigil — Supervision de parc multi-sociétés",
    role: "Solo / Architecte",
    description:
      "Plateforme d'audit et de supervision de parc informatique multi-sociétés (RMM avec EDR léger) : agent système, hub temps réel et console centrale.",
    longDescription:
      "Agent Rust installé en service système chez le client : il surveille la machine, scanne avec osquery et ClamAV/YARA, maintient une connexion WebSocket sortante et n'exécute que des commandes signées. Côté serveur, une API Fastify avec hub WebSocket et serveur MCP, et une console Next.js pour gérer sociétés, appareils, santé du parc et commandes.",
    highlights: [
      "Agent Rust en service système, commandes signées uniquement",
      "Scans osquery + ClamAV / YARA",
      "Connexion sortante WSS : rien à ouvrir chez le client",
      "Console multi-sociétés et serveur MCP",
    ],
    tech: ["Rust", "Tauri", "Fastify", "WebSocket", "PostgreSQL", "Next.js", "osquery"],
    category: "infra",
    status: "wip",
    year: 2026,
    confidential: false,
  },
  {
    slug: "fib-informatique",
    title: "FIB Informatique — Boutique en ligne & admin",
    client: "FIB Informatique et Bureautique",
    role: "Fullstack",
    description:
      "Site e-commerce et tableau de bord d'administration pour un revendeur informatique et bureautique de Treichville : catalogue, commandes, prix en FCFA.",
    tech: ["Next.js 16", "React 19", "Prisma", "SQLite", "Tailwind 4"],
    category: "ecommerce",
    status: "production",
    year: 2026,
    url: "https://fib.generale-ci.com",
    confidential: true,
  },
  {
    slug: "distinction-tmc",
    title: "Distinction Toastmasters Club",
    role: "Fullstack",
    description:
      "Site du club Toastmasters Distinction : présentation du club, calendrier des réunions, annuaire des membres, ressources et espace membre.",
    tech: ["Next.js", "TypeScript", "i18n", "Tailwind"],
    category: "vitrine",
    status: "production",
    year: 2026,
    url: "https://distinction.generale-ci.com",
    confidential: false,
  },
  {
    slug: "tectra-pointage",
    title: "Tectra — Pointage du personnel",
    role: "Lead Fullstack",
    description:
      "Application de pointage et de suivi des présences du personnel, avec tableau de bord de restitution.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "saas",
    status: "production",
    year: 2026,
    url: "https://tectra.generale-ci.com",
    confidential: true,
  },
  {
    slug: "candy-hop",
    title: "Candy Hop — Jeu de plateformes",
    role: "Solo / Game dev",
    description:
      "Jeu de plateformes multiplateforme façon Mario, avec carte de progression des niveaux à la Candy Crush. Niveaux décrits en ASCII pour itérer vite.",
    tech: ["Godot 4", "GDScript"],
    category: "tool",
    status: "wip",
    year: 2026,
    confidential: false,
  },
  {
    slug: "forge",
    title: "Forge — Lanceur de projets macOS",
    role: "Solo / macOS",
    description:
      "Lanceur de projets pour macOS façon Spotlight : raccourci global, icône dans la barre de menus, ouverture directe d'un projet dans son éditeur.",
    tech: ["Swift", "SwiftUI", "SPM"],
    category: "tool",
    status: "active",
    year: 2026,
    confidential: false,
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
