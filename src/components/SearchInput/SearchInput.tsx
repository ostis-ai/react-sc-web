import { ChangeEventHandler, FC, ReactNode } from 'react';
import { Input } from '@components/input/Input';

import styles from './SearchInput.module.scss';

interface IProps {
  value?: string;
  placeholder?: string;
  iconLeft?: ReactNode;
  inputClassName?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClear: () => void;
}

export const SearchInput: FC<IProps> = ({
  value,
  placeholder,
  iconLeft,
  inputClassName,
  onChange,
}) => (
  <Input
    value={value}
    placeholder={placeholder}
    iconLeft={iconLeft}
    inputClassName={inputClassName && styles.input}
    onChange={onChange}
    isSearch
    //When we will create the abstract IconButton component,
    //we need to add logic to the iconRight,
    //so that the cross will appear if the input is not empty,
  />
);
