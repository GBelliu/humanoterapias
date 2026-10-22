// Primeira dobra do site e exercício de respiração.
export const hero = {
  eyebrow: "Humanoterapia e terapias integrativas",
  title: "Respire. O cuidado começa no seu ritmo.",
  text: "Sou Christiane Bellissimo e acolho você para olhar com calma o que está pesando, com técnicas energéticas e integrativas. Atendo online e presencialmente em Rio Claro/SP.",
  primaryCta: "Agendar pelo WhatsApp",
};

// Respiração 4-7-8. `seconds` define a duração de cada fase.
export const breathing = {
  title: "Respiração 4-7-8",
  intro: "Um minuto só para você. Siga a flor: ela abre quando você inspira e fecha quando você solta o ar.",
  cycles: 3,
  phases: [
    { key: "inhale", label: "Inspire pelo nariz", seconds: 4 },
    { key: "hold", label: "Segure o ar", seconds: 7 },
    { key: "exhale", label: "Solte o ar pela boca", seconds: 8 },
  ],
  start: "Respire comigo · 1 minuto",
  stop: "Parar",
  restart: "Fazer de novo",
  done: "Que bom que você se deu esse momento.",
  note: "Se sentir qualquer desconforto, pare e volte a respirar normalmente.",
} as const;

export type BreathingPhaseKey = (typeof breathing.phases)[number]["key"];
