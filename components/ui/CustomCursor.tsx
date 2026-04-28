'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MousePointer, 
  Hand, 
  Type, 
  Move, 
  Link as LinkIcon, 
  ZoomIn,
  Copy
} from 'lucide-react';

type CursorType = 'default' | 'pointer' | 'text' | 'move' | 'link' | 'zoom' | 'copy';
type CursorTheme = 'light' | 'dark' | 'auto';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorTheme, setCursorTheme] = useState<CursorTheme>('auto');
  const [cursorColor, setCursorColor] = useState('#FFFFFF');
  const [cursorBgColor, setCursorBgColor] = useState('rgba(0, 0, 0, 0.2)');

  useEffect(() => {
    // Ne pas afficher sur les appareils tactiles
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }
    setIsVisible(true);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      
      // Détection de la couleur/thème de l'arrière-plan
      const dataCursorTheme = target.closest('[data-cursor-theme]')?.getAttribute('data-cursor-theme') as CursorTheme | null;
      const dataCursorColor = target.closest('[data-cursor-color]')?.getAttribute('data-cursor-color');
      const dataCursorBgColor = target.closest('[data-cursor-bg-color]')?.getAttribute('data-cursor-bg-color');
      
      // Classes couramment utilisées pour les fonds sombres ou clairs
      const isDarkElement = target.closest('.dark, .bg-black, .bg-gray-900, .bg-slate-900, .bg-zinc-900, [data-theme="dark"]');
      const isLightElement = target.closest('.light, .bg-white, .bg-gray-100, .bg-slate-100, .bg-zinc-100, [data-theme="light"]');
      
      // Déterminer le thème en fonction des attributs et classes
      if (dataCursorTheme) {
        setCursorTheme(dataCursorTheme);
      } else if (isDarkElement) {
        setCursorTheme('dark');
      } else if (isLightElement) {
        setCursorTheme('light');
      } else {
        setCursorTheme('auto');
      }
      
      // Appliquer des couleurs personnalisées si spécifiées
      if (dataCursorColor) {
        setCursorColor(dataCursorColor);
      } else {
        setCursorColor(cursorTheme === 'dark' ? '#FFFFFF' : cursorTheme === 'light' ? '#000000' : '#FFFFFF');
      }
      
      if (dataCursorBgColor) {
        setCursorBgColor(dataCursorBgColor);
      } else {
        setCursorBgColor(cursorTheme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : cursorTheme === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
      }
      
      // Déterminer le type de curseur en fonction de l'élément survolé
      if (target.closest('a, [data-link]')) {
        setCursorType('link');
        setIsHoveringInteractive(true);
      } else if (target.closest('button, [role="button"], [data-interactive]')) {
        setCursorType('pointer');
        setIsHoveringInteractive(true);
      } else if (target.closest('input, textarea, [contenteditable="true"], [data-text]')) {
        setCursorType('text');
        setIsHoveringInteractive(true);
      } else if (target.closest('[data-movable]')) {
        setCursorType('move');
        setIsHoveringInteractive(true);
      } else if (target.closest('[data-zoomable]')) {
        setCursorType('zoom');
        setIsHoveringInteractive(true);
      } else if (target.closest('[data-copiable]')) {
        setCursorType('copy');
        setIsHoveringInteractive(true);
      } else {
        setCursorType('default');
        setIsHoveringInteractive(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cacher le curseur système
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      // Rétablir le curseur système
      document.body.style.cursor = '';
    };
  }, [cursorTheme]);

  if (!isVisible) return null;

  const getCursorIcon = () => {
    const iconColor = cursorColor;
    const iconProps = { style: { color: iconColor }, size: 16 };

    switch (cursorType) {
      case 'pointer':
        return <Hand {...iconProps} />;
      case 'text':
        return <Type {...iconProps} />;
      case 'move':
        return <Move {...iconProps} />;
      case 'link':
        return <LinkIcon {...iconProps} />;
      case 'zoom':
        return <ZoomIn {...iconProps} />;
      case 'copy':
        return <Copy {...iconProps} />;
      default:
        return <MousePointer {...iconProps} />;
    }
  };

  // Déterminer le style du curseur en fonction du thème
  const getCursorStyle = () => {
    if (cursorTheme === 'auto') {
      return { mixBlendMode: 'difference' as const };
    }
    return {};
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ 
        x: position.x, 
        y: position.y,
        translateX: '-50%',
        translateY: '-50%',
        ...getCursorStyle()
      }}
      animate={{
        scale: isClicking ? 0.9 : 1,
        opacity: 1
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 20,
        mass: 0.1
      }}
    >
      {/* Cercle extérieur */}
      <motion.div 
        className="relative flex items-center justify-center"
        animate={{
          width: isHoveringInteractive ? 40 : 24,
          height: isHoveringInteractive ? 40 : 24,
          backgroundColor: isHoveringInteractive ? cursorBgColor : 'transparent',
          borderWidth: '2px',
          borderColor: cursorColor,
          borderRadius: '50%'
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Icône du curseur */}
        <motion.div 
          className="absolute"
          animate={{
            opacity: isHoveringInteractive ? 1 : 0,
            scale: isHoveringInteractive ? 1 : 0.5
          }}
        >
          {getCursorIcon()}
        </motion.div>
        
        {/* Point central */}
        <motion.div 
          animate={{
            width: isHoveringInteractive ? 0 : 4,
            height: isHoveringInteractive ? 0 : 4,
            opacity: isHoveringInteractive ? 0 : 1,
            backgroundColor: cursorColor
          }}
          className="rounded-full"
        />
      </motion.div>
      
      {/* Effet "traînée" (optionnel) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 4,
          height: 4,
          x: -2,
          y: -2,
          backgroundColor: `${cursorColor}30`
        }}
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 0.2, 0]
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeOut'
        }}
      />
    </motion.div>
  );
};

export default CustomCursor; 