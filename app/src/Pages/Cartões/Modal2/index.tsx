
import { FaTimes } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LimiteCartão2, ModalCredito2 } from 'State/atom';
import { useCartaoCredito } from 'State/Hooks/useCartaoCredito';
import { useFormataBRL } from 'State/Hooks/useFormataBRL';
import styles from './ModalCredito.module.scss';


export const ModalCartao2 = () => {

  const limite = useRecoilValue(LimiteCartão2);
  const Credito = useCartaoCredito(3);
  const limiteDisponivel = limite + Credito;
  const limiteFormatado = useFormataBRL(limite);
  const limiteDisponivelFormatado = useFormataBRL(limiteDisponivel);
  const GastosFormatados = useFormataBRL(Credito);


  const [isModalOpen, setIsModalOpen] = useRecoilState(ModalCredito2);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={` ${isModalOpen ? [styles.modaloverlay__showmodal] : [styles.modal__overlay]}`}>
      <div className={styles.__container}>
        <h3 className={styles.form__titulo}>Informações</h3>
        <div>
          <div className={styles.fatura}>
            <p className={styles.form__gastos}>Fatura Atual :{GastosFormatados}</p>
            <p>Limite Disponivel : {limiteDisponivelFormatado}</p>
            <p>Limite Total : {limiteFormatado}</p>
          </div>
        </div>
        <button className={styles.close_modal_btn} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
