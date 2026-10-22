import { useRef, useState } from "react";
import { Pause, Wind } from "lucide-react";
import { breathing, type BreathingPhaseKey } from "../../content";
import { gsap, useGSAP, MOTION_OK, REDUCED_MOTION, prefersReducedMotion } from "../../lib/gsap";
import { Lotus } from "../Lotus/Lotus";
import styles from "./BreathingExercise.module.css";

type Status = "idle" | "running" | "done";

const REST_BLOOM = 0.3;
const SVG_ORIGIN = "120 168";

// Exercício 4-7-8 guiado pela lótus: abre ao inspirar, fica parada ao segurar e fecha ao soltar o ar.
export function BreathingExercise() {
  const scope = useRef<HTMLDivElement>(null);
  const lotusRef = useRef<SVGSVGElement>(null);
  const idleRef = useRef<gsap.core.Timeline | null>(null);
  const sessionRef = useRef<gsap.core.Timeline | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [count, setCount] = useState(0);

  const { context } = useGSAP(
    () => {
      const lotus = lotusRef.current;
      const breath = lotus?.querySelector("[data-lotus-breath]");
      if (!lotus || !breath) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(lotus, { "--all": 0 }, { "--all": REST_BLOOM, duration: 2.8, ease: "power2.inOut", delay: 0.3 });
        idleRef.current = gsap
          .timeline({ repeat: -1, yoyo: true, delay: 3.1 })
          .to(breath, { scale: 1.05, svgOrigin: SVG_ORIGIN, duration: 5, ease: "sine.inOut" })
          .to(lotus, { "--all": 0.42, duration: 5, ease: "sine.inOut" }, 0);

        return () => {
          idleRef.current = null;
        };
      });
      mm.add(REDUCED_MOTION, () => {
        gsap.set(lotus, { "--all": REST_BLOOM });
      });
    },
    { scope },
  );

  // Os handlers registram suas animações no contexto do useGSAP, que as desfaz ao desmontar.
  const rest = () =>
    context.add(() => {
      const lotus = lotusRef.current;
      const breath = lotus?.querySelector("[data-lotus-breath]");
      if (!lotus || !breath) return;

      gsap.to(breath, { scale: 1, svgOrigin: SVG_ORIGIN, duration: 1.6, ease: "sine.inOut" });
      gsap.to(lotus, {
        "--all": REST_BLOOM,
        duration: 1.6,
        ease: "sine.inOut",
        onComplete: () => {
          if (!sessionRef.current?.isActive()) idleRef.current?.restart();
        },
      });
    });

  const start = () =>
    context.add(() => {
      const lotus = lotusRef.current;
      const breath = lotus?.querySelector("[data-lotus-breath]");
      if (!lotus || !breath) return;

      const animate = !prefersReducedMotion();
      idleRef.current?.pause();
      sessionRef.current?.kill();

      const visuals: Record<BreathingPhaseKey, { scale: number; bloom: number } | null> = {
        inhale: { scale: 1.16, bloom: 0.95 },
        hold: null,
        exhale: { scale: 1, bloom: 0.18 },
      };

      const tl = gsap.timeline({
        onComplete: () => {
          setStatus("done");
          rest();
        },
      });

      for (let c = 0; c < breathing.cycles; c++) {
        breathing.phases.forEach((phase, index) => {
          const label = `c${c}-p${index}`;
          const counter = { value: phase.seconds };
          const visual = visuals[phase.key];

          tl.addLabel(label);
          tl.call(
            () => {
              setCycle(c);
              setPhaseIndex(index);
              setCount(phase.seconds);
            },
            undefined,
            label,
          );
          tl.to(
            counter,
            {
              value: 0,
              duration: phase.seconds,
              ease: "none",
              onUpdate: () => setCount(Math.max(1, Math.ceil(counter.value))),
            },
            label,
          );

          if (animate && visual) {
            tl.to(
              breath,
              { scale: visual.scale, svgOrigin: SVG_ORIGIN, duration: phase.seconds, ease: "sine.inOut", overwrite: "auto" },
              label,
            );
            tl.to(lotus, { "--all": visual.bloom, duration: phase.seconds, ease: "sine.inOut", overwrite: "auto" }, label);
          }
        });
      }

      sessionRef.current = tl;
      setStatus("running");
    });

  const stop = () => {
    sessionRef.current?.kill();
    sessionRef.current = null;
    setStatus("idle");
    rest();
  };

  const running = status === "running";
  const phase = breathing.phases[phaseIndex];
  const message = running ? phase.label : status === "done" ? breathing.done : breathing.intro;

  return (
    <div ref={scope} className={styles.exercise} id="respire">
      <div className={styles.stage}>
        <Lotus ref={lotusRef} className={styles.lotus} />
        <span className={styles.count} aria-hidden="true" data-visible={running}>
          {running ? count : ""}
        </span>
      </div>

      <div className={styles.panel}>
        <p className={styles.title}>{breathing.title}</p>
        <p className={styles.message} aria-live="polite" data-phase={running ? phase.key : status}>
          {message}
        </p>

        {running && (
          <ol className={styles.cycles} aria-label={`Ciclo ${cycle + 1} de ${breathing.cycles}`}>
            {Array.from({ length: breathing.cycles }, (_, i) => (
              <li key={i} data-state={i < cycle ? "done" : i === cycle ? "current" : "next"} />
            ))}
          </ol>
        )}

        <button type="button" className={`btn ${running ? "btn-ghost" : "btn-primary"}`} onClick={running ? stop : start}>
          {running ? <Pause aria-hidden="true" /> : <Wind aria-hidden="true" />}
          {running ? breathing.stop : status === "done" ? breathing.restart : breathing.start}
        </button>
        <p className={styles.note}>{breathing.note}</p>
      </div>
    </div>
  );
}
