export const calcPorDia = (dados = [], diasMesAno = []) => {
  const registros = Array.isArray(dados) ? dados : [];
  let totalAberto = 0; // Inicializa o total

  // Itera pelos objetos do array diasMesAno
  diasMesAno.forEach(({ dia, mes, ano }) => {
    registros.forEach((registro) => {
      const { valor, data, situacao } = registro;

      // Considera apenas situações "aberto"
      if (situacao === "aberto") {
        const date = new Date(data);

        // Verifica se o dia, mês e ano correspondem aos parâmetros recebidos
        if (date.getDate() === dia && (date.getMonth() + 1) === mes && date.getFullYear() === ano) {
          totalAberto += valor; // Acumula o valor
        }
      }
    });
  });

  // Retorna um array com o total acumulado
  return [{ totalAberto }];
};