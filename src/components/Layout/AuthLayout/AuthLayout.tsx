import { FC, ReactNode } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '@assets/images/Logo.svg';

import { Language } from '@components/Language';
import { routes } from '@constants';
import { setActiveLink } from '@store/activeLinkSlice';

import AuthPageImage from '@assets/images/authPage.png';

import styles from './AuthLayout.module.scss';

export interface IProps {
  children?: ReactNode;
}
export const AuthLayout: FC<IProps> = ({ children }) => {
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
      <div className={styles.header}>
        <div className={styles.languageWrapper}>
          <Language primaryLanguageColor={'#c0c0c0'} secondaryLanguageColor={'#323232'} />
        </div>
      </div>
      <main className={styles.main}>{children}</main>
      <div className={styles.authPageImage}>
        <img src={AuthPageImage} className={styles.innerAuthPageImage} />
      </div>
    </div>
  );
};
