export const executeUpdate = async (query, datas) => {
  try {
    for (let i = 0; i < datas.length; i++) {
      const response = await fetch('http://localhost:3001/update-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, values: [datas[i], i + 1] }), // Atualiza data para o id correspondente
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`Data atualizada com sucesso para o ID ${i + 1}:`, result);
      } else {
        console.error(`Erro ao atualizar dados para o ID ${i + 1}:`, result.message);
      }
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};