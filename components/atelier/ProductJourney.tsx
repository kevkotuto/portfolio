"use client";

import { useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useReducedMotion, type MotionValue } from "motion/react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import OrganicContours from "./OrganicContours";

const products = [
  { slug:"akili", name:"Akili", title:"Avant de partager,\nvérifier.", copy:"Une rumeur, une image, une question. Akili rassemble la conversation, la vérification des informations et des contenus de fact-checking dans une application mobile.", role:"Application mobile · plateforme IA", image:"/atelier/akili-store-actuel.png", logo:"/atelier/akili-logo.png", format:"promo", bg:"linear-gradient(225deg,#DAFF8D 0%,#F8FBFF 40%,#DDEBFF 100%)", ink:"#1F2937", accent:"#050C91", next:"Comprendre l’information, puis mieux comprendre ses finances." },
  { slug:"moro", name:"Moro", title:"Comprendre ses finances.\nFaire avancer ses projets.", copy:"Revenus, dépenses et projets dans une même application. Moro permet de suivre son quotidien financier, d’explorer les possibilités de financement et de retrouver un assistant IA pour accompagner ses questions.", role:"Gestion financière · mobile · services", image:"/atelier/moro-accueil-actuel.png", logo:"/logo/moro.png", format:"phone", bg:"linear-gradient(135deg,#FFFFFF 15%,#EDF8F1 65%,#FFF0DE)", ink:"#11181C", accent:"#15764B", next:"Des projets personnels au commerce : construire les outils du quotidien." },
  { slug:"generale-ci", name:"Générale CI", title:"Du panier\nà la porte.", copy:"Le commerce ne s’arrête pas à la commande. J’assemble le site, les applications et les services qui relient les vendeurs, les clients et la livraison.", role:"Marketplace · web · mobile · services", image:"/atelier/generale-ci.png", logo:"/atelier/generale-ci.png", format:"identity", bg:"linear-gradient(145deg,#0f0f1a,#1a1a2e)", ink:"#f5f5f7", accent:"#5fd6ff", next:"Derrière chaque vente, une gestion à simplifier." },
  { slug:"gescom", name:"GESCOM", title:"Le métier,\nà portée de main.", copy:"Stock, ventes et gestion commerciale : un logiciel de bureau conçu pour accompagner le quotidien des commerces ivoiriens, avec des services et des applications reliés entre eux.", role:"Logiciel métier · desktop · synchronisation", image:"/atelier/gescom-transparent.png", logo:"/atelier/gescom-transparent.png", format:"identity", bg:"linear-gradient(130deg,#d8e8f4,#f6fbff 50%,#8fc0e2)", ink:"#0e5d95", accent:"#0e5d95", next:"Et quand les outils métier rencontrent la messagerie…" },
  { slug:"genmail", name:"GenMail", title:"Les échanges\nfont partie du travail.", copy:"Microsoft 365, Gmail, iCloud et IMAP dans la même messagerie. GenMail relie les conversations aux outils métier de GESCOM, sur macOS et Windows.", role:"Messagerie · macOS · Windows", image:"/atelier/genmail.jpg", logo:"/atelier/genmail-logo.png", format:"desktop", bg:"linear-gradient(130deg,#072845,#0b3a63 55%,#1f6fbf)", ink:"#ffffff", accent:"#cce4ff", next:"Relier un logiciel au terrain, c’est aussi ouvrir un magasin en ligne." },
  { slug:"bernabe-bricolage", name:"Mr. Bricolage", title:"Le magasin\nse prolonge en ligne.", copy:"Un catalogue à explorer, des produits à retrouver et des outils internes à connecter. Mon travail relie l’expérience e-commerce aux contraintes métier du groupe Bernabé.", role:"E-commerce · catalogue · intégrations métier", image:"/atelier/mr-bricolage-conseil.webp", logo:"/atelier/mr-bricolage.png", format:"bricolage", bg:"linear-gradient(130deg,#ff0015,#d90016)", ink:"#ffffff", accent:"#ffffff", next:"Changer d’échelle : réunir plusieurs services dans une app." },
  { slug:"upjunoo", name:"Upjunoo", title:"Plusieurs services.\nUn même parcours.", copy:"VTC, livraison, location et fret : des besoins différents, réunis dans un ensemble d’applications et de services pour les clients et les professionnels.", role:"Mobilité · applications · plateforme", image:"/atelier/upjunoo-accueil-actuel.png", logo:"/projets/logos/upjunoo.png", format:"phone", bg:"linear-gradient(135deg,#E6F3F5,#ffffff 50%,#E4F2EF)", ink:"#0F3D45", accent:"#247f8d", next:"Des services à l’information : donner une place aux contenus." },
  { slug:"tamamedia", name:"Tama Media", title:"L’information\na son espace.", copy:"Une plateforme pour publier, lire et explorer l’actualité africaine. Le site et les outils éditoriaux accompagnent la circulation des articles et des contenus multimédias.", role:"Média · édition · plateforme web", image:"/atelier/tamamedia.svg", logo:"/atelier/tamamedia.svg", format:"identity", bg:"linear-gradient(120deg,#fff,#fffdf0 60%,#FAD805)", ink:"#231F20", accent:"#3E5EAB", next:"Un autre usage concret du numérique : réduire le gaspillage." },
  { slug:"yapasgachis", name:"Yapasgachis", title:"Une seconde chance\npour les invendus.", copy:"Rapprocher les commerces et les consommateurs pour limiter le gaspillage alimentaire. Une marketplace construite autour de la découverte, de la commande et de la vie des offres.", role:"Marketplace anti-gaspillage · web · mobile", image:"/atelier/yapasgachis.png", logo:"/atelier/yapasgachis.png", format:"identity", bg:"linear-gradient(135deg,#FAFAF7,#e5f4df 60%,#C8E64E)", ink:"#006B4D", accent:"#00845F", next:"D’autres projets, d’autres métiers. La curiosité continue." },
];
const count = products.length;

export default function ProductJourney(){
  const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();const [active,setActive]=useState(0);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  useMotionValueEvent(scrollYProgress,"change",p=>setActive(Math.min(count-1,Math.floor(p*count))));
  const product=products[active];
  function go(index:number){if(!ref.current)return;const top=ref.current.getBoundingClientRect().top+window.scrollY;const distance=ref.current.offsetHeight-window.innerHeight;window.scrollTo({top:top+distance*(index+.18)/count,behavior:reduced?"instant":"smooth"});}
  if(reduced)return <section id="histoire" className="journey-reduced">{products.map(p=><div key={p.slug} className="journey-static" style={{background:p.bg,color:p.ink}}><ProductContent product={p}/></div>)}</section>;
  return <section id="histoire" ref={ref} className="product-journey" style={{height:`${100+count*120}svh`}} aria-label="Les histoires derrière mes produits">
    <div className="journey-stage" data-project={product.slug} style={{background:product.bg,color:product.ink,"--brand-accent":product.accent} as CSSProperties}>
      <AnimatePresence><BrandBackdrop key={product.slug} product={product} progress={scrollYProgress}/></AnimatePresence>
      <div className="journey-top"><Link href="#realisations">Mes réalisations <ArrowDown size={17}/></Link><span>{product.role}</span></div>
      <AnimatePresence mode="wait"><motion.div key={product.slug} className="journey-content" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:.35,ease:[.16,1,.3,1]}}><ProductContent product={product}/></motion.div></AnimatePresence>
      <div className="journey-footer"><p>{product.next}</p><nav aria-label="Parcourir les projets"><button onClick={()=>go(Math.max(0,active-1))} disabled={active===0} aria-label="Projet précédent"><ArrowLeft/></button><span>{product.name}</span><button onClick={()=>go(Math.min(count-1,active+1))} disabled={active===count-1} aria-label="Projet suivant"><ArrowRight/></button></nav></div>
    </div>
  </section>;
}
function ProductContent({product:p}:{product:typeof products[number]}){
 return <><div className="journey-copy"><h2>{p.name}</h2><h3>{p.title}</h3><p>{p.copy}</p><Link href={`/projets/${p.slug}`}>Découvrir le projet <ArrowUpRight size={22}/></Link></div><div className={`journey-media journey-media-${p.format}`}>{p.format==="bricolage"&&<Image className="bricolage-wordmark" src={p.logo} alt="Mr. Bricolage" width={1000} height={250}/>}<Image src={p.image} alt={p.format==="identity"?`Identité de ${p.name}`:`Interface de ${p.name}`} width={p.format==="desktop"?2000:1200} height={p.format==="promo"||p.format==="phone"?2600:1250} sizes="(max-width:800px) 85vw, 50vw"/></div></>;
}
function BrandBackdrop({product:p,progress}:{product:typeof products[number];progress:MotionValue<number>}){
 const x=useTransform(progress,[0,1],[-40,90]);const rotate=useTransform(progress,[0,1],[-12,12]);
 return <motion.div className="journey-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.55}} style={{background:p.bg,color:p.accent}} aria-hidden="true"><motion.div className="journey-brand-watermark" style={{x,rotate}}><Image src={p.logo} alt="" width={1000} height={1000} unoptimized/></motion.div><motion.div className="journey-organic" style={{x,rotate}}><OrganicContours/></motion.div></motion.div>;
}
