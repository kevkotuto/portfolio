"use client";

/** Tracés de fond : une seule ligne souple traverse l'espace entre les plans. */
export default function OrganicContours({className=""}:{className?:string}) {
  return <svg className={`organic-contours ${className}`} viewBox="0 0 1600 1000" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <path d="M-180 160C60-40 410 8 360 226S-30 504 186 660 664 568 704 330 986 12 1140 122 1038 470 1258 500 1688 286 1740 560"/>
    <path d="M-170 194C80-15 442 32 394 240S6 520 220 684 706 596 742 350 994 54 1118 150 1016 502 1248 540 1692 328 1754 594"/>
    <path d="M260 1120C110 852 532 782 616 954S1020 1120 1078 880 1378 610 1510 800 1720 1070 1840 920"/>
  </svg>;
}
