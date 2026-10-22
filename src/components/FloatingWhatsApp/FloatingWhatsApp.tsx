import { useState } from "react";
import { ScrollTrigger, useGSAP } from "../../lib/gsap";
import { WhatsAppLink } from "../WhatsAppLink";
import styles from "./FloatingWhatsApp.module.css";

// Atalho para agendar, sempre à vista depois da primeira dobra e escondido na seção de contato.
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#inicio",
      start: "bottom 60%",
      endTrigger: "#contato",
      end: "top 70%",
      onToggle: (self) => setVisible(self.isActive),
    });
  });

  return (
    <div className={styles.floating} data-visible={visible} inert={!visible}>
      <WhatsAppLink className={`btn btn-primary ${styles.button}`}>Agendar</WhatsAppLink>
    </div>
  );
}
