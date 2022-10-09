
import styles from './Credit.module.scss';
export const CreditCard = () => {
  return (
    <div className={styles.card}>
      <figure className={styles.card__figure}>
      </figure>
      <div className={styles.card__reader}>
        <div className={styles.card__reader__risk}></div>
        <div className={styles.card__reader__risk__two}></div>
        <div className={styles.card__reader__risk__three}></div>
        <div className={styles.card__reader__risk__four}></div>
      </div>
      <p className={styles.card__number}>5032 9334 3764 9846</p>
      <div className={styles.card__dates}>
        <span className={styles.card__dates__first}>09/16</span>
        <span className={styles.card__dates__second}>09/19</span>
      </div>
      <p className={styles.card__name}>YURI SANTOS</p>
      <div className={styles.card__flag}>
        <div className={styles.card__flag__red}></div>
        <div className={styles.card__flag__yellow}></div>
      </div>
    </div>
  );
};