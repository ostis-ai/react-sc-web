import classNames from 'classnames';
import { DecompositionPanel, Scn, useDecompositionContext, useTranslate } from 'ostis-ui-lib';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHistory } from '@api/requests/userHistory';
import Clock from '@assets/images/Clock.svg';
import Plus from '@assets/images/plus.svg';
import Sections from '@assets/images/Sections.svg';
import { Accordion } from '@components/Accordion';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { HistoryPanel } from '@components/HistoryPanel';
import { SearchField } from '@components/SearchField';
import { useSelector } from '@hooks';
import { selectUser } from '@store/commonSlice';
import { selectRequests, setRequests } from '@store/requestHistorySlice';
import styles from './SidePanel.module.scss';
import { selectAuth } from '@store/authSlice';
import { Tooltip } from '@components/ToolTip/ToolTip';
import { SwitchMode } from './SwitchMode';

interface IProps {
  className?: string;
}

export const SidePanel: FC<IProps> = ({ className }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const username = useSelector(selectAuth);
  const isAuthorised = username != '';

  const { onAddClick } = useDecompositionContext();

  const translate = useTranslate();

  const [isLoading, setIsLoading] = useState(false);

  const requests = useSelector(selectRequests);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    (async () => {
      const history = await getHistory(user.sc_addr);

      if (!history) return;
      dispatch(setRequests(history));
      setIsLoading(false);
    })();
  }, [dispatch, user]);

  return (
    <div className={className}>
      <div className={styles.sideBarContent}>
        <div className={styles.searchFieldWrap}>
          <Tooltip systemId="ui_search">
            <SearchField className={styles.searchField} />
          </Tooltip>
        </div>
        <div
          className={classNames(styles.accordionContent, {
            [styles.accordionContent_userCanEdit]: isAuthorised,
            [styles.accordionContent_admin]: isAuthorised,
          })}
        >
          <SwitchMode />

          <div>
            <Accordion
              header={translate({ ru: 'Разделы', en: 'Sections' })}
              leftIcon={<Sections />}
              rightIcon={isAuthorised ? <Plus /> : null}
              onRightClick={onAddClick}
              expanded
              systemId="ui_section"
            >
              <ErrorBoundary
                title={translate({
                  ru: 'Ошибка получения декомпозиции',
                  en: 'Error requesting a decomposition',
                })}
                paragraph={translate({ ru: 'Ошибка', en: 'Error' })}
                className={styles.errorBoundary}
              >
                {<DecompositionPanel editable={isAuthorised} deleteable={isAuthorised} />}
              </ErrorBoundary>
            </Accordion>
          </div>
          <div className={styles.decompositionAndHistoryPanels}>
            <Accordion
              header={translate({ ru: 'История', en: 'History' })}
              leftIcon={<Clock />}
              systemId="ui_history"
            >
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
        </div>
      </div>
    </div>
  );
};
