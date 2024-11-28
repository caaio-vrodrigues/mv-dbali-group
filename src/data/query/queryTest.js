const fornecedores = [
  "Fornecedor A", "Fornecedor B", "Fornecedor C", 
  "Fornecedor D", "Fornecedor E", "Fornecedor F", 
  "Fornecedor G", "Fornecedor H", "Fornecedor I", 
  "Fornecedor J", "Fornecedor K", "Fornecedor L", 
  "Fornecedor M", "Fornecedor N", "Fornecedor O", 
  "Fornecedor P", "Fornecedor Q", "Fornecedor R", 
  "Fornecedor S", "Fornecedor T", "Fornecedor U", 
  "Fornecedor V", "Fornecedor W", "Fornecedor X", 
  "Fornecedor Y", "Fornecedor Z"
];

// Função para gerar a query de inserção
export const queryTest = () => {
  let query = "INSERT INTO tbl_test_2 (data, valor, fornecedor) VALUES";
  const ano = 2024;
  const valores = [];

  for (let mes = 0; mes < 12; mes++) {
    for (let dia = 1; dia <= 31; dia++) {
      const data = new Date(ano, mes, dia);
      if (data.getFullYear() === ano && data.getMonth() === mes) {
        const fornecedor = fornecedores[Math.floor(Math.random() * fornecedores.length)];
        valores.push(`('${data.toISOString().split('T')[0]}', 1.00, '${fornecedor}')`);
      };
    };
  };

  query += valores.join(", ") + ";";
  return query;
};