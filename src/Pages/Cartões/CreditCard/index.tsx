
import styles from './Credit.module.scss';

interface Props {
  Number : string,
  DataInicial : string,
  DataFinal : string
}

export const CreditCard = ({Number, DataInicial, DataFinal} : Props) => {
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
      <p className={styles.card__number}>{Number}</p>
      <div className={styles.card__dates}>
        <span className={styles.card__dates__first}>{DataInicial}</span>
        <span className={styles.card__dates__second}>{DataFinal}</span>
      </div>
      <p className={styles.card__name}>YURI SANTOS</p>
      <div className={styles.card__flag}>
        <div className={styles.card__flag__red}></div>
        <div className={styles.card__flag__yellow}></div>
      </div>
    </div>
  );
};
