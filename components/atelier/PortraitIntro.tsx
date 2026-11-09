"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "@/components/atelier/AtelierLink";
import { motion, useReducedMotion, useScroll, useTransform, useInView, useSpring } from "motion/react";
import OrganicContours from "./OrganicContours";
import { ArrowDown, ArrowUpRight } from "lucide-react";

/** Le cadre reste centré : le scroll change le plan, jamais l'angle du portrait. */
export default function PortraitIntro() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, {stiffness:100,damping:28,mass:.4,restDelta:.001});
  const scale = useTransform(progress, [0,.12,.5,.82,1], [1,1,.58,.42,.35]);
  const frameOpacity = useTransform(progress, [0,.5,.83,1], [1,1,0,0]);
  const frameY = useTransform(progress, [0,.5,.83,1], ["0%","0%","-12%","-16%"]);
  const background = useTransform(progress, [0, .15, .55], ["#fafaf6", "#fafaf6", "#202222"]);
  const copyOpacity = useTransform(progress, [0, .28, .58], [0, 0, 1]);
  const shade = useTransform(progress, [0, .18, .65], [0, 0, .58]);
  const inView = useInView(ref);
  const noteOpacity = useTransform(progress, [0, .15, .35], [1, 1, 0]);
  return <section ref={ref} className={`portrait-sequence${reduced ? " portrait-reduced" : ""}`} aria-label="Présentation de Kevine Ghossoub">
    <h1 className="sr-only">Kevine Ghossoub — Développeur et créateur de produits</h1>
    <motion.div className="portrait-stage" style={reduced ? undefined : { backgroundColor: background }}>
      <motion.div className="portrait-contours" style={reduced ? undefined : {opacity:copyOpacity}}><OrganicContours/></motion.div>
      <div className="portrait-top"><Link href="/" aria-label="Kevine Ghossoub, accueil">KEVINE<br/><span>GHOSSOUB.</span></Link><Link href="/cv">Parcours & CV <ArrowUpRight size={17}/></Link></div>
      <motion.div className="portrait-type" style={reduced ? undefined : { opacity: copyOpacity }} aria-hidden="true">
        {["DES IDÉES QUI PRENNENT VIE.", "DU CODE. DU CONCRET."].map((text,i)=><div className={`portrait-marquee marquee-${i}`} key={text}><div className="portrait-marquee-track" style={{animationPlayState:inView ? "running" : "paused"}}>{[0,1].map(n=><span key={n}>{text} {text}&nbsp;</span>)}</div></div>)}
      </motion.div>
      <motion.div className="portrait-frame" style={reduced ? undefined : { scale, opacity:frameOpacity, y:frameY }}>
        <Image src="/portraits/kevine-editorial-v1.webp" alt="Kevine Ghossoub Boudalha, développeur et créateur de produits à Abidjan" width={1141} height={1379} priority sizes="100vw" className="portrait-photo"/>
        <motion.div className="portrait-shade" style={reduced ? undefined : {opacity:shade}} aria-hidden="true"/>
      </motion.div>
      <motion.div className="portrait-start-note" style={reduced ? undefined : {opacity:noteOpacity}}><p>Développeur.<br/>Créateur de produits.<br/>Basé à Abidjan.</p><a href="#histoire">Découvrir mon histoire <ArrowDown size={18}/></a></motion.div>
      <motion.div className="portrait-end-note" style={reduced ? undefined : {opacity:copyOpacity}}><p>Du premier besoin<br/>au produit entre vos mains.</p><Link href="#realisations">Explorer les réalisations <ArrowDown size={18}/></Link></motion.div>
      <span className="portrait-scroll" aria-hidden="true">FAITES DÉFILER <ArrowDown size={14}/></span>
    </motion.div>
  </section>;
}
