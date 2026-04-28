import { NextResponse } from 'next/server';
import sharp from 'sharp';
import Busboy from 'busboy';
import streamifier from 'streamifier';

export const runtime = 'nodejs'; // S'assurer d'utiliser le runtime Node.js

export async function POST(request) {
  return new Promise((resolve, reject) => {
    try {
      // Convertir les en-têtes en objet simple pour busboy
      const headers = {};
      request.headers.forEach((value, key) => {
        headers[key.toLowerCase()] = value;
      });

      if (!headers['content-type']) {
        reject(
          NextResponse.json({ error: 'Content-Type manquant' }, { status: 400 })
        );
        return;
      }

      const busboy = Busboy({ headers });

      let fileBuffer = Buffer.alloc(0);
      let fileName = '';
      let mimeType = '';

      busboy.on('file', (fieldname, file, info) => {
        fileName = info.filename;
        mimeType = info.mimeType;

        console.log(`Fichier reçu : ${fileName}, type MIME : ${mimeType}`);

        file.on('data', (data) => {
          fileBuffer = Buffer.concat([fileBuffer, data]);
        });
      });

      busboy.on('finish', async () => {
        try {
          // Traitement de l'image avec sharp
          const processedImageBuffer = await sharp(fileBuffer)
            .jpeg({ quality: 20 })
            .toBuffer();

          console.log('Image traitée, taille du buffer :', processedImageBuffer.length);

          // Préparer les données du formulaire pour l'API externe
          const externalFormData = new FormData();
          const blob = new Blob([processedImageBuffer], { type: 'image/jpeg' });

          externalFormData.append('file', blob, 'processed_image.jpg');

          console.log("Envoi à l'API externe...");

          const response = await fetch('https://ai.generale-ci.com/caption', {
            method: 'POST',
            body: externalFormData,
          });

          console.log("Réponse de l'API externe reçue, statut :", response.status);

          if (!response.ok) {
            const errorText = await response.text();
            console.error("Erreur lors de la requête à l'API externe :", errorText);
            resolve(NextResponse.json({ error: 'Erreur avec l\'API externe' }, { status: response.status }));
            return;
          }

          const data = await response.json();
          console.log('Données reçues de l\'API externe :', data);

          resolve(NextResponse.json(data));
        } catch (error) {
          console.error('Erreur lors du traitement de l\'image ou de la requête externe :', error);
          resolve(NextResponse.json({ error: 'Une erreur est survenue' }, { status: 500 }));
        }
      });

      busboy.on('error', (error) => {
        console.error('Erreur lors du parsing du formulaire avec busboy :', error);
        reject(NextResponse.json({ error: 'Erreur lors du téléchargement du fichier' }, { status: 500 }));
      });

      // Passer le corps de la requête à busboy
      const reader = request.body.getReader();
      const processChunk = ({ done, value }) => {
        if (done) {
          busboy.end();
          return;
        }
        busboy.write(value);
        reader.read().then(processChunk);
      };
      reader.read().then(processChunk);
    } catch (error) {
      console.error('Une erreur est survenue :', error);
      reject(NextResponse.json({ error: 'Une erreur est survenue' }, { status: 500 }));
    }
  });
}