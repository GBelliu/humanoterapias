import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.container.xl};
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`;

const SectionLabel = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.accentMuted};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const TestimonialCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius["2xl"]};
  padding: 3rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

const QuoteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.accentMuted};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 auto 2rem;
`;

const TestimonialText = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 400;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const AuthorName = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const AuthorRole = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.backgroundDark};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface DotProps {
  $active: boolean;
}

const Dot = styled.button<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.backgroundDark};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const testimonials = [
  {
    text: "Procurei a Christiane em um momento muito difícil. Não sabia bem o que esperar, mas encontrei um espaço seguro e acolhedor. Quase imediatamente percebi que me sentia mais leve após cada sessão.",
    author: "Maria Clara",
    role: "Cliente",
  },
  {
    text: "As técnicas da Humanoterapia me ajudaram a entender padrões que eu repetia há anos sem perceber. Hoje tenho muito mais clareza sobre minhas emoções e como lidar com elas.",
    author: "Roberto S.",
    role: "Cliente",
  },
  {
    text: "O trabalho com a Mesa Quântica foi revelador. Consegui identificar bloqueios que nem sabia que existiam e sinto uma diferença real no meu dia a dia.",
    author: "Ana Beatriz",
    role: "Cliente",
  },
];

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <Container ref={ref}>
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Depoimentos</SectionLabel>
          <Title>Suporte para momentos que precisam de cuidado</Title>
          <Subtitle>
            Espaço para permitir-se sentir sem se sentir julgado. Com o tempo,
            conversas calmas ajudaram a entender mais sobre mim mesma e as
            coisas começaram a parecer mais leves.
          </Subtitle>
        </motion.div>

        <AnimatePresence mode="wait">
          <TestimonialCard
            as={motion.div}
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <QuoteIcon>
              <Quote size={24} />
            </QuoteIcon>
            <TestimonialText>
              "{testimonials[currentIndex].text}"
            </TestimonialText>
            <AuthorInfo>
              <AuthorName>{testimonials[currentIndex].author}</AuthorName>
              <AuthorRole>{testimonials[currentIndex].role}</AuthorRole>
            </AuthorInfo>
          </TestimonialCard>
        </AnimatePresence>

        <Navigation>
          <NavButton onClick={prevTestimonial} aria-label="Anterior">
            <ChevronLeft size={20} />
          </NavButton>
          <Dots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </Dots>
          <NavButton onClick={nextTestimonial} aria-label="Próximo">
            <ChevronRight size={20} />
          </NavButton>
        </Navigation>
      </Content>
    </Container>
  );
}
