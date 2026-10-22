import { useRef } from "react";
import { Info, Sprout } from "lucide-react";
import { humanoterapia } from "../../content";
import { useSectionReveal } from "../../lib/useSectionReveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./Humanoterapia.module.css";

export function Humanoterapia() {
  const scope = useRef<HTMLElement>(null);
  useSectionReveal(scope);

  return (
    <section ref={scope} id="humanoterapia" className={`section ${styles.section}`} aria-labelledby="humanoterapia-titulo">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <SectionHeading id="humanoterapia-titulo" eyebrow={humanoterapia.eyebrow} title={humanoterapia.title} />
          <div className={styles.body}>
            {humanoterapia.paragraphs.map((paragraph) => (
              <p key={paragraph} data-reveal="">
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.forWhom} data-reveal="">
            <h3>{humanoterapia.forWhom.title}</h3>
            <ul>
              {humanoterapia.forWhom.items.map((item) => (
                <li key={item}>
                  <Sprout aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.media}>
          <img
            className={styles.image}
            src={humanoterapia.image.src}
            alt={humanoterapia.image.alt}
            width={humanoterapia.image.width}
            height={humanoterapia.image.height}
            loading="lazy"
            decoding="async"
            data-reveal=""
          />
          <p className={styles.disclaimer} data-reveal="">
            <Info aria-hidden="true" />
            {humanoterapia.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
