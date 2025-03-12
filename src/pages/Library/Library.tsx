import { useEffect, useState } from 'react';
import { useTranslate } from 'ostis-ui-lib';
import { Card } from '@components/Card/Card';
import { Input } from '@components/input/Input';
import { CardInfo } from '@components/CardInfo/CardInfo';
import SearchIcon from '@assets/images/Search.svg';
import FilterIcon from '@assets/images/filterIcon.svg';
import styles from './Library.module.scss';
import { CardComponentType } from '@components/Card/types';
import {
  searchSpecifications,
  searchComponentUsingGit,
  searchComponentBySpecification,
  searchComponentSystemIdentifier,
  searchComponentExplanation,
  searchComponentType,
} from '@api/requests/getSpecification';
import { ScAddr } from 'ts-sc-client';

interface CardInterface {
  name: string;
  type: CardComponentType;
  description: string;
  github: string;
  component: ScAddr;
}

const Library = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [cards, setCards] = useState<CardInterface[] | undefined>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardInterface[] | undefined>([]);
  const [specifications, setSpecifications] = useState<ScAddr[]>([]);
  const [showComponent, setShowComponent] = useState<ScAddr | undefined>();

  const translate = useTranslate();

  useEffect(() => {
    fetchSpecifications();
  }, []);

  useEffect(() => {
    fetchCards();
  }, [specifications]);

  const fetchSpecifications = async () => {
    const specifications = await searchSpecifications();
    setSpecifications(specifications);
  };

  const fetchCards = async () => {
    try {
      const newCards = await Promise.all(
        specifications.map(async (specification) => {
          return await fetchComponentCard(specification);
        }),
      );
      setCards(newCards);
    } catch (error) {
      console.error('Error fetching components specifications:', error);
      throw error;
    }
  };

  const fetchComponentCard = async (specification: ScAddr) => {
    try {
      const component = await searchComponentBySpecification(specification);
      const [systemIdentifier, type, git, explanation] = await Promise.all([
        searchComponentSystemIdentifier(component),
        searchComponentType(component),
        searchComponentUsingGit(component),
        searchComponentExplanation(component),
      ]);
      const card: CardInterface = {
        name: systemIdentifier ? (systemIdentifier as string) : '...',
        type: type,
        description: explanation ? (explanation as string) : '...',
        github: git ? (git as string) : '...',
        component: component,
      };
      return card;
    } catch (error) {
      console.error('Error fetching component specification:', error);
      throw error;
    }
  };

  useEffect(() => {
    const filtered =
      selectedFilters.length > 0
        ? cards?.filter((card) => selectedFilters.includes(card.type))
        : cards;
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
    const filtered = cards?.filter((card) => card.name.includes(value));
    setFilteredCards(filtered);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilterForm = () => {
    if (isFilterVisible === true) setIsFilterVisible(false);
  };

  const handleFilterFormClick = (event: React.MouseEvent<HTMLFormElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {showComponent && <CardInfo scAddr={showComponent} setShowComponent={setShowComponent} />}
      <div className={styles.libraryContainer} onClick={closeFilterForm}>
        <div className={styles.scrollableContent}>
          <div className={styles.header}>
            <Input
              className={styles.searchField}
              placeholder={translate({ ru: 'Поиск компонентов', en: 'Search for components' })}
              iconLeft={<SearchIcon />}
              onChange={handleSearchChange}
            />
            <div className={styles.Filter}>
              <button className={styles.FilterButton} onClick={toggleFilterVisibility}>
                <FilterIcon />
                <label>{translate({ ru: 'Фильтр', en: 'Filter' })}</label>
              </button>
              <form
                className={isFilterVisible ? styles.visible : ''}
                onClick={handleFilterFormClick}
              >
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
              <Card
                name={item.name}
                type={item.type}
                description={item.description}
                github={item.github}
                component={item.component}
                setShowComponent={setShowComponent}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
