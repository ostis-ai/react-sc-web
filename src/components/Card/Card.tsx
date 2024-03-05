import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';
import { CardComponentType, CardComponentImageType } from './types';
import { CardInfo } from '@components/CardInfo/CardInfo';

import Interface from '@assets/images/DefaultPluginImages/Interface.svg';
import KnowledgeBase from '@assets/images/DefaultPluginImages/KnowledgeBase.svg';
import ProblemSolver from '@assets/images/DefaultPluginImages/ProblemSolver.svg';
import Subsystem from '@assets/images/DefaultPluginImages/Subsystem.svg';
import GithubIcon from '@assets/images/GithubIcon.svg';

interface ComponentCardProps {
  title: string;
  subtitle: CardComponentType;
  description: string;
  logo: CardComponentImageType;
}

export const Card: React.FC<ComponentCardProps> = ({ title, subtitle, description, logo }) => {
  const [showCardInfo, setShowCardInfo] = useState(false);
  let logoComponent: React.ReactNode;
  let subtitleClassName = classNames(styles.subtitle, styles.defaultSubtitle);

  switch (logo) {
    case CardComponentImageType.interfaceImg:
      logoComponent = <Interface />;
      subtitleClassName = classNames(styles.subtitle, styles.subtitleInterface);
      break;
    case CardComponentImageType.knowledgeBaseImg:
      logoComponent = <KnowledgeBase />;
      subtitleClassName = classNames(styles.subtitle, styles.subtitleKnowledgeBase);
      break;
    case CardComponentImageType.problemSolverImg:
      logoComponent = <ProblemSolver />;
      subtitleClassName = classNames(styles.subtitle, styles.subtitleProblemSolver);
      break;
    case CardComponentImageType.subSystemImg:
      logoComponent = <Subsystem />;
      subtitleClassName = classNames(styles.subtitle, styles.subtitleSubSystem);
      break;
    default:
      logoComponent = null;
  }

  const handleContainerClick = () => {
    setShowCardInfo(!showCardInfo);
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      {showCardInfo && (
        <div className={styles.overlay}>
          <CardInfo />
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.logo}>{logoComponent}</div>

        <div className={styles.cardInfo}>
          <div className={styles.infoItem}>
            <div className={styles.title}>{title}</div>
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
