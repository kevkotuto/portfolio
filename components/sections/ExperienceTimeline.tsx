"use client";

import { motion } from "motion/react";
import { Briefcase, Rocket, Wrench, Lightbulb, Moon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experience";

const TYPE_CONFIG = {
  fulltime: { label: "Temps plein", icon: Briefcase, color: "text-blue-500" },
  freelance: { label: "Freelance", icon: Wrench, color: "text-amber-500" },
  founder: { label: "Founder", icon: Rocket, color: "text-emerald-500" },
  consultant: { label: "Consultant", icon: Lightbulb, color: "text-purple-500" },
  weekend: { label: "CTO week-end", icon: Moon, color: "text-indigo-500" },
};

export default function ExperienceTimeline() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-3xl mb-8 sm:mb-12">
        <Badge variant="outline" className="mb-4">Parcours</Badge>
        <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Six ans à construire,{" "}
          <span className="text-muted-foreground">à livrer, à scaler.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Aujourd&apos;hui en cumul : deux temps pleins (Bernabé CI &amp; Yeshigroup),
          du conseil (Upjunoo) et la direction technique d&apos;Inexiumus le week-end.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const cfg = TYPE_CONFIG[exp.type];
            const Icon = cfg.icon;
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={`${exp.company}-${exp.startYear}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 pl-12 md:pl-0`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10">
                  <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-background shadow" />
                  {exp.current && (
                    <span className="absolute inset-0 h-3 w-3 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Card */}
                <div className={`${isLeft ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}>
                  <div className="rounded-2xl border bg-card/50 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors">
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${isLeft ? "md:justify-end" : ""}`}
                    >
                      <Badge variant="outline" className="gap-1">
                        <Icon className={`h-3 w-3 ${cfg.color}`} />
                        {cfg.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                      {exp.current && (
                        <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-[10px]">
                          En cours
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                    <p className="text-sm mt-3 text-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul
                      className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${isLeft ? "md:text-right" : ""}`}
                    >
                      {exp.achievements.slice(0, 3).map((a, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-2">
                          {!isLeft && (
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          )}
                          <span className="flex-1">{a}</span>
                          {isLeft && (
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0 hidden md:block order-first" />
                          )}
                        </li>
                      ))}
                    </ul>
                    {exp.tech && (
                      <div
                        className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}
                      >
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-wide font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
