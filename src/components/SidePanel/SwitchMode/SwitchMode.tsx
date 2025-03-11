import React, { useState, useEffect } from 'react';
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
  const [activePage, setActivePage] = useState<string | '/'>();
  const location = useLocation();

  const handlePageClick = (page: string) => {
    setActivePage(page);
  };

  useEffect(() => {
    if (location.pathname.substring(0, 2) === '/q' || location.pathname.substring(0, 2) === '/c') {
      setActivePage(routes.MAIN);
    } else {
      setActivePage(location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className={styles.switchModeButtonsWrapper}>
      <Link
        to={routes.MAIN}
        className={styles.switchModeButton}
        onClick={() => handlePageClick(routes.QUESTION)}
      >
        {activePage === routes.MAIN ||
        activePage === routes.QUESTION ||
        activePage === routes.COMMAND ? (
          <ScnPageButtonFocus />
        ) : (
          <ScnPageButton />
        )}
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
