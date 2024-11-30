export const queryTest = async () => {
  const gerarValores = () => {
    const totalMeses = 12;
    const diasPorMes = 30;
    const valores = [];

    for(let mes = 0; mes < totalMeses; mes++){
      for(let dia = 0; dia < diasPorMes; dia++){
        const fornecedor = `Fornecedor${mes * diasPorMes + dia + 1}`;
        const valor = 1.00;
        const situacao = (dia % 2 === 0) ? 'pago' : 'aberto';
        valores.push([fornecedor, valor, situacao]);
      };
    };
    return valores;
  };

  const query = 'INSERT INTO test_tbl (fornecedor, valor, situacao) VALUES ?';
  const valores = gerarValores();

  return{query, valores};
};

//CRIAR UPDATE