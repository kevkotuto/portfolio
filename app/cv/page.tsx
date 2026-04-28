'use client'; // Utiliser client pour les éventuelles animations

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  Mail, Phone, Linkedin, Github, MapPin, User, Briefcase, 
  GraduationCap, Star, Languages, Code, Printer, ArrowLeft, ArrowRight, Download, Loader2
} from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import CVPDFDocument from '@/components/cv/CVPDFDocument';
import DynamicPDFViewer from '@/components/cv/DynamicPDFViewer';

// --- Données du CV (À adapter) ---
// Il serait idéal de centraliser ces données (ex: dans lib/data.ts)
const cvData = {
  nom: "Ghossoub Kevine Boudalha",
  titre: "Développeur Full Stack & Directeur Technologique",
  resume: "Développeur passionné avec 4+ années d'expérience dans la conception, le développement et le déploiement d'applications web et mobiles robustes. Expert en React, Next.js, Node.js, Python, IA et administration système Linux. Compétences avancées en mise en place d'infrastructures serveur (Ubuntu, Nginx, Docker), gestion DNS, calcul d'adresses IP et configuration de proxy. Maîtrise l'intégration des solutions de paiement africaines (CinetPay, Mobile Money) et possède une expérience variée allant du développement à la photographie professionnelle. Actuellement directeur technologique à Ineximius Group tout en continuant à diriger les projets digitaux chez Bernabé Afrique.",
  contact: {
    email: "kevine@generale-ci.com",
    telephone: "+225 05 00 80 85 85",
    linkedin: "https://www.linkedin.com/in/ghossoub-kevine-boudalha-184929263",
    github: "https://github.com/kevkotuto",
    localisation: "Abidjan, Côte d'Ivoire"
  },
  experience: [
    {
      poste: "Directeur Technologique (Temps partiel - Week-ends)",
      entreprise: "Ineximius Group",
      periode: "2024 - Aujourd'hui",
      details: [
        "Direction et supervision de l'ensemble des initiatives technologiques du groupe.",
        "Développement de l'application de fact-checking Akili (iOS, Android, web) utilisant l'IA pour vérifier les informations.",
        "Mise en place d'infrastructures serveur et configuration des systèmes (Ubuntu, Nginx, Docker).",
        "Mise en place de stratégies d'intégration des solutions de paiement africaines (CinetPay, Mobile Money, Wave).",
        "Formation et management des équipes de développement.",
        "Développement du site e-commerce Gedis avec intégration complète des paiements mobiles (CinetPay, Mobile Money) et système de gestion d'inventaire avancé.",
        "Développement du site Can Optic avec fonctionnalités e-commerce et prise de rendez-vous en ligne.",
        "Intégration des solutions de paiement (CinetPay) et mobile money (Moov, MTN, Orange Money, Wave).",
        "Intégration de la Facture Normalisée Électronique (FNE) de la DGI de Côte d'Ivoire dans des ERP (Odoo, Sage)."
      ]
    },
    {
      poste: "Développeur Digital (Temps plein)",
      entreprise: "Bernabé Côte d'Ivoire",
      periode: "2023 - Aujourd'hui",
      details: [
        "Développement front-end et back-end des sites e-commerce Mr. Bricolage et JTB CI (Journée Technique de Bernabé) (Next.js, React, Node.js).",
        "Configuration et administration des serveurs web (Nginx, Docker) et bases de données.",
        "Gestion DNS, configuration des proxys et sécurisation des serveurs de production."
      ]
    },
    {
      poste: "Analyste Service Prix",
      entreprise: "Bernabé Côte d'Ivoire",
      periode: "2022 - 2023",
      details: [
        "Analyse de la stratégie tarifaire et gestion de bases de données produits.",
        "Coordination inter-services (achats, technique, commercial).",
        "Automatisation de tâches d'analyse avec Python."
      ]
    },
    {
      poste: "Community Manager & Développeur Freelance",
      entreprise: "Bakeryshop Originale / Divers",
      periode: "2020 - 2023",
      details: [
        "Gestion des réseaux sociaux, création de contenu (graphisme, vidéo).",
        "Développement de sites web vitrines et petits outils (React, PHP).",
        "Administration de serveurs Linux et mise en place d'infrastructures web.",
        "Installation et configuration de serveurs physiques pour des PME locales."
      ]
    },
    {
      poste: "Photographe",
      entreprise: "Studio Djibatof, Youpougon",
      periode: "2015",
      details: [
        "Réalisation de portraits et photos d'identité.",
        "Retouche photo et impression.",
        "Gestion des rendez-vous clients."
      ]
    }
  ],
  formation: [
    {
      diplome: "Certifications Développement Web",
      institution: "OpenClassrooms",
      periode: "2020 - Présent",
      details: "18+ certifications (React, Node.js, Python, Gestion de projet, UI/UX...)"
    },
    {
      diplome: "BTS Informatique - Développement d'Applications",
      institution: "PIGIER CI, Abidjan", // Préciser l'établissement
      periode: "2018 - 2020",
    },
    {
      diplome: "Baccalauréat Scientifique et Technologique",
      institution: "Collège ANADOR, Abidjan", // Préciser l'établissement
      periode: "2017",
    }
  ],
  competences: {
    langages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL", "PHP (Basique)", "Shell Script"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Flask", "Tailwind CSS", "React Native"],
    bdd: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    infrastructure: ["Ubuntu Server", "Nginx", "Docker", "DNS Configuration", "IP Networking", "Proxy Configuration", "VPN", "Firewall", "CI/CD", "HTTPS/SSL"],
    outils: ["Git", "Linux", "VS Code", "Figma", "AWS", "Digital Ocean", "Photoshop", "Lightroom"],
    paiement: ["CinetPay", "Stripe API", "Mobile Money (MTN, Orange, Moov)", "Wave"],
    autres: ["API RESTful", "GraphQL (Notions)", "SEO", "Méthodes Agile", "UI/UX Design", "Analyse de données", "Photographie", "Gestion de serveurs physiques"],
    ia: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "LangChain", "Entraînement de LLM"]
  },
  langues: [
    { nom: "Français", niveau: "Langue maternelle" },
    { nom: "Anglais", niveau: "Professionnel (B2/C1)" }
  ],
  projetsLien: "/projets" // Lien vers la page projets
};

// --- Composants Stylisés pour le CV ---

const SectionTitle = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <h2 className="text-2xl font-semibold mb-6 flex items-center text-primary border-b pb-2">
    {React.cloneElement(icon as React.ReactElement, { className: "mr-3 h-6 w-6" })}
    {title}
  </h2>
);

const CVSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section 
    className="mb-10 print:mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.section>
);

// --- Page CV --- 

export default function CVPage() {

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Créer le document PDF avec @react-pdf/renderer
      const doc = <CVPDFDocument data={cvData} />;
      
      // Générer le PDF en tant que blob
      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      
      // Créer un lien de téléchargement
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `CV_${cvData.nom.replace(/\s+/g, '_')}.pdf`;
      
      // Déclencher le téléchargement
      document.body.appendChild(link);
      link.click();
      
      // Nettoyer
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      // TODO: Afficher une notification d'erreur à l'utilisateur
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="cv-container bg-background text-foreground">
      {/* Boutons d'action (masqués à l'impression) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 print:hidden">
        <Button 
          onClick={generatePDF} 
          size="icon" 
          title="Générer PDF" 
          disabled={isGeneratingPDF}
          className="bg-primary hover:bg-primary/90"
        >
          {isGeneratingPDF ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Download className="h-5 w-5" />
          )}
        </Button>
        <Button onClick={handlePrint} size="icon" title="Imprimer le CV" variant="outline">
          <Printer className="h-5 w-5" />
        </Button>
        <Button asChild variant="outline" size="icon" title="Retour au portfolio">
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      {/* Contenu principal du CV */} 
      <motion.div 
        className="container mx-auto max-w-4xl py-12 px-4 md:px-8 lg:px-12 print:py-4 print:px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* En-tête CV */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-10 print:mb-6">
          <div className="flex items-center mb-6 md:mb-0">
            <Avatar className="h-24 w-24 mr-6 print:h-20 print:w-20 print:mr-4 border-2 border-primary/30">
              <AvatarImage src="/image/pp.jpg" alt={cvData.nom} />
              <AvatarFallback>{cvData.nom.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold print:text-2xl">{cvData.nom}</h1>
              <h2 className="text-xl text-primary font-medium print:text-lg">{cvData.titre}</h2>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right space-y-1 print:text-xs">
            {/* Bouton Télécharger PDF (visible sur écran, caché à l'impression) */} 
            <div className="flex justify-center md:justify-end mb-3 print:hidden">
              <Button 
                onClick={generatePDF} 
                variant="outline" 
                size="sm" 
                disabled={isGeneratingPDF}
              >
                {isGeneratingPDF ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Génération...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger PDF
                  </>
                )}
              </Button>
            </div>
            {/* Infos de contact */}
            <p className="flex items-center justify-center md:justify-end"><Mail className="mr-2 h-4 w-4" /> {cvData.contact.email}</p>
            <p className="flex items-center justify-center md:justify-end"><Phone className="mr-2 h-4 w-4" /> {cvData.contact.telephone}</p>
            <p className="flex items-center justify-center md:justify-end"><MapPin className="mr-2 h-4 w-4" /> {cvData.contact.localisation}</p>
            <div className="flex items-center justify-center md:justify-end gap-3 pt-1">
               <Link href={cvData.contact.linkedin} target="_blank" className="hover:text-primary"><Linkedin className="h-4 w-4" /></Link>
               <Link href={cvData.contact.github} target="_blank" className="hover:text-primary"><Github className="h-4 w-4" /></Link>
            </div>
          </div>
        </header>

        <Separator className="mb-10 print:hidden" />

        {/* Résumé */}
        <CVSection>
          <SectionTitle icon={<User />} title="Profil" />
          <p className="text-muted-foreground leading-relaxed print:text-sm">{cvData.resume}</p>
        </CVSection>

        {/* Expérience Professionnelle */}
        <CVSection>
          <SectionTitle icon={<Briefcase />} title="Expérience Professionnelle" />
          <div className="space-y-6 print:space-y-4">
            {cvData.experience.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-primary/20 print:pl-4">
                 <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 border-2 border-background print:w-2 print:h-2 print:-left-[5px]"></div>
                 <h3 className="font-semibold text-lg print:text-base">{exp.poste}</h3>
                 <p className="text-primary font-medium text-sm mb-1 print:text-xs">{exp.entreprise} <span className="text-muted-foreground font-normal">| {exp.periode}</span></p>
                 <ul className="list-disc list-outside pl-5 text-muted-foreground space-y-1 text-sm print:text-xs print:pl-4">
                   {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                 </ul>
               </div>
            ))}
           </div>
        </CVSection>

        {/* Formation */} 
        <CVSection>
           <SectionTitle icon={<GraduationCap />} title="Formation" />
           <div className="space-y-4 print:space-y-3">
             {cvData.formation.map((form, index) => (
               <div key={index}>
                 <h3 className="font-semibold text-lg print:text-base">{form.diplome}</h3>
                 <p className="text-sm text-muted-foreground mb-1 print:text-xs">{form.institution} <span className="italic">({form.periode})</span></p>
                 {form.details && <p className="text-xs text-muted-foreground">{form.details}</p>}
               </div>
             ))}
           </div>
        </CVSection>

        {/* Compétences */} 
        <CVSection>
           <SectionTitle icon={<Star />} title="Compétences Techniques" />
           <div className="space-y-4 print:space-y-2">
             {Object.entries(cvData.competences).map(([categorie, competences]) => (
                <div key={categorie} className="flex flex-col sm:flex-row print:flex-row">
                  <h4 className="font-medium w-full sm:w-32 print:w-28 flex-shrink-0 mb-1 sm:mb-0 print:text-sm capitalize">{categorie.replace('bdd', 'BDD').replace('ia', 'IA')}:</h4>
                  <div className="flex flex-wrap gap-1.5 print:gap-1">
                     {competences.map(comp => <Badge key={comp} variant="secondary" className="print:text-xs print:px-1 print:py-0">{comp}</Badge>)}
                   </div>
                 </div>
              ))}
           </div>
         </CVSection>

         {/* Langues & Projets */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:grid-cols-2 print:gap-6">
           <CVSection>
             <SectionTitle icon={<Languages />} title="Langues" />
             <div className="space-y-1 print:space-y-0.5">
               {cvData.langues.map(lang => (
                 <p key={lang.nom} className="text-muted-foreground print:text-sm">
                   <span className="font-medium text-foreground">{lang.nom}:</span> {lang.niveau}
                 </p>
               ))}
             </div>
           </CVSection>
           <CVSection>
             <SectionTitle icon={<Code />} title="Projets" />
             <p className="text-muted-foreground print:text-sm">
                Découvrez une sélection de mes réalisations sur mon portfolio en ligne.
             </p>
             <Button asChild variant="link" className="px-0 group print:hidden">
                <Link href={cvData.projetsLien}>
                   Voir mes projets
                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
             </Button>
           </CVSection>
         </div>

       </motion.div>

       {/* Visualisateur PDF */}
       <DynamicPDFViewer data={cvData} />
 
       {/* Styles spécifiques pour l'impression */} 
       <style jsx global>{`
         @media print {
           body {
             -webkit-print-color-adjust: exact; 
             print-color-adjust: exact;
             background-color: white !important; /* Forcer fond blanc */
             color: black !important; /* Forcer texte noir */
           }
           .cv-container {
             margin: 0;
             padding: 0;
           }
           /* Masquer header/footer/boutons du site */
           header[class*="sticky"], 
           footer[class*="border-t"],
           div[class*="fixed bottom-6"],
           div[class*="CustomCursor"] { /* Masquer curseur perso si présent */ 
             display: none !important;
           }
           /* Ajuster les marges/padding pour impression */
           main {
             padding: 0 !important;
             margin: 0 !important;
           }
           .container {
             max-width: 100% !important;
           }
           /* Assurer que les couleurs des badges sont imprimées */
           .print\:text-xs { font-size: 0.65rem !important; }
           .print\:px-1 { padding-left: 0.25rem !important; padding-right: 0.25rem !important; }
           .print\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
           [class*="bg-"]:not(body) { /* Essayer de forcer les couleurs de fond */ 
             background-color: var(--print-bg-color, inherit) !important;
           }
           [class*="text-"]:not(body) {
             color: var(--print-text-color, inherit) !important;
           }
           /* Définir des couleurs d'impression pour les éléments importants */
           h1, h2, h3, h4, h5, h6 {
              color: black !important; 
           }
           .text-primary {
             color: #3b82f6 !important; /* Ajustez si votre primary est différent */ 
           }
           .text-muted-foreground {
             color: #555 !important;
           }
           .border-primary\/20 { border-color: #bfdbfe !important; }
           .bg-primary { background-color: #3b82f6 !important; }
           .border-background { border-color: white !important; }
           [data-radix-collection-item][class*="bg-secondary"] { /* Badge variant=secondary */ 
             background-color: #f3f4f6 !important; 
             color: #374151 !important;
           }
         }
       `}</style>
     </div>
   );
 } 