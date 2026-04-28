'use client'
import React, { useRef } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Typewriter } from 'react-simple-typewriter'
import { ArrowRight, ArrowDown, Github, Linkedin, Instagram, Download } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function Title() {
  const containerRef = useRef(null)
  
  return (
    <div ref={containerRef} className="flex flex-col items-center max-w-4xl mx-auto">
      <div className="mb-12 relative">
        <motion.div
          className="relative z-10 transform"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background drop-shadow-xl">
            <AvatarImage src="/image/pp.jpg" alt="Photo de profil" />
            <AvatarFallback>KG</AvatarFallback>
          </Avatar>
          
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-lg opacity-70 -z-10 animate-pulse"></div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-5 -right-5 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Badge variant="outline" className="bg-background/95 backdrop-blur-sm py-2 px-4 shadow-lg text-sm border-primary/20">
            <span className="inline-block mr-2 animate-wave text-xl">👋🏽</span> 
            Kevine Ghossoub
          </Badge>
        </motion.div>
      </div>
      
      <motion.div 
        className="text-center space-y-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-[140px] sm:h-[160px] md:h-[180px] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/70 bg-clip-text text-transparent">
              <Typewriter
                words={['Bienvenue dans mon univers.', 'Développeur FullStack', 'Web, Native et Analytics']}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                cursor
                cursorStyle="_"
                cursorColor="currentColor"
              />
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Passionné par la création d'expériences numériques intuitives et ergonomiques, 
          je transforme vos idées en solutions concrètes et performantes.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild
              size="lg" 
              className="px-6 group relative overflow-hidden"
            >
              <Link href="/projets" className="relative z-10 flex items-center">
                Découvrir mes projets
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild
              variant="outline" 
              size="lg" 
              className="px-6 group border-primary/20"
            >
              <Link href="/#contact" className="flex items-center">
                Me contacter
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <SocialButton href="https://github.com/kevkotuto" icon={<Github className="h-5 w-5" />} label="GitHub" />
          <SocialButton href="https://www.linkedin.com/in/ghossoub-kevine-boudalha-184929263" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
          <SocialButton href="https://www.instagram.com/kevine_ghoussoub" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
          <SocialButton href="/cv" icon={<Download className="h-5 w-5" />} label="Voir mon CV en ligne" />
        </motion.div>
      </motion.div>
    </div>
  )
}

const SocialButton = ({ href, icon, label }: SocialButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Link 
        href={href} 
        target={href.startsWith('/') && href !== '/cv' ? '_self' : '_blank'}
        rel="noopener noreferrer"
        download={href === '/cv.pdf'}
        aria-label={label}
      >
        <Button 
          variant="outline"
          size="icon" 
          className="h-11 w-11 rounded-full bg-background/70 border-border hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200 shadow-sm"
        >
          {icon}
          <span className="sr-only">{label}</span>
        </Button>
      </Link>
    </motion.div>
  )
}
