import { ListaDeGastos } from 'Interfaces/ListaDeGastos';
import { atom } from 'recoil';

export const ListadeGastos = atom<ListaDeGastos[]>({
  key: 'ListadeGastos',
  default: []
});

//Credito

export const LimiteCartão1 = atom<number>({
  key : 'cartao1limite',
  default: 9000
});

export const LimiteCartão2 = atom<number>({
  key : 'cartao1limite2',
  default: 16000
});

export const ModalCredito = atom({
  key: 'Credito',
  default: false
});

export const ModalCredito2 = atom({
  key: 'Credito2',
  default: false
});

//Doacao

export const ModalDoacao = atom({
  key: 'BtnDoacao',
  default: false
});



export const ModalExtrato = atom({
  key: 'BtnExtrato',
  default: false
});


export const ModalInvestimentos= atom({
  key: 'BtnInvestimento',
  default: false
});


export const EmprestimoA = atom({
  key: 'Emprestimo',
  default: true
}
);



export const BotaoModal= atom({
  key: 'BtnModal',
  default: false
});