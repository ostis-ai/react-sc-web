import { FC } from 'react';
import styles from './AskElement.module.scss';

interface IProps {
  query: string;
  answer: string;
}

export const AskElement: FC<IProps> = ({ query, answer }) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.elementQuery}>{query}</div>
      <div className={styles.elementAnswer}>{JSON.stringify(answer)}</div>
    </div>
  );
};
