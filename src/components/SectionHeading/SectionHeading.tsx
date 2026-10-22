import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  text?: string;
  align?: "start" | "center";
};

// Cabeçalho padrão das seções. O <h2> recebe o id usado em aria-labelledby.
export function SectionHeading({ id, eyebrow, title, text, align = "start" }: SectionHeadingProps) {
  return (
    <header className={styles.heading} data-align={align}>
      <p className="eyebrow" data-reveal="">
        {eyebrow}
      </p>
      <h2 id={id} className={styles.title} data-split="">
        {title}
      </h2>
      {text && (
        <p className={styles.text} data-reveal="">
          {text}
        </p>
      )}
    </header>
  );
}
