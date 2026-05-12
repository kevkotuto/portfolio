"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border bg-gradient-to-br from-primary/10 via-card/50 to-background p-6 sm:p-8 md:p-16 text-center"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,#000_30%,transparent_80%)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        </div>

        <h2 className="text-balance text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
          Un projet en tête&nbsp;?{" "}
          <span className="bg-gradient-to-br from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent">
            Discutons-en.
          </span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Du POC validé en 2 semaines à la plateforme multi-tenant, en passant par
          l&apos;intégration de paiements mobile money et l&apos;infra DevOps — je peux
          vous accompagner sur l&apos;ensemble du cycle.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-xl gap-2 group">
            <Link href="/contact">
              Démarrer un projet
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl gap-2">
            <Link href="mailto:kevine@generale-ci.com">
              <Mail className="h-4 w-4" /> kevine@generale-ci.com
            </Link>
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Link
            href="https://github.com/kevkotuto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 hover:bg-muted transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kevkotuto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 hover:bg-muted transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:kevine@generale-ci.com"
            aria-label="Email"
            className="rounded-full p-2 hover:bg-muted transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
