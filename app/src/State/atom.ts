import { ListaDeGastos } from 'Interfaces/ListaDeGastos';
import { atom } from 'recoil';

export const ListadeGastos = atom<ListaDeGastos[]>({
  key: 'ListadeGastos',
  default: []
});

export const BotaoModal = atom({
  key: 'Btn',
  default: false
});

