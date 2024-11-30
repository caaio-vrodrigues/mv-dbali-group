// src/data/executeGet.js
import { testTbl_query1 } from '@/data/get/testTbl_query1'; // Importando getQuery

export const fetchDataAndStore = async (query, setData) => {
  try {
    const response = await fetch('http://localhost:3001/get-dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }), // Enviando a query no corpo da requisição
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Dados obtidos com sucesso!', result);
      setData(result); // Armazenando os dados no contexto
      return result; // Retornando os dados obtidos
    } else {
      console.error('Erro ao obter dados:', result.message);
      return null; // Retornando null em caso de erro
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    return null; // Retornando null em caso de erro
  }
};

export const executeGet = async (setData) => {
  const { query } = await testTbl_query1(); // Obtendo a query
  return await fetchDataAndStore(query, setData); // Chamando a nova função que armazena os dados
};