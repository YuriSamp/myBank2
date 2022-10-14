import { Sidebar } from 'Components/SideBar/sidebar';
import styles from './investimento.module.scss';
import { BsCart3 } from 'react-icons/bs';
import inv from 'Data/investimento.json';
import {ModalInvestimentos } from 'State/atom';
import { useRecoilState} from 'recoil';
import { useState } from 'react';
import { Investimentos } from 'Interfaces/Investimentos';
import { ModalInvestimento } from './Modal';
import { Filtros } from './Filtros';

export const Investimento = () => {

  //TODO Fazer um modal pra comprar cada titulo, montar a pagina da caretira

  const [, setIsModalOpen] = useRecoilState(ModalInvestimentos);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const [filtro, setFiltro] = useState<number>(0);

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
      <ModalInvestimento />
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
        <Filtros
          setFiltro={setFiltro}
        />
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
              <button className={styles.containerprincipal__produtos__button} onClick={openModal}>
                <BsCart3 />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};