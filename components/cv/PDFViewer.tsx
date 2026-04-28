'use client';

import React, { useState } from 'react';
import CVPDFDocument from './CVPDFDocument';
import { Button } from '@/components/ui/button';
import { X, Eye, EyeOff } from 'lucide-react';

// Import dynamique de PDFViewer pour éviter les erreurs SSR
let PDFViewer: any = null;
if (typeof window !== 'undefined') {
  import('@react-pdf/renderer').then((module) => {
    PDFViewer = module.PDFViewer;
  });
}

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

interface PDFViewerComponentProps {
  data: CVData;
}

const PDFViewerComponent: React.FC<PDFViewerComponentProps> = ({ data }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPreview = async () => {
    if (!PDFViewer) {
      setIsLoading(true);
      try {
        const module = await import('@react-pdf/renderer');
        PDFViewer = module.PDFViewer;
        setShowPreview(true);
      } catch (error) {
        console.error('Erreur lors du chargement du visualiseur PDF:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setShowPreview(true);
    }
  };

  if (!showPreview) {
    return (
      <div className="fixed bottom-6 left-6 z-50 print:hidden">
        <Button 
          onClick={handleShowPreview}
          variant="outline"
          size="sm"
          className="gap-2"
          disabled={isLoading}
        >
          <Eye className="h-4 w-4" />
          {isLoading ? 'Chargement...' : 'Prévisualiser PDF'}
        </Button>
      </div>
    );
  }

  if (!PDFViewer) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 print:hidden">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <p>Chargement du visualiseur PDF...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 print:hidden">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Prévisualisation PDF</h3>
          <Button 
            onClick={() => setShowPreview(false)}
            variant="ghost"
            size="sm"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <PDFViewer 
            style={{ 
              width: '100%', 
              height: '100%',
              border: 'none'
            }}
          >
            <CVPDFDocument data={data} />
          </PDFViewer>
        </div>
        
        <div className="p-4 border-t bg-gray-50 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Cliquez sur le bouton de téléchargement dans la barre d'outils du visualiseur PDF pour sauvegarder le fichier.
          </p>
          <Button 
            onClick={() => setShowPreview(false)}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <EyeOff className="h-4 w-4" />
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewerComponent;