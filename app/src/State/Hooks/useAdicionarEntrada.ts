import { ListaDeGastos } from './../../Interfaces/IListaDeGastos';
import { useSetRecoilState } from 'recoil';
import { ListadeGastos } from 'State/atom';

export const useAdicionaEvento = () => {
  const setlistadeEventos = useSetRecoilState<ListaDeGastos[]>(ListadeGastos);
  return (e : ListaDeGastos) => {
    return setlistadeEventos(listaantiga => [...listaantiga, e]);
  };
};
