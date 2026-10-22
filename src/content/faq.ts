// Dúvidas frequentes.
import { fullAddress } from "./site";

export const faqSection = {
  eyebrow: "Dúvidas",
  title: "Perguntas que costumo ouvir",
  items: [
    {
      question: "Como funciona o atendimento online?",
      answer:
        "O atendimento acontece pela internet, de onde você estiver. Pelo WhatsApp combinamos o horário e eu explico tudo o que você precisa para a sessão.",
    },
    {
      question: "Onde é o atendimento presencial?",
      answer: `Em uma clínica particular em Rio Claro/SP: ${fullAddress}.`,
    },
    {
      question: "Preciso saber qual terapia escolher?",
      answer:
        "Não. Começamos com uma conversa e a leitura na Mesa Quântica, e a partir dela indico as técnicas mais adequadas para o seu momento.",
    },
    {
      question: "As terapias substituem o tratamento médico ou psicológico?",
      answer:
        "Não. As terapias integrativas são complementares e não substituem acompanhamento médico, psicológico ou psiquiátrico. Nunca interrompa um tratamento sem orientação do seu médico.",
    },
  ],
};
