import type { Metadata } from "next";
import ProjetsClient from "./projets-client";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection complète des projets de Kevine Ghossoub : SaaS, IA, fintech, e-commerce, mobile. Applications web, mobiles et de bureau, outils métier et expérimentations.",
};

export default function ProjetsPage() {
  return <ProjetsClient />;
}
