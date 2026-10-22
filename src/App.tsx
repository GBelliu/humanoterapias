import { useEffect } from "react";
import { initSmoothScroll } from "./lib/scroll";
import { Header } from "./components/Header/Header";
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
  useEffect(() => initSmoothScroll(), []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
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
    </>
  );
}
