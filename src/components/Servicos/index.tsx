import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  Container,
  Content,
  SectionLabel,
  SectionTitle,
  SectionDescription,
  ServicesWrapper,
  ServicesList,
  ServiceItem,
  ServiceDetails,
  ServiceImage,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  CTAButton,
  QuestionBadges,
  QuestionBadge,
} from "./styles";

const services = [
  {
    id: 1,
    title: "Mesa Quântica",
    description:
      "A Mesa Quântica representa o ponto de partida em direção à Humanoterapia, usando a radiestesia, radiônica e física quântica para investigar e diagnosticar minuciosamente processos espirituais, mentais ou emocionais. Ela desvenda a raiz de dores e problemas, inclusive acessando encarnações passadas, oferecendo uma análise profunda sobre a origem de cada questão.",
    image: "./mesa.jpg",
  },
  {
    id: 2,
    title: "Humanometria",
    description:
      "A Humanometria trata a energia presa no campo eletromagnético. Quando não conseguimos lidar com emoções difíceis, elas ficam presas e se transformam em energia negativa, causando doenças e bloqueios. A técnica também trata auto obsessão, obsessão de encarnado ou desencarnado e demais processos espirituais.",
    image: "./humanometria.png",
  },
  {
    id: 3,
    title: "Taquions Tock",
    description:
      "A Técnica de Taquions Tock trabalha com a frequência de quinta dimensão, atuando nos campos mental e emocional para tratamento de traumas e padrões conscientes e inconscientes. A energia taquiônica sintoniza com quem somos em Essência, ampliando nossa consciência e promovendo bem-estar.",
    image: "./taquions.jpeg",
  },
  {
    id: 4,
    title: "TDR",
    description:
      "O tratamento com a TDR trabalha experiências de muita intensidade emocional, mental ou física. A técnica atua na desconstrução do que causa a dor para que os mecanismos de defesa não sejam acionados, proporcionando fluidez energética na vida da pessoa.",
    image: "./tdr.jpeg",
  },
  {
    id: 5,
    title: "Regressão com Reprogramação",
    description:
      "Esta técnica rastreia registros de memórias inconscientes no corpo mental e emocional, de fatos ocorridos nesta ou em outra vida que estão causando dor e bloqueando o fluxo da energia. Durante a aplicação, a pessoa se mantém lúcida e consciente.",
    image: "./regressao.jpeg",
  },
  {
    id: 6,
    title: "Baralho Terapêutico",
    description:
      "O Baralho oferece uma leitura terapêutica (não oracular) que analisa seu campo energético para identificar dificuldades em determinadas áreas da vida, ajudando com esclarecimentos de como se posicionar energeticamente para melhor fluidez.",
    image: "./cigano.jpeg",
  },
];

const questions = [
  "Isso será julgamento-livre?",
  "E se eu não souber explicar como me sinto?",
  "Por onde eu começo?",
  "E se eu não estiver pronto(a) ainda?",
  "Conversar com alguém realmente ajuda?",
  "Posso só explorar minhas opções?",
];

export default function Servicos() {
  const [activeService, setActiveService] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <Container id="servicos" ref={ref}>
      <Content
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <SectionLabel>Você não é o único passando por isso</SectionLabel>

          <SectionTitle>
            Um suporte que não adiciona mais peso
            <br />
            ao que você já carrega
          </SectionTitle>

          <SectionDescription>
            Você não precisa ter certeza do que está sentindo, saber exatamente
            o que falar, ou se encaixar em um rótulo. Nossas técnicas te
            encontram onde você está.
          </SectionDescription>
        </motion.div>

        <QuestionBadges
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {questions.map((question, index) => (
            <QuestionBadge
              key={index}
              as={motion.span}
              whileHover={{ scale: 1.02 }}
            >
              {question}
            </QuestionBadge>
          ))}
        </QuestionBadges>

        <ServicesWrapper>
          <ServicesList>
            {services.map((service, index) => (
              <ServiceItem
                key={service.id}
                as={motion.button}
                $active={activeService === index}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ x: 8 }}
              >
                <span>{service.title}</span>
                <ChevronRight size={18} />
              </ServiceItem>
            ))}
          </ServicesList>

          <AnimatePresence mode="wait">
            <ServiceDetails
              as={motion.div}
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ServiceImage>
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>{services[activeService].title}</ServiceTitle>
                <ServiceDescription>
                  {services[activeService].description}
                </ServiceDescription>
                <CTAButton onClick={scrollToContact}>
                  Saiba mais
                  <ArrowRight size={18} />
                </CTAButton>
              </ServiceContent>
            </ServiceDetails>
          </AnimatePresence>
        </ServicesWrapper>
      </Content>
    </Container>
  );
}
