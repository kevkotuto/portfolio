'use client';

import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from '../ui/button';
import { Mail, MessageCircle, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden w-full">
      <div className="container mx-auto py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 animate-fadeIn">
            <div className="inline-block opacity-25 mb-4">
              <img src="/image/hand-shake.png" alt="logo" className="w-16 h-16" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Faites-moi signe pour vos prochains projets
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Je suis disponible pour discuter de vos idées et vous aider à réaliser vos projets digitaux
              avec des solutions professionnelles et innovantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="mailto:kevine@generale-ci.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-5 w-5" /> E-mail
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link href="https://wa.me/+2250500808585" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>&copy; {currentYear} Tous droits réservés</span>
            <span className="mx-2">•</span>
            <span>Boudalha Ghossoub Kevin Adel Junior</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hover:-translate-y-1 transition-transform duration-200">
              <Link 
                href="https://github.com/kevkotuto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
            
            <div className="hover:-translate-y-1 transition-transform duration-200">
              <Link 
                href="https://www.linkedin.com/in/ghossoub-kevine-boudalha-184929263" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            
            <div className="hover:-translate-y-1 transition-transform duration-200">
              <Link 
                href="https://www.instagram.com/kevine_ghoussoub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}