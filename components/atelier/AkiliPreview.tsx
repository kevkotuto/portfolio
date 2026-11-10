"use client";

import { useId, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Link2, UserRoundCheck } from 'lucide-react';
import './akili-preview.css';

const steps = [
 { label:'Questionner', icon:MessageCircle, title:'Une info vous fait douter ?', body:'Un message reçu, une photo ou un lien : commencez par ce que vous avez sous les yeux.', detail:'Texte · image · voix', action:'Poser une question', href:'https://ai.akilicheck.com' },
 { label:'Comprendre', icon:Link2, title:'Remonter aux sources.', body:'Le verdict ouvre la lecture. Les références permettent de comprendre le contexte et de vérifier par soi-même.', detail:'Vrai · partiel · infox', action:'Découvrir la méthode', href:'https://akilicheck.com/nos-sources' },
 { label:'Approfondir', icon:UserRoundCheck, title:'Le regard humain compte.', body:'Quand une réponse mérite d’être approfondie, le parcours permet de demander une vérification aux journalistes.', detail:'Du signalement au relais éditorial', action:'Explorer Akili', href:'https://ai.akilicheck.com' },
];

/** Présentation interactive du parcours, sans simuler une réponse du service IA. */
export default function AkiliPreview(){
 const [active,setActive]=useState(0);const id=useId();const step=steps[active];const Icon=step.icon;
 return <section className="akili-preview" aria-label="Explorer le fonctionnement d’Akili">
  <header className="akili-preview-brand"><Image src="/atelier/akili-logo.png" alt="" width={44} height={44}/><strong>Akili</strong><span>Vérifier avant de partager</span></header>
  <div className="akili-preview-steps" aria-label="Les étapes du parcours">{steps.map((s,i)=><button key={s.label} type="button" aria-pressed={active===i} aria-controls={id} onClick={()=>setActive(i)}><span>0{i+1}</span>{s.label}</button>)}</div>
  <div id={id} className="akili-preview-panel" aria-live="polite">
   <div className="akili-preview-symbol"><Icon size={34} strokeWidth={1.5}/><span>{step.detail}</span></div>
   <h3>{step.title}</h3><p>{step.body}</p>
   <a href={step.href} target="_blank" rel="noreferrer">{step.action}<ArrowRight size={21}/></a>
  </div>
  <footer><span>Parcours interactif · présentation</span><button type="button" onClick={()=>setActive((active+1)%steps.length)} aria-label="Explorer l’étape suivante"><ArrowRight size={20}/></button></footer>
 </section>;
}
