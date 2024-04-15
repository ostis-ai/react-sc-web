import { FC, ReactNode } from 'react';
import { ScgPage } from '@components/ScgPage';
import { SidePanel } from '@components/SidePanel';
import { SidePanelWrapper } from '@components/SidePanelWrapper';

import styles from './Layout.module.scss';
import { Language } from '@components/Language';
import { DevModeSwitch } from '@components/DevModeSwitch';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@assets/images/Logo.svg';
import { routes } from '@constants';
import { setActiveLink } from '@store/activeLinkSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslate } from 'ostis-ui-lib';
import { Tooltip } from '@components/ToolTip/ToolTip';
import { selectAuth } from '@store/authSlice';
import UserIcon from "@assets/images/UserIcon.svg"

export interface IProps {
  children?: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();
  const translate = useTranslate();
  const navigate = useNavigate();

  const username = useSelector(selectAuth);

  const handleLogoOnClick = () => {
    dispatch(setActiveLink({ newActiveLink: routes.MAIN }));
  };

  const handleLogInButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    return navigate(routes.AUTH);
  };

  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <Link to={routes.MAIN} onClick={handleLogoOnClick}>
          <Tooltip systemId="ui_logo">
            <Logo />
          </Tooltip>
        </Link>
      </div>
      <header className={styles.header}>
        <div className={styles.headerButtonWrapper}>
          <div>
            <Tooltip systemId="ui_dev_mode">
              <DevModeSwitch />
            </Tooltip>
          </div>
          <div className={styles.languageWrapper}>
            <Language />
          </div>
          <div>
            {username != '' ? (
              <div className={styles.profileWrapper}>
                <UserIcon />
                <div className={styles.profileUsername}>{username}</div>
              </div>
            ) : (
              <Tooltip systemId="ui_login">
                <button className={styles.logInButton} onClick={handleLogInButtonClick}>
                  {translate({ ru: 'Войти', en: 'Login' })}
                </button>
              </Tooltip>
            )}
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
