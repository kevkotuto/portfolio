'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Eye, Loader2 } from 'lucide-react';

// Chargement dynamique du PDFViewer pour optimiser les performances
const PDFViewerComponent = dynamic(
  () => import('./PDFViewer'),
  {
    ssr: false,
    loading: () => (
      <div className="fixed bottom-6 left-6 z-50 print:hidden">
        <Button 
          disabled
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Loader2 className="h-4 w-4 animate-spin" />
          Chargement...
        </Button>
      </div>
    )
  }
);

interface CVData {
  nom: string;
  titre: string;
  resume: string;
  contact: {
    email: string;
    telephone: string;
    linkedin: string;
    github: string;
    localisation: string;
  };
  experience: Array<{
    poste: string;
    entreprise: string;
    periode: string;
    details: string[];
  }>;
  formation: Array<{
    diplome: string;
    institution: string;
    periode: string;
    details?: string;
  }>;
  competences: {
    langages: string[];
    frameworks: string[];
    bdd: string[];
    infrastructure: string[];
    outils: string[];
    paiement: string[];
    autres: string[];
    ia: string[];
  };
  langues: Array<{
    nom: string;
    niveau: string;
  }>;
}

interface DynamicPDFViewerProps {
  data: CVData;
}

const DynamicPDFViewer: React.FC<DynamicPDFViewerProps> = ({ data }) => {
  return <PDFViewerComponent data={data} />;
};

export default DynamicPDFViewer;