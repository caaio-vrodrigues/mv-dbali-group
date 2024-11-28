import React from 'react';
import { queryTest } from '@/data/query/queryTest';

const InsertDataComponent = () => {
  const handleInsertData = async () => {
    const query = queryTest();

    try {
      const response = await fetch('http://localhost:3001/insert-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao inserir dados.');
    }
  };

  return (
    <div>
      <h1>Iniciar Inserção de Dados</h1>
      <button onClick={handleInsertData}>Inserir Dados</button>
    </div>
  );
};

export default InsertDataComponent;