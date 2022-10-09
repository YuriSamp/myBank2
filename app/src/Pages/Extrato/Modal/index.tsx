import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { BotaoModal } from 'State/atom';
import { useState } from 'react';
import styles from './Modal.module.scss';
import { v4 as uuid } from 'uuid';
import { useAdicionaEvento } from 'State/Hooks/useAdicionarEntrada';

export const Modal = () => {

  //TODO Colocar meio de pagamento, distribuir pra aplicação

  const id: string = uuid();
  const [Preco, setPreco] = useState<string>('');
  const [Descricao, setDescricao] = useState<string>('');
  const [Data, setData] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useRecoilState(BotaoModal);
  const [opcaoPagamento, setOpcaoPagamento] = useState<number>(0);
  const adicionaEvento = useAdicionaEvento();

  const testaData = (data: string) => {
    const pattern = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/);
    if (pattern.test(data) == true) {
      return data;
    } else {
      throw Error('Data invalida!!');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRadioButton = (value: number) => {
    setOpcaoPagamento(value);
  };

  const SubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    try {
      const card = {
        Preco: Number(Preco),
        Descricao,
        Data: testaData(Data),
        id,
        opcaoPagamento,
      };
      adicionaEvento(card);
      setDescricao('');
      setPreco('');
      setData('');
      setOpcaoPagamento(1);
      console.log(card);
    } catch (erro) {
      alert(erro);
    }
  };

  return (
    <div className={` ${isModalOpen ? [styles.modaloverlay__showmodal] : [styles.modal__overlay]}`}>
      <div className={styles.__container}>
        <h3 className={styles.form__titulo}>Nova Transação</h3>
        <form onSubmit={SubmeterFormulario}>
          <div className={styles.form__entrada}>
            <input value={Descricao} className={styles.form} onChange={evento => setDescricao(evento.target.value)} placeholder='Descricao' required={true} />
            <input type='number' value={Preco} className={styles.form} onChange={evento => setPreco(evento.target.value)} placeholder='0,00' required={true} />
            <label className={styles.form__subtitulo}>use o sinal - (negativo) para despesas e , (virgula) para os centavos</label>
            <input value={Data} className={styles.form} onChange={evento => setData(evento.target.value)} placeholder="dd/mm/aaaa" required={true} />
          </div>
          <div className={styles.form__opcoes}>
            <div>
              <input type='radio' id='debito' name="payment"
                onChange={() => handleRadioButton(1)} />
              <label className={styles.form__opcoes__label} htmlFor="debito">Debito</label>
            </div>
            <div>
              <input type='radio' id='credito1' name="payment"
                onChange={() => handleRadioButton(2)} />
              <label className={styles.form__opcoes__label} htmlFor="credito1">Credito - 9846</label>
            </div>
            <div>
              <input type='radio' id='credito2' name="payment"
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
