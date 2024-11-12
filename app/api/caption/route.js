// app/api/caption/route.js
import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      console.error('Aucun fichier téléchargé');
      return NextResponse.json({ error: 'Aucun fichier téléchargé' }, { status: 400 });
    }

    console.log('Fichier reçu:', file.name);

    // Lire le fichier en tant que Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Utiliser sharp pour convertir et compresser l'image en JPEG
    const processedImageBuffer = await sharp(buffer)
      .jpeg({ quality: 80 })
      .toBuffer();

    console.log('Image traitée, taille du buffer:', processedImageBuffer.length);

    // Créer un nouveau FormData natif
    const externalFormData = new FormData();
    const blob = new Blob([processedImageBuffer], { type: 'image/jpeg' });

    externalFormData.append('file', blob, 'processed_image.jpg');

    console.log('Envoi à l\'API externe...');

    const response = await fetch('https://ai.generale-ci.com/caption', {
      method: 'POST',
      body: externalFormData,
      // Ne pas définir manuellement les en-têtes
    });

    console.log('Réponse de l\'API externe reçue, statut:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erreur lors de la requête à l\'API externe:', errorText);
      return NextResponse.json({ error: 'Erreur avec l\'API externe' }, { status: response.status });
    }

    const data = await response.json();
    console.log('Données reçues de l\'API externe:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Une erreur est survenue:', error);
    return NextResponse.json({ error: 'Une erreur est survenue' }, { status: 500 });
  }
}