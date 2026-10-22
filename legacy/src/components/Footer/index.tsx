import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Heart,
} from "lucide-react";
import {
  Container,
  Content,
  TopSection,
  Brand,
  Logo,
  Tagline,
  SocialLinks,
  SocialLink,
  LinksGrid,
  LinkColumn,
  ColumnTitle,
  FooterLink,
  BottomSection,
  Copyright,
  LegalLinks,
} from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Início", id: "hero" },
    { label: "Humanoterapia", id: "humanoterapia" },
    { label: "Técnicas", id: "servicos" },
    { label: "Sobre mim", id: "sobre" },
    { label: "Contato", id: "contato" },
  ];

  const services = [
    "Mesa Quântica",
    "Humanometria",
    "Taquions Tock",
    "TDR",
    "Regressão",
    "Baralho Terapêutico",
  ];

  const support = ["Agendar consulta", "Dúvidas frequentes", "Primeira sessão"];

  return (
    <Container>
      <Content>
        <TopSection>
          <Brand>
            <Logo onClick={() => scrollToSection("hero")}>
              <img src="./logo3.png" alt="Humanoterapias" />
            </Logo>
            <Tagline>
              Você não precisa carregar sozinho.
              <br />O apoio não precisa ser complicado ou difícil de começar.
            </Tagline>
            <SocialLinks>
              <SocialLink
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </SocialLink>
              <SocialLink
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </SocialLink>
            </SocialLinks>
          </Brand>

          <LinksGrid>
            <LinkColumn>
              <ColumnTitle>Navegação</ColumnTitle>
              {navLinks.map((link) => (
                <FooterLink
                  key={link.id}
                  as="button"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </FooterLink>
              ))}
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Técnicas</ColumnTitle>
              {services.map((service) => (
                <FooterLink
                  key={service}
                  as="button"
                  onClick={() => scrollToSection("servicos")}
                >
                  {service}
                </FooterLink>
              ))}
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Suporte</ColumnTitle>
              {support.map((item) => (
                <FooterLink
                  key={item}
                  as="button"
                  onClick={() => scrollToSection("contato")}
                >
                  {item}
                </FooterLink>
              ))}
            </LinkColumn>
          </LinksGrid>
        </TopSection>

        <BottomSection>
          <Copyright>
            © {currentYear} Humanoterapias. Todos os direitos reservados.
          </Copyright>
          <LegalLinks>
            <span>
              Feito com <Heart size={14} fill="currentColor" /> por
              Humanoterapias
            </span>
          </LegalLinks>
        </BottomSection>
      </Content>
    </Container>
  );
}
