# Bryan Dupressoir — Portfolio et CV

Portfolio bilingue destiné aux recruteurs : parcours informatique, réalisations,
compétences, contact et CV PDF d’une page. BonneOccaz est le produit présenté ;
le second produit automobile reste confidentiel.

## Fonctionnalités

- Français sur `/`, anglais sur `/en`, avec HTML, titre, description et URL canonique propres à chaque langue.
- Thèmes clair/sombre, navigation au clavier, menu mobile et préférences de mouvement réduit.
- BonneOccaz : conseiller automobile IA et assistant d’aide sur la plateforme présentés comme deux usages distincts.
- Export `/api/cv?lang=fr` ou `lang=en`, avec texte sélectionnable, liens cliquables, langue et date de génération.
- Aperçus de partage `/og?lang=fr` et `lang=en`, sitemap et robots.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion,
Lucide et jsPDF. Typographie système ; aucune police distante nécessaire.

Node.js 22 et npm. Installation depuis le fichier de verrouillage :

```sh
npm ci
npm run dev -- --port 3016
```

Ouvrir `http://localhost:3016`. Aucun compte, service externe ou secret n’est nécessaire
pour exécuter ce portfolio. Les liens vers BonneOccaz et GitHub restent externes.

## Structure

- `src/lib/cv-data.ts` : contenu FR/EN, coordonnées et liens publics partagés par le site et le PDF.
- `src/app/(fr)/` et `src/app/en/` : deux racines HTML localisées, pour conserver `/` en français.
- `src/components/Portfolio.tsx` : navigation et composition de la page.
- `src/components/features/` : profil, produit, parcours, compétences, formation, contact.
- `src/lib/portfolio-metadata.ts` : métadonnées et correspondances linguistiques.
- `src/lib/generate-cv-pdf.ts` : mise en page A4 avec contrôle des limites imprimables.
- `scripts/cv-pdf.mjs` : compilation temporaire du générateur avec TypeScript déjà installé, puis export des PDF.
- `tests/cv-pdf.test.mjs` : contrôles des deux langues, liens, date et dépassements.
- `DESIGN.md` et `PRODUCT.md` : direction visuelle et contraintes de contenu.

Les langues ont chacune un layout racine. Leur changement effectue un chargement
complet : l’URL sélectionnée reste partageable et conserve sa langue au rechargement.
Les PDF sont générés à la demande par l’API et lors du build pour les fichiers locaux.

## Validation

```sh
npm run test
npm run lint
npm run build
npm run typecheck
npm run start -- --port 3016
node scripts/verify-site.mjs http://localhost:3016
```

Le build régénère les deux fichiers `output/pdf/CV_Bryan_DUPRESSOIR_FR.pdf` et
`CV_Bryan_DUPRESSOIR_EN.pdf`. `npm run pdf:generate` permet de les produire seuls.
Les deux documents sont validés avant d’écraser les exports. Un texte hors colonne
ou hors page fait échouer la génération, afin qu’il soit corrigé avant publication.

Le contrôle HTTP vérifie les pages localisées et leurs métadonnées, les deux PDF,
les images de partage, le sitemap, robots et une route absente renvoyant 404.
Après une modification de contenu, inspecter également les PDF rendus et le site
sur ordinateur/mobile : les tests ne garantissent pas à eux seuls la qualité visuelle
ou la compatibilité avec tous les logiciels de recrutement.

## Contenu et confidentialité

Ne pas inventer de chiffres, de résultats ni de compétences. Ne publier aucun nom,
lien ou détail du second produit. Les informations techniques du module d’aide
BonneOccaz ont été fournies par Bryan : corpus versionné, accès public/Pro,
recherche documentaire et garde-fous. Le seuil du pilote de recherche locale ne
doit pas être présenté comme un taux d’exactitude des réponses générées.

La description de BonneOccaz ne signifie pas que son assistant ou son corpus
sont intégrés à ce dépôt. Ce portfolio ne contient que leur présentation publique.

## Publication

Vercel peut utiliser `npm run build`. Vérifier le commit déployé, les checks CI et
les routes publiques séparément : un build local réussi ne prouve pas un déploiement.
