'use client';

import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'motion/react';
import { Briefcase, Code, Award, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer'; // Pour déclencher l'animation quand visible
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: 4, // Adaptez cette valeur
    label: "Années d'expérience",
    suffix: "+"
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    value: 25, // Adaptez cette valeur
    label: "Projets Réalisés",
    suffix: "+"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: 18, // Adaptez cette valeur
    label: "Certifications",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: 10, // Adaptez cette valeur
    label: "Clients Satisfaits",
    suffix: "+"
  },
];

const StatCard = ({ item, startCounting }: { item: StatItem; startCounting: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="text-center bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader className="flex justify-center items-center pb-4">
        {item.icon}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-1">
          {startCounting && (
            <CountUp 
              start={0} 
              end={item.value} 
              duration={2.5} 
              separator=" "
              suffix={item.suffix}
              enableScrollSpy // Démarre quand l'élément est visible
              scrollSpyDelay={100} // Petit délai
            />
          )}
          {!startCounting && <span>0{item.suffix}</span>} {/* Affiche 0 avant le démarrage */} 
        </div>
        <p className="text-muted-foreground text-sm">{item.label}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Déclenche l'animation une seule fois
    threshold: 0.3,    // Déclenche quand 30% est visible
  });

  return (
    <section ref={ref} className="container py-16">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={{ 
          initial: { opacity: 0 }, 
          animate: { opacity: 1, transition: { staggerChildren: 0.15 } } 
        }}
      >
        {stats.map((stat, index) => (
          <StatCard key={index} item={stat} startCounting={inView} />
        ))}
      </motion.div>
    </section>
  );
} 