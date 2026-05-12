"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
      {/* Background grid + radial */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center"
        >
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Badge variant="outline" className="gap-1.5 py-1.5 px-3 border-primary/30 bg-primary/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponible pour de nouveaux projets
            </Badge>
            <Badge variant="secondary" className="gap-1.5 py-1.5 px-3">
              <MapPin className="h-3 w-3" /> Abidjan, Côte d&apos;Ivoire
            </Badge>
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-foreground">Kevine</span>{" "}
            <span className="bg-gradient-to-br from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent">
              Ghossoub
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base sm:text-lg md:text-2xl text-muted-foreground leading-relaxed">
            Développeur fullstack senior — 6 ans à concevoir, coder et opérer des
            produits web, mobiles et IA. Du POC à la prod déployée sur mon propre VPS.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            <Button asChild size="lg" className="rounded-xl gap-2 group">
              <Link href="#projets">
                Voir mes projets
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl gap-2">
              <Link href="mailto:kevine@generale-ci.com">
                <Mail className="h-4 w-4" /> Me contacter
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-xl gap-2">
              <Link
                href="https://github.com/kevkotuto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
            <span>
              <strong className="text-foreground">25+ apps en production</strong> · 99 repos GitHub
              · stack TypeScript / Next / NestJS / Expo
            </span>
          </div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto md:mx-0 order-first md:order-last"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl" aria-hidden />
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-1 ring-primary/20">
            <Image
              src="/image/pp.jpg"
              alt="Kevine Ghossoub"
              fill
              priority
              sizes="(max-width: 768px) 192px, 256px"
              className="object-cover"
            />
          </div>
          {/* Online dot */}
          <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500 border-4 border-background flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
