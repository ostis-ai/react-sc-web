import { Select, useTranslate } from 'ostis-ui-lib';
import { useCallback, useEffect, useState } from 'react';

import SearchIcon from '@assets/images/Search.svg';
import { IMenuItem, getInitialMenuData } from './Menu';
import { NavigationList } from './NavigationList';

import styles from '../SidePanel.module.scss';

export const AboutSidePanel = () => {
  const translate = useTranslate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [menu, setMenu] = useState<IMenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchedMenu = getInitialMenuData();
    setMenu(fetchedMenu);
    setIsLoading(false);
  }, []);

  const handleToggleExpand = useCallback((path: number[]) => {
    setMenu((currentMenu) => {
      const updateMenuRecursive = (items: IMenuItem[], currentPath: number[]): IMenuItem[] => {
        const index = currentPath[0];
        const remainingPath = currentPath.slice(1);

        if (index === undefined || index < 0 || index >= items.length) {
          console.warn('Invalid path segment encountered:', index, 'in path', path);
          return items;
        }

        return items.map((item, i) => {
          if (i !== index) return item;

          if (remainingPath.length === 0) {
            if (!item.children) return item;
            return { ...item, expanded: !item.expanded };
          }

          if (!item.children) {
            console.warn('Path leads deeper, but item has no children:', item.title);
            return item;
          }

          return { ...item, children: updateMenuRecursive(item.children, remainingPath) };
        });
      };
      const newMenu = updateMenuRecursive(currentMenu, path);
      return newMenu;
    });
  }, []);

  const filterMenu = useCallback(
    (items: IMenuItem[], term: string): IMenuItem[] => {
      const lowerCaseTerm = term.toLowerCase().trim();

      if (!lowerCaseTerm) {
        return items;
      }

      const filterRecursive = (currentItems: IMenuItem[]): IMenuItem[] => {
        const filtered: IMenuItem[] = [];

        for (const item of currentItems) {
          const translatedTitle = translate(item.title).toLowerCase();
          const titleMatches = translatedTitle.includes(lowerCaseTerm);

          let filteredChildren: IMenuItem[] | null = null;
          let hasMatchingChildren = false;

          if (item.children) {
            filteredChildren = filterRecursive(item.children);
            hasMatchingChildren = filteredChildren.length > 0;
          }

          if (titleMatches || hasMatchingChildren) {
            filtered.push({
              ...item,
              expanded: titleMatches || hasMatchingChildren ? true : item.expanded,
              children: filteredChildren,
            });
          }
        }
        return filtered;
      };

      return filterRecursive(items);
    },
    [translate],
  );

  const displayedMenu = filterMenu(menu, searchTerm);

  return (
    <>
      <Select
        className={styles.searchField}
        mode="search"
        value={searchTerm}
        placeholder={translate({ ru: 'Поиск...', en: 'Search...' })}
        isLoading={false}
        onInputChange={(e) => setSearchTerm(e.target.value)}
        onChange={(e) => setSearchTerm(e.target.value)}
        iconsLeft={<SearchIcon />}
        showOptions={false}
      />

      {isLoading ? (
        <div>Loading...</div>
      ) : displayedMenu.length > 0 ? (
        <NavigationList menu={displayedMenu} onToggleExpand={handleToggleExpand} />
      ) : searchTerm ? (
        <div>{translate({ ru: 'Ничего не найдено', en: 'Nothing found' })}</div>
      ) : (
        <div>{translate({ ru: 'Меню пусто', en: 'Menu is empty' })}</div>
      )}
    </>
  );
};
