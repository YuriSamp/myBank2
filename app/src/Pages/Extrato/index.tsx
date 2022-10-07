import { useRecoilState, useRecoilValue } from 'recoil';
import { BotaoModal, ListadeGastos } from 'State/atom';
import { Sidebar } from '../../Components/SideBar/sidebar';
import { Box } from './Box';
import styles from './Extrato.module.scss';
import { Modal } from './Modal';

export const Extrato = () => {

  const [isModalOpen, setIsModalOpen] = useRecoilState(BotaoModal);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const card = useRecoilValue(ListadeGastos);

  return (
    <main>
      <Sidebar />
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
                  <div className={styles.inputs__text1}>
                    <p>{card.Descricao}</p>
                  </div>
                  <div className={` ${card.Preco >= 0 ? [styles.inputs__text2 ] : [styles.inputs__negative]}`}>
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
    </main>
  );
};
