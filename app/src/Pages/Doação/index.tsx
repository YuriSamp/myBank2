import { Sidebar } from 'Components/SideBar/sidebar';
import styles from './Doacao.module.scss';
import ongs from 'Data/ongs.json';

export const Doacao = () => {
  return (
    <main>
      <Sidebar />
      <section className={styles.container}>
        <div className={styles.container__ongs}>
          {ongs.map(item => (
            <div className={styles.ongs} key={item.id}>
              <div className={styles.ongs__nome}>
                <h3>{item.titulo}</h3>
              </div>
              <div className={styles.ongs__imagens}>
                <img src={item.imagem} className={styles.ongs__imagens__imagem} />
              </div>
              <div className={styles.ongs__container}>
                <a className={styles.ongs__ancora} href={item.url}>Faça uma doação</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};