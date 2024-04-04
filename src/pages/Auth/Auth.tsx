import { FormEvent, useRef } from 'react';

import { useTranslate } from 'ostis-ui-lib';

import { authenticateUser } from '@api/requests/authenticate';

import styles from './Auth.module.scss';

import { useDispatch } from '@hooks/redux';
import { setIsAuthorised } from '@store/authSlice';
import { useNavigate } from 'react-router-dom';
import { routes } from '@constants';
import { useErrorToast } from '@hooks/useErrorToast';
import { Input } from '@components/input/Input';
import { Button } from '@components/Button';

const Auth = () => {
  const translate = useTranslate();

  const addError = useErrorToast();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    if (login && password) {
      authenticateUser({ login, password })
        .then((_resp) => {
          dispatch(setIsAuthorised({ isAuthorised: true }));
          navigate(routes.MAIN);
        })
        .catch((error) => {
          console.error(error);
          addError(
            translate({
              ru: `Не удалось войти в метасистему`,
              en: `It's failed to login in metasystem`,
            }),
          );
        });
    }
  };

  return (
    <div className={styles.authPageWrapper}>
      <div className={styles.left}>
        <h5 className={styles.loginTitle}>
          {translate({ ru: 'Авторизация', en: 'Authorization' })}
        </h5>
        <form className={styles.loginForm} onSubmit={onLoginSubmit}>
          <Input
            className={styles.loginFormInput}
            ref={loginRef}
            type="text"
            placeholder={translate({ ru: 'Логин', en: 'Login' })}
          />
          <Input
            className={styles.loginFormInput}
            ref={passwordRef}
            type="password"
            placeholder={translate({ ru: 'Пароль', en: 'Password' })}
          />
          <div className={styles.forgetPassword}>
            <div></div>
            <a href="#forget">{translate({ ru: 'Забыли пароль?', en: 'Forgot your password?' })}</a>
          </div>
          <Button className={styles.loginFormSubmit}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
