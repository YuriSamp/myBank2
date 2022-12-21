import { getByText, render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Extrato } from 'Pages/Extrato';
import { RecoilRoot } from 'recoil';

async function TestaInputUsuario(Descricao: string, Valor: string, Data: string, OpcaoDePagamento: number,) {
  const user = userEvent.setup();

  //input descricao da compra
  await user.click(screen.getByPlaceholderText(/Descricao/i));
  await user.keyboard(Descricao);

  //input de valor da compra
  await user.click(screen.getByPlaceholderText(/0,00/i));
  await user.keyboard(Valor);

  //input de data da compra
  await user.click(screen.getByPlaceholderText('dd/mm/aaaa'));
  await user.keyboard(Data);

  //Selecionando o metodo de pagamento
  if (OpcaoDePagamento === 1) await user.click(screen.getByTitle(/debito/i));
  if (OpcaoDePagamento === 2) await user.click(screen.getByTitle(/credito1/i));
  if (OpcaoDePagamento === 3) await user.click(screen.getByTitle(/credito2/i));

  //Finalizando a comrpa
  await user.click(screen.getByText(/Salvar/i))
}

describe('Testando a parte de extrato', () => {
  test('submetendo o formulario com data errada', async () => {
    render(
      <RecoilRoot>
        <Extrato />
      </RecoilRoot>
    )
    TestaInputUsuario('Teste de compra', '300', '02/13/2022', 1)
    screen.findByText('Data invalida')
  })

  test('submetendo o formulario com entrada de dinheiro via credito no cartão 1', async () => {
    render(
      <RecoilRoot>
        <Extrato />
      </RecoilRoot>
    )
    TestaInputUsuario('Teste de compra', '300', '02/13/2022', 2);
    screen.findByText(/não tem como receber dinheiro em credito/i);
  })

  test('submetendo o formulario com entrada de dinheiro via credito no cartão 2', async () => {
    render(
      <RecoilRoot>
        <Extrato />
      </RecoilRoot>
    );
    TestaInputUsuario('Teste de compra', '300', '02/13/2022', 3);
    screen.findByText(/não tem como receber dinheiro em credito/i);
  });
});