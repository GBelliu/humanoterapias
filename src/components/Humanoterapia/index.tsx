import { ReactNode } from "react";

import { Container, Content } from "./styles";
import { GridContent } from "../elements/GridContent";
import { AltGridContent } from "../elements/AltGridContent";

export function Humanoterapia() {
  return (
    <Container>
      <h1>Humanoterapia</h1>
      <Content>
        <AltGridContent
          title="O que é"
          description="A Humanoterapia é uma terapia Energética Espiritual que consiste em
            identificar, por meio de um aparelho chamado de Mesa Quantiônica
            (semelhante a Mesa Radiônica mais possuem funções bem distintas),
            capaz de identifica padrões energéticos e inicio do processos, que
            estão levando a pessoa ao problema que o aflige naquele momento.
            Sejam eles no campo da saúde física e/ou emocional, financeiro,
            afetivo, ou qualquer outro que esteja causando algum tipo de
            sofrimento."
          img="./humanoterapia.jpg"
        />
      </Content>
    </Container>
  );
}
