import styles from './Doacao.module.scss';
import ongs from 'Data/ongs.json';
import { useRecoilState } from 'recoil';
import { ModalDoacao } from 'State/atom';
import { Modal } from './Modal';
import { useState } from 'react';

export const Doacao = () => {

  const [_, setIsModalOpen] = useRecoilState(ModalDoacao);
  const [titulo, setTitulo] = useState<string>('');

  function openModal(txt: string) {
    setIsModalOpen(true);
    setTitulo(txt);
  }

  return (
    <main>
      <Modal
        titulo={titulo} />
      <section className={styles.container}>
        <div className={styles.container__ongs}>
          {ongs.map(item => (
            <div key={item.id}>
              <div className={styles.ongs} >
                <div className={styles.ongs__nome}>
                  <h3>{item.titulo}</h3>
                </div>
                <div className={styles.ongs__imagens}>
                  <img src={item.imagem} className={styles.ongs__imagens__imagem} />
                </div>
                <div className={styles.ongs__container}>
                  <button
                    className={styles.ongs__ancora}
                    id=''
                    onClick={() => openModal(item.titulo)} >Faça uma doação</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};