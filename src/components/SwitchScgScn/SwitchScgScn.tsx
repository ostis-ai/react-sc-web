import { Tooltip } from '@components/ToolTip/ToolTip';
import ScgSwitch from './icons/scg.svg';
import ScnSwitch from './icons/scn.svg';
import { Divider, SwitchWrap, Tab, Tabs } from './styled';

export type TScLanguageTab = 'scn' | 'scg';

export interface ISwitchScgScnProps {
  className?: string;
  tab: TScLanguageTab;
  onTabClick: (tab: TScLanguageTab) => void;
}

export const SwitchScgScn = ({ tab, className, onTabClick }: ISwitchScgScnProps) => {
  const onClick = (newTab: TScLanguageTab) => () => {
    onTabClick(newTab);
  };

  return (
    <SwitchWrap className={className}>
      <Tabs>
        <Tooltip systemId="ui_scn_page">
          <Tab isActive={tab === 'scn'} onClick={onClick('scn')}>
            <ScnSwitch />
          </Tab>
        </Tooltip>
        <Divider />
        <Tooltip systemId="ui_scg_page">
          <Tab isActive={tab === 'scg'} onClick={onClick('scg')}>
            <ScgSwitch />
          </Tab>
        </Tooltip>
      </Tabs>
    </SwitchWrap>
  );
};
