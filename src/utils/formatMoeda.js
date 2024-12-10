export const formatMoeda = (value) => {
  return value.toLocaleString('pt-BR',{
    style: 'currency',
    currency: 'BRL'
  });
};