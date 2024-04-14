import React, { useState, useEffect } from 'react';
import styles from './SwitchMode.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '@constants';
import AskAiPageButton from '@assets/images/AskAiPageButton.svg';
import AskAiPageButtonFocus from '@assets/images/AskAiPageButtonFocus.svg';
import ScnPageButton from '@assets/images/ScnPageButton.svg';
import ScnPageButtonFocus from '@assets/images/ScnPageButtonFocus.svg';
import LibraryPageButton from '@assets/images/LibraryPageButton.svg';
import LibraryPageButtonFocus from '@assets/images/LibraryPageButtonFocus.svg';

export const SwitchMode = () => {
  const [activePage, setActivePage] = useState<string | '/'>(routes.MAIN);

  const handlePageClick = (page: string) => {
    setActivePage(page);
    localStorage.setItem('activePage', page);
  };

  useEffect(() => {
    const savedActivePage = localStorage.getItem('activePage');
    if (savedActivePage) {
      setActivePage(savedActivePage);
    }
  }, []);

  return (
    <div className={styles.switchModeButtonsWrapper}>
      <Link
        to={routes.MAIN}
        className={styles.switchModeButton}
        onClick={() => handlePageClick(routes.MAIN)}
      >
        {activePage === routes.MAIN ? <ScnPageButtonFocus /> : <ScnPageButton />}
      </Link>
      <Link
        to={routes.ASK_AI}
        className={styles.switchModeButton}
        onClick={() => handlePageClick(routes.ASK_AI)}
      >
        {activePage === routes.ASK_AI ? <AskAiPageButtonFocus /> : <AskAiPageButton />}
      </Link>
      <Link
        to={routes.LIBRARY}
        className={styles.switchModeButton}
        onClick={() => handlePageClick(routes.LIBRARY)}
      >
        {activePage === routes.LIBRARY ? <LibraryPageButtonFocus /> : <LibraryPageButton />}
      </Link>
    </div>
  );
};
