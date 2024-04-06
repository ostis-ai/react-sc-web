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
import {
  ScAddr,
  ScConstruction,
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

  // ScComponentManagerSearchAgent

  const initiateAgent = async () => {
    const construction = new ScConstruction();
    const myNode = "_darudaru";
    const action_components_search = await searchAddrById("action_components_search");
    const question_node = await searchAddrById("question");
    const question_initiated = await searchAddrById("question_initiated");
    if (!question_node || !action_components_search || !question_initiated)
      return;

    construction.createNode(ScType.NodeConst, myNode);
    construction.createEdge(
      ScType.EdgeAccessConstPosPerm,
      question_node,
      myNode,
    );
    construction.createEdge(
      ScType.EdgeAccessConstPosPerm,
      action_components_search,
      myNode,
    );
    construction.createEdge(
      ScType.EdgeAccessConstPosPerm,
      question_initiated,
      myNode,
    );
    const res = await client.createElements(construction);
    return res;
  }

  const getResultNode = async (answerNode: ScAddr) => {
    const { nrelAnswer } = await scUtils.findKeynodes('nrel_answer');
    if (!nrelAnswer)
      return;
    const template = new ScTemplate();
    const answerAlias = '_answer';
    template.tripleWithRelation(
      answerNode,
      ScType.EdgeDCommonVar,
      [ScType.NodeVarStruct, answerAlias],
      ScType.EdgeAccessVarPosPerm,
      nrelAnswer,
    );
    const result = await client.templateSearch(template);
    const answerScAddr = result.length ? result[0].get(answerAlias) : undefined;
    return answerScAddr;
  }

  const findSpecifications = async () => {
    const agentResult = await initiateAgent();
    if (!agentResult)
      return;
    
    let specificationsAddr: ScAddr | undefined = undefined;

    await Promise.all(agentResult.map(async (answerNode) => {
      const answerScAddr = await getResultNode(answerNode);
      if (answerScAddr) {
        specificationsAddr = answerScAddr;
      }
    }));
    if (!specificationsAddr)
      return;
    

    const template = new ScTemplate();
    const answerAlias = '_answer';
    template.triple(
      specificationsAddr,
      ScType.EdgeAccessVarPosPerm,
      [ScType.NodeVarStruct, answerAlias],
    );

    const result = await client.templateSearch(template);
    const specificationArrds = result.map((tuple) => tuple.get(answerAlias));

    await Promise.all(specificationArrds.map(async (spec) => {
      const template = new ScTemplate();
      const answerAlias = '_answer';
      const { conceptReusableComponent } = await scUtils.findKeynodes('concept_reusable_component');
      template.triple(
        spec,
        ScType.EdgeAccessVarPosPerm,
        [ScType.NodeVar, answerAlias],
      );
      template.triple(
        conceptReusableComponent,
        ScType.EdgeAccessVarPosPerm,
        [ScType.NodeVar, answerAlias],
      );

      const result = await client.templateSearch(template);
      const specAddr = result.length ? result[0].get(answerAlias) : undefined
      if (!specAddr) 
        return;

      const systemIdentifier = await findComponentSystemIdentifier(specAddr);
      const explanation = await findComponentExplanation(specAddr);
      const gitUrl = await findComponentGit(specAddr);
      const installationMethod = await findComponentInstallationMethod(specAddr);
      const componentType = await findComponentType(specAddr);

      console.log(`Component system identifier: ${systemIdentifier}\nGit url: ${gitUrl}\nInstallation method ScAddr: ${installationMethod?.value}\nComponent type: ${componentType}\nComponent explanation: ${explanation}`);
    }));
  }

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

  const findComponentInstallationMethod = async (componentAddr: ScAddr) => {
    const template = new ScTemplate();
    const { nrelInstallationMethod } = await scUtils.findKeynodes('nrel_installation_method');
    const methodAlias = '_method';
    template.tripleWithRelation(
      componentAddr,
      ScType.EdgeDCommonVar,
      [ScType.NodeVar, methodAlias],
      ScType.EdgeAccessVarPosPerm,
      nrelInstallationMethod,
    );
    const result = await client.templateSearch(template);
    const methodScAddr = result.length ? result[0].get(methodAlias) : undefined;
    return methodScAddr;
  };

  const findComponentSystemIdentifier = async (componentAddr: ScAddr) => {
    const template = new ScTemplate();
    const { nrelSystemIdentifier } = await scUtils.findKeynodes('nrel_system_identifier');
    const systemIdentifierAlias = '_systemIdentifier';
    template.tripleWithRelation(
      componentAddr,
      ScType.EdgeDCommonVar,
      [ScType.LinkVar, systemIdentifierAlias],
      ScType.EdgeAccessVarPosPerm,
      nrelSystemIdentifier,
    );
    const result = await client.templateSearch(template);
    const systemIdentifierScAddr = result.length ? result[0].get(systemIdentifierAlias) : undefined;
    if (!systemIdentifierScAddr)
      return undefined;

    const linkContents = await client.getLinkContents([systemIdentifierScAddr]);
    return linkContents[0].data;
  };


  const findComponentExplanation = async (componentAddr: ScAddr) => {
    const template = new ScTemplate();
    const { nrelExplanation } = await scUtils.findKeynodes('nrel_explanation');
    const explanationAlias = '_explanation';
    template.tripleWithRelation(
      componentAddr,
      ScType.EdgeDCommonVar,
      [ScType.LinkVar, explanationAlias],
      ScType.EdgeAccessVarPosPerm,
      nrelExplanation,
    );
    const result = await client.templateSearch(template);
    const explanationScAddr = result.length ? result[0].get(explanationAlias) : undefined;
    if (!explanationScAddr)
      return undefined;

    const linkContents = await client.getLinkContents([explanationScAddr]);
    return linkContents[0].data;
  };

  const findComponentType = async (componentAddr: ScAddr) => {
    const types = ["concept_reusable_kb_component", "concept_reusable_ps_component", "concept_reusable_interface_component", "concept_reusable_embedded_ostis_system"];
    const typesScAddr = await Promise.all(types.map(async (type) => await searchAddrById(type)));
    console.log(typesScAddr);
    const componentTypes: ScAddr[] = [];

    await Promise.all(typesScAddr.map(async (type) => {
      if (!type)
        return

      const template = new ScTemplate();
      template.triple(
        type,
        ScType.EdgeAccessVarPosPerm,
        componentAddr
      );

      const result = await client.templateSearch(template);
      if (result.length) {
        console.log(result)
        componentTypes.push(type);
      }
    }));
    return componentTypes;
  };


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
    findSpecifications();
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
