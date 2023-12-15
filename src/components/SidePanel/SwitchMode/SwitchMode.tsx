import styles from './SwitchMode.module.scss';

import AskAIButtonIcon from '@assets/images/AskAIButton.svg';
import AskAIButtonIconFocus from '@assets/images/AskAIButtonFocus.svg';

import SCNButtonIcon from '@assets/images/SCNButton.svg';
import SCNButtonIconFocus from '@assets/images/SCNButtonFocused.svg';

import { Link, useLocation } from 'react-router-dom';
import { routes } from '@constants';

export const SwitchMode = () => {
  const location = useLocation();
  const path = location.pathname;

  const match = path.startsWith(routes.ASK_AI);

  return (
    <div className={styles.switchModeButtonsWrapper}>
      <Link to={routes.MAIN} className={styles.switchModeButton}>
        {!match ? <SCNButtonIconFocus /> : <SCNButtonIcon />}
      </Link>
      <Link to={routes.ASK_AI} className={styles.switchModeButton}>
        {match ? <AskAIButtonIconFocus /> : <AskAIButtonIcon />}
      </Link>
    </div>
  );
};
