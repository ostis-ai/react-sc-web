import { Tooltip as BaseTooltip } from 'ostis-ui-lib';
import { ReactNode, useEffect, useState } from 'react';
import { ScLangText } from 'ostis-ui-lib';
import { useSelector } from 'react-redux';
import { selectDevMode } from '@store/devModeSlice';

interface IProps {
  children: ReactNode;
  commandAddr: String;
}

export const Tooltip = ({ children, commandAddr }: IProps) => {
  const devMode = useSelector(selectDevMode);
  const title = <ScLangText addrOrSystemId={String(commandAddr)} />;

  return <BaseTooltip title={title} children={children} />;
};
