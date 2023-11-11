import { TScLanguageTab } from 'ostis-ui-lib';
import { generatePath, Outlet, useLocation, useMatch, useNavigate } from 'react-router';
import { routes } from '@constants';
import { useDispatch } from '@hooks/redux';
import { setFormat } from '@store/commonSlice';

import styles from './AskMain.module.scss';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Main;
