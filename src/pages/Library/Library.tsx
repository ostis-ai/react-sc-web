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
import { findComponentsSpecifications, findComponentGit, getSpecification, findComponentSystemIdentifier, findComponentExplanation } from "./utils";
import { ScAddr } from 'ts-sc-client';


interface CardInterface {
  name: string;
  type: CardComponentType;
  description: string;
  github: string;
  scAddr: ScAddr;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function mock_fetch(components: ScAddr[]) {
  const test_arr: CardInterface[] = [];
  await Promise.all(
    components.map(async (component) => {
      const type = getRandomInt(0, 3);
      let element: CardInterface;

      const specification = await getSpecification(component);
      const git = specification ? await findComponentGit(specification) as string : "#";
      const systemIdentifier = specification ? await findComponentSystemIdentifier(specification) as string : "...";
      const explanation = specification ? await findComponentExplanation(specification) as string: "...";
      console.log(git);

      switch (type) {
        case 0:
          element = {
            name: systemIdentifier,
            type: CardComponentType.knowledgeBase,
            description: explanation,
            github: git,
            scAddr: component,
          };
          break;
        case 1:
          element = {
            name: systemIdentifier,
            type: CardComponentType.interface,
            description: explanation,
            github: git,
            scAddr: component,
          };
          break;
        case 2:
          element = {
            name: systemIdentifier,
            type: CardComponentType.problemSolver,
            description: explanation,
            github: git,
            scAddr: component,
          };
          break;
        case 3:
          element = {
            name: systemIdentifier,
            type: CardComponentType.subSystem,
            description: explanation,
            github: git,
            scAddr: component,
          };
          break;
        default:
          element = {
            name: 'Unknown',
            type: CardComponentType.unknown,
            description: explanation,
            github: git,
            scAddr: component,
          };
          break;
      }
      test_arr.push(element);
    })
  )
  console.log(test_arr)
  return test_arr;
}

const Library = () => {
  const match = useMatch(routes.LIBRARY);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [cards, setCards] = useState<CardInterface[] | undefined>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardInterface[] | undefined>([]);
  const [components, setComponents] = useState<ScAddr[] | undefined>([]);

  const translate = useTranslate();

  // await Promise.all(components.map(async (component) => {
  //   const specification = await getSpecification(component);
  //   if (!specification)
  //       return
  //   const systemIdentifier = await findComponentSystemIdentifier(specification);
  //   const explanation = await findComponentExplanation(specification);
  //   const gitUrl = await findComponentGit(specification);
  //   const installationMethod = await findComponentInstallationMethod(specification);
  //   const componentType = await findComponentType(specification);
  //   const componentNote = await findComponentNote(specification);
  //   const deps = await findComponentDeps(specification);

  //   console.log(
  //       `Component system identifier: ${systemIdentifier}
  //       Git url: ${gitUrl}
  //       Installation method ScAddr: ${installationMethod?.value}
  //       Component type: ${componentType}
  //       Component explanation: ${explanation}
  //       Component note: ${componentNote}
  //       Deps: ${deps}`
  //   );
  // }));

  useEffect(() => {
    const fetchData = async () => {
      const components = await findComponentsSpecifications();
      setComponents(components);
    };
    fetchData()
  }, []);

  useEffect(() => {
    const setData = async (components: ScAddr[]) => {
      const tmp = await mock_fetch(components);
      setCards(tmp);
    };
    if (components)
      setData(components)
  }, [components]);

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
            <Card
              name={item.name}
              type={item.type}
              description={item.description}
              github={item.github}
              scAddr={item.scAddr}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
