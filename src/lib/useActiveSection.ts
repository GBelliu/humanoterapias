import { useState } from "react";
import { sections, type SectionId } from "../content/navigation";
import { ScrollTrigger, useGSAP } from "./gsap";

// Seção que ocupa o meio da tela. Usada para destacar o menu e mostrar "onde estou".
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(sections[0].id);

  useGSAP(() => {
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;
      ScrollTrigger.create({
        trigger: element,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive) setActive(id);
        },
      });
    });
  });

  return active;
}
