import { SwitchViewMode, TScLanguageTab } from 'ostis-ui-lib';
import { generatePath, Outlet, useLocation, useMatch, useNavigate } from 'react-router';
import styled from 'styled-components';
import { routes } from '@constants';
import { useDispatch } from '@hooks/redux';
import { setFormat } from '@store/commonSlice';

import styles from './Main.module.scss';

const StyledSwitchViewMode = styled(SwitchViewMode)`
  position: absolute;

  right: 24px;
  top: 0;

  z-index: 5;
`;

const Main = () => {
  const commandMatch = useMatch(routes.COMMAND);
  const questionMatch = useMatch(routes.QUESTION);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  let activeTab: TScLanguageTab;
  if (location.pathname.includes('scg')) {
    activeTab = 'scg';
  } else if (location.pathname.includes('scn')) {
    activeTab = 'scn';
  } else {
    activeTab = 'native';
  }

  const onChange = (newActiveTab: TScLanguageTab) => {
    dispatch(setFormat(newActiveTab));

    if (commandMatch) {
      const { commandAddr, addr } = commandMatch.params;
      if (!commandAddr || !addr) {
        return;
      }
      return navigate(generatePath(routes.COMMAND, { commandAddr, addr, format: newActiveTab }));
    }

    if (!questionMatch) {
      return;
    }

    const { question } = questionMatch.params;

    if (!question) {
      return;
    }
    navigate(generatePath(routes.QUESTION, { question, format: newActiveTab }));
  };

  return (
    <div className={styles.wrapper}>
      <StyledSwitchViewMode tab={activeTab} onTabClick={onChange} />
      <Outlet />
    </div>
  );
};

export default Main;
