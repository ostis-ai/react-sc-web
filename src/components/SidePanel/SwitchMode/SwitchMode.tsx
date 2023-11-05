import { useState } from 'react';

import styles from './SwitchMode.module.scss';

import AskAIButtonIcon from '@assets/images/AskAIButton.svg';
import AskAIButtonIconFocus from '@assets/images/AskAIButtonFocus.svg';

import SCNButtonIcon from '@assets/images/SCNButton.svg';
import SCNButtonIconFocus from '@assets/images/SCNButtonFocused.svg';

import { Link } from 'react-router-dom';
import { routes } from '@constants';

export const SwitchMode = () => {

  // FIX: use url path as an active link
  const [activeLink, setActiveLink] = useState<string>(routes.MAIN);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.switchModeButtonsWrapper}>
      <Link
        to={routes.MAIN}
        className={styles.switchModeButton}
        onClick={() => handleLinkClick(routes.MAIN)}
      >
        {activeLink === routes.MAIN ? <SCNButtonIconFocus /> : <SCNButtonIcon />}
      </Link>
      <Link
        to={routes.ASK_AI_HOME}
        className={styles.switchModeButton}
        onClick={() => handleLinkClick(routes.ASK_AI_HOME)}
      >
        {activeLink === routes.ASK_AI_HOME ? <AskAIButtonIconFocus /> : <AskAIButtonIcon />}
      </Link>
    </div>
  );
};
