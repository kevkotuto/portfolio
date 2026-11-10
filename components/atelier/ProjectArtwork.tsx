"use client";
import "./project-stories.css";
import { RouteArtwork } from './DispatchStory';
import AkiliPreview from "./AkiliPreview";
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import type { ProjectStory } from '@/lib/data/project-stories';

/** Editorial illustrations describe the product; they are not interface screenshots. */
export default function ProjectArtwork({story}:{story:ProjectStory}){
 const reduced=useReducedMotion();
 if(story.format==='interactive')return <div className="story-art story-art-interactive"><AkiliPreview/></div>;
 if(story.image)return <div className={`story-art story-art-image story-art-${story.format}`}><Image src={story.image} alt={`Visuel du projet ${story.name}`} width={1400} height={story.format==='phone'||story.format==='promo'?2800:1000} sizes="(max-width:800px) 90vw, 55vw"/></div>;
 return <div className={`story-art story-art-${story.art}`} aria-hidden="true">
 {story.art==='route'?<RouteArtwork/>:story.art==='badge'?<div className="art-badge"><motion.div initial={false} whileInView={reduced?{}:{rotate:[-6,0],y:[20,0]}} transition={{duration:1}}><span className="art-badge-slot"/><svg viewBox="0 0 180 100"><circle cx="55" cy="35" r="17" fill="currentColor"/><path d="M20 87C20 48 90 48 90 87M119 25Q155 50 119 75M131 15Q180 50 131 85" fill="none" stroke="currentColor" strokeWidth="5"/></svg><strong>Badge & présence</strong><small>ARRIVÉE → PRÉSENCE → SUIVI</small></motion.div></div>:
 story.art==='voice'?<><div className="art-wave">{Array.from({length:27},(_,i)=><motion.i key={i} style={{height:`${18+Math.sin(i*1.73)**2*78}%`}} initial={false} whileInView={reduced?{}:{scaleY:[.45,1,.65]}} viewport={{amount:.3}} transition={{duration:2.4,delay:i*.045,repeat:reduced?0:1,ease:'easeInOut'}}/>)}</div><span>LA PAROLE DEVIENT MATIÈRE.</span></>:
 story.art==='script'?<div className="art-script"><small>AU RYTHME DE LA VOIX</small>{['Prendre la parole.','Garder le fil.','Laisser venir la suite.'].map((line,i)=><motion.p key={line} initial={false} whileInView={{opacity:i===1?1:.25,x:reduced?0:[0,8,0]}} transition={{duration:3,delay:i*.2}}>{line}</motion.p>)}</div>:
 story.art==='dispatch'?<div className="art-dispatch">{['Une audience','Un message','Une conversation'].map((line,i)=><motion.div key={line} initial={false} whileInView={reduced?{}:{x:[-18,0],opacity:[.5,1]}} transition={{duration:.7,delay:i*.2}}><span>0{i+1}</span>{line}<b>↗</b></motion.div>)}</div>:
 story.art==='clipboard'?<div className="art-clips">{['Une idée.','Un lien.','Juste là.'].map((line,i)=><motion.div key={line} initial={false} whileInView={{rotate:reduced?0:(i-1)*7,y:reduced?0:[25,0]}} transition={{duration:.8,delay:i*.1}}><small>⌘ C</small><strong>{line}</strong></motion.div>)}</div>:
 <div className="art-type"><span>{story.name}</span><svg viewBox="0 0 500 240"><path d={story.art==='architecture'?'M40 210V70L250 20L460 70V210M160 210V105H340V210':story.art==='commerce'?'M40 80H460L410 210H90ZM150 80V40H350V80':'M20 120C100 0 150 240 250 120S400 0 480 120'} fill="none" stroke="currentColor" strokeWidth="2"/></svg></div>}
 </div>;
}
