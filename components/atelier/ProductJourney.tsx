"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "@/components/atelier/AtelierLink";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useReducedMotion, type MotionValue } from "motion/react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { RouteArtwork } from "./DispatchStory";
import AkiliPreview from "./AkiliPreview";
import OrganicContours from "./OrganicContours";

import { journeyProducts as products } from "@/lib/data/journey";

const count = products.length;

export default function ProductJourney(){
  const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();const [active,setActive]=useState(0);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  useMotionValueEvent(scrollYProgress,"change",p=>setActive(Math.min(count-1,Math.floor(p*count))));
  const [compact,setCompact]=useState(false);
  useEffect(()=>{const query=window.matchMedia('(max-width:800px)');const update=()=>setCompact(query.matches);update();query.addEventListener('change',update);return()=>query.removeEventListener('change',update);},[]);
  const product=products[active];
  function go(index:number){if(!ref.current)return;const top=ref.current.getBoundingClientRect().top+window.scrollY;const distance=ref.current.offsetHeight-window.innerHeight;window.scrollTo({top:top+distance*(index+.18)/count,behavior:reduced?"instant":"smooth"});}
  if(reduced||compact)return <section id="histoire" className="journey-reduced journey-natural">{products.map(p=><div key={p.slug} className="journey-static" data-project={p.slug} style={{background:p.bg,color:p.ink}}><ProductContent product={p}/></div>)}</section>;
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
 return <><div className="journey-copy"><h2>{p.name}</h2><h3>{p.title}</h3><p>{p.copy}</p><Link href={`/projets/${p.slug}`}>Découvrir le projet <ArrowUpRight size={22}/></Link></div><div className={`journey-media journey-media-${p.format}`}>{p.format==="bricolage"&&<Image className="bricolage-wordmark" src={p.logo} alt="Mr. Bricolage" width={1000} height={250}/>}{p.slug==="akili"?<AkiliPreview/>:p.format==="route"?<RouteArtwork/>:<Image src={p.image} alt={p.format==="identity"?`Identité de ${p.name}`:`Interface de ${p.name}`} width={p.format==="desktop"?2000:1200} height={p.format==="promo"||p.format==="phone"?2600:1250} sizes="(max-width:800px) 85vw, 50vw"/>}</div></>;
}
function BrandBackdrop({product:p,progress}:{product:typeof products[number];progress:MotionValue<number>}){
 const x=useTransform(progress,[0,1],[-40,90]);const rotate=useTransform(progress,[0,1],[-12,12]);
 return <motion.div className="journey-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.55}} style={{background:p.bg,color:p.accent}} aria-hidden="true"><motion.div className="journey-brand-watermark" style={{x,rotate}}><Image src={p.logo} alt="" width={1000} height={1000} unoptimized/></motion.div><motion.div className="journey-organic" style={{x,rotate}}><OrganicContours/></motion.div></motion.div>;
}
