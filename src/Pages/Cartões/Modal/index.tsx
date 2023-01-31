
import { FaTimes } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LimiteCartão1, LimiteCartão2, ModalCredito } from 'State/atom';
import { useCartaoCredito } from 'Hooks/useCartaoCredito';
import { FormataBRL } from 'util/useFormataBRL';
import styles from './ModalCredito.module.scss';


interface Props {
  NumeroDoCartao: number
}

export const ModalCartao = ({ NumeroDoCartao }: Props) => {
  console.log(NumeroDoCartao)

  const limite = useRecoilValue(LimiteCartão1);
  const limite2 = useRecoilValue(LimiteCartão2);
  const Credito = useCartaoCredito(NumeroDoCartao);


  const limiteDisponivel = limite + Credito;
  const limiteFormatado = FormataBRL(limite);
  const limiteDisponivelFormatado = FormataBRL(limiteDisponivel);
  const GastosFormatados = FormataBRL(Credito);

  const [isModalOpen, setIsModalOpen] = useRecoilState(ModalCredito);

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
