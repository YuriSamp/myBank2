import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRouter } from 'Routes';

describe('Verificando as Rotas', () => {

  test('Testando as rotas', async () => {
    const user = userEvent.setup();
    render(
      <AppRouter />
    );

    await user.click(screen.getByText(/conta/i));
    expect(screen.getByText(/Entradas/i)).toBeTruthy();

    await user.click(screen.getByText(/Doação/i));
    expect(screen.getByText(/GreenPeace/i)).toBeTruthy();

    await user.click(screen.getByText(/cartões/i));
    expect(screen.getByText(/Filtrar/i)).toBeTruthy();

    await user.click(screen.getByText(/Emprestimo/i));
    expect(screen.getAllByText(/Pegar Emprestimo/i)).toBeTruthy();

    await user.click(screen.getByText(/Investimento/i));
    expect(screen.getByText(/Emissor/i)).toBeTruthy();

  });
});