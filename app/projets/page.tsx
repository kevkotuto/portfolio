'use client';

import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProjectCard from "@/components/projects/ProjectCard"; // Assumons que ce composant existe et est stylé
import ConfidentialProject from "@/components/projects/ConfidentialProject";
import Link from "next/link";
import { Code, ExternalLink, Star, ListFilter } from "lucide-react";
import * as React from "react";

// TODO: Déplacer cette liste vers une source de données centrale (ex: CMS, fichier JSON)
const tousLesProjets = [
  { 
    slug: "akili-factchecking",
    titre: "Akili Fact-Checking", 
    description: "Application mobile et web de vérification d'informations utilisant l'IA pour analyser et évaluer la fiabilité des actualités, publications et déclarations.",
    image: "/logo/akili.png",
    technologies: ["React Native", "Next.js", "Node.js", "Python", "LangChain", "MongoDB"],
    lienSite: "https://akilicheck.com", 
    lienCode: "#", 
    confidential: false
  },
  { 
    slug: "moro-finance",
    titre: "Moro - Gestion Financière", 
    description: "Application de gestion financière pour les particuliers et entrepreneurs avec fonctionnalités d'analyse et d'optimisation des finances personnelles et professionnelles.",
    image: "/logo/moro.png",
    technologies: ["React Native", "Next.js", "Node.js", "Firebase", "Mobile Money", "Wave"],
    lienSite: "https://moro-apps.net", 
    lienCode: "#", 
    confidential: false
  },
  { 
    slug: "can-optic",
    titre: "Can Optic", 
    description: "Plateforme e-commerce et site vitrine pour Can Optic, permettant la vente de produits optiques et la prise de rendez-vous en ligne avec intégration des paiements locaux.",
    image: "https://t4.ftcdn.net/jpg/00/12/27/35/360_F_12273529_NTwUbkCd9RYEQAk0mXYNo4KxBEGGc0bq.jpg",
    technologies: ["Next.js", "React", "Node.js", "CinetPay", "Mobile Money"],
    lienSite: "#", 
    lienCode: "#", 
    confidential: true
  },
  { 
    slug: "ecommerce-general",
    titre: "E-commerce Général", 
    description: "Plateforme de commerce en ligne complète pour une grande entreprise ivoirienne, avec gestion des produits, paniers, commandes et paiements.",
    image: "/logo/2.png",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    lienSite: "#", 
    lienCode: "#", 
    confidential: false
  },
  { 
    slug: "site-bernabe",
    titre: "Site web Bernabé", 
    description: "Refonte complète du site vitrine de Bernabé Côte d'Ivoire, axée sur l'expérience utilisateur et la présentation des produits.",
    image: "/logo/3.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "API RESTful", "Nginx"],
    lienSite: "https://bernabeafrique.com/Technibat/",
    lienCode: "#",
    confidential: false
  },
  { 
    slug: "mr-bricolage",
    titre: "Site Mr. Bricolage CI", 
    description: "Refonte du site e-commerce de Mr. Bricolage Côte d'Ivoire avec les dernières technologies. Version actuelle développée avec Microsoft Dynamics, nouvelle version prévue pour fin 2025.",
    image: "/logo/4.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Microsoft Dynamics"],
    lienSite: "https://mrbricolage-ci.com",
    lienCode: "#",
    confidential: false
  },
  { 
    slug: "photographie-djibatof",
    titre: "Photographe Studio Djibatof", 
    description: "Travail de photographe professionnel à Youpougon, spécialisé dans les portraits, photos d'identité et retouches photo.",
    image: "https://t4.ftcdn.net/jpg/00/12/27/35/360_F_12273529_NTwUbkCd9RYEQAk0mXYNo4KxBEGGc0bq.jpg",
    technologies: ["Photographie", "Retouche Photo", "Gestion Client"],
    lienSite: "#",
    lienCode: "#",
    confidential: true
  },
  { 
    slug: "nappylocks",
    titre: "Plateforme NappyLocks", 
    description: "Développement d'une plateforme communautaire et e-commerce mobile pour la marque NappyLocks, spécialiste des DreadLocks.",
    image: "/logo/1.png",
    technologies: ["React Native", "Node.js", "Firebase"],
    lienSite: "https://apps.apple.com/fr/app/nappylocks/id1661966757",
    lienCode: "#",
    confidential: false
  },
  { 
    slug: "ia-reconnaissance",
    titre: "IA de reconnaissance d'images", 
    description: "Développement d'un modèle d'IA capable d'analyser et de décrire le contenu d'images, intégré dans une application web simple.",
    image: "/projets/ai.png",
    technologies: ["Python", "TensorFlow", "Flask", "Next.js", "Docker"],
    lienSite: "#",
    lienCode: "#",
    confidential: false
  },
  // Ajoutez d'autres projets ici...
];

// Configuration des animations (similaire à la page d'accueil)
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardHover = {
  scale: 1.03,
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
};

export default function ProjetsPage() {
  const [filtreActif, setFiltreActif] = React.useState<string>('Tous');

  // Extraire toutes les technologies uniques pour les filtres
  const toutesLesTechnologies = React.useMemo(() => {
    const techs = new Set<string>();
    tousLesProjets.forEach(projet => {
      projet.technologies.forEach(tech => techs.add(tech));
    });
    return ['Tous', ...Array.from(techs).sort()]; // Ajouter 'Tous' et trier
  }, []); // Exécuter une seule fois

  // Filtrer les projets basés sur le filtre actif
  const projetsFiltres = React.useMemo(() => {
    if (filtreActif === 'Tous') {
      return tousLesProjets;
    }
    return tousLesProjets.filter(projet => 
      projet.technologies.includes(filtreActif)
    );
  }, [filtreActif]);

  return (
    <div className="container py-16">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 text-sm">
          <Star className="h-4 w-4 mr-2" /> Mes Réalisations
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio de Projets</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez une sélection de projets sur lesquels j'ai travaillé, allant des sites web aux applications IA.
        </p>
      </motion.div>

      {/* Filtres */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
         <span className="flex items-center text-sm text-muted-foreground mr-2">
           <ListFilter className="h-4 w-4 mr-1.5" />
           Filtrer par:
         </span>
        {toutesLesTechnologies.map(tech => (
          <Button
            key={tech}
            variant={filtreActif === tech ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFiltreActif(tech)}
            className={`transition-all duration-200 ${filtreActif === tech ? 'shadow-md' : ''}`}
          >
            {tech}
          </Button>
        ))}
      </motion.div>

      {/* Grille de Projets avec Animation */}
      <motion.div 
        layout // Important pour animer les changements de layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout"> {/* Gère l'animation d'entrée/sortie */} 
          {projetsFiltres.map((projet, index) => (
            <motion.div 
              key={projet.slug || index} 
              layout // Important pour animer la position
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              whileHover={cardHover}
            >
               {/* Utilisation de ProjectCard ou Card basique (code existant) */} 
               {ProjectCard ? (
                 <ProjectCard
                   titre={projet.titre}
                   description={projet.description}
                   image={projet.image}
                   technologies={projet.technologies}
                   lien={`/projets/${projet.slug}`} // Lien vers la page détail projet
                   // Ajoutez lienSite et lienCode si ProjectCard les supporte
                 />
               ) : (
                 <Card className="overflow-hidden h-full flex flex-col">
                   <CardHeader className="p-0 relative">
                     {projet.confidential ? (
                       <ConfidentialProject title={projet.titre} />
                     ) : (
                       <img src={projet.image} alt={projet.titre} className="w-full h-48 object-cover" />
                     )}
                   </CardHeader>
                   <CardContent className="p-6 flex flex-col flex-grow">
                     <h3 className="text-xl font-semibold mb-2">{projet.titre}</h3>
                     <p className="text-muted-foreground text-sm mb-4 flex-grow">{projet.description}</p>
                     <div className="mb-4">
                       <p className="text-xs font-medium text-muted-foreground mb-2">Technologies :</p>
                       <div className="flex flex-wrap gap-2">
                         {projet.technologies.map((tech, idx) => (
                           <Badge key={idx} variant="secondary">{tech}</Badge>
                         ))}
                       </div>
                     </div>
                     <Button asChild variant="outline" size="sm" className="w-full group mt-auto">
                       <Link href={`/projets/${projet.slug}`}>
                         Voir les détails
                         <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                       </Link>
                     </Button>
                   </CardContent>
                 </Card>
               )}
             </motion.div>
           ))}
         </AnimatePresence>
       </motion.div>
 
       {/* Message si aucun projet ne correspond au filtre */} 
       {projetsFiltres.length === 0 && filtreActif !== 'Tous' && (
         <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           className="text-center text-muted-foreground mt-12"
         >
           Aucun projet trouvé avec la technologie "{filtreActif}".
         </motion.div>
       )}
       
     </div>
   );
 } 