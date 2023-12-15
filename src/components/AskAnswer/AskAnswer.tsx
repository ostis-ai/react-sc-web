import axios from 'axios';

import { useTranslate } from 'ostis-ui-lib';

import { useLocation } from 'react-router-dom';
import { ChangeEvent, useEffect, useReducer, useState, useRef } from 'react';

import { Spinner, useLanguage } from 'ostis-ui-lib';
import { SPINER_COLOR } from '@constants';
import { AskElement } from './AskElement';

import styles from './AskAnswer.module.scss';
import { AskInput } from '@components/AskInput';

import { getHintButtonHandler } from 'src/constants/hintButtons';
import { getDescriptionById } from '@api/requests/getDescription';

interface NavigateState {
  query?: string;
  isHintButton: boolean;
}

interface ElementPayload {
  query: string;
  answer: any;
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
  const state = useLocation().state as NavigateState;

  const lang = useLanguage();

  const [historyState, dispatch] = useReducer(historyReducer, { history: [] });

  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState<string>();

  const scrollRef = useRef<HTMLDivElement>(null);

  const translate = useTranslate();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value);
  const onInputSubmit = async () => await fetchAnswerByQuery(query);

  const fetchAnswerByQuery = async (query: string | undefined) => {
    if (!query) return;

    let answer: string | null = null;

    setIsLoading(true);

    if (state.isHintButton) {
      const handler = getHintButtonHandler(lang, query!);
      answer = await handler();
    } else {
      answer = await getDescriptionById(query);
    }

    if (answer) {
      dispatch({ type: 'ADD', payload: { query, answer } });
    } else {
      dispatch({
        type: 'ADD',
        payload: {
          query,
          answer: translate({
            ru: 'К сожалению, в настоящее время нет информации, соответствующей вашему вопросу в базе знаний. Приносим извинения за неудобства.',
            en: 'Unfortunately, there is currently no information corresponding to your question in the knowledge base. We apologize for the inconvenience.',
          }),
        },
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (state.query) {
      fetchAnswerByQuery(state.query);
    }
  }, [state]);

  useEffect(() => {
    scrollToBottom();
  }, [historyState]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  if (!state) return null;

  if (isLoading) return <Spinner className={styles.spinner} appearance={SPINER_COLOR} />;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.history}>
        {historyState.history.map((entry, idx) => (
          <AskElement key={idx} {...entry} />
        ))}
        <div ref={scrollRef} />
      </div>
      <AskInput
        className={styles.inputQueryBar}
        onChange={onInputChange}
        onSubmit={onInputSubmit}
      />
    </div>
  );
};
