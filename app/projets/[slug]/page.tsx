import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/projects";
import ProjetDetailClient from "./projet-detail-client";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjetDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 max-w-5xl">
      <Button asChild variant="ghost" size="sm" className="mb-6 gap-1.5 -ml-2">
        <Link href="/projets">
          <ArrowLeft className="h-4 w-4" /> Tous les projets
        </Link>
      </Button>

      <ProjetDetailClient project={project} related={related} />
    </div>
  );
}
