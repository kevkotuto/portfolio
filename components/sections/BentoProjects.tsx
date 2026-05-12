"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Lock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  featuredProjects,
  projects,
  type Project,
} from "@/lib/data/projects";

function ProjectTile({
  project,
  className = "",
  variant = "default",
}: {
  project: Project;
  className?: string;
  variant?: "default" | "large" | "wide";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 cursor-pointer ${className}`}
    >
      <Link href={`/projets/${project.slug}`} className="block h-full p-6 md:p-8 flex flex-col">
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="flex items-center gap-3">
            {project.logo && (
              <div className="h-10 w-10 rounded-lg overflow-hidden border bg-background/50 flex items-center justify-center flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.logo}
                  alt=""
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[10px] uppercase tracking-wide font-semibold">
                {project.role}
              </Badge>
            {project.confidential && (
              <Badge variant="outline" className="gap-1 text-[10px]">
                <Lock className="h-2.5 w-2.5" /> Client
              </Badge>
            )}
            {project.status === "production" && (
              <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-[10px]">
                Prod
              </Badge>
            )}
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
        </div>

        <h3
          className={`font-bold tracking-tight mb-2 ${
            variant === "large" ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          }`}
        >
          {project.title}
        </h3>

        {project.client && (
          <p className="text-xs text-muted-foreground mb-3">→ {project.client}</p>
        )}

        <p
          className={`text-sm text-muted-foreground leading-relaxed flex-grow ${
            variant === "large" ? "md:text-base" : ""
          }`}
        >
          {project.description}
        </p>

        {project.highlights && variant === "large" && (
          <ul className="mt-4 space-y-1.5 text-sm">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          {project.tech.slice(0, variant === "large" ? 6 : 4).map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wide font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.tech.length > (variant === "large" ? 6 : 4) && (
            <span className="text-[10px] text-muted-foreground">
              +{project.tech.length - (variant === "large" ? 6 : 4)}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{project.year}</span>
          {project.url && (
            <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              {project.url.replace(/^https?:\/\//, "").split("/")[0]}
              <ExternalLink className="h-3 w-3" />
            </span>
          )}
        </div>
      </Link>

      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
    </motion.div>
  );
}

export default function BentoProjects() {
  // Featured + first ~12 production projects for the bento
  const featured = featuredProjects;
  const others = projects
    .filter((p) => !p.featured && p.status === "production")
    .slice(0, 8);

  return (
    <section id="projets" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-3xl mb-8 sm:mb-12">
        <Badge variant="outline" className="mb-4">Projets</Badge>
        <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Plus de 30 projets,{" "}
          <span className="text-muted-foreground">25 en production active.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Du SaaS fintech à l&apos;IA conversationnelle, en passant par les apps mobiles,
          les e-commerces et l&apos;infra DevOps — voici un aperçu de ce que j&apos;ai
          construit ces dernières années.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 auto-rows-[minmax(200px,auto)] md:auto-rows-[minmax(220px,auto)]">
        {/* Featured 1 — big */}
        {featured[0] && (
          <ProjectTile
            project={featured[0]}
            variant="large"
            className="sm:col-span-2 md:col-span-4 md:row-span-2"
          />
        )}

        {/* Featured 2 */}
        {featured[1] && (
          <ProjectTile project={featured[1]} variant="default" className="md:col-span-2" />
        )}

        {/* Featured 3 */}
        {featured[2] && (
          <ProjectTile project={featured[2]} variant="default" className="md:col-span-2" />
        )}

        {/* Featured 4 — wide */}
        {featured[3] && (
          <ProjectTile project={featured[3]} variant="default" className="sm:col-span-2 md:col-span-3" />
        )}
        {featured[4] && (
          <ProjectTile project={featured[4]} variant="default" className="sm:col-span-2 md:col-span-3" />
        )}

        {/* Others — 2 per row on tablet, 3 on desktop */}
        {others.map((p) => (
          <ProjectTile key={p.slug} project={p} className="md:col-span-2" />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 group">
          <Link href="/projets">
            Voir tous les projets ({projects.length})
            <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
