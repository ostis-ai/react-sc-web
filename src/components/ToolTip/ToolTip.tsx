import { Tooltip as BaseTooltip } from 'ostis-ui-lib';
import { ReactNode, useEffect, useState, useRef } from 'react';
import { ScLangText } from 'ostis-ui-lib';
import { useSelector } from 'react-redux';
import { selectDevMode } from '@store/devModeSlice';
import styles from './Tooltip.module.scss';
import { ScTag } from 'ostis-ui-lib';
import { searchAddrById } from '@api/sc/search/search';
import { ScAddr, ScTemplate, ScType } from 'ts-sc-client';
import { client, scUtils } from '@api/sc';

interface IProps {
  children: ReactNode;
  commandAddr?: number;
  systemId?: string;
}

export const Tooltip = ({ commandAddr, systemId, children }: IProps) => {
  const devMode = useSelector(selectDevMode);
  const [scAddr, setScAddr] = useState<undefined | number>(undefined);

  useEffect(() => {
    const fetchAddr = async () => {
      if (systemId !== undefined) {
        const addr = await searchAddrById(systemId);
        if (devMode && addr) {
          const description = await findComponentDescription(addr);
          setScAddr(description?.value || undefined);
        } else {
          setScAddr(addr?.value || undefined);
        }
      }
    };

    fetchAddr();
  }, [systemId, devMode]);

  const findComponentDescription = async (componentAddr: ScAddr): Promise<ScAddr | undefined> => {
    const template = new ScTemplate();
    const { nrelDescriptionForDeveloperMode } = await scUtils.findKeynodes(
      'nrel_description_for_developer_mode',
    );
    const descriptionAlias = '_description';
    template.tripleWithRelation(
      componentAddr,
      ScType.EdgeDCommonVar,
      [ScType.NodeVar, descriptionAlias],
      ScType.EdgeAccessVarPosPerm,
      nrelDescriptionForDeveloperMode,
    );
    const result = await client.templateSearch(template);
    const descriptionScAddr = result.length ? result[0].get(descriptionAlias) : undefined;

    if (!descriptionScAddr) return undefined;
    return descriptionScAddr;
  };

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
