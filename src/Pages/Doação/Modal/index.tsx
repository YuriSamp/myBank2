import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { ModalDoacao } from 'State/atom';
import { useState } from 'react';
import styles from './Modal.module.scss';
import { v4 as uuid } from 'uuid';
import { useAdicionaEvento } from 'Hooks/useAdicionarEntrada';
import { useSaldo } from 'Hooks/useSaldo';

interface Props {
  titulo: string
}

export const Modal = ({ titulo }: Props) => {

  const Saldo = useSaldo();
  const id: string = uuid();
  const [Valor, setValor] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useRecoilState(ModalDoacao);
  const [opcaoPagamento, setOpcaoPagamento] = useState<number>(0);
  const AdicionaEvento = useAdicionaEvento()

  const closeModal = () => { setIsModalOpen(false); };

  const handleRadioButton = (value: number) => { setOpcaoPagamento(value); };

  const SubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (Valor < '0') {
      alert('O valor doado não pode ser negativo');
      throw Error('O valor doado não pode ser negativo');
    }
    if (Number(Valor) > Saldo) {
      alert('Não possui saldo suficiente para doar');
      throw Error('Não possui saldo suficiente para doar');
    }

    const Descricao = titulo;
    const data = new Date();
    const Data = data.toLocaleDateString();

    const card = {
      Preco: -Number(Valor),
      Descricao,
      Data,
      id,
      opcaoPagamento
    }

    AdicionaEvento(card);
    setValor('');
  };

  return (
    <div className={` ${isModalOpen ? [styles.modaloverlay__showmodal] : [styles.modal__overlay]}`}>
      <div className={styles.__container}>
        <h3 className={styles.form__titulo}>Valor a ser doado</h3>
        <form onSubmit={SubmeterFormulario}>
          <div className={styles.form__entrada}>
            <input
              type='number'
              value={Valor}
              className={styles.form}
              onChange={evento => setValor(evento.target.value)}
              placeholder='0,00'
              required={true} />
          </div>
          <div className={styles.form__opcoes}>
            <div>
              <input
                type='radio'
                id='credito1'
                name="payment"
                required
                onChange={() => handleRadioButton(2)} />
              <label className={styles.form__opcoes__label} htmlFor="credito1">Credito - 9846</label>
            </div>
            <div>
              <input
                type='radio'
                id='credito2'
                name="payment"
                onChange={() => handleRadioButton(3)}
              />
              <label className={styles.form__opcoes__label} htmlFor="credito2">Credito - 7215</label>
            </div>
          </div>
          <div className={styles.form__botoes}>
            <button className={styles.form__botoes__salvar} >Salvar</button>
          </div>
        </form>
        <button className={styles.close_modal_btn} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
