import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { therapies, therapiesSection } from "../../content";
import { gsap, ScrollTrigger, useGSAP, DESKTOP_QUERY, prefersReducedMotion } from "../../lib/gsap";
import { useSectionReveal } from "../../lib/useSectionReveal";
import { Lotus } from "../Lotus/Lotus";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { TherapyCard } from "./TherapyCard";
import styles from "./Therapies.module.css";

const isDesktop = () => window.matchMedia(DESKTOP_QUERY).matches;

export function Therapies() {
  const scope = useRef<HTMLElement>(null);
  const lotusRef = useRef<SVGSVGElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState<number | null>(null);
  useSectionReveal(scope);

  useGSAP(
    () => {
      const lotus = lotusRef.current;
      if (!lotus) return;
      gsap.set(lotus, { "--all": 0, "--seq": 0 });

      const mm = gsap.matchMedia();

      // Desktop: a terapia que está no centro da tela fica ativa.
      mm.add(DESKTOP_QUERY, () => {
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

      // Celular: quando o carrossel aparece, a primeira pétala se abre.
      mm.add(`not ${DESKTOP_QUERY}`, () => {
        ScrollTrigger.create({
          trigger: listRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => setActive((current) => current ?? 0),
        });
      });
    },
    { scope },
  );

  // A cada terapia ativa, abre-se mais uma pétala.
  useGSAP(
    () => {
      if (active === null) return;
      gsap.to(lotusRef.current, {
        "--seq": (active + 1) / therapies.length,
        duration: prefersReducedMotion() ? 0 : 1.4,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    },
    { scope, dependencies: [active], revertOnUpdate: false },
  );

  // Carrossel do celular: o cartão mais centralizado é o ativo.
  const onListScroll = () => {
    const list = listRef.current;
    if (!list || isDesktop()) return;
    const items = list.children;
    if (items.length < 2) return;
    const step = (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft;
    setActive(Math.min(items.length - 1, Math.max(0, Math.round(list.scrollLeft / step))));
  };

  const goToCard = (index: number) => {
    const list = listRef.current;
    const item = list?.children[index] as HTMLElement | undefined;
    if (!list || !item) return;
    list.scrollTo({
      left: item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const current = active ?? 0;
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
              {activeTherapy ? `${String(current + 1).padStart(2, "0")} · ${activeTherapy.name}` : " "}
            </p>
          </div>
        </div>

        <div className={styles.carousel}>
          <ol ref={listRef} className={styles.list} onScroll={onListScroll} aria-label={therapiesSection.eyebrow}>
            {therapies.map((therapy, index) => (
              <li key={therapy.id} data-therapy-item="" data-reveal="">
                <TherapyCard therapy={therapy} index={index} onActivate={setActive} />
              </li>
            ))}
          </ol>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goToCard(current - 1)}
              disabled={current === 0}
              aria-label="Terapia anterior"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <p className={styles.counter} aria-live="polite">
              {current + 1} de {therapies.length}
              <span>{therapiesSection.swipeHint}</span>
            </p>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goToCard(current + 1)}
              disabled={current === therapies.length - 1}
              aria-label="Próxima terapia"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
