import classNames from 'classnames';
import { TLanguage, useLanguageContext } from 'ostis-ui-lib';
import { Tooltip } from '@components/ToolTip/ToolTip';

import styles from './language.module.scss';

export const Language = () => {
  const { lang, setLang } = useLanguageContext();

  const setLanguage = (lang: TLanguage) => () => {
    localStorage.setItem('language', lang);
    setLang(lang);
  };

  return (
    <div className={styles.languageWrap}>
      <div className={styles.languages}>
        <Tooltip systemId="ui_english_language">
          <span
            className={classNames(styles.language, styles.engLanguage, {
              [styles.activeLanguage]: lang === 'en',
            })}
            onClick={setLanguage('en')}
          >
            En
          </span>
        </Tooltip>
        <Tooltip systemId="ui_russian_language">
          <span className={styles.divider} />
          <span
            className={classNames(styles.language, styles.rusLanguage, {
              [styles.activeLanguage]: lang === 'ru',
            })}
            onClick={setLanguage('ru')}
          >
            Ru
          </span>
        </Tooltip>
      </div>
    </div>
  );
};
