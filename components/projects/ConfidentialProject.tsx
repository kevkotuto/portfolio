import React from 'react';
import { LockKeyhole, Timer } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConfidentialProjectProps {
  title?: string;
  className?: string;
  comingSoon?: boolean;
}

const ConfidentialProject: React.FC<ConfidentialProjectProps> = ({
  title = "Projet Confidentiel",
  className,
  comingSoon = true
}) => {
  return (
    <div className={cn("relative w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden", className)}>
      {/* Grille de logos "Confidentiel" semi-transparents */}
      <div className="absolute inset-0 flex flex-wrap opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="p-2 rotate-[-20deg]">
            <LockKeyhole size={24} />
          </div>
        ))}
      </div>
      
      {/* Message principal */}
      <div className="z-10 bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 text-center shadow-lg">
        <LockKeyhole className="h-10 w-10 mx-auto mb-2 text-primary" />
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Contenu confidentiel
        </p>
        
        {comingSoon && (
          <div className="mt-3 flex items-center justify-center text-xs text-primary font-medium">
            <Timer className="h-3 w-3 mr-1" /> 
            <span>Bientôt disponible</span>
          </div>
        )}
      </div>
      
      {/* Ruban diagonal "Confidentiel" */}
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/2 rotate-45 bg-yellow-400 text-yellow-800 font-bold py-1 px-10 text-xs shadow-md">
        CONFIDENTIEL
      </div>
    </div>
  );
};

export default ConfidentialProject; 