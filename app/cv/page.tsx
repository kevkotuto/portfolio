import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import CVClient from "./cv-client";

export const metadata: Metadata = pageMetadata('CV', 'Le parcours de Kevine Ghossoub Boudalha : développement fullstack, produits web et mobiles, compétences et expériences. Consultez et téléchargez mon CV.', '/cv');

export default function CVPage() {
  return <CVClient />;
}
