import { FC, ReactNode } from 'react';
import { Language } from '@components/Language';
import { ScgPage } from '@components/ScgPage';
import { SidePanel } from '@components/SidePanel';
import { SidePanelWrapper } from '@components/SidePanelWrapper';
import Logo from '@assets/images/Logo.svg';

import styles from './Layout.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '@constants';

export interface IProps {
  children?: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogoOnClick = () => {
    navigate(routes.MAIN);
  };

  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <Link to={routes.MAIN} onClick={handleLogoOnClick}>
          <Logo />
        </Link>
      </div>
      <header className={styles.header}>
        <div className={styles.languageWrapper}>
          <Language />
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
