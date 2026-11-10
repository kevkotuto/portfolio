export type PreviewStep={label:string;title:string;body:string;items:string[]};
export type ProductPreviewData={kind:string;kicker:string;surface:string;ink:string;accent:string;capture?:string;steps:PreviewStep[]};
export const productPreviews:Record<string,ProductPreviewData>={
 moro:{kind:'finance',kicker:'Votre quotidien, en clair.',surface:'#f4faf3',ink:'#173a2c',accent:'#15764b',capture:'/atelier/moro-accueil-actuel.png',steps:[
 {label:'Suivre',title:'Comprendre ce qui entre et sort.',body:'Revenus et dépenses se retrouvent au même endroit pour garder une lecture de son quotidien financier.',items:['Revenus','Dépenses','Transactions']},
 {label:'Organiser',title:'Donner une place à ses projets.',body:'Relier ses mouvements et ses objectifs à des projets concrets, puis retrouver leur suivi.',items:['Un objectif','Un projet','Un suivi']},
 {label:'Avancer',title:'Explorer la suite.',body:'Financement, éducation financière et assistant IA prolongent les outils de gestion.',items:['Financement','EDUFI','Assistant IA']}]},
 'generale-ci':{kind:'commerce',kicker:'Du besoin à la livraison.',surface:'#171724',ink:'#f4f5fc',accent:'#76dcff',steps:[
 {label:'Trouver',title:'La recherche commence par une idée.',body:'Un mot, une image ou une conversation : plusieurs entrées pour découvrir les produits et leurs variantes.',items:['Recherche par image','Variantes','Conversation IA']},
 {label:'Choisir',title:'Se projeter avant de commander.',body:'La marketplace relie le catalogue aux expériences d’essayage et à la préparation du panier.',items:['Catalogue','Essayage','Panier']},
 {label:'Recevoir',title:'La commande relie toute une équipe.',body:'Vendeur, livreur et assistance accompagnent le client au-delà du paiement.',items:['Vendeur','Livraison','SAV connecté']}]},
 gescom:{kind:'stock',kicker:'Le commerce, au quotidien.',surface:'#f1f7fc',ink:'#173b58',accent:'#125b91',steps:[
 {label:'Stock',title:'Savoir ce qui est disponible.',body:'Retrouver les articles et suivre les mouvements de stock dans le logiciel métier.',items:['Articles','Entrées','Sorties']},
 {label:'Vendre',title:'Garder le fil commercial.',body:'De la demande à la vente, les documents et les opérations restent dans le même environnement.',items:['Clients','Documents','Ventes']},
 {label:'Relier',title:'Faire circuler la bonne information.',body:'Le bureau, les services et les applications associés prolongent les opérations du commerce.',items:['Bureau','Synchronisation','Services']}]},
 genmail:{kind:'mail',kicker:'Les échanges font partie du métier.',surface:'#f4f7ff',ink:'#173452',accent:'#355fbc',capture:'/atelier/genmail.jpg',steps:[
 {label:'Rassembler',title:'Plusieurs comptes. Un bureau.',body:'Microsoft 365, Gmail, iCloud, IMAP et POP se consultent dans la même messagerie.',items:['Microsoft 365','Gmail / iCloud','IMAP / POP']},
 {label:'Traiter',title:'Passer du message à l’action.',body:'Retrouver les échanges, lire les pièces jointes et organiser les conversations depuis le bureau.',items:['Rechercher','Consulter','Organiser']},
 {label:'Connecter',title:'Retrouver le contexte métier.',body:'La messagerie s’inscrit dans la suite GESCOM pour rapprocher les échanges des outils de travail.',items:['Une conversation','Un contexte','GESCOM']}]},
 'bernabe-bricolage':{kind:'workshop',kicker:'Le magasin se prolonge ici.',surface:'#fffaf5',ink:'#252320',accent:'#c91325',steps:[
 {label:'Explorer',title:'Trouver de quoi réaliser son projet.',body:'Un catalogue structuré pour retrouver les produits et parcourir les univers du magasin.',items:['Catalogue','Rayons','Recherche']},
 {label:'Comprendre',title:'Les informations qui aident à choisir.',body:'La fiche produit rapproche les caractéristiques de l’article des besoins du client.',items:['Produit','Caractéristiques','Choix']},
 {label:'Relier',title:'Le commerce réel derrière le site.',body:'Les intégrations métier relient le catalogue en ligne aux contraintes du groupe Bernabé.',items:['Magasin','Catalogue en ligne','Outils métier']}]},
 'upjunoo-pro-client':{kind:'mobility',kicker:'Une ville. Plusieurs services.',surface:'#f0faf9',ink:'#103e45',accent:'#247f8d',capture:'/atelier/upjunoo-accueil-actuel.png',steps:[
 {label:'Choisir',title:'De quoi avez-vous besoin ?',body:'Course, livraison, location et fret partagent une entrée commune, avec des parcours adaptés.',items:['Course / livraison','Location','Fret']},
 {label:'Préparer',title:'Donner une destination à la demande.',body:'Adresses, carte, itinéraire et estimation accompagnent la préparation du service.',items:['Adresse','Itinéraire','Estimation']},
 {label:'Suivre',title:'Rester informé après la réservation.',body:'Le suivi, les messages et l’assistance accompagnent la réalisation de la demande.',items:['Réservation','Suivi','Assistance']}]},
 'upjunoo-driver':{kind:'dispatch',kicker:'L’autre côté de la course.',surface:'#102e33',ink:'#effbf7',accent:'#facc15',capture:'/atelier/upjunoo-driver-navigation.png',steps:[
 {label:'Recevoir',title:'Une offre arrive au chauffeur.',body:'Disponibilité et dispatch relient la demande client à l’application chauffeur.',items:['Disponible','Offre reçue','Prise en charge']},
 {label:'Rejoindre',title:'La carte devient l’outil de travail.',body:'Le guidage, la communication et les informations de course accompagnent le trajet vers le passager.',items:['Position','Guidage','Passager']},
 {label:'Terminer',title:'Accompagner le cycle de course.',body:'Les étapes de réalisation et le portefeuille prolongent le parcours après la prise en charge.',items:['Course','Arrivée','Portefeuille']}]},
 tamamedia:{kind:'editorial',kicker:'Le temps de comprendre.',surface:'#fffef7',ink:'#242320',accent:'#37569a',steps:[
 {label:'Lire',title:'Une histoire, plusieurs angles.',body:'Les formats et les dossiers organisent l’information pour aller plus loin qu’une actualité isolée.',items:['Enquêtes','Reportages','Dossiers']},
 {label:'Explorer',title:'L’information change de format.',body:'Podcasts, vidéo et vérification ouvrent d’autres façons de comprendre un sujet.',items:['Podcasts','Tama Média TV','Fact-checking']},
 {label:'Publier',title:'Une rédaction derrière chaque page.',body:'Édition, médias et outils de diffusion accompagnent le travail de publication.',items:['Rédaction','Publication','Diffusion']}]},
 yapasgachis:{kind:'food',kicker:'Rien ne se perd.',surface:'#f3fae9',ink:'#18523e',accent:'#08704d',steps:[
 {label:'Découvrir',title:'Donner une autre chance aux invendus.',body:'La marketplace rapproche les offres des commerces et les personnes qui souhaitent en profiter.',items:['Commerces','Offres','Découverte']},
 {label:'Réserver',title:'Passer de l’offre à la commande.',body:'Le parcours de réservation permet de choisir une offre et d’organiser sa récupération.',items:['Choisir','Commander','Retrouver']},
 {label:'Récupérer',title:'Le parcours se termine sur place.',body:'Le retrait relie le consommateur au commerce et remet les produits dans le circuit de consommation.',items:['Réservation','Commerce','Retrait']}]},
};
export function previewKey(slug:string){return ({'moro-app':'moro',upjunoo:'upjunoo-pro-client','upjunoo-pro':'upjunoo-pro-client'} as Record<string,string>)[slug]??slug;}
