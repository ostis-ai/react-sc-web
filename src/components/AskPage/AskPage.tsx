import { useTranslate } from 'ostis-ui-lib';

import { useState, useCallback } from 'react';

import styles from './AskPage.module.scss';

import { useNavigate } from 'react-router-dom';
import { routes } from '@constants';
import { AskInput } from '@components/AskInput';
import { getWhatIsIMS } from '@api/requests/getWhatIsIMS';

const hintButtons: { text: { ru: string; en: string }; onClick: () => Promise<string | null> }[] = [
  {
    text: { ru: 'Что ты можешь?', en: 'What can you do?' },
    onClick: async () => null,
  },
  {
    text: { ru: 'Что такое IMS?', en: 'What is IMS' },
    onClick: getWhatIsIMS,
  },
  {
    text: { ru: 'Что такое граф?', en: 'What is a graph?' },
    onClick: async () => null,
  },
  {
    text: { ru: 'Расскажи про историю развития IMS', en: 'Tell me about the history of IMS ' },
    onClick: async () => null,
  },
];

export const AskPage = () => {
  const translate = useTranslate();
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>();

  const handleInputChange = (value: string) => setQuery(value);

  const handleButtonClick = useCallback(() => {
    navigate(routes.ASK_AI_ANSWER, { state: { query }, replace: true });
  }, [query]);

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
        {hintButtons.map((button, index) => {
          const val = translate(button.text);
          return (
            <button
              key={index}
              className={styles.hintAskButton}
              onClick={button.onClick}
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
