import { useSelector, useDispatch } from 'react-redux';
import { setDevMode, selectDevMode } from '@store/devModeSlice';
import styles from './DevModeSwitch.module.scss';
import DevModeON from '@assets/images/DevModeON.svg';
import DevModeOFF from '@assets/images/DevModeOFF.svg';

export const DevModeSwitch = () => {
  const enabled = useSelector(selectDevMode);
  const dispatch = useDispatch();

  const handleChange = () => {
    const newValue = !enabled;
    dispatch(setDevMode(newValue));
  };

  return (
    <div className={styles.switch}>
      <label className={styles.switchLabel}>
        <input type="checkbox" checked={enabled} onChange={handleChange} />
        <span className={styles.sliderRound}>
          {enabled ? (
            <DevModeON className={styles.switchIcon} />
          ) : (
            <DevModeOFF className={styles.switchIcon} />
          )}
        </span>
      </label>
    </div>
  );
};
