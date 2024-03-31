import { ScLangText } from 'ostis-ui-lib';
import { ScTagLink } from 'ostis-ui-lib';
import { PseudoText } from 'ostis-ui-lib';
import { useState } from 'react';
import { Tooltip } from '@components/ToolTip/ToolTip';

export interface IScTagLinkProps {
  className?: string;
  addr?: number;
  systemId?: string;
  loaderHeight?: number | string;
  loaderWidth?: number | string;
}

export const ScnLink = ({
  addr,
  systemId,
  loaderHeight,
  loaderWidth,
  className,
}: IScTagLinkProps) => {
  const [isLoad, setIsLoad] = useState(true);

  return (
    <>
      {isLoad && <PseudoText height={loaderHeight} width={loaderWidth} />}
      <ScTagLink className={className} addr={addr} systemId={systemId} as="span">
        <Tooltip commandAddr={addr}>
          <ScLangText
            addrOrSystemId={addr || (systemId as string)}
            loaderHeight={loaderHeight}
            loaderWidth={loaderWidth}
            setIsLoad={setIsLoad}
          />
        </Tooltip>
      </ScTagLink>
    </>
  );
};
