import { useId, type CSSProperties, type Ref } from "react";
import { PETAL_COLORS } from "./palette";
import styles from "./Lotus.module.css";

// A flor de lótus que narra o site.
// A abertura é controlada por duas variáveis CSS no <svg>, animadas com GSAP:
//   --all: abre todas as pétalas juntas (0 = botão fechado, 1 = flor aberta);
//   --seq: abre as pétalas uma a uma, da esquerda para a direita (usada na seção de terapias).
// O grupo [data-lotus-breath] pode ser escalado para o efeito de respiração.

type Petal = { index: number; angle: number; length: number; width: number };

const BASE_X = 120;
const BASE_Y = 168;

const PETALS: Petal[] = [
  { index: 0, angle: -76, length: 84, width: 30 },
  { index: 5, angle: 76, length: 84, width: 30 },
  { index: 1, angle: -47, length: 104, width: 34 },
  { index: 4, angle: 47, length: 104, width: 34 },
  { index: 2, angle: -17, length: 118, width: 36 },
  { index: 3, angle: 17, length: 118, width: 36 },
];

const SIDE_PETALS = [
  { angle: -58, length: 62, width: 26 },
  { angle: 58, length: 62, width: 26 },
];

function petalPath(length: number, width: number) {
  const l = length;
  const w = width;
  return `M0 0 C ${w} ${-l * 0.22} ${w * 0.95} ${-l * 0.72} 0 ${-l} C ${-w * 0.95} ${-l * 0.72} ${-w} ${-l * 0.22} 0 0 Z`;
}

type LotusProps = {
  className?: string;
  activePetal?: number | null;
  ref?: Ref<SVGSVGElement>;
  style?: CSSProperties;
};

export function Lotus({ className, activePetal = null, ref, style }: LotusProps) {
  const uid = useId().replace(/:/g, "");
  const gradientId = (i: number) => `lotus-${uid}-p${i}`;

  return (
    <svg
      ref={ref}
      className={[styles.lotus, className].filter(Boolean).join(" ")}
      viewBox="0 0 240 200"
      aria-hidden="true"
      focusable="false"
      data-has-active={activePetal !== null || undefined}
      style={style}
    >
      <defs>
        {PETAL_COLORS.map(([base, tip], i) => (
          <linearGradient key={i} id={gradientId(i)} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor={base} />
            <stop offset="1" stopColor={tip} />
          </linearGradient>
        ))}
        <linearGradient id={`lotus-${uid}-front`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f6dcc4" />
          <stop offset="1" stopColor="#fffaf2" />
        </linearGradient>
        <radialGradient id={`lotus-${uid}-glow`}>
          <stop offset="0" stopColor="#fbe3b0" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fbe3b0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle className={styles.glow} cx={BASE_X} cy={BASE_Y - 60} r="96" fill={`url(#lotus-${uid}-glow)`} />
      <ellipse className={styles.water} cx={BASE_X} cy={BASE_Y + 6} rx="78" ry="7" />

      <g data-lotus-breath="">
        {PETALS.map((p) => (
          <g
            key={p.index}
            className={styles.petal}
            data-active={activePetal === p.index || undefined}
            style={{ "--a": `${p.angle}deg`, "--i": p.index } as CSSProperties}
          >
            <path d={petalPath(p.length, p.width)} fill={`url(#${gradientId(p.index)})`} />
            <path className={styles.vein} d={`M0 -6 L0 ${-p.length * 0.78}`} />
          </g>
        ))}

        {SIDE_PETALS.map((p) => (
          <g
            key={p.angle}
            className={`${styles.petal} ${styles.side}`}
            style={{ "--a": `${p.angle}deg`, "--i": 0 } as CSSProperties}
          >
            <path d={petalPath(p.length, p.width)} fill={`url(#lotus-${uid}-front)`} />
          </g>
        ))}

        <g className={`${styles.petal} ${styles.front}`} style={{ "--a": "0deg", "--i": 0 } as CSSProperties}>
          <path d={petalPath(96, 30)} fill={`url(#lotus-${uid}-front)`} />
          <path className={styles.vein} d="M0 -6 L0 -74" />
        </g>

        <g className={styles.seeds}>
          <circle cx={BASE_X - 14} cy={BASE_Y - 70} r="3" />
          <circle cx={BASE_X + 14} cy={BASE_Y - 70} r="3" />
          <circle cx={BASE_X} cy={BASE_Y - 84} r="3.4" />
        </g>
      </g>
    </svg>
  );
}
