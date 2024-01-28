import { Container, Content, LeftContent, RightContent } from "./styles";

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
          <button>Agendar consulta</button>
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
