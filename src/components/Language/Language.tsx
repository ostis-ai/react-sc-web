import classNames from 'classnames';
import { TLanguage, useLanguageContext } from 'ostis-ui-lib';

import styles from './language.module.scss';
import { FC } from 'react';

type HEXColor = `#${string}`;

interface ILanguageProps {
  primaryLanguageColor?: HEXColor;
  secondaryLanguageColor?: HEXColor;
}

// TODO: colors 

export const Language: FC<ILanguageProps> = ({ primaryLanguageColor, secondaryLanguageColor }) => {
  const { lang, setLang } = useLanguageContext();

  const setLanguage = (lang: TLanguage) => () => {
    localStorage.setItem('language', lang);
    setLang(lang);
  };

  const primaryLanguageStyle = primaryLanguageColor ? { color: primaryLanguageColor } : {};
  const secondaryLanguageStyle = secondaryLanguageColor ? { color: secondaryLanguageColor } : {};

  return (
    <div className={styles.languageWrap}>
      <div className={styles.languages}>
        <span
          style={lang == 'en' ? primaryLanguageStyle : secondaryLanguageStyle}
          className={classNames(styles.language, styles.engLanguage, {
            [styles.activeLanguage]: lang === 'en',
          })}
          onClick={setLanguage('en')}
        >
          En
        </span>
        <span className={styles.divider} />
        <span
          style={lang == 'ru' ? primaryLanguageStyle : secondaryLanguageStyle}
          className={classNames(styles.language, styles.rusLanguage, {
            [styles.activeLanguage]: lang === 'ru',
          })}
          onClick={setLanguage('ru')}
        >
          Ru
        </span>
      </div>
    </div>
  );
};
