import Link from '@/components/atelier/AtelierLink';
import { ArrowUpRight, Mail, MessageCircle, Phone, Send, Download } from 'lucide-react';
import { contact } from '@/lib/data/contact';
import './personal-pages.css';
const channels=[
 {name:'Un message',detail:'Par e-mail',href:`mailto:${contact.email}`,icon:Mail},
 {name:'On discute ?',detail:'Sur WhatsApp',href:contact.whatsapp,icon:MessageCircle},
 {name:'De vive voix',detail:contact.displayPhone,href:`tel:${contact.phone}`,icon:Phone},
 {name:'Quelques mots',detail:'Par SMS',href:`sms:${contact.phone}`,icon:Send},
];
export default function ContactHub(){return <section className="atelier-contact contact-hub" id="contact"><div className="atelier-section-label"><span>LA SUITE S’ÉCRIT ENSEMBLE</span><span>ABIDJAN · ET À DISTANCE</span></div><a className="contact-big-link" href={`mailto:${contact.email}`} aria-label={`Parlons de votre projet, écrire à ${contact.email}`}><h2>On en<br/><em>parle ?</em><span>↗</span></h2></a><p className="contact-invitation">Une idée à construire, un produit à faire évoluer ou simplement envie d’échanger. Choisissez ce qui vous convient.</p><div className="contact-channels">{channels.map(c=><a key={c.name} href={c.href} {...(c.href.startsWith('https')?{target:'_blank',rel:'noreferrer'}:{})}><c.icon size={24}/><strong>{c.name}</strong><span>{c.detail}</span><ArrowUpRight className="contact-channel-arrow" size={26}/></a>)}</div><div className="contact-extras"><a href="/contact/kevine.vcf" download><Download size={18}/> Enregistrer mon contact</a><Link href="/contact">Écrire depuis le site <ArrowUpRight size={18}/></Link></div><footer className="contact-bottom"><Link href="/about">Un peu plus sur moi ↗</Link><nav aria-label="Mes réseaux">{contact.socials.map(s=><a href={s.url} key={s.name} target="_blank" rel="noreferrer">{s.name} ↗</a>)}</nav><span>Kevine Ghossoub Boudalha · {new Date().getFullYear()}</span></footer></section>}
