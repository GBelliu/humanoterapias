import { useRef, useState } from "react";
import { therapies, therapiesSection } from "../../content";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK, REDUCED_MOTION, DESKTOP_QUERY, prefersReducedMotion } from "../../lib/gsap";
import { useSectionReveal } from "../../lib/useSectionReveal";
import { Lotus } from "../Lotus/Lotus";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { TherapyCard } from "./TherapyCard";
import styles from "./Therapies.module.css";

export function Therapies() {
  const scope = useRef<HTMLElement>(null);
  const lotusRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState<number | null>(null);
  useSectionReveal(scope);

  useGSAP(
    () => {
      const lotus = lotusRef.current;
      if (!lotus) return;

      const mm = gsap.matchMedia();

      // Desktop: a terapia que está no centro da tela fica ativa.
      mm.add(DESKTOP_QUERY, () => {
        gsap.set(lotus, { "--all": 0, "--seq": 0 });
        gsap.utils.toArray<HTMLElement>("[data-therapy-item]", scope.current).forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top 60%",
            end: "bottom 40%",
            onToggle: (self) => {
              if (self.isActive) setActive(index);
            },
          });
        });
      });

      // Celular: a flor apenas desabrocha quando a seção aparece.
      mm.add(`${MOTION_OK} and not ${DESKTOP_QUERY}`, () => {
        gsap.fromTo(
          lotus,
          { "--all": 0 },
          { "--all": 1, ease: "none", scrollTrigger: { trigger: lotus, start: "top 90%", end: "bottom 45%", scrub: 1.2 } },
        );
      });
      mm.add(`${REDUCED_MOTION} and not ${DESKTOP_QUERY}`, () => {
        gsap.set(lotus, { "--all": 1 });
      });
    },
    { scope },
  );

  // A cada terapia ativa, abre-se mais uma pétala (só no desktop, onde a flor fica fixa ao lado).
  useGSAP(
    () => {
      if (active === null || !window.matchMedia(DESKTOP_QUERY).matches) return;
      gsap.to(lotusRef.current, {
        "--seq": (active + 1) / therapies.length,
        duration: prefersReducedMotion() ? 0 : 1.4,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    },
    { scope, dependencies: [active], revertOnUpdate: false },
  );

  const activeTherapy = active === null ? null : therapies[active];

  return (
    <section ref={scope} id="terapias" className="section" aria-labelledby="terapias-titulo">
      <div className={`container ${styles.layout}`}>
        <div className={styles.aside}>
          <SectionHeading
            id="terapias-titulo"
            eyebrow={therapiesSection.eyebrow}
            title={therapiesSection.title}
            text={therapiesSection.text}
          />
          <div className={styles.lotusWrap}>
            <Lotus ref={lotusRef} className={styles.lotus} activePetal={active} />
            <p className={styles.lotusLabel} aria-hidden="true">
              {activeTherapy ? `${String((active ?? 0) + 1).padStart(2, "0")} · ${activeTherapy.name}` : " "}
            </p>
          </div>
        </div>

        <ol className={styles.list}>
          {therapies.map((therapy, index) => (
            <li key={therapy.id} data-therapy-item="" data-reveal="">
              <TherapyCard therapy={therapy} index={index} onActivate={setActive} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
