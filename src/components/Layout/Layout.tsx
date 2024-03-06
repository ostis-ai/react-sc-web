import { FC, ReactNode } from 'react';
import { ScgPage } from '@components/ScgPage';
import { SidePanel } from '@components/SidePanel';
import { SidePanelWrapper } from '@components/SidePanelWrapper';

import styles from './Layout.module.scss';
import { Language } from '@components/Language';
import { DevModeSwitch } from '@components/DevModeSwitch';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/Logo.svg';
import { routes } from '@constants';
import { setActiveLink } from '@store/activeLinkSlice';
import { useDispatch } from 'react-redux';

export interface IProps {
  children?: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();

  const handleLogoOnClick = () => {
    dispatch(setActiveLink({ newActiveLink: routes.MAIN }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <Link to={routes.MAIN} onClick={handleLogoOnClick}>
          <Logo />
        </Link>
      </div>
      <header className={styles.header}>
        <div className={styles.headerButtonWrapper}>
          <div>
            <DevModeSwitch />
          </div>
          <div className={styles.languageWrapper}>
            <Language />
          </div>
          <div>
            <button className={styles.logInButton}>Войти</button>
          </div>
        </div>
      </header>
      <SidePanelWrapper>
        <SidePanel className={styles.sideBar} />
      </SidePanelWrapper>
      <main className={styles.main}>
        <ScgPage />
        {children}
      </main>
    </div>
  );
};
