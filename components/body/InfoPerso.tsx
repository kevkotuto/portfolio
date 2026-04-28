"use client";

import React, { useState } from 'react';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Phone, MapPin, User, Download, MousePointerClick, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { motion } from 'motion/react';

export default function InfoPerso() {
  const [loader, setLoader] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();

  // Fonction pour envoyer un SMS avec l'API Termii
  const sendSms = async () => {
    const userMessage = {
      to: `225${phoneNumber}`,
      from: "General Ci",
      sms: "Bonjour, j'ai bien reçu votre demande. Je vous contacterai dans les plus brefs délais.",
      type: "plain",
      channel: "generic",
      api_key: process.env.NEXT_PUBLIC_TERMI_API_KEY,
    };
  
    const notificationMessage = {
      to: "2250586987934",
      from: "General Ci",
      sms: `Le numéro ${phoneNumber} souhaite être contacté.`,
      type: "plain",
      channel: "generic",
      api_key: process.env.NEXT_PUBLIC_TERMI_API_KEY,
    };
  
    try {
      // Envoie le message de confirmation au client via votre API interne
      setLoader(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userMessage),
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du SMS client");
      }
  
      // Envoie la notification à votre propre numéro via votre API interne
      const notificationResponse = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notificationMessage),
      });
  
      if (!notificationResponse.ok) {
        throw new Error("Erreur lors de l'envoi de la notification");
      }
  
      setLoader(false);
      toast({
        title: "Message envoyé avec succès, Regarder vos SMS",
        description: "Vous serez contacté dans les plus brefs délais. 😃",
      });
    } catch (error) {
      setLoader(false);
      toast({
        title: "Une erreur s'est produite",
        description: "Veuillez réessayer plus tard. 😞",
      });
      console.error("Erreur lors de l'envoi du message :", error);
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="container py-8">
      <Card>
        <CardContent className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Information personnelle */}
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">Information Personnelle</h2>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="flex items-center ml-2 text-xs text-muted-foreground"
                >
                  <MousePointerClick className="h-3 w-3 mr-1 animate-pulse text-primary" />
                  <span>Cliquable</span>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="/contact.vcf" download className="flex items-start gap-3 group relative overflow-hidden rounded-md p-2 hover:bg-primary/5 transition-all duration-300">
                    <User className="h-5 w-5 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">Boudalha Ghossoub Kevin Adel Junior</p>
                      <p className="text-sm text-muted-foreground">Développeur Fullstack</p>
                    </div>
                    <motion.div 
                      className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: 10 }}
                      animate={{ x: 0 }}
                    >
                      <Download className="h-4 w-4 text-primary" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="https://maps.app.goo.gl/73VAh2KjB9Nj5cX5A" target="_blank" className="flex items-start gap-3 group relative overflow-hidden rounded-md p-2 hover:bg-primary/5 transition-all duration-300">
                    <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">Rue 10, Avenue 5</p>
                      <p className="text-sm text-muted-foreground">Treichville, Abidjan</p>
                    </div>
                    <motion.div 
                      className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: 10 }}
                      animate={{ x: 0 }}
                    >
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="tel://+2250586987934" className="flex items-start gap-3 group relative overflow-hidden rounded-md p-2 hover:bg-primary/5 transition-all duration-300">
                    <Phone className="h-5 w-5 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">+225 05 86 98 79 34</p>
                      <p className="text-sm text-muted-foreground">+225 05 00 80 85 85</p>
                    </div>
                    <motion.div 
                      className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: 10 }}
                      animate={{ x: 0 }}
                    >
                      <Phone className="h-4 w-4 text-primary" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" asChild className="gap-1">
                  <Link href="/contact.vcf" download>
                    <Download className="h-4 w-4 mr-1" />
                    Enregistrer mon contact
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Contact */}
            <div className="space-y-6 animate-fadeIn animation-delay-200">
              <h2 className="text-2xl font-bold">Contactez-moi</h2>
              <p className="text-muted-foreground">Vous préférez que je vous appelle directement ?</p>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex"
                >
                  <div className="flex-shrink-0 bg-muted flex items-center justify-center px-3 border border-r-0 rounded-l-md">
                    <span className="text-sm font-medium">🇨🇮 +225</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder="Votre numéro (ex: 0586987934)"
                    maxLength={10}
                    value={phoneNumber}
                    onChange={handlePhoneInput}
                    className="rounded-l-none flex-1"
                  />
                </motion.div>
                
                {error && <p className="text-destructive text-sm">{error}</p>}
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    className="w-full"
                    disabled={!isPhoneNumberValid || loader}
                    onClick={sendSms}
                  >
                    {loader ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Je vous rappelle"
                    )}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Biographie */}
      <div className="mt-16">
        <div className="flex justify-center">
          <Separator className="w-full" />
          <Badge variant="outline" className="absolute -translate-y-2.5 px-3 bg-background">
            Biographie
          </Badge>
        </div>
        
        <p className="mt-8 text-center max-w-3xl mx-auto leading-relaxed text-muted-foreground animate-fadeIn animation-delay-300">
          Développeur passionné avec plus de 8 ans d'expérience dans le développement d'applications web et mobiles, 
          avec une expertise en gestion de projet, infographie, et systèmes d'information. Compétences avancées en analyse de données 
          et gestion de bases d'articles, accompagnées d'une compréhension approfondie des solutions digitales et du développement de produits.
        </p>
      </div>
    </div>
  );
}