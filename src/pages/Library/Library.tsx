import { useEffect, useState } from 'react';
import { useTranslate } from 'ostis-ui-lib';
import { useMatch } from 'react-router';
import { routes } from '@constants';
import { Card } from '@components/Card/Card';
import { Input } from '@components/input/Input';
import { IconButton } from '@components/IconButton/IconButton';
import SearchIcon from '@assets/images/Search.svg';
import FilterIcon from '@assets/images/filterIcon.svg';
import styles from './Library.module.scss';
import { CardComponentImageType, CardComponentType } from '@components/Card/types';

// For test

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const Library = () => {
  const match = useMatch(routes.LIBRARY);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const translate = useTranslate();

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const test_arr: JSX.Element[] = [];
  for (let i = 0; i < 50; i++) {
    const type = getRandomInt(0, 3);
    let element: JSX.Element;
    switch (type) {
      case 0:
        element = <Card
          title="Name"
          subtitle={CardComponentType.knowledgeBase}
          description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
          logo={CardComponentImageType.knowledgeBaseImg}
        />
        break;
      case 1:
        element = <Card
          title="Name"
          subtitle={CardComponentType.interface}
          description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
          logo={CardComponentImageType.interfaceImg}
        />
        break;
      case 2:
        element = <Card
          title="Name"
          subtitle={CardComponentType.problemSolver}
          description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
          logo={CardComponentImageType.problemSolverImg}
        />
        break;
      case 3:
        element = <Card
          title="Name"
          subtitle={CardComponentType.subSystem}
          description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
          logo={CardComponentImageType.subSystemImg}
        />
        break;
      default:
        element = <></>;
        break;
    }
    test_arr.push(element);
  }

  return (
    <div className={styles.libraryContainer}>
      <div className={styles.scrollableContent}>
        <div className={styles.header}>
          <Input
            className={styles.searchField}
            placeholder={translate({ ru: 'Поиск компонент', en: 'Search for components' })}
            iconLeft={<SearchIcon />}
          />
          <div className={styles.Filter}>
            <button className={styles.FilterButton} onClick={toggleFilterVisibility}>
              <FilterIcon />
              <label>{translate({ ru: 'Фильтр', en: 'Filter' })}</label>
            </button>
            <form className={isFilterVisible ? styles.visible : ''}>
              <div className={styles.Option}>
                <input type="checkbox" id="knowledge-base" name="options[]" value="knowledge-base"/>
                <label htmlFor="knowledge-base">knowledge base</label>
              </div>

              <div className={styles.Option}>
                <input type="checkbox" id="problem-solver" name="options[]" value="problem-solver"/>
                <label htmlFor="problem-solver">problem solver</label>
              </div>

              <div className={styles.Option}>
                <input type="checkbox" id="interface" name="options[]" value="interface" />
                <label htmlFor="interface">interface</label>
              </div>

              <div className={styles.Option}>
                <input type="checkbox" id="subsystem" name="options[]" value="subsystem" />
                <label htmlFor="subsystem">subsystem</label>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.CardsContainer}>{test_arr}</div>
      </div>
    </div>
  );
};

export default Library;
