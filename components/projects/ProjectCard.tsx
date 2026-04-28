"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { createElement } from "react";

// Version statique pour le rendu côté serveur
const MotionDiv = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => 
  createElement('div', props, children);

interface ProjectCardProps {
  titre: string;
  description: string;
  image: string;
  technologies: string[];
  lien: string;
}

export default function ProjectCard({ 
  titre, 
  description, 
  image, 
  technologies, 
  lien 
}: ProjectCardProps) {
  return (
    <Link href={lien}>
      <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-lg border-primary/10 hover:border-primary/30">
        <div className="aspect-video overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all z-10" />
          <img 
            src={image} 
            alt={titre} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-3 right-3 z-20">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              <ExternalLink className="h-3 w-3 mr-1" /> 
              Voir détails
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
            {titre}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 