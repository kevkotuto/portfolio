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
    slug: "moro-app",
    title: "Moro — App mobile de gestion financière",
    client: "Generale-CI",
    role: "Lead Mobile + Backend",
    description:
      "Application iOS et Android de gestion financière pour entrepreneurs et indépendants : projets, transactions, factures, financement et assistant IA. Publiée sur l'App Store et le Play Store.",
    longDescription:
      "App Expo en version 6, distribuée sur les deux stores et rangée en catégorie Finance. L'utilisateur y suit ses projets et ses transactions, émet ses factures, accède à une marketplace de prestataires, à des offres de financement et à un abonnement. Un assistant IA répond en français ou en anglais, avec saisie vocale transcrite par Whisper : la langue vient du profil utilisateur et jamais du contenu du message, pour éviter d'enfermer l'assistant dans la mauvaise langue quand la transcription dérape. Interface entièrement redimensionnée par facteur d'échelle pour tenir des petits écrans aux grands, thèmes clair et sombre.",
    highlights: [
      "Publiée sur l'App Store et Google Play, version 6",
      "Projets, transactions, facturation et financement dans une seule app",
      "Assistant IA bilingue avec dictée vocale (Whisper)",
      "Déclinaison Moro EU pour le marché européen",
      "Mise à l'échelle systématique de l'UI et thème clair / sombre",
    ],
    tech: ["Expo", "React Native", "TypeScript", "NestJS", "i18n", "Whisper", "Wave"],
    category: "fintech",
    status: "production",
    year: 2026,
    url: "https://apps.apple.com/us/app/moro/id6569222115",
    image: "/logo/moro.png",
    confidential: false,
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
      "Site public d'Upjunoo Pro : présentation des services de mobilité et de logistique, recrutement des chauffeurs et téléchargement des applications.",
    longDescription:
      "Vitrine de la branche pro d'Upjunoo, multilingue, qui expose les quatre offres — VTC, livraison, fret urbain et location — et sert de point d'entrée aux deux publics : les clients qui téléchargent l'app, et les chauffeurs qui candidatent. Le site embarque le parcours « devenir chauffeur », une FAQ, les pages légales (CGU, conditions générales, confidentialité), un formulaire de contact et des liens de téléchargement avec QR code.",
    highlights: [
      "Parcours de recrutement des chauffeurs intégré au site",
      "Quatre offres présentées : VTC, livraison, fret urbain, location",
      "Multilingue, avec pages légales et FAQ",
      "Téléchargement des apps par lien ou QR code",
    ],
    tech: ["Next.js", "next-intl", "TypeScript", "Tailwind", "Lottie"],
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
    longDescription:
      "Application Expo avec expo-router qui regroupe les quatre services d'Upjunoo Pro dans un seul parcours : demander une course VTC, envoyer un colis, réserver du fret urbain ou louer un véhicule. L'utilisateur suit sa commande en temps réel, retrouve son historique, échange par messagerie et gère son profil. L'app inclut l'onboarding, les pages légales et le suivi de course.",
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
      "Marketplace mode multi-vendeurs : app acheteur et espace vendeur dans la même application, avec service IA de recherche par similarité.",
    longDescription:
      "Application Expo à deux visages : un parcours acheteur (accueil, catégories, recherche, favoris, fiche produit, panier, commande, avis) et un espace vendeur avec ses propres onglets pour publier et suivre ses ventes. Autour, un backend et un service IA dédié, déployés en Docker, qui gèrent la recherche par similarité via des embeddings stockés dans pgvector. Messagerie intégrée entre acheteurs et vendeurs, notifications et gestion des commandes.",
    highlights: [
      "Deux espaces dans une seule app : acheteur et vendeur",
      "Recherche par similarité via embeddings (pgvector)",
      "Messagerie acheteur / vendeur et notifications",
      "Backend et service IA séparés, orchestrés en Docker",
    ],
    tech: ["Next.js", "Node.js", "Docker", "pgvector", "AI service", "Expo"],
    category: "ecommerce",
    status: "wip",
    year: 2024,
    confidential: true,
  },
  {
    slug: "gestot",
    title: "Generale CI Manager — Gestion multi-sociétés",
    client: "Generale-CI",
    role: "Lead Fullstack",
    description:
      "Plateforme de gestion multi-sociétés : facturation, ITSM, suivi de projets, paie par Mobile Money et coffre-fort de credentials.",
    longDescription:
      "Application interne construite par phases autour d'un socle commun : authentification, gestion de l'argent, journal d'audit et contrats partagés entre modules. Elle couvre la facturation, un ITSM léger (tickets, incidents, parc), le suivi de projets, la paie versée par Wave, et un coffre-fort de credentials chiffré. L'API est typée de bout en bout via tRPC, la persistance passe par Prisma sur PostgreSQL, et un agent installé sur les postes remonte l'information terrain. Un assistant s'appuie sur LangGraph pour les tâches de traitement.",
    highlights: [
      "Multi-sociétés : facturation, ITSM, projets et paie dans un même socle",
      "API typée de bout en bout (tRPC) et journal d'audit transversal",
      "Coffre-fort de credentials chiffré",
      "Versement de paie par Wave Mobile Money",
      "Agent endpoint pour la remontée du parc",
    ],
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "LangGraph", "Docker", "Argon2"],
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
    longDescription:
      "Application de tontine numérique qui reproduit le fonctionnement des tontines traditionnelles ivoiriennes : on crée ou rejoint un groupe, on choisit le montant et la périodicité, et l'app orchestre les cycles — appel des cotisations, encaissement, attribution du tour et clôture. Des workers côté serveur gèrent les échéances et les rappels, les paiements passent par Mobile Money, et chaque participant suit l'activité du groupe et son propre historique.",
    highlights: [
      "Création ou adhésion à un groupe de tontine",
      "Cycles gérés automatiquement : cotisations, tours, clôture",
      "Workers d'échéances et notifications de rappel",
      "Paiement et versement par Mobile Money",
    ],
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
    longDescription:
      "Application à deux rôles pour la distribution de gaz domestique : côté client, on commande une bouteille B6 ou B12 et on suit la livraison ; côté vendeur, on reçoit les commandes, gère son stock et confirme les livraisons. Le paiement passe par Wave Business, et le backend NestJS tient le catalogue, les commandes et les comptes.",
    highlights: [
      "Deux espaces distincts : client et vendeur",
      "Commande de bouteilles B6 / B12 et suivi de livraison",
      "Encaissement par Wave Business",
      "Gestion du stock côté vendeur",
    ],
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
    longDescription:
      "Application pensée pour le jour du déménagement : on crée un déménagement, on déclare les pièces, puis chaque carton devient un conteneur identifié par un QR code que l'on scanne pour l'ouvrir. On y associe photos et contenu, ce qui permet ensuite de retrouver un objet par recherche plutôt qu'en ouvrant les cartons. L'app fonctionne avec l'appareil photo pour le scan et prévoit la lecture d'étiquettes Bluetooth.",
    highlights: [
      "Un QR code par carton, scanné avec l'appareil photo",
      "Photos et contenu associés à chaque conteneur",
      "Recherche d'un objet sans ouvrir les cartons",
      "Organisation par déménagement et par pièce",
    ],
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
    title: "Noche Pro — Téléprompteur vocal hors-ligne",
    role: "Solo / Fullstack",
    description:
      "Téléprompteur de bureau qui s'affiche dans l'encoche du MacBook et fait défiler le texte au rythme de la parole, avec reconnaissance vocale entièrement hors-ligne.",
    longDescription:
      "Application de bureau macOS et Windows. Le texte s'affiche dans l'encoche du MacBook — fenêtre transparente toujours au premier plan, avec animations d'expansion façon Dynamic Island — ou en fenêtre flottante redimensionnable. La reconnaissance vocale tourne en local, sans aucun envoi réseau : moteur Sherpa-ONNX avec modèles Zipformer streaming, ou Whisper en ONNX, les modèles se téléchargeant depuis l'interface. Le défilement suit la voix par appariement approximatif entre la transcription et le script, avec détection du silence pour les pauses, ou bascule en vitesse constante réglable en mots par minute. S'y ajoutent un éditeur de scripts avec import de fichiers texte, un stockage entièrement local, et la mise à jour automatique signée.",
    highlights: [
      "S'affiche dans l'encoche du MacBook, ou en fenêtre flottante",
      "Reconnaissance vocale 100 % hors-ligne (Sherpa-ONNX, Whisper)",
      "Défilement synchronisé à la voix par appariement approximatif",
      "Détection du silence : pause et reprise automatiques",
      "Éditeur de scripts, stockage local, mise à jour automatique",
    ],
    tech: ["Electron", "React 19", "Sherpa-ONNX", "Whisper", "Zustand", "Tailwind 4"],
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
    longDescription:
      "Deux sites pour le même groupe : la refonte du site institutionnel de Bernabé Afrique, et le e-commerce de Mr. Bricolage Côte d'Ivoire. Le catalogue produit n'est pas ressaisi mais tiré directement de l'ERP Microsoft Dynamics du groupe, ce qui impose de composer avec ses structures existantes plutôt qu'avec un modèle de données choisi. Mission complète : cadrage digital, développement et mise en production.",
    highlights: [
      "Refonte du site Bernabé Afrique et du e-commerce Mr. Bricolage CI",
      "Catalogue alimenté depuis l'ERP Microsoft Dynamics",
      "De la stratégie digitale à la mise en production",
    ],
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
    longDescription:
      "Deux assistants conversationnels branchés sur le catalogue produit du groupe, un pour Bernabé et un pour Mr. Bricolage. Les questions clients sont traitées par un graphe LangGraph qui va chercher la réponse dans le catalogue avant de répondre, avec conservation de l'état de conversation en PostgreSQL pour tenir le fil sur plusieurs échanges. Les documents et médias sont stockés sur Azure Blob, et les traces d'exécution sont suivies pour diagnostiquer les réponses discutables.",
    highlights: [
      "Deux assistants distincts, un par enseigne",
      "Réponses ancrées dans le catalogue produit (RAG)",
      "État de conversation persisté en PostgreSQL",
      "Traçage des exécutions pour diagnostiquer les réponses",
    ],
    tech: ["LangGraph", "OpenAI", "PostgreSQL", "Azure Blob", "Next.js", "LangSmith"],
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
    longDescription:
      "Site du distributeur avec un parcours pensé pour l'achat professionnel plutôt que pour le panier immédiat : le visiteur navigue dans le catalogue par catégorie et par marque avec des filtres, s'aide d'un conseiller pour choisir le bon lubrifiant selon son usage, puis constitue une demande de devis. Un espace d'administration gère le catalogue et les demandes entrantes.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    category: "ecommerce",
    status: "production",
    year: 2025,
    url: "https://gedislub.com",
    confidential: false,
  },
  {
    slug: "maison-des-perles",
    title: "Maison des Perles — E-commerce pâtisserie",
    role: "Fullstack",
    description:
      "Site e-commerce d'une pâtisserie artisanale ivoirienne : catalogue des créations, commande en ligne et back-office de gestion.",
    longDescription:
      "Boutique en ligne complète pour une pâtisserie artisanale : catalogue des créations, panier et passage de commande côté client, et back-office pour gérer produits, commandes et clients. L'authentification et les rôles séparent nettement la partie publique de l'administration.",
    highlights: [
      "Catalogue de pâtisseries artisanales et commande en ligne",
      "Back-office de gestion des produits et des commandes",
      "Séparation stricte entre site public et administration",
    ],
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Tailwind"],
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
    longDescription:
      "Site vitrine d'un fabricant abidjanais de mobilier sur-mesure : présentation des univers (mobilier, décoration, matelas, portes, cuisines), mise en avant des réalisations et prise de contact. Construit sur une base Next.js récente, en rendu statique, pour un site rapide et simple à héberger.",
    highlights: [
      "Présentation par univers : mobilier, décoration, matelas, portes, cuisines",
      "Galerie de réalisations et parcours de prise de contact",
      "Rendu statique, chargement rapide",
    ],
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
    longDescription:
      "Plateforme de présentation de biens immobiliers : recherche par critères, fiches détaillées avec galerie, et mise en relation avec les agents. Le site est optimisé pour le référencement, avec sitemap et robots générés.",
    highlights: [
      "Recherche de biens par critères et fiches détaillées",
      "Mise en relation avec les agents",
      "Sitemap et robots générés pour le référencement",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    category: "vitrine",
    status: "production",
    year: 2025,
    url: "https://dreamkeys.generale-ci.com",
    confidential: true,
  },
  {
    slug: "jtb-ci",
    title: "JTB — Journées Techniques de Bernabé",
    client: "Bernabé Côte d'Ivoire",
    role: "Fullstack",
    description:
      "Site officiel des Journées Techniques de Bernabé : programme de l'événement, inscription des participants et administration des inscriptions.",
    longDescription:
      "Site événementiel pour les Journées Techniques de Bernabé : présentation du programme sur les trois jours, inscription en ligne des participants, et back-office pour suivre et administrer les inscriptions. Déployé en conteneur, avec sa propre chaîne de build et de mise en production documentée.",
    highlights: [
      "Programme de l'événement et inscription en ligne",
      "Back-office de suivi des inscriptions",
      "Déploiement conteneurisé documenté",
    ],
    tech: ["Next.js 16", "TypeScript", "Prisma", "SQLite", "NextAuth", "Docker"],
    category: "vitrine",
    status: "production",
    year: 2025,
    url: "https://jtb.ci",
    logo: "/projets/logos/jtb.ico",
    confidential: true,
  },
  {
    slug: "tamamedia",
    title: "Tama Media — Plateforme média africaine",
    role: "Fullstack",
    description:
      "Plateforme d'actualité africaine : publication d'articles, rédaction avec assistance IA, et diffusion optimisée pour les moteurs et les agrégateurs.",
    longDescription:
      "Site média complet avec sa salle de rédaction : espace public d'un côté, back-office éditorial de l'autre, avec comptes, rôles et workflow de publication. La diffusion est soignée — sitemap Google News, flux RSS, notification IndexNow, mode hors-ligne et page de maintenance. Des traitements IA assistent la rédaction et l'enrichissement des articles.",
    highlights: [
      "Salle de rédaction : comptes, rôles, workflow de publication",
      "Sitemap Google News, flux RSS et notification IndexNow",
      "Assistance IA à la rédaction et à l'enrichissement",
      "Mode hors-ligne et pages légales complètes",
    ],
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "LangChain", "NextAuth"],
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
    longDescription:
      "Application iOS et site pour une marque spécialiste des dreadlocks : espace communautaire pour les porteurs de locks et boutique en ligne pour les produits d'entretien. L'app est publiée sur l'App Store.",
    highlights: [
      "Publiée sur l'App Store",
      "Volet communautaire et boutique dans la même app",
      "Marque spécialiste des dreadlocks",
    ],
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
    title: "Agora — Marketplace de produits et services",
    role: "Lead Mobile + Backend",
    description:
      "Application marketplace mobile où chacun peut acheter et vendre produits et services : publication d'annonces, recherche, messagerie et commandes.",
    longDescription:
      "Marketplace généraliste sur mobile : l'utilisateur publie une annonce, parcourt les catégories ou lance une recherche, échange par messagerie avec le vendeur puis passe commande. L'authentification s'appuie sur des jetons JWT avec rafraîchissement, et l'app gère la perte de réseau ainsi que le dépôt de pièces jointes.",
    highlights: [
      "Publication d'annonces et espace vendeur",
      "Recherche, catégories et fiches d'annonce",
      "Messagerie intégrée entre acheteur et vendeur",
      "Authentification JWT avec jeton de rafraîchissement",
    ],
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
    description:
      "Application de billetterie événementielle à trois rôles : spectateur, promoteur d'événement et agent de contrôle à l'entrée.",
    longDescription:
      "Chaque profil a son propre parcours dans la même application : le spectateur découvre les événements et achète ses billets, le promoteur crée son événement et suit ses ventes, et l'agent de contrôle scanne les billets à l'entrée avec l'appareil photo. Le billet vit dans l'app, ce qui évite l'impression.",
    highlights: [
      "Trois rôles : spectateur, promoteur, contrôle à l'entrée",
      "Achat de billets et billet dématérialisé dans l'app",
      "Scan des billets à l'entrée via l'appareil photo",
      "Suivi des ventes côté promoteur",
    ],
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
    description:
      "Assistant conversationnel de gestion financière personnelle. Projet en cours, au stade des fondations.",
    longDescription:
      "Exploration d'un assistant qui répond aux questions d'argent du quotidien en langage naturel. Le projet en est aux fondations : structure de navigation posée, le travail sur le moteur de conversation et le rattachement aux données financières reste à faire.",
    highlights: [
      "Assistant financier en langage naturel",
      "Stade actuel : fondations de l'application mobile",
    ],
    tech: ["Expo", "LLM", "Node.js"],
    category: "ai",
    status: "wip",
    year: 2025,
    confidential: true,
  },
  {
    slug: "spiritueux",
    title: "Spiritueux — E-commerce boissons & vape",
    role: "Mobile Dev",
    description:
      "Application e-commerce iOS et Android pour vins, cigarettes électroniques et e-liquides, avec vérification d'âge à l'entrée.",
    longDescription:
      "Boutique mobile sur un marché réglementé : l'app impose une barrière d'âge dès le lancement, puis une authentification par téléphone avec code à usage unique ou par compte Google. Le client parcourt le catalogue et commande ; un espace d'administration gère produits et commandes. Construite sur la nouvelle architecture React Native avec des onglets natifs — SF Symbols sur iOS, ressources Material sur Android.",
    highlights: [
      "Barrière d'âge obligatoire avant tout accès au catalogue",
      "Authentification par téléphone (OTP) ou compte Google",
      "Espace d'administration du catalogue et des commandes",
      "Nouvelle architecture React Native, onglets natifs par plateforme",
    ],
    tech: ["Expo SDK 54", "React Native 0.81", "NestJS", "Prisma", "PostgreSQL", "Firebase Auth"],
    category: "ecommerce",
    status: "wip",
    year: 2025,
    confidential: true,
  },
  {
    slug: "yu-card",
    title: "Yu Card — Cartes cadeaux & électronique",
    role: "Lead Fullstack",
    description:
      "Plateforme mobile de vente de cartes cadeaux et de produits électroniques, avec paiement par portefeuille Wave.",
    longDescription:
      "Application de vente à double catalogue : cartes cadeaux dématérialisées et produits électroniques. Le client cherche, ajoute au panier, paie via son portefeuille Wave et suit ses commandes ; les avis produits alimentent les fiches. Un espace d'administration, avec ses propres onglets, gère catalogue et commandes. Le backend est un service séparé.",
    highlights: [
      "Cartes cadeaux dématérialisées et électronique dans la même app",
      "Paiement par portefeuille Wave",
      "Espace d'administration intégré",
      "Avis produits et suivi des commandes",
    ],
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
    longDescription:
      "Suite d'outils du quotidien qui s'exécutent entièrement dans le navigateur : conversion de formats, génération de PDF et de documents, traitement d'images dont la suppression d'arrière-plan, vectorisation, compression. Rien n'est envoyé au serveur — le fichier traité ne quitte jamais la machine — et il n'y a ni compte ni inscription.",
    highlights: [
      "Tout s'exécute côté navigateur : aucun fichier envoyé au serveur",
      "Sans compte ni inscription",
      "Images, PDF, documents et conversions de formats",
      "Suppression d'arrière-plan et vectorisation en local",
    ],
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
    longDescription:
      "Passerelle qui expose l'envoi de SMS comme un service pour les autres applications du parc : API pour émettre, WebSocket pour suivre l'état des envois en temps réel, et prise en charge de plusieurs opérateurs. Livrée en conteneur avec une interface d'administration.",
    highlights: [
      "Service d'envoi mutualisé pour les applications du parc",
      "Suivi des envois en temps réel par WebSocket",
      "Multi-opérateurs",
      "Livrée en conteneur avec interface d'administration",
    ],
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
    longDescription:
      "Service de partage de fichiers par lien, avec date d'expiration et protection par mot de passe. Retiré du service depuis.",
    highlights: [
      "Partage par lien avec expiration",
      "Protection par mot de passe",
      "Service arrêté",
    ],
    tech: ["Node.js", "TypeScript"],
    category: "infra",
    status: "archived",
    year: 2025,
    confidential: false,
  },
  {
    slug: "kev-storage",
    title: "Kev Storage — Service de stockage de fichiers",
    role: "Solo / Backend",
    description:
      "Service de stockage de fichiers mutualisé, utilisé par plusieurs applications en production : dépôt, permissions et transformation d'images.",
    longDescription:
      "API de stockage écrite pour être partagée entre projets plutôt que réimplémentée à chaque fois. Elle gère le dépôt de fichiers, l'authentification par jeton, les permissions d'accès, la limitation de débit et la transformation d'images à la volée. Documentée en OpenAPI, avec Redis pour le cache et les compteurs, et les en-têtes de sécurité posés au niveau du serveur.",
    highlights: [
      "Service mutualisé entre plusieurs applications en production",
      "Authentification par jeton et permissions par fichier",
      "Transformation d'images à la volée",
      "API documentée en OpenAPI, limitation de débit",
    ],
    tech: ["Node.js", "TypeScript", "Express", "Redis", "Sharp", "JWT", "OpenAPI"],
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
    longDescription:
      "Le serveur qui porte la production : une trentaine de conteneurs et de processus applicatifs, une base PostgreSQL partagée, du cache, de la recherche et du stockage objet, le tout derrière nginx avec certificats automatiques. Autour, l'outillage maison qui rend l'exploitation tenable : scripts de déploiement par application, sauvegardes et restauration, supervision, rotation des journaux et détection d'intrusion. C'est aussi la machine qui héberge le service de build Android.",
    highlights: [
      "25+ applications en production sur une seule machine",
      "Scripts de déploiement dédiés par application",
      "Sauvegardes, restauration et supervision automatisées",
      "Certificats renouvelés automatiquement, y compris par DNS",
    ],
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
    longDescription:
      "Catalogue produit en ligne pour IMCI, avec recherche et fiches détaillées, alimenté depuis les données de l'ERP du groupe. Il donne aux commerciaux et aux clients un accès direct à la référence produit sans passer par l'ERP.",
    highlights: [
      "Catalogue consultable en ligne, alimenté depuis l'ERP",
      "Recherche et fiches produit détaillées",
      "Accès à la référence produit sans ouvrir l'ERP",
    ],
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
    longDescription:
      "Deux briques complémentaires : une API de scoring crédit qui évalue les dossiers, et un tableau de bord d'administration pour les instruire et les suivre. Une partie de la logique de décision est portée par des procédures stockées côté base, au plus près des données.",
    highlights: [
      "API de scoring crédit et tableau de bord d'instruction",
      "Logique de décision partiellement en procédures stockées",
      "Suivi des dossiers de bout en bout",
    ],
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
    longDescription:
      "Chaîne complète de scan industriel : côté ERP, une codeunit écrite pour Microsoft Dynamics NAV 14 qui expose les opérations de code-barres en SOAP ; côté terrain, une application mobile qui scanne et dialogue directement avec l'ERP. Le travail a inclus la documentation des services SOAP, indispensable pour rendre l'intégration reproductible sur une version d'ERP ancienne.",
    highlights: [
      "Codeunit Barcode développée pour Dynamics NAV 14",
      "Services SOAP exposés et documentés",
      "Application mobile de scan connectée à l'ERP",
      "Intégration sur une version d'ERP ancienne, sans montée de version",
    ],
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
    longDescription:
      "ERP de bureau volontairement réduit à l'essentiel pour de petits commerces : ventes, stock et clients, dans une application installable qui fonctionne sans connexion permanente. Le choix du desktop répond au terrain — connexion irrégulière, poste unique en boutique — là où une application web imposerait d'être en ligne.",
    highlights: [
      "Ventes, stock et clients dans une application installable",
      "Fonctionne sans connexion permanente",
      "Pensé pour de petits commerces à poste unique",
    ],
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
    longDescription:
      "La Facture Normalisée Électronique impose de faire certifier chaque facture par l'API de la DGI. Le service fait le pont entre les ERP du groupe — incadea, Microsoft Dynamics NAV et Sage, dont les données vivent en SQL Server — et cette API : il récupère les factures, les transmet, récupère le retour de certification et permet de rejouer les rejets. L'application est découpée par métier, avec un espace par rôle : caisse, comptabilité, direction et administration. L'accès s'appuie sur des clés d'authentification sans mot de passe.",
    tech: ["Next.js", "Drizzle", "SQL Server", "API DGI", "WebAuthn", "S3"],
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
    longDescription:
      "Application de réunion qui transforme l'enregistrement en matière exploitable : la parole est transcrite, les intervenants sont séparés automatiquement, et le contenu reste interrogeable d'une réunion à l'autre. À partir de ce qui s'est dit, l'app produit un pré-devis — ce qui répond au cas concret d'un rendez-vous client où l'on repart avec une proposition chiffrée plutôt qu'avec des notes.",
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
    longDescription:
      "Plateforme d'emailing complète : import des contacts, constitution de segments, rédaction et envoi des campagnes, puis suivi des ouvertures, des clics et des désinscriptions par des liens de traçage dédiés. Un assistant aide à la rédaction des messages.",
    highlights: [
      "Import de contacts et constitution de segments",
      "Envoi de campagnes et suivi ouvertures / clics / désinscriptions",
      "Liens de traçage et pages de désinscription dédiées",
      "Assistance IA à la rédaction des messages",
    ],
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
    longDescription:
      "Messagerie mobile avec appels audio et vidéo, adossée à un serveur de temps réel LiveKit auto-hébergé plutôt qu'à un service tiers : le trafic des appels reste sur l'infrastructure. Connexion par compte Google ou Apple, notifications push, et une déclinaison web en complément des applications iOS et Android.",
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
    longDescription:
      "Ce que fait Windows + V sur PC, mais sur Mac : l'historique du presse-papier, rappelable à tout moment. Application SwiftUI et AppKit compilée en binaire universel pour Apple Silicon et Intel, notarisée par Apple, avec mises à jour automatiques. La publication d'une version — build, signature, notarisation, mise en ligne du flux de mise à jour — tient en une seule commande.",
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
    longDescription:
      "Boutique en ligne et back-office pour un revendeur informatique et bureautique de Treichville : catalogue, panier, commandes et tableau de bord avec ses indicateurs de vente. Interface entièrement en français et prix en francs CFA. L'authentification est une implémentation maison à base de jetons signés en cookie sécurisé.",
    highlights: [
      "Boutique et tableau de bord d'administration",
      "Interface en français, prix en FCFA",
      "Indicateurs de vente pour le gérant",
      "Sessions par jeton signé en cookie httpOnly",
    ],
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
    longDescription:
      "Site d'un club Toastmasters francophone, pensé pour convertir le visiteur curieux en invité : présentation du club, calendrier des réunions, ce qui attend un premier visiteur — sans obligation de prendre la parole — annuaire des membres et ressources. Un espace réservé est ouvert aux membres inscrits. Le site est traduit en français, anglais et arabe.",
    highlights: [
      "Trois langues : français, anglais, arabe",
      "Calendrier des réunions et parcours pour les invités",
      "Annuaire des membres et ressources du club",
      "Espace réservé aux membres",
    ],
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
    longDescription:
      "Application de pointage du personnel : enregistrement des arrivées et des départs, consolidation des présences par période et restitution au responsable. Elle remplace le relevé manuel par une saisie directe et un état consultable à tout moment.",
    highlights: [
      "Pointage des arrivées et des départs",
      "Consolidation des présences par période",
      "Tableau de bord de restitution pour le responsable",
    ],
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
    longDescription:
      "Jeu de plateformes en 2D avec une progression par carte de niveaux, dans l'esprit des jeux à niveaux successifs. Le parti pris technique est de décrire chaque niveau en ASCII dans le code : un niveau se lit, se corrige et se teste en quelques secondes, sans passer par un éditeur graphique — ce qui change complètement la vitesse d'itération sur le level design.",
    highlights: [
      "Plateformer 2D avec carte de progression des niveaux",
      "Niveaux décrits en ASCII : itération très rapide sur le level design",
      "Export multiplateforme",
    ],
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
    longDescription:
      "Lanceur de projets pour macOS : un raccourci global ouvre une barre de recherche façon Spotlight qui ne cherche que dans les projets de développement, et les ouvre directement dans le bon éditeur. Icône dans la barre de menus, installation par un simple script de build.",
    highlights: [
      "Raccourci global, recherche façon Spotlight",
      "Ouvre chaque projet dans son éditeur",
      "Icône dans la barre de menus, build et installation en une commande",
    ],
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
    longDescription:
      "Prototypes électroniques autour de l'ESP32 : capteurs domotiques, remontée par MQTT, et une passerelle GSM associant l'ESP32 à un module SIM900 pour émettre des SMS depuis un montage autonome — la brique matérielle qui a précédé la passerelle SMS logicielle. Les cartes sont mises à jour à distance par OTA.",
    highlights: [
      "Capteurs domotiques et remontée par MQTT",
      "Passerelle GSM ESP32 + SIM900 pour l'envoi de SMS",
      "Mise à jour des cartes à distance (OTA)",
      "Support d'ateliers d'initiation à la robotique",
    ],
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
    longDescription:
      "Application iOS écrite nativement en Swift et SwiftUI, doublée d'une variante Expo pour comparer les deux approches sur un même produit. Projet personnel, mené autant pour l'app que pour l'exercice de comparaison.",
    highlights: [
      "iOS natif en Swift / SwiftUI",
      "Variante Expo du même produit, à titre de comparaison",
    ],
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
