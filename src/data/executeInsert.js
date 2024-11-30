export const executeInsert = async (query, valores) => {
  try {
    const response = await fetch('http://localhost:3001/insert-dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, valores }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log('Dados inseridos com sucesso!', result);
    } else {
      console.error('Erro ao inserir dados:', result.message);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}