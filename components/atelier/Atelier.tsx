"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const selection = [
  {slug:"akili", image:"/atelier/akili-ecran.png", kind:"phone", name:"Akili", type:"Intelligence artificielle", line:"Une IA qui parle à son monde.", mark:"a.", color:"#d9c9ed", detail:"Applications, conversation et vérification de l’information."},
  {slug:"generale-ci", image:"/atelier/generale-ci.png", kind:"identity", name:"Générale CI", type:"Commerce & livraison", line:"Du panier à la porte.", mark:"G/", color:"#f3b58c", detail:"Un écosystème de commerce, du web aux applications mobiles."},
  {slug:"gescom", image:"/atelier/gescom.png", kind:"identity", name:"GESCOM", type:"Logiciel métier", line:"Le quotidien du commerce, simplifié.", mark:"g_", color:"#c9d9b4", detail:"Gestion commerciale de bureau, pensée pour les commerces ivoiriens."},
  {slug:"genmail", image:"/atelier/genmail.jpg", kind:"desktop", name:"GenMail", type:"Application macOS & Windows", line:"Toutes vos conversations. Un seul endroit.", mark:"↗", color:"#b8d4e6", detail:"Une messagerie multi-comptes, connectée à la suite GESCOM."},
  {slug:"bernabe-bricolage", image:"/atelier/mr-bricolage.png", kind:"identity", name:"Mr. Bricolage", type:"E-commerce & intégrations", line:"Le magasin se prolonge en ligne.", mark:"mr.", color:"#e7afa6", detail:"Une expérience marchande connectée aux outils du groupe Bernabé."},
  {slug:"upjunoo", image:"/atelier/upjunoo.png", kind:"phone", name:"Upjunoo", type:"Plateforme & mobilité", line:"Des services qui se rencontrent.", mark:"up", color:"#c8c5eb", detail:"Un ensemble de produits web et mobiles pour les services et la mobilité."},
  {slug:"tamamedia", image:"/atelier/tamamedia.svg", kind:"identity", name:"Tama Media", type:"Média & édition", line:"Une autre perspective sur l’Afrique.", mark:"T", color:"#edce9d", detail:"Une plateforme éditoriale pour l’actualité et les contenus multimédias."},
  {slug:"yapasgachis", image:"/atelier/yapasgachis.png", kind:"identity", name:"Yapasgachis", type:"Marketplace anti-gaspillage", line:"Moins de gaspillage. Plus de possibilités.", mark:"y!", color:"#d1dd81", detail:"Une marketplace qui donne une nouvelle chance aux invendus alimentaires."},
];

export default function Atelier() {
  const hero = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target:hero, offset:["start start", "end end"] });
  const y = useTransform(scrollYProgress,[0,.55,1],[0,-80,-100]);
  const x = useTransform(scrollYProgress,[0,.6,1],["0%","47%","50%"]);
  const scale = useTransform(scrollYProgress,[0,.6,1],[1,.7,.64]);
  const portraitRotate = useTransform(scrollYProgress,[0,.6],[0,-7]);
  const titleY = useTransform(scrollYProgress,[0,.6],[0,-35]);
  const progressScale = useTransform(scrollYProgress,[0,1],[0,1]);
  return <div className="atelier">
    <section ref={hero} className={`atelier-hero-track${reduced ? " atelier-static" : ""}`} aria-labelledby="atelier-title"><div className="atelier-hero">
      <motion.div className="atelier-progress" style={{scaleX:progressScale}} aria-hidden="true"/>
      <div className="atelier-kicker"><span>KEVINE GHOSSOUB BOUDALHA</span><span>ABIDJAN, CÔTE D’IVOIRE ↗</span></div>
      <motion.h1 id="atelier-title" style={reduced ? undefined : {y:titleY}}>DU CODE.<br/><span>DU CONCRET.</span></motion.h1>
      <motion.div className="atelier-portrait" style={reduced ? undefined : {y,x,scale,rotate:portraitRotate}}><Image src="/portraits/kevine-editorial-v1.webp" alt="Kevine Ghossoub Boudalha" width={1141} height={1379} priority sizes="(max-width: 700px) 90vw, 48vw" /></motion.div>
      <div className="atelier-intro"><span className="atelier-mini">DÉVELOPPEUR & CRÉATEUR DE PRODUITS</span><p>Je construis des outils<br/>qui prennent leur place<br/>dans la vraie vie.</p><Link href="#realisations">Entrer dans l’atelier <ArrowDown size={17}/></Link></div>

      <div className="atelier-hero-bottom"><span>WEB · MOBILE · DESKTOP · IA</span><span>FAITES DÉFILER POUR EXPLORER ↓</span></div>
    </div></section>
    <div className="atelier-ribbon" aria-hidden="true"><span>DES IDÉES AUX USAGES ↗</span><span>ABIDJAN → PARTOUT</span><span>CONCEVOIR. CONSTRUIRE. FAIRE VIVRE.</span></div>
    <Story/>
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

const chapters = [
  {label:"2020 — 2023", title:"Apprendre en\nfaisant.", text:"Sites vitrines, création de contenu et administration de serveurs pour des PME locales : mes premiers projets mêlent déjà communication et développement.", detail:"Bakeryshop Originale & missions freelance", items:["Comprendre", "Dessiner", "Construire"], color:"#e8eadc", image:"/portraits/kevine-editorial-v1.webp", format:"portrait"},
  {label:"2022 — AUJOURD’HUI", title:"Du métier\nau logiciel.", text:"D’abord analyste au service prix de Bernabé, j’automatise des analyses avec Python. Puis je passe au développement digital : commerce en ligne, catalogue et intégrations métier.", detail:"Bernabé Côte d’Ivoire · Yeshigroup", items:["Mr. Bricolage", "GESCOM", "Tama Media"], color:"#e5b493", image:"/atelier/mr-bricolage.png", format:"identity"},
  {label:"DEPUIS 2024", title:"Construire\ndes écosystèmes.", text:"Applications mobiles, services, interfaces web : j’assemble les différentes pièces du produit. À Inexiumus, mon travail couvre notamment la suite Akili et ses applications.", detail:"Inexiumus Group · Upjunoo Media", items:["Générale CI", "Upjunoo", "Akili"], color:"#bdc7dd", image:"/atelier/akili-ecran.png", format:"phone"},
  {label:"AUJOURD’HUI", title:"Continuer\naprès la sortie.", text:"Le produit vit avec ses utilisateurs. Je développe aussi GESCOM et GenMail, une messagerie de bureau qui rassemble les comptes et se connecte aux outils métier.", detail:"Logiciels de bureau · produits web et mobiles", items:["Yapasgachis", "GenMail", "GESCOM"], color:"#d8dfbe", image:"/atelier/genmail.jpg", format:"desktop"},
];
function Story(){
 const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();const [active,setActive]=useState(0);
 const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
 useMotionValueEvent(scrollYProgress,"change",v=>{const n=Math.min(3,Math.floor(v*4));setActive(n);});

 function go(i:number){if(!ref.current)return;const top=window.scrollY+ref.current.getBoundingClientRect().top;window.scrollTo({top:top+(ref.current.offsetHeight-window.innerHeight)*(i+.15)/4,behavior:reduced?"instant":"smooth"});}
 const c=chapters[active];
 if(reduced)return <section className="atelier-story-static">{chapters.map((ch,i)=><article key={ch.label}><span>0{i+1} / {ch.label}</span><h2>{ch.title}</h2><p>{ch.text}</p></article>)}</section>;
 return <section ref={ref} className="atelier-story-track" aria-label="Mon histoire en quatre chapitres"><div className="atelier-story-stage" style={{backgroundColor:c.color}}>
 <div className="atelier-section-label"><span>L’HISTOIRE / 0{active+1}</span><span>LE SCROLL FAIT AVANCER LE RÉCIT ↓</span></div>
 <div className="atelier-story-layout"><div className="atelier-story-copy"><AnimatePresence mode="wait"><motion.div key={active} initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-25}} transition={{duration:.35}}><span className="atelier-mini">{c.label}</span><h2>{c.title}</h2><p>{c.text}</p><span className="atelier-story-detail">{c.detail}</span></motion.div></AnimatePresence></div>
 <div className={`atelier-story-visual story-visual-${c.format}`}><AnimatePresence mode="wait"><motion.div key={c.image} initial={{opacity:0,clipPath:"inset(10% 0 10% 100%)",rotateY:-12}} animate={{opacity:1,clipPath:"inset(0% 0 0% 0%)",rotateY:0}} exit={{opacity:0,clipPath:"inset(0% 100% 0% 0%)"}} transition={{duration:.55,ease:[.16,1,.3,1]}}><Image src={c.image} alt={active===0?"Kevine Ghossoub":active===1?"Mr. Bricolage Côte d’Ivoire":active===2?"Écran de l’application Akili":"Interface de la messagerie GenMail"} width={1200} height={active===2?2400:1200} sizes="(max-width: 800px) 85vw, 55vw"/></motion.div></AnimatePresence></div></div>
 <nav className="atelier-story-chapters" aria-label="Chapitres du parcours">{chapters.map((ch,i)=><button key={ch.label} onClick={()=>go(i)} aria-current={active===i?"step":undefined}><span>0{i+1}</span>{ch.label}<span className="atelier-chapter-line"/></button>)}</nav>
 </div></section>;
}
