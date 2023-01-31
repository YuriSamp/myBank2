import { getByText, render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Extrato } from 'Pages/Extrato';
import { RecoilRoot } from 'recoil';

//TODO

async function TestaInputUsuario(Descricao: string, Valor: string, Data: string, OpcaoDePagamento: number,) {
  const user = userEvent.setup();

  render(
    <RecoilRoot>
      <Extrato />
    </RecoilRoot>
  );

  //input descricao da compra
  await user.click(screen.getByPlaceholderText(/Descricao/i));
  await user.keyboard(Descricao);

  //input de valor da compra
  await user.click(screen.getByPlaceholderText('0,00'));
  await user.keyboard(Valor);

  //input de data da compra
  await user.click(screen.getByPlaceholderText('dd/mm/aaaa'));
  await user.keyboard(Data);

  //Selecionando o metodo de pagamento
  if (OpcaoDePagamento === 1) await user.click(screen.getByTitle(/debito/i));
  if (OpcaoDePagamento === 2) await user.click(screen.getByTitle(/credito1/i));
  if (OpcaoDePagamento === 3) await user.click(screen.getByTitle(/credito2/i));

  //Finalizando a comrpa
  await user.click(screen.getByText(/Salvar/i));
}

describe('Testando a parte de data', () => {
  test('submetendo o formulario com mes inexistente', async () => {
    await TestaInputUsuario('Teste de compra', '300', '02/13/2022', 1)
    screen.findByText('Data invalida')
  });

  test('submetendo o formulario com dia inexistente', async () => {
    await TestaInputUsuario('Teste de compra', '300', '32/12/2022', 1)
    screen.findByText('Data invalida')
  });
});

describe('testando a parte do cartão', () => {
  test('submetendo o formulario com entrada de dinheiro via credito no cartão 1', async () => {
    await TestaInputUsuario('Teste de compra', '300', '02/13/2022', 2);
    screen.findByText(/não tem como receber dinheiro em credito/i);
  });

  test('submetendo o formulario com entrada de dinheiro via credito no cartão 2', async () => {
    await TestaInputUsuario('Teste de compra', '300', '02/13/2022', 3);
    screen.findByText(/não tem como receber dinheiro em credito/i);
  });

  test('submetendo o formulario com gasto maior que credito no cartão 1', async () => {
    await TestaInputUsuario('Teste de compra', '9001', '02/13/2022', 2);
    screen.findByText(/A compra Excede o limite de gastos/i);
  });

  test('submetendo o formulario com gasto maior que credito no cartão 2', async () => {
    await TestaInputUsuario('Teste de compra', '16001', '02/13/2022', 3);
    screen.findByText(/A compra Excede o limite de gastos/i);
  });
})