# Portfolio — atelier immersif

Direction validée par Kevine : atelier immersif, enrichi de la référence Lando Norris et du portrait détouré approuvé. Première livraison : accueil navigable, catalogue existant, CV et contact accessibles.

## Composition
Fond ivoire, encre vert profond et accent citron. Typographie ample, portrait central superposé au nom, légendes éditoriales et mise en scène en profondeur. Navigation courte et visible. Le scroll fait évoluer la perspective des panneaux produits ; aucune obligation de traverser une animation pour accéder au contenu.

## Contenu
Priorités : Akili, Générale CI, GESCOM, Mr. Bricolage, Upjunoo, Tama Media, Yapasgachis et GenMail. Catalogue complet accessible séparément. Les anciens marqueurs confidentiels ne bloquent plus les présentations sur instruction utilisateur ; secrets et données clients exclus. Le serveur 176 temporairement indisponible ne signifie pas que les produits sont abandonnés.

191 dépôts GitHub et 220 dossiers locaux candidats recensés, à dédupliquer et examiner ; ces nombres ne sont pas des nombres de produits livrés. Pas de métrique commerciale inventée.

## Technique et accès
Next.js existant conservé pour les routes projets, CV et PDF. Accueil remplacé par une composition nouvelle. Transformations CSS 3D pilotées par le scroll via Motion ; ce premier rendu n'est pas un environnement WebGL. Portrait local PNG alpha. État réduit pour prefers-reduced-motion. Liens HTML accessibles au clavier, contenu disponible sans animation. Sur mobile, panneaux empilés, tailles fluides, aucune navigation horizontale imposée.

## Contact
WhatsApp et email directs depuis les coordonnées existantes. LeTexto à intégrer ultérieurement côté serveur après vérification de sa configuration ; aucun faux succès SMS ou envoi de test à un tiers.

## Vérification
TypeScript et build, inspection visuelle de l'accueil et des tailles mobile/desktop, navigation vers catalogue et CV. Production inchangée jusqu'à livraison vérifiée. Caches lourds sur disque externe.
