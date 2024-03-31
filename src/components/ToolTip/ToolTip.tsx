import { Tooltip as BaseTooltip } from 'ostis-ui-lib';
import { ReactNode, useEffect, useState, useRef } from 'react';
import { ScLangText } from 'ostis-ui-lib';
import { useSelector } from 'react-redux';
import { selectDevMode } from '@store/devModeSlice';
import styles from './Tooltip.module.scss';
import { ScTag } from 'ostis-ui-lib';
import { searchAddrById } from '@api/sc/search/search';

interface IProps {
  children: ReactNode;
  commandAddr?: number;
  systemId?: string;
}

export const Tooltip = ({ commandAddr, systemId, children }: IProps) => {
  const devMode = useSelector(selectDevMode);
  const [scAddr, setScAddr] = useState<undefined | number>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      if (systemId !== undefined) {
        const addr = await searchAddrById(systemId);
        setScAddr(addr?.value || undefined);
      }
    };

    fetchData();
  }, [systemId]);

  // если не надо рендерить компоненты без адреса if (systemId !== undefined && scAddr !== null)
  if (systemId !== undefined) {
    const title = <ScLangText addrOrSystemId={Number(scAddr)} />;
    return (
      <BaseTooltip title={title} className={styles.tooltip}>
        <ScTag addr={scAddr}>{children}</ScTag>
      </BaseTooltip>
    );
  } else if (commandAddr !== undefined) {
    const title = <ScLangText addrOrSystemId={Number(commandAddr)} />;
    return (
      <BaseTooltip title={title} className={styles.tooltip}>
        {children}
      </BaseTooltip>
    );
  }
};
