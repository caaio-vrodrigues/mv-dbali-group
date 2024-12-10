export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth()).toString().padStart(2, '0'); // Adicionando 1 ao mês e garantindo dois dígitos
  const day = d.getDate().toString().padStart(2, '0'); // Garantindo dois dígitos para o dia
  return `${day}/${month}/${year}`;
};
