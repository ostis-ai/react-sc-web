import { FormEvent } from 'react';

import Cookies from 'js-cookie';

import { useTranslate } from 'ostis-ui-lib';
import { Input } from 'ostis-ui-lib';

import styles from './Auth.module.scss';

import AuthPageImage from '@assets/images/authPage.svg';
import { authenticateUser } from '@api/requests/authenticate';
import { InputField } from '@components/fields/InputField';

const Auth = () => {
  const translate = useTranslate();

  const onLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //resp = authenticateUser()

    Cookies.set('token', 'example');
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
            type="text"
            placeholder={translate({ ru: 'Логин', en: 'Login' })}
          />

          <br />

          <input
            className={styles.loginFormInput}
            type="password"
            placeholder={translate({ ru: 'Пароль', en: 'Password' })}
          />

          <div className={styles.forgetPassword}>
            <a href="#forget">{translate({ ru: 'Забыли пароль?', en: 'Forgot your password?' })}</a>
          </div>

          <br />
          <br />

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
