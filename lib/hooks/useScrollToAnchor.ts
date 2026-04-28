"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const useScrollToAnchor = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // S'assurer que le code s'exécute uniquement côté client
    if (typeof window === "undefined") return;

    // Fonction pour gérer le défilement
    const handleScroll = () => {
      const hash = window.location.hash;
      
      if (hash) {
        // Supprime le # du début
        const id = hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          // Utiliser setTimeout pour s'assurer que la page est entièrement chargée
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Exécuter lors du montage initial
    handleScroll();

    // Écouter les changements d'URL
    window.addEventListener('hashchange', handleScroll);
    
    // Nettoyage
    return () => window.removeEventListener('hashchange', handleScroll);
  }, [pathname, searchParams]); // S'exécute à chaque changement de route ou de paramètres
}; 