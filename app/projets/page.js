'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

import React, { useState } from 'react';

export default function Page() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!file) {
      alert('Veuillez sélectionner un fichier');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/caption', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        alert(`Erreur lors de la requête : ${errorText}`);
        return;
      }

      const contentType = res.headers.get('content-type');

      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        alert('Réponse inattendue du serveur : ' + text);
        return;
      }

      if (data.error) {
        alert(data.error);
      } else {
        setCaption(
          data.description ||
            data.caption ||
            data.message ||
            'Pas de description disponible'
        );
      }
    } catch (error) {
      alert(`Une erreur est survenue : ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-[6rem] rounded-b-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-b-2"></div>
      <div className="flex justify-center items-center flex-col px-20">
        <Badge
          variant="outline"
          className="-translate-y-4 bg-white text-xl px-4 text-sm rotate-3"
        >
          <h1>Mes Projets expliqués</h1>
        </Badge>
      </div>

      {/* Première Section */}
      <div className="md:px-20 my-20 rounded-r-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-r-2 md:w-1/2">
        <div className="p-4 w-full flex flex-col md:flex-row justify-between items-stretch gap-4">
          <img
            src="/projets/server.png"
            alt="server"
            className="object-cover rounded-sm h-[18rem] w-[18rem] shadow-md"
          />
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-2xl font-bold">Ça c'est mon serveur !</h2>
            <p className="text-sm font-medium">
              Il est vilain, mais très puissant, je l'ai construit moi-même !
              <br />
              J'ai configuré tout de A à Z : le système d'authentification, le
              système de base de données,
              <br />
              le système de stockage, le système de sécurité, le système de mise
              à jour, le système de backup, etc.
              <br />
              24 Go de RAM, Intel Core i7 9ème Gen, 1 To SSD, RX 7800 XT 12 Go
              VRAM.
            </p>
            <p className="text-md font-semibold">
              Vous avez quoi ? C'est dessus que ce site est hébergé !
            </p>
          </div>
        </div>
      </div>

      {/* Deuxième Section */}
      <div className="my-20 flex justify-end">
        <div className="p-4 md:w-1/2 flex flex-col md:flex-row-reverse justify-between items-end gap-4 rounded-l-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-l-2 md:px-20">
          <img
            src="/logo/2.png"
            alt="projet"
            className="object-cover rounded-full h-[18rem] w-[18rem] shadow-md"
          />
          <div className="flex flex-col justify-center gap-5 text-end">
            <h2 className="text-2xl font-bold">Mon plus gros projet</h2>
            <p className="text-sm font-medium">
              Pour des raisons de confidentialité, je ne peux pas trop en
              parler.
              <br />
              Tout ce que je peux dire, c'est que c'est un gros e-commerce,
              <br />
              peut-être plus gros que Jumia.
            </p>
            <p className="text-md font-semibold">
              Si vous êtes investisseur et que cela vous intéresse 🤑,
              contactez-moi !
            </p>
          </div>
        </div>
      </div>

      {/* Troisième Section */}
      <div className="md:px-20 my-20 rounded-r-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-r-2 md:w-1/2">
        <div className="p-4 w-full flex flex-col md:flex-row justify-between items-stretch gap-4">
          <img
            src="/projets/ai.png"
            alt="intelligence artificielle"
            className="object-cover rounded-sm h-[18rem] w-[18rem] shadow-md"
          />
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-2xl font-bold">
              Ça c'est une intelligence artificielle !
            </h2>
            <p className="text-sm font-medium">
              Je l'ai implémentée sur le serveur.
              <br />
              Elle peut décrire une image en un seul mot !
              <br />
              Tu veux ça dans ton projet ?
              <br />
              Contacte-moi !
              <br />
              Tu peux le tester ici :
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  'Obtenir la légende'
                )}
              </Button>
              {caption && (
                <p className="font-bold text-center text-xl">{caption}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quatrième Section */}
      <div className="my-20 flex justify-end">
        <div className="p-4 md:w-1/2 flex flex-col md:flex-row-reverse justify-between items-end gap-4 rounded-l-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-l-2 md:px-20">
          <img
            src="/projets/server.png"
            alt="server"
            className="object-cover rounded-sm h-[18rem] w-[18rem] shadow-md"
          />
          <div className="flex flex-col justify-center gap-5 text-end">
            <h2 className="text-2xl font-bold">Ça c'est mon serveur !</h2>
            <p className="text-sm font-medium">
              Il est vilain, mais très puissant, je l'ai construit moi-même !
              <br />
              J'ai configuré tout de A à Z : le système d'authentification, le
              système de base de données,
              <br />
              le système de stockage, le système de sécurité, le système de mise
              à jour, le système de backup, etc.
              <br />
              24 Go de RAM, Intel Core i7 9ème Gen, 1 To SSD, RX 7800 XT 12 Go
              VRAM.
            </p>
            <p className="text-md font-semibold">
              Vous avez quoi ? C'est dessus que ce site est hébergé !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}