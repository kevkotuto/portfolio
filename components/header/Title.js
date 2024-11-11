'use client'
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Typewriter } from 'react-simple-typewriter';


export default function Title() {
  return (
    <div className=''>
            <div className='flex flex-col md:flex-row justify-center items-center mb-5'>

                <Avatar className='md:translate-x-20'>
                    <AvatarImage src="./image/pp.jpg" alt="photo de profils" />
                    <AvatarFallback>KG</AvatarFallback>
                </Avatar>
                <Badge variant="outline" className='bg-white py-1 -translate-y-4 md:translate-x-14 -rotate-6 flex gap-2'> Kevine Ghossoub <span className="inline-block animate-wave"><p className='text-xl'>👋🏽</p></span> </Badge>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 text-center text-3xl font-bold h-9'>
                <Typewriter
                 words={['Bienvenue dans mon monde personnel.', 'Je suis developpeur FullStack', 'Web, Native et Analytics']}
                 loop={true}
                 typeSpeed={70}
                 deleteSpeed={50}
                 delaySpeed={1000}
                />
            </div>
            <div className='flex justify-center items-center gap-2 text-center mt-10'>
                <Button>Parcourir Mes Projets</Button>
            </div>
    </div>
  )
}
