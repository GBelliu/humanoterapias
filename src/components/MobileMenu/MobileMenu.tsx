import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { sections, site, type SectionId } from "../../content";
import { scrollToSection, setScrollLocked } from "../../lib/scroll";
import { WhatsAppLink } from "../WhatsAppLink";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  open: boolean;
  active: SectionId;
  onClose: () => void;
};

// Painel com todas as seções. Abre pelo botão do cabeçalho (tablet) ou pela barra inferior (celular).
export function MobileMenu({ open, active, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    setScrollLocked(true);
    panelRef.current?.querySelector<HTMLElement>("[aria-current='location'], a")?.focus({ preventScroll: true });

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      onClose();
      openerRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      setScrollLocked(false);
    };
  }, [open, onClose]);

  const goTo = (id: string) => {
    onClose();
    setScrollLocked(false);
    scrollToSection(id);
  };

  return (
    <div
      id="menu-mobile"
      ref={panelRef}
      className={styles.menu}
      hidden={!open}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.sheet} role="dialog" aria-modal="true" aria-label="Menu">
        <div className={styles.top}>
          <p className={styles.title}>Ir para</p>
          <button
            type="button"
            className={styles.close}
            onClick={() => {
              onClose();
              openerRef.current?.focus({ preventScroll: true });
            }}
          >
            <X aria-hidden="true" />
            Fechar
          </button>
        </div>
        <nav aria-label="Seções">
          <ol className={styles.list}>
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={section.id === active ? "location" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(section.id);
                  }}
                >
                  <span className={styles.number} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.label}
                  {section.id === active && <span className={styles.here}>você está aqui</span>}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <WhatsAppLink className={`btn btn-primary ${styles.cta}`}>Agendar pelo WhatsApp</WhatsAppLink>
        <p className={styles.phone}>WhatsApp {site.contact.whatsappDisplay}</p>
      </div>
    </div>
  );
}
