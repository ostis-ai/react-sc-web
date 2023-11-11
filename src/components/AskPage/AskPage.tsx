import { useTranslate } from 'ostis-ui-lib';

import styles from './AskPage.module.scss';

const hintButtons: { ru: string; en: string }[] = [
  {
    ru: 'Что ты можешь?',
    en: 'What can you do?',
  },
  {
    ru: 'Что ты можешь?',
    en: 'What can you do?',
  },
  {
    ru: 'Что ты можешь?',
    en: 'What can you do?',
  },
  {
    ru: 'Что ты можешь?',
    en: 'What can you do?',
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
      <div>
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
        <div>
          <input />
          <button></button>
        </div>
      </div>
    </div>
  );
};
