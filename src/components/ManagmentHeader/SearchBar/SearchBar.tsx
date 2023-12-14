import { ChangeEventHandler, FC, ReactNode } from 'react';
import { SearchInput } from '@components/SearchInput';

export interface IProps {
  iconLeft?: ReactNode;
  inputClassName?: string;
  inputPlaceholder: string;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar: FC<IProps> = ({
  iconLeft,
  inputClassName,
  inputPlaceholder,
  onInputChange,
}) => {
  return (
    <SearchInput
      iconLeft={iconLeft}
      inputClassName={inputClassName}
      onChange={onInputChange}
      placeholder={inputPlaceholder}
      onClear={() => {}}
    />
  );
};
