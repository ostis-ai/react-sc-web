import styles from './CardInfo.module.scss';
import { ScAddr } from 'ts-sc-client';
import { useState, useEffect } from 'react';

import { CardComponentType } from '@components/Card/types';
import CloseIcon from '@assets/images/CloseIcon.svg';
import DynamicallyInstalledComponent from '@assets/images/DynamicallyInstalledComponent.svg';
import ReusableComponent from '@assets/images/ReusableComponent.svg';
import ProblemSolver from '@assets/images/DefaultPluginImages/ProblemSolver.svg';

import {
  findComponentAuthor,
  findComponentGit,
  findComponentDeps,
  findComponentSystemIdentifier,
  findComponentExplanation,
  findComponentType,
  findComponentInstallationMethod,
  findComponentNote,
} from '../../pages/Library/utils';

interface CardInfoProps {
  scAddr: ScAddr;
}

export const CardInfo: React.FC<CardInfoProps> = ({ scAddr }) => {
  const [selectedScAddr, setSelectedScAddr] = useState<ScAddr | null>(null);

  const [name, setName] = useState<string | '...'>('...');
  const [github, setGithub] = useState<string | '#'>('#');
  const [explanation, setExplanation] = useState<string | '...'>('...');
  const [type, setType] = useState<CardComponentType>();
  const [author, setAuthor] = useState<string | '...'>('...');
  const [note, setNote] = useState<string>('');
  const [dependencies, setDependencies] = useState<Map<ScAddr, string>>(new Map());
  const getDependenciesSystemIdentifier = async () => {
    const fetchDeps: (ScAddr | undefined)[] = (await findComponentDeps(scAddr)) as (
      | ScAddr
      | undefined
    )[];
    console.log(fetchDeps.length);
    if (fetchDeps && fetchDeps.length > 0) {
      const updatedDependencies: Map<ScAddr, string> = new Map(dependencies);
      await Promise.all(
        fetchDeps.map(async (depScAddr) => {
          if (depScAddr) {
            const nodeSystemIdentifier = await findComponentSystemIdentifier(depScAddr);
            if (nodeSystemIdentifier) {
              updatedDependencies.set(depScAddr, nodeSystemIdentifier.toString());
            }
          }
        }),
      );
      setDependencies(updatedDependencies);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedName = scAddr
        ? ((await findComponentSystemIdentifier(scAddr)) as string)
        : '...';
      const fetchedGithub = scAddr ? ((await findComponentGit(scAddr)) as string) : '#';
      const fetchedExplanation = scAddr
        ? ((await findComponentExplanation(scAddr)) as string)
        : '...';
      const fetchedType = await findComponentType(scAddr);
      const fetchedNote = (await findComponentNote(scAddr)) as string;
      const fetchedInstallationMethod = await findComponentInstallationMethod(scAddr);
      const fetchedDeps = await findComponentDeps(scAddr);
      const fetchedAuthors = scAddr ? ((await findComponentAuthor(scAddr)) as string) : '...';

      await getDependenciesSystemIdentifier();
      setName(fetchedName.replace(/_/g, ' '));
      setGithub(fetchedGithub);
      setExplanation(fetchedExplanation);
      setType(fetchedType);
      setNote(fetchedNote);
      setAuthor(fetchedAuthors);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cardInfo}>
        <div className={styles.logo}>
          <ProblemSolver />
        </div>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={styles.title}>{name}</div>
            <div className={styles.tool}>
              <div className={styles.cardType}>{type}</div>
              <button className={styles.closeButton}>
                <CloseIcon className={styles.closeIcon} />
              </button>
            </div>
          </div>
          <div className={styles.subtitle}>{note}</div>
        </div>
      </div>
      {explanation && (
        <div className={styles.annotation}>
          <div className={styles.blockName}>Примечание</div>
          <div className={styles.subtitle}>{explanation}</div>
        </div>
      )}

      {dependencies && dependencies.size > 0 && (
        <div className={styles.dependencies}>
          <div className={styles.blockName}>Зависимости компонента</div>
          {Array.from(dependencies.entries()).map(([scAddr, value]) => (
            <div className={styles.componentDependencies} onClick={() => setSelectedScAddr(scAddr)}>
              {value}
            </div>
          ))}
        </div>
      )}

      {selectedScAddr && <CardInfo scAddr={selectedScAddr} />}

      <div className={styles.address}>
        <div className={styles.blockName}>Адрес хранилища</div>
        <div className={styles.storageAddress}>
          <a href={github}>{github}</a>
        </div>
      </div>

      <div className={styles.installationMethod}>
        <div className={styles.blockName}>Метод установки</div>
        <div className={styles.componentImg}>
          <DynamicallyInstalledComponent />
        </div>
      </div>

      <div className={styles.autorship}>
        <div className={styles.blockName}>Автор</div>
        <div className={styles.subtitle}>{author}</div>
      </div>
    </div>
  );
};
