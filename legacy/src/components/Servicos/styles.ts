import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.container.xl};
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`;

export const SectionLabel = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.accentMuted};
  border: 1px solid ${({ theme }) => theme.colors.accentLight};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin-bottom: 1rem;
`;

export const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 650px;
  margin: 0 auto 2rem;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const QuestionBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 4rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const QuestionBadge = styled.span`
  padding: 0.625rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  cursor: default;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

interface ServiceItemProps {
  $active: boolean;
}

export const ServiceItem = styled.button<ServiceItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.white : "transparent"};
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.primary : "transparent")};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ $active }) => ($active ? "500" : "400")};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textLight};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-align: left;

  svg {
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};

    svg {
      opacity: 0.5;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    svg {
      display: none;
    }
  }
`;

export const ServiceDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius["2xl"]};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    min-height: 350px;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    img {
      min-height: 250px;
    }
  }
`;

export const ServiceContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

export const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.25rem;
`;

export const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: 2rem;
`;

export const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;
