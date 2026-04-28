'use client';

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, Mail, Loader } from "lucide-react";
import * as React from "react";

// Configuration des animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const formItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 }
};

export default function ContactPage() {
  const [status, setStatus] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const formRef = React.useRef<HTMLFormElement>(null); // Pour réinitialiser le formulaire

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus("Envoi en cours...");
    
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message envoyé avec succès ! Merci.");
        formRef.current?.reset(); // Vider le formulaire en cas de succès
      } else {
        setStatus(`Erreur: ${result.error || 'Impossible d\'envoyer le message.'}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setStatus("Erreur réseau ou serveur.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-16">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 text-sm">
          <Mail className="h-4 w-4 mr-2" /> Contactez-moi
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Entrons en contact</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Une question, une proposition de projet ou simplement envie de discuter ? Remplissez le formulaire ci-dessous.
        </p>
      </motion.div>

      <motion.div 
        variants={fadeIn} 
        initial="initial"
        animate="animate"
        className="max-w-2xl mx-auto"
      >
        <Card className="overflow-hidden glass-card shadow-lg border-primary/10 bg-gradient-to-br from-background to-primary/5 dark:from-background dark:to-primary/10">
          <CardHeader>
            <CardTitle>Formulaire de contact</CardTitle>
            <CardDescription>Je vous répondrai dans les meilleurs délais.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formItemVariants} initial="initial" animate="animate" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" name="name" placeholder="Votre nom complet" required className="bg-background/50 backdrop-blur-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Votre adresse email" required className="bg-background/50 backdrop-blur-sm" />
                </div>
              </motion.div>
              <motion.div variants={formItemVariants} initial="initial" animate="animate" transition={{ delay: 0.1 }} className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" name="subject" placeholder="L'objet de votre message" required className="bg-background/50 backdrop-blur-sm" />
              </motion.div>
              <motion.div variants={formItemVariants} initial="initial" animate="animate" transition={{ delay: 0.15 }} className="space-y-2">
                <Label htmlFor="phone">Téléphone <span className="text-xs text-muted-foreground">(optionnel)</span></Label>
                <Input id="phone" name="phone" type="tel" placeholder="Votre numéro de téléphone" className="bg-background/50 backdrop-blur-sm" />
              </motion.div>
              <motion.div variants={formItemVariants} initial="initial" animate="animate" transition={{ delay: 0.2 }} className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Écrivez votre message ici..." rows={5} required className="bg-background/50 backdrop-blur-sm" />
              </motion.div>
              <motion.div variants={formItemVariants} initial="initial" animate="animate" transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row justify-end items-center gap-4">
                 {status && (
                    <motion.p 
                       key={status} // Animer le changement de message
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       className={`text-sm ${status.startsWith('Erreur') ? 'text-destructive' : 'text-muted-foreground'}`}
                    >
                      {status}
                    </motion.p>
                 )}
                 <Button type="submit" className="group w-full sm:w-auto neon-glow" disabled={isLoading}>
                   {isLoading ? (
                     <>
                       <motion.div 
                         animate={{ rotate: 360 }} 
                         transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} 
                         className="mr-2"
                       >
                         <Loader className="h-4 w-4" />
                       </motion.div>
                       Envoi...
                     </>
                   ) : (
                     <>
                       Envoyer le message
                       <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                     </>
                   )}
                 </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 