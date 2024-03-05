import styles from './CardInfo.module.scss'

import ComponentImg from '@assets/images/ComponentImg.svg'
import ProblemSolver from '@assets/images/DefaultPluginImages/ProblemSolver.svg'

export const CardInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardInfo}>
        <div className={styles.logo}>
          <ProblemSolver />
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.infoItem}>
            <div className={styles.title}>Агент поиска кратчайшего пути в графе</div>

            <div className={styles.cardType}>problem solver</div>

            <div className={styles.closeModal}></div>
          </div>

          <div className={styles.subtitle}>
            Агент может использоваться в самых различных областях деятельности. Он может быть
            использован в задачах нахождения путей между физическими объектами, а задачах поиска
            оптимальной последовательности действий для достижения цели в других задачах.
          </div>
        </div>
      </div>

      <div className={styles.annotation}>
        <div className={styles.blockName}>Примечание</div>

        <div className={styles.subtitle}>
          Агент работает как с ориентированными графами, так и с неориентированными
        </div>
      </div>

      <div className={styles.dependencies}>
        <div className={styles.blockName}>Зависимости компонента</div>
        <div className={styles.componentDependencies}>Решатель задач по теории множеств</div>
        <div className={styles.componentDependencies}>База знаний по теории графов</div>
      </div>

      <div className={styles.address}>
        <div className={styles.blockName}>Адрес хранилища</div>
        <div className={styles.storageAddress}>https://github.com/ostis-apps/....scp</div>
      </div>

      <div className={styles.installationMethod}>
        <div className={styles.blockName}>Метод установки</div>
        <div className={styles.componentImg}>
            <ComponentImg />
        </div>
      </div>

    <div className={styles.autorship}>
        <div className={styles.blockName}>
            Автор
        </div>
        <div className={styles.author}>Иванов И. И.</div>
    </div>
    </div>
  );
};