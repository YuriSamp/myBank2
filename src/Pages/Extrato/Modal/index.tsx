import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';
import { BotaoModal, LimiteCartão1, LimiteCartão2 } from 'State/atom';
import { useState } from 'react';
import styles from './Modal.module.scss';
import { v4 as uuid } from 'uuid';
import { useAdicionaEvento } from 'Hooks/useAdicionarEntrada';
import { useCartaoCredito } from 'Hooks/useCartaoCredito';
import { montaTransacao } from 'util/MontaTransacao';

export const Modal = () => {

  const Credito1 = useRecoilValue(LimiteCartão1);
  const Credito2 = useRecoilValue(LimiteCartão2);
  const id = uuid();
  const [Preco, setPreco] = useState<string>('');
  const [Descricao, setDescricao] = useState<string>('');
  const [Data, setData] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useRecoilState(BotaoModal);
  const [opcaoPagamento, setOpcaoPagamento] = useState<number>(0);
  const GastosCartao1 = useCartaoCredito(2);
  const GastosCartao2 = useCartaoCredito(3);
  const AdicionaEvento = useAdicionaEvento();
  const [mensagemDeErro, setMensagemDeErro] = useState('');


  const testaData = (data: string) => {
    const pattern = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/);
    const pattern2 = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])\d{4}$/);
    if (pattern.test(data) == true) {
      return data;
    }
    if (pattern2.test(data) == true) {
      const string = ''
      const dia = data.slice(0, 2);
      const mes = data.slice(2, 4);
      const ano = data.slice(4);
      return string.concat(dia, '/', mes, '/', ano);
    }
    else {
      setMensagemDeErro('Data invalida')
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


    if (opcaoPagamento === 3) {
      if (Number(Preco) > Credito2 || (Number(Preco) + GastosCartao2) > Credito2) {
        alert('A compra Excede o limite de gastos');
        throw Error('A compra Excede o limite de gastos');
      }
      if (Number(Preco) > 0) {
        setMensagemDeErro('não tem como receber dinheiro em credito');
        throw Error('não tem como receber dinheiro em credito');
      }
    }

    if (opcaoPagamento === 2) {
      if (Number(Preco) > Credito1 || (Number(Preco) + GastosCartao1) > Credito1) {
        alert('A compra Excede o limite de gastos');
        throw Error('A compra Excede o limite de gastos');
      }
      if (Number(Preco) > 0) {
        setMensagemDeErro('não tem como receber dinheiro em credito');
        throw Error('não tem como receber dinheiro em credito');
      }
    }

    const transacao = montaTransacao(Number(Preco), Descricao, testaData(Data), id, opcaoPagamento)
    AdicionaEvento(transacao);
    setDescricao('');
    setPreco('');
    setData('');
    setOpcaoPagamento(1);
  };

  return (
    <div className={` ${isModalOpen ? [styles.modaloverlay__showmodal] : [styles.modal__overlay]}`}>
      <div className={styles.__container}>
        <h3 className={styles.form__titulo}>Nova Transação</h3>
        <form onSubmit={SubmeterFormulario}>
          <div className={styles.form__entrada}>
            <input
              value={Descricao}
              className={styles.form}
              onChange={evento => {
                setMensagemDeErro('')
                setDescricao(evento.target.value)
              }}
              placeholder='Descricao'
              required={true} />
            <input
              type='number'
              value={Preco}
              className={styles.form}
              onChange={evento => {
                setMensagemDeErro('')
                setPreco(evento.target.value)
              }}
              placeholder='0,00'
              required={true} />
            <label className={styles.form__subtitulo}>use o sinal - (negativo) para despesas e , (virgula) para os centavos</label>
            <input
              value={Data}
              className={styles.form}
              onChange={evento => {
                setMensagemDeErro('')
                setData(evento.target.value)
              }}
              placeholder="dd/mm/aaaa"
              required={true} />
            <h2 className={styles.form__mensagemErro}>{mensagemDeErro}</h2>
          </div>
          <div className={styles.form__opcoes}>
            <div>
              <input
                type='radio'
                id='debito'
                name="payment"
                title='debito'
                onChange={() => handleRadioButton(1)} />
              <label className={styles.form__opcoes__label} htmlFor="debito">Debito</label>
            </div>
            <div>
              <input
                type='radio'
                id='credito1'
                name="payment"
                title='credito1'
                onChange={() => handleRadioButton(2)} />
              <label className={styles.form__opcoes__label} htmlFor="credito1">Credito - 9846</label>
            </div>
            <div>
              <input
                type='radio'
                id='credito2'
                name="payment"
                title='credito2'
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
