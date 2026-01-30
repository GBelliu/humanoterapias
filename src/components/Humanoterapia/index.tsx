import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Heart, Compass, Leaf, Sun, Sparkles } from "lucide-react";
import {
  Container,
  Content,
  SectionLabel,
  SectionTitle,
  IntroText,
  CardsGrid,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  MainCard,
  MainCardContent,
  MainCardImage,
} from "./styles";

const audienceCards = [
  {
    icon: Users,
    title: "Pessoas navegando pelo estresse diário",
    description: "Encontre equilíbrio em meio à correria do dia a dia.",
    image: "./humanoterapia.jpg",
  },
  {
    icon: Heart,
    title: "Quem busca clareza e direção",
    description: "Descubra seu caminho com mais consciência e propósito.",
    image: "./mesa.jpg",
  },
  {
    icon: Leaf,
    title: "Pessoas emocionalmente bloqueadas",
    description: "Libere energias estagnadas e recupere sua vitalidade.",
    image: "./humanometria.png",
  },
  {
    icon: Sun,
    title: "Quem quer suporte sem pressão",
    description: "Um espaço acolhedor para trabalhar no seu ritmo.",
    image: "./taquions.jpeg",
  },
  {
    icon: Compass,
    title: "Iniciantes em saúde mental",
    description: "Uma forma gentil de começar a cuidar de si.",
    image: "./regressao.jpeg",
  },
  {
    icon: Sparkles,
    title: "Qualquer um no seu próprio ritmo",
    description: "Cada jornada é única, e respeitamos a sua.",
    image: "./perfil.png",
  },
];

export function Humanoterapia() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Container id="humanoterapia" ref={ref}>
      <Content
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionLabel as={motion.span} variants={itemVariants}>
          Para quem é
        </SectionLabel>

        <SectionTitle as={motion.h2} variants={itemVariants}>
          Feito para momentos
          <br />
          que precisam de cuidado
        </SectionTitle>

        <IntroText as={motion.p} variants={itemVariants}>
          A Humanoterapia foi desenvolvida para ajudar pessoas em diferentes
          momentos da vida, oferecendo suporte acolhedor que se adapta às suas
          necessidades.
        </IntroText>

        <MainCard as={motion.div} variants={itemVariants}>
          <MainCardImage>
            <img src="./humanoterapia-sessao.png" alt="Humanoterapia" />
          </MainCardImage>
          <MainCardContent>
            <h3>O que é Humanoterapia?</h3>
            <p>
              A Humanoterapia é uma terapia Energética Espiritual que consiste
              em identificar, por meio de um aparelho chamado de Mesa Quântica,
              padrões energéticos e processos que estão levando a pessoa ao
              problema que a aflige.
            </p>
            <p>
              Sejam eles no campo da saúde física e/ou emocional, financeiro,
              afetivo, ou qualquer outro que esteja causando algum tipo de
              sofrimento.
            </p>
          </MainCardContent>
        </MainCard>

        <CardsGrid as={motion.div} variants={containerVariants}>
          {audienceCards.map((card, index) => (
            <Card
              key={index}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <CardIcon>
                <card.icon size={24} />
              </CardIcon>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </CardsGrid>
      </Content>
    </Container>
  );
}
