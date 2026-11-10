export type NarrativeChapter={title:string;body:string};
export type ProjectNarrative={duration?:string;chapters:NarrativeChapter[];related?:{slug:string;label:string}[]};
const upjunooClient:ProjectNarrative={duration:'1 mois et demi pour l’ensemble client + chauffeur',related:[{slug:'upjunoo-driver',label:'L’autre côté : l’application chauffeur'}],chapters:[
 {title:'Quatre services, quatre intentions.',body:'Commander une course, envoyer un colis, louer un véhicule ou organiser du fret ne demandent pas les mêmes informations. L’accueil donne une entrée claire à chaque service. Les parcours ont ensuite leurs propres choix : lieux, durée, chauffeur, dimensions du colis ou demande de devis.'},
 {title:'La carte est une partie du parcours.',body:'La carte native Mapbox relie recherche d’adresse, position, itinéraire et estimation. Le géocodage, le calcul des temps de trajet et la recherche de chauffeurs passent par les services cartographiques du backend. L’interface doit garder une lecture cohérente quand l’adresse ou la destination change.'},
 {title:'La réservation continue après le paiement.',body:'Suivi de commande, reçus, portefeuille, messages, appels et assistance accompagnent le déplacement. Les mises à jour temps réel disposent d’un repli par interrogation du serveur. Le travail couvre aussi les états d’attente et les interruptions, pour que l’utilisateur sache où en est sa demande.'},
]};
const upjunooDriver:ProjectNarrative={duration:'1 mois et demi pour l’ensemble client + chauffeur',related:[{slug:'upjunoo-pro-client',label:'L’autre côté : l’application client'}],chapters:[
 {title:'Du dispatch à la prise en charge.',body:'Le chauffeur passe en ligne et reçoit une offre en temps réel. L’acceptation ouvre un cycle de course : rejoindre le point de départ, signaler son arrivée, démarrer, puis terminer. Le dispatch est relié aux événements du serveur, aux annulations et aux mises à jour de position.'},
 {title:'Une carte qui aide vraiment à conduire.',body:'Le travail cartographique va au-delà du tracé d’une ligne. La caméra et la flèche doivent suivre la même direction sur la route. Le guidage gère l’orientation, les changements de trajet et la reprise de position, avec un indicateur natif de secours pour conserver un repère visible.'},
 {title:'Le métier ne s’arrête pas à la course.',body:'Portefeuille de service, mouvements, gains et disponibilité appartiennent au même outil. Une offre expire, une connexion se coupe, l’application redémarre : les parcours prévoient la récupération de la course active et conservent son état lorsqu’une action serveur échoue. Ces détails comptent autant que l’écran d’accueil.'},
]};
export const projectNarratives:Record<string,ProjectNarrative>={
 'upjunoo-pro-client':upjunooClient,'upjunoo-driver':upjunooDriver,
 upjunoo:{duration:upjunooClient.duration,related:[{slug:'upjunoo-pro-client',label:'Explorer l’application client'},{slug:'upjunoo-driver',label:'Explorer l’application chauffeur'}],chapters:[{title:'Deux applications, une opération commune.',body:'Le client cherche un service et suit sa réservation. Le chauffeur reçoit une offre et réalise la course. Ces deux points de vue ont leur propre application, avec une identité commune, des parcours différents et une coordination par la cartographie, le dispatch et le temps réel.'},...upjunooDriver.chapters.slice(0,2)]},
 'upjunoo-pro':{...upjunooClient,related:[{slug:'upjunoo-pro-client',label:'Application client'},{slug:'upjunoo-driver',label:'Application chauffeur'}]},
 akili:{
  "chapters": [
    {
      "title": "Le doute arrive avant la recherche.",
      "body": "Une capture circule dans un groupe, une citation paraît suspecte, un chiffre se répète. Akili part de cette situation quotidienne : permettre de poser la question avec le contenu que l’on a déjà, sans demander de maîtriser les techniques de vérification. Le site présente le service, le web ouvre la conversation et les applications iOS et Android permettent de retrouver ses échanges. WhatsApp constitue une autre porte d’entrée, au plus près de la circulation des messages."
    },
    {
      "title": "Un verdict ne suffit pas.",
      "body": "La réponse doit expliquer ce qui a été vérifié et donner accès aux références utilisées. Dans la conversation, les liens des sources sont rendus cliquables pour permettre au lecteur de poursuivre sa recherche. Les verdicts sont aussi structurés en trois catégories — vrai, partiel et infox — et associés à l’historique. Le défi est de résumer sans effacer la nuance : une information partiellement vraie ne doit pas devenir vraie simplement parce que le mot apparaît dans la réponse."
    },
    {
      "title": "Écrire, montrer, parler.",
      "body": "Le parcours mobile prend en charge la saisie, les pièces jointes et les services vocaux. Pour une image, afficher la pièce jointe sur le téléphone ne suffit pas : le service d’analyse doit pouvoir accéder à son URL. Pour la voix, transcription et synthèse permettent de passer du message audio au texte, puis de lire une réponse à voix haute. Ces échanges demandent une gestion explicite de l’envoi, de l’attente et des erreurs, avec des formats adaptés aux différents services."
    },
    {
      "title": "Laisser une place au journaliste.",
      "body": "Une réponse peut être contestée ou demander un approfondissement. Le retour utilisateur et la demande de vérification relient alors la conversation au travail des journalistes. Akili est pensé comme une interface entre l’assistance automatique et l’expertise éditoriale : le lecteur signale son besoin, le dossier est transmis, puis une réponse peut revenir dans le parcours. Cette continuité compte autant que la première réponse ; l’objectif est d’aider à comprendre, pas de présenter l’IA comme une autorité infaillible."
    },
    {
      "title": "Une langue, un contexte, une entrée utile.",
      "body": "Le mobile comporte des traductions en français, anglais, arabe, espagnol, bambara et dioula. La langue et la région orientent les contenus et les suggestions. L’accueil et la conversation n’ont pas le même besoin : une suggestion de sujet à explorer et une demande prête à envoyer doivent pouvoir avoir un titre court différent du texte transmis au service. Le site public propose également une entrée Europe, à côté du positionnement africain du produit."
    },
    {
      "title": "Retrouver le fil, même après avoir quitté l’écran.",
      "body": "L’historique conserve les conversations et leurs verdicts. Les notifications prolongent l’échange lorsqu’une réponse arrive en arrière-plan. Côté mobile, les états sont répartis entre conversation, médias, compte, préférences et contenus éditoriaux. Le travail porte aussi sur les situations moins visibles : restauration de session, renouvellement de l’accès, fichier en cours d’envoi ou liste vide. L’utilisateur doit comprendre ce qui est disponible, ce qui charge et ce qui demande une action."
    },
    {
      "title": "De la question à la lecture.",
      "body": "Akili donne aussi accès à des articles et à des décryptages. Tama Média apporte une continuité éditoriale avec ses contenus de vérification : la conversation répond à une question, tandis qu’un article permet d’en explorer le contexte. Le site public et l’application ont leurs propres chemins d’accès aux contenus. Ce lien entre les produits est présenté comme un parcours de lecture, sans confondre leurs flux techniques ni promettre une synchronisation automatique de toutes les publications."
    },
    {
      "title": "Un produit complet derrière le chat.",
      "body": "La version serveur examinée repose sur Next.js, les services du Vercel AI SDK et Firebase Admin avec Firestore. Le mobile utilise Expo, React Native, TypeScript et Zustand. Des API organisent les conversations, les fichiers, les signalements, les suggestions, les contenus et les notifications ; l’administration permet de les gérer. Mon travail relie ces surfaces pour que la même intention — vérifier une information — reste compréhensible du premier message jusqu’à la consultation des sources ou au relais humain."
    }
  ],
  "related": [
    {
      "slug": "tamamedia",
      "label": "Le prolongement éditorial : Tama Média"
    }
  ]
},
 moro:{chapters:[
 {title:'Lire sa situation avant de décider.',body:'Le quotidien commence par les revenus, les dépenses, les transactions et les projets. La même plateforme rapproche l’application mobile, l’espace business et les services associés. L’objectif est de rendre l’information financière consultable, puis exploitable dans la gestion de ses activités.'},
 {title:'Respecter les mots du métier.',body:'Une coopérative et une formation ne sont pas le même produit : les GIE désignent les groupements d’intérêt économique, alors qu’EDUFI est un programme de formation. Cette distinction se retrouve dans les parcours et les libellés. Concevoir l’interface demande aussi de comprendre ces usages.'},
 {title:'Une plateforme qui se prolonge.',body:'Paiements Mobile Money, documents et assistant IA relient plusieurs parcours. Le travail comprend également une évolution vers la certification par des experts-comptables, avec attribution des dossiers et traçabilité. Ce chantier est distingué des fonctions de gestion déjà présentes dans l’application.'},
 ]},
 'generale-ci':{chapters:[
 {title:'Faire entrer les boutiques dans la plateforme.',body:'Une marketplace ne peut pas demander à chaque commerçant de tout ressaisir. Générale CI prévoit plusieurs voies : import CSV ou Excel, connecteurs de boutiques, API partenaire et webhooks. L’intégration marchande est une partie du produit, au même titre que le catalogue visible par le client.'},
 {title:'Relier le stock à ce qui se vend.',body:'Les connecteurs rapprochent les catalogues existants et la plateforme. Le travail documenté couvre notamment Shopify, WooCommerce, Odoo, PrestaShop et Magento. La vente doit ensuite s’inscrire dans la gestion du stock et des variantes, sans créer deux versions contradictoires du catalogue.'},
 {title:'Une commande doit arriver quelque part.',body:'La livraison réunit le vendeur, le client, le chauffeur et le gestionnaire. Les petits colis et les livraisons gérées par les boutiques ne suivent pas nécessairement le même circuit. Un espace chauffeur et un tableau de dispatch accompagnent cette opération, avec des états reliés à la commande.'},
 ]},
 gescom:{chapters:[
 {title:'Suivre les documents du commerce.',body:'Demande de prix, achat, devis, facture et stock forment une chaîne de travail. Le logiciel de bureau rapproche ces opérations et leurs documents. L’enjeu est de conserver une information cohérente lorsque plusieurs utilisateurs, sociétés ou services travaillent sur la même activité.'},
 {title:'Les détails métier changent le produit.',body:'La gestion multi-devises est activable selon les besoins, et les demandes de prix peuvent être produites en PDF. La certification FNE s’inscrit dans le cycle des documents. Ces évolutions partent d’usages concrets et doivent préserver les habitudes de travail déjà en place.'},
 {title:'Faire évoluer sans interrompre.',body:'Un logiciel installé doit aussi être distribué, mis à jour et accompagné. Le travail comprend les canaux de publication macOS et Windows, les licences et la qualification des versions. Une édition Industrie ouvre un autre périmètre : fabrication, nomenclatures, ordres de fabrication et coût de revient.'},
 ]},
 genmail:{chapters:[
 {title:'Le courrier rejoint le travail quotidien.',body:'GenMail rassemble les comptes de messagerie dans une application de bureau. Le cache local et la recherche SQLite permettent de travailler sur les messages déjà synchronisés. La rédaction, les dossiers et les règles de tri sont pensés comme des outils du quotidien.'},
 {title:'Un annuaire relié à GESCOM.',body:'Les clients et fournisseurs de GESCOM peuvent alimenter l’annuaire en lecture seule. Cette relation évite de recréer un carnet d’adresses isolé. La messagerie conserve ainsi un lien avec les interlocuteurs du logiciel métier.'},
 {title:'Automatiser avec un périmètre clair.',body:'L’intégration MCP permet notamment de préparer des dossiers et des règles de classement. Les règles créées par l’assistant sont limitées au tri : elles ne deviennent pas des transferts ou des réponses automatiques. Le développement comprend aussi la distribution et les mises à jour de l’application.'},
 ]},
 'bernabe-bricolage':{chapters:[
 {title:'Le catalogue doit se laisser parcourir.',body:'Le magasin se prolonge par les familles de produits, la recherche et les pages de conseil. L’intégration web doit faire tenir ensemble les références, les visuels et les informations utiles au visiteur, tout en respectant l’identité Mr. Bricolage.'},
 {title:'L’animation commerciale devient interactive.',body:'Une opération de cartes à gratter a ajouté une interaction tactile et souris au catalogue. Le gain ne se décide pas dans le navigateur : le serveur contrôle les créneaux et le stock disponible. L’expérience visuelle et les contraintes de l’opération doivent fonctionner ensemble.'},
 {title:'La qualité se joue aussi dans les parcours.',body:'Les pages de listing, la recherche et les liens produits ont leurs propres cas limites. Le travail continue après la mise en ligne, pour corriger les incohérences de navigation et garder une expérience cohérente entre les différentes entrées du catalogue.'},
 ]},
 tamamedia:{
  "chapters": [
    {
      "title": "Le sujet mérite plus qu’un fil d’actualité.",
      "body": "Tama Média est un collectif de journalistes africains qui privilégie l’enquête, le terrain et l’explication. Le produit doit servir cette profondeur : distinguer les formats, donner de la place aux auteurs et permettre de revenir sur un sujet. L’accueil public organise aujourd’hui enquêtes, reportages, explications, entretiens et fact-checking. Le travail consiste à transformer une matière éditoriale abondante en un journal que l’on peut parcourir, comprendre et lire dans la durée."
    },
    {
      "title": "Trouver une histoire, puis suivre le dossier.",
      "body": "La navigation sépare les formats journalistiques des thèmes abordés. La recherche propose une entrée par sujet, pays ou auteur ; les dossiers rassemblent plusieurs épisodes autour d’une question commune. Le lecteur peut ainsi passer d’une actualité à une série, puis à un autre angle sur le même sujet. Dans le modèle de contenu, les articles, catégories, mots-clés, relations et dossiers sont distincts : cette organisation rend les rapprochements possibles sans réduire tout le journal à une liste chronologique."
    },
    {
      "title": "Lire longtemps doit rester simple.",
      "body": "Un article rassemble un titre, un chapô, un auteur, un temps de lecture et des médias. Les contenus peuvent être libres ou réservés aux abonnés ; l’espace lecteur comprend également l’enregistrement d’articles. Il faut rendre ces différences compréhensibles sans casser la lecture. L’architecture associe le contenu à ses traductions, à ses catégories et à ses éléments de référencement, pour conserver une information cohérente entre la page de lecture, les résultats de recherche et les aperçus partagés."
    },
    {
      "title": "La salle de rédaction est l’autre moitié du site.",
      "body": "Derrière le journal, le back-office gère les articles, les médias, les comptes et les droits. L’éditeur TipTap accompagne la mise en forme ; le modèle prévoit brouillons, publication, archivage et dates de programmation. La sélection de la une, le classement dans les rubriques et le rattachement aux dossiers sont des choix éditoriaux. Le développement doit permettre à la rédaction de les faire évoluer sans intervention technique à chaque changement de sujet."
    },
    {
      "title": "Assister l’écriture, garder la décision.",
      "body": "L’assistant de rédaction travaille avec le contexte de l’article : proposer des titres, un plan, une introduction, un extrait ou des pistes de référencement. Les suggestions de titre, d’extrait et de SEO ne sont pas appliquées automatiquement ; le rédacteur choisit ce qu’il retient. Cette séparation entre proposition et application préserve le contrôle éditorial. Le rôle de l’outil est de faciliter le travail dans l’éditeur, tout en laissant à l’équipe la responsabilité du contenu publié."
    },
    {
      "title": "Un journal se lit, s’écoute et se regarde.",
      "body": "La plateforme donne une place propre aux podcasts et à Tama Média TV. Les contenus audio et vidéo ont leurs modèles et leurs pages, au lieu d’être de simples pièces jointes à un article. Le site met aussi en avant des écoutes en mandenkan et en fulfulde. Cette variété impose de garder des repères communs — thème, auteur, navigation — tout en respectant la manière dont chaque format est consommé."
    },
    {
      "title": "La relation continue après la visite.",
      "body": "L’abonnement, les contenus premium, les favoris et la newsletter prolongent le lien avec les lecteurs. Le code comprend la gestion des offres, le parcours Stripe et les notifications de paiement ; la newsletter possède des mécanismes d’inscription et de désinscription. Côté diffusion, flux RSS, sitemap et données de référencement permettent aux contenus de circuler au-delà de l’accueil. L’enjeu est de construire une relation durable, avec des parcours distincts pour lire, revenir et soutenir le média."
    },
    {
      "title": "Deux produits, un même souci de vérification.",
      "body": "Les Vérificateurs donnent une forme journalistique au fact-checking ; Akili en propose une entrée conversationnelle. Sur le site, une présentation dédiée explique comment soumettre une information et retrouver ses sources, avec un relais journaliste lorsque nécessaire. La plateforme éditoriale repose sur Next.js, TypeScript, PostgreSQL, Prisma et NextAuth, avec une exploitation Docker. La réalisation réunit ainsi expérience publique, outils de rédaction et services de diffusion autour du travail réel d’un média."
    }
  ],
  "related": [
    {
      "slug": "akili",
      "label": "Le volet conversationnel : Akili"
    }
  ]
},
 yapasgachis:{chapters:[
 {title:'Des invendus, plusieurs acteurs.',body:'La plateforme met en relation commerces et consommateurs, mais prévoit aussi des parcours pour les associations et les offres de bons plans. Publier, découvrir, réserver et récupérer une offre sont les étapes d’une même histoire.'},
 {title:'Le produit existe sur plusieurs supports.',body:'Le web, les applications mobiles désormais en production, le backend et le service média sont des ensembles distincts. Le backend actuel utilise Express et TypeScript, avec Prisma, PostgreSQL et Redis. Les images produits sont gérées par un service dédié.'},
 {title:'Faire vivre les offres.',body:'Disponibilité, paiement et récupération donnent un rythme particulier à une offre anti-gaspillage. La plateforme associe les parcours vendeurs et clients, les paiements Wave ou à la récupération, et des traitements en arrière-plan. Les services doivent rester cohérents avec ce qui est affiché dans l’application.'},
 ]},
 echo:{chapters:[
 {title:'Une réunion devient une matière de travail.',body:'L’enregistrement est suivi d’une transcription et d’une séparation des intervenants. Le parcours ne s’arrête pas à un texte : résumés, actions et pré-devis répondent au cas d’un rendez-vous dont il faut préparer la suite.'},
 {title:'L’audio a son propre parcours.',body:'Sur mobile, enregistrer, suivre le traitement et retrouver la réunion sont des étapes distinctes. La progression du traitement arrive par WebSocket. La reconnaissance des voix et la mémoire interrogeable donnent un contexte qui peut se prolonger d’une réunion à l’autre.'},
 {title:'Un assistant autour de la réunion.',body:'Le programme Emili Echo IA ajoute un dialogue sur le contenu et des actions accompagnées de confirmations. Les mémoires distinguent ce lot des idées de partage avancé et de voix héritée, encore à spécifier : ces pistes ne sont pas présentées comme des fonctions livrées.'},
 ]},
 'noche-pro':{chapters:[
 {title:'Suivre la voix plutôt qu’un chronomètre.',body:'Le téléprompteur rapproche le texte du regard, dans l’encoche ou une fenêtre flottante. La reconnaissance locale permet de suivre la parole, détecter ses pauses et reprendre le défilement sans dépendre d’un service en ligne.'},
 {title:'Un outil de bureau, jusque dans les détails.',body:'L’éditeur de scripts, le stockage local et la fenêtre au premier plan composent le même outil. Les modèles vocaux se téléchargent depuis l’application. Une vitesse constante reste disponible lorsqu’un défilement classique convient mieux.'},
 {title:'Une nouvelle piste : l’écoute en direct.',body:'Un chantier distinct explore la capture audio d’une application, la transcription en direct et la traduction en français. Cette évolution est présentée comme un travail en cours, séparé du téléprompteur hors ligne déjà décrit.'},
 ]},
 klippy:{chapters:[
 {title:'Un geste familier, sur Mac.',body:'L’idée part de l’historique du presse-papier : retrouver un texte, un lien ou une image copiés plus tôt. Le panneau doit s’ouvrir rapidement, garder son focus et rendre les résultats faciles à parcourir au clavier.'},
 {title:'La fluidité demande du travail invisible.',body:'Le travail de fiabilisation a porté sur l’identité des résultats, la déduplication des images et la mise en cache des miniatures. Éviter les relectures du disque à chaque rendu améliore un outil que l’on ouvre très souvent.'},
 {title:'Livrer une vraie application macOS.',body:'Le binaire universel est construit pour Apple Silicon et Intel. Signature, notarisation, image disque et flux Sparkle font partie de la publication. L’utilisateur retrouve une application installable et un mécanisme de mise à jour intégré.'},
 ]},
 forge:{chapters:[
 {title:'Retrouver un projet sans chercher son dossier.',body:'Forge est un lanceur natif macOS inspiré du geste Spotlight. Recherche, projets récents et raccourcis clavier rapprochent les environnements de travail sans obliger à naviguer dans toute l’arborescence.'},
 {title:'Les disques ne sont pas toujours branchés.',body:'L’indexation couvre aussi les volumes externes et déduplique les liens symboliques par leur chemin réel. Un projet d’un disque absent reste identifiable, avec une indication claire au lieu d’une ouverture qui échoue sans explication.'},
 ]},
 'migration-cockpit':{chapters:[
 {title:'Au départ, déplacer des données.',body:'La première console aide à explorer les schémas, relier les champs et piloter une migration. Les droits des administrateurs, développeurs et opérateurs distinguent les actions possibles.'},
 {title:'Puis réunir les outils d’infrastructure.',body:'Le projet évolue vers un hub réunissant serveurs, bases, Docker, PM2, VPN, cPanel et Azure. Les providers partagent une organisation commune, tandis que chaque intégration garde son fonctionnement métier.'},
 {title:'La migration devient un module.',body:'Le tableau de bord s’élargit à l’état de l’infrastructure. La migration peut être activée comme un module optionnel. Cette évolution d’architecture évite de faire porter à toutes les pages les contraintes de l’usage initial.'},
 ]},
 'ivoire-chat':{chapters:[
 {title:'La conversation au centre.',body:'Messages, réactions, réponses et médias s’inscrivent dans des conversations en temps réel. Stories, groupes publics géolocalisés et appels complètent les usages.'},
 {title:'Relier les écrans à une source commune.',body:'Le passage des démonstrations au backend réel s’appuie sur des stores et une couche de données partagés. Les écrans ne portent pas chacun leur propre copie des messages. L’infrastructure associe notamment Supabase auto-hébergé et les services de communication.'},
 ]},
 'fne-yeshi':{chapters:[
 {title:'Contrôler avant de transmettre.',body:'La qualité des données est vérifiée avant la certification : lignes incohérentes, montants ou informations fiscales manquantes doivent être signalés au bon endroit. Le responsable retrouve une explication et les actions associées.'},
 {title:'Des ERP différents, une traduction explicite.',body:'Les groupes de TVA, moyens de règlement et établissements de l’ERP sont reliés aux codes attendus par la FNE. Le mapping est configurable. Une correspondance manquante bloque le parcours au lieu de choisir silencieusement un établissement générique.'},
 ]},
 'co-plastic':{chapters:[
 {title:'Le site et les opérations.',body:'Le projet comprend une présence web et un travail sur des modules Odoo. Le suivi du stock, les documents et les rapports comptables rapprochent le logiciel des usages de l’entreprise.'},
 {title:'Un rapport doit répondre à la bonne question.',body:'La valorisation de stock distingue l’état restant et les mouvements cumulés, avec une date et un périmètre explicites. Les exports et les filtres du grand livre ou de la balance doivent conserver le sens des données, pas seulement produire un fichier.'},
 ]},
 'fib-informatique':{chapters:[
 {title:'Partir du catalogue réel du commerçant.',body:'Le catalogue WhatsApp Business est une source de produits, de photos et de prix à reprendre proprement. Le travail d’import permet de corriger, classer et réimporter les références sans tout recréer.'},
 {title:'Donner la main au gérant.',body:'Catalogue, commandes, frais de livraison par commune et paramètres de boutique sont administrables. Le back-office s’adapte aussi au mobile, avec des tableaux transformés en cartes et des actions accessibles sur petit écran.'},
 ]},
 'distinction-tmc':{chapters:[
 {title:'Libérer la présentation, conserver les contenus.',body:'Le site d’origine reposait sur une plateforme aux possibilités de mise en page limitées. La refonte devait conserver les textes du club et leur donner une présentation plus ample.'},
 {title:'Un CMS adapté au club.',body:'Le projet associe le site public à un outil d’édition sur mesure, avec contenus, espace membre et paramètres de messagerie. L’expérience accompagne autant la découverte du club que sa vie éditoriale.'},
 ]},
 'candy-hop':{chapters:[
 {title:'Construire le mouvement.',body:'Le jeu explore le saut variable, la tolérance au bord des plateformes et la mémorisation d’un saut demandé juste avant l’atterrissage. Ces détails donnent au personnage une réponse plus naturelle aux commandes.'},
 {title:'Des niveaux, puis du combat.',body:'Les niveaux sont décrits dans une grille et construits par le moteur Godot. Le prototype a ensuite évolué vers le tir, les armes équipables et les boss. Il s’agit d’un terrain d’expérimentation jouable, pas d’une sortie commerciale annoncée.'},
 ]},
 'badge-pointage':{chapters:[
 {title:'Le badge est aussi un objet.',body:'La préparation des badges comprend les informations à afficher, leur mise en page et les fichiers destinés à l’impression. Une déclinaison générique peut répondre aux besoins d’autres organisations, sans reprendre l’identité ni les données du client.'},
 {title:'Relier le badge au suivi des présences.',body:'La présentation publique décrit les principes du badgeage, des arrivées et des départs. Le système du client reste confidentiel. Une démo indépendante avec des données fictives est prévue pour permettre de découvrir ce parcours.'},
 ]},
};
projectNarratives['moro-app']=projectNarratives.moro;
