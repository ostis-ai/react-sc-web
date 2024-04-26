import { ChangeEvent, FC, KeyboardEvent, useRef } from 'react';
import { useClickOutside } from 'ostis-ui-lib';

import { NavigationList } from './components/NavigationList';
import { Skeleton } from './components/Skeleton';
import { TextAreaItem } from './components/TextAreaItem';
import { Nav } from './styled';
import { ITransformedDecomposition } from './types';
import { useDecompositionContext } from 'ostis-ui-lib';

const emptyArray: ITransformedDecomposition[] = [];

interface IProps {
  className?: string;
  editable?: boolean;
  deleteable?: boolean;
}

export const DecompositionPanel: FC<IProps> = ({
  className,
  editable = false,
  deleteable = false,
}) => {
  const {
    isMenuListLoading,
    menuList,
    isAddInputShow,
    setIsAddInputShow,
    addInputValue,
    setAddInputValue,
    onAdd,
    onDelete,
  } = useDecompositionContext();

  const wrapperAddInputRef = useRef<HTMLDivElement>(null);

  const onChangeAddInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddInputValue(e.target.value);
  };

  const onTextAreaAddKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      saveAddItemValue();
    }

    if (e.key === 'Escape') {
      setIsAddInputShow(false);
      setAddInputValue('');
    }
  };

  const saveAddItemValue = () => {
    if (!menuList) return;

    if (addInputValue.trim()) onAdd(menuList.id, addInputValue, Math.random());

    setIsAddInputShow(false);
    setAddInputValue('');
    onDelete(1);
  };

  useClickOutside(wrapperAddInputRef, saveAddItemValue);

  return (
    <div className={className}>
      <Nav>
        {!isMenuListLoading && (
          <NavigationList
            data={menuList?.children || emptyArray}
            editable={editable}
            deleteable={deleteable}
          >
            <>
              {isAddInputShow && (
                <TextAreaItem
                  value={addInputValue}
                  onChange={onChangeAddInput}
                  onKeyDown={onTextAreaAddKeyDown}
                  wrapperTextareaRef={wrapperAddInputRef}
                />
              )}
            </>
          </NavigationList>
        )}
        {isMenuListLoading && <Skeleton />}
      </Nav>
    </div>
  );
};
