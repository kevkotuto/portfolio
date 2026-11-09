'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Link as TransitionLink } from 'next-view-transitions';
import { useReducedMotion } from 'motion/react';
import type { ComponentProps } from 'react';

/** Preserve native downloads, anchors, external links and modified clicks. */
export default function AtelierLink(props:ComponentProps<typeof NextLink>){
 const reduced=useReducedMotion();
 const pathname=usePathname();
 const href=typeof props.href==='string'?props.href:'';
 const isPage=href!==pathname&&href.startsWith('/')&&!href.startsWith('//')&&!href.includes('#')&&!href.startsWith('/api/')&&!/\.(pdf|vcf)(?:\?|$)|\/pdf(?:\?|$)/.test(href)&&!props.download&&(!props.target||props.target==='_self');
 if(!isPage||reduced)return <NextLink {...props}/>;
 return <TransitionLink {...props} onClick={event=>{
  props.onClick?.(event);
  if(event.defaultPrevented||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  document.documentElement.style.setProperty('--page-origin-x',`${event.detail?Math.min(80,Math.max(20,event.clientX/window.innerWidth*100)):50}%`);
 }}/>;
}
