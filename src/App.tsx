import { useCallback, useEffect, useState } from "react";
import { initSmoothScroll } from "./lib/scroll";
import { useActiveSection } from "./lib/useActiveSection";
import { Header } from "./components/Header/Header";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { MobileDock } from "./components/MobileDock/MobileDock";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Humanoterapia } from "./components/Humanoterapia/Humanoterapia";
import { Therapies } from "./components/Therapies/Therapies";
import { PathFinder } from "./components/PathFinder/PathFinder";
import { Process } from "./components/Process/Process";
import { Faq } from "./components/Faq/Faq";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp/FloatingWhatsApp";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => initSmoothScroll(), []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header active={active} menuOpen={menuOpen} onMenuToggle={toggleMenu} />
      <main id="conteudo">
        <Hero />
        <About />
        <Humanoterapia />
        <Therapies />
        <PathFinder />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileMenu open={menuOpen} active={active} onClose={closeMenu} />
      <MobileDock active={active} menuOpen={menuOpen} onMenuToggle={toggleMenu} />
    </>
  );
}
