import type { RefObject } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from "./gsap";

// Entrada padrão das seções:
// - [data-split]: títulos revelados linha a linha;
// - [data-reveal]: blocos que sobem e aparecem suavemente, em sequência.
// Esses elementos não devem receber outras animações; anime filhos ou contêineres diferentes.
export function useSectionReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const root = scope.current;
        if (!root) return;

        root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.14,
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              }),
          });
        });

        const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]", root);
        if (!blocks.length) return;

        gsap.set(blocks, { autoAlpha: 0, y: 36 });
        ScrollTrigger.batch(blocks, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.4, ease: "power2.out", stagger: 0.15 }),
        });
      });
    },
    { scope },
  );
}
