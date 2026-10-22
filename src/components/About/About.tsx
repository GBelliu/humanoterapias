import { useRef } from "react";
import { about, site } from "../../content";
import { gsap, useGSAP, MOTION_OK, DESKTOP_QUERY } from "../../lib/gsap";
import { useSectionReveal } from "../../lib/useSectionReveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./About.module.css";

export function About() {
  const scope = useRef<HTMLElement>(null);
  useSectionReveal(scope);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // A foto (filha do bloco revelado) desliza levemente dentro da moldura.
      mm.add(`${MOTION_OK} and ${DESKTOP_QUERY}`, () => {
        gsap.fromTo(
          "[data-about-photo]",
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: 1.5 },
          },
        );
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="sobre" className="section" aria-labelledby="sobre-titulo">
      <div className={`container ${styles.grid}`}>
        <figure className={styles.figure} data-reveal="">
          <div className={styles.frame}>
            <img
              src={about.photo.src}
              alt={about.photo.alt}
              width={about.photo.width}
              height={about.photo.height}
              loading="lazy"
              decoding="async"
              data-about-photo=""
            />
          </div>
          <figcaption className={styles.badge}>
            <strong>{about.highlight.value}</strong>
            <span>{about.highlight.label}</span>
          </figcaption>
        </figure>

        <div>
          <SectionHeading id="sobre-titulo" eyebrow={about.eyebrow} title={about.title} />
          <div className={styles.body}>
            <p className={styles.name} data-reveal="">
              {site.therapist.name}
              <span>
                {site.therapist.role} · {site.therapist.registry}
              </span>
            </p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} data-reveal="">
                {paragraph}
              </p>
            ))}
            <ul className={styles.credentials} aria-label="Formações" data-reveal="">
              {about.credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
