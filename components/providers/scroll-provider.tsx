'use client';

import React, { Suspense } from 'react';
import { useScrollToAnchor } from '@/lib/hooks/useScrollToAnchor';

function ScrollToAnchorComponent() {
  // Utiliser le hook pour ajouter la fonctionnalité de défilement vers les ancres
  useScrollToAnchor();
  
  // Ce composant n'affiche rien, il est uniquement utilisé pour exécuter le hook
  return null;
}

export default function ScrollProvider() {
  return (
    <Suspense fallback={null}>
      <ScrollToAnchorComponent />
    </Suspense>
  );
} 