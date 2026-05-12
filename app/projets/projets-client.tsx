"use client";

import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Lock,
  ExternalLink,
  Search,
  ListFilter,
  Star,
  Github,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  projects,
  categoryLabels,
  type Project,
  type ProjectCategory,
} from "@/lib/data/projects";

const STATUS_LABELS: Record<Project["status"], string> = {
  production: "En prod",
  active: "Actif",
  archived: "Archivé",
  wip: "En cours",
};

const STATUS_STYLES: Record<Project["status"], string> = {
  production: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  active: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
  wip: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  archived: "bg-muted text-muted-foreground border-border",
};

function ProjectCard({ project }: { project: Project }) {
  const hasUrl = Boolean(project.url);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 flex flex-col"
    >
      <Link href={`/projets/${project.slug}`} className="absolute inset-0 z-0" aria-label={project.title} />
      <div className="p-6 flex flex-col flex-1 relative z-10 pointer-events-none">
        <div className="contents [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" className={`text-[10px] ${STATUS_STYLES[project.status]}`}>
              {STATUS_LABELS[project.status]}
            </Badge>
            {project.confidential && (
              <Badge variant="outline" className="gap-1 text-[10px]">
                <Lock className="h-2.5 w-2.5" /> Client
              </Badge>
            )}
            {project.featured && (
              <Badge variant="outline" className="gap-1 text-[10px] border-primary/40 text-primary">
                <Star className="h-2.5 w-2.5" /> Featured
              </Badge>
            )}
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
        </div>

        <h3 className="font-bold text-lg leading-tight mb-1">{project.title}</h3>
        {project.client && (
          <p className="text-xs text-muted-foreground mb-3">→ {project.client}</p>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wide font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[10px] text-muted-foreground">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {project.year} · {project.role}
          </span>
          <div className="flex items-center gap-2">
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Code source"
                className="hover:text-primary relative z-10"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {hasUrl && (
              <Link
                href={project.url!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le site"
                className="hover:text-primary flex items-center gap-1 relative z-10"
              >
                Voir
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
          </div>
        </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjetsClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = [
          p.title,
          p.description,
          p.client ?? "",
          p.role,
          ...p.tech,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [search, activeCategory]);

  const categories = useMemo(() => {
    const set = new Set<ProjectCategory>();
    projects.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12"
      >
        <Badge variant="outline" className="mb-4">Portfolio complet</Badge>
        <h1 className="text-balance text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
          {projects.length} projets,{" "}
          <span className="text-muted-foreground">
            une décennie de tech africaine.
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          De l&apos;app mobile à l&apos;infra DevOps, du SaaS multi-tenant à l&apos;IoT —
          retrouvez ici l&apos;ensemble des produits que j&apos;ai conçus, codés et opérés.
        </p>
      </motion.div>

      {/* Search + filters */}
      <div className="sticky top-24 z-20 backdrop-blur-md bg-background/80 rounded-2xl border p-3 sm:p-4 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="Rechercher un projet, une tech, un client…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-11"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap">
            <ListFilter className="h-4 w-4" />
            {filtered.length} résultat{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
            className="rounded-full"
          >
            Tous ({projects.length})
          </Button>
          {categories.map((cat) => {
            const count = projects.filter((p) => p.category === cat).length;
            return (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full"
              >
                {categoryLabels[cat]} ({count})
              </Button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          Aucun projet ne correspond à ces critères.
        </div>
      )}
    </div>
  );
}
