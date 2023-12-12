import { useTranslate } from 'ostis-ui-lib';

import { useState, useCallback } from 'react';

import styles from './AskPage.module.scss';

import { useNavigate } from 'react-router-dom';
import { routes } from '@constants';
import { AskInput } from '@components/AskInput';
import { hintButtons } from 'src/constants/hintButtons';
import { transferableAbortSignal } from 'util';

interface NavigateState {
  query?: string;
  isHintButton: boolean;
}

export const AskPage = () => {
  const translate = useTranslate();
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>();

  const handleInputChange = (value: string) => setQuery(value);

  const handleButtonClick = (state: NavigateState) => {
    navigate(routes.ASK_AI_ANSWER, { state, replace: true });
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
        {hintButtons.map((button, index) => {
          const translatedText = translate(button.text);
          return (
            <button
              key={index}
              className={styles.hintAskButton}
              onClick={() => {
                handleButtonClick({ query: translatedText, isHintButton: true });
              }}
            >
              {translatedText}
            </button>
          );
        })}
      </div>
      <div className={styles.dialogBox}>
        <AskInput
          onChange={handleInputChange}
          onSubmit={() => handleButtonClick({ query, isHintButton: false })}
        />
      </div>
    </div>
  );
};
