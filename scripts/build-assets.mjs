// Gera as imagens publicadas a partir dos originais em assets/.
// Uso: npm run images
// - Fotos: assets/*.png|jpg  ->  public/images/*.webp (redimensionadas e comprimidas)
// - Ícones e imagem de compartilhamento: public/favicon.svg, public/apple-touch-icon.png, public/og-image.jpg
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const photos = [
  // `crop` é opcional: recorta a área útil da foto original antes de redimensionar.
  { input: "assets/christiane.png", output: "public/images/christiane.webp", width: 520, crop: { left: 100, top: 176, width: 520, height: 928 } },
  { input: "assets/sessao.png", output: "public/images/sessao.webp", width: 960, crop: { left: 0, top: 0, width: 1024, height: 1024 } },
];

const PETALS = [
  ["#ee9f86", "#fbd9c9", -62, 84, 30],
  ["#a8a3d6", "#e1def3", 62, 84, 30],
  ["#f0b27a", "#fde2c2", -38, 104, 34],
  ["#86c3b4", "#d3ece5", 38, 104, 34],
  ["#e9c46a", "#fbebb9", -14, 118, 36],
  ["#a9c48d", "#e1edcf", 14, 118, 36],
];

const petalPath = (l, w) =>
  `M0 0 C ${w} ${-l * 0.22} ${w * 0.95} ${-l * 0.72} 0 ${-l} C ${-w * 0.95} ${-l * 0.72} ${-w} ${-l * 0.22} 0 0 Z`;

// Mesma flor do componente Lotus, aberta, em SVG estático.
function lotusMarkup() {
  const gradients = PETALS.map(
    ([base, tip], i) =>
      `<linearGradient id="g${i}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${base}"/><stop offset="1" stop-color="${tip}"/></linearGradient>`,
  ).join("");
  const petals = PETALS.map(
    ([, , angle, length, width], i) =>
      `<path transform="translate(120 168) rotate(${angle})" d="${petalPath(length, width)}" fill="url(#g${i})" stroke="#fffaf2" stroke-width="2.4"/>`,
  ).join("");
  const sides = [-48, 48]
    .map((angle) => `<path transform="translate(120 168) rotate(${angle})" d="${petalPath(62, 26)}" fill="url(#gf)" stroke="#fffaf2" stroke-width="2.4"/>`)
    .join("");
  return `<defs>${gradients}<linearGradient id="gf" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#f6dcc4"/><stop offset="1" stop-color="#fffaf2"/></linearGradient></defs>
${petals}${sides}<path transform="translate(120 168)" d="${petalPath(96, 30)}" fill="url(#gf)" stroke="#fffaf2" stroke-width="2.4"/>`;
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="20 40 200 140">${lotusMarkup()}</svg>`;

const ogImage = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><radialGradient id="bg" cx="0.75" cy="0.3" r="0.8"><stop offset="0" stop-color="#fbe1cf"/><stop offset="1" stop-color="#fbf6ee"/></radialGradient></defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<svg x="700" y="110" width="440" height="367" viewBox="0 0 240 200">${lotusMarkup()}</svg>
<text x="80" y="230" font-family="Georgia, serif" font-size="40" letter-spacing="10" fill="#3f5a3a">HUMANO</text>
<text x="80" y="290" font-family="Georgia, serif" font-style="italic" font-size="52" fill="#b4532a">Terapias</text>
<text x="80" y="390" font-family="Georgia, serif" font-size="38" fill="#26332b">Christiane Bellissimo</text>
<text x="80" y="440" font-family="Arial, sans-serif" font-size="26" fill="#4a564d">Humanoterapia e terapias integrativas</text>
<text x="80" y="480" font-family="Arial, sans-serif" font-size="26" fill="#4a564d">Online e presencial em Rio Claro/SP</text>
</svg>`;

await mkdir("public/images", { recursive: true });

for (const photo of photos) {
  let image = sharp(photo.input);
  if (photo.crop) image = image.extract(photo.crop);
  await image.resize({ width: photo.width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(photo.output);
  console.log(`✓ ${photo.output}`);
}

await writeFile("public/favicon.svg", favicon);
await sharp(Buffer.from(favicon))
  .resize(150, 150, { fit: "contain", background: "#fbf6ee" })
  .extend({ top: 15, bottom: 15, left: 15, right: 15, background: "#fbf6ee" })
  .flatten({ background: "#fbf6ee" })
  .png()
  .toFile("public/apple-touch-icon.png");
await sharp(Buffer.from(ogImage)).jpeg({ quality: 86 }).toFile("public/og-image.jpg");
console.log("✓ public/favicon.svg, public/apple-touch-icon.png, public/og-image.jpg");
