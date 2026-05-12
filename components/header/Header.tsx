"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Copy,
  FileText,
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  Home,
  Code,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const EMAIL = "kevine@generale-ci.com";

const mainLinks = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Projets", href: "/projets", icon: Code },
  { name: "CV", href: "/cv", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kevkotuto",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ghossoub-kevine-boudalha-184929263",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kevine_ghoussoub",
    icon: Instagram,
  },
];

export default function Header() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { toast } = useToast();

  // Scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast({ title: "Email copié", description: EMAIL });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Erreur", variant: "destructive" });
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-50 mx-auto max-w-6xl rounded-2xl border border-transparent transition-all duration-300",
          scrolled
            ? "border-border/60 bg-background/70 backdrop-blur-xl shadow-sm"
            : "bg-background/30 backdrop-blur-sm"
        )}
      >
        <div className="flex h-14 items-center justify-between gap-2 px-3 sm:px-4">
          {/* Logo + Desktop nav */}
          <div className="flex items-center gap-1 min-w-0">
            <Link
              href="/"
              aria-label="Accueil"
              className="font-bold text-base sm:text-lg shrink-0 px-2 py-1 rounded-lg hover:bg-muted/60 transition-colors"
            >
              <span className="bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent">
                KG
              </span>
              <span className="hidden sm:inline text-foreground">.dev</span>
            </Link>

            <nav className="hidden md:flex items-center ml-2" aria-label="Navigation principale">
              <ul className="flex items-center gap-0.5">
                {mainLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Email pill (desktop only) */}
            <button
              type="button"
              onClick={handleCopy}
              className="hidden xl:flex items-center gap-1.5 px-3 h-9 rounded-lg border bg-muted/40 hover:bg-muted/60 text-xs text-muted-foreground transition-colors group cursor-pointer"
              aria-label="Copier l'email"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="max-w-[160px] truncate">{EMAIL}</span>
              {copied ? (
                <Check className="h-3 w-3 text-emerald-500" />
              ) : (
                <Copy className="h-3 w-3 opacity-60 group-hover:opacity-100" />
              )}
            </button>

            {/* Socials (hidden on small) */}
            <div className="hidden md:flex items-center gap-0.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-9 w-9 text-muted-foreground hover:text-primary"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                );
              })}
            </div>

            <ThemeSwitcher />

            {/* CTA desktop */}
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex h-9 rounded-lg gap-1.5 ml-1"
            >
              <Link href="/contact">
                <Mail className="h-3.5 w-3.5" />
                Discuter
              </Link>
            </Button>

            {/* Mobile menu trigger */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={open ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-20"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="container mx-auto px-4 py-6 flex flex-col gap-3 max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <nav aria-label="Navigation mobile">
                <ul className="flex flex-col gap-1">
                  {mainLinks.map((link, i) => {
                    const Icon = link.icon;
                    const active = isActive(link.href);
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.05 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-muted/60"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t my-2" />

              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center justify-between px-4 py-3 rounded-xl border bg-muted/30 hover:bg-muted/60 text-sm transition-colors text-left"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="truncate">{EMAIL}</span>
                </span>
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
              </button>

              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={link.name}
                      variant="outline"
                      asChild
                      className="h-12 gap-2 rounded-xl"
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-xs">{link.name}</span>
                      </Link>
                    </Button>
                  );
                })}
              </div>

              <Button asChild size="lg" className="rounded-xl gap-2 mt-2">
                <Link href="/contact">
                  <Mail className="h-4 w-4" /> Discutons de votre projet
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
