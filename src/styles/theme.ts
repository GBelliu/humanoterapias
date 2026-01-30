export const theme = {
  colors: {
    // Cores principais - paleta suave e acolhedora
    primary: "#8B7355", // Marrom acolhedor
    primaryLight: "#A89080", // Marrom claro
    primaryDark: "#6B5545", // Marrom escuro

    // Cores de destaque
    accent: "#D4A574", // Dourado suave
    accentLight: "#E8C9A0", // Dourado claro
    accentMuted: "#F5E6D3", // Bege rosado

    // Cores de fundo
    background: "#FDFBF7", // Off-white creme
    backgroundAlt: "#F7F3ED", // Bege muito claro
    backgroundDark: "#E8E0D5", // Bege médio

    // Cores de texto
    text: "#2C2420", // Marrom escuro para texto
    textLight: "#5C5450", // Cinza marrom para texto secundário
    textMuted: "#8A857F", // Cinza para texto terciário

    // Cores de suporte
    white: "#FFFFFF",
    black: "#1A1614",
    success: "#7D9B76", // Verde suave
    successLight: "#E8F0E6",
    olive: "#6B7B4C", // Verde oliva
    oliveLight: "#E9EDE4",

    // Cores para cards e badges
    cardBg: "#FFFFFF",
    badgeBg: "rgba(139, 115, 85, 0.08)",
    badgeBorder: "rgba(139, 115, 85, 0.15)",
  },

  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    md: "1.125rem", // 18px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "2rem", // 32px
    "3xl": "2.5rem", // 40px
    "4xl": "3rem", // 48px
    "5xl": "3.5rem", // 56px
    "6xl": "4rem", // 64px
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
    "5xl": "8rem",
  },

  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
    full: "9999px",
  },

  shadows: {
    sm: "0 2px 8px rgba(44, 36, 32, 0.06)",
    md: "0 4px 16px rgba(44, 36, 32, 0.08)",
    lg: "0 8px 32px rgba(44, 36, 32, 0.1)",
    xl: "0 16px 48px rgba(44, 36, 32, 0.12)",
  },

  transitions: {
    fast: "150ms ease",
    base: "250ms ease",
    slow: "400ms ease",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1400px",
  },
};

export type Theme = typeof theme;
