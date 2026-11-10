'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { ProjectStory } from '@/lib/data/project-stories';
import assets from '@/lib/data/catalog-assets.json';
import './catalog-artwork.css';

// These are editorial covers, never invented product screenshots or replacement logos.
const covers: Record<string, {label:string; motif:string; layout?:string; bg?:string; ink?:string}> = {
 genmail:{label:'Tous vos échanges. Un bureau.',motif:'envelope',layout:'screen'},
 moro:{label:'FINANCES · PROJETS · FINANCEMENT',motif:'orbit',layout:'brand'},
 'moro-app':{label:'Le quotidien, en clair.',motif:'ledger',layout:'phone'},
 akili:{label:'Questionner. Vérifier. Comprendre.',motif:'sun',layout:'brand'},
 upjunoo:{label:'UN ÉCOSYSTÈME EN MOUVEMENT',motif:'city',layout:'wordmark'},
 'upjunoo-pro':{label:'COURSES / LIVRAISON / FRET',motif:'roads',layout:'wordmark'},
 'upjunoo-pro-client':{label:'La ville à portée de main.',motif:'pin',layout:'phone'},
 'upjunoo-driver':{label:'De la demande à la destination.',motif:'route',layout:'phone'},
 'generale-mode':{label:'LE STYLE EN MOUVEMENT',motif:'hanger',layout:'seal'},
 gestot:{label:'PLUSIEURS SOCIÉTÉS. UNE VISION.',motif:'branches',bg:'#111111',ink:'#ffffff'},
 yapasgachis:{label:'Rien ne se perd.',motif:'leaf',layout:'seal'},
 'tontine-ivoire':{label:'AVANCER ENSEMBLE',motif:'circle',layout:'seal'},
 myb12:{label:'B6 / B12 · LIVRAISON DE GAZ',motif:'cylinder',layout:'icon',bg:'#0759F5',ink:'#ffffff'},
 trackmybox:{label:'Chaque objet trouve sa place.',motif:'box',layout:'seal'},
 'noche-pro':{label:'La voix donne le rythme.',motif:'lines',layout:'icon'},
 'bernabe-bricolage':{label:'DU RAYON À L’ÉCRAN',motif:'tools',layout:'screen'},
 'bernabe-chat':{label:'LE CONSEIL, EN CONVERSATION',motif:'bubbles',bg:'#F4F1E9',ink:'#302E67'},
 'generale-ci':{label:'DU PANIER À LA LIVRAISON',motif:'parcel',layout:'screen'},
 'gedis-lub':{label:'LA PRÉCISION AU SERVICE DU MOTEUR',motif:'drop',layout:'wordmark',bg:'#ffffff',ink:'#A71920'},
 'maison-des-perles':{label:'LES DÉTAILS FONT LA DIFFÉRENCE',motif:'cake',bg:'#FFF4F7',ink:'#AF2569'},
 inayahome:{label:'MATIÈRES / ESPACES / SUR-MESURE',motif:'arch',layout:'photo'},
 dreamkeys:{label:'L’ART DE SE PROJETER',motif:'key',layout:'photo'},
 'jtb-ci':{label:'RENCONTRER LES SAVOIR-FAIRE',motif:'event'},
 tamamedia:{label:'LES RÉCITS QUI NOUS RELIENT',motif:'print',layout:'brand'},
 nappylocks:{label:'UNE IDENTITÉ QUI S’AFFIRME',motif:'curls',layout:'brand',bg:'#F8F0E8',ink:'#322119'},
 agora:{label:'PRODUITS & SERVICES',motif:'market',layout:'seal'},
 'palais-des-sports':{label:'LE TERRAIN DES RENCONTRES',motif:'court'},
 'finance-chat':{label:'Mettre des mots sur les chiffres.',motif:'finance',bg:'#E9F4F5',ink:'#126073'},
 spiritueux:{label:'LA SÉLECTION DU CAVISTE',motif:'bottle'},
 'yu-card':{label:'LE PLAISIR D’OFFRIR',motif:'gift',layout:'wordmark'},
 mytools:{label:'DES OUTILS. À PORTÉE DE MAIN.',motif:'toolkit',layout:'seal',bg:'#EAF0F2',ink:'#153947'},
 'sms-gateway':{label:'DU MESSAGE AU RÉSEAU',motif:'signal',bg:'#142B36',ink:'#A8DAD9'},
 'file-share':{label:'UN FICHIER. UN LIEN.',motif:'share',bg:'#EDF0FD',ink:'#35437D'},
 'kev-storage':{label:'GARDER. CLASSER. RETROUVER.',motif:'storage',bg:'#EAE6DF',ink:'#443A32'},
 ultron:{label:'EN COULISSES, ÇA TOURNE.',motif:'rack',bg:'#101719',ink:'#B1D0B7'},
 'supervision-yeshi':{label:'UN REGARD SUR L’ENSEMBLE',motif:'radar',bg:'#14283D',ink:'#A9D7F6'},
 'imci-catalog':{label:'LES RÉFÉRENCES DU MÉTIER',motif:'shelves',layout:'brand'},
 credoptia:{label:'RELier LES SERVICES FINANCIERS'.toUpperCase(),motif:'bridge',layout:'seal',bg:'#F7F2FC',ink:'#4A1581'},
 'barcode-rimco':{label:'DU CODE AU PRODUIT',motif:'barcode',bg:'#F9F5EF',ink:'#242424'},
 'ultron-build':{label:'DU SOURCE À L’APPLICATION',motif:'pipeline',bg:'#192125',ink:'#A3D5A5'},
 gescom:{label:'LE MÉTIER, AU PREMIER PLAN',motif:'receipt',layout:'brand'},
 'fne-yeshi':{label:'DE LA FACTURE À LA CERTIFICATION',motif:'stamp',layout:'wordmark'},
 echo:{label:'LA PAROLE DEVIENT MATIÈRE',motif:'sound',layout:'icon'},
 envoi:{label:'LE BON MESSAGE. LE BON PUBLIC.',motif:'send',bg:'#12151D',ink:'#7EA0FF'},
 'migration-cockpit':{label:'LES SYSTÈMES SE REJOIGNENT',motif:'migration'},
 'ivoire-chat':{label:'LES CONVERSATIONS CONTINUENT',motif:'chat',layout:'brand'},
 klippy:{label:'⌘ C · TOUT RESTE À PORTÉE',motif:'clips',layout:'icon'},
 vigil:{label:'VEILLER SUR LE PARC',motif:'shield',bg:'#101F2A',ink:'#8ED5D3'},
 'fib-informatique':{label:'L’INFORMATIQUE AU QUOTIDIEN',motif:'monitor',layout:'wordmark',bg:'#EDF8FE',ink:'#0D75A6'},
 'distinction-tmc':{label:'PRENDRE LA PAROLE',motif:'mic'},
 'badge-pointage':{label:'UN BADGE. UNE PRÉSENCE.',motif:'badge'},
 'candy-hop':{label:'UN SAUT APRÈS L’AUTRE',motif:'game',bg:'#FCE8ED',ink:'#8D2E5E'},
 forge:{label:'OUVRIR LE CHAMP DES POSSIBLES',motif:'terminal',bg:'#161A20',ink:'#E8BA76'},
 'esp32-iot':{label:'DU CODE AU MONDE PHYSIQUE',motif:'chip',bg:'#133F36',ink:'#C6E4C4'},
 takr:{label:'UNE IDÉE. DEUX APPROCHES.',motif:'check',layout:'icon',bg:'#EEEAF9',ink:'#50407C'},
 'co-plastic':{label:'LA MATIÈRE SE TRANSFORME',motif:'recycle',layout:'wordmark'},
};

const drawings: Record<string,string> = {
 envelope:'M110 110H490V265H110ZM110 110L300 220L490 110M110 265L230 190M490 265L370 190',
 orbit:'M180 180A120 80 0 1 0 420 180A120 80 0 1 0 180 180M300 80V280M210 110L390 250M210 250L390 110',
 ledger:'M150 85H450V285H150ZM190 130H330M190 175H410M190 220H360M190 255H280',
 sun:'M300 120A65 65 0 1 0 300 250A65 65 0 1 0 300 120M300 65V95M300 275V305M180 185H210M390 185H420M215 100L237 122M365 255L387 277',
 city:'M70 280V180H145V280M165 280V110H245V280M265 280V150H355V280M375 280V80H445V280M465 280V200H530V280',
 roads:'M80 80L500 280M90 270L490 70M110 170H490M210 65V290M395 65V290',
 pin:'M300 275C180 155 250 85 300 85S420 155 300 275ZM275 145A25 25 0 1 0 325 145A25 25 0 1 0 275 145',
 route:'M95 250H210Q245 250 245 215V140Q245 105 280 105H480M450 80L480 105L450 130M95 235V265',
 hanger:'M270 110Q270 65 310 85Q340 100 300 135V160L120 260H480L300 160',
 branches:'M300 80V160M130 245V160H470V245M300 160V245M105 245H155V285H105ZM275 245H325V285H275ZM445 245H495V285H445Z',
 leaf:'M300 280V150Q160 95 200 200Q230 250 300 250M300 215Q420 200 400 100Q300 115 300 215',
 circle:'M220 110Q300 55 380 110M410 150Q445 220 380 265M330 285Q245 310 195 240M180 190Q175 140 205 115M360 85L380 110L350 120M395 235L380 265L355 245M220 250L195 240L190 270M190 140L205 115L230 135',
 cylinder:'M250 115V80H350V115M245 125Q215 140 215 175V265H385V175Q385 140 355 125ZM235 280H365M270 80V55H330V80',
 box:'M150 135L300 75L450 135V255L300 315L150 255ZM150 135L300 195L450 135M300 195V315M225 105L375 165',
 lines:'M120 90H440M120 140H480M120 190H390M120 240H460M85 180L100 190L85 200',
 tools:'M200 80L360 280M350 75L170 285M150 90L205 65L245 115L190 155Z',
 bubbles:'M95 95H355V220H180L125 260V220H95ZM385 140H495V285H405L370 310V260',
 parcel:'M170 120H430V275H170ZM170 120L230 75H370L430 120M300 120V275M270 175H330',
 drop:'M300 65C270 120 205 175 205 220A95 80 0 0 0 395 220C395 175 330 120 300 65ZM245 220Q245 260 285 265',
 cake:'M170 270V200H430V270ZM200 200V140H400V200M230 140V100H370V140M300 100V65M170 225Q200 255 230 225T290 225T350 225T410 225',
 arch:'M170 285V150A130 90 0 0 1 430 150V285M215 285V155A85 50 0 0 1 385 155V285',
 key:'M230 155A65 65 0 1 0 100 155A65 65 0 1 0 230 155M230 155H490V205H450V175H400V205H365V155',
 event:'M130 100H470V280H130ZM130 155H470M210 75V125M390 75V125M180 195H230V240H180ZM275 195H325V240H275ZM370 195H420V240H370Z',
 print:'M120 90H480V285H120ZM150 120H450M150 150H270V220H150ZM300 150H450M300 180H450M300 210H410M150 250H450',
 curls:'M170 270C80 180 250 80 230 170S340 290 310 170S380 65 410 150S350 260 450 280',
 market:'M130 140H470L440 80H160ZM150 140V280H450V140M200 280V200H280V280M320 180H410V235H320Z',
 court:'M100 90H500V290H100ZM300 90V290M250 190A50 50 0 1 0 350 190A50 50 0 1 0 250 190M100 140H175V240H100M500 140H425V240H500',
 finance:'M110 90H490V245H230L170 285V245H110ZM180 210V170M240 210V145M300 210V120M360 210V155M420 210V110',
 bottle:'M265 75H335V140Q380 170 380 205V285H220V205Q220 170 265 140ZM265 95H335M220 210H380M220 255H380',
 gift:'M135 150H465V275H135ZM120 115H480V150H120ZM300 115V275M300 115C190 125 195 45 250 65ZM300 115C410 125 405 45 350 65Z',
 toolkit:'M120 130H480V280H120ZM235 130V85H365V130M120 185H480M270 170H330V205H270Z',
 signal:'M110 100H285V220H175L130 250V220H110M330 130Q405 170 330 210M375 95Q500 170 375 245M420 65Q570 170 420 275',
 share:'M100 90H230L265 125H330V280H100ZM210 220H470M420 170L470 220L420 270',
 storage:'M160 110Q300 50 440 110Q300 170 160 110V260Q300 320 440 260V110M160 185Q300 245 440 185',
 rack:'M160 75H440V135H160ZM160 155H440V215H160ZM160 235H440V295H160ZM190 105H200M190 185H200M190 265H200M340 105H410M340 185H410M340 265H410',
 radar:'M180 180A120 120 0 1 0 420 180A120 120 0 1 0 180 180M220 180A80 80 0 1 0 380 180A80 80 0 1 0 220 180M300 180L385 95M300 60V300M180 180H420',
 shelves:'M110 90H490V280H110ZM110 185H490M200 90V185M330 90V185M240 185V280M400 185V280',
 bridge:'M90 265H510M120 265V120M480 265V120M120 120Q300 320 480 120M210 195V265M300 220V265M390 195V265',
 barcode:'M100 100V260M125 100V260M155 100V260M165 100V260M200 100V260M225 100V260M240 100V260M280 100V260M310 100V260M320 100V260M350 100V260M390 100V260M405 100V260M440 100V260M470 100V260M490 100V260',
 pipeline:'M80 135H180V235H80ZM250 135H350V235H250ZM420 135H520V235H420ZM180 185H250M350 185H420M105 185L125 205L155 165M275 185L295 205L325 165M445 185L465 205L495 165',
 receipt:'M200 70H400V290L375 275L350 290L325 275L300 290L275 275L250 290L225 275L200 290ZM240 120H360M240 165H360M240 210H320',
 stamp:'M160 80H350L420 150V290H160ZM350 80V150H420M220 200L260 240L350 160',
 sound:'M100 170V190M130 145V215M160 110V250M190 140V220M220 85V275M250 120V240M280 160V200M310 140V220M340 100V260M370 80V280M400 130V230M430 155V205M460 130V230M490 165V195',
 send:'M100 120L490 70L335 290L270 195ZM270 195L490 70M270 195L250 270L300 245',
 migration:'M100 100H230V270H100ZM370 100H500V270H370ZM250 150H350M320 120L350 150L320 180M350 230H250M280 200L250 230L280 260',
 chat:'M105 90H365V220H190L140 260V220H105ZM395 155H495V285H430L395 310M150 145H315M150 180H260',
 clips:'M180 90H360V250H180ZM215 120H395V280H215ZM250 150H430V310H250M285 195H395M285 230H370',
 shield:'M300 65L430 115V200Q430 260 300 305Q170 260 170 200V115ZM230 180L280 230L370 135',
 monitor:'M120 85H480V245H120ZM300 245V290M230 290H370M145 215H455',
 mic:'M265 100A35 35 0 0 1 335 100V180A35 35 0 0 1 265 180ZM230 165V180A70 70 0 0 0 370 180V165M300 250V295M250 295H350',
 badge:'M200 85H400V295H200ZM270 105H330M275 165A25 25 0 1 0 325 165A25 25 0 1 0 275 165M250 235Q300 185 350 235M250 265H350',
 game:'M80 280H190V240H270V200H350V160H430V120H510M300 95H330V125H300ZM350 65H380V95H350ZM400 45H430V75H400Z',
 terminal:'M100 85H500V285H100ZM100 125H500M145 165L185 200L145 235M220 235H320M125 105H130M145 105H150M165 105H170',
 chip:'M220 105H380V265H220ZM255 140H345V230H255ZM180 130H220M180 170H220M180 210H220M180 250H220M380 130H420M380 170H420M380 210H420M380 250H420M245 65V105M285 65V105M325 65V105M365 65V105M245 265V305M285 265V305M325 265V305M365 265V305',
 check:'M170 190L260 275L450 80M150 90H260M150 125H220',
 recycle:'M230 115L300 60L370 160M345 110L370 160L315 160M400 195L435 285H305M350 260L305 285L350 310M240 285H150L215 175M215 225V175H165',
};
const logos:Record<string,string>={...assets,akili:'/atelier/akili-logo.png',moro:'/logo/moro.png',gescom:'/atelier/gescom-transparent.png',tamamedia:'/atelier/tamamedia.svg',nappylocks:'/logo/1.png','imci-catalog':'/projets/logos/imci.png','ivoire-chat':'/atelier/brands/ivoire-chat.webp'};

export function catalogCoverRatio(slug:string){
 const layout=covers[slug]?.layout;
 if(layout==='phone')return '3 / 4';
 if(layout==='photo')return slug==='inayahome'?'4 / 5':'5 / 4';
 if(layout==='screen')return '4 / 3';
 if(layout==='wordmark')return '7 / 4';
 if(layout==='icon')return '1 / 1';
 return '6 / 5';
}

export default function CatalogArtwork({slug,story}:{slug:string;story:ProjectStory}){
 const c=covers[slug];
 if(!c) return null;
 const photo=['photo','phone','screen'].includes(c.layout??'')&&story.image;
 const logo=logos[slug];
 return <div className={`catalog-cover cover-${c.layout??'drawing'} cover-${slug}`} style={{'--cover-bg':c.bg??story.background,'--cover-ink':c.ink??story.accent} as CSSProperties} aria-hidden="true">
  <svg className="cover-motif" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid meet"><path d={drawings[c.motif]} fill="none" stroke="currentColor" strokeWidth={c.motif==='barcode'?5:3} strokeLinecap="round" strokeLinejoin="round"/></svg>
  {photo?<div className="cover-media"><Image src={story.image!} alt="" fill sizes="(max-width:700px) 90vw, (max-width:1000px) 45vw, 30vw"/></div>:logo?<div className="cover-logo"><Image src={logo} alt="" unoptimized fill sizes="(max-width:700px) 60vw, 20vw"/></div>:<span className="cover-title">{story.name}</span>}
  <span className="cover-label">{c.label}</span>
 </div>;
}
