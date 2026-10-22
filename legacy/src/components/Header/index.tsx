import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Container,
  Content,
  Logo,
  NavLinks,
  NavLink,
  CTAButton,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
} from "./styles";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Humanoterapia", id: "humanoterapia" },
    { label: "Técnicas", id: "servicos" },
    { label: "Sobre mim", id: "sobre" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <Container
      as={motion.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      $isScrolled={isScrolled}
    >
      <Content>
        <Logo onClick={() => scrollToSection("hero")}>
          <img src="./logo3.png" alt="Humanoterapias" />
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <CTAButton onClick={() => scrollToSection("contato")}>
          Agendar Consulta
        </CTAButton>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Content>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.id}
                as={motion.button}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </MobileNavLink>
            ))}
            <CTAButton
              as={motion.button}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection("contato")}
              style={{ marginTop: "1rem" }}
            >
              Agendar Consulta
            </CTAButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Container>
  );
}
