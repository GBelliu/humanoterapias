import { Buttons, Container, Content, FirstButton, LastButton, LeftContent } from "./styles";

export function Hero() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <h1>
            Transforme sua vida encontrando equilíbrio, cura e transformação!
          </h1>
          <p>
            Pronto para começar a sua jornada de autodescoberta e crescimento?
            Agende sua primeira consulta agora e dê o primeiro passo em direção
            a uma vida mais saudável e equilibrada.
          </p>
          <Buttons>
            <FirstButton>Quero saber mais</FirstButton>
            <LastButton>Agendar consulta</LastButton>
          </Buttons>
        </LeftContent>
        {/* <RightContent>
          <div>
            <img src="./lotus.jpg" alt="" />;
          </div>
        </RightContent> */}
      </Content>
    </Container>
  );
}
