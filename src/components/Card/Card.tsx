import React, { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import { CardComponentType } from './types';
import { ScAddr } from 'ts-sc-client';
import { getCardLogo, getSubtitleClassName } from './utils';
import GithubIcon from '@assets/images/GithubIcon.svg';

export interface ComponentCardProps {
  name: string;
  type: CardComponentType;
  description: string;
  github: string;
  component: ScAddr;
  setShowComponent: React.Dispatch<React.SetStateAction<ScAddr | undefined>>,
}

export const Card: React.FC<ComponentCardProps> = ({ name, type, description, github, component, setShowComponent }) => {
  const logoComponent = getCardLogo(type);
  const subtitleClassName = getSubtitleClassName(type);
  name = name.replace(/_/g, ' ');

  const handleContainerClick = () => {
    setShowComponent(component);
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
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
        <a 
          href={github} 
          className={styles.icon} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(event)=> event.stopPropagation()}><GithubIcon /></a>
        <button 
          className={styles.installLink} 
          onClick={(event)=> event.stopPropagation()}>Install</button>
      </div>
    </div>
  );
};
