import { journeyProducts } from './journey';
import { projects, type Project } from './projects';

export type StoryArt = 'badge' | 'voice' | 'script' | 'dispatch' | 'clipboard' | 'architecture' | 'system' | 'commerce' | 'conversation';
export type ProjectStory = { name:string; headline:string; premise:string; background:string; ink:string; accent:string; art:StoryArt; image?:string; format?:string; brandVerified:boolean };
const extras:Record<string,Partial<ProjectStory>> = {
  echo:{headline:'Ne rien perdre\nde ce qui se dit.',premise:'Une réunion ne devrait pas se terminer avec un enregistrement que personne ne réécoute. Echo transforme la parole en matière exploitable, jusqu’au pré-devis.',background:'#FAFAF9',ink:'#0A0A0A',accent:'#C83F10',art:'voice',brandVerified:true},
  'noche-pro':{name:'Noche Pro',headline:'Le texte suit\nvotre voix.',premise:'Lire un script sans courir après le prompteur : le défilement doit accompagner la parole, ses pauses et ses reprises. Et fonctionner sans connexion.',background:'#0D0D0F',ink:'#F2F2F5',accent:'#818CF8',art:'script',brandVerified:true},
  envoi:{headline:'Le bon message.\nLe bon public.',premise:'Une campagne commence bien avant le bouton Envoyer : importer les contacts, construire une audience, rédiger, puis comprendre ce qui se passe après l’envoi.',background:'#12151D',ink:'#EDEEF2',accent:'#7EA0FF',art:'dispatch',brandVerified:true},
  klippy:{headline:'Copié.\nJamais perdu.',premise:'Retrouver sur Mac le geste familier de Windows + V. Un outil discret qui garde les éléments copiés à portée de clavier.',background:'#F4F2ED',ink:'#202222',accent:'#68512B',art:'clipboard'},
  inayahome:{name:'Inaya Home',headline:'Du sur-mesure.\nDès le premier regard.',premise:'Présenter du mobilier sur mesure demande de laisser parler les matières et les réalisations, puis d’accompagner le visiteur vers une demande concrète.',background:'#FAF8F4',ink:'#1A1613',accent:'#8B713F',art:'architecture',image:'/atelier/inaya-porte.png',format:'landscape',brandVerified:true},
  dreamkeys:{name:'DreamKeys',headline:'Se projeter\navant de visiter.',premise:'L’immobilier commence par une projection : comprendre l’offre, découvrir les biens et trouver le bon interlocuteur.',background:'#23201D',ink:'#EDE9E3',accent:'#E2AE4F',art:'architecture',image:'/atelier/dreamkeys-villa.jpg',format:'landscape',brandVerified:true},
  trackmybox:{name:'TrackMyBox',headline:'Le bon objet.\nLe bon carton.',premise:'Lors d’un déménagement, retrouver un objet ne devrait pas obliger à ouvrir tous les cartons. Un QR code relie le contenant à son contenu.',art:'system'},
  'moro':{headline:'Des finances claires.\nDes projets qui avancent.',premise:'Réunir revenus, dépenses, projets et financement pour donner une lecture du quotidien financier, dans une application mobile et ses services associés.'},
  akili:{headline:'Avant de partager,\nprendre le temps de vérifier.',premise:'Une rumeur, une image ou une question : créer un point d’entrée mobile pour dialoguer, vérifier et accéder à des contenus de fact-checking.'},
  gescom:{headline:'Le commerce a besoin\nd’outils qui suivent.',premise:'Stocks, ventes et gestion commerciale appartiennent au même quotidien. GESCOM relie ces opérations dans un logiciel de bureau et ses services.'},
  genmail:{headline:'Les conversations\nfont partie du métier.',premise:'Les échanges sont dispersés entre fournisseurs et comptes. GenMail les rassemble sur le bureau et les relie aux outils de GESCOM.'},
  'bernabe-bricolage':{headline:'Du rayon\nà l’écran.',premise:'Le site d’un magasin doit relier les produits que l’on cherche aux informations et aux contraintes du commerce réel.'},
  'generale-ci':{headline:'Une commande.\nTout un écosystème.',premise:'Le panier n’est qu’une étape : vendeurs, clients, applications et livraison doivent partager un parcours cohérent.'},
  upjunoo:{headline:'Une ville.\nPlusieurs façons d’avancer.',premise:'Courses, livraison, location et fret répondent à des besoins différents. L’enjeu : les réunir sans perdre la clarté du parcours.'},
  tamamedia:{headline:'Faire une place\naux récits africains.',premise:'Donner aux lecteurs un espace pour explorer l’actualité, et à la rédaction les outils pour publier et faire circuler ses contenus.'},
  yapasgachis:{headline:'Ce qui reste\na encore de la valeur.',premise:'Relier les invendus des commerces aux consommateurs : la découverte et la commande deviennent des moyens concrets de réduire le gaspillage.'},
};
// Palettes relevées dans les thèmes des projets locaux ; accents assombris sur fond clair pour la lecture.
const sourcePalettes:Record<string,[string,string,string]>={
 'generale-mode':['#0F0F1A','#F9FAFB','#E8B86D'],
 gestot:['#FFFFFF','#0A0A0A','#0A0A0A'],
 'tontine-ivoire':['#FDF2EB','#1E1B16','#A34118'],
 trackmybox:['#F9F9FB','#000000','#333333'],
 'maison-des-perles':['#FFFFFF','#202020','#AF2569'],
 'jtb-ci':['#FFFFFF','#202020','oklch(0.35 0.15 250)'],
 agora:['#FFFFFF','#11181C','#1E4D2B'],
 'palais-des-sports':['#F5F5F5','#1A1A1A','#26745F'],
 spiritueux:['#0F0608','#F4ECDC','#C9A86A'],
 'yu-card':['#FEF9E7','#000000','#776009'],
 'fne-yeshi':['#FFFFFF','#252C32','#0C58A0'],
 'migration-cockpit':['#FAFAFA','#18181B','#4F46E5'],
 'ivoire-chat':['#FFFFFF','#000000','#017A43'],
 'fib-informatique':['#F5F9FC','#0B1A26','#985000'],
 'distinction-tmc':['#F5F7F7','#1D2528','#772432'],
 'co-plastic':['#FFFFFF','#202020','oklch(0.43 0.14 132)'],
};
extras['badge-pointage']={name:'Badge & présence',headline:'Un badge.\nUne présence enregistrée.',premise:'Remplacer le relevé manuel par le badgeage des arrivées et des départs, puis donner au responsable une lecture claire des présences. Une solution adaptable à différentes organisations.',art:'badge'};
const aliases:Record<string,string>={'moro-app':'moro','upjunoo-pro':'upjunoo','upjunoo-pro-client':'upjunoo','upjunoo-driver':'upjunoo','bernabe-chat':'bernabe-bricolage'};
const categoryArt:Record<string,StoryArt>={ai:'voice',mobile:'conversation',fintech:'system',ecommerce:'commerce',vitrine:'architecture',cms:'dispatch',infra:'system',iot:'system',tool:'clipboard',saas:'system'};
export function storyFor(p:Project):ProjectStory{
 const key=aliases[p.slug]??p.slug;
 const brand=journeyProducts.find(b=>b.slug===key);
 const palette=sourcePalettes[key];
 return {name:p.title.split(' — ')[0],headline:p.title.split(' — ')[1]??p.title,premise:p.description,background:'#FAFAF6',ink:'#202222',accent:'#705C13',art:categoryArt[p.category],brandVerified:false,
 ...(palette?{background:palette[0],ink:palette[1],accent:palette[2],brandVerified:true}:{}),
 ...(brand?{name:brand.name,background:brand.bg,ink:brand.ink,accent:brand.accent,image:brand.image,format:brand.format,brandVerified:true}:{}),...extras[key]};
}
// Exclude entire presented product families, not only the exact parent slug.
const presented = new Set([...journeyProducts.map(p=>p.slug),...Object.keys(aliases)]);
export const otherProjects=projects.filter(p=>!presented.has(p.slug));
export const discoverySlugs=['echo','noche-pro','envoi','klippy','inayahome','dreamkeys'];
export const discoveryProjects=discoverySlugs.map(slug=>otherProjects.find(p=>p.slug===slug)!).filter(Boolean);
