import styles from './SwitchMode.module.scss';

import AskAIButtonIcon from '@assets/images/AskAIButton.svg';
import AskAIButtonIconFocus from '@assets/images/AskAIButtonFocus.svg';

import SCNButtonIcon from '@assets/images/SCNButton.svg';
import SCNButtonIconFocus from '@assets/images/SCNButtonFocused.svg';

import { Link } from 'react-router-dom';
import { routes } from '@constants';
import { selectActiveLink, setActiveLink } from '@store/activeLinkSlice';
import { useDispatch, useSelector } from 'react-redux';

export const SwitchMode = () => {
  const dispatch = useDispatch();

  const activeLink = useSelector(selectActiveLink);
  const handleLinkClick = (newActiveLink: string) => {
    dispatch(setActiveLink({ newActiveLink }));
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
        to={routes.ASK_AI}
        className={styles.switchModeButton}
        onClick={() => handleLinkClick(routes.ASK_AI)}
      >
        {activeLink === routes.ASK_AI ? <AskAIButtonIconFocus /> : <AskAIButtonIcon />}
      </Link>
    </div>
  );
};
