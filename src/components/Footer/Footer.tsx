import { footer, fullAddress, navigation, site } from "../../content";
import { scrollToSection } from "../../lib/scroll";
import { whatsappUrl } from "../../lib/whatsapp";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.wordmark}>
            <span>Humano</span> <em>Terapias</em>
          </p>
          <p className={styles.tagline}>{footer.tagline}</p>
          <p className={styles.small}>
            {site.therapist.name} · {site.therapist.role} · {site.therapist.registry}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <ul className={styles.links}>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
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

        <address className={styles.contact}>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.contact.whatsappDisplay}
          </a>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
            Instagram {site.instagram.handle}
          </a>
          <span>{fullAddress}</span>
        </address>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>{footer.privacy}</p>
        <p>
          © {year} {site.brand}
        </p>
      </div>
    </footer>
  );
}
