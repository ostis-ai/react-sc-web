import classNames from 'classnames';
import { DropdownOption } from 'ostis-ui-lib';
import React, {
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Checkbox } from '@components/input/Checkbox';

import styles from './option.module.scss';
import { Highlight } from '../Highlight';
import type { TRenderChip } from '../types';
import {
  OptionProvider,
  useConstantSearchSelectContext,
  useDropDownSearchSelectContext,
  useOptionGroupContext,
} from '../useSearchSelectContext';
import { getTextHighlightMeta } from '../utils';

interface IRenderOptionProps {
  disabled?: boolean;
  searchValue?: string;
  isHovered?: boolean;
}

interface IProps extends InputHTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  value: string;
  children?: ReactNode;
  renderOption?: (props: IRenderOptionProps) => ReactNode;
  renderChip?: TRenderChip;
}

const DropDownOption = ({
  disabled = false,
  value,
  children,
  renderOption,
  renderChip: _renderChip,
  ...htmlProps
}: IProps) => {
  const {
    defaultHighlighted,
    showCheckbox,
    selectValue,
    multiple,
    searchValue,
    hoverValue,
    onOptionClick,
    setHoverValue,
    onDropDownOptionMount,
    onDropDownOptionUnMount,
  } = useDropDownSearchSelectContext();
  const optionGroupContext = useOptionGroupContext();

  const defaultOnMouseDown = htmlProps.onMouseDown;

  const optionIsDisabled = optionGroupContext?.disabled || disabled;

  const childrenOrHighlightedChildren = useMemo(
    () =>
      typeof children === 'string' && defaultHighlighted ? (
        <Highlight>{children}</Highlight>
      ) : (
        children
      ),
    [defaultHighlighted, children],
  );

  const defaultMultipleOption = useMemo(
    () => (
      <>
        {showCheckbox && (
          <Checkbox
            className={styles.checkbox}
            checked={selectValue?.includes(value)}
            disabled={disabled}
            readOnly
          />
        )}
        {childrenOrHighlightedChildren}
      </>
    ),
    [showCheckbox, selectValue, value, disabled, childrenOrHighlightedChildren],
  );

  const ref = useRef<HTMLDivElement>(null);

  const renderDefaultOption = useCallback(
    () => (multiple ? defaultMultipleOption : childrenOrHighlightedChildren),
    [multiple, defaultMultipleOption, childrenOrHighlightedChildren],
  );

  const onClick = useCallback(() => onOptionClick?.(value), [onOptionClick, value]);
  const onMouseOnOption = useCallback(() => setHoverValue?.(value), [setHoverValue, value]);
  const onMouseLeave = useCallback(() => setHoverValue?.(''), [setHoverValue]);
  const onMouseDown = useCallback(
    (evt: React.MouseEvent<HTMLDivElement>) => {
      onClick();
      defaultOnMouseDown?.(evt);
    },
    [onClick, defaultOnMouseDown],
  );

  const option = useMemo(
    () => ({
      value,
      disabled: optionIsDisabled,
      ref,
    }),
    [value, optionIsDisabled],
  );

  const resultChildren = useMemo(
    () =>
      renderOption
        ? renderOption({
            disabled,
            searchValue,
            isHovered: hoverValue === value,
          })
        : renderDefaultOption(),
    [renderOption, renderDefaultOption, disabled, value, searchValue, hoverValue],
  );

  useEffect(() => {
    onDropDownOptionMount?.(option);
    return () => onDropDownOptionUnMount?.(option);
  }, [onDropDownOptionMount, onDropDownOptionUnMount, option]);

  return (
    <DropdownOption
      {...htmlProps}
      className={classNames(htmlProps.className, {
        [styles.option_disabled]: optionIsDisabled,
        [styles.option_selected]: selectValue === value,
        [styles.option_active]: hoverValue === value,
      })}
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseOnOption}
      onMouseMove={onMouseOnOption}
      onMouseLeave={onMouseLeave}
    >
      {resultChildren}
    </DropdownOption>
  );
};

const ConstantOption = ({
  disabled = false,
  value,
  children,
  renderOption,
  renderChip,
}: IProps) => {
  const { searchValue, onConstantOptionMount, onConstantOptionUnMount } =
    useConstantSearchSelectContext();
  const optionGroupContext = useOptionGroupContext();

  const optionIsDisabled = optionGroupContext?.disabled || disabled;

  const defaultRenderChip = useCallback(() => <>{children}</>, [children]);

  const resultRenderChip = renderChip || defaultRenderChip;

  const resultChildren = useMemo(
    () =>
      renderOption
        ? renderOption({
            disabled,
            searchValue,
          })
        : children,
    [renderOption, disabled, children, searchValue],
  );

  const option = useMemo(
    () => ({
      value,
      disabled: optionIsDisabled,
      children: resultChildren,
      renderChip: resultRenderChip,
    }),
    [value, optionIsDisabled, resultChildren, resultRenderChip],
  );

  useEffect(() => {
    onConstantOptionMount?.(option);
    return () => onConstantOptionUnMount?.(option);
  }, [onConstantOptionMount, onConstantOptionUnMount, option]);

  return null;
};

const ConstantOptionWrapper = (props: IProps) => {
  return <ConstantOption {...props} />;
};

const DropDownOptionWrapper = (props: IProps) => {
  const [textsToHighlight, setTextsToHighlight] = useState<string[] | null>(null);
  const dropDownSelectContext = useDropDownSearchSelectContext();

  const highlighted = textsToHighlight?.some(
    (text) =>
      getTextHighlightMeta(
        text,
        dropDownSelectContext?.searchValue,
        dropDownSelectContext?.highlightFormat,
      ).shouldHighlight,
  );

  const onAddTextToHighlight = useCallback(
    (text: string) => setTextsToHighlight((prev) => Array.from(new Set([...(prev || []), text]))),
    [],
  );

  const shouldRender = textsToHighlight === null || highlighted;

  return (
    <OptionProvider onAddTextToHighlight={onAddTextToHighlight}>
      {dropDownSelectContext && shouldRender && <DropDownOption {...props} />}
    </OptionProvider>
  );
};

export const Option = (props: IProps) => (
  <>
    <ConstantOptionWrapper {...props} />
    <DropDownOptionWrapper {...props} />
  </>
);
