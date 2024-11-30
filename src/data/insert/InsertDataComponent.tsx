import React from 'react';
import { executeInsert } from '@/data/insert/executeInsert';
import { insertQuery } from '@/data/insert/insertQuery';

export const InsertDataComponent = () => {
  const handleInsertData = async () => {
    const getQuery = insertQuery();
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