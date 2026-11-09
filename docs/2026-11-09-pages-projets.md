# Parcours et histoires des projets

## Accueil
Le parcours immersif présente 9 produits. La section « Des idées. Devenues réelles. » en présente d’autres : 6 entrées mises en scène, puis un index filtrable de 36 projets. Les familles Moro, Upjunoo et Bernabé déjà présentées sont exclues de cette section. Les données du parcours sont centralisées dans `lib/data/journey.ts`.

## Pages détail
Les 56 fiches passent à une lecture éditoriale : intention, usage, rôle, construction, capacités concrètes, accès au produit lorsqu’il est public. Pas de chiffres de résultat inventés. Le contenu technique existant est conservé. Les illustrations de principe sont explicitement distinguées des interfaces.

Les chartes des 9 produits du parcours proviennent de l’audit précédent. Les autres palettes vérifiées viennent des fichiers locaux suivants, sous Documents/Projets :
- Echo : echo/lib/theme.ts
- Noche : react/noche-pro/src/renderer/src/assets/main.css
- Envoi : nextjs/envoi/src/app/globals.css
- Inaya Home : nextjs/inayahome/app/globals.css
- DreamKeys : nextjs/dreamkeysimmobilier/app/globals.css
- Générale Mode, Agora, Palais des Sports, Spiritueux : expo/<projet>/constants/theme.ts
- TrackMyBox : expo/trackmybox/constants/colors.ts
- Tontine Ivoire : expo/tontineIvoire/lib/theme.ts
- Yu Card : expo/yu_card/constants/Colors.ts
- GESTOT, Maison des Perles, JTB, FNE Yeshi, Co-Plastic : nextjs/<projet>/app/globals.css
- FIB : nextjs/fib-informatique/src/app/globals.css
- Migration Cockpit : migration-cockpit/src/app/globals.css
- Ivoire Chat : ivoire-chat/src/constants/colors.ts
- Distinction : distinction-tmc/src/app/globals.css
Les accents trop clairs sont assombris pour le texte. Pour les projets sans charte confirmée, la palette sobre du portfolio reste un traitement éditorial, pas une charte prétendument officielle.

## Exception confidentielle
Seul le projet de badgeage est confidentiel, selon la correction explicite de l’utilisateur. Présentation publique anonymisée « Badge & présence », route `/projets/badge-pointage`. Suppression du nom client et de l’URL de production dans les données publiques. Pas de lien vers le système du client. L’ancienne route nominative n’est plus générée.

## Démo à développer
- Démo autonome du badgeage, avec personnes et présences entièrement fictives.
- Parcours : simuler un badge, voir une arrivée / un départ, consulter le tableau des présences.
- Pas d’API, de compte ou de données issus du client.
- Remise à zéro des données de démonstration.
- Mention permanente « Démonstration — données fictives ».
- État actuel affiché : « Démo à venir ». Aucun bouton d’accès fictif.
- L’implémentation de cette démo reste à faire ; cette étape concerne la présentation portfolio.

## Vérifications
TypeScript et contrôle des diff. Contrôle automatique d’absence de doublon entre parcours et section complémentaire, existence des assets et chargement des routes. Build de production isolé sur disque externe. Contrôle visuel Safari : section complémentaire observée ; inspection complète des 56 pages et des formats mobiles encore à faire.

## Corrections de statut
Yapasgachis : applications mobiles en production, confirmé par l’utilisateur le 9 novembre 2026. Les mentions limitant la distribution à TestFlight ont été retirées.

## Résultat des contrôles
56 routes de détail répondent HTTP 200. Seule `badge-pointage` est confidentielle ; absence du nom du client dans les données et le HTML des 56 pages, ancienne route nominative en 404. Build Next.js : 68 pages générées. Correction du chargement de la photo PDF sur les chemins de disque contenant un espace (image transmise en data URI). CV PDF HTTP 200. Capture Safari de Badge & présence inspectée : titre, illustration et mention anonymisée visibles. 35 fiches ont une palette issue des sources des produits ; les autres restent à approfondir visuellement.
