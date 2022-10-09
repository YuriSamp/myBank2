import { CreditCard } from 'Components/CreditCard';
import { Sidebar } from 'Components/SideBar/sidebar';
import { ListaDeGastos } from 'Interfaces/IListaDeGastos';
import { useRecoilValue } from 'recoil';
import { ListadeGastos } from 'State/atom';
import { useState } from 'react';
import styles from './Credit.module.scss';

export const Credit = () => {

  //TODO Receber os props do modal e renderizar a lista, Filtrar por cartão de credito

  const card = useRecoilValue(ListadeGastos);
  const [filtro, setFiltro] = useState<number>(0);

  // const card1 = [
  //   {
  //     id: 1,
  //     numero: 2,
  //     date1: '09/27',
  //     date2: '05/32',
  //   }
  // ];

  const FiltraCartão = () => {
    if (filtro === 2) {
      return setFiltro(0);
    }
    console.log('aplicando filtro 1');
    return setFiltro(2);
  };

  const FiltraCartão2 = () => {
    if (filtro === 3) {
      return setFiltro(0);
    }
    console.log('aplicando filtro 2');
    return setFiltro(3);
  };

  function organizaLista(card: ListaDeGastos) {
    if (card.opcaoPagamento === filtro) {
      return true;
    }
    return false;
  }

  return (
    <section >
      <div className={styles.cartao}>
        <Sidebar />
        <div className={styles.creditContainer}>
          <CreditCard />
          <CreditCard />
        </div>
      </div>
      <div className={styles.background2}>
        <div className={styles.filtro}>
          <h2>Filtrar : </h2>
          <button className={filtro === 2 ? styles.filtro__botoes__selecionado : styles.filtro__botoes} onClick={FiltraCartão}>Final 8946</button>
          <button className={filtro === 3 ? styles.filtro__botoes__selecionado : styles.filtro__botoes} onClick={FiltraCartão2}>Final 7258</button>
        </div>
        <div className={styles.desk}>
          <p className={styles.deskTxt}>Descrição</p>
          <p className={styles.deskTxt}>Valor</p>
          <p className={styles.deskTxt}>Data</p>
        </div>
        <div className={styles.inputs} >
          {
            card.map(card =>
              // organizaLista(card) ?
              <div className={styles.inputs__box} key={card.id} >
                <div className={styles.inputs__desk}>
                  <div className={styles.inputs__text1}>
                    <p>{card.Descricao}</p>
                  </div>
                  <div className={styles.inputs__text2}>
                    <p>{'R$' + card.Preco}</p>
                  </div >
                  <div className={styles.inputs__text3}>
                    <p>{card.Data}</p>
                  </div>
                </div>
              </div>
              // : ''
            )}
        </div>
      </div>
    </section>
  );
};

{/* <div className={styles.info}>
          <h3 className={styles.info__titulo}>Fatura Atual</h3>
          <p className={styles.info__fatura}>R$: 700</p>
          <p >Limite Total: {limite1} </p>
          <p >Limite disponivel: {limite1} </p>
          <p>Fecha em: 02/Nov</p>
          
        </div> */}