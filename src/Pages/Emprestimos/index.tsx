import { Possibilidades } from 'Data/emprestimos';
import styles from './emprestimo.module.scss';
import { v4 as uuid } from 'uuid';
import { useAdicionaEvento } from 'Hooks/useAdicionarEntrada';
import { useState } from 'react';
import { emprestimos } from 'Interfaces/Emprestimos';
import { useSaldo } from 'Hooks/useSaldo';
import { useFormataBRL } from 'Hooks/useFormataBRL';
import { montaTransacao } from 'util/MontaTransacao';

//TODO Fazer os juros nos emprestimos

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
  const AdicionaEvento = useAdicionaEvento();

  const PegaEmprestimo = (lista: emprestimos) => {

    const data = new Date().toLocaleDateString();
    const Transacao = montaTransacao(lista.Valor, lista.Titulo, data, id, 1);
    AdicionaEvento(Transacao);

    const NovosEmprestimos = Emprestimo.map(item => {
      if (item.id === lista.id) {
        item.boolean = false;
        item.Valor = Number(item.Valor) + Number(item.Valor) / 10;
      }
      return item;
    });
    setEmprestimo(NovosEmprestimos);
  };

  const PagaEmprestimo = (lista: emprestimos) => {

    if (lista.Valor > Saldo) {
      alert('Saldo Insuficiente Para pagar o emprestimo');
      throw Error('Saldo Insuficiente Para pagar o emprestimo');
    }

    const data = new Date().toLocaleDateString();
    const Transacao = montaTransacao(-lista.Valor, lista.Titulo, data, id, 1)
    AdicionaEvento(Transacao);

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