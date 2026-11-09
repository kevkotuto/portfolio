"use client";
import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { categoryLabels, type Project } from '@/lib/data/projects';
import { storyFor } from '@/lib/data/project-stories';
import ProjectArtwork from '@/components/atelier/ProjectArtwork';

const statuses={production:'En production',active:'Actif',archived:'Archivé',wip:'En construction'};
export default function ProjetDetailClient({project:p,related}:{project:Project;related:Project[]}){
 const story=storyFor(p);const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target:ref,offset:['start start','end end']});
 const progress=useSpring(scrollYProgress,{stiffness:90,damping:25});
 const y=useTransform(progress,[0,.35],[0,-75]);
 const rotate=useTransform(progress,[0,.35],[0,story.art==='architecture'?0:-3]);
 const reveal={initial: false as const,whileInView:reduced?{}:{y:[24,0],opacity:[.65,1]},viewport:{once:true,amount:.15},transition:{duration:.8,ease:[.16,1,.3,1] as [number,number,number,number]}};
 return <article ref={ref} className={`project-story story-${story.art}`} data-project={p.slug} style={{'--story-bg':story.background,'--story-ink':story.ink,'--story-accent':story.accent,background:story.background,color:story.ink} as CSSProperties}>
 <motion.div className="story-progress" style={{scaleX:reduced?0:scrollYProgress}} aria-hidden="true"/>
 <nav className="story-nav" aria-label="Navigation du projet"><Link href="/#realisations"><ArrowLeft size={18}/> L’atelier</Link><a href="#construction">La construction ↓</a><span>{p.year} · {statuses[p.status]}</span></nav>
 <header className="story-hero"><div className="story-hero-copy"><p className="story-eyebrow">{categoryLabels[p.category]} / {story.name}</p>{p.confidential&&<p className="story-confidential">Réalisation client confidentielle · présentation anonymisée</p>}<h1>{story.headline}</h1><p className="story-lead">{story.premise}</p><a className="story-read" href="#origine">Entrer dans l’histoire <span>↓</span></a></div><motion.div className="story-hero-art" style={reduced?{}:{y,rotate}}><ProjectArtwork story={story}/>{!story.image&&<span className="story-art-caption">Une illustration du principe du produit</span>}</motion.div></header>
 <section id="origine" className="story-origin"><div className="story-section-label">01 / LE POINT DE DÉPART</div><motion.div {...reveal}><h2>{story.name}<span>, côté usage.</span></h2>{story.premise!==p.description&&<p>{p.description}</p>}</motion.div><dl><div><dt>Mon rôle</dt><dd>{p.role}</dd></div>{p.client&&<div><dt>Pour</dt><dd>{p.client}</dd></div>}<div><dt>Terrain</dt><dd>{categoryLabels[p.category]}</dd></div></dl></section>
 <section id="construction" className="story-build"><div className="story-section-label">02 / LA CONSTRUCTION</div><div className="story-build-grid"><motion.h2 {...reveal}>Ce qui se passe<br/><em>derrière l’écran.</em></motion.h2><div><p className="story-build-copy">{p.longDescription??p.description}</p><div className="story-tech" aria-label="Technologies utilisées">{p.tech.map(t=><span key={t}>{t}</span>)}</div></div></div></section>
 {!!p.highlights?.length&&<section className="story-capabilities"><div className="story-section-label">03 / CE QUE LE PRODUIT PERMET</div>{p.highlights.map((h,i)=><motion.div {...reveal} className="story-capability" key={h}><span>{String(i+1).padStart(2,'0')}</span><h3>{h}</h3><span aria-hidden="true">↗</span></motion.div>)}</section>}
 <section className="story-outro"><p className="story-eyebrow">{statuses[p.status]} · {p.year}</p><h2>{story.name}.<br/><em>À explorer.</em></h2>{p.confidential&&<div className="story-demo"><h3>Une démo pour se projeter.</h3><p>Une version de démonstration est prévue avec des données fictives, pour découvrir le badgeage et le suivi des présences. Elle reste à développer ; aucun accès au système du client n’est proposé ici.</p><span>Démo à venir</span></div>}<div className="story-actions">{p.url&&!p.confidential&&<a href={p.url} target="_blank" rel="noreferrer">Découvrir le produit <ArrowUpRight/></a>}{p.repo&&!p.confidential&&<a href={p.repo} target="_blank" rel="noreferrer">Explorer le code <ArrowUpRight/></a>}<Link href="/#contact">Parlons de votre projet <ArrowUpRight/></Link></div></section>
 <footer className="story-related"><p>La suite de l’atelier</p>{related.slice(0,2).map(r=><Link key={r.slug} href={`/projets/${r.slug}`}><span>{r.title}</span><ArrowUpRight/></Link>)}<Link href="/#realisations">Tous les autres projets <ArrowUpRight/></Link></footer>
 </article>;
}
