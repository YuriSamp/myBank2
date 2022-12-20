import { CreditCard } from './CreditCard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ListadeGastos, ModalCredito, ModalCredito2, } from 'State/atom';
import { useState } from 'react';
import styles from './Credit.module.scss';
import { ListaDeGastos } from 'Interfaces/ListaDeGastos';
import { ModalCartao } from './Modal';

export const Credit = () => {

  const [, setIsModalOpen] = useRecoilState(ModalCredito);
  const [, setIsModalOpen2] = useRecoilState(ModalCredito2);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const card = useRecoilValue(ListadeGastos);
  const [filtro, setFiltro] = useState<number>(0);

  const FiltraCartão = () => {
    if (filtro === 2) {
      return setFiltro(0);
    }
    return setFiltro(2);
  };

  const FiltraCartão2 = () => {
    if (filtro === 3) {
      return setFiltro(0);
    }
    return setFiltro(3);
  };

  const organizaLista = (card: ListaDeGastos) => {
    if (card.opcaoPagamento === 1) {
      return false;
    }
    if (filtro === 0) {
      return true;
    }
    if (card.opcaoPagamento === filtro) {
      return true;
    }
  };

  const cartao1 =
  {
    Number: '7849 2541 9731 8946',
    DataInicial: '10/22',
    DataFinal: '10/29'
  };

  const cartao2 =
  {
    Number: '3572 9381 1538 7258',
    DataInicial: '10/18',
    DataFinal: '10/25'
  };

  const CartaoSelecionado = styles.filtro__botoes__selecionado;
  const EstiloPadrao = styles.filtro__botoes;

  return (
    <section >
      <div className={styles.cartao}>
        <ModalCartao
          NumeroDoCartao={2} />
        <ModalCartao
          NumeroDoCartao={3} />
        <div className={styles.creditContainer}>
          <button className={styles.creditButton} onClick={openModal}>
            <CreditCard
              Number={cartao1.Number}
              DataInicial={cartao1.DataInicial}
              DataFinal={cartao1.DataFinal} />
          </button>
          <button className={styles.creditButton} onClick={openModal2}>
            <CreditCard
              Number={cartao2.Number}
              DataInicial={cartao2.DataInicial}
              DataFinal={cartao2.DataFinal} />
          </button>
        </div>
      </div>
      <div className={styles.background2}>
        <div className={styles.filtro}>
          <h2>Filtrar : </h2>
          <button
            className={filtro === 2 ? `${CartaoSelecionado}` : `${EstiloPadrao}`}
            onClick={FiltraCartão}>Final 8946</button>
          <button
            className={filtro === 3 ? `${CartaoSelecionado}` : `${EstiloPadrao}`}
            onClick={FiltraCartão2}>Final 7258</button>
        </div>
        <div className={styles.desk}>
          <p className={styles.deskTxt}>Descrição</p>
          <p className={styles.deskTxt}>Valor</p>
          <p className={styles.deskTxt}>Data</p>
        </div>
        <div className={styles.inputs} >
          {
            card.map(card =>
              organizaLista(card) &&
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
            )}
        </div>
      </div>
    </section>
  );
};

