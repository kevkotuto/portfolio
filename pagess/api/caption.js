// pages/api/caption.js
import sharp from 'sharp';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100mb', // Augmentez cette valeur selon vos besoins
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée' });
    return;
  }

  try {
    const formData = await new Promise((resolve, reject) => {
      const formidable = require('formidable');
      const form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const file = formData.files.file;

    if (!file) {
      res.status(400).json({ error: 'Aucun fichier téléchargé' });
      return;
    }

    console.log('Fichier reçu:', file.originalFilename);

    // Lire le fichier en tant que Buffer
    const fs = require('fs');
    const buffer = fs.readFileSync(file.filepath);

    // Utiliser sharp pour convertir et compresser l'image en JPEG
    const processedImageBuffer = await sharp(buffer)
      .jpeg({ quality: 10 })
      .toBuffer();

    console.log('Image traitée, taille du buffer:', processedImageBuffer.length);

    // Préparer les données du formulaire pour l'API externe
    const FormData = require('form-data');
    const externalFormData = new FormData();
    externalFormData.append('file', processedImageBuffer, {
      filename: 'processed_image.jpg',
      contentType: 'image/jpeg',
    });

    console.log('Envoi à l\'API externe...');

    const response = await fetch('https://ai.generale-ci.com/caption', {
      method: 'POST',
      headers: externalFormData.getHeaders(),
      body: externalFormData,
    });

    console.log('Réponse de l\'API externe reçue, statut:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erreur lors de la requête à l\'API externe:', errorText);
      res.status(response.status).json({ error: 'Erreur avec l\'API externe' });
      return;
    }

    const data = await response.json();
    console.log('Données reçues de l\'API externe:', data);

    res.status(200).json(data);
  } catch (error) {
    console.error('Une erreur est survenue:', error);
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
}