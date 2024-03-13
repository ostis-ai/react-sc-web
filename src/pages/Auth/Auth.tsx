import { FormEvent, useRef } from 'react';

import Cookies from 'js-cookie';

import { useTranslate } from 'ostis-ui-lib';

import { authenticateUser } from '@api/requests/authenticate';

import styles from './Auth.module.scss';

import AuthPageImage from '@assets/images/authPage.svg';

const Auth = () => {
  const translate = useTranslate();

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    if (login && password) {
      const resp = await authenticateUser({
        login,
        password,
      });
      if (resp) {
        Cookies.set('is_authorized', 'true');
      }
    }
  };

  // TODO: use Input from ostis-ui-lib

  return (
    <div className={styles.authPageWrapper}>
      <div className={styles.left}>
        <h5 className={styles.loginTitle}>
          {translate({ ru: 'Авторизация', en: 'Authorization' })}
        </h5>
        <form className={styles.loginForm} onSubmit={onLoginSubmit}>
          <input
            className={styles.loginFormInput}
            ref={loginRef}
            type="text"
            placeholder={translate({ ru: 'Логин', en: 'Login' })}
          />

          <input
            className={styles.loginFormInput}
            ref={passwordRef}
            type="password"
            placeholder={translate({ ru: 'Пароль', en: 'Password' })}
          />

          <div className={styles.forgetPassword}>
            <a href="#forget">{translate({ ru: 'Забыли пароль?', en: 'Forgot your password?' })}</a>
          </div>

          <button type="submit" className={styles.loginFormSubmit}>
            {translate({ ru: 'Войти', en: 'Sign in' })}
          </button>
        </form>
      </div>
      <div className={styles.right}>
        <AuthPageImage />
      </div>
    </div>
  );
};

export default Auth;
