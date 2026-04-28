// app/api/send/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';
import { sendEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const reqBody = await request.json();
    
    // Tenter d'envoyer le SMS via Termii
    try {
      const response = await axios.post('https://v3.api.termii.com/api/sms/send', reqBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('SMS envoyé avec succès via Termii:', response.data);
      return NextResponse.json(response.data, { status: 200 });
    } catch (smsError) {
      console.error('Échec de l\'envoi du SMS via Termii:', smsError);
      
      // En cas d'échec du SMS, essayer d'envoyer un email à la place
      try {
        // Extraire le message et les informations de contact du corps de la requête
        const { sms, to } = reqBody;
        
        // Envoyer un email de remplacement
        await sendEmail({
          to: 'kevkotuto@gmail.com', // Envoyer à l'adresse email fixe
          subject: 'Notification SMS échouée - Envoi par email',
          text: `Le SMS suivant n'a pas pu être envoyé au numéro ${to}:\n\n${sms}`,
          html: `
            <h2>Notification SMS échouée</h2>
            <p>Le SMS suivant n'a pas pu être envoyé au numéro ${to}:</p>
            <p style="background-color: #f3f3f3; padding: 10px; border-radius: 5px;">${sms}</p>
          `,
        });
        
        console.log('Notification envoyée par email en remplacement du SMS');
        return NextResponse.json({ 
          message: 'SMS failed but email notification sent',
          original_error: smsError.message 
        }, { status: 200 });
      } catch (emailError) {
        console.error('Échec de l\'envoi de l\'email de remplacement:', emailError);
        throw new Error('SMS et email de remplacement ont échoué');
      }
    }
  } catch (error) {
    console.error('Erreur globale dans la route /api/send:', error);
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}