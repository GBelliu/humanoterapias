// Dados gerais: contato, endereço, redes e SEO.
// Este arquivo também é lido pelo vite.config.ts para gerar as meta tags e o JSON-LD,
// por isso deve conter apenas dados (sem imports de componentes ou do navegador).

export const site = {
  brand: "Humanoterapias",
  therapist: {
    name: "Christiane Bellissimo",
    role: "Humanoterapeuta e Psicoterapeuta Holística",
    registry: "CRTH-BR 11118",
  },

  seo: {
    title: "Humanoterapias | Christiane Bellissimo — Terapias integrativas em Rio Claro e online",
    description:
      "Humanoterapia, Mesa Quântica e terapias integrativas com Christiane Bellissimo (CRTH-BR 11118). Atendimento online e presencial em Rio Claro/SP. Agende pelo WhatsApp.",
    ogImage: "/og-image.jpg",
    locale: "pt_BR",
  },

  contact: {
    // Somente números, com código do país (55) e DDD.
    whatsapp: "5519971365172",
    whatsappDisplay: "(19) 97136-5172",
    defaultMessage: "Olá, Christiane! Vim pelo site e gostaria de agendar um atendimento.",
  },

  instagram: {
    handle: "@humanoterapias",
    url: "https://www.instagram.com/humanoterapias/",
  },

  address: {
    place: "Clínica particular",
    street: "Rua 8, 1608, Sala 7",
    neighborhood: "Santa Cruz",
    city: "Rio Claro",
    state: "SP",
    country: "BR",
  },

  modes: [
    { type: "online", label: "Online, de onde você estiver" },
    { type: "presencial", label: "Presencial em Rio Claro/SP" },
  ],
} as const;

export const fullAddress = `${site.address.street} — ${site.address.neighborhood}, ${site.address.city}/${site.address.state}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.neighborhood}, ${site.address.city} - ${site.address.state}`,
)}`;
