import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/theme-provider";
import CustomCursor from "@/components/ui/CustomCursor";
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ScrollProvider from "@/components/providers/scroll-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.generale-ci.com"),
  title: {
    default: "Kevine Ghossoub — Développeur Fullstack Senior",
    template: "%s · Kevine Ghossoub",
  },
  description:
    "Développeur fullstack senior basé à Abidjan. Je conçois et opère des produits web, mobiles et IA — 25+ apps en production, 99 repos. Stack TypeScript, Next.js, NestJS, Expo, Docker.",
  keywords: [
    "développeur fullstack",
    "freelance Côte d'Ivoire",
    "Abidjan",
    "Next.js",
    "NestJS",
    "Expo",
    "React Native",
    "Docker",
    "Mobile Money",
    "Wave",
    "Kevine Ghossoub",
  ],
  authors: [{ name: "Kevine Ghossoub", url: "https://github.com/kevkotuto" }],
  creator: "Kevine Ghossoub",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio.generale-ci.com",
    siteName: "Kevine Ghossoub — Portfolio",
    title: "Kevine Ghossoub — Développeur Fullstack Senior",
    description:
      "25+ apps en production. Stack TypeScript, Next.js, NestJS, Expo. Basé à Abidjan, Côte d'Ivoire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevine Ghossoub — Développeur Fullstack Senior",
    description:
      "25+ apps en production. Stack TypeScript, Next.js, NestJS, Expo.",
  },
  alternates: {
    canonical: "https://portfolio.generale-ci.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kevine Ghossoub Boudalha",
    alternateName: "Kevine Ghossoub",
    url: "https://portfolio.generale-ci.com",
    image: "https://portfolio.generale-ci.com/image/profil.jpg",
    jobTitle: "Développeur Fullstack Senior & Directeur Technologique",
    email: "kevine@generale-ci.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abidjan",
      addressCountry: "CI",
    },
    sameAs: [
      "https://github.com/kevkotuto",
      "https://www.linkedin.com/in/ghossoub-kevine-boudalha-184929263",
    ],
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "React Native",
      "Expo",
      "Docker",
      "Mobile Money",
      "Wave",
      "CinetPay",
    ],
    worksFor: [
      { "@type": "Organization", name: "Bernabé Côte d'Ivoire" },
      { "@type": "Organization", name: "Yeshigroup" },
      { "@type": "Organization", name: "Upjunoo Media" },
      { "@type": "Organization", name: "Inexiumus Group" },
    ],
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
          <ScrollToTop />
          <ScrollProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
