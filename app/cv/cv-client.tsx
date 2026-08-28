"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Languages as LanguagesIcon,
  Download,
  Loader2,
  Globe,
  Sparkles,
  ArrowUpRight,
  Code2,
  Server,
  Smartphone,
  Brain,
  Boxes,
  Database,
  CreditCard,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cvData } from "@/lib/data/cv";
import { experiences, educations } from "@/lib/data/experience";
import { skillsByCategory, categoryLabels, type SkillCategory } from "@/lib/data/skills";
import { projects } from "@/lib/data/projects";
import { githubStats } from "@/lib/data/github-stats";
import { buildCvPdfData } from "@/lib/data/cv-pdf";

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

export default function CVClient() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const [{ pdf }, { default: CVPDFDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/cv/CVPDFDocument"),
      ]);
      const pdfData = buildCvPdfData();
      const blob = await pdf(<CVPDFDocument data={pdfData} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `CV_Kevine_Ghossoub.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  const productionCount = projects.filter((p) => p.status === "production").length;
  const categories = Object.keys(skillsByCategory) as SkillCategory[];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 max-w-7xl">
      {/* Header / Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border bg-gradient-to-br from-primary/10 via-card/50 to-background p-8 md:p-12 mb-8 relative overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_50%_50%_at_30%_50%,#000_30%,transparent_80%)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        </div>

        <div className="grid md:grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-start">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background shadow-xl">
            <AvatarImage src="/image/pp.jpg" alt={cvData.fullName} />
            <AvatarFallback className="text-2xl bg-primary/10">KG</AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <Badge variant="outline" className="mb-3 gap-1.5">
              <Sparkles className="h-3 w-3 text-primary" />
              Disponible pour collaborations
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {cvData.fullName}
            </h1>
            <p className="mt-2 text-base sm:text-lg md:text-xl text-muted-foreground">{cvData.title}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${cvData.contact.email}`}
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> {cvData.contact.email}
              </a>
              <a
                href={`tel:${cvData.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <Phone className="h-4 w-4" /> {cvData.contact.phone}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {cvData.contact.location}
              </span>
            </div>
          </div>

          <div className="flex md:flex-col gap-2 flex-wrap">
            <Button onClick={handleDownload} disabled={downloading} className="gap-2 rounded-xl">
              {downloading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Génération…
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" /> Télécharger PDF
                </>
              )}
            </Button>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="icon" className="rounded-xl">
                <Link
                  href={cvData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-xl">
                <Link
                  href={cvData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-xl">
                <Link href={cvData.contact.website} aria-label="Site">
                  <Globe className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-base text-foreground/85 leading-relaxed max-w-4xl">
          {cvData.resume}
        </p>
      </motion.div>

      {/* Stats bento */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
        {[
          { label: "Années d'expérience", value: "6", suffix: "" },
          { label: "Apps en production", value: productionCount.toString(), suffix: "" },
          { label: "Repos GitHub", value: githubStats.totalRepos.toString(), suffix: "" },
          { label: "Projets totaux", value: projects.length.toString(), suffix: "+" },
        ].map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card/50 backdrop-blur-sm p-4 sm:p-5"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {s.value}
              <span className="text-primary">{s.suffix}</span>
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main grid: 2 cols on desktop */}
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left col — Expériences + Formation (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-primary/10 p-2">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Expérience professionnelle</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={`${exp.company}-${idx}`}
                  className="relative pl-6 border-l-2 border-border"
                >
                  <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <Badge variant="outline" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                  <p className="text-sm mt-2 text-foreground/85">{exp.description}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  {exp.tech && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
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
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-primary/10 p-2">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Formation</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {educations.map((e) => (
                <div key={e.title} className="rounded-xl border bg-background/50 p-4">
                  <h3 className="font-semibold text-sm leading-tight">{e.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{e.school}</p>
                  <Badge variant="outline" className="mt-2 text-[10px]">
                    {e.period}
                  </Badge>
                  {e.details && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {e.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right col — Compétences + Langues + Soft (1/3) */}
        <div className="space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="rounded-lg bg-primary/10 p-2">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Stack technique</h2>
            </div>
            <div className="space-y-4">
              {categories.map((cat) => {
                const Icon = CATEGORY_ICONS[cat];
                return (
                  <div key={cat}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {categoryLabels[cat]}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skillsByCategory[cat].map((s) => (
                        <span
                          key={s.name}
                          className={`text-xs px-2 py-0.5 rounded-md border ${
                            s.level === "expert"
                              ? "bg-primary/10 border-primary/30 text-foreground font-medium"
                              : s.level === "avance"
                              ? "bg-muted/60 border-border text-foreground"
                              : "bg-background border-border text-muted-foreground"
                          }`}
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <LanguagesIcon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Langues</h2>
            </div>
            <div className="space-y-3">
              {cvData.languages.map((l) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{l.name}</span>
                    <span className="text-xs text-muted-foreground">{l.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6"
          >
            <h2 className="text-xl font-bold mb-4">Soft skills</h2>
            <div className="flex flex-wrap gap-2">
              {cvData.softSkills.map((s) => (
                <Badge key={s} variant="secondary" className="text-xs">
                  {s}
                </Badge>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-primary/5 backdrop-blur-sm p-6"
          >
            <h2 className="font-bold mb-2">Voir les projets</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {projects.length} projets répertoriés, dont {productionCount} en prod active.
            </p>
            <Button asChild className="w-full gap-2 rounded-xl">
              <Link href="/projets">
                Explorer le portfolio
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
