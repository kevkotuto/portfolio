import type { Metadata } from "next";
import ProjetsClient from "./projets-client";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection complète des projets de Kevine Ghossoub : SaaS, IA, fintech, e-commerce, mobile. 25+ apps en production.",
};

export default function ProjetsPage() {
  return <ProjetsClient />;
}
