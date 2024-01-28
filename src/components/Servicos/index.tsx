import React, { useEffect, useState } from "react";
import {
  Container,
  ContentService,
  LeftContent,
  RightContent,
  Item,
  ContentItem,
} from "./styles";
import { Link } from "react-scroll";

export default function Servicos() {
  const serviceContent = [
    {
      title: "Mesa Quantiônica",
      description:
        "A Mesa Quantiônica representa o ponto de partida em direção à HUMANOTERAPIA, usando a radiestesia, radiônica e física quântica para investigar e diagnosticar minuciosamente processos espirituais, mentais ou emocionais. Ela desvenda a raiz de dores e problemas, inclusive acessando encarnações passadas, oferecendo uma análise profunda sobre a origem de cada questão e sua relação com diversas áreas da vida, como relacionamentos, profissão, finanças, família ou saúde. Além disso, promove bem-estar, limpeza energética, alinhamento dos chakras e encaminhamento para tratamento, baseado no diagnóstico obtido pela mesa.",
      button_url: "Saiba mais",
      img_url: "./mesa.jpg",
    },
    {
      title: "Humanometria",
      description:
        "A Humanometria, trata a energia presa no campo eletromagnético. Sabe quando a gente não consegue lidar com emoções difíceis e elas ficam presas na gente? Isso vira uma energia ruim, que causa problemas na nossa vida, causando doenças e bloqueios que são chamados de níveis. A Humanometria cuida para eliminar todos esses níveis. A Humanometria trata também, auto obsessão, obsessão de encarnado ou desencarnado e demais processos espirituais iniciados nesta ou em outras vidas. E é usada para o tratamento de estresse, desânimo, insônia, falta de interesse pela vida, irritabilidade e qualquer outro sintoma que está levando o assistido a um estado depressivo.",
      button_url: "",
      img_url: "./humanometria.png",
    },
    {
      title: "Taquions Tock",
      description:
        "A Técnica de Taquions Tock trabalha com a frequência de quinta dimensão, atuando nos campos mental e emocional para tratamento de traumas e padrões conscientes e inconscientes, alinhando a vibração da pessoa a seu projeto de vida. A energia taquiônica sintoniza com quem somos em Essência para permitir que o equilíbrio aconteça. Conecta-nos com a fonte da criação trazendo o que é necessário para o momento. Amplia nossa consciência, traz coerência, sutileza, pensamentos leves e promove o bem-estar físico, emocional e mental.",
      button_url: "",
      img_url: "./taquions.jpeg",
    },
    {
      title: "TDR",
      description:
        "O tratamento com a TDR é uma experiência de muita intensidade emocional, mental ou física, seja um trauma ou qualquer outra vivência na qual a pessoa não foi capaz de assimilar e digerir. A técnica trabalha na desconstrução do que causa a dor para que os mecanismos de defesa não sejam acionados e com isso proporciona a fluidez energética na vida da pessoa.",
      button_url: "",
      img_url: "./tdr.jpeg",
    },
    {
      title: "Regressão com Reprogramação",
      description:
        "A finalidade desta técnica é rastrear os registros de memórias inconscientes, no corpo mental e corpo emocional, de fatos ocorridos nesta ou em outra vida, que estão causando dor. E, consequentemente, bloqueando e impedindo o fluxo da energia. É importante ressaltar que no decorrer da aplicação desta técnica a pessoa se mantém lúcida e consciente.",
      button_url: "",
      img_url: "./regressao.jpeg",
    },
    {
      title: "Baralho Terapêutico",
      description:
        "A finalidade do Baralho é uma leitura terapêutica, e não oracular ou adivinhatória , pois a cada ação realizada, você muda o rumo da sua vida. É uma técnica que tem a capacidade de fazer a leitura do seu campo energético para analisar quais são as dificuldades que você encontra naquele momento em determinada área, e ajudar com esclarecimentos de como se posicionar energeticamente para que as coisas tenham uma fluidez melhor na sua vida.",
      button_url: "",
      img_url: "./cigano.jpeg",
    },
  ];
  const [actives, setActives] = useState({
    btn1: true,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
    btn6: false,
  });
  const [serviceInformations, setServiceInformations] = useState<any>();

  useEffect(() => {
    if (actives.btn1 === true) {
      setServiceInformations(serviceContent[0]);
    }
    if (actives.btn2 === true) {
      setServiceInformations(serviceContent[1]);
    }
    if (actives.btn3 === true) {
      setServiceInformations(serviceContent[2]);
    }
    if (actives.btn4 === true) {
      setServiceInformations(serviceContent[3]);
    }
    if (actives.btn5 === true) {
      setServiceInformations(serviceContent[4]);
    }
    if (actives.btn6 === true) {
      setServiceInformations(serviceContent[5]);
    }
  }, [actives]);
  return (
    <Container id="servicos">
      <ContentService>
        <LeftContent>
          <button
            onClick={() =>
              setActives({
                btn1: true,
                btn2: false,
                btn3: false,
                btn4: false,
                btn5: false,
                btn6: false,
              })
            }
          >
            <Item active={actives["btn1"]}>Mesa Quantiônica</Item>
          </button>
          <button
            onClick={() =>
              setActives({
                btn1: false,
                btn2: true,
                btn3: false,
                btn4: false,
                btn5: false,
                btn6: false,
              })
            }
          >
            <Item active={actives["btn2"]}>Humanometria</Item>
          </button>
          <button
            onClick={() =>
              setActives({
                btn1: false,
                btn2: false,
                btn3: true,
                btn4: false,
                btn5: false,
                btn6: false,
              })
            }
          >
            <Item active={actives["btn3"]}>Taquions Tock</Item>
          </button>
          <button
            onClick={() =>
              setActives({
                btn1: false,
                btn2: false,
                btn3: false,
                btn4: true,
                btn5: false,
                btn6: false,
              })
            }
          >
            <Item active={actives["btn4"]}>TDR</Item>
          </button>
          <button
            onClick={() =>
              setActives({
                btn1: false,
                btn2: false,
                btn3: false,
                btn4: false,
                btn5: true,
                btn6: false,
              })
            }
          >
            <Item active={actives["btn5"]}>Regressão com Reprogramação</Item>
          </button>
          <button
            onClick={() =>
              setActives({
                btn1: false,
                btn2: false,
                btn3: false,
                btn4: false,
                btn5: false,
                btn6: true,
              })
            }
          >
            <Item active={actives["btn6"]}>Baralho Terapêutico</Item>
          </button>
        </LeftContent>

        <RightContent>
          <ContentItem>
            <div className="imgLeft">
              <img src={serviceInformations?.img_url} alt="" />
            </div>
            <div className="textRight">
              <h1>{serviceInformations?.title}</h1>
              <p>{serviceInformations?.description}</p>
              <Link to="orcamento" smooth={true} duration={500} offset={-125}>
                <button>Saiba mais</button>
              </Link>
            </div>
          </ContentItem>
        </RightContent>
      </ContentService>
    </Container>
  );
}
