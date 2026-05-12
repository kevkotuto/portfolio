"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { skillsByCategory, categoryLabels, type SkillCategory } from "@/lib/data/skills";
import {
  Code2,
  Server,
  Smartphone,
  Brain,
  Boxes,
  Database,
  CreditCard,
  Wrench,
} from "lucide-react";

const CATEGORY_ICONS: Record<SkillCategory, any> = {
  frontend: Code2,
  backend: Server,
  mobile: Smartphone,
  ai: Brain,
  devops: Boxes,
  database: Database,
  payment: CreditCard,
  tools: Wrench,
};

const LEVEL_DOTS: Record<string, number> = {
  expert: 3,
  avance: 2,
  intermediaire: 1,
};

export default function SkillsGrid() {
  const categories = Object.keys(skillsByCategory) as SkillCategory[];

  return (
    <section id="competences" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-3xl mb-8 sm:mb-12">
        <Badge variant="outline" className="mb-4">Stack technique</Badge>
        <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Une stack large,{" "}
          <span className="text-muted-foreground">éprouvée en production.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Compétences accumulées sur plus de 30 projets — du front au back, du mobile à l&apos;IA,
          en passant par l&apos;infra DevOps et les paiements Mobile Money africains.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {categories.map((cat, idx) => {
          const Icon = CATEGORY_ICONS[cat];
          const skills = skillsByCategory[cat];
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-base">{categoryLabels[cat]}</h3>
              </div>

              <ul className="space-y-2.5">
                {skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between text-sm gap-3"
                  >
                    <span className="text-foreground truncate">{s.name}</span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[1, 2, 3].map((dot) => (
                        <span
                          key={dot}
                          className={`h-1.5 w-1.5 rounded-full transition-colors ${
                            dot <= LEVEL_DOTS[s.level] ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Expert
        </span>
        <span className="flex items-center gap-1.5">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted" />
          </span>
          Avancé
        </span>
        <span className="flex items-center gap-1.5">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted" />
          </span>
          Intermédiaire
        </span>
      </div>
    </section>
  );
}
