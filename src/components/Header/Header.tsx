import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, type SectionId } from "../../content";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK, REDUCED_MOTION } from "../../lib/gsap";
import { scrollToSection } from "../../lib/scroll";
import { Lotus } from "../Lotus/Lotus";
import { WhatsAppLink } from "../WhatsAppLink";
import styles from "./Header.module.css";

type HeaderProps = {
  active: SectionId;
  menuOpen: boolean;
  onMenuToggle: () => void;
};

export function Header({ active, menuOpen, onMenuToggle }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const lotusRef = useRef<SVGSVGElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      // No celular o cabeçalho some ao descer e volta ao subir (o CSS só aplica abaixo de 900px).
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          setScrolled(self.scroll() > 24);
          setHidden(self.direction === 1 && self.scroll() > 160);
        },
      });

      // Linha de progresso da leitura.
      gsap.fromTo(
        "[data-header-progress]",
        { scaleX: 0 },
        { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: true } },
      );

      // A lótus da logo floresce conforme a pessoa percorre a página.
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          lotusRef.current,
          { "--all": 0.4 },
          { "--all": 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 1.2 } },
        );
      });
      mm.add(REDUCED_MOTION, () => {
        gsap.set(lotusRef.current, { "--all": 0.8 });
      });
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className={styles.header}
      data-scrolled={scrolled}
      data-hidden={hidden && !menuOpen}
      data-site-header=""
    >
      <div className={`container ${styles.bar}`}>
        <a
          className={styles.brand}
          href="#inicio"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("inicio");
          }}
        >
          <Lotus ref={lotusRef} className={styles.lotus} />
          <span className={styles.wordmark}>
            <span className={styles.humano}>Humano</span>
            <span className={styles.terapias}>Terapias</span>
          </span>
          <span className="visually-hidden"> — voltar ao início</span>
        </a>

        <nav className={styles.nav} aria-label="Principal">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={item.id === active ? "location" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <WhatsAppLink className={`btn btn-primary ${styles.cta}`}>Agendar</WhatsAppLink>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={onMenuToggle}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span>{menuOpen ? "Fechar" : "Menu"}</span>
          </button>
        </div>
      </div>
      <span className={styles.progress} aria-hidden="true" data-header-progress="" />
    </header>
  );
}
