"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import PortraitIntro from "./PortraitIntro";
import ProductJourney from "./ProductJourney";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const selection = [
  {slug:"akili", image:"/atelier/akili-store-actuel.png", kind:"promo", name:"Akili", type:"Intelligence artificielle", line:"Une IA qui parle à son monde.", mark:"a.", color:"#f0f0eb", detail:"Applications, conversation et vérification de l’information."},
  {slug:"generale-ci", image:"/atelier/generale-ci.png", kind:"identity", name:"Générale CI", type:"Commerce & livraison", line:"Du panier à la porte.", mark:"G/", color:"#ffe477", detail:"Un écosystème de commerce, du web aux applications mobiles."},
  {slug:"gescom", image:"/atelier/gescom-transparent.png", kind:"identity", name:"GESCOM", type:"Logiciel métier", line:"Le quotidien du commerce, simplifié.", mark:"g_", color:"#eeeee8", detail:"Gestion commerciale de bureau, pensée pour les commerces ivoiriens."},
  {slug:"genmail", image:"/atelier/genmail.jpg", kind:"desktop", name:"GenMail", type:"Application macOS & Windows", line:"Toutes vos conversations. Un seul endroit.", mark:"↗", color:"#f1f2f3", detail:"Une messagerie multi-comptes, connectée à la suite GESCOM."},
  {slug:"bernabe-bricolage", image:"/atelier/mr-bricolage.png", kind:"identity", name:"Mr. Bricolage", type:"E-commerce & intégrations", line:"Le magasin se prolonge en ligne.", mark:"mr.", color:"#fafaf6", detail:"Une expérience marchande connectée aux outils du groupe Bernabé."},
  {slug:"upjunoo", image:"/atelier/upjunoo-accueil-actuel.png", kind:"phone", name:"Upjunoo", type:"Plateforme & mobilité", line:"Des services qui se rencontrent.", mark:"up", color:"#eceeed", detail:"Un ensemble de produits web et mobiles pour les services et la mobilité."},
  {slug:"tamamedia", image:"/atelier/tamamedia.svg", kind:"identity", name:"Tama Media", type:"Média & édition", line:"Une autre perspective sur l’Afrique.", mark:"T", color:"#ffe477", detail:"Une plateforme éditoriale pour l’actualité et les contenus multimédias."},
  {slug:"yapasgachis", image:"/atelier/yapasgachis.png", kind:"identity", name:"Yapasgachis", type:"Marketplace anti-gaspillage", line:"Moins de gaspillage. Plus de possibilités.", mark:"y!", color:"#eef2ec", detail:"Une marketplace qui donne une nouvelle chance aux invendus alimentaires."},
];

export default function Atelier() {
  return <div className="atelier">
    <PortraitIntro/>
    <ProductJourney/>
    <section id="realisations" className="atelier-work">
      <div className="atelier-section-label"><span>01 / DANS L’ATELIER</span><span>UNE SÉLECTION DE RÉALISATIONS</span></div>
      <div className="atelier-work-heading"><h2>Des idées.<br/><em>Devenues réelles.</em></h2><p>Des métiers différents, une même exigence : comprendre le besoin, construire le produit et l’accompagner sur le terrain.</p></div>
      <div className="atelier-projects">{selection.map((project,i)=><Project key={project.slug} project={project} index={i}/>)}</div>
      <Link className="atelier-all" href="/projets"><span>Et ce n’est pas tout.</span><span>Explorer tous les projets <ArrowUpRight/></span></Link>
    </section>
    <section className="atelier-about" id="parcours"><div className="atelier-section-label"><span>02 / DERRIÈRE LES PRODUITS</span><span>LE PARCOURS</span></div><div className="atelier-about-grid"><h2>Curieux de nature.<br/><em>Constructeur<br/>par conviction.</em></h2><div><p>Basé à Abidjan, je développe des applications web, mobiles et de bureau. Commerce, outils métier, intelligence artificielle : j’aime relier la technique à des usages concrets.</p><p>Mon travail va de la première interface à la mise en production, avec une attention particulière à ce qui se passe après le lancement.</p><div className="atelier-cv"><Link href="/cv">Découvrir mon parcours <ArrowUpRight size={18}/></Link><a href="/cv/pdf" target="_blank" rel="noreferrer">Mon CV en PDF ↓</a></div></div></div></section>
    <section className="atelier-contact" id="contact"><div className="atelier-section-label"><span>03 / LA SUITE S’ÉCRIT ENSEMBLE</span><span>UNE IDÉE EN TÊTE ?</span></div><h2>On en<br/><em>parle ?</em><span>↗</span></h2><div className="atelier-contact-links"><a href="mailto:kevine@generale-ci.com">kevine@generale-ci.com <ArrowUpRight/></a><a href="https://wa.me/2250500808585" target="_blank" rel="noreferrer">Sur WhatsApp <ArrowUpRight/></a></div></section>
  </div>;
}
function Project({project,index}:{project:typeof selection[number];index:number}) {
  const ref=useRef<HTMLElement>(null); const reduced=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","center center"]});
  const rotateX=useTransform(scrollYProgress,[0,1],[14,0]); const translateY=useTransform(scrollYProgress,[0,1],[70,0]);
  return <article ref={ref} className="atelier-project"><Link href={`/projets/${project.slug}`} aria-label={`Découvrir ${project.name}`}><motion.div className="atelier-project-object" style={{backgroundColor:project.color,...(reduced?{}:{rotateX,y:translateY})}}><span className="atelier-object-number">OBJET / {String(index+1).padStart(2,"0")}</span><div className={`atelier-project-media media-${project.kind}`}><Image src={project.image} alt={project.kind === "identity" ? `Identité de ${project.name}` : `Interface de ${project.name}`} width={project.kind === "desktop" ? 1600 : 750} height={project.kind === "phone" ? 1624 : 1000} sizes="(max-width: 700px) 90vw, 45vw" /></div><span className="atelier-object-line">{project.line}</span><span className="atelier-object-arrow"><ArrowUpRight/></span></motion.div><div className="atelier-project-caption"><h3>{project.name}</h3><span>{project.type}</span></div><p>{project.detail}</p></Link></article>;
}
