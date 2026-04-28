'use client'; // Peut-être pas nécessaire si pas d'interaction client complexe

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Zap } from "lucide-react";
import ConfidentialProject from "@/components/projects/ConfidentialProject";
import * as React from "react";

// TODO: Récupérer dynamiquement les données du projet basé sur le slug
// Exemple de structure de données pour un projet
interface ProjectData {
  slug: string;
  titre: string; 
  description: string; // Description courte (pour la liste)
  descriptionLongue: string; // Description détaillée pour cette page
  image: string; // Image principale
  imagesSecondaires?: string[]; // Autres images/screenshots
  technologies: string[];
  lienSite?: string; 
  lienCode?: string; 
  defis?: string[]; // Défis techniques rencontrés
  solutions?: string[]; // Solutions apportées
  liens?: { nom: string; url: string; description: string }[]; // Nouvelle structure pour les liens
  confidential?: boolean; // Indique si le projet est confidentiel
}

// Simuler la récupération des données pour un slug donné
// Dans une vraie app, vous fetcheriez ces données depuis votre CMS ou fichier de données
const getProjectData = (slug: string): ProjectData | null => {
  // TODO: Remplacer par la vraie logique de fetch
  const projets = [
     { 
      slug: "akili-factchecking",
      titre: "Akili Fact-Checking", 
      description: "Application mobile et web de vérification d'informations utilisant l'IA.",
      descriptionLongue: "Akili est une application innovante de fact-checking qui utilise l'intelligence artificielle pour analyser et évaluer la fiabilité des actualités, publications et déclarations. Disponible sur iOS, Android et Web, elle permet aux utilisateurs de vérifier rapidement la véracité des informations qu'ils rencontrent en ligne grâce à des modèles de langage entraînés spécifiquement pour ce contexte africain.",
      image: "/projets/akili.png",
      imagesSecondaires: ["/projets/akili/screenshot1.png", "/projets/akili/screenshot2.png"],
      technologies: ["React Native", "Next.js", "Node.js", "Express", "Python", "LangChain", "MongoDB", "TensorFlow"],
      lienSite: "https://akilicheck.com", 
      lienCode: "#", 
      confidential: false,
      defis: [
        "Développement d'un système d'IA capable d'analyser le contenu en contexte africain.",
        "Architecture multi-plateforme cohérente (iOS, Android, Web).",
        "Gestion de grandes quantités de données pour l'entraînement des modèles."
      ],
      solutions: [
        "Utilisation de LangChain pour l'orchestration des modèles de langage et l'enrichissement contextuel.",
        "Adoption d'une architecture partagée avec React Native pour les applications mobiles et Next.js pour le web.",
        "Mise en place d'une infrastructure de traitement de données distribuée et optimisée."
      ],
      liens: [
        { 
          nom: "Application iOS", 
          url: "https://apps.apple.com/us/app/akili/id6738965572",
          description: "Télécharger sur l'App Store"
        },
        { 
          nom: "Application Android", 
          url: "https://play.google.com/store/apps/details?id=com.litekev.akili&hl=fr",
          description: "Télécharger sur Google Play"
        }
      ]
    },
    { 
      slug: "moro-finance",
      titre: "Moro - Gestion Financière", 
      description: "Application de gestion financière pour les particuliers et entrepreneurs.",
      descriptionLongue: "Moro est une solution inclusive de gestion des opérations courantes destinée aux entrepreneurs, petits paysans et acteurs du secteur informel. L'application permet d'optimiser la gestion des projets et assiste dans la soumission de demandes de financement. Moro offre aussi une analyse des flux financiers et des résultats d'exploitation, tout en permettant une mise en relation avec des investisseurs potentiels.",
      image: "/projets/moro.png",
      imagesSecondaires: ["/projets/moro/screenshot1.png", "/projets/moro/screenshot2.png"],
      technologies: ["React Native", "Next.js", "Node.js", "Firebase", "Mobile Money", "Wave", "Intelligence Artificielle"],
      lienSite: "https://moro-apps.net",
      lienCode: "#",
      confidential: false,
      defis: [
        "Création d'un système de gestion financière adapté au contexte africain et au secteur informel.",
        "Développement d'une interface intuitive pour des utilisateurs avec différents niveaux de compétence numérique.",
        "Intégration de multiples systèmes de paiement locaux avec une expérience utilisateur cohérente."
      ],
      solutions: [
        "Conception d'une interface utilisateur simplifiée et accessible même aux utilisateurs moins technophiles.",
        "Développement d'un assistant IA pour aider les utilisateurs à monter leurs dossiers de financement.",
        "Architecture modulaire permettant l'ajout de nouvelles fonctionnalités comme Moro Business (en cours)."
      ],
      liens: [
        { 
          nom: "Application iOS", 
          url: "https://apps.apple.com/fr/app/moro/id6569222115",
          description: "Télécharger sur l'App Store"
        },
        { 
          nom: "Application Android", 
          url: "https://play.google.com/store/apps/details?id=com.litekev.moro&pli=1",
          description: "Télécharger sur Google Play"
        }
      ]
    },
    { 
      slug: "can-optic",
      titre: "Can Optic", 
      description: "Plateforme e-commerce et site vitrine pour Can Optic avec intégration des paiements locaux.",
      descriptionLongue: "Développement complet de la présence en ligne pour Can Optic, comprenant un site vitrine moderne et une plateforme e-commerce. Le projet intègre un système de prise de rendez-vous en ligne, un catalogue de produits optiques, et plusieurs solutions de paiement adaptées au marché ivoirien, incluant CinetPay et diverses options de Mobile Money.",
      image: "https://t4.ftcdn.net/jpg/00/12/27/35/360_F_12273529_NTwUbkCd9RYEQAk0mXYNo4KxBEGGc0bq.jpg",
      imagesSecondaires: ["/projets/confidentiel.png", "/projets/confidentiel.png"],
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "CinetPay", "Mobile Money (MTN, Orange, Moov)", "Wave"],
      lienSite: "#",
      lienCode: "#",
      confidential: true,
      defis: [
        "Intégration harmonieuse des différentes solutions de paiement locales.",
        "Création d'un système de prise de rendez-vous avec gestion des disponibilités.",
        "Optimisation de l'expérience utilisateur sur mobile (principal mode d'accès en Côte d'Ivoire)."
      ],
      solutions: [
        "Développement d'une API unifiée pour gérer les différents fournisseurs de paiement.",
        "Implémentation d'un calendrier interactif avec synchronisation en temps réel.",
        "Design mobile-first et optimisation des performances pour connexions à faible bande passante."
      ]
    },
    { 
      slug: "ecommerce-general",
      titre: "E-commerce Général", 
      description: "Plateforme e-commerce complète.",
      descriptionLongue: "Développement d'une plateforme e-commerce B2B/B2C robuste pour Générale de Commerce CI. Inclut catalogue produits, gestion des utilisateurs avancée (multi-rôles), processus de commande complexe, intégration de paiement sécurisé, et un back-office administrateur complet.",
      image: "/logo/2.png",
      imagesSecondaires: ["/projets/ecommerce/screenshot1.png", "/projets/ecommerce/screenshot2.png"],
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "Stripe API", "Tailwind CSS", "Shadcn/ui"],
      lienSite: "#", 
      lienCode: "#", 
      defis: ["Gestion complexe des rôles et permissions utilisateurs.", "Optimisation des performances pour un grand catalogue produits.", "Intégration sécurisée des paiements."],
      solutions: ["Mise en place d'un système RBAC (Role-Based Access Control).", "Utilisation de l'indexation MongoDB et de la pagination côté serveur.", "Implémentation de Stripe Elements pour la tokenisation des cartes."]
    },
    { 
      slug: "site-bernabe",
      titre: "Site web Bernabé", 
      description: "Refonte du site vitrine de Bernabé Côte d'Ivoire.",
      descriptionLongue: "Modernisation complète du site web institutionnel de Bernabé Côte d'Ivoire. L'accent a été mis sur un design épuré, une navigation intuitive, et la mise en valeur des différentes gammes de produits et services. Le site a été développé avec une architecture permettant aux équipes marketing de gérer facilement le contenu. Note importante : le site actuellement visible est une version temporaire, un nouveau site plus complet et avec des fonctionnalités avancées est en cours de développement.",
      image: "/logo/3.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "API RESTful", "Nginx"],
      lienSite: "https://bernabeafrique.com/Technibat/",
      confidential: false,
      defis: [
        "Conception d'une interface adaptée à la diversité des gammes de produits.",  
        "Optimisation du SEO pour les moteurs de recherche.",
        "Mise en place d'une infrastructure serveur robuste et sécurisée.",
        "Développement en parallèle du site final avec des fonctionnalités avancées."
      ],
      solutions: [
        "Développement d'une interface utilisateur claire et intuitive.",
        "Utilisation des métadonnées Next.js et bonnes pratiques SEO.",
        "Configuration serveur avec Nginx, Docker et mise en place de HTTPS.",
        "Architecture progressive permettant une transition fluide vers la version finale."
      ]
    },
    { 
      slug: "mr-bricolage",
      titre: "Site Mr. Bricolage CI", 
      description: "Refonte du site e-commerce de Mr. Bricolage Côte d'Ivoire.",
      descriptionLongue: "Refonte complète du site e-commerce de Mr. Bricolage Côte d'Ivoire. Le site actuellement visible a été développé avec Microsoft Dynamics et sert uniquement de version temporaire pendant que nous développons la nouvelle plateforme. Cette nouvelle version, prévue pour fin 2025, apportera une expérience utilisateur considérablement améliorée, un design moderne et responsive, et utilisera les technologies front-end les plus récentes pour offrir une expérience d'achat optimale aux clients.",
      image: "/logo/4.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Microsoft Dynamics", "Node.js", "API RESTful"],
      lienSite: "https://mrbricolage-ci.com",
      confidential: false,
      defis: [
        "Migration des données depuis Microsoft Dynamics vers une architecture moderne.",
        "Conception d'une expérience utilisateur performante et adaptée au marché local.",
        "Intégration des solutions de paiement locales et internationales.",
        "Maintenance du site actuel pendant le développement de la nouvelle version."
      ],
      solutions: [
        "Création d'APIs de transition pour faciliter la migration progressive.",
        "Développement d'une interface intuitive basée sur des études utilisateurs locales.",
        "Architecture moderne avec Next.js et Tailwind pour des performances optimales.",
        "Déploiement par étapes pour assurer une transition en douceur vers la nouvelle plateforme."
      ]
    },
    { 
      slug: "photographie-djibatof",
      titre: "Photographe Studio Djibatof", 
      description: "Travail de photographe professionnel à Youpougon.",
      descriptionLongue: "Expérience professionnelle en tant que photographe au Studio Djibatof à Youpougon (Abidjan) en 2015. Spécialisé dans les portraits, photos d'identité, photos de famille et retouches photo. Cette expérience m'a permis de développer mon sens de l'esthétique visuelle, la gestion de la relation client et la maîtrise des techniques de retouche photographique.",
      image: "/projets/confidentiel.png",
      imagesSecondaires: ["/projets/confidentiel.png", "/projets/confidentiel.png"],
      technologies: ["Photographie", "Retouche Photo", "Gestion Client", "Adobe Photoshop", "Lightroom"],
      confidential: true,
      defis: [
        "Adaptation rapide aux demandes spécifiques des clients dans un environnement à forte affluence.",
        "Équilibre entre qualité artistique et contraintes de temps.",
        "Gestion de l'équipement photographique et maintenance du studio."
      ],
      solutions: [
        "Développement d'un processus efficace de prise de photo et de traitement des demandes.",
        "Création de modèles de retouche pour améliorer la productivité tout en maintenant la qualité.",
        "Organisation méthodique des rendez-vous et du flux de travail quotidien."
      ]
    },
    { 
      slug: "nappylocks",
      titre: "Plateforme NappyLocks", 
      description: "Application mobile e-commerce pour la marque NappyLocks, spécialiste des DreadLocks.",
      descriptionLongue: "Développement d'une application mobile e-commerce pour NappyLocks, spécialiste des DreadLocks. L'application permet aux clients d'acheter des produits capillaires de qualité, de bénéficier de ventes flash et d'offres exclusives, et de suivre leurs commandes avec expédition partout dans le monde.",
      image: "/logo/1.png",
      technologies: ["React Native", "Node.js", "Firebase", "Stripe", "Push Notifications"],
      lienSite: "https://apps.apple.com/fr/app/nappylocks/id1661966757",
      defis: [
        "Création d'une expérience d'achat mobile fluide et engageante.",
        "Mise en place d'un système de notification pour les ventes flash et offres spéciales.",
        "Optimisation des performances sur une variété d'appareils mobiles."
      ],
      solutions: [
        "Interface utilisateur épurée conçue spécifiquement pour l'achat mobile.",
        "Utilisation de Firebase pour les notifications push et le stockage en temps réel.",
        "Mise en place de tests sur différents appareils pour garantir la compatibilité."
      ]
    },
     // ... ajouter les données détaillées pour les autres projets
  ];
  return projets.find(p => p.slug === slug) || null;
};

// Configuration des animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

interface ProjectPageParams {
  params: {
    slug: string;
  };
}

export default function ProjetDetailPage({ params }: ProjectPageParams) {
  const { slug } = params;
  const projet = getProjectData(slug);

  if (!projet) {
    // Gérer le cas où le projet n'est pas trouvé (ex: afficher une 404)
    // Pour l'instant, on retourne un message simple
    return (
      <div className="container py-16 text-center">
         <p className="text-muted-foreground">Projet non trouvé.</p>
         <Button asChild variant="link" className="mt-4">
           <Link href="/projets"><ArrowLeft className="mr-2 h-4 w-4" /> Retour aux projets</Link>
         </Button>
      </div>
    );
  }

  return (
    <div className="container py-16">
      {/* Bouton Retour */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
        <Button asChild variant="outline" size="sm" className="mb-8 group">
          <Link href="/projets">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Tous les projets
          </Link>
        </Button>
      </motion.div>

      {/* Titre et Description courte */}
      <motion.div 
        variants={fadeIn} initial="initial" animate="animate" 
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{projet.titre}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {projet.description} {/* Description courte */} 
        </p>
        <div className="flex justify-center flex-wrap gap-2 mt-6">
          {projet.technologies.map((tech, idx) => (
            <Badge key={idx} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </motion.div>

      {/* Image Principale */}
      <motion.div variants={fadeIn} initial="initial" animate="animate" transition={{ delay: 0.1 }} className="mb-12 rounded-lg overflow-hidden shadow-lg">
        {projet.confidential ? (
          <ConfidentialProject title={projet.titre} className="h-[40vh] md:h-[50vh] w-full" />
        ) : (
          <img 
            src={projet.image} 
            alt={`Image principale pour ${projet.titre}`} 
            className="w-full h-auto object-cover aspect-video"
          />
        )}
      </motion.div>

      {/* Contenu Détaillé et Liens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Colonne Gauche: Description Longue, Défis, Solutions */}
        <motion.div variants={fadeIn} initial="initial" animate="animate" transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-primary pl-3">À propos du projet</h2>
            <p className="text-muted-foreground leading-relaxed">
              {projet.descriptionLongue}
            </p>
          </div>

          {projet.defis && projet.defis.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Défis rencontrés</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {projet.defis.map((defi, idx) => <li key={idx}>{defi}</li>)}
              </ul>
            </div>
          )}

          {projet.solutions && projet.solutions.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Solutions apportées</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {projet.solutions.map((solution, idx) => <li key={idx}>{solution}</li>)}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Colonne Droite: Liens et Images Secondaires */}
        <motion.div variants={fadeIn} initial="initial" animate="animate" transition={{ delay: 0.3 }} className="lg:col-span-1 space-y-8">
          {/* Liens */}
          {(projet.lienSite || projet.lienCode || projet.liens) && (
            <div className="space-y-3">
               <h3 className="text-lg font-semibold mb-3">Liens utiles</h3>
              {projet.lienSite && projet.lienSite !== "#" && (
                <Button asChild variant="default" className="w-full group">
                  <Link href={projet.lienSite} target="_blank" rel="noopener noreferrer">
                     <ExternalLink className="mr-2 h-4 w-4" /> Voir le site live
                  </Link>
                </Button>
              )}
              {projet.lienCode && projet.lienCode !== "#" && (
                <Button asChild variant="outline" className="w-full group">
                  <Link href={projet.lienCode} target="_blank" rel="noopener noreferrer">
                     <Github className="mr-2 h-4 w-4" /> Voir le code source
                  </Link>
                </Button>
              )}
              {projet.liens && projet.liens.length > 0 && (
                <div className="pt-3 space-y-3">
                  {projet.liens.map((lien, idx) => (
                    <Button key={idx} asChild variant="outline" className="w-full group">
                      <Link href={lien.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> {lien.nom}
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Images Secondaires */} 
          {projet.imagesSecondaires && projet.imagesSecondaires.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-3">Galerie</h3>
              {projet.imagesSecondaires.map((imgSrc, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.03 }} 
                  className="rounded-md overflow-hidden shadow-md border border-border/50"
                >
                  {projet.confidential ? (
                    <ConfidentialProject className="h-[150px]" comingSoon={false} />
                  ) : (
                    <img 
                      src={imgSrc} 
                      alt={`Screenshot ${idx + 1} pour ${projet.titre}`} 
                      className="w-full h-auto object-cover aspect-video"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

    </div>
  );
}

// Optionnel: Générer les pages statiquement si les données des projets changent peu
// export async function generateStaticParams() {
//   // Récupérer tous les slugs de projets
//   // const projets = await fetch('...').then((res) => res.json())
//   const tousLesSlugs = ["ecommerce-general", "site-bernabe"]; // Exemple
 
//   return tousLesSlugs.map((slug) => ({
//     slug: slug,
//   }))
// } 