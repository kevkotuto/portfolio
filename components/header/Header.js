'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function Header() {
        const [copied, setCopied] = useState(false);
        const textToCopy = "kevine@generale-ci.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Réinitialise l'état après 2 secondes
    } catch (error) {
      console.error("Échec de la copie : ", error);
    }
  };
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-20 pt-5 bg-[#F3F2F1] dark:bg-[#1E1E1E] '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-3 p-5'>
                    <p className='text-sm decoration-primary decoration-2 underline-offset-2'>
                    kevine@generale-ci.com
                    </p>
                    <div className='flex flex-row gap-3'>
                        <Button variant={'outline'} onClick={handleCopy}>{copied ? "Copié !" : "Copier"}</Button>
                        <Button variant={'outline'}>CV</Button>
                    </div>    
            </div>
            <div className='flex flex-row justify-evenly gap-2 text-sm decoration-primary decoration-2 underline-offset-2'>
                    <Link href={"https://www.linkedin.com/in/ghossoub-kevine-boudalha-184929263"} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                    <p>/</p>
                    <Link href={"https://www.instagram.com/kevine_ghoussoub?igsh=MXVhNTE3czdzZHAzZQ%3D%3D&utm_source=qr"} target="_blank" rel="noopener noreferrer">Instagram</Link>
                    <p>/</p>
                    <Link href={"https://github.com/kevkotuto"} target="_blank" rel="noopener noreferrer">GitHub</Link>
            </div>
    </div>
  )
}
