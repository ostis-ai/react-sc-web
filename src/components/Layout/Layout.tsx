import { FC, ReactNode } from 'react';
import { ScgPage } from '@components/ScgPage';
import { SidePanel } from '@components/SidePanel';
import { SidePanelWrapper } from '@components/SidePanelWrapper';

import styles from './Layout.module.scss';
import { Language } from '@components/Language';

export interface IProps {
  children?: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <SidePanelWrapper>
        <SidePanel className={styles.sideBar} />
      </SidePanelWrapper>
      <header className={styles.header}>
          <Language />
      </header>
      <main className={styles.main}>
        <ScgPage />
        {children}
      </main>
    </div>
  );
};
