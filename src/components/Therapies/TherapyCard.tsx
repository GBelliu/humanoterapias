import { useRef, useState, type CSSProperties } from "react";
import { RotateCcw, Undo2 } from "lucide-react";
import { therapiesSection, type Therapy } from "../../content";
import { PETAL_COLORS } from "../Lotus/palette";
import { WhatsAppLink } from "../WhatsAppLink";
import styles from "./Therapies.module.css";

type TherapyCardProps = {
  therapy: Therapy;
  index: number;
  onActivate: (index: number) => void;
};

export function TherapyCard({ therapy, index, onActivate }: TherapyCardProps) {
  const [flipped, setFlipped] = useState(false);
  const frontButtonRef = useRef<HTMLButtonElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const [base, tip] = PETAL_COLORS[index % PETAL_COLORS.length];
  const backId = `terapia-${therapy.id}-detalhes`;

  const flip = (next: boolean) => {
    setFlipped(next);
    onActivate(index);
    requestAnimationFrame(() => (next ? backButtonRef : frontButtonRef).current?.focus({ preventScroll: true }));
  };

  return (
    <article
      className={styles.card}
      data-flipped={flipped}
      style={{ "--petal-base": base, "--petal-tip": tip } as CSSProperties}
      onPointerEnter={() => onActivate(index)}
      onFocus={() => onActivate(index)}
    >
      <div className={styles.inner}>
        <div className={styles.front} inert={flipped}>
          <svg className={styles.mark} viewBox="-40 -120 80 124" aria-hidden="true" focusable="false">
            <path d="M0 0 C 36 -26 34 -86 0 -118 C -34 -86 -36 -26 0 0 Z" />
          </svg>
          <span className={styles.number} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.name}>{therapy.name}</h3>
          <p className={styles.summary}>{therapy.summary}</p>
          <button
            ref={frontButtonRef}
            type="button"
            className={styles.flipButton}
            aria-expanded={flipped}
            aria-controls={backId}
            onClick={() => flip(true)}
          >
            {therapiesSection.flipHint}
            <span className="visually-hidden">: {therapy.name}</span>
            <RotateCcw aria-hidden="true" />
          </button>
        </div>

        <div id={backId} className={styles.back} inert={!flipped}>
          <p className={styles.backTitle}>{therapy.name}</p>
          <p className={styles.description}>{therapy.description}</p>
          <div className={styles.backActions}>
            <WhatsAppLink
              className={`btn btn-primary ${styles.backCta}`}
              message={`Olá, Christiane! Vim pelo site e gostaria de saber mais sobre ${therapy.name}.`}
            >
              {therapiesSection.cta}
            </WhatsAppLink>
            <button ref={backButtonRef} type="button" className={styles.backButton} onClick={() => flip(false)}>
              <Undo2 aria-hidden="true" />
              {therapiesSection.backHint}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
