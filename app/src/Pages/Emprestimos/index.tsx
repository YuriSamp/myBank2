import { Sidebar } from 'Components/SideBar/sidebar';
import { Possibilidades } from 'Data/emprestimos';
import styles from './emprestimo.module.scss';

export const Emprestimos = () => {

  const lista = Possibilidades;

  return (
    <main>
      <Sidebar />
      <section className={styles.container}>
        <div className={styles.container__box}>
          {lista.map(item => (
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
                    <p>Valor : {item.Valor}</p>
                  </li>
                </ul>
              </div>
              <div className={styles.box__acao}>
                <button className={styles.box__acao__button}>Pegar Emprestimo</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.container__box2}>
          <button className={styles.container__button}>Emprestimo customizado</button>
        </div>
      </section>
    </main>
  );
};