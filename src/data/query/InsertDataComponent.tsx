import React from 'react';
import { executeInsert } from '@/data/executeInsert';
import { queryTest } from '@/data/query/queryTest';

export const InsertDataComponent = () => {
  const handleInsertData = async () => {
    const getQuery = queryTest();
    await executeInsert((await getQuery).query, (await getQuery).valores);
    //Aqui você pode adicionar um feedback ao usuário após a inserção
  };

  return (
    <div>
      <h1>Iniciar Inserção de Dados</h1>
      <button onClick={handleInsertData}>Inserir Dados</button>
    </div>
  );
};