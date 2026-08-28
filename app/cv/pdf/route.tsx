import React from "react";
import path from "node:path";
import { renderToBuffer } from "@react-pdf/renderer";
import CVPDFDocument from "@/components/cv/CVPDFDocument";
import { buildCvPdfData } from "@/lib/data/cv-pdf";

export const runtime = "nodejs";
export const dynamic = "force-static";

/**
 * CV en PDF, genere cote serveur — meme rendu que le bouton de telechargement
 * de /cv, mais accessible en lien direct (a joindre a une candidature).
 */
export async function GET() {
  const buffer = await renderToBuffer(
    <CVPDFDocument
      data={buildCvPdfData()}
      photoSrc={path.join(process.cwd(), "public", "image", "pp.jpg")}
    />
  );

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="CV_Kevine_Ghossoub.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
