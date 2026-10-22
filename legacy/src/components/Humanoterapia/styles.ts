import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.container.xl};
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`;

export const SectionLabel = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.accentMuted};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

export const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const MainCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  width: 100%;
  max-width: 1000px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius["2xl"]};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const MainCardImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 300px;
  }
`;

export const MainCardContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 1rem;
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  text-align: left;
  transition: all ${({ theme }) => theme.transitions.base};
  border: 1px solid transparent;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accentLight};
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.accentMuted};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.25rem;
`;

export const CardTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;
