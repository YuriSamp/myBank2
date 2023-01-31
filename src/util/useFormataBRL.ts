export const FormataBRL = (value: number) => {
  const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formatador.format(value);
};
