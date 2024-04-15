import { Expandable, useBooleanState } from 'ostis-ui-lib';
import { FC, ReactNode } from 'react';
import ChevronDown from '@assets/images/chevronDown.svg';
import { IconButton } from '@components/IconButton';
import { Tooltip } from '@components/ToolTip/ToolTip';

import { ChevronDownWrapper, ContentWrapper, HeaderWrapper, Icon, LeftContent } from './styled';

interface IProps {
  header: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  expanded?: boolean;
  isAutoControl?: boolean;
  systemId: string;
  onRightClick?: () => void;
  onToggle?: (expanded: boolean) => void;
}

export const Accordion: FC<IProps> = ({
  header,
  leftIcon,
  rightIcon,
  children,
  className,
  onToggle,
  expanded: outerExpanded = true,
  isAutoControl = true,
  onRightClick,
  systemId,
}) => {
  const [expanded, , , onToggleExpanded] = useBooleanState(outerExpanded, {
    updateable: true,
  });

  const onHeaderClick = () => {
    if (isAutoControl) {
      onToggle?.(expanded);
      onToggleExpanded();
      return;
    }
    onToggle?.(expanded);
  };

  const onIconBtnClick = () => {
    if (!expanded) onHeaderClick();

    onRightClick?.();
  };

  return (
    <div className={className}>
      <HeaderWrapper>
        <Tooltip systemId={systemId}>
          <LeftContent onClick={onHeaderClick}>
            {leftIcon && <Icon>{leftIcon}</Icon>}
            {header}
            <ChevronDownWrapper expanded={expanded}>
              <ChevronDown width="24" height="24" />
            </ChevronDownWrapper>
          </LeftContent>
        </Tooltip>
        {rightIcon && (
          <IconButton squared={true} onClick={onIconBtnClick}>
            {rightIcon}
          </IconButton>
        )}
      </HeaderWrapper>
      <Expandable expanded={expanded}>
        <ContentWrapper expanded={expanded}>{children}</ContentWrapper>
      </Expandable>
    </div>
  );
};
