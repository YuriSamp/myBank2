import { ListaDeGastos } from 'Interfaces/ListaDeGastos';

export function MoneyHandle(arr: ListaDeGastos[]) {
  const Entradas = arr.map((item) => {
    return item.Preco;
  });

  const EntradasPositivas = arr.map((item) => {
    if (item.Preco > 0) {
      return item.Preco;
    } else {
      return 0;
    }
  });

  const Gastos = arr.map((item) => {
    if (item.Preco < 0) {
      return item.Preco;
    } else {
      return 0;
    }
  });

  const SomaDasEntradas = Number(
    EntradasPositivas.reduce((a, b) => a + b, 0).toFixed(2)
  );
  const SomaDosGastos = Number(Gastos.reduce((a, b) => a + b, 0).toFixed(2));
  const Total = Number(Entradas.reduce((a, b) => a + b, 0).toFixed(2));

  return { Total, SomaDasEntradas, SomaDosGastos };
}
