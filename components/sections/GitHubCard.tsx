"use client";

import { motion } from "motion/react";
import { Github, GitCommit, Star, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { githubStats, generateContributionData } from "@/lib/data/github-stats";
import Link from "next/link";
import { useMemo } from "react";

const CONTRIBUTION_COLORS = [
  "bg-muted/40",
  "bg-emerald-900/60 dark:bg-emerald-900/70",
  "bg-emerald-700/70 dark:bg-emerald-700/80",
  "bg-emerald-500/80",
  "bg-emerald-400",
];

const MONTHS_FR = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];

export default function GitHubCard() {
  const data = useMemo(() => generateContributionData(), []);

  // Organize into weeks (53 columns x 7 days)
  const weeks = useMemo(() => {
    const result: { date: string; count: number; level: number }[][] = [];
    const firstDate = new Date(data[0].date);
    const firstDay = firstDate.getDay(); // 0 = Sunday
    // Pad with empty cells before first date
    const padded = [
      ...Array.from({ length: firstDay }, () => ({ date: "", count: 0, level: 0 })),
      ...data,
    ];
    for (let i = 0; i < padded.length; i += 7) {
      result.push(padded.slice(i, i + 7));
    }
    return result;
  }, [data]);

  // Compute month labels (first week index of each month change)
  const monthLabels = useMemo(() => {
    const labels: { weekIndex: number; month: string }[] = [];
    let currentMonth = -1;
    weeks.forEach((week, wi) => {
      const firstValid = week.find((d) => d.date);
      if (!firstValid) return;
      const m = new Date(firstValid.date).getMonth();
      if (m !== currentMonth) {
        currentMonth = m;
        labels.push({ weekIndex: wi, month: MONTHS_FR[m] });
      }
    });
    return labels;
  }, [weeks]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl sm:rounded-3xl border bg-card/50 backdrop-blur-sm p-4 sm:p-6 md:p-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Github className="h-5 w-5" />
            <Link
              href={githubStats.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              @{githubStats.username}
            </Link>
            <Badge variant="secondary" className="gap-1">
              <Activity className="h-3 w-3" /> Actif
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">{githubStats.yearContributions}+</strong>{" "}
            contributions cette année · {githubStats.totalRepos} repos publics & privés
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-wrap gap-2 sm:gap-3">
          {githubStats.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border bg-background/50 px-3 sm:px-4 py-2 lg:min-w-[110px]"
            >
              <div className="text-xl sm:text-2xl font-bold tracking-tight">
                {h.value}
                <span className="text-primary">{h.suffix}</span>
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution heatmap */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-flex flex-col gap-1 min-w-full">
          {/* Month labels */}
          <div className="relative h-4 ml-8">
            {monthLabels.map((l) => (
              <span
                key={`${l.weekIndex}-${l.month}`}
                className="absolute text-[10px] text-muted-foreground"
                style={{ left: `${l.weekIndex * 14}px` }}
              >
                {l.month}
              </span>
            ))}
          </div>
          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-1 pr-1 text-[10px] text-muted-foreground">
              <span className="h-3" />
              <span className="h-3">Lun</span>
              <span className="h-3" />
              <span className="h-3">Mer</span>
              <span className="h-3" />
              <span className="h-3">Ven</span>
              <span className="h-3" />
            </div>
            {/* Grid */}
            <div className="flex gap-1">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((day, di) => (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: wi * 0.003 }}
                      className={`h-3 w-3 rounded-sm ${
                        day.date ? CONTRIBUTION_COLORS[day.level] : "bg-transparent"
                      } hover:ring-2 hover:ring-primary/40 transition`}
                      title={day.date ? `${day.date}: ${day.count} contribution(s)` : ""}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend + langues */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Moins</span>
          {CONTRIBUTION_COLORS.map((c, i) => (
            <div key={i} className={`h-3 w-3 rounded-sm ${c}`} />
          ))}
          <span>Plus</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          {githubStats.topLanguages.slice(0, 5).map((lang) => (
            <div key={lang.name} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: lang.color }}
              />
              <span className="text-muted-foreground">{lang.name}</span>
              <span className="text-foreground font-medium">{lang.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
