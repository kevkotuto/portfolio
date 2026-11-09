import type { Metadata } from 'next';
import AboutClient from './about-client';
export const metadata:Metadata={title:'À propos',description:'Kevine Ghossoub Boudalha : du terrain aux produits, un parcours de développeur et de créateur à Abidjan.'};
export default function AboutPage(){return <AboutClient/>}
