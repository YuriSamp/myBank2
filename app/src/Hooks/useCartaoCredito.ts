import { useRecoilValue } from 'recoil';
import { ListadeGastos } from 'State/atom';

export const useCartaoCredito = (tipo : number) => {

  function testaOpcaoPagamento(value : number | undefined) {
    if(value ===tipo){
      return true;
    }
  }
  
  const gastos = useRecoilValue(ListadeGastos);
  const gastosNoCartao = gastos.filter((item) => testaOpcaoPagamento(item.opcaoPagamento));
  const GasotsNumero = gastosNoCartao.map(item => (item.Preco));
  const GastosTotais =  Number(GasotsNumero.reduce((a, b) => (a) + (b), 0).toFixed(2));
  return GastosTotais;
};