# Audit de direction — 9 novembre 2026

## État des preuves
Analyse des contenus publics, de la structure accessible de Lando Norris dans Chrome, des sources publiées par les créateurs et des captures du portfolio fournies par Kevine. Les captures natives du navigateur reviennent en miniatures déformées : audit visuel plein format et contrôle mobile des cinq références non terminés. Aucune mesure FPS ou Core Web Vitals revendiquée.

## Diagnostic du prototype
P0 : portrait recadré hors écran pendant le scroll ; titre occulté ; panneaux superposés illisibles.
P1 : récit générique sans dates ni preuves visuelles ; interactions sans information supplémentaire ; longueur artificielle ajoutée au scroll ; faux monogrammes à la place des identités réelles.
P2 : grande surface citron décorative, répétition des cartes, trop de petites légendes et manque de variation dans le rythme.
Les captures utilisateur priment sur les tests de compilation : un build réussi ne valide pas la direction artistique.

## Références et traduction envisagée

### Lando Norris — https://landonorris.com/
La structure publique articule identité, message personnel, photographies légendées, deux facettes du parcours, objets personnels (casques), partenaires et contact. L'objet et la personne constituent le sujet, au lieu d'une grille de compétences.
À traduire : portrait et identité reconnaissables, réalisations concrètes légendées, objets propres à Kevine (interfaces et produits). Ne pas reprendre le vert et les grosses lettres comme recette suffisante. Les mécanismes WebGL exacts ne sont pas établis par une lecture HTML.

### Symphony of Vines — https://symphonyofvines.unseen.co/
Quatre chapitres construisent une progression causale ; chaque chapitre propose une action différente. Le studio documente Three.js et l'usage de Theatre.js pour composer les mouvements de caméra et autres paramètres en timeline.
Source primaire : https://unread.unseen.co/the-symphony-of-vines-dev-insights-c284cc4e8aa0
À traduire : même espace traversé, début/milieu/fin définis pour chaque transition, histoire portée par la transformation des éléments. Ne pas imiter cet effet avec des cartes qui tournent sans contexte.

### Ribbit — https://ribbit.dk/
Le travail du studio est montré par projets et médias. Son processus publié passe par recherche, storyboard, animatique, puis animation. Source : https://ribbit.dk/process/
À traduire : préparer les plans et visuels avant la timeline ; alterner plans larges, détails et moments de lecture. Une séquence courte de vraies interfaces vaut mieux qu'une rotation permanente d'un élément décoratif.

### Ponpon Mania — https://ponpon-mania.com/
BD interactive organisée en chapitres, identité d'auteur et univers illustré dédié. Le détail des transitions reste à observer en capture exploitable.
À traduire : petites découvertes liées au récit, transitions motivées entre scènes, tonalité personnelle. Ne pas recopier l'univers BD ni ajouter du jeu sans rapport avec les projets.

### Rishi Thakor — https://therishithakor.com/
Organisation des disciplines par portes, parcours chronologique et carte manipulable ; contact accessible indépendamment du récit.
À traduire : points d'entrée clairs, chronologie factuelle, navigation CV/contact toujours accessible. Ne pas reproduire les jauges de compétences arbitraires.

## Storyboard à produire avant la prochaine refonte
1. Présentation : portrait cadré, nom, rôle et Abidjan. Lisibilité garantie avant tout mouvement.
2. Parcours réel : étapes et dates issues du CV, accompagnées de livrables ; aucun récit d'origine inventé.
3. Commerce et métier : écran réel Mr. Bricolage, passage vers GESCOM et Générale CI, rôle de Kevine expliqué.
4. Produits et plateformes : Akili, Upjunoo, Tama Media, Yapasgachis ; chaque projet a sa scène, son média et son lien.
5. Bureau et durée : GenMail, suite GESCOM, maintenance et exploitation.
6. Contact et CV : accès direct, fin de récit courte.

## Règles de production
Un propriétaire par propriété animée ; un scroll de référence ; positions recalculées selon le viewport. Tester aussi les retours arrière et les sauts par ancres. Les textes restent HTML, les rendus 3D portent les objets. Versions mobiles composées séparément ; mouvement réduit = contenu stable et complet. Ne pas augmenter artificiellement la distance de scroll pour simuler une richesse narrative.

## Ressources installées
- Impeccable : https://github.com/pbakaus/impeccable (critique, audit, composition et motion). Skill téléchargé, lanceur binaire non exécuté.
- GSAP : https://github.com/greensock/gsap-skills — core, timeline, scrolltrigger, react, performance.
- Three.js : https://github.com/CloudAI-X/threejs-skills — fundamentals, animation, interaction, performance, react-three-fiber.
11 skills installés, disponibles au prochain tour. Les versions techniques et exemples doivent être confrontés au projet avant adoption.

## Assets
973 fichiers candidats recensés dans les projets prioritaires (inclut logos, duplications, icônes et visuels non retenus). Index : inventaire/assets.json.
Premier contrôle visuel : capture GenMail exploitable sous réserve de confirmer les données de démonstration ; visuel Akili trouvé = illustration promotionnelle, pas capture d'interface ; capture Générale CI chauffeur = état de test vide, à remplacer par un scénario démonstratif pertinent. Aucun de ces éléments n'est encore intégré au portfolio.
