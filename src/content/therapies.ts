// Terapias. Cada uma vira uma pétala da flor e um cartão que vira ao ser tocado.
// A ordem aqui é a ordem das pétalas (da esquerda para a direita) e dos cartões.
export type Therapy = {
  id: string;
  name: string;
  summary: string;
  description: string;
};

export const therapiesSection = {
  eyebrow: "Terapias",
  title: "Cada terapia é uma pétala",
  text: "Toque em um cartão para ler mais. Você não precisa decidir isso agora: na conversa inicial, vemos juntos o que faz sentido para você.",
  flipHint: "Toque para saber mais",
  backHint: "Voltar",
  cta: "Perguntar sobre esta terapia",
};

export const therapies: Therapy[] = [
  {
    id: "mesa-quantica",
    name: "Mesa Quântica",
    summary: "O ponto de partida do atendimento.",
    description:
      "Une radiestesia e radiônica para investigar processos espirituais, mentais e emocionais e compreender a origem do que incomoda, nas relações, no trabalho, nas finanças, na família ou no bem-estar. Também inclui limpeza energética e alinhamento dos chakras.",
  },
  {
    id: "humanometria",
    name: "Humanometria",
    summary: "Para emoções que ficaram presas.",
    description:
      "Quando não conseguimos lidar com emoções difíceis, elas podem ficar presas no nosso campo energético. A Humanometria trabalha essa energia e também processos espirituais. É procurada em momentos de estresse, desânimo e cansaço emocional.",
  },
  {
    id: "taquions-tock",
    name: "Taquions Tock",
    summary: "Padrões conscientes e inconscientes.",
    description:
      "Trabalha nos campos mental e emocional com a energia taquiônica, olhando para traumas e padrões conscientes e inconscientes. Busca sintonizar você com quem é em essência, trazendo mais leveza e coerência.",
  },
  {
    id: "tdr",
    name: "TDR",
    summary: "Experiências muito intensas.",
    description:
      "Voltada a vivências de grande intensidade emocional, mental ou física que não foram assimiladas. A técnica trabalha a desconstrução do que causa a dor, para que a energia volte a fluir na sua vida.",
  },
  {
    id: "regressao",
    name: "Regressão com Reprogramação",
    summary: "Memórias que ainda pesam.",
    description:
      "Rastreia registros de memórias inconscientes, desta ou de outras vidas, que podem estar bloqueando o fluxo da energia. Durante toda a aplicação você permanece em plena consciência.",
  },
  {
    id: "baralho-terapeutico",
    name: "Baralho Terapêutico",
    summary: "Uma leitura terapêutica, não adivinhação.",
    description:
      "Faz a leitura do seu campo energético para entender as dificuldades de cada área da vida naquele momento e trazer esclarecimentos sobre como se posicionar. Não é oracular: cada ação sua muda o rumo do caminho.",
  },
];
