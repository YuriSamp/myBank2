import { Sidebar } from 'Components/SideBar/sidebar';
import { Possibilidades } from 'Data/emprestimos';
import styles from './emprestimo.module.scss';
import { v4 as uuid } from 'uuid';
import { useAdicionaEvento } from 'Hooks/useAdicionarEntrada';
import { useState } from 'react';
import { emprestimos } from 'Interfaces/Emprestimos';
import { useSaldo } from 'Hooks/useSaldo';
import { useFormataBRL } from 'Hooks/useFormataBRL';

const EmprestimosTratado = Possibilidades.map(item => {
  const novoObjeto = {
    ...item,
    boolean: true
  };
  return novoObjeto;
});

export const Emprestimos = () => {

  const Saldo = useSaldo();
  const [Emprestimo, setEmprestimo] = useState<emprestimos[]>(EmprestimosTratado);
  const id: string = uuid();
  const adicionaEvento = useAdicionaEvento();

  Emprestimo.map(item => item.boolean);

  const PegaEmprestimo = (lista: emprestimos) => {
    const opcaoPagamento = 1;
    const Preco = lista.Valor;
    const data = new Date();
    const Data = data.toLocaleDateString();
    const Descricao = lista.Titulo;
    const card = {
      id,
      Preco,
      Data,
      Descricao,
      opcaoPagamento
    };
    adicionaEvento(card);
    const NovosEmprestimos = Emprestimo.map(item => {
      if (item.id === lista.id) {
        item.boolean = false;
        item.Valor = Number(item.Valor) + Number(item.Valor)/10;
      }
      return item;
    });
    setEmprestimo(NovosEmprestimos);
  };

  const PagaEmprestimo = (lista: emprestimos) => {
    const opcaoPagamento = 1;
  
    if (lista.Valor > Saldo) {
      alert('Saldo Insuficiente Para pagar o emprestimo');
      throw Error('Saldo Insuficiente Para pagar o emprestimo');
    }

    const Preco = -lista.Valor;
    const data = new Date();
    const Data = data.toLocaleDateString();
    const Descricao = lista.Titulo;

    const card = {
      id,
      Preco,
      Data,
      Descricao,
      opcaoPagamento
    };
    adicionaEvento(card);
    const NovosEmprestimos = Emprestimo.map(item => {
      if (item.id === lista.id) {
        item.boolean = true;
        item.Valor = Number(item.Valor);
      }
      return item;
    });
    setEmprestimo(NovosEmprestimos);
  };

  return (
    <main>
      <Sidebar />
      <section className={styles.container}>
        <div className={styles.container__box}>
          {EmprestimosTratado.map(item => (
            <div className={styles.box} key={item.id}>
              <div className={styles.box__top}>
                <p className={styles.box__h1}>{item.Titulo}</p>
                <div className={styles.svg1}>
                  {item.svg}
                </div>
              </div>
              <div className={styles.box__descricao}>
                <ul>
                  <li className={styles.box__descricao__lista}>
                    <p>Juros : {item.Descrição1}</p>
                  </li >
                  <li className={styles.box__descricao__lista}>
                    <p>Prazo : {item.Descrição2}</p>
                  </li>
                  <li className={styles.box__descricao__lista}>
                    <p>Valor : {useFormataBRL(item.Valor)}</p>
                  </li>
                </ul>
              </div>
              {item.boolean ?
                <div className={styles.box__acao}>
                  <button
                    className={styles.box__acao__button}
                    onClick={() => PegaEmprestimo(item)}
                  >Pegar Emprestimo</button>
                </div>
                :
                <div className={styles.box__acao}>
                  <button
                    className={styles.box__acao__button}
                    onClick={() => PagaEmprestimo(item)}
                  >Pagar Emprestimo</button>
                </div>
              }
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};