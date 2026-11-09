# Palettes des scènes produit

Les fonds reprennent les identités des applications. La signature du portfolio reste blanc #FAFAF6, noir doux #202222 et jaune poussin #FFE477, selon le choix de Kevine.

| Produit | Source vérifiée | Application dans la scène |
|---|---|---|
| Akili | `expo/akili-mobile-suite/akili-ai/constants/Colors.ts` et `components/GradientBackground.tsx` | Dégradé à 225 degrés : #DAFF8D à 0 %, #F8FBFF à 40 %, #DDEBFF à 100 %. Texte #1F2937, titre et lien #050C91. Le dossier `expo/akili-apps` est ancien et ne sert plus de référence de palette. |
| Générale CI | `generale-ci/web/src/app/globals.css` | Fond #0F0F1A, surface #1A1A2E, texte #F5F5F7 et accent #5FD6FF. |
| GESCOM | `gescom/src/renderer/src/global.css` et `gescom/build/icon-mac.png` | Bleu métier #1779B8 / #0E5D95 ; fond dérivé des surfaces #D8E8F4. Icône native avec alpha. |
| GenMail | `genmail/site/index.html` | Marine #0B3A63, marine foncé #072845 et bleu #1F6FBF. |
| Mr. Bricolage | `autres/yeshigroup/yg.bricolage.website/app/globals.css` et `app/layout.tsx` | Rouge HSL 355 100% 50% (#FF0015), blanc et Open Sans. Visuel conseil et logo du projet. |
| Upjunoo Pro | `expo/upjunoo-pro-app/constants/theme.ts` | Teal #247F8D, surface #E6F3F5, teal profond #0F3D45. Capture utilisateur du 9 novembre 2026 à 15 h 32. |
| Tama Media | `nextjs/tamamedia-refonte/app/globals.css` | Blanc, noir #231F20, jaune #FAD805 et bleu #3E5EAB. |
| Yapasgachis | `yapasgachis/web/src/app/globals.css` | Fond #FAFAF7, vert #00845F / #006B4D et accent #C8E64E. |

Les photographies et captures gardent leurs couleurs d'origine. Les fonds de scène sont des compositions du portfolio à partir de ces valeurs : ils ne prétendent pas être des captures de l'application.

La transition de fond est déclenchée par le changement de produit et se termine en 550 ms. Le scroll déplace les contours et les filigranes ; il ne maintient plus un mélange de deux palettes à l'arrêt. L'ancien système de huit fonds dont l'opacité suivait le scroll pouvait rester gris sous du texte bleu.

## Moro

Ajouté au parcours principal après Akili et à la sélection. Source : `expo/moro/constants/theme.ts` : primaire #23B574, secondaire #F7921E, texte #11181C, fond #FFFFFF. Vert foncé #15764B pour les titres lisibles sur fond clair. Capture d’accueil fournie par l’utilisateur le 9 novembre 2026, conservée sans retouche dans `/atelier/moro-accueil-actuel.png`. La durée du parcours dépend maintenant du nombre de projets (120 svh par projet), afin de garder le même rythme après ajout.
