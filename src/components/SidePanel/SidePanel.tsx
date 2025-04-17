import classNames from 'classnames';
import { DecompositionPanel, useDecompositionContext, useTranslate } from 'ostis-ui-lib';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getHistory } from '@api/requests/userHistory';
import Clock from '@assets/images/Clock.svg';
import Plus from '@assets/images/plus.svg';
import Sections from '@assets/images/Sections.svg';
import { Accordion } from '@components/Accordion';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { HistoryPanel } from '@components/HistoryPanel';
import { SearchField } from '@components/SearchField';
import { routes } from '@constants';
import { useSelector } from '@hooks';
import { selectUser } from '@store/commonSlice';
import { selectRequests, setRequests } from '@store/requestHistorySlice';
import { AboutSidePanel } from './AboutMenu/AboutSidePanel';
import styles from './SidePanel.module.scss';
import { SwitchMode } from './SwitchMode';

interface IProps {
  className?: string;
}

export const SidePanel: FC<IProps> = ({ className }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(selectUser);

  const { onAddClick } = useDecompositionContext();

  const translate = useTranslate();

  const [isLoading, setIsLoading] = useState(false);

  const requests = useSelector(selectRequests);

  const isAboutPage = location.pathname === routes.ABOUT;

  useEffect(() => {
    if (!user || isAboutPage) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    (async () => {
      const history = await getHistory(user.sc_addr);
      if (!history) {
        setIsLoading(false);
        return;
      }
      dispatch(setRequests(history));
      setIsLoading(false);
    })();
  }, [dispatch, user, isAboutPage]);

  // Helper function to render Accordions specific to the Main page
  const renderMainAccordions = () => (
    <>
      <div className={styles.searchFieldWrap}>
        <SearchField className={styles.searchField} />
      </div>
      <div>
        <Accordion
          header={translate({ ru: 'Разделы', en: 'Sections' })}
          leftIcon={<Sections />}
          rightIcon={!!user?.is_admin || !!user?.can_edit ? <Plus /> : null}
          onRightClick={onAddClick}
          expanded
        >
          <ErrorBoundary
            title={translate({
              ru: 'Ошибка получения декомпозиции',
              en: 'Error requesting a decomposition',
            })}
            paragraph={translate({ ru: 'Ошибка', en: 'Error' })}
            className={styles.errorBoundary}
          >
            {<DecompositionPanel />}
          </ErrorBoundary>
        </Accordion>
      </div>
      <div className={styles.decompositionAndHistoryPanels}>
        <Accordion header={translate({ ru: 'История', en: 'History' })} leftIcon={<Clock />}>
          <ErrorBoundary
            title={translate({
              ru: 'Ошибка получения истории',
              en: 'Error requesting a history',
            })}
            paragraph={translate({ ru: 'Ошибка', en: 'Error' })}
            className={styles.errorBoundary}
          >
            <HistoryPanel requests={requests} isLoading={isLoading} />
          </ErrorBoundary>
        </Accordion>
      </div>
    </>
  );

  // Helper function to render Accordions specific to the About page
  const renderAboutAccordions = () => (
    <>
      <div>{<AboutSidePanel />}</div>
    </>
  );

  return (
    <div className={className}>
      <div className={styles.sideBarContent}>
        <div
          className={classNames(styles.accordionContent, {
            [styles.accordionContent_userCanEdit]: !isAboutPage && !!user?.can_edit,
            [styles.accordionContent_admin]: !isAboutPage && !!user?.is_admin,
          })}
        >
          <SwitchMode />
          {isAboutPage ? renderAboutAccordions() : renderMainAccordions()}
        </div>
      </div>
    </div>
  );
};
