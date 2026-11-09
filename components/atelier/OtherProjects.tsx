"use client";
import { useState, type CSSProperties } from 'react';
import Link from '@/components/atelier/AtelierLink';
import { ArrowUpRight } from 'lucide-react';
import { categoryLabels } from '@/lib/data/projects';
import { discoveryProjects, otherProjects, storyFor } from '@/lib/data/project-stories';
import ProjectArtwork from './ProjectArtwork';
export default function OtherProjects(){
 const [query,setQuery]=useState('');
 const rest=otherProjects.filter(p=>!discoveryProjects.some(d=>d.slug===p.slug));
 const filtered=rest.filter(p=>`${p.title} ${p.description} ${p.tech.join(' ')}`.toLocaleLowerCase('fr').includes(query.toLocaleLowerCase('fr')));
 return <><div className="discovery-grid">{discoveryProjects.map(p=>{const s=storyFor(p);return <Link key={p.slug} className="discovery-card" href={`/projets/${p.slug}`} style={{background:s.background,color:s.ink,'--story-accent':s.accent} as CSSProperties}><div className="discovery-label"><span>{categoryLabels[p.category]}</span><ArrowUpRight/></div><ProjectArtwork story={s}/><h3>{s.name}</h3><p>{s.headline.replace('\n',' ')}</p><span className="discovery-open">L’histoire du projet ↗</span></Link>})}</div>
 <div className="atelier-index"><div className="atelier-index-heading"><h3>Et encore<br/><em>d’autres terrains.</em></h3><label>Retrouver un projet<input type="search" placeholder="Nom, métier, technologie…" value={query} onChange={e=>setQuery(e.target.value)}/></label></div><p className="index-count" aria-live="polite">{filtered.length} projets à explorer</p><div className="project-index-list">{filtered.map(p=><Link key={p.slug} href={`/projets/${p.slug}`}><span>{p.title.split(' — ')[0]}</span><span>{p.title.split(' — ')[1]??categoryLabels[p.category]}</span><ArrowUpRight/></Link>)}</div>{!filtered.length&&<p>Aucun projet pour cette recherche. Essaie un autre nom ou une technologie.</p>}</div></>;
}
