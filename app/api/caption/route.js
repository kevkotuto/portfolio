// app/api/caption/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'Aucun fichier téléchargé' }, { status: 400 });
    }

    // Préparer les données du formulaire pour l'API externe
    const externalFormData = new FormData();
    externalFormData.append('file', file, file.name);

    const response = await fetch('https://ai.generale-ci.com/caption', {
      method: 'POST',
      body: externalFormData,
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Une erreur est survenue' }, { status: 500 });
  }
}