"use client";

import React, { useState } from 'react';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader, Loader2 } from 'lucide-react';

export default function InfoPerso() {
  const [loader, setLoader] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast()

  // Fonction pour envoyer un SMS avec l'API Termii
  const sendSms = async () => {
    const userMessage = {
      to: `225${phoneNumber}`,
      from: "General Ci",
      sms: "Bonjour, j'ai bien reçu votre demande. Je vous contacterai dans les plus brefs délais.",
      type: "plain",
      channel: "generic",
      api_key: "TLUXY7fntROVhKrMDrxyv6czg0JNPvH3aBodlAb1SdHdzDhFUKVybIxyO1XAnJ",
    };

    const notificationMessage = {
      to: "2250586987934",
      from: "General Ci",
      sms: `Le numéro ${phoneNumber} souhaite être contacté.`,
      type: "plain",
      channel: "generic",
      api_key: "TLUXY7fntROVhKrMDrxyv6czg0JNPvH3aBodlAb1SdHdzDhFUKVybIxyO1XAnJ",
    };

    try {
      // Envoie le message de confirmation au client
      setLoader(true);
      await fetch("https://v3.api.termii.com/api/sms/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userMessage),
      });

      // Envoie la notification à ton numéro
      await fetch("https://v3.api.termii.com/api/sms/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notificationMessage),
      });
      setLoader(false);
      toast({
        title: "Message envoyé avec succès, Regarder vos SMS",
        description: "Vous serez contacté dans les plus brefs délais. 😃",
      })
    } catch (error) {
      setLoader(false);
      toast({
        title: "Une erreur s'est produite",
        description: "Veuillez réessayer plus tard. 😞",
      })
      console.error("Erreur lors de l'envoi du message :", error);
    }
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value;

    if (/^(0[157])?\d{0,8}$/.test(value)) {
      setPhoneNumber(value);
      setError(''); 
    } else {
      setError("Le numéro doit commencer par 01, 05 ou 07 et contenir exactement 10 chiffres.");
    }
  };

  const isPhoneNumberValid = /^(0[157])\d{8}$/.test(phoneNumber);

  return (
    <div className="min-h-[30rem] px-4 md:px-0">
      <div className="flex justify-around flex-col my-20 md:flex-row">
        <div className="flex flex-col gap-2 justify-start items-center">
          <h1 className="text-xl font-bold">Information Personnelle</h1>
          <div className="flex flex-col gap-2 justify-start items-center">
            <Link href="/contact.vcf" download className="w-full">
              <h2 className="flex flex-row gap-2 justify-start items-center w-full">
                <span className="text-2xl">👤</span> Boudalha Ghossoub Kevin Adel Junior
              </h2>
            </Link>
            <Link href="https://maps.app.goo.gl/73VAh2KjB9Nj5cX5A" className="w-full">
              <h2 className="flex flex-row gap-2 justify-start items-center">
                <span className="text-2xl">📍</span> Rue 10, Avenue 5, Treichville, Abidjan
              </h2>
            </Link>
            <Link href="tel://+2250586987934" className="w-full">
              <h2 className="flex flex-row gap-2 justify-center items-center w-full">
                <span className="text-2xl">📞</span> +225 05 86 98 79 34 / +225 05 00 80 85 85
              </h2>
            </Link>
          </div>
          <Button variant="outline" asChild>
            <Link href="/contact.vcf" download>
              Enregistrer mon contact
            </Link>
          </Button>
        </div>
        <Separator className="my-10 md:hidden" />
        <div className="px-10 md:px-0">
          <h1 className="text-xl font-bold text-center md:text-left">
            Voulez-vous plutôt que je vous contacte ?
          </h1>
          <div className="flex flex-col gap-2 h-28 justify-center items-center">
            <div className="flex flex-row w-full">
              <Input type="text" value="🇨🇮 +225" className="w-2/6 rounded-r-none" disabled />
              <Input
                type="tel"
                placeholder="Votre numéro"
                maxLength={10}
                value={phoneNumber}
                onChange={handlePhoneInput}
                className="rounded-l-none w-4/6"
              />
            </div>
            {!isPhoneNumberValid && error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
            <Button
              className="w-full"
              disabled={!isPhoneNumberValid}
              onClick={sendSms}
            >
              {
                loader ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <p>Je vous contacte</p>
                )
              }
            </Button>
          </div>
        </div>
      </div>
      <div className="px-10 flex justify-center items-center flex-col">
        <Separator />
        <Badge variant="outline" className="-translate-y-4 bg-white -rotate-3 text-xl px-4">
          Biographie
        </Badge>
      </div>
      <div className="text-center my-10">
        <p>
          Développeur passionné avec plus de 8 ans d’expérience dans le <br />
          développement d’applications web et mobiles, avec une expertise en <br />
          gestion de projet, infographie, et systèmes d’information. Compétences <br />
          avancées en analyse de données et gestion de bases d’articles, <br />
          accompagnées d’une compréhension approfondie des solutions <br />
          digitales et du développement de produits.
        </p>
      </div>
    </div>
  );
}