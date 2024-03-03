import  { useEffect, useState } from 'react'
import { useMatch } from 'react-router';
import { routes } from '@constants';
import styles from './Liberary.module.scss';

const Liberary = () => {
  const match = useMatch(routes.LIBERARY);

  const test = Array.from({ length: 50 }, (_, index) => (
    <div key={index}>test</div>
  ));

  return (
    <div className={styles.libraryContainer}>
      <div className={styles.scrollableContent}>
        {test}
      </div>
    </div>
  );
};

export default Liberary;
