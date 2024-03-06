import styles from './DevModeSwitch.module.scss';

export const DevModeSwitch = () => {
  return (
    <div className={styles.switch}>
      <label className={styles.switchLabel}>
        <input type="checkbox" />
        <span className={styles.sliderRound}></span>
      </label>
    </div>
  );
};
