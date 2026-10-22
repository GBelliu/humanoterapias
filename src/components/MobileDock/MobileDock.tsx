import { useRef } from "react";
import { ChevronUp, X } from "lucide-react";
import { sections, type SectionId } from "../../content";
import { gsap, useGSAP, prefersReducedMotion } from "../../lib/gsap";
import { Lotus } from "../Lotus/Lotus";
import { WhatsAppLink } from "../WhatsAppLink";
import styles from "./MobileDock.module.css";

type MobileDockProps = {
  active: SectionId;
  menuOpen: boolean;
  onMenuToggle: () => void;
};

// Barra inferior do celular, na área do polegar: onde estou, progresso (a lótus floresce) e agendar.
export function MobileDock({ active, menuOpen, onMenuToggle }: MobileDockProps) {
  const scope = useRef<HTMLDivElement>(null);
  const lotusRef = useRef<SVGSVGElement>(null);
  const index = sections.findIndex((section) => section.id === active);
  const label = sections[index]?.label ?? sections[0].label;

  // A mini-lótus é o indicador de progresso: acompanha o scroll diretamente (sem atraso se o movimento for reduzido).
  useGSAP(
    () => {
      gsap.fromTo(
        lotusRef.current,
        { "--all": 0.25 },
        {
          "--all": 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: prefersReducedMotion() ? true : 1 },
        },
      );
    },
    { scope },
  );

  return (
    <div ref={scope} className={styles.dock}>
      <button
        type="button"
        className={styles.where}
        aria-expanded={menuOpen}
        aria-controls="menu-mobile"
        onClick={onMenuToggle}
      >
        <Lotus ref={lotusRef} className={styles.lotus} />
        <span className={styles.text}>
          <span className={styles.small}>{menuOpen ? "Menu aberto" : `Seção ${index + 1} de ${sections.length}`}</span>
          <span className={styles.label}>{menuOpen ? "Fechar" : label}</span>
        </span>
        {menuOpen ? <X aria-hidden="true" /> : <ChevronUp aria-hidden="true" />}
        <span className="visually-hidden">{menuOpen ? "" : " — abrir menu de seções"}</span>
      </button>
      <WhatsAppLink className={`btn btn-primary ${styles.cta}`}>Agendar</WhatsAppLink>
    </div>
  );
}
