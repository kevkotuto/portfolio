'use client';

import { useEffect,useRef } from 'react';
import { usePathname } from 'next/navigation';

/** Older browsers keep Next navigation and a short, non-spatial arrival. */
export default function PageMotion(){
 const pathname=usePathname();
 const previous=useRef(pathname);
 useEffect(()=>{
  if(previous.current===pathname)return;
  previous.current=pathname;
  if(typeof document.startViewTransition==='function'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const animation=document.querySelector('main')?.animate([{opacity:.85},{opacity:1}],{duration:180,easing:'ease-out'});
  return ()=>animation?.cancel();
 },[pathname]);
 return null;
}
