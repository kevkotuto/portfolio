"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Lock,
  Calendar,
  Briefcase,
  Sparkles,
  Tag,
  Building2,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryLabels, type Project } from "@/lib/data/projects";

const STATUS_LABELS: Record<Project["status"], string> = {
  production: "En production",
  active: "Actif",
  archived: "Archivé",
  wip: "En cours",
};

const STATUS_STYLES: Record<Project["status"], string> = {
  production:
    "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  active: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
  wip: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  archived: "bg-muted text-muted-foreground border-border",
};

export default function ProjetDetailClient({
  project,
  related,
}: {
  project: Project;
  related: Project[];
}) {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-card/50 to-background p-6 sm:p-8 md:p-12 mb-8"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_50%_50%_at_70%_30%,#000_30%,transparent_80%)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="outline" className={STATUS_STYLES[project.status]}>
            {STATUS_LABELS[project.status]}
          </Badge>
          <Badge variant="secondary">
            <Tag className="h-3 w-3 mr-1" /> {categoryLabels[project.category]}
          </Badge>
          {project.confidential && (
            <Badge variant="outline" className="gap-1">
              <Lock className="h-3 w-3" /> Projet client
            </Badge>
          )}
          {project.featured && (
            <Badge variant="outline" className="gap-1 border-primary/40 text-primary">
              <Sparkles className="h-3 w-3" /> Featured
            </Badge>
          )}
        </div>

        <div className="flex items-start gap-4 mb-4">
          {project.logo && (
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border bg-background/50 flex items-center justify-center flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.logo}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {project.title}
            </h1>
            {project.client && (
              <p className="mt-2 text-base sm:text-lg text-muted-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                {project.client}
              </p>
            )}
          </div>
        </div>

        <p className="text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.url && (
            <Button asChild className="rounded-xl gap-2 group">
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                Voir le site
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          )}
          {project.repo && (
            <Button asChild variant="outline" className="rounded-xl gap-2">
              <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Code source
              </Link>
            </Button>
          )}
        </div>
      </motion.div>

      {/* Meta + content grid */}
      <div className="grid lg:grid-cols-[1fr_280px] gap-6 mb-12">
        {/* Left — long content */}
        <div className="space-y-6">
          {project.longDescription && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 sm:p-8"
            >
              <h2 className="font-bold text-xl mb-3">À propos du projet</h2>
              <p className="text-foreground/85 leading-relaxed">
                {project.longDescription}
              </p>
            </motion.section>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 sm:p-8"
            >
              <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Points clés
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-3 text-foreground/85"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 sm:p-8"
          >
            <h2 className="font-bold text-xl mb-4">Stack technique</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg border bg-background/50 text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right sidebar — meta */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 h-fit lg:sticky lg:top-24 space-y-4"
        >
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              Rôle
            </div>
            <div className="font-semibold flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              {project.role}
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              Année
            </div>
            <div className="font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {project.year}
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              Catégorie
            </div>
            <div className="font-semibold flex items-center gap-2">
              <Tag className="h-4 w-4 text-primary" />
              {categoryLabels[project.category]}
            </div>
          </div>

          {project.client && (
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Client
              </div>
              <div className="font-semibold flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                {project.client}
              </div>
            </div>
          )}

          {project.url && (
            <div className="pt-2 border-t">
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                URL
              </div>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline break-all flex items-center gap-1 group"
              >
                {project.url.replace(/^https?:\/\//, "")}
                <ExternalLink className="h-3 w-3 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          )}
        </motion.aside>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="font-bold text-2xl mb-4">Projets similaires</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/projets/${p.slug}`}
                className="group rounded-2xl border bg-card/50 backdrop-blur-sm p-5 hover:border-primary/40 hover:bg-card/80 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <Badge variant="outline" className={`text-[10px] ${STATUS_STYLES[p.status]}`}>
                    {STATUS_LABELS[p.status]}
                  </Badge>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-bold leading-tight mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </>
  );
}
