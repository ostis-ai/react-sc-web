import { useLocation } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { useErrorToast } from '@hooks/useErrorToast';
import { Spinner, useTranslate } from 'ostis-ui-lib';
import { SPINER_COLOR } from '@constants';
import { AskElement } from './AskElement';

import styles from './AskAnswer.module.scss';
import { AskInput } from '@components/AskInput';

interface ElementPayload {
  query: string;
  answer: string;
}

interface State {
  history: ElementPayload[];
}

type Action = { type: 'ADD'; payload: ElementPayload } | { type: 'RESET' };

const historyReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case 'RESET':
      return {
        ...state,
        history: [],
      };
    default:
      throw new Error('Unknown action type');
  }
};

export const AskAnswer = () => {
  const { state } = useLocation();

  const [historyState, dispatch] = useReducer(historyReducer, { history: [] });

  const addError = useErrorToast();
  const translate = useTranslate();
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState<string>(state.query);

  const onInputChange = (value: string) => setQuery(value);
  const onInputSubmit = async () => await fetchAnswerByQuery(query);

  const fetchAnswerByQuery = async (query: string) => {
    if (!query) return;

    console.log(query);

    setIsLoading(true);

    try {
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query}`);
      const data = resp.data;
      dispatch({ type: 'ADD', payload: { query: query, answer: data } });
    } catch (error) {
      addError(
        translate({
          ru: 'Не удалось выполнить запрос',
          en: "It's failed to fetch the external API",
        }),
      );
    }

    setIsLoading(false);
  };

  // Initial request
  useEffect(() => {
    fetchAnswerByQuery(query);
  }, [state]);

  if (!state) return null;

  if (isLoading) return <Spinner className={styles.spinner} appearance={SPINER_COLOR} />;

  return (
    <div className={styles.pageWrapper}>
      {historyState.history.map((entry) => (
        <AskElement key={entry.query} {...entry} />
      ))}
      <AskInput onChange={onInputChange} onSubmit={onInputSubmit} />
    </div>
  );
};
