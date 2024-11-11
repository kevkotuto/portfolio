'use client';

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

import React, { useState } from 'react'

export default function page() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!file) {
      alert('Veuillez sélectionner un fichier');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/caption', {
      method: 'POST',
      body: formData,
    });
    // Parse the JSON response from the API route
    const data = await res.json();

    if (data.error) {
      setLoading(false);
      alert(data.error);
    } else {
      // Update the caption state with the description from the API response
      setLoading(false);
      setCaption(data.description);
    }
  };

  return (
    <div className=''>
            <div className="h-[6rem] rounded-b-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-b-2 ">

            </div>
            <div className=" flex justify-center items-center flex-col  px-20">
                <Badge variant="outline" className="-translate-y-4 bg-white text-xl px-4 text-sm rotate-3">
                  <h1>
                     Mes Projets explique
                  </h1>
                </Badge>
            </div>

            <div className='md:px-20 my-20 rounded-r-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-r-2 md:w-1/2 '>
            <div className='p-4 w-full flex flex-col md:flex-row justify-between items-stretch gap-4 content-stretch'>
                        <img src='/projets/server.png' alt="server" className='object-cover rounded-sm h-[18rem] w-[18rem] shadow-md ' />
                        <div className='flex flex-col  justify-center gap-5' >
                              <h2 className='text-2xl font-bold'>
                                    Ça c'est mon serveur ! 
                              </h2>
                              <p className='text-sm font-medium'>
                                  Il est vilain, mais tres puissant, je l'ai construit moi meme ! <br/>
                                  j'ai configurer tous de a à z, le systeme d'authentification, le systeme de base de donnée, <br/>
                                  le systeme de stockage, le systeme de securité, le systeme de mise a jour, le systeme de backup etc... <br/>
                                  24go de Ram, intel core i7 9em Gen, 1to ssd, RX7800 XT 12go vRam.
                               </p>
                               <p className='text-md font-semibold'>Vous avez quoi ? c'est dessus que ce site est heberge !</p>
                        </div>
             
              </div>

        </div>
        <div className=' my-20 flex justify-end '> 
              <div className='p-4 md:w-1/2 flex flex-col md:flex-row-reverse justify-between items-end gap-4 content-stretch rounded-l-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-l-2 md:px-20'>
                        <img src='/logo/2.png' alt="server" className='object-cover rounded-full h-[18rem] w-[18rem] shadow-md ' />
                        <div className='flex flex-col  justify-center gap-5 text-end' >
                              <h2 className='text-2xl font-bold'>
                                    Mon plus gros projet
                              </h2>
                              <p className='text-sm font-medium'>
                                 Pour des raison de confidentialite je ne peux pas trop en parler, <br/>
                                 tous ce que je peux dire c'est que c'est un gros E-commerce, <br/>
                                 peu etre plus gros que jumia 
                               </p>
                               <p className='text-md font-semibold'>Si vous ete investisseur et que cela vous interesse 🤑, contactez moi !</p>
                        </div>
             
              </div>

        </div>

        <div className='md:px-20 my-20 rounded-r-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-r-2 md:w-1/2 '>
            <div className='p-4 w-full flex flex-col md:flex-row justify-between items-stretch gap-4 content-stretch'>
                        <img src='/projets/ai.png' alt="server" className='object-cover rounded-sm h-[18rem] w-[18rem] shadow-md ' />
                        <div className='flex flex-col  justify-center gap-5' >
                              <h2 className='text-2xl font-bold'>
                                    Ça c'est une intelligence artificielle !
                              </h2>
                              <p className='text-sm font-medium'>
                                  je l'ai implementer sur le serveur, <br/>
                                  il peut decrire une image en un seule mot ! <br/>
                                  Tu veux ça dans ton projet ? <br/>
                                  Contacte moi !<br/>
                                  Tu peux le tester ici 
                               </p>
                               <div className='flex flex-col gap-2'>
                       
                                  <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                  <Button onClick={handleSubmit}>
                                    {
                                      loading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : "Obtenir la légende"
                                    }
                                  </Button>
                              
                                {caption && <p className='font-bold text-center text-xl'>{caption}</p>}
                              </div>
                        </div>
             
              </div>

        </div>

        <div className=' my-20 flex justify-end '> 
        <div className='p-4 md:w-1/2 flex flex-col md:flex-row-reverse justify-between items-end gap-4 content-stretch rounded-l-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-l-2 md:px-20'>
                        <img src='/projets/server.png' alt="server" className='object-cover rounded-sm h-[18rem] w-[18rem] shadow-md ' />
                        <div className='flex flex-col  justify-center gap-5 text-end' >
                              <h2 className='text-2xl font-bold'>
                                    Ça c'est mon serveur ! 
                              </h2>
                              <p className='text-sm font-medium'>
                                  Il est vilain, mais tres puissant, je l'ai construit moi meme ! <br/>
                                  j'ai configurer tous de a à z, le systeme d'authentification, le systeme de base de donnée, <br/>
                                  le systeme de stockage, le systeme de securité, le systeme de mise a jour, le systeme de backup etc... <br/>
                                  24go de Ram, intel core i7 9em Gen, 1to ssd, RX7800 XT 12go vRam.
                               </p>
                               <p className='text-md font-semibold'>Vous avez quoi ? c'est dessus que ce site est heberge !</p>
                        </div>
             
              </div>

        </div>
    </div>
  )
}
