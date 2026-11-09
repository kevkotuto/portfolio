import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import ProjetsClient from "./projets-client";

export const metadata: Metadata = pageMetadata('Projets', 'Des idées devenues réelles : découvrez mes applications web, mobiles, logiciels métier et expériences IA, de leur conception à leur mise en production.', '/projets');

export default function ProjetsPage() {
  return <ProjetsClient />;
}
