import type { Metadata } from "next";
import CVClient from "./cv-client";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV détaillé de Kevine Ghossoub Boudalha — Développeur Fullstack Senior, Directeur Technologique. Applications web, mobiles et de bureau, expérience, formation et CV PDF.",
};

export default function CVPage() {
  return <CVClient />;
}
