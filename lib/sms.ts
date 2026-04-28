import axios from 'axios';

// Configuration pour l'API Termii
const TERMII_API_URL = 'https://v3.api.termii.com/api/sms/send';
const DEFAULT_SENDER = 'General Ci';

// Fonction pour envoyer une notification SMS
export async function sendSmsNotification({
  to,
  message,
}: {
  to: string;
  message: string;
}) {
  try {
    // S'assurer que le numéro commence par un préfixe international si ce n'est pas déjà le cas
    const formattedNumber = to.startsWith('+') ? to.substring(1) : to;
    
    // Configuration de la requête pour l'API Termii
    const payload = {
      to: formattedNumber,
      from: DEFAULT_SENDER,
      sms: message,
      type: "plain",
      channel: "generic",
      api_key: process.env.NEXT_PUBLIC_TERMI_API_KEY || process.env.TERMI_API_KEY,
    };

    // Envoi du SMS via l'API interne
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erreur lors de l'envoi du SMS: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(`SMS envoyé avec succès:`, result);
    return { success: true, result };
  } catch (error) {
    console.error('Erreur lors de l\'envoi du SMS:', error);
    return { success: false, error };
  }
} 