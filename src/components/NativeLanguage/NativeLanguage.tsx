import { IScnNode, Native as NativeLanguageBase, useToast, useTranslate } from 'ostis-ui-lib';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { doCommand } from '@api/requests/command';
import { scUtils } from '@api/sc';
import { isAxiosError } from '@api/utils';
import ArrowIcon from '@assets/images/goBack.svg';
import { Button } from '@components/Button';
import { Notification } from '@components/Notification';
import {
  DEFAULT_COMMAND_PATH,
  DEFAULT_COMMAND_SYSTEM_ID,
  scgUrl,
  TIMEOUT,
  TIMEOUT_TOAST_ID,
} from '@constants';
import { useErrorToast } from '@hooks/useErrorToast';
import { useLazyTimeout } from '@hooks/useTimeout';

import styles from './NativeLanguage.module.scss';
import boundaryStyle from '../ErrorBoundary/ErrorBoundary.module.scss';
import { getNativeLanguageTree } from '@api/requests/nativeLanguage';

const timeoutText = {
  ru: (
    <>
      Похоже, ответ на ваш вопрос содержит большое количество связей и его загрузка может
      выполняться дольше обычного.
      <span className={styles.waitText}>Пожалуйста, подождите...</span>
    </>
  ),
  en: (
    <>
      Your answer contains a large number of links, loading may take more time.
      <span className={styles.waitText}>Please wait...</span>
    </>
  ),
};

interface IProps {
  question: number;
}

export const NativeLanguage: FC<IProps> = ({ question }) => {
  const [tree, setTree] = useState<IScnNode | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const timeoutRequestCountRef = useRef(0);

  const addError = useErrorToast();
  const { addToast, removeToast } = useToast();

  const translate = useTranslate();
  const navigate = useNavigate();

  const addTimeoutToast = () => {
    addToast(
      <Notification
        type="warning"
        title={{ ru: 'Загрузка большого ответа', en: 'Loading complex answer' }}
        // @ts-ignore
        text={timeoutText}
      />,
      {
        position: 'bottomRight',
        id: TIMEOUT_TOAST_ID,
      },
    );
  };

  const { clearTimeout, setTimeout } = useLazyTimeout(addTimeoutToast, TIMEOUT);

  const onRequestStarted = () => {
    setIsLoading(true);
    setTree(null);
  };

  const renderRequestPanel = () => {
    return null;
  };

  const resetTimeoutToast = useCallback(() => {
    timeoutRequestCountRef.current = 0;
    removeToast(TIMEOUT_TOAST_ID);
    clearTimeout();
  }, [removeToast, clearTimeout]);

  const requestNativeLanguage = useCallback(async () => {
    setTimeout();
    const nativeLanguageRes = await getNativeLanguageTree(question, onRequestStarted);

    if (!nativeLanguageRes) {
      setTree(null);
      setIsLoading(false);
      clearTimeout();
      return;
    }

    if (!isAxiosError(nativeLanguageRes)) {
      resetTimeoutToast();
      setTree(nativeLanguageRes.tree);
      setIsLoading(false);
      return;
    }
    const isTimeoutError =
      nativeLanguageRes.response?.status === 404 &&
      nativeLanguageRes.response.data === 'Timeout waiting for answer translation';
    if (!isTimeoutError) {
      resetTimeoutToast();
      return addError({ ru: 'Не удалось получить код естественного языка', en: `It's failed to get native language code` });
    }
    timeoutRequestCountRef.current++;
    requestNativeLanguage();
  }, [setTimeout, question, resetTimeoutToast, addError, translate, clearTimeout]);

  const onAskQuestion = async (addr: number) => {
    const { uiMenuViewFullSemanticNeighborhood } =
      await scUtils.findKeynodes(DEFAULT_COMMAND_SYSTEM_ID);
    const cmdRes = await doCommand(uiMenuViewFullSemanticNeighborhood.value, addr);

    if (isAxiosError(cmdRes)) {
      setIsLoading(false);
      addError({ ru: 'Не удалось выполнить запрос', en: 'Failed to handle the request' });
      return null;
    }
    return cmdRes.data.question;
  };

  useEffect(() => {
    requestNativeLanguage();
  }, [requestNativeLanguage]);

  useEffect(() => {
    return resetTimeoutToast;
  }, [resetTimeoutToast]);

  if (!tree && !isLoading)
    return (
      <div className={boundaryStyle.wrap}>
        <h4>{translate({ ru: 'Понятие было удалено', en: 'Element was deleted' })}</h4>
        <Button
          appearance="secondaryAction"
          className={boundaryStyle.backButton}
          onClick={() => {
            navigate(DEFAULT_COMMAND_PATH);
          }}
        >
          <ArrowIcon />
          {translate({ ru: 'Вернуться на главную страницу', en: 'Go back to main page' })}
        </Button>
      </div>
    );

  return (
    <NativeLanguageBase
      tree={tree}
      scgUrl={scgUrl}
      isLoading={isLoading}
      renderRequestPanel={renderRequestPanel}
      onAskQuestion={onAskQuestion}
      question={question}
      className={styles.container}
    />
  );
};
