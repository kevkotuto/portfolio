'use client';
import Title from "@/components/header/Title";
import InfoPerso from "@/components/body/InfoPerso";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { 
  Briefcase, 
  Code, 
  ExternalLink, 
  GraduationCap, 
  Star, 
  Laptop,
  Brain,
  LayoutDashboard,
  PenTool,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatsSection from "@/components/body/StatsSection";
import ConfidentialProject from "@/components/projects/ConfidentialProject";

const partenaires = [
  { src: "/logo/1.png", alt: "NappyLocks" },
  { src: "/logo/2.png", alt: "GeneraleCi" },
  { src: "/logo/3.png", alt: "Bernabe Ci" },
  { src: "/logo/4.png", alt: "Mr Bricolage Ci" },
  { src: "/logo/5.png", alt: "Moro" },
  { src: "/logo/6.png", alt: "Bakeryshop Original" },
];

const projetsRecents = [
  { 
    titre: "E-commerce Général", 
    description: "Plateforme de commerce en ligne pour une grande entreprise ivoirienne",
    image: "/logo/2.png",
    technologies: ["Next.js", "React", "Node.js", "MongoDB"],
    lien: "/projets#ecommerce",
    confidential: false
  },
  { 
    titre: "Can Optic", 
    description: "Plateforme e-commerce et site vitrine pour Can Optic avec prise de rendez-vous",
    image: "https://t4.ftcdn.net/jpg/00/12/27/35/360_F_12273529_NTwUbkCd9RYEQAk0mXYNo4KxBEGGc0bq.jpg",
    technologies: ["Next.js", "React", "CinetPay", "Mobile Money"],
    lien: "/projets/can-optic",
    confidential: true
  },
  { 
    titre: "Studio Djibatof", 
    description: "Travail de photographe professionnel à Youpougon",
    image: "https://t4.ftcdn.net/jpg/00/12/27/35/360_F_12273529_NTwUbkCd9RYEQAk0mXYNo4KxBEGGc0bq.jpg",
    technologies: ["Photographie", "Retouche Photo", "Gestion Client"],
    lien: "/projets/photographie-djibatof",
    confidential: true
  },
];

// Définir les données d'expérience et de freelance
const experiencePro = [
  {
    poste: "Développeur Digital",
    entreprise: "Bernabé Côte d'Ivoire",
    periode: "2023 - aujourd'hui",
    details: [
      "Développement des sites web pour Mr. Bricolage et Bernabé CI.",
      "Mise en œuvre de solutions digitales pour améliorer l'expérience client.",
      "Implémentation de systèmes de gestion de contenu personnalisés."
    ]
  },
  {
    poste: "Analyste Service Prix",
    entreprise: "Bernabé Côte d'Ivoire",
    periode: "1 an",
    details: [
      "Analyse des prix et gestion de la base de données produits.",
      "Coordination avec les équipes d'approvisionnement et techniques."
    ]
  }
];

const experienceFreelance = [
  {
    poste: "Community Manager & Dev",
    entreprise: "Bakeryshop Originale",
    periode: "3 ans",
    details: [
      "Création de contenu graphique et gestion des réseaux sociaux.",
      "Administration des systèmes pour assurer la continuité des services."
    ]
  },
  {
    poste: "Projets Robotique",
    entreprise: "Projets indépendants",
    periode: "2020 - aujourd'hui",
    details: [
      "Conception et développement de prototypes robotiques avec Arduino.",
      "Création de systèmes domotiques personnalisés pour clients privés.",
      "Ateliers d'initiation à la robotique pour jeunes apprenants."
    ]
  }
];

export default function Home() {
  // Configuration des animations
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
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Hero section avec animation */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden gradient-section bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-background pb-24 pt-32 rounded-b-3xl w-full">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Title />
          </div>
        </div>
      </motion.section>

      {/* Partenaires - animation */}
      <section className="container py-12">
        <motion.div {...fadeIn} viewport={{ once: true }}>
          <Card className="overflow-hidden border-none gradient-card bg-gradient-to-r from-background to-primary/5 dark:from-background dark:to-primary/10 shadow-lg">
            <CardHeader className="pb-0">
              <h2 className="text-xl font-semibold text-center text-muted-foreground">Ils m'ont fait confiance</h2>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 py-8"
              >
                {partenaires.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.1, filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
                    className="transition-all duration-300 w-20 h-20 md:w-28 md:h-28 opacity-80 hover:opacity-100"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Info personnelles - animation */}
      <motion.section {...fadeIn} viewport={{ once: true }} className="container py-8">
        <InfoPerso />
      </motion.section>

      {/* Section Statistiques Clés */}
      <StatsSection />

      {/* Projets récents - animation */}
      <section className="container py-16">
        <motion.div {...fadeIn} viewport={{ once: true }} className="flex mb-8 justify-center">
          <Separator className="w-full" />
          <Badge variant="outline" className="absolute bg-background px-6 text-sm rotate-1">
            <Code className="h-4 w-4 mr-2" /> Projets récents
          </Badge>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {projetsRecents.map((projet, index) => (
            <motion.div key={index} variants={fadeIn} whileHover={cardHover}>
              {projet.confidential ? (
                <Link href={projet.lien}>
                  <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-lg border-primary/10 hover:border-primary/30">
                    <div className="aspect-video overflow-hidden relative">
                      <ConfidentialProject title={projet.titre} />
                      <div className="absolute bottom-3 right-3 z-20">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          <ExternalLink className="h-3 w-3 mr-1" /> 
                          Voir détails
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {projet.titre}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {projet.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projet.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <ProjectCard
                  titre={projet.titre}
                  description={projet.description}
                  image={projet.image}
                  technologies={projet.technologies}
                  lien={projet.lien}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeIn} viewport={{ once: true }} className="text-center mt-8">
          <Button asChild variant="outline" className="group">
            <Link href="/projets">
              Voir tous mes projets
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Compétences et expérience */}
      <section className="container py-16">
        <motion.div {...fadeIn} viewport={{ once: true }} >
          <div className="rounded-3xl border bg-gradient-to-br from-background to-primary/5 dark:from-background dark:to-primary/10 p-8 md:p-12 shadow-lg">
            <Tabs defaultValue="experience">
              <motion.div {...fadeIn} viewport={{ once: true }} className="flex justify-center mb-8">
                <TabsList className="bg-background/70 backdrop-blur">
                  <TabsTrigger value="experience" className="gap-2">
                    <Briefcase className="h-4 w-4" /> Expérience
                  </TabsTrigger>
                  <TabsTrigger value="formation" className="gap-2">
                    <GraduationCap className="h-4 w-4" /> Formation
                  </TabsTrigger>
                  <TabsTrigger value="competences" className="gap-2">
                    <Star className="h-4 w-4" /> Compétences
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              {/* Expérience professionnelle - Refonte chronologique */}
              <TabsContent value="experience" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Colonne Expérience Pro */}
                  <div className="space-y-6">
                    <motion.h3 {...fadeIn} viewport={{ once: true }} className="text-xl font-semibold text-center md:text-left">Expérience professionnelle</motion.h3>
                    <div className="relative border-l-2 border-primary/30 pl-6 py-4 space-y-8">
                      {experiencePro.map((exp, index) => (
                         <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative"
                        >
                          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[33px] top-1.5 shadow-md border-4 border-background"></div>
                           <motion.div
                            whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                            className="bg-background/50 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-primary/10 transition-all duration-300 hover:border-primary/20"
                          >
                            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2 gap-2">
                              <span className="text-lg font-medium">{exp.poste}</span>
                              <Badge variant="outline" className="bg-background w-fit">{exp.periode}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-2 flex items-center">
                              <Briefcase className="w-4 h-4 mr-2 inline-block flex-shrink-0" />
                              {exp.entreprise}
                            </p>
                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                              {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Colonne Projets Freelance */}
                   <div className="space-y-6">
                    <motion.h3 {...fadeIn} viewport={{ once: true }} className="text-xl font-semibold text-center md:text-left">Projets freelance</motion.h3>
                    <div className="relative border-l-2 border-primary/30 pl-6 py-4 space-y-8">
                       {experienceFreelance.map((exp, index) => (
                         <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative"
                        >
                           <div className="absolute w-4 h-4 bg-primary rounded-full -left-[33px] top-1.5 shadow-md border-4 border-background"></div>
                           <motion.div
                            whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                            className="bg-background/50 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-primary/10 transition-all duration-300 hover:border-primary/20"
                          >
                            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2 gap-2">
                              <span className="text-lg font-medium">{exp.poste}</span>
                              <Badge variant="outline" className="bg-background w-fit">{exp.periode}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-2 flex items-center">
                              <Briefcase className="w-4 h-4 mr-2 inline-block flex-shrink-0" />
                              {exp.entreprise}
                            </p>
                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                              {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                           </motion.div>
                         </motion.div>
                       ))}
                    </div>
                  </div>
                </div>
                
                {/* Bouton Voir CV complet */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-center mt-10"
                >
                  <Button asChild variant="outline" className="group">
                    <Link href="/cv">
                      Voir CV complet
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </TabsContent>

              {/* Formation - animation */}
              <TabsContent value="formation" className="mt-0">
                 <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                   <motion.div variants={fadeIn} whileHover={cardHover}>
                    <Card className="bg-background/70 backdrop-blur transition-all duration-300 border border-primary/10 overflow-hidden h-full">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/80"></div>
                       <CardHeader className="flex justify-center items-center pb-2">
                         <img
                           src="/logo/openclassroom.png"
                           alt="openclassroom"
                           className="w-16 h-16 object-contain"
                         />
                       </CardHeader>
                       <CardContent className="text-center pb-6">
                         <h3 className="font-bold text-lg mb-1">18 certifications</h3>
                         <p className="text-sm text-muted-foreground mb-3">OpenClassroom</p>
                         <Badge variant="outline" className="bg-background/70">Développement Web</Badge>
                       </CardContent>
                     </Card>
                   </motion.div>

                   <motion.div variants={fadeIn} whileHover={cardHover}>
                    <Card className="bg-background/70 backdrop-blur transition-all duration-300 border border-primary/10 overflow-hidden h-full">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/80"></div>
                       <CardContent className="flex flex-col items-center justify-center h-full pt-6">
                         <Avatar className="h-16 w-16 mb-4 border-2 border-primary/20">
                           <AvatarFallback>BTS</AvatarFallback>
                           <AvatarImage src="/education/bts.png" alt="BTS" />
                         </Avatar>
                         <div className="text-center">
                           <h3 className="font-bold text-lg mb-1">BTS Informatique</h3>
                           <p className="text-sm text-muted-foreground mb-3">Développement d'applications</p>
                           <Badge variant="outline" className="bg-background/70">2018-2020</Badge>
                         </div>
                       </CardContent>
                     </Card>
                   </motion.div>

                   <motion.div variants={fadeIn} whileHover={cardHover}>
                    <Card className="bg-background/70 backdrop-blur transition-all duration-300 border border-primary/10 overflow-hidden h-full">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/80"></div>
                       <CardContent className="flex flex-col items-center justify-center h-full pt-6">
                         <Avatar className="h-16 w-16 mb-4 border-2 border-primary/20">
                           <AvatarFallback>BAC</AvatarFallback>
                           <AvatarImage src="/education/bac.png" alt="BAC" />
                         </Avatar>
                         <div className="text-center">
                           <h3 className="font-bold text-lg mb-1">Baccalauréat</h3>
                           <p className="text-sm text-muted-foreground mb-3">Sciences et Technologies</p>
                           <Badge variant="outline" className="bg-background/70">2017</Badge>
                         </div>
                       </CardContent>
                     </Card>
                   </motion.div>
                 </motion.div>
              </TabsContent>

              {/* Compétences - animation */}
              <TabsContent value="competences" className="mt-0">
                 <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-3"
                  >
                  {/* Compétences techniques */}
                  <motion.div variants={fadeIn} className="space-y-6 col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Langages & Frameworks</h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">JavaScript/TypeScript</span>
                          <span className="text-xs text-muted-foreground">Expert</span>
                        </div>
                        <div className="w-full bg-primary/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                             initial={{ width: 0 }}
                             whileInView={{ width: '95%' }}
                             viewport={{ once: true }}
                             transition={{ duration: 1, ease: "easeOut" }}
                             className="bg-primary h-2 rounded-full"
                           ></motion.div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Python</span>
                          <span className="text-xs text-muted-foreground">Avancé</span>
                        </div>
                        <div className="w-full bg-primary/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                            className="bg-primary h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">React/Next.js</span>
                          <span className="text-xs text-muted-foreground">Expert</span>
                        </div>
                        <div className="w-full bg-primary/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '90%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="bg-primary h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Node.js</span>
                          <span className="text-xs text-muted-foreground">Avancé</span>
                        </div>
                        <div className="w-full bg-primary/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '80%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="bg-primary h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Compétences développement */}
                  <motion.div variants={fadeIn} className="space-y-6 col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Développement</h3>
                    
                    <div className="space-y-4">
                      <motion.div
                        whileHover={cardHover}
                        className="bg-background/70 backdrop-blur p-4 rounded-xl shadow-sm border border-primary/10 flex items-center gap-3 transition-all duration-300 hover:border-primary/20"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Code className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Développement Web</h4>
                          <p className="text-xs text-muted-foreground">Fullstack (React, Next.js, Node.js)</p>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={cardHover}
                        className="bg-background/70 backdrop-blur p-4 rounded-xl shadow-sm border border-primary/10 flex items-center gap-3 transition-all duration-300 hover:border-primary/20"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Laptop className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Développement Mobile</h4>
                          <p className="text-xs text-muted-foreground">React Native, Flutter</p>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={cardHover}
                        className="bg-background/70 backdrop-blur p-4 rounded-xl shadow-sm border border-primary/10 flex items-center gap-3 transition-all duration-300 hover:border-primary/20"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Intelligence Artificielle</h4>
                          <p className="text-xs text-muted-foreground">TensorFlow, PyTorch, scikit-learn</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Compétences spécifiques */}
                  <motion.div variants={fadeIn} className="space-y-6 col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Spécialisations</h3>
                    
                    <div className="space-y-4">
                      <motion.div
                        whileHover={cardHover}
                        className="bg-background/70 backdrop-blur p-4 rounded-xl shadow-sm border border-primary/10 flex items-center gap-3 transition-all duration-300 hover:border-primary/20"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <PenTool className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Design & Multimédia</h4>
                          <p className="text-xs text-muted-foreground">Photoshop, Illustrator, Premiere Pro</p>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={cardHover}
                        className="bg-background/70 backdrop-blur p-4 rounded-xl shadow-sm border border-primary/10 flex items-center gap-3 transition-all duration-300 hover:border-primary/20"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <LayoutDashboard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Gestion de Projet</h4>
                          <p className="text-xs text-muted-foreground">Méthodologies Agile, Scrum</p>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={cardHover}
                        className="bg-background/70 backdrop-blur p-4 rounded-xl shadow-sm border border-primary/10 flex items-center gap-3 transition-all duration-300 hover:border-primary/20"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M18 8.5V15.5M6 8.5V15.5M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Robotique & IoT</h4>
                          <p className="text-xs text-muted-foreground">Arduino, Raspberry Pi, ESP32</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </section>

      {/* Appel à l'action - animation */}
      <section id="contact" className="container py-16">
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
          className="rounded-3xl glass-card gradient-animate p-8 md:p-12 text-center overflow-hidden"
        >
          <h2 className="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Je suis disponible pour discuter de votre projet et vous aider à le réaliser.
            N'hésitez pas à me contacter pour en savoir plus sur mes services.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" asChild className="neon-glow">
              <Link href="mailto:kevine@generale-ci.com">
                Discutons de votre projet
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}