import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.container.xl};
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 1.5rem;
  }
`;

export const TextContent = styled.div`
  max-width: 800px;
  margin-bottom: 3rem;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.badgeBg};
    border: 1px solid ${({ theme }) => theme.colors.badgeBorder};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;

    svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.15;
  margin-bottom: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.olive};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 400px;
  }
`;

interface ImageCardProps {
  $position: "left" | "center" | "right";
}

export const ImageCard = styled.div<ImageCardProps>`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  aspect-ratio: ${({ $position }) => ($position === "center" ? "3/4" : "4/5")};
  transform: ${({ $position }) =>
    $position === "left"
      ? "translateY(20px)"
      : $position === "right"
        ? "translateY(40px)"
        : "none"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 60%,
      rgba(44, 36, 32, 0.1) 100%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: none;
    aspect-ratio: 4/3;
  }
`;

export const FloatingBadgesWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

interface FloatingBadgeProps {
  $position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

const getFloatingBadgePosition = (position: string) => {
  switch (position) {
    case "topLeft":
      return css`
        left: 5%;
        top: 50px;
      `;
    case "topRight":
      return css`
        right: 5%;
        top: 150px;
      `;
    default:
      return "";
  }
};

export const FloatingBadge = styled.div<FloatingBadgeProps>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  max-width: 280px;
  pointer-events: auto;

  ${({ $position }) => getFloatingBadgePosition($position)}
`;

interface BadgeIconProps {
  $variant: "primary" | "accent" | "success";
}

const getBadgeIconStyles = (variant: string, theme: any) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${theme.colors.oliveLight};
        color: ${theme.colors.olive};
      `;
    case "accent":
      return css`
        background-color: ${theme.colors.accentMuted};
        color: ${theme.colors.accent};
      `;
    case "success":
      return css`
        background-color: ${theme.colors.successLight};
        color: ${theme.colors.success};
      `;
    default:
      return "";
  }
};

export const BadgeIcon = styled.div<BadgeIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  flex-shrink: 0;

  ${({ $variant, theme }) => getBadgeIconStyles($variant, theme)}
`;

export const ValueSection = styled.section`
  max-width: ${({ theme }) => theme.container.xl};
  margin: 4rem auto 0;
  padding: 4rem 2rem;
  text-align: center;

  .badges-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .value-badge {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textLight};
    cursor: default;
    transition: all ${({ theme }) => theme.transitions.fast};

    svg {
      color: ${({ theme }) => theme.colors.olive};
      flex-shrink: 0;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.olive};
      background-color: ${({ theme }) => theme.colors.oliveLight};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1.5rem;
  }
`;

export const ValueTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;

  span {
    font-style: italic;
  }
`;
