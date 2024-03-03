import classNames from 'classnames';
import styles from './ComponentCard.module.scss';

import Interface from '../../assets/images/DefaultPluginImages/Interface.svg';
import KnowledgeBase from '../../assets/images/DefaultPluginImages/KnowledgeBase.svg';
import ProblemSolver from '../../assets/images/DefaultPluginImages/ProblemSolver.svg';
import Subsystem from '../../assets/images/DefaultPluginImages/Subsystem.svg';
import GithubIcon from '../../assets/images/GithubIcon.svg';

export const ComponentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.content}>
          <Interface />
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.infoItem}>
            <div className={styles.title}>Name</div>
            <div className={styles.subtitle}>knowledge base</div>
          </div>

          <div className={styles.infoItem}>
            Minus qui necessitatibus ipsa et cupiditate velit consequatur blanditiis.
          </div>
        </div>
      </div>

      <div className={styles.infoUrl}>
        <span className={styles.icon}>
          <GithubIcon />
        </span>

        <button className={styles.installLink}>Install</button>
      </div>
    </div>
  );
};
