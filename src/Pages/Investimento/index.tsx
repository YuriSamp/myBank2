import styles from './investimento.module.scss';
import { BsCart3 } from 'react-icons/bs';
import inv from 'Data/investimento.json';
import { useState } from 'react';
import { Investimentos } from 'Interfaces/Investimentos';
import { Filtros } from './Filtros';
import { useSaldo } from 'Hooks/useSaldo';
import { v4 as uuid } from 'uuid';
import { useAdicionaEvento } from 'Hooks/useAdicionarEntrada';


export const Investimento = () => {

  const [filtro, setFiltro] = useState<number>(0);
  const Saldo = useSaldo();
  const id: string = uuid();
  const AdicionaEvento = useAdicionaEvento()

  const organizaLista = (inv: Investimentos) => {
    if (filtro === 0) {
      return true;
    }
    if (inv.Tag === filtro) {
      return true;
    }
  };

  const Investir = (item: Investimentos) => {
    if (item.Valor > Saldo) {
      alert('Não possui saldo suficiente para ser investido');
      throw Error('Não possui saldo suficiente para ser investido');
    }
    const opcaoPagamento = 1;
    const Preco = -Number(item.Valor);
    const data = new Date();
    const Data = data.toLocaleDateString();
    const Descricao = `investido em : ${item.Tipo}`;

    const card = {
      Preco,
      Descricao,
      Data,
      id,
      opcaoPagamento
    }

    AdicionaEvento(card);

    alert(`Você adiquiriu um ${item.Tipo} do ${item.Emissor}`);
  };

  return (
    <section className={styles.containerprincipal}>
      <div className={styles.containerprincipal__wrapper}>
        <div className={styles.containerprincipal__header}>
        </div>
        <div>
          <h3 className={styles.containerprincipal__opcoes__titulo}>Filtrar :</h3>
        </div>
        <Filtros
          setFiltro={setFiltro}
        />
        <div className={styles.containerprincipal__main}>
          <div className={styles.containerprincipal__filtros}>
            <div>
              <p className={styles.containerprincipal__filtros__Pr}>Produto</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Em}>Emissor</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Ir}>IR</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Re}>Rentab.(anual)</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Vc}>Vencimento</p>
            </div>
            <div>
              <p className={styles.containerprincipal__filtros__Vm}>Valor minimo</p>
            </div>
          </div>
          {inv.map(item =>
            organizaLista(item) &&
            <div className={styles.containerprincipal__produtos} key={item.id}>
              <div className={styles.containerprincipal__produtos__Em} >
                {item.Tipo}
              </div>
              <div className={styles.containerprincipal__produtos__Em} >
                {item.Emissor}
              </div>
              <div className={styles.containerprincipal__produtos__Em}>
                {item.IR}
              </div>
              <div className={styles.containerprincipal__produtos__Em}>
                {item.Rentabilidade}
              </div>
              <div className={styles.containerprincipal__produtos__Em}>
                {item.Vencimento}
              </div>
              <div className={styles.containerprincipal__produtos__price}>
                {item.ValorMinimo}
              </div>
              <button
                className={styles.containerprincipal__produtos__button}
                onClick={() => Investir(item)}
              >
                <BsCart3 />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};