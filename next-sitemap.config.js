// next-sitemap.js
/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://portfolio.generale-ci.com', // Remplace par l'URL de ton site
    generateRobotsTxt: true, // Génère aussi le robots.txt
    sitemapSize: 7000, // Nombre d'URL par fichier sitemap
    outDir: './public', // Emplacement des fichiers générés
  };
  
  module.exports = config;