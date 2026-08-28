import { cvData } from "@/lib/data/cv";
import { experiences, educations } from "@/lib/data/experience";
import { skillsByCategory } from "@/lib/data/skills";

/**
 * Mise en forme des donnees du CV pour <CVPDFDocument />.
 * Partage entre le telechargement navigateur (/cv) et la route serveur (/cv/pdf)
 * pour que les deux PDF restent identiques.
 */
export function buildCvPdfData() {
  return {
    nom: cvData.fullName,
    titre: cvData.title,
    resume: cvData.resume,
    contact: {
      email: cvData.contact.email,
      telephone: cvData.contact.phone,
      linkedin: cvData.contact.linkedin,
      github: cvData.contact.github,
      localisation: cvData.contact.location,
    },
    experience: experiences.map((exp) => ({
      poste: exp.role,
      entreprise: exp.company,
      periode: exp.period,
      details: exp.achievements,
    })),
    formation: educations.map((e) => ({
      diplome: e.title,
      institution: e.school,
      periode: e.period,
      details: e.details,
    })),
    competences: {
      langages: (skillsByCategory.frontend ?? []).map((s) => s.name),
      frameworks: (skillsByCategory.backend ?? []).map((s) => s.name),
      bdd: (skillsByCategory.database ?? []).map((s) => s.name),
      infrastructure: (skillsByCategory.devops ?? []).map((s) => s.name),
      outils: (skillsByCategory.tools ?? []).map((s) => s.name),
      paiement: (skillsByCategory.payment ?? []).map((s) => s.name),
      autres: (skillsByCategory.mobile ?? []).map((s) => s.name),
      ia: (skillsByCategory.ai ?? []).map((s) => s.name),
    },
    langues: cvData.languages.map((l) => ({ nom: l.name, niveau: l.level })),
  };
}
