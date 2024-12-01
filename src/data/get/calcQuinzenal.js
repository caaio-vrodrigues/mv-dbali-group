export const calcQuinzenal = (dados = []) => {
  const registros = Array.isArray(dados) ? dados : [];

  const quinzenaMap = {};

  registros.map((registro) => {
    const { valor, data, situacao } = registro;

    if (situacao === "aberto") {
      const date = new Date(data);
      const mesAno = `${date.getFullYear()}-${date.getMonth() + 1}`; // Formato 'YYYY-MM'

      const dia = date.getDate();
      const quinzena = dia <= 15 ? '1ª Quinzena' : '2ª Quinzena';

      const chave = `${mesAno} ${quinzena}`;

      if (!quinzenaMap[chave]) {
        quinzenaMap[chave] = 0;
      }

      quinzenaMap[chave] += valor; // Acumula o valor na quinzena correspondente
    }
  });

  // console.log("Mapa de quinzenas:", quinzenaMap); // Log do mapa final

  return Object.keys(quinzenaMap).map((chave) => {
    return {
      valorAberto: quinzenaMap[chave],
      data: chave,
    };
  });
};