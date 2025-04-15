import { ScLangText, TTexts, useTranslate } from 'ostis-ui-lib';
import { useDispatch } from 'react-redux';
import ChevronDown from '@assets/images/chevronDown.svg';
import { setAboutText } from '@store/aboutSlice';
import { IMenuItem } from './Menu';
import {
  ItemContentWrapper,
  StyledScTag,
  ChildrenWrapper,
  ChevronDownWrapper,
  Button,
} from '../styled';

interface INavigationItemProps {
  menu: IMenuItem[];
  onToggleExpand: (path: number[]) => void;
}

export const NavigationList = ({ menu, onToggleExpand }: INavigationItemProps) => {
  const dispatch = useDispatch();
  const translate = useTranslate();

  const renderItemText = (title: string, text: string) => (
    <StyledScTag $appearance="transparent" onClick={() => dispatch(setAboutText(text))}>
      {title}
    </StyledScTag>
  );

  return (
    <ul>
      {menu &&
        menu.map((menuItem) => (
          <li key={menuItem.path.join('-')}>
            <ItemContentWrapper $isOptionsOpen={false} $isLoading={false}>
              {menuItem.children && (
                <Button onClick={() => onToggleExpand(menuItem.path)}>
                  <ChevronDownWrapper expanded={menuItem.expanded}>
                    <ChevronDown width="24" height="24" />
                  </ChevronDownWrapper>
                </Button>
              )}
              {!menuItem.children && <div style={{ width: '36px', flexShrink: 0 }}></div>}

              {renderItemText(translate(menuItem.title), translate(menuItem.text))}
            </ItemContentWrapper>
            {menuItem.expanded && !!menuItem.children && (
              <ChildrenWrapper>
                <NavigationList menu={menuItem.children} onToggleExpand={onToggleExpand} />
              </ChildrenWrapper>
            )}
          </li>
        ))}
    </ul>
  );
};
