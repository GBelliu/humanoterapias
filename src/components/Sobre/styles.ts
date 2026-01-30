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
  display: grid;
  grid-template-columns: 1fr 1.2fr;
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

export const ImageSection = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const ProfileImage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius["2xl"]};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 3/4;
    object-fit: cover;
    object-position: top;
  }
`;

export const FloatingCard = styled.div`
  position: absolute;
  bottom: 2rem;
  right: -2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }

    span {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    right: 1rem;
    bottom: 1rem;
  }
`;

export const InfoSection = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
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

export const Name = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const Credentials = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

export const CredentialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};

  svg {
    color: ${({ theme }) => theme.colors.olive};
  }
`;

export const Bio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const Specialties = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

export const SpecialtyTag = styled.span`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.accentMuted};
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundDark};
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textLight};
  transition: color ${({ theme }) => theme.transitions.fast};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
