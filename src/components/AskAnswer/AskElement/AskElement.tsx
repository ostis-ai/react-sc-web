import { FC } from 'react';
import styles from './AskElement.module.scss';

import AskAIMessageIcon from '@assets/images/AskAIMessageIcon.svg';

interface IProps {
  query: string;
  answer: string;
}

export const AskElement: FC<IProps> = ({ query, answer }) => {
  return (
    <div className={styles.elementWrapper}>
      <div className={styles.elementQuery}>{query}</div>
      <div className={styles.elementAnswer}>
        <div>{<AskAIMessageIcon />}</div>
        <div>{JSON.stringify(answer)}</div>
      </div>
    </div>
  );
};
