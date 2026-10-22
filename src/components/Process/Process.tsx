import { useRef } from "react";
import { processSection } from "../../content";
import { gsap, useGSAP, MOTION_OK } from "../../lib/gsap";
import { useSectionReveal } from "../../lib/useSectionReveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./Process.module.css";

export function Process() {
  const scope = useRef<HTMLElement>(null);
  useSectionReveal(scope);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // O caule cresce acompanhando o scroll.
        gsap.fromTo(
          "[data-stem]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-steps]", start: "top 70%", end: "bottom 60%", scrub: 1.2 },
          },
        );

        // Cada folha brota quando a etapa chega.
        gsap.utils.toArray<SVGElement>("[data-leaf]").forEach((leaf) => {
          gsap.from(leaf, {
            scale: 0,
            rotate: -40,
            transformOrigin: "0% 100%",
            duration: 1.6,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: leaf, start: "top 72%", once: true },
          });
        });
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="como-funciona" className="section" aria-labelledby="processo-titulo">
      <div className={`container ${styles.wrap}`}>
        <SectionHeading id="processo-titulo" eyebrow={processSection.eyebrow} title={processSection.title} align="center" />

        <div className={styles.timeline} data-steps="">
          <div className={styles.stemTrack} aria-hidden="true">
            <div className={styles.stem} data-stem="" />
          </div>

          <ol className={styles.steps}>
            {processSection.steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <svg className={styles.leaf} viewBox="0 0 48 48" aria-hidden="true" focusable="false" data-leaf="">
                  <path d="M4 44 C 6 20, 20 6, 44 4 C 42 28, 28 42, 4 44 Z" />
                  <path className={styles.leafVein} d="M4 44 L 34 14" />
                </svg>
                <div className={styles.stepBody} data-reveal="">
                  <span className={styles.stepNumber}>Etapa {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
