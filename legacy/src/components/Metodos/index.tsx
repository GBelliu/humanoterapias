import { ReactNode } from "react";

import { Container } from "./styles";

interface MetodosProps {
  children: ReactNode;
}

export function Metodos({ children }: MetodosProps) {
  return (
    <Container>
      <h1>Metodos</h1>
      {children}
    </Container>
  );
}
