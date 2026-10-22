# Humanoterapias — site da Christiane Bellissimo

Site de apresentação e agendamento. Conceito: **uma flor de lótus que respira e floresce** conforme a pessoa percorre a página.

- **Hero:** a lótus respira devagar e conduz um exercício de respiração 4-7-8.
- **Logo:** a lótus do cabeçalho abre conforme o scroll, como indicador de progresso.
- **Terapias:** cada terapia é uma pétala. No desktop, a flor fica fixa ao lado e abre uma pétala por terapia. Os cartões viram ao toque.
- **Por onde começar?:** três perguntas que montam uma mensagem pronta para o WhatsApp.
- **Como funciona:** um caule cresce com o scroll e brota uma folha a cada etapa.
- **Contato:** a flor termina de florescer. Tocar nela solta pétalas (surpresa).

**No celular** o site foi pensado para o polegar:

- **Barra inferior fixa:** mostra em qual seção a pessoa está ("Seção 4 de 8 · Terapias"), com uma mini-lótus que floresce conforme o progresso da leitura. Tocar nela abre o menu de seções. Ao lado fica o botão **Agendar**.
- **Cabeçalho:** só a logo, que some ao descer e volta ao subir.
- **Topo:** a lótus aparece logo de início. O exercício de respiração abre em tela cheia.
- **Terapias:** carrossel deslizável com botões de anterior/próxima e contador. A flor acima abre a pétala do cartão visível.

**No desktop**, o item do menu da seção atual fica destacado e uma linha colorida sob o cabeçalho mostra o progresso.

Stack: React 19, TypeScript, Vite 8, CSS Modules, GSAP (ScrollTrigger e SplitText), Lenis e lucide-react.

## Rodar

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # typecheck + build de produção em dist/
npm run lint
npm run typecheck
```

Requer Node 22.12 ou superior.

## Onde editar o conteúdo

Todo o texto fica em **`src/content/`**. Não é preciso mexer nos componentes.

| O que mudar | Arquivo |
| --- | --- |
| WhatsApp, Instagram, endereço, nome, registro e textos de SEO | `src/content/site.ts` |
| Seções (nomes da barra inferior) e itens do menu | `src/content/navigation.ts` |
| Título do topo e textos do exercício de respiração | `src/content/hero.ts` |
| "Sobre mim", formações e foto | `src/content/about.ts` |
| "O que é Humanoterapia" e aviso de saúde | `src/content/humanoterapia.ts` |
| Terapias (nome, resumo e descrição; a ordem define as pétalas) | `src/content/therapies.ts` |
| Perguntas do "Por onde começar?" e frases da mensagem | `src/content/pathfinder.ts` |
| Etapas do "Como funciona" | `src/content/process.ts` |
| Dúvidas frequentes | `src/content/faq.ts` |
| Seção de contato e rodapé | `src/content/contact.ts` |

As meta tags (título, descrição, Open Graph) e o JSON-LD do Google são gerados no build a partir de `site.ts`.

### Trocar ou adicionar fotos

1. Coloque o original em `assets/` (PNG ou JPG, sem compressão).
2. Ajuste a lista `photos` em `scripts/build-assets.mjs`. O `crop` é opcional.
3. Rode `npm run images`. As versões otimizadas (WebP) vão para `public/images/`.
4. Atualize o caminho e as dimensões no arquivo de conteúdo correspondente.

O mesmo script gera `favicon.svg`, `apple-touch-icon.png` e `og-image.jpg` (a imagem de compartilhamento).

## Domínio

Enquanto não houver domínio próprio, o build usa o domínio de produção da Vercel (`VERCEL_PROJECT_PRODUCTION_URL`) para o canonical, o Open Graph e o JSON-LD. Quando comprar o domínio, configure a variável de ambiente `SITE_URL` na Vercel, por exemplo `https://humanoterapias.com.br`.

## Cuidados

- **Conteúdo de saúde:** sem promessa de cura ou resultado e sem linguagem de diagnóstico. O aviso de que as terapias não substituem acompanhamento médico aparece em "O que é" e nas dúvidas.
- **Privacidade (LGPD):** o site não tem formulário nem cookies de rastreamento. O contato é feito direto pelo WhatsApp da pessoa.
- **Acessibilidade:** textos com 18px ou mais, contraste AA, botões grandes, navegação por teclado e "pular para o conteúdo". Com "reduzir movimento" ativado no sistema, todas as animações são desligadas e o conteúdo continua completo.
- **Animações:** ficam em `useSectionReveal` (`src/lib/`) e em cada componente. Um mesmo elemento nunca recebe duas animações: anime o contêiner numa e os filhos na outra. O breakpoint é único, 900px, no CSS e em `DESKTOP_QUERY` (`src/lib/gsap.ts`).

## Site anterior

A versão anterior está em `legacy/`, fora do build, e na tag git `legacy-v1`.
