import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from 'next';
import AboutClient from './about-client';
export const metadata: Metadata = pageMetadata('À propos', 'Du terrain aux produits : le parcours, les convictions et la façon de travailler de Kevine Ghossoub Boudalha, développeur et créateur à Abidjan.', '/about');
export default function AboutPage(){return <AboutClient/>}
