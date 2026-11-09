import React from "react";
import path from "node:path";
import { readFile } from "node:fs/promises";
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
  // Data URI avoids URL-encoding filesystem paths containing spaces (external disks).
  const photo = await readFile(path.join(process.cwd(), "public", "image", "pp.jpg"));
  const buffer = await renderToBuffer(
    <CVPDFDocument
      data={buildCvPdfData()}
      photoSrc={`data:image/jpeg;base64,${photo.toString("base64")}`}
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
