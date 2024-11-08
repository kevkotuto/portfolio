import React from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from '../ui/button'
import { Mail, MessageCircle } from 'lucide-react'
export default function Footer() {
  return (
    <div className="min-h-[30rem] rounded-t-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] px-20 items-center justify-between content-between ">
            <div>
                    <div className='flex flex-col items-center justify-center h-4/5'>
                            <img src="/image/hand-shake.png" alt="logo" className='w-[10rem] h-[10rem] opacity-25 ' />
                            <p className='text-3xl font-bold text-gray-600 text-center'>Faite moi signe si vous avez besoin d'aide</p>
                            <p className='text-3xl font-bold text-gray-600 text-center'> pour vos prochains projets.</p>
                            <div className='flex flex-row gap-5 p-4'>
                                    <Button className=' p-7'><Mail /> E-mail</Button>
                                    <Button className='p-7' variant={'outline'}><MessageCircle /> whatsapp</Button>
                            </div>
                    </div>
            </div>
                <Separator className='my-10' />
            <div className="flex flex-col md:flex-row items-center justify-between mt-10 ">
                    <p className='text-center md:text-left'>© 2024 Tous les droits sont réservés.</p>
                    <p className='text-center md:text-right'>Boudalha Ghossoub Kevine Adel Junior </p>
            </div>
    </div>
  )
}
