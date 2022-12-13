import { ListadeGastos } from '../State/atom';
import { useRecoilValue } from 'recoil';


export const useSaldo = () => {
  const Saldo = useRecoilValue(ListadeGastos);

  const Entradas = Saldo.map(item => {
    return item.Preco;
  });

  const SaldoTotal = Number(Entradas.reduce((a, b) => (a) + (b), 0).toFixed(2));
  return SaldoTotal;
};