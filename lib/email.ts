import nodemailer from 'nodemailer';

// Configuration du transporteur email
export const emailTransporter = nodemailer.createTransport({
  host: 'generale-ci.com',
  port: 465,
  secure: true, // true pour 465, false pour les autres ports
  auth: {
    user: 'noreply@generale-ci.com',
    pass: process.env.EMAIL_PASSWORD || 'Ecolfa@961',
  },
});

// Fonction pour envoyer un email
export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const info = await emailTransporter.sendMail({
      from: '"Kevine Boudalha" <noreply@generale-ci.com>',
      to: 'kevkotuto@gmail.com', // Tout est envoyé à kevkotuto@gmail.com maintenant
      subject,
      text,
      html: html || text,
    });

    console.log(`Email envoyé: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error };
  }
}

// Fonction pour envoyer une notification ou alerte (SMS ou email)
export async function sendNotification({
  to,
  subject,
  message,
  preferSms = true,
}: {
  to: string;
  subject: string;
  message: string;
  preferSms?: boolean;
}) {
  // Essaie d'abord d'envoyer un SMS si préféré
  if (preferSms) {
    try {
      // Essayer d'envoyer un SMS via l'API (à implémenter)
      // Si erreur, fallback sur email
      throw new Error('API SMS non implémentée');
    } catch (error) {
      console.log('Échec de l\'envoi du SMS, fallback sur email...');
      // Fallback sur email
      return sendEmail({
        to: 'kevkotuto@gmail.com', // S'assurer que le fallback envoie à kevkotuto@gmail.com
        subject,
        text: message,
      });
    }
  } else {
    // Envoyer directement un email
    return sendEmail({
      to: 'kevkotuto@gmail.com', // S'assurer que l'envoi direct utilise kevkotuto@gmail.com
      subject,
      text: message,
    });
  }
}

// Fonction pour envoyer un email de contact
export async function sendContactForm({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const subject = `Nouveau message de contact de ${name}`;
  const htmlContent = `
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  return sendEmail({
    to: 'kevkotuto@gmail.com', // Déjà configuré correctement ici
    subject,
    text: `Nouveau message de ${name} (${email}): ${message}`,
    html: htmlContent,
  });
} 