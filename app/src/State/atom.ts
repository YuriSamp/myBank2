import { ListaDeGastos } from 'Interfaces/IListaDeGastos';
import { atom } from 'recoil';

export const ListadeGastos = atom<ListaDeGastos[]>({
  key: 'ListadeGastos',
  default: [
    // {
    //   'id': '',
    //   'Descricao': '',
    //   'Preco': '',
    //   'Data': new Date('')
    // }
  ]
});

export const BotaoModal = atom({
  key: 'Btn',
  default: false
});

