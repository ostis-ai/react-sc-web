import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';
import { CardComponentType } from './types';
import { CardInfo } from '@components/CardInfo/CardInfo';
import { ScAddr } from 'ts-sc-client';

import Interface from '@assets/images/DefaultPluginImages/Interface.svg';
import KnowledgeBase from '@assets/images/DefaultPluginImages/KnowledgeBase.svg';
import ProblemSolver from '@assets/images/DefaultPluginImages/ProblemSolver.svg';
import Subsystem from '@assets/images/DefaultPluginImages/Subsystem.svg';
import GithubIcon from '@assets/images/GithubIcon.svg';

export interface ComponentCardProps {
  name: string;
  type: CardComponentType;
  description: string;
  github: string;
  scAddr: ScAddr;
}

export const Card: React.FC<ComponentCardProps> = ({ name, type, description, github, scAddr }) => {
  const [showCardInfo, setShowCardInfo] = useState(false);
  let logoComponent: React.ReactNode;
  let subtitleClassName = classNames(styles.subtitle, styles.defaultSubtitle);

  switch (type) {
    case CardComponentType.interface:
      name = name.replace(/_/g, ' ');
      logoComponent = <Interface />;
      subtitleClassName = classNames(styles.subtitle, styles.subtitleInterface);
      break;
    case CardComponentType.knowledgeBase:
      name = name.replace(/_/g, ' ');
      logoComponent = <KnowledgeBase />;
      subtitleClassName = classNames(styles.subtitle, styles.subtitleKnowledgeBase);
      break;
    case CardComponentType.problemSolver:
      name = name.replace(/_/g, ' ');
      logoComponent = <ProblemSolver />;
      subtitleClassName = classNames(styles.subtitle, styles.subtitleProblemSolver);
      break;
    case CardComponentType.subSystem:
      name = name.replace(/_/g, ' ');
      logoComponent = <Subsystem />;
      subtitleClassName = classNames(styles.subtitle, styles.subtitleSubSystem);
      break;
    default:
      logoComponent = null;
  }

  const handleContainerClick = () => {
    setShowCardInfo(!showCardInfo);
  };

  useEffect(() => {
    console.log(scAddr);
  });

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      {showCardInfo && (
        <div className={styles.overlay}>
          <CardInfo scAddr={scAddr} />
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.logo}>{logoComponent}</div>

        <div className={styles.cardInfo}>
          <div className={styles.infoItem}>
            <div className={styles.title}>{name}</div>
            <div className={subtitleClassName}>{type}</div>
          </div>

          <div className={styles.description}>{description}</div>
        </div>
      </div>

      <div className={styles.infoUrl}>
        <a href={github} className={styles.icon}>
          <GithubIcon />
        </a>

        <button className={styles.installLink}>Install</button>
      </div>
    </div>
  );
};
