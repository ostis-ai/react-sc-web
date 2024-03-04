import { useEffect, useState } from 'react';
import { useMatch } from 'react-router';
import { routes } from '@constants';
import { Card } from '@components/Card/Card';
import styles from './Library.module.scss';
import { CardComponentImageType, CardComponentType } from '@components/Card/types';

const Library = () => {
  const match = useMatch(routes.LIBRARY);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const test = Array.from({ length: 50 }, (_, index) => (
    <div key={index}>
      <Card
        title="Name"
        subtitle={CardComponentType.knowledgeBase}
        description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
        logo={CardComponentImageType.knowledgeBaseImg}
      />
      <Card
        title="Name"
        subtitle={CardComponentType.interface}
        description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
        logo={CardComponentImageType.interfaceImg}
      />
      <Card
        title="Name"
        subtitle={CardComponentType.problemSolver}
        description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
        logo={CardComponentImageType.problemSolverImg}
      />
      <Card
        title="Name"
        subtitle={CardComponentType.subSystem}
        description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
        logo={CardComponentImageType.subSystemImg}
      />
    </div>
  ));

  return (
    <div className={styles.libraryContainer}>
      <div className={styles.scrollableContent}>
        <div className={styles.header}>
          <div className={styles.search}>
            <input type="text" placeholder="Search for components" />
          </div>
          <div className={styles.Filter}>
            <button onClick={toggleFilterVisibility}> Filter </button>
            <form className={isFilterVisible ? styles.visible : ''}>
              <div className={styles.Option}>
                <input type="checkbox" id="knowledge-base" name="options[]" value="knowledge-base" />
                <label>knowledge base</label>
              </div>

              <div className={styles.Option}>
                <input type="checkbox" id="problem-solver" name="options[]" value="problem-solver" />
                <label>problem solver</label>
              </div>
              
              <div className={styles.Option}>
                <input type="checkbox" id="interface" name="options[]" value="interface" />
                <label>interface</label>
              </div>

              <div className={styles.Option}>
                <input type="checkbox" id="subsystem" name="options[]" value="subsystem" />
                <label>subsystem</label>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.CardsContainer}>{test}</div>
      </div>
    </div>
  );
};

export default Library;
