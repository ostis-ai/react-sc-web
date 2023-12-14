import cn from 'classnames';

import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './AskInput.module.scss';

import AskAIInputButton from '@assets/images/AskAIInputButton.svg';
import { refSetter, useTranslate } from 'ostis-ui-lib';

interface IProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur'> {
  className?: string;
  onEmptySubmit?: () => void;
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
}

export const AskInput = forwardRef<HTMLInputElement, IProps>(
  (
    { className, onChange, onSubmit, onFocus: onFocusFromProps, onBlur: onBlurFromProps, ...props },
    ref,
  ) => {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const translate = useTranslate();

    const innerRef = useRef<HTMLInputElement>(null);

    const onWrapperClick = () => {
      innerRef?.current?.focus();
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      onChange(e);
    };

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
      const code = e.code;

      switch (code) {
        case 'Enter': {
          onSubmit();
          break;
        }
      }
    };

    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const code = e.code;
      const preventKeys = ['Enter'];
      if (preventKeys.includes(code)) {
        e.preventDefault();
      }
    };

    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocusFromProps?.(e);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);

      if (e.currentTarget.contains(e.relatedTarget)) {
        onBlurFromProps?.(e);
      }
    };

    useEffect(() => {
      innerRef.current?.setSelectionRange(
        innerRef.current?.value.length,
        innerRef.current?.value.length,
      );
    });

    const emptyMessage = translate({
      ru: '🪄 Спросите IMS',
      en: '🪄 Ask IMS',
    });

    return (
      <div
        className={cn(className, styles.inputWrapper)}
        onKeyUp={handleKeyUp}
        onClick={onWrapperClick}
        onMouseDown={(e) => e.preventDefault()}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <input
          className={styles.dialogInput}
          placeholder={emptyMessage}
          ref={refSetter<HTMLInputElement>(ref, innerRef)}
          value={searchValue}
          onKeyDown={onInputKeyDown}
          onChange={onInputChange}
        />
        <button className={styles.dialogBoxButton} onClick={onSubmit}>
          <AskAIInputButton />
        </button>
      </div>
    );
  },
);
