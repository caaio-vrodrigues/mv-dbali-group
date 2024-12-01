export const calcMensal = (dados = []) => {
  const registros = Array.isArray(dados) ? dados : [];
  const mesMap = {};

  registros.map((registro) => {
    const { valor, data, situacao } = registro;

    // Considera apenas situações "aberto"
    if (situacao === "aberto") {
      const date = new Date(data);
      const mesAno = `${date.getFullYear()}-${date.getMonth() + 1}`; // Formato 'YYYY-MM'

      // Inicializa o mês no mapa se ainda não existir
      if (!mesMap[mesAno]) {
        mesMap[mesAno] = 0;
      }

      // Acumula o valor no mês correspondente
      mesMap[mesAno] += valor;
    }
  });

  // Retorna um array de objetos com o total acumulado por mês
  return Object.keys(mesMap).map((mes) => {
    return {
      valorAberto: mesMap[mes],
      mesAno: mes, // Formato 'YYYY-MM'
    };
  });
};