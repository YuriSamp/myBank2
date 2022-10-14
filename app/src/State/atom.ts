import { ListaDeGastos } from 'Interfaces/ListaDeGastos';
import { atom } from 'recoil';

export const ListadeGastos = atom<ListaDeGastos[]>({
  key: 'ListadeGastos',
  default: []
});

export const ModalExtrato = atom({
  key: 'BtnExtrato',
  default: false
});

export const ModalDoacao = atom({
  key: 'BtnDoacao',
  default: false
});

export const ModalInvestimentos= atom({
  key: 'BtnInvestimento',
  default: false
});

export const EmprestimoA = atom({
  key: 'Emprestimo',
  default: false
}
);

export const BotaoModal= atom({
  key: 'BtnModal',
  default: false
});