// "Por onde começar?": perguntas simples que montam uma mensagem para o WhatsApp.
// Não é diagnóstico; apenas sugere temas para a conversa inicial.
export const pathfinder = {
  eyebrow: "Por onde começar?",
  title: "Três perguntas, um primeiro passo",
  text: "Responda no seu tempo. No final, preparo uma mensagem para você enviar pelo WhatsApp, se quiser.",
  questions: [
    {
      id: "theme",
      question: "O que você gostaria de cuidar agora?",
      options: [
        { id: "emocional", label: "Minhas emoções e o cansaço do dia a dia", therapies: ["humanometria", "taquions-tock"] },
        { id: "padroes", label: "Padrões que se repetem na minha vida", therapies: ["taquions-tock", "regressao"] },
        { id: "vivencias", label: "Algo marcante que vivi e ainda pesa", therapies: ["tdr", "regressao"] },
        { id: "caminhos", label: "Relações, trabalho ou finanças", therapies: ["baralho-terapeutico", "humanometria"] },
      ],
    },
    {
      id: "mode",
      question: "Como prefere o atendimento?",
      options: [
        { id: "online", label: "Online, de casa", therapies: [] },
        { id: "presencial", label: "Presencial em Rio Claro", therapies: [] },
        { id: "indiferente", label: "Tanto faz", therapies: [] },
      ],
    },
    {
      id: "experience",
      question: "Já fez terapias integrativas antes?",
      options: [
        { id: "primeira", label: "Será minha primeira vez", therapies: [] },
        { id: "ja-fiz", label: "Sim, já fiz", therapies: [] },
      ],
    },
  ],
  back: "Voltar",
  restart: "Recomeçar",
  result: {
    title: "Seu primeiro passo",
    start:
      "Tudo começa com uma conversa e uma leitura na Mesa Quântica. É ela que mostra quais técnicas fazem sentido para você.",
    suggestion: "Pelo que você contou, podemos conversar também sobre:",
    note: "Isto não é um diagnóstico. A indicação é feita com você, na conversa inicial.",
    cta: "Enviar pelo WhatsApp",
  },
} as const;

// Frases usadas para montar a mensagem a partir de cada resposta.
export const pathfinderMessage: Record<string, string> = {
  emocional: "gostaria de cuidar das minhas emoções e do cansaço do dia a dia",
  padroes: "quero entender padrões que se repetem na minha vida",
  vivencias: "vivi algo marcante que ainda pesa",
  caminhos: "busco clareza sobre relações, trabalho ou finanças",
  online: "Prefiro atendimento online",
  presencial: "Prefiro atendimento presencial em Rio Claro",
  indiferente: "Posso fazer online ou presencial",
  primeira: "Será minha primeira vez em terapias integrativas.",
  "ja-fiz": "Já fiz terapias integrativas antes.",
};
