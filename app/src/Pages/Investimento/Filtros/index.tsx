
import styles from './filtrosInvestimos.module.scss';

interface IProps{
  setFiltro : React.Dispatch<React.SetStateAction<number>>
}
export const Filtros = ({setFiltro} : IProps ) => {

  const FiltraCDB = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      return setFiltro(1);
    }
    if (isChecked !== true) {
      return setFiltro(0);
    }
  };

  const FiltraLCI = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      return setFiltro(3);
    }
    if (isChecked !== true) {
      return setFiltro(0);
    }
  };

  const FiltraTesouro = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      return setFiltro(2);
    }
    if (isChecked !== true) {
      setFiltro(0);
    }
  };

  return (
    <div className={styles.opcoes}>
      <div className={styles.opcoes__container}>
        <input type='checkbox' id='CDB' onClick={FiltraCDB} ></input>
        <label htmlFor='CDB' className={styles.opcoes__text} >CDB</label>
      </div>
      <div className={styles.opcoes__container} >
        <input type='checkbox' id='LCI' onClick={FiltraLCI} ></input>
        <label htmlFor='LCI' className={styles.opcoes__text}>LCI</label>
      </div>
      <div className={styles.opcoes__container}>
        <input type='checkbox' id='TD' onClick={FiltraTesouro} ></input>
        <label htmlFor='TD' className={styles.opcoes__text}>Tesouro Direto</label>
      </div>
    </div>
  );
};
