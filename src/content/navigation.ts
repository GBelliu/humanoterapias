// Seções da página, na ordem em que aparecem. O `id` precisa ser igual ao id da seção.
// `label` aparece na barra inferior do celular ("Você está em…"); `menu: true` coloca a seção no menu.
export const sections = [
  { id: "inicio", label: "Início", menu: true },
  { id: "sobre", label: "Sobre mim", menu: true },
  { id: "humanoterapia", label: "Humanoterapia", menu: false },
  { id: "terapias", label: "Terapias", menu: true },
  { id: "por-onde-comecar", label: "Por onde começar", menu: false },
  { id: "como-funciona", label: "Como funciona", menu: true },
  { id: "duvidas", label: "Dúvidas", menu: true },
  { id: "contato", label: "Contato", menu: true },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const navigation = sections.filter((section) => section.menu);
