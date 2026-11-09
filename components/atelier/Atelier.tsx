"use client";

import Link from "@/components/atelier/AtelierLink";
import PortraitIntro from "./PortraitIntro";
import ProductJourney from "./ProductJourney";
import GitHubAtelier from "./GitHubAtelier";
import ContactHub from "./ContactHub";
import OtherProjects from "./OtherProjects";
import { ArrowDown, ArrowUpRight } from "lucide-react";


export default function Atelier() {
  return <div className="atelier">
    <PortraitIntro/>
    <ProductJourney/>
    <section id="realisations" className="atelier-work">
      <div className="atelier-section-label"><span>01 / DANS L’ATELIER</span><span>D’AUTRES PROJETS, D’AUTRES HISTOIRES</span></div>
      <div className="atelier-work-heading"><h2>Des idées.<br/><em>Devenues réelles.</em></h2><p>Des métiers différents, une même exigence : comprendre le besoin, construire le produit et l’accompagner sur le terrain.</p></div>
      <OtherProjects/>
      <Link className="atelier-all" href="/projets"><span>Et ce n’est pas tout.</span><span>Explorer tous les projets <ArrowUpRight/></span></Link>
    </section>
    <section className="atelier-about" id="parcours"><div className="atelier-section-label"><span>02 / DERRIÈRE LES PRODUITS</span><span>LE PARCOURS</span></div><div className="atelier-about-grid"><h2>Curieux de nature.<br/><em>Constructeur<br/>par conviction.</em></h2><div><p>Basé à Abidjan, je développe des applications web, mobiles et de bureau. Commerce, outils métier, intelligence artificielle : j’aime relier la technique à des usages concrets.</p><p>Mon travail va de la première interface à la mise en production, avec une attention particulière à ce qui se passe après le lancement.</p><div className="atelier-cv"><Link href="/about">Un peu plus sur moi <ArrowUpRight size={18}/></Link><Link href="/cv">Découvrir mon parcours <ArrowUpRight size={18}/></Link><a href="/cv/pdf" target="_blank" rel="noreferrer">Mon CV en PDF ↓</a></div></div></div></section>
    <GitHubAtelier/>
    <ContactHub/>
  </div>;
}