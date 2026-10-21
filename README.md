# fsimon.fr

Site personnel de Florian Simon, généré avec [Astro](https://astro.build).

- Aperçu (à chaque push) : https://florian78140.github.io/fsimon.fr/
- Production : https://www.fsimon.fr (mise en ligne manuelle, voir plus bas)

## Modifier le contenu

Tout le contenu est dans `src/content/`, un fichier Markdown par élément :

| Dossier | Section du site |
|---|---|
| `src/content/parcours/` | Parcours pro (`type: pro`) et formation (`type: formation`) |
| `src/content/engagements/` | À côté du travail (associations, UX-Tech…) |
| `src/content/projets/` | Projets & sites réalisés (`archive: true` = rangé dans « Projets plus anciens ») |

Exemple : ajouter un projet en créant `src/content/projets/mon-projet.md` :

```markdown
---
titre: Mon projet
annee: "2026"
tags: [WordPress, Docker]
lien: https://exemple.fr
ordre: 95
---
Une ou deux phrases de description.
```

`ordre` : le plus grand nombre est affiché en premier.

L'email et les liens (GitHub, LinkedIn…) sont en haut de `src/pages/index.astro`.

### Depuis le navigateur (sans rien installer)
1. Sur github.com, ouvrir le fichier, cliquer sur le crayon ✏️ (ou « Add file » > « Create new file »).
2. Modifier, puis « Commit changes ».
3. L'aperçu se met à jour tout seul en ~1 minute (onglet **Actions** pour suivre).

### Depuis son PC
```bash
git clone https://github.com/florian78140/fsimon.fr.git
cd fsimon.fr
npm install
npm run dev        # http://localhost:4321
# ... modifications ...
git add . && git commit -m "Mise à jour" && git push
```

## Mettre en ligne sur OVH

1. Une seule fois : dans **Settings > Secrets and variables > Actions**, créer les secrets
   `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` et `FTP_DIR`
   (dossier du site fsimon.fr sur l'hébergement, avec un `/` à la fin).
2. Onglet **Actions** > **Construire et déployer** > **Run workflow** > cocher
   « Mettre aussi en ligne sur OVH » > **Run workflow**.

## Design

Couleurs : bleu nuit `#0F1E4A`, turquoise `#2DD4BF` (`#0D9488` sur fond clair).
Polices : Inter et JetBrains Mono, hébergées avec le site (pas de Google Fonts).
Le thème clair/sombre suit le réglage de l'appareil.
