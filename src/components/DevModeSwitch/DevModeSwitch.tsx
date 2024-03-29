import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDevMode } from '@store/devModeSlice';
import styles from './DevModeSwitch.module.scss';
import DevModeON from '@assets/images/DevModeON.svg';
import DevModeOFF from '@assets/images/DevModeOFF.svg';

export const DevModeSwitch = () => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(() => {
    const storedValue = localStorage.getItem('devMode');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const handleChange = () => {
    setChecked(!checked);
    localStorage.setItem('devMode', JSON.stringify(!checked));
    dispatch(setDevMode(!checked));
  };

  return (
    <div className={styles.switch}>
      <label className={styles.switchLabel}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={styles.sliderRound}>
          {checked ? (
            <DevModeON className={styles.switchIcon} />
          ) : (
            <DevModeOFF className={styles.switchIcon} />
          )}
        </span>
      </label>
    </div>
  );
};
