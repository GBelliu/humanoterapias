import { useEffect, useRef, useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { pathfinder, pathfinderMessage, therapies } from "../../content";
import { useSectionReveal } from "../../lib/useSectionReveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { WhatsAppLink } from "../WhatsAppLink";
import styles from "./PathFinder.module.css";

type Answers = Record<string, string>;

const questions = pathfinder.questions;

function buildMessage(answers: Answers) {
  const theme = pathfinderMessage[answers.theme];
  const mode = pathfinderMessage[answers.mode];
  const experience = pathfinderMessage[answers.experience];
  return [
    "Olá, Christiane! Vim pelo site e gostaria de agendar uma conversa inicial.",
    theme && `No momento, ${theme}.`,
    mode && `${mode}.`,
    experience,
  ]
    .filter(Boolean)
    .join(" ");
}

function suggestedTherapies(answers: Answers) {
  const option = questions[0].options.find((item) => item.id === answers.theme);
  const ids: readonly string[] = option?.therapies ?? [];
  return therapies.filter((therapy) => ids.includes(therapy.id));
}

export function PathFinder() {
  const scope = useRef<HTMLElement>(null);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  useSectionReveal(scope);

  // Depois de cada resposta, o foco vai para a próxima pergunta (sem roubar o foco no carregamento).
  useEffect(() => {
    if (interacted.current) stepHeadingRef.current?.focus({ preventScroll: true });
  }, [step]);

  const choose = (questionId: string, optionId: string) => {
    interacted.current = true;
    setAnswers((current) => ({ ...current, [questionId]: optionId }));
    setStep((current) => current + 1);
  };

  const goBack = () => {
    interacted.current = true;
    setStep((current) => Math.max(0, current - 1));
  };

  const restart = () => {
    interacted.current = true;
    setAnswers({});
    setStep(0);
  };

  const finished = step >= questions.length;
  const question = questions[step];
  const suggestions = finished ? suggestedTherapies(answers) : [];

  return (
    <section ref={scope} id="por-onde-comecar" className={`section ${styles.section}`} aria-labelledby="comecar-titulo">
      <div className="container">
        <SectionHeading
          id="comecar-titulo"
          eyebrow={pathfinder.eyebrow}
          title={pathfinder.title}
          text={pathfinder.text}
          align="center"
        />

        <div className={styles.card} data-reveal="">
          <ol className={styles.progress} aria-hidden="true">
            {questions.map((item, index) => (
              <li key={item.id} data-state={index < step ? "done" : index === step ? "current" : "next"} />
            ))}
          </ol>

          {finished ? (
            <div key="result" className={styles.step}>
              <h3 ref={stepHeadingRef} tabIndex={-1} className={styles.question}>
                {pathfinder.result.title}
              </h3>
              <p className={styles.resultText}>{pathfinder.result.start}</p>
              {suggestions.length > 0 && (
                <>
                  <p className={styles.resultText}>{pathfinder.result.suggestion}</p>
                  <ul className={styles.suggestions}>
                    {suggestions.map((therapy) => (
                      <li key={therapy.id}>
                        <strong>{therapy.name}</strong>
                        <span>{therapy.summary}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <p className={styles.note}>{pathfinder.result.note}</p>
              <div className={styles.resultActions}>
                <WhatsAppLink message={buildMessage(answers)}>{pathfinder.result.cta}</WhatsAppLink>
                <button type="button" className={styles.textButton} onClick={restart}>
                  <RotateCcw aria-hidden="true" />
                  {pathfinder.restart}
                </button>
              </div>
            </div>
          ) : (
            <div key={question.id} className={styles.step}>
              <p className={styles.counter}>
                Pergunta {step + 1} de {questions.length}
              </p>
              <h3 ref={stepHeadingRef} tabIndex={-1} className={styles.question} id={`pergunta-${question.id}`}>
                {question.question}
              </h3>
              <ul className={styles.options} aria-labelledby={`pergunta-${question.id}`}>
                {question.options.map((option) => (
                  <li key={option.id}>
                    <button
                      type="button"
                      className={styles.option}
                      aria-pressed={answers[question.id] === option.id}
                      onClick={() => choose(question.id, option.id)}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
              {step > 0 && (
                <button type="button" className={styles.textButton} onClick={goBack}>
                  <ArrowLeft aria-hidden="true" />
                  {pathfinder.back}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
