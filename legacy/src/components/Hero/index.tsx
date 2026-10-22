import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, CheckCircle } from "lucide-react";
import {
  Container,
  Content,
  TextContent,
  Title,
  Subtitle,
  ButtonsWrapper,
  PrimaryButton,
  SecondaryButton,
  ImageGrid,
  ImageCard,
  FloatingBadge,
  BadgeIcon,
  ValueSection,
  ValueTitle,
  FloatingBadgesWrapper,
} from "./styles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function Hero() {
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

  return (
    <Container id="hero">
      <Content
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextContent>
          <motion.span variants={itemVariants} className="badge">
            <Sparkles size={14} />
            Humanoterapia & Bem-estar
          </motion.span>

          <Title as={motion.h1} variants={itemVariants}>
            Uma forma mais gentil de cuidar da sua <span>saúde emocional</span>
          </Title>

          <Subtitle as={motion.p} variants={itemVariants}>
            Terapias energéticas e espirituais desenvolvidas para te ajudar a
            encontrar equilíbrio, cura e transformação de forma acolhedora e no
            seu ritmo.
          </Subtitle>

          <ButtonsWrapper as={motion.div} variants={itemVariants}>
            <PrimaryButton onClick={() => scrollToSection("contato")}>
              Agendar Consulta
              <ArrowRight size={18} />
            </PrimaryButton>
            <SecondaryButton onClick={() => scrollToSection("humanoterapia")}>
              Saiba mais
            </SecondaryButton>
          </ButtonsWrapper>
        </TextContent>

        <ImageGrid as={motion.div} variants={itemVariants}>
          <ImageCard
            as={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            $position="left"
          >
            <img src="./meditation.jpg" alt="Terapia" />
          </ImageCard>
          <ImageCard
            as={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            $position="center"
          >
            <img src="./hands.jpg" alt="Christiane Bellissimo" />
          </ImageCard>
          <ImageCard
            as={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            $position="right"
          >
            <img src="./lotus.jpg" alt="Meditação" />
          </ImageCard>
        </ImageGrid>
      </Content>

      <FloatingBadgesWrapper>
        <FloatingBadge
          as={motion.div}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          $position="topLeft"
        >
          <BadgeIcon $variant="primary">
            <CheckCircle size={16} />
          </BadgeIcon>
          <span>Compreendendo seus sentimentos com mais clareza</span>
        </FloatingBadge>

        <FloatingBadge
          as={motion.div}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "1s" }}
          $position="topRight"
        >
          <BadgeIcon $variant="accent">
            <Heart size={16} />
          </BadgeIcon>
          <span>Avançando no seu ritmo</span>
        </FloatingBadge>
      </FloatingBadgesWrapper>

      <ValueSection
        as={motion.section}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ValueTitle>
          Transformamos suas <span>preocupações silenciosas</span> em
          <br />
          apoio <span>calmo e acolhedor</span>
        </ValueTitle>

        <div className="badges-row">
          <motion.div className="value-badge" whileHover={{ scale: 1.05 }}>
            <CheckCircle size={18} />
            Um espaço que transmite calma e segurança
          </motion.div>
          <motion.div className="value-badge" whileHover={{ scale: 1.05 }}>
            <CheckCircle size={18} />
            Apoio presente e sem pressão
          </motion.div>
        </div>
      </ValueSection>
    </Container>
  );
}
