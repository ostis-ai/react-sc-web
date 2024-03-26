import { useEffect, useState } from 'react';
import { useTranslate } from 'ostis-ui-lib';
import { useMatch } from 'react-router';
import { routes } from '@constants';
import { Card } from '@components/Card/Card';
import { Input } from '@components/input/Input';
import SearchIcon from '@assets/images/Search.svg';
import FilterIcon from '@assets/images/filterIcon.svg';
import styles from './Library.module.scss';
import { CardComponentType } from '@components/Card/types';
import { searchAddrById } from '@api/sc/search/search';
import { useScNavigation } from '@hooks/useScNavigation';
import {
  ScAddr,
  ScTemplate,
  ScType,
} from 'ts-sc-client';
import { client, scUtils } from '@api/sc';

interface CardIntervace {
  title: string;
  subtitle: CardComponentType;
  description: string;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mock_fetch(num: number): CardIntervace[] {
  const test_arr: CardIntervace[] = [];
  for (let i = 0; i < num; i++) {
    const type = getRandomInt(0, 3);
    let element: CardIntervace;
    switch (type) {
      case 0:
        element = {
          title: 'Name',
          subtitle: CardComponentType.knowledgeBase,
          description: 'Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis.',
        };
        break;
      case 1:
        element = {
          title: 'Name',
          subtitle: CardComponentType.interface,
          description: 'Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis.',
        };
        break;
      case 2:
        element = {
          title: 'Name',
          subtitle: CardComponentType.problemSolver,
          description: 'Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis.',
        };
        break;
      case 3:
        element = {
          title: 'Name',
          subtitle: CardComponentType.subSystem,
          description: 'Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis.',
        };
        break;
      default:
        element = {
          title: 'Unknown',
          subtitle: CardComponentType.unknown,
          description: 'Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis.',
        };
        break;
    }
    test_arr.push(element);
  }
  return test_arr;
}

const Library = () => {
  const match = useMatch(routes.LIBRARY);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [cards, setCards] = useState<CardIntervace[] | undefined>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardIntervace[] | undefined>([]); 

  const translate = useTranslate();

  const findComponentGit = async (componentAddr: ScAddr): Promise<string | number | undefined> => {
    const template = new ScTemplate();
    const { nrelComponentAddress } = await scUtils.findKeynodes('nrel_component_address');
    const gitAlias = '_git';
    template.tripleWithRelation(
      componentAddr,
      ScType.EdgeDCommonVar,
      [ScType.LinkVar, gitAlias],
      ScType.EdgeAccessVarPosPerm,
      nrelComponentAddress,
    );
    const result = await client.templateSearch(template);
    const gitScAddr = result.length ? result[0].get(gitAlias) : undefined;

    if (!gitScAddr)
      return undefined;

    const linkContents = await client.getLinkContents([gitScAddr]);
    return linkContents[0].data;
  };

  const testFindGit = async () => {
    const scAddr = await searchAddrById("concept_cat_specification");
    if (!scAddr)
      return
    const gitUrl = await findComponentGit(scAddr);
    console.log(gitUrl);
  }

  const tmp = async () => {
    const actionNode = await searchAddrById("cat_reusable_component_specification");
    console.log(actionNode);

    // if (scAddr){
    //   const data =  await client.getLinkContents([scAddr]);
    //   console.log(data);
    // }
  }

  useEffect(() => {
    setCards(mock_fetch(15));
    tmp();
  }, []);
  
  useEffect(() => {
    const filtered = selectedFilters.length > 0 ? cards?.filter((card) => selectedFilters.includes(card.subtitle)) : cards;
    setFilteredCards(filtered);
  }, [cards, selectedFilters]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filtered = cards?.filter((card) => card.title.includes(value)); 
    setFilteredCards(filtered); 
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className={styles.libraryContainer}>
      <div className={styles.scrollableContent}>
        <div className={styles.header}>
          <Input
            className={styles.searchField}
            placeholder={translate({ ru: 'Поиск компонент', en: 'Search for components' })}
            iconLeft={<SearchIcon />}
            onChange={handleSearchChange}
          />
          <div className={styles.Filter}>
            <button className={styles.FilterButton} onClick={toggleFilterVisibility}>
              <FilterIcon />
              <label>{translate({ ru: 'Фильтр', en: 'Filter' })}</label>
            </button>
            <form className={isFilterVisible ? styles.visible : ''}>
              <div className={styles.Option}>
                <input
                  type="checkbox"
                  id="knowledge-base"
                  name="options[]"
                  value="knowledge-base"
                  onChange={handleFilterChange}
                />
                <label htmlFor="knowledge-base">knowledge base</label>
              </div>

              <div className={styles.Option}>
                <input
                  type="checkbox"
                  id="problem-solver"
                  name="options[]"
                  value="problem-solver"
                  onChange={handleFilterChange}
                />
                <label htmlFor="problem-solver">problem solver</label>
              </div>
              
              <div className={styles.Option}>
                <input
                  type="checkbox"
                  id="interface"
                  name="options[]"
                  value="interface"
                  onChange={handleFilterChange}
                />
                <label htmlFor="interface">interface</label>
              </div>

              <div className={styles.Option}>
                <input
                  type="checkbox"
                  id="subsystem"
                  name="options[]"
                  value="subsystem"
                  onChange={handleFilterChange}
                />
                <label htmlFor="subsystem">subsystem</label>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.CardsContainer}>
          {filteredCards?.map((item) => (
            <Card title={item.title} subtitle={item.subtitle} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
