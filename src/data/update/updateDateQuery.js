export const updateDateQuery = async () => {
  const gerarDatas = () => {
    const totalMeses = 12;
    const diasPorMes = 30;
    const datas = [];

    for (let mes = 0; mes < totalMeses; mes++) {
      for (let dia = 1; dia <= diasPorMes; dia++) {
        const data = `2024-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        datas.push(data);
      }
    }
    return datas;
  };

  const query = 'UPDATE test_tbl SET data = ? WHERE id = ?';
  const datas = gerarDatas();

  return { query, datas };
};