
import { FaTimes } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LimiteCartão2, ListadeGastos, ModalCredito2 } from 'State/atom';
import styles from './ModalCredito.module.scss';


export const ModalCartao2 = () => {

  const limite = useRecoilValue(LimiteCartão2);
  const gastos = useRecoilValue(ListadeGastos);

  function testaOpcaoPagamento(value : number | undefined) {
    if(value ===3){
      return true;
    }
  }

  const formatador = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  const limiteFormatado = formatador.format(limite);

  const gastosNoCartao = gastos.filter((item) => testaOpcaoPagamento(item.opcaoPagamento));

  const GasotsNumero = gastosNoCartao.map(item => (
    item.Preco
  ));

  const GastosTotais =  Number(GasotsNumero.reduce((a, b) => (a) + (b), 0).toFixed(2));

  console.log(GastosTotais);

  const [isModalOpen, setIsModalOpen] = useRecoilState(ModalCredito2);

  const limiteDisponivel = limite - GastosTotais;
  const limiteDisponivelFormatado = formatador.format(limiteDisponivel);
  const GastosFormatados = formatador.format(GastosTotais);

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
