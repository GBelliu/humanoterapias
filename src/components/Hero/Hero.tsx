import { useRef } from "react";
import { ChevronDown, MapPin, Monitor } from "lucide-react";
import { hero, site } from "../../content";
import { gsap, SplitText, useGSAP, MOTION_OK, DESKTOP_QUERY } from "../../lib/gsap";
import { scrollToSection } from "../../lib/scroll";
import { BreathingExercise } from "../BreathingExercise/BreathingExercise";
import { WhatsAppLink } from "../WhatsAppLink";
import styles from "./Hero.module.css";

const modeIcons = { online: Monitor, presencial: MapPin };

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        SplitText.create("[data-hero-title]", {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => gsap.from(self.lines, { yPercent: 110, duration: 1.6, ease: "power3.out", stagger: 0.16, delay: 0.2 }),
        });
        gsap.from("[data-hero-item]", { autoAlpha: 0, y: 28, duration: 1.4, stagger: 0.14, delay: 0.6 });
        gsap.from("[data-hero-visual]", { autoAlpha: 0, duration: 2, delay: 0.2 });

        // Manchas de luz descem mais devagar que o conteúdo (paralaxe suave).
        gsap.to("[data-hero-blob]", {
          yPercent: (i) => 18 + i * 14,
          ease: "none",
          scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: 1.5 },
        });
      });

      // A luz acompanha o mouse com atraso, só em telas grandes com mouse.
      mm.add(`${MOTION_OK} and ${DESKTOP_QUERY} and (pointer: fine)`, () => {
        const light = scope.current?.querySelector<HTMLElement>("[data-hero-light]");
        if (!light) return;
        const toX = gsap.quickTo(light, "x", { duration: 2.4, ease: "power3.out" });
        const toY = gsap.quickTo(light, "y", { duration: 2.4, ease: "power3.out" });
        const onMove = (event: PointerEvent) => {
          toX((event.clientX / window.innerWidth - 0.5) * 120);
          toY((event.clientY / window.innerHeight - 0.5) * 80);
        };
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="inicio" className={styles.hero} aria-labelledby="inicio-titulo">
      <div className={styles.backdrop} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobPeach}`} data-hero-blob="" />
        <span className={`${styles.blob} ${styles.blobMint}`} data-hero-blob="" />
        <span className={styles.light} data-hero-light="" />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow" data-hero-item="">
            {hero.eyebrow}
          </p>
          <h1 id="inicio-titulo" className={styles.title} data-hero-title="">
            {hero.title}
          </h1>
          <p className={styles.text} data-hero-item="">
            {hero.text}
          </p>
          <div className={styles.actions} data-hero-item="">
            <WhatsAppLink>{hero.primaryCta}</WhatsAppLink>
          </div>
          <ul className={styles.modes} data-hero-item="">
            {site.modes.map((mode) => {
              const Icon = modeIcons[mode.type];
              return (
                <li key={mode.type}>
                  <Icon aria-hidden="true" />
                  {mode.label}
                </li>
              );
            })}
          </ul>
          <p className={styles.registry} data-hero-item="">
            {site.therapist.name} · {site.therapist.registry}
          </p>
        </div>

        <div className={styles.visual} data-hero-visual="">
          <BreathingExercise />
        </div>
      </div>

      <button type="button" className={styles.scrollCue} onClick={() => scrollToSection("sobre")}>
        <span>Conheça meu trabalho</span>
        <ChevronDown aria-hidden="true" />
      </button>
    </section>
  );
}
