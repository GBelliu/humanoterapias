import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { PETAL_COLORS } from "../Lotus/palette";
import styles from "./Contact.module.css";

const PETAL_COUNT = 9;

// Pequena surpresa: pétalas que caem devagar quando a pessoa toca na flor.
export function FallingPetals({ onDone }: { onDone: () => void }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const petals = gsap.utils.toArray<HTMLElement>("[data-petal]");
      const tl = gsap.timeline({ onComplete: onDone });
      petals.forEach((petal, i) => {
        tl.fromTo(
          petal,
          { x: 0, y: 0, rotate: gsap.utils.random(-40, 40), autoAlpha: 1, scale: gsap.utils.random(0.7, 1.15) },
          {
            x: gsap.utils.random(-220, 220),
            y: gsap.utils.random(260, 420),
            rotate: `+=${gsap.utils.random(120, 300)}`,
            autoAlpha: 0,
            duration: gsap.utils.random(3.6, 5.2),
            ease: "sine.inOut",
          },
          i * 0.08,
        );
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className={styles.petals} aria-hidden="true">
      {Array.from({ length: PETAL_COUNT }, (_, i) => (
        <svg key={i} viewBox="-12 -34 24 36" className={styles.fallingPetal} data-petal="">
          <path d="M0 0 C 11 -8 10 -25 0 -33 C -10 -25 -11 -8 0 0 Z" fill={PETAL_COLORS[i % PETAL_COLORS.length][0]} />
        </svg>
      ))}
    </div>
  );
}
