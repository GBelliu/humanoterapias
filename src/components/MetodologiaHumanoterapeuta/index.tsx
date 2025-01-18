
import {
  Container,
  Content,
  TextContainer,
} from "./styles";
import Servicos from "../Servicos";
import BannerTitleSection from "../elements/BannerTitleSection";

export function MetodologiaHumanoterapeuta() {
  return (
    <Container>
      <BannerTitleSection behindText="Metodologia Humanoterapeuta" mainText="Metodologia Humanoterapeuta" />
      <TextContainer>
        <p>
          A metodologia Humanoterapeuta é um tratamento energético e espiritual
          que também permite investigar e diagnosticar as causas das dores
          emocionais visando aliviar e ressignificar estas dores.
        </p>
        <p>
          O Humanoterapeuta vai identificar a causa do problema, ou da dor
          emocional, e vai verificar na Mesa Quântica quais as técnicas dentro
          da metodologia Humanoterapeuta serão indicadas para o caso específico.
          Confira abaixo as técnicas da metodologia:
        </p>
      </TextContainer>
      <Content>
        {/* <GridContent
          title="Mesa Quantiônica"
          description=" A Mesa Quantiônica representa o ponto de partida em direção à
            HUMANOTERAPIA, usando a radiestesia, radiônica e física quântica
            para investigar e diagnosticar minuciosamente processos espirituais,
            mentais ou emocionais. Ela desvenda a raiz de dores e problemas,
            inclusive acessando encarnações passadas, oferecendo uma análise
            profunda sobre a origem de cada questão e sua relação com diversas
            áreas da vida, como relacionamentos, profissão, finanças, família ou
            saúde. Além disso, promove bem-estar, limpeza energética,
            alinhamento dos chakras e encaminhamento para tratamento, baseado no
            diagnóstico obtido pela mesa."
          img="./mesa.jpg"
        />
        <AltGridContent
          title="Humanometria"
          description="A Humanometria, trata a energia presa no campo eletromagnético. Sabe
            quando a gente não consegue lidar com emoções difíceis e elas ficam
            presas na gente? Isso vira uma energia ruim, que causa problemas na
            nossa vida, causando doenças e bloqueios que são chamados de níveis.
            A Humanometria cuida para eliminar todos esses níveis."
          description2="A Humanometria trata também, auto obsessão, obsessão de encarnado ou
            desencarnado e demais processos espirituais iniciados nesta ou em
            outras vidas. E é usada para o tratamento de estresse, desânimo,
            insônia, falta de interesse pela vida, irritabilidade e qualquer
            outro sintoma que está levando o assistido a um estado depressivo."
          img="./humanometria.png"
        />

        <GridContent
          title="Taquions Tock"
          description="A Técnica de Taquions Tock trabalha com a frequência de quinta
            dimensão, atuando nos campos mental e emocional para tratamento de
            traumas e padrões conscientes e inconscientes, alinhando a vibração
            da pessoa a seu projeto de vida."
          description2="A energia taquiônica sintoniza com quem somos em Essência para
            permitir que o equilíbrio aconteça. Conecta-nos com a fonte da
            criação trazendo o que é necessário para o momento. Amplia nossa
            consciência, traz coerência, sutileza, pensamentos leves e promove o
            bem-estar físico, emocional e mental."
          img="./taquions.jpeg"
        />
        <AltGridContent
          title="TDR"
          description="O tratamento com a TDR é uma experiência de muita intensidade
            emocional, mental ou física, seja um trauma ou qualquer outra
            vivência na qual a pessoa não foi capaz de assimilar e digerir. A
            técnica trabalha na desconstrução do que causa a dor para que os
            mecanismos de defesa não sejam acionados e com isso proporciona a
            fluidez energética na vida da pessoa."
          img="./tdr.jpeg"
        />
        <GridContent
          title="Regressão com Reprogramação"
          description="A finalidade desta técnica é rastrear os registros de memórias
            inconscientes, no corpo mental e corpo emocional, de fatos ocorridos
            nesta ou em outra vida, que estão causando dor. E, consequentemente,
            bloqueando e impedindo o fluxo da energia. É importante ressaltar
            que no decorrer da aplicação desta técnica a pessoa se mantém lúcida
            e consciente."
          img="./regressao.jpeg"
        />
        <AltGridContent
          title="Baralho Terapêutico"
          description="A finalidade do Baralho é uma leitura terapêutica, e não oracular ou
            adivinhatória , pois a cada ação realizada, você muda o rumo da sua
            vida. É uma técnica que tem a capacidade de fazer a leitura do seu
            campo energético para analisar quais são as dificuldades que você
            encontra naquele momento em determinada área, e ajudar com
            esclarecimentos de como se posicionar energeticamente para que as
            coisas tenham uma fluidez melhor na sua vida."
          img="./cigano.jpeg"
        /> */}
        <Servicos />
      </Content>
    </Container>
  );
}
