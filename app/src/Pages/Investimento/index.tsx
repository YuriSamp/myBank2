import { Sidebar } from 'Components/SideBar/sidebar';
import styles from './investimento.module.scss';
import { BsCart3 } from 'react-icons/bs';
import inv from 'Data/investimento.json';
import { ListadeGastos } from 'State/atom';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { Investimentos } from 'Interfaces/Investimentos';

export const Investimento = () => {

  const [filtro, setFiltro] = useState<number>(0);

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

  const FiltraTesouro = (e : any) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      return setFiltro(2);
    }
    if(isChecked !== true){
      setFiltro(0);
    }
  };

  const organizaLista = (inv: Investimentos) => {
    if (filtro === 0) {
      return true;
    }
    if (inv.Tag === filtro) {
      return true;
    }
  };


  return (
    <section className={styles.containerprincipal}>
      <Sidebar />
      <div className={styles.containerprincipal__background1}>
        <div className={styles.containerprincipal__header}>
          <div className={styles.containerprincipal__titulos}>
            <h1 className={styles.containerprincipal__titulo} >Produtos</h1>
          </div>
          <div className={styles.containerprincipal__titulos}>
            <h2 className={styles.containerprincipal__titulo}>Sua Carteira</h2>
          </div>
        </div>
        <div>
          <h3 className={styles.containerprincipal__opcoes__titulo}>Filtrar :</h3>
        </div>
        <div className={styles.containerprincipal__opcoes}>
          <div className={styles.containerprincipal__opcoes__container}>
            <input type='checkbox' id='CDB'  onClick={FiltraCDB}></input>
            <label htmlFor='CDB' className={styles.containerprincipal__opcoes__text}>CDB</label>
          </div>
          <div className={styles.containerprincipal__opcoes__container} >
            <input type='checkbox' id='LCI' onClick={FiltraLCI}></input>
            <label htmlFor='LCI' className={styles.containerprincipal__opcoes__text}>LCI</label>
          </div>
          <div className={styles.containerprincipal__opcoes__container}>
            <input type='checkbox' id='TD'  onClick={FiltraTesouro} ></input>
            <label htmlFor='TD' className={styles.containerprincipal__opcoes__text}>Tesouro Direto</label>
          </div>
        </div>
        <div className={styles.containerprincipal__main}>
          <div className={styles.containerprincipal__filtros}>
            <div>
              <p className={styles.containerprincipal__filtros__Pr}>Produto</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Em}>Emissor</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Ir}>IR</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Re}>Rentab.(anual)</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Vc}>Vencimento</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Vm}>Valor minimo</p>
            </div>
          </div>
          {inv.map(item =>
            organizaLista(item) &&
            <div className={styles.containerprincipal__produtos} key={item.id}>
              <div className={styles.containerprincipal__produtos__Em} >
                {item.Tipo}
              </div>
              <div className={styles.containerprincipal__produtos__Em} >
                {item.Emissor}
              </div>
              <div className={styles.containerprincipal__produtos__Em}>
                {item.IR}
              </div>
              <div className={styles.containerprincipal__produtos__Em}>
                {item.Rentabilidade}
              </div>
              <div className={styles.containerprincipal__produtos__Em}>
                {item.Vencimento}
              </div>
              <div className={styles.containerprincipal__produtos__price}>
                {item.ValorMinimo}
              </div>
              <button className={styles.containerprincipal__produtos__button} >
                <BsCart3 />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};