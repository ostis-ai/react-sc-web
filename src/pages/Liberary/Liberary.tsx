import { useEffect, useState } from 'react';
import { useMatch } from 'react-router';
import { routes } from '@constants';
import styles from './Liberary.module.scss';
import { ComponentCard } from '@components/ComponentCard/ComponentCard';
import { CardComponentImageType, CardComponentType } from '@components/ComponentCard/types';

const Liberary = () => {
  const match = useMatch(routes.LIBERARY);

  const test = Array.from({ length: 50 }, (_, index) => (
    <div key={index}>
      <ComponentCard
        subtitle={CardComponentType.knowledgeBase}
        description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
        content={CardComponentImageType.knowledgeBaseImg}
      />

      <ComponentCard
        subtitle={CardComponentType.interface}
        description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
        content={CardComponentImageType.interfaceImg}
      />

      <ComponentCard
        subtitle={CardComponentType.problemSolver}
        description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
        content={CardComponentImageType.problemSolverImg}
      />

      <ComponentCard
        subtitle={CardComponentType.subSystem}
        description="Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis."
        content={CardComponentImageType.subSystemImg}
      />
    </div>
  ));

  return (
    <div className={styles.libraryContainer}>
      <div className={styles.scrollableContent}>{test}</div>
    </div>
  );
};

export default Liberary;
