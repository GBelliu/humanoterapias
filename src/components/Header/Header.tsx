import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, site } from "../../content";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK, REDUCED_MOTION } from "../../lib/gsap";
import { scrollToSection, setScrollLocked } from "../../lib/scroll";
import { Lotus } from "../Lotus/Lotus";
import { WhatsAppLink } from "../WhatsAppLink";
import styles from "./Header.module.css";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const lotusRef = useRef<SVGSVGElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      ScrollTrigger.create({
        start: 24,
        end: "max",
        onToggle: (self) => setScrolled(self.isActive),
      });

      // A lótus da logo floresce conforme a pessoa percorre a página.
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          lotusRef.current,
          { "--all": 0.4 },
          {
            "--all": 1,
            ease: "none",
            scrollTrigger: { start: 0, end: "max", scrub: 1.2 },
          },
        );
      });
      mm.add(REDUCED_MOTION, () => {
        gsap.set(lotusRef.current, { "--all": 0.8 });
      });
    },
    { scope: headerRef },
  );

  useEffect(() => {
    if (!menuOpen) return;
    setScrollLocked(true);
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      setScrollLocked(false);
    };
  }, [menuOpen]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    setScrollLocked(false);
    scrollToSection(id);
  };

  return (
    <header ref={headerRef} className={styles.header} data-scrolled={scrolled || menuOpen} data-site-header="">
      <div className={`container ${styles.bar}`}>
        <a
          className={styles.brand}
          href="#inicio"
          onClick={(event) => {
            event.preventDefault();
            goTo("inicio");
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
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(item.id);
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
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span>{menuOpen ? "Fechar" : "Menu"}</span>
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={styles.mobileMenu} hidden={!menuOpen}>
        <nav className="container" aria-label="Menu">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppLink className={`btn btn-primary ${styles.mobileCta}`}>Agendar pelo WhatsApp</WhatsAppLink>
          <p className={styles.mobilePhone}>WhatsApp {site.contact.whatsappDisplay}</p>
        </nav>
      </div>
    </header>
  );
}
