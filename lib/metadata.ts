import type { Metadata } from "next";

export const siteTitle = "Kevine Ghossoub — Développeur & créateur de produits";
export const siteDescription = "Du code, du concret. Découvrez les produits web, mobiles, desktop et IA de Kevine Ghossoub Boudalha, développeur fullstack à Abidjan.";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const shareTitle = path === "/" ? title : `${title} · Kevine Ghossoub`;
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: {
      type: "website", locale: "fr_FR", url: path,
      siteName: "Kevine Ghossoub — Portfolio", title: shareTitle, description,
      images: [{ url: "/social/portfolio-v2.png", width: 1200, height: 630, alt: "Kevine Ghossoub Boudalha — Du code. Du concret." }],
    },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: ["/social/portfolio-v2.png"] },
  };
}
