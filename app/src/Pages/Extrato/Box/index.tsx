import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { useRecoilValue } from 'recoil';
import { ListadeGastos } from 'State/atom';
import { useFormataBRL } from 'Hooks/useFormataBRL';
import styles from'./box.module.scss';

export const Box = () => {

  const Lista = useRecoilValue(ListadeGastos);

  const Entradas = Lista.map(item => {
    return item.Preco;
  });

  const EntradasPositivas = Lista.map(item =>  {
    if (item.Preco > 0) {
      return item.Preco;
    }
    else {
      return 0;
    }
  });

  const Gastos = Lista.map(item => {
    if (item.Preco < 0) {
      return item.Preco;
    }
    else {
      return 0;
    }
  });

  const SomaDasEntradas = Number(EntradasPositivas.reduce((a, b) => (a) + (b), 0).toFixed(2));
  const SomaDosGastos = Number(Gastos.reduce((a, b) => (a) + (b), 0).toFixed(2));
  const Total = Number(Entradas.reduce((a, b) => (a) + (b), 0).toFixed(2));

  const arrow = [
    {
      id: 1,
      text: 'Entradas',
      icon: <AiOutlineArrowUp />,
      background: 'rgb(100, 109, 160)',
      valor: useFormataBRL(SomaDasEntradas)
    },
    {
      id: 2,
      text: 'Saidas',
      icon: <AiOutlineArrowDown />,
      background: 'rgb(100, 109, 160)',
      valor: useFormataBRL(SomaDosGastos)
    },
    {
      id: 3,
      text: 'Balanço',
      icon: <BiDollar />,
      background: 'rgb(118, 92, 245)',
      valor: useFormataBRL(Total)
    },
  ];

  return (
    <>
      {arrow.map(item =>
        <div className={styles.box} key={item.id} style={{ backgroundColor: item.background}}>
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

