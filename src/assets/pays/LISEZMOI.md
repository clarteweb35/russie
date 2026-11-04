# Photos des pays

Pour ajouter des photos à la page d'un pays : créez un dossier à son nom (le « slug » de l'adresse, par exemple `japon`, `georgie`, `royaume-uni`) et déposez-y vos images (jpg, png, webp).

Exemple : `src/assets/pays/japon/kyoto.jpg` s'affichera sur `/pays/japon/`.

- Les photos sont classées par nom de fichier. Le site les redimensionne et les convertit automatiquement en WebP.
- Une photo générée par IA doit être signalée : voir `legendeIA()` dans `src/config.ts`.
- Aucune photo = aucune section affichée.
