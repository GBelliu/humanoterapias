import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsap";

let lenis: Lenis | null = null;

// Scroll suave integrado ao ticker do GSAP. Desligado quando o sistema pede menos movimento.
export function initSmoothScroll(): () => void {
  if (prefersReducedMotion()) return () => {};

  const instance = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
  const raf = (time: number) => instance.raf(time * 1000);

  instance.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
  lenis = instance;

  return () => {
    gsap.ticker.remove(raf);
    instance.destroy();
    lenis = null;
  };
}

export function setScrollLocked(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

// Rola até a seção e move o foco para ela (importante para teclado e leitores de tela).
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const offset = id === "inicio" ? 0 : -((header?.offsetHeight ?? 0) + 12);

  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.6 });
  } else {
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + offset });
  }

  target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}
