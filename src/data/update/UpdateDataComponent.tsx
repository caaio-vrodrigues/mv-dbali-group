import React from 'react';
import { executeUpdate } from '@/data/update/executeUpdate';
import { updateDateQuery } from '@/data/update/updateDateQuery';

export const UpdateDataComponent = () => {
  const handleUpdateData = async () => {
    const { query, datas } = await updateDateQuery();
    await executeUpdate(query, datas);
    // Aqui você pode adicionar um feedback ao usuário após a atualização
  };

  return (
    <div>
      <h1>Iniciar Atualização de Dados</h1>
      <button onClick={handleUpdateData}>Atualizar Datas</button>
    </div>
  );
};