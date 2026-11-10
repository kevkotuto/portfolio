"use client";
import {useId,useRef,useState,type CSSProperties} from 'react';
import Image from 'next/image';
import {ArrowRight,ArrowUpRight,Expand,X} from 'lucide-react';
import {productPreviews,previewKey} from '@/lib/data/product-previews';
import {journeyProducts} from '@/lib/data/journey';
import {projects} from '@/lib/data/projects';
import './product-preview.css';

export default function ProductPreview({slug}:{slug:string}){
 const [active,setActive]=useState(0);const id=useId();const dialog=useRef<HTMLDialogElement>(null);
 const key=previewKey(slug);const config=productPreviews[key];const brand=journeyProducts.find(p=>p.slug===key);const project=projects.find(p=>p.slug===key);
 if(!config||!brand)return null;
 const step=config.steps[active];
 return <section className={`product-preview preview-${config.kind}`} aria-label={`Explorer ${brand.name}`} style={{'--preview-bg':config.surface,'--preview-ink':config.ink,'--preview-accent':config.accent} as CSSProperties}>
  <header><Image src={brand.logo} alt="" width={42} height={42} unoptimized/><div><strong>{brand.name}</strong><p>{config.kicker}</p></div>{config.capture&&<button type="button" className="preview-capture" onClick={()=>dialog.current?.showModal()} aria-label={`Agrandir la vraie interface de ${brand.name}`}><Expand size={20}/></button>}</header>
  <div className="preview-controls" aria-label="Choisir une étape">{config.steps.map((s,i)=><button key={s.label} type="button" aria-pressed={active===i} aria-controls={id} onClick={()=>setActive(i)}><span>0{i+1}</span>{s.label}</button>)}</div>
  <div id={id} className="preview-body" aria-live="polite">
   <div className="preview-diagram" aria-label="Les éléments du parcours">{step.items.map((item,i)=><div key={item} style={{'--item':i} as CSSProperties}><span aria-hidden="true">{config.kind==='mail'?'↗':String(i+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div>
   <h3>{step.title}</h3><p>{step.body}</p>
  </div>
  <footer><span>Parcours interactif · présentation</span><button type="button" onClick={()=>setActive((active+1)%config.steps.length)} aria-label={`Étape suivante pour ${brand.name}`}><ArrowRight size={20}/></button></footer>
  <div className="preview-actions">{config.capture&&<button type="button" onClick={()=>dialog.current?.showModal()}>Voir l’interface <Expand size={16}/></button>}{project?.url&&<a href={project.url} target="_blank" rel="noreferrer">Ouvrir le produit <ArrowUpRight size={17}/></a>}</div>
  {config.capture&&<dialog ref={dialog} className="preview-dialog" aria-label={`Capture de ${brand.name}`} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}}><button type="button" className="preview-close" onClick={()=>dialog.current?.close()} autoFocus aria-label="Fermer la capture"><X/> Fermer</button><Image src={config.capture} alt={`Interface de ${brand.name}`} width={1200} height={config.kind==='mail'?800:2600} sizes="90vw" unoptimized/><p>Capture de l’application · {brand.name}</p></dialog>}
 </section>;
}
