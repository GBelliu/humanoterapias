import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    }
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
  
  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.7;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  ul, ol {
    list-style: none;
  }
  
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }
  
  ::selection {
    background-color: ${({ theme }) => theme.colors.accentLight};
    color: ${({ theme }) => theme.colors.text};
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primaryLight};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
