'use client'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Mail, Copy, FileText, Menu, X, Github, Linkedin, Instagram, Home, Code, User, Briefcase } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// Menu des liens principaux
const mainLinks: NavLink[] = [
  { name: 'Accueil', href: '/', icon: <Home className="h-4 w-4" /> },
  { name: 'Projets', href: '/projets', icon: <Code className="h-4 w-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="h-4 w-4" /> },
  // Liens internes avec # - commenter pour l'instant car la logique d'activation nécessite plus
  // { name: 'À propos', href: '/#about', icon: <User className="h-4 w-4" /> },
  // { name: 'Expérience', href: '/#experience', icon: <Briefcase className="h-4 w-4" /> },
];

// Menu des réseaux sociaux
const socialLinks: NavLink[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ghossoub-kevine-boudalha-184929263', icon: <Linkedin className="h-4 w-4" /> },
  { name: 'GitHub', href: 'https://github.com/kevkotuto', icon: <Github className="h-4 w-4" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/kevine_ghoussoub', icon: <Instagram className="h-4 w-4" /> },
];

const MotionButton = motion(Button);
const MotionLink = motion(Link);

export default function Header() {
  const [copied, setCopied] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const textToCopy: string = "kevine@generale-ci.com";
  const { toast } = useToast();
  const pathname = usePathname();
  
  // Gérer le défilement
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Nettoyage au démontage et fermeture du menu si ouvert
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setMobileMenuOpen(false);
    };
  }, [scrolled]);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]); // Exécuter seulement si pathname change
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast({
        title: "Email copié avec succès !",
        description: "Vous pouvez maintenant le coller où vous le souhaitez.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Échec de la copie : ", error);
      toast({ 
        title: "Erreur", 
        description: "Impossible de copier l'email.", 
        variant: "destructive"
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Effets de survol/clic réutilisables
  const buttonHoverTap = { whileHover: { scale: 1.05, transition:{ duration: 0.2 } }, whileTap: { scale: 0.95 } };
  const iconHoverTap = { whileHover: { scale: 1.1, transition:{ duration: 0.2 } }, whileTap: { scale: 0.9 } };

  return (
    <motion.header 
      initial={false} // Empêche l'animation initiale au chargement
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        top: { backgroundColor: 'rgba(var(--background-rgb), 0)', boxShadow: 'none' }, // Utiliser rgba pour transition
        scrolled: { 
          backgroundColor: 'rgba(var(--background-rgb), 0.65)', // Ajuster l'opacité
          backdropFilter: 'blur(12px)',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' 
        }
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`w-full sticky top-0 z-50 backdrop-blur-sm ${scrolled ? 'glass-effect' : ''}`}
      style={{ '--background-rgb': 'var(--background)' } as React.CSSProperties} // Passer la variable CSS pour l'animation
    >
      <div className='container mx-auto flex h-16 items-center justify-between'>
        {/* Partie Gauche: Logo + Nav Desktop */}
        <div className='flex items-center gap-2'>
          <MotionLink 
            href="/" 
            className='font-bold text-xl relative group'
            {...iconHoverTap}
          >
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              KG
            </span>
            {/* Soulignement animé */}
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            /> 
          </MotionLink>
          
          <nav className='hidden md:flex items-center ml-6 lg:ml-8'>
            <ul className='flex space-x-1'>
              {mainLinks.map((link) => {
                const isActive = pathname === link.href || 
                               (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <li key={link.name}>
                    <MotionButton 
                      variant={isActive ? 'secondary' : 'ghost'} 
                      size='sm' 
                      asChild
                      className='gap-1.5'
                      {...buttonHoverTap}
                    >
                      <Link href={link.href}>
                        {link.icon}
                        {link.name}
                      </Link>
                    </MotionButton>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        
        {/* Partie Droite: Infos + Actions Desktop */}
        <div className='hidden md:flex items-center gap-3 lg:gap-4'>
          {/* Email Info */} 
          <div className='flex items-center gap-1 bg-muted/60 rounded-full pl-3 pr-1 py-1 text-sm group'>
            <Mail className='h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0' />
            <span className='text-muted-foreground hidden xl:inline'>{textToCopy}</span>
            <MotionButton 
              variant='ghost' 
              size='icon' 
              onClick={handleCopy} 
              title="Copier l'email" 
              className='h-7 w-7 flex-shrink-0'
              {...iconHoverTap}
              aria-label="Copier l'adresse email"
            >
              <Copy className={`h-3.5 w-3.5 transition-colors duration-200 ${copied ? 'text-green-500' : ''}`} />
            </MotionButton>
          </div>
          
          {/* Réseaux sociaux */} 
          <div className='flex items-center gap-0.5'>
            {socialLinks.map((link) => (
              <MotionButton 
                key={link.name} 
                variant='ghost' 
                size='icon' 
                asChild 
                className='h-8 w-8 text-muted-foreground hover:text-primary'
                {...iconHoverTap}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer" title={link.name} aria-label={link.name}>
                  {link.icon}
                </Link>
              </MotionButton>
            ))}
          </div>
          
          {/* Bouton CV */}
          <MotionButton 
            variant='outline' 
            size='sm' 
            asChild 
            className='gap-1.5'
            {...buttonHoverTap}
          >
            <Link href="/cv">
              <FileText className='h-4 w-4' />
              CV
            </Link>
          </MotionButton>
          
          <ThemeSwitcher />
        </div>
        
        {/* Menu Mobile: Boutons */} 
        <div className='flex items-center gap-2 md:hidden'>
          <ThemeSwitcher />
          <MotionButton 
            variant='ghost' 
            size='icon' 
            onClick={toggleMobileMenu}
            title={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            {...iconHoverTap}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div 
                key={mobileMenuOpen ? 'x' : 'menu'} 
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
              </motion.div>
            </AnimatePresence>
          </MotionButton>
        </div>
      </div>
       
      {/* Panel Mobile */} 
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            key="mobile-menu-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='md:hidden border-t border-border overflow-hidden'
            // Ajout de styles pour s'assurer que l'arrière-plan est opaque pendant l'animation
            style={{ backgroundColor: 'hsl(var(--background))' }} 
          >
            <div className="p-4 space-y-4"> 
              {/* Navigation Mobile */} 
              <nav aria-label="Navigation mobile">
                <ul className='grid grid-cols-2 gap-2'>
                  {mainLinks.map((link) => {
                    const isActive = pathname === link.href || 
                                   (link.href !== '/' && pathname.startsWith(link.href));
                    return (
                      <li key={link.name}>
                        <MotionButton 
                          variant={isActive ? 'secondary' : 'outline'} 
                          size='sm' 
                          asChild
                          className='w-full justify-start gap-2'
                          onClick={toggleMobileMenu} // Ferme le menu au clic
                          {...buttonHoverTap}
                        >
                          <Link href={link.href}>
                            {link.icon}
                            {link.name}
                          </Link>
                        </MotionButton>
                      </li>
                    );
                  })}
                </ul>
              </nav>
               
              {/* Actions Mobile */} 
              <div className='border rounded-md px-3 py-2 flex items-center justify-between text-sm'>
                <div className='flex items-center gap-2 truncate'>
                  <Mail className='h-4 w-4 flex-shrink-0 text-muted-foreground' />
                  <span className='truncate'>{textToCopy}</span>
                </div>
                <MotionButton 
                  variant='ghost' 
                  size='icon' 
                  onClick={handleCopy}
                  className='h-7 w-7 flex-shrink-0 -mr-2'
                  {...iconHoverTap}
                  aria-label="Copier l'adresse email"
                >
                  <Copy className={`h-4 w-4 transition-colors duration-200 ${copied ? 'text-green-500' : ''}`} />
                </MotionButton>
              </div>
               
              <div className='grid grid-cols-2 gap-2'>
                <MotionButton 
                  variant='outline' 
                  size='sm' 
                  asChild 
                  className='gap-1.5 w-full'
                  {...buttonHoverTap}
                >
                  <Link href="/cv">
                    <FileText className='h-4 w-4' />
                    CV
                  </Link>
                </MotionButton>
                 
                <div className='flex justify-around items-center border rounded-md px-2'>
                  {socialLinks.map((link) => (
                    <MotionLink 
                      key={link.name} 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title={link.name}
                      aria-label={link.name}
                      className='p-1.5 text-muted-foreground hover:text-primary'
                      {...iconHoverTap}
                    >
                      {link.icon}
                    </MotionLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
