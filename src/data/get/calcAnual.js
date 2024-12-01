export const calcAnual = (dados = []) => {
  const registros = Array.isArray(dados) ? dados : [];
  const anoMap = {};

  registros.forEach((registro) => {
    const { valor, data, situacao } = registro;

    if (situacao === "aberto") {
      const date = new Date(data);
      const ano = date.getFullYear(); // Extraímos o ano

      // Focamos no ano de 2024
      if (ano === 2024) {
        if (!anoMap[ano]) {
          anoMap[ano] = 0;
        }

        // Acumula o valor no ano correspondente
        anoMap[ano] += valor;
      }
    }
  });

  // Retorna um array de objetos com o total acumulado por ano
  return Object.keys(anoMap).map((year) => {
    return {
      valorAberto: anoMap[year],
      ano: year, // Formato 'YYYY'
    };
  });
};