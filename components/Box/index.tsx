import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { useRecoilValue } from 'recoil';
import { ListadeGastos } from 'State/atom';
import { FormataBRL } from 'util/useFormataBRL';
import styles from './box.module.scss';
import { MoneyHandle } from './helpers/MoneyHandle';

//Componentizar esse array quando passar pro tailwind

export const Box = () => {

  const Lista = useRecoilValue(ListadeGastos);
  const { SomaDasEntradas, SomaDosGastos, Total } = MoneyHandle(Lista)

  const arrow = [
    {
      id: 1,
      text: 'Entradas',
      icon: <AiOutlineArrowUp />,
      background: 'rgb(100, 109, 160)',
      valor: FormataBRL(SomaDasEntradas)
    },
    {
      id: 2,
      text: 'Saidas',
      icon: <AiOutlineArrowDown />,
      background: 'rgb(100, 109, 160)',
      valor: FormataBRL(SomaDosGastos)
    },
    {
      id: 3,
      text: 'Balanço',
      icon: <BiDollar />,
      background: 'rgb(100, 109, 160)',
      valor: FormataBRL(Total)
    },
  ];

  return (
    <>
      {arrow.map(item =>
        <div className={styles.box} key={item.id} style={{ backgroundColor: item.background }}>
          <div className={styles.box__top}>
            <p className={styles.box__h1}>{item.text}</p>
            <div className={styles.svg1}>
              {item.icon}
            </div>
          </div>
          <div>
            <p className={styles.box__h2}>{item.valor}</p>
          </div>
        </div>
      )}
    </>
  );
};

