import { NextResponse } from 'next/server';
import { sendContactForm, sendNotification, sendEmail } from '@/lib/email';
import { sendSmsNotification } from "@/lib/sms";

// TODO: Valider les types de données plus précisément si nécessaire (avec Zod par exemple)
interface ContactFormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  phone?: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formData = body as ContactFormData;

    // Validation des champs requis (sans exiger le téléphone)
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }

    // Construction du message complet
    const subject = `Nouveau contact: ${formData.name}`;
    const message = `
      Nom: ${formData.name}
      Email: ${formData.email}
      ${formData.phone ? `Téléphone: ${formData.phone}` : ''}
      Message: ${formData.message}
    `;

    // Essayer d'envoyer un SMS directement avec la nouvelle fonction (si disponible)
    try {
      await sendSmsNotification({
        to: "+22507089826", // Numéro fixe pour tous les SMS
        message: `Nouveau message de ${formData.name} (${formData.email}): ${formData.message}`,
      });
      console.log("SMS envoyé avec succès via sendSmsNotification");
    } catch (error) {
      console.error("Erreur lors de l'envoi du SMS direct:", error);
    }
    
    // Envoi de notification par SMS (via la fonction existante, comme fallback)
    const smsSuccess = await sendNotification({
      to: process.env.NOTIFICATION_PHONE || '+590690XXX',
      subject: subject,
      message: message,
      preferSms: true
    }).catch(error => {
      console.error("Erreur SMS:", error);
      return { success: false, error };
    });
    
    // Envoi d'email (toujours, même si SMS réussi)
    const emailSuccess = await sendContactForm({
      name: formData.name,
      email: formData.email,
      message: formData.phone 
        ? `${formData.message}\n\nTéléphone: ${formData.phone}`
        : formData.message
    }).catch(error => {
      console.error("Erreur Email:", error);
      return { success: false, error };
    });

    // Si l'un des deux a réussi, on considère que c'est un succès
    if (smsSuccess?.success || emailSuccess?.success) {
      console.log("Notification envoyée avec succès");
      return NextResponse.json({ message: "Message envoyé avec succès" });
    } else {
      console.error("Échec de l'envoi des notifications (SMS et Email)");
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de votre message. Veuillez réessayer plus tard." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erreur lors du traitement de la demande:", error);
    return NextResponse.json(
      { error: "Erreur lors du traitement de votre message" },
      { status: 500 }
    );
  }
} 