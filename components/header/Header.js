import React from 'react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-20 pt-5 bg-[#F3F2F1] dark:bg-[#1E1E1E] '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-3 p-5'>
                    <p className='text-sm decoration-primary decoration-2 underline-offset-2'>
                        kevine@generale-ci.com
                    </p>
                    <div className='flex flex-row gap-3'>
                        <Button variant={'outline'}>Copier</Button>
                        <Button variant={'outline'}>CV</Button>
                    </div>    
            </div>
            <div className='flex flex-row justify-evenly gap-2 text-sm decoration-primary decoration-2 underline-offset-2'>
                    <h1>LinkedIn</h1>
                    <p>/</p>
                    <h1>Instagram</h1>
                    <p>/</p>
                    <h1>GitHub</h1>
            </div>
    </div>
  )
}
