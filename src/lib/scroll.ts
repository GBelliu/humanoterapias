import Lenis from "lenis";
import { gsap, ScrollTrigger, DESKTOP_QUERY, prefersReducedMotion } from "./gsap";

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

  // No celular o cabeçalho se esconde ao descer, então a seção pode encostar mais no topo.
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const headerSpace = window.matchMedia(DESKTOP_QUERY).matches ? (header?.offsetHeight ?? 0) + 12 : 16;
  const offset = id === "inicio" ? 0 : -headerSpace;

  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.6 });
  } else {
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + offset });
  }

  target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}
