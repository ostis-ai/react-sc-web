import { FormEvent } from 'react';

import Cookies from 'js-cookie';

import { useTranslate } from 'ostis-ui-lib';

import styles from './Auth.module.scss';

import AuthPageImage from '@assets/images/authPage.svg';

const Auth = () => {
  const translate = useTranslate();

  const onLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Cookies.set("token", "example")
  };

  return (
    <div className={styles.authPageWrapper}>
      <div className={styles.left}>
        <h5 className={styles.loginTitle}>
          {translate({ ru: "Авторизация", en: "Authorization" })}
        </h5>
        <form className={styles.loginForm} onSubmit={onLoginSubmit}>
          <input
            className={styles.loginFormInput}
            type="text"
            placeholder={translate({ ru: "Логин", en: "Login" })}
          />

          <input
            className={styles.loginFormInput}
            type="password"
            placeholder={translate({ ru: "Пароль", en: "Password" })}
          />

          <div className={styles.forgetPassword}>
            <a href="#forget">{translate({ ru: "Забыли пароль?", en: "Forgot your password?" })}</a>
          </div>

          <br />
          <br />
          
          <button type="submit" className={styles.loginFormSubmit}>
            {translate({ ru: "Войти", en: "Sign in" })}
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
