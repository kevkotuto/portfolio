import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from '../ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="min-h-[30rem] rounded-t-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] px-20 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center h-4/5">
        <img src="/image/hand-shake.png" alt="logo" className="w-[7rem] h-[7rem] opacity-25" />
        <p className="text-3xl font-bold text-gray-600 text-center">
          Faites-moi signe si vous avez besoin d'aide
        </p>
        <p className="text-3xl font-bold text-gray-600 text-center">
          pour vos prochains projets.
        </p>
        <div className="flex flex-row gap-5 p-4">
          <Button className="p-7" asChild>
                <Link href="mailto:kevine@generale-ci.com" target='_blank' rel="noopener noreferrer">
                         <Mail /> E-mail
                </Link>
          </Button>
          <Button className="p-7" variant="outline" asChild>
                <Link href="https://wa.me/+2250500808585" target='_blank' rel="noopener noreferrer">
                   <MessageCircle /> WhatsApp   
                </Link>
          </Button>
        </div>
      </div>
      
      <Separator className="my-10" />
      
      <div className="flex flex-col md:flex-row items-center justify-between my-10 w-full">
        <p className="text-center md:text-left">© 2024 Tous droits réservés.</p>
        <p className="text-center md:text-right">Boudalha Ghossoub Kevin Adel Junior</p>
      </div>
    </div>
  );
}