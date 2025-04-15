import { TTexts } from 'ostis-ui-lib';
import { rawMenuItems } from './MenuData';

export interface IMenuItem {
  title: TTexts;
  text: TTexts;
  children: IMenuItem[] | null;
  expanded: boolean;
  path: number[];
}

export interface IRawMenuItem {
  title: TTexts;
  text: TTexts;
  children?: IRawMenuItem[] | null;
  expanded?: boolean;
}

export const addPathsToMenu = (items: IRawMenuItem[], parentPath: number[] = []): IMenuItem[] => {
  return items.map((item, index) => {
    const currentPath = [...parentPath, index];
    const expanded = item.expanded === true;
    const rawChildren = item.children;
    const childrenWithPaths = rawChildren ? addPathsToMenu(rawChildren, currentPath) : null;
    const newItem: IMenuItem = {
      ...item,
      expanded: expanded,
      path: currentPath,
      children: childrenWithPaths,
    };
    return newItem;
  });
};

export const getInitialMenuData = (): IMenuItem[] => {
  return addPathsToMenu(rawMenuItems);
};
