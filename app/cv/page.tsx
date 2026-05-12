import type { Metadata } from "next";
import CVClient from "./cv-client";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV détaillé de Kevine Ghossoub Boudalha — Développeur Fullstack Senior, Directeur Technologique. 6 ans d'expérience, 25+ apps en production.",
};

export default function CVPage() {
  return <CVClient />;
}
