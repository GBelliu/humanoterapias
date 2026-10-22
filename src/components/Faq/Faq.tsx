import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { faqSection } from "../../content";
import { useSectionReveal } from "../../lib/useSectionReveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./Faq.module.css";

export function Faq() {
  const scope = useRef<HTMLElement>(null);
  useSectionReveal(scope);

  return (
    <section ref={scope} id="duvidas" className={`section ${styles.section}`} aria-labelledby="duvidas-titulo">
      <div className={`container ${styles.wrap}`}>
        <SectionHeading id="duvidas-titulo" eyebrow={faqSection.eyebrow} title={faqSection.title} align="center" />
        <div className={styles.list}>
          {faqSection.items.map((item) => (
            <details key={item.question} className={styles.item} data-reveal="">
              <summary>
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
