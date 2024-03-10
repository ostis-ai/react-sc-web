import { useState } from 'react';
import styles from './SwitchMode.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '@constants';
import AskAiPageButton from '@assets/images/AskAiPageButton.svg';
import AskAiPageButtonFocus from '@assets/images/AskAiPageButtonFocus.svg';
import ScnPageButton from '@assets/images/ScnPageButton.svg';
import ScnPageButtonFocus from '@assets/images/ScnPageButtonFocus.svg';
import LibraryPageButton from '@assets/images/LibraryPageButton.svg';
import LibraryPageButtonFocus from '@assets/images/LibraryPageButtonFocus.svg';

export const SwitchMode = () => {
  const location = useLocation();
  const path = location.pathname;

  const [activePage, setActivePage] = useState('');

  const handlePageClick = (page: string) => {
    setActivePage(page);
  };

  return (
    <div className={styles.switchModeButtonsWrapper}>
      <Link
        to={routes.MAIN}
        className={`${styles.switchModeButton} ${activePage === routes.MAIN ? styles.active : ''}`}
        onClick={() => handlePageClick(routes.MAIN)}
      >
        {activePage === routes.MAIN ? <ScnPageButtonFocus /> : <ScnPageButton />}
      </Link>
      <Link
        to={routes.ASK_AI}
        className={`${styles.switchModeButton} ${activePage === routes.ASK_AI ? styles.active : ''}`}
        onClick={() => handlePageClick(routes.ASK_AI)}
      >
        {activePage === routes.ASK_AI ? <AskAiPageButtonFocus /> : <AskAiPageButton />}
      </Link>
      <Link
        to={routes.LIBRARY}
        className={`${styles.switchModeButton} ${activePage === routes.LIBRARY ? styles.active : ''}`}
        onClick={() => handlePageClick(routes.LIBRARY)}
      >
        {activePage === routes.LIBRARY ? <LibraryPageButtonFocus /> : <LibraryPageButton />}
      </Link>
    </div>
  );
};