import { useRecoilState, useRecoilValue } from 'recoil';
import { BotaoModal, ListadeGastos } from 'State/atom';
import { Box } from '../../../components/Box';
import styles from './Extrato.module.scss';
import { Modal } from './Modal';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { ListaDeGastos } from 'Interfaces/ListaDeGastos';
import { FormataBRL } from 'util/useFormataBRL';

export const Extrato = () => {

  const [, setIsModalOpen] = useRecoilState(BotaoModal);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const card = useRecoilValue(ListadeGastos);

  const TestaPagamento = (card: ListaDeGastos) => {
    return card.opcaoPagamento === 1 ?
      card.Preco >= 0 ?
        <GiReceiveMoney className={styles.inputs__svg1_dtl} />
        : <GiPayMoney />
      : <AiOutlineCreditCard />;
  };

  return (
    <main>
      <Modal />
      <section>
        <div className={styles.background}>
          <button className={styles.Botao} onClick={openModal}>
            Nova Entrada
          </button>
          <div className={styles.boxes}>
            <div className={styles.boxesdisplay}>
              <Box />
            </div>
          </div>
        </div>
        <div className={styles.background2}>
          <div className={styles.desk}>
            <p className={styles.deskTxt}>Descrição</p>
            <p className={styles.deskTxt}>Valor</p>
            <p className={styles.deskTxt}>Data</p>
          </div>
          <div className={styles.inputs} >
            {card.map(card =>
              <div className={styles.inputs__box} key={card.id} >
                <div className={styles.inputs__desk}>
                  <div className={styles.inputs__svg1}>
                    {TestaPagamento(card)}
                  </div>
                  <div className={styles.inputs__text1}>
                    <p>{card.Descricao}</p>
                  </div>
                  <div className={styles.inputs__text2}>
                    <p>{FormataBRL(card.Preco)}</p>
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
    </main>
  );
};
