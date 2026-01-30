import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Heart, Clock, Award } from "lucide-react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.container.xl};
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`;

const TextContent = styled.div`
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
    text-align: center;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.oliveLight};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.olive};
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 1.5rem;
  }
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.olive};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const StatNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;
`;

const StatDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

const stats = [
  {
    icon: Heart,
    number: "68%",
    description:
      "das pessoas relatam carregar estresse ou tensão emocional sem buscar apoio ativo.",
  },
  {
    icon: Clock,
    number: "54%",
    description:
      "dizem que adiam buscar ajuda porque não sabem por onde começar ou se seus sentimentos são 'válidos o suficiente'.",
  },
  {
    icon: TrendingUp,
    number: "70%",
    description:
      "sentem alívio e maior clareza após conversar abertamente sobre suas preocupações com alguém de confiança.",
  },
  {
    icon: Award,
    number: "10+",
    description:
      "anos de experiência ajudando pessoas a encontrarem equilíbrio e bem-estar emocional.",
  },
];

export function Estatisticas() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <Container ref={ref}>
      <Content>
        <TextContent
          as={motion.div}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Consciência emocional</SectionLabel>
          <Title>Você pode estar carregando mais do que imagina</Title>
          <Description>
            Muitas pessoas experimentam peso emocional em silêncio, não porque
            estão sofrendo, mas porque o apoio muitas vezes parece vir mais
            tarde do que deveria.
          </Description>
        </TextContent>

        <StatsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} as={motion.div} variants={itemVariants}>
              <StatIcon>
                <stat.icon size={24} />
              </StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsGrid>
      </Content>
    </Container>
  );
}
