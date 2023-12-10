import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import styles from './AskInput.module.scss';

import AskAIInputButton from '@assets/images/AskAIInputButton.svg';

interface IProps {
  onChange: (value: string) => void;
  onSubmit: () => void;
  className?: string;
}

export const AskInput: FC<IProps> = ({ onChange, onSubmit, className }) => {
  const [query, setQuery] = useState<string>('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange(e.target.value);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className={`${className} ${styles.dialogBox}`}>
      <input
        className={styles.dialogBoxInput}
        placeholder={'🪄 Ask IMS'}
        value={query}
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
      />
      <button className={styles.dialogBoxButton} onClick={onSubmit}>
        <AskAIInputButton />
      </button>
    </div>
  );
};
