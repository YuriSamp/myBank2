import { getByText, render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Doacao } from 'Pages/Doação';
import { RecoilRoot } from 'recoil';

describe('testes da pagina Doação', () => {
  test('o valor doado sendo negativo', async () => {
    const user = userEvent.setup();
    render(
      <RecoilRoot>
        <Doacao />
      </RecoilRoot>
    );

    const botao = screen.getAllByText(/Faça uma doação/i);
    await user.click(botao[0]);
    await user.keyboard('-1');

    const mensagemDeErro = screen.findByText(/O valor doado não pode ser negativo/i)
    await user.keyboard('-1');
    mensagemDeErro.then(res => {
      expect(res).toBe('');
    })
  });

  test('O valor doado é menor que o saldo', async () => {
    const user = userEvent.setup();
    render(
      <RecoilRoot>
        <Doacao />
      </RecoilRoot>
    );

    const botao = screen.getAllByText(/Faça uma doação/i);
    await user.click(botao[0]);
    await user.keyboard('200')

    const mensagemDeErro = screen.findByText(/Não possui saldo suficiente para doar/i)
    await user.keyboard('-1');
    mensagemDeErro.then(res => {
      expect(res).toBe('');
    })

  });
});