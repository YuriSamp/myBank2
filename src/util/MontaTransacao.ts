import { useAdicionaEvento } from 'Hooks/useAdicionarEntrada';

export function montaTransacao(
  Preco: number,
  Descricao: string,
  Data: string,
  id: string,
  opcaoPagamento: number
) {
  const Transacao = {
    Preco,
    Descricao,
    Data,
    id,
    opcaoPagamento,
  };
  return Transacao;
}
