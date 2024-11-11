module.exports = {
  apps: [
    {
      name: 'portfolio', // Nom de l'application
      script: 'node_modules/next/dist/bin/next', // Commande pour exécuter Next.js
      args: 'start', // Argument pour démarrer l'application en mode production
      cwd: './', // Répertoire de travail, ici le dossier courant où se trouve Next.js
      instances: 1, // Nombre d'instances à 1 pour utiliser une seule instance
      exec_mode: 'fork', // Mode fork pour ne lancer qu'une seule instance
      env: {
        NODE_ENV: 'production', // Définir l'environnement en production
        PORT: 3003, // Port sur lequel l'application sera lancée
      },
    },
  ],
};
