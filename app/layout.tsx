import { ViewTransitions } from "next-view-transitions";
import PageMotion from "@/components/atelier/PageMotion";
import "@/components/atelier/page-motion.css";
import type { Metadata, Viewport } from "next";
import { pageMetadata, siteTitle, siteDescription } from "@/lib/metadata";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/atelier/Navigation";
import "./atelier.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/ui/ScrollToTop";

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

export const viewport: Viewport = { themeColor: "#202222" };
export const metadata: Metadata = {
  ...pageMetadata(siteTitle, siteDescription, "/"),
  metadataBase: new URL("https://portfolio.generale-ci.com"),
  title: { default: siteTitle, template: "%s · Kevine Ghossoub" },
  authors: [{ name: "Kevine Ghossoub Boudalha", url: "https://github.com/kevkotuto" }],
  creator: "Kevine Ghossoub Boudalha",
  robots: { index: true, follow: true },
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
    image: "https://portfolio.generale-ci.com/portraits/kevine-editorial-v1.png",
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
    <ViewTransitions>
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
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >

          <PageMotion />
          <Header />
          <main className="flex-grow">
            {children}
          </main>

          <Toaster />
          <ScrollToTop />

        </ThemeProvider>
      </body>
    </html>
    </ViewTransitions>
  );
}
