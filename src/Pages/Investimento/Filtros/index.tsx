

import styles from './filtrosInvestimos.module.scss';
interface IProps {
  setFiltro: React.Dispatch<React.SetStateAction<number>>
}

export const Filtros = ({ setFiltro }: IProps) => {

  const Filtra = (e: any, investimento: number) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      return setFiltro(investimento);
    }
    if (isChecked !== true) {
      return setFiltro(0);
    }
  };

  return (
    <div className={styles.opcoes}>
      <div className={styles.opcoes__container}>
        <input
          type='checkbox'
          id='CDB'
          onClick={(e) => Filtra(e, 1)} ></input>
        <label
          htmlFor='CDB'
          className={styles.opcoes__text} >CDB</label>
      </div>
      <div className={styles.opcoes__container} >
        <input
          type='checkbox'
          id='LCI'
          onClick={(e) => Filtra(e, 3)} ></input>
        <label
          htmlFor='LCI'
          className={styles.opcoes__text}>LCI</label>
      </div>
      <div className={styles.opcoes__container}>
        <input
          type='checkbox'
          id='TD'
          onClick={(e) => Filtra(e, 2)} ></input>
        <label
          htmlFor='TD'
          className={styles.opcoes__text}>Tesouro Direto</label>
      </div>
    </div>
  );
};
