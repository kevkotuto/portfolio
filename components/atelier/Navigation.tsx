import Link from "next/link";
export default function Navigation(){return <header className="atelier-nav"><Link className="atelier-wordmark" href="/" aria-label="Kevine — accueil">kg<span>↗</span></Link><nav aria-label="Navigation principale"><Link href="/projets">Projets</Link><Link href="/cv">Parcours & CV</Link><Link href="/#contact">Parlons-en ↗</Link></nav></header>}
