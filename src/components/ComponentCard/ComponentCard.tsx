import React from 'react';
import classNames from 'classnames';
import styles from './ComponentCard.module.scss';
import { CardComponentType, CardComponentImageType } from './types';

import Interface from '@assets/images/DefaultPluginImages/Interface.svg';
import KnowledgeBase from '@assets/images/DefaultPluginImages/KnowledgeBase.svg';
import ProblemSolver from '@assets/images/DefaultPluginImages/ProblemSolver.svg';
import Subsystem from '@assets/images/DefaultPluginImages/Subsystem.svg';
import GithubIcon from '@assets/images/GithubIcon.svg';

interface ComponentCardProps {
  subtitle: CardComponentType;
  description: string;
  content: CardComponentImageType;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ subtitle, description, content }) => {
  let contentComponent: React.ReactNode;
  let subtitleClassName = classNames(styles.subtitle, styles.defaultSubtitle);

  switch (content) {
    case CardComponentImageType.interfaceImg:
      contentComponent = <Interface />;
      break;
    case CardComponentImageType.knowledgeBaseImg:
      contentComponent = <KnowledgeBase />;
      break;
    case CardComponentImageType.problemSolverImg:
      contentComponent = <ProblemSolver />;
      break;
    case CardComponentImageType.subSystemImg:
      contentComponent = <Subsystem />;
      break;
    default:
      contentComponent = null;
  }

  switch (subtitle) {
    case CardComponentType.knowledgeBase:
      subtitleClassName = classNames(styles.subtitle, styles.subtitleKnowledgeBase);
      break;
    case CardComponentType.subSystem:
      subtitleClassName = classNames(styles.subtitle, styles.subtitleSubSystem);
      break;
    case CardComponentType.problemSolver:
      subtitleClassName = classNames(styles.subtitle, styles.subtitleProblemSolver);
      break;
    case CardComponentType.interface:
      subtitleClassName = classNames(styles.subtitle, styles.subtitleInterface);
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.content}>{contentComponent}</div>

        <div className={styles.cardInfo}>
          <div className={styles.infoItem}>
            <div className={styles.title}>Name</div>
            <div className={subtitleClassName}>{subtitle}</div>
          </div>

          <div className={styles.description}>{description}</div>
        </div>
      </div>

      <div className={styles.infoUrl}>
        <div className={styles.icon}>
          <GithubIcon />
        </div>

        <button className={styles.installLink}>Install</button>
      </div>
    </div>
  );
};
