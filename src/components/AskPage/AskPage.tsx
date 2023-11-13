import { useTranslate } from 'ostis-ui-lib';

import { MouseEvent, useState } from 'react';

import styles from './AskPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '@constants';
import { AskInput } from '@components/AskInput';

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
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>();

  const handleInputChange = (value: string) => setQuery(value);

  const handleButtonClick = () => {
    navigate(routes.ASK_AI_ANSWER, { state: { query }, replace: true });
  };

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
            <button
              key={index}
              className={styles.hintAskButton}
              onClick={() => {
                console.log(val);
                setQuery(val);
                handleButtonClick();
              }}
            >
              {val}
            </button>
          );
        })}
      </div>
      <div className={styles.dialogBox}>
        <AskInput onChange={handleInputChange} onSubmit={handleButtonClick} />
      </div>
    </div>
  );
};
