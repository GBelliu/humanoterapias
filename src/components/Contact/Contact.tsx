import { useRef, useState } from "react";
import { MapPin, Monitor } from "lucide-react";
import { contactSection, fullAddress, mapsUrl, site } from "../../content";
import { gsap, useGSAP, MOTION_OK, REDUCED_MOTION, prefersReducedMotion } from "../../lib/gsap";
import { useSectionReveal } from "../../lib/useSectionReveal";
import { InstagramIcon } from "../icons";
import { Lotus } from "../Lotus/Lotus";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { WhatsAppLink } from "../WhatsAppLink";
import { FallingPetals } from "./FallingPetals";
import styles from "./Contact.module.css";

export function Contact() {
  const scope = useRef<HTMLElement>(null);
  const lotusRef = useRef<SVGSVGElement>(null);
  const [bursts, setBursts] = useState<number[]>([]);
  useSectionReveal(scope);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // A flor termina de florescer aqui, no convite para o contato.
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          lotusRef.current,
          { "--all": 0.1 },
          {
            "--all": 1,
            ease: "none",
            scrollTrigger: { trigger: lotusRef.current, start: "top 95%", end: "top 35%", scrub: 1.4 },
          },
        );
      });
      mm.add(REDUCED_MOTION, () => {
        gsap.set(lotusRef.current, { "--all": 1 });
      });
    },
    { scope },
  );

  const releasePetals = () => {
    if (prefersReducedMotion()) return;
    setBursts((current) => (current.length >= 3 ? current : [...current, Date.now()]));
  };

  return (
    <section ref={scope} id="contato" className={`section ${styles.section}`} aria-labelledby="contato-titulo">
      <div className={`container ${styles.grid}`}>
        <div className={styles.flower}>
          <button type="button" className={styles.lotusButton} onClick={releasePetals} aria-label={contactSection.petalsLabel}>
            <Lotus ref={lotusRef} className={styles.lotus} />
          </button>
          {bursts.map((id) => (
            <FallingPetals key={id} onDone={() => setBursts((current) => current.filter((item) => item !== id))} />
          ))}
        </div>

        <div className={styles.copy}>
          <SectionHeading
            id="contato-titulo"
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            text={contactSection.text}
          />

          <div className={styles.cta} data-reveal="">
            <WhatsAppLink className={`btn btn-primary ${styles.ctaButton}`}>{contactSection.cta}</WhatsAppLink>
            <p className={styles.phone}>WhatsApp {site.contact.whatsappDisplay}</p>
          </div>

          <ul className={styles.cards}>
            <li className={styles.infoCard} data-reveal="">
              <Monitor aria-hidden="true" />
              <div>
                <h3>{contactSection.onlineTitle}</h3>
                <p>{contactSection.onlineText}</p>
              </div>
            </li>
            <li className={styles.infoCard} data-reveal="">
              <MapPin aria-hidden="true" />
              <div>
                <h3>{contactSection.presencialTitle}</h3>
                <p>
                  {site.address.place}
                  <br />
                  {fullAddress}
                </p>
                <a className={styles.link} href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  {contactSection.mapLink}
                  <span className="visually-hidden"> (abre o Google Maps)</span>
                </a>
              </div>
            </li>
            <li className={styles.infoCard} data-reveal="">
              <InstagramIcon />
              <div>
                <h3>{contactSection.instagramTitle}</h3>
                <a className={styles.link} href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  {site.instagram.handle}
                  <span className="visually-hidden"> (abre o Instagram)</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
