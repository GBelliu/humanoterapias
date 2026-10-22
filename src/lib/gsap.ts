import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Ritmo calmo para o site todo.
gsap.defaults({ ease: "power2.out", duration: 1.2 });

// Mesmas condições usadas no CSS (breakpoint de 900px).
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
export const DESKTOP_QUERY = "(min-width: 900px)";

export const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

export { gsap, ScrollTrigger, SplitText, useGSAP };
