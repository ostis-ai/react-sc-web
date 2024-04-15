import { routes } from '@constants';
import { useTranslate } from 'ostis-ui-lib';
import { useMatch } from 'react-router-dom';

import styles from './NativeLanguagePage.module.scss';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { NativeLanguage } from '@components/NativeLanguage/NativeLanguage';

export const NativeLanguagePage = () => {
  const translate = useTranslate();
  const match = useMatch(routes.QUESTION);

  const question = match?.params.question;
  if (!question) return null;

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary
        title={translate({
          ru: 'Ошибка загрузки компонента кода естественного языка',
          en: 'Error loading native language code',
        })}
        paragraph={translate({
          ru: 'Ошибка загрузки компонента кода естественного языка',
          en: 'Error loading native language code',
        })}
        shouldReturn={true}
      >
        <NativeLanguage question={Number(question)} />
      </ErrorBoundary>
    </div>
  );
};
