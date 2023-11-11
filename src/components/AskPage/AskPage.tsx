import { useTranslate } from 'ostis-ui-lib';

import styles from './AskPage.module.scss';

const hintButtons: { ru: string; en: string }[] = [
  {
    ru: 'Что ты можешь?',
    en: 'What can you do?',
  },
  {
    ru: 'Что такое IMS?',
    en: 'What is IMS',
  },
  {
    ru: 'Что такое граф?',
    en: 'What is a graph?',
  },
  {
    ru: 'Расскажи про историю развития IMS',
    en: 'Tell me about the history of IMS ',
  },
];

export const AskPage = () => {
  const translate = useTranslate();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.askMessage}>
        <h1 className={styles.message}>
          {translate({
            ru: 'Спросите что-нибудь и IMS найдет ответ! ',
            en: 'Ask anything and IMS will find the answer!',
          })}
        </h1>
      </div>
      <div className={styles.suggestedQuestion}>
        {hintButtons.map((translateText, index) => {
          const val = translate(translateText);
          return (
            <button key={index} className={styles.hintAskButton}>
              {val}
            </button>
          );
        })}
      </div>
      <div className={styles.dialogBox}>
        <input className={styles.dialogBoxInput} />

        <button className={styles.dialogBoxButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M7.49997 18L6.59397 9.84449C6.33447 7.51049 8.73747 5.79599 10.86 6.80249L28.776 15.2895C31.0635 16.3725 31.0635 19.6275 28.776 20.7105L10.86 29.1975C8.73747 30.2025 6.33447 28.4895 6.59397 26.1555L7.49997 18ZM7.49997 18H18"
              stroke="#5896C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
